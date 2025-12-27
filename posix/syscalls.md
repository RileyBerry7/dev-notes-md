
# POSIX SYSCALLS

---

## **Process Control**

These system calls perform the task of process creation, process termination, etc.
The Linux System calls under this are *fork()* , *exit()* , *exec()*.

### wait()
  - **Parameters:** 1. int *status <- (return status of reaped process)
                    1. NULL        <- (ignored) // default
  
  - **Returns:**       pid_t       <- (*PID* of reaped process)

The calling process blocks itself and relinquies control of the CPU.
The *BLOCKED* state only ends when some child of the process is terminated. 
Think of *wait()* as essentially a *'reap request'*. 
Meaning the calling process will not return to a **READY** state until its request is fufilled. 
Once the request is made, the *Kernel* will reap any *ZOMBIE* process. 
Upon reaping, the *PID* of the child process is sent to the parent process, which is returnd by *wait()*. Finally our caller 
process(parent) will return to a **READY** state.

### sigwait():
// int sigwait(const sigset_t *set, int *sig);


### fork()
  - *Parameters*: None
  - *Returns*:    pid_t <- (*PID* of child or 0)

A new process is created by the fork() system call.
A new process may be created with fork() without a new program being run-the new sub-process simply continues to execute exactly the same program that the first (parent) process was running.
It is one of the most widely used system calls under process management.

### exit()
The exit() system call is used by a program to terminate its execution.
The operating system reclaims resources that were used by the process after the exit() system call.

### exec()
A new program will start executing after a call to exec()
Running a new program does not require that a new process be created first: any process may call exec() at any time. The currently running program is immediately terminated, and the new program starts executing in the context of the existing process.

---

## **File Management**
File management system calls handle file manipulation jobs like creating a file, reading, and writing, etc. 
The Linux System calls under this are open(), read(), write(), close().

### open():
It is the system call to open a file.
This system call just opens the file, to perform operations such as read and write, we need to execute different system call to perform the operations.

### read():
This system call opens the file in reading mode
We can not edit the files with this system call.
Multiple processes can execute the read() system call on the same file simultaneously.

### write():
This system call opens the file in writing mode
We can edit the files with this system call.
Multiple processes can not execute the write() system call on the same file simultaneously.

### close():
This system call closes the opened file.
Device Management :
Device management does the job of device manipulation like reading from device buffers, writing into device buffers, etc. The Linux System calls under this is ioctl().

### ioctl():
ioctl() is referred to as Input and Output Control.
ioctl is a system call for device-specific input/output operations and other operations which cannot be expressed by regular system calls.

---

## **Information Maintenance**
It handles information and its transfer between the OS and the user program. In addition, OS keeps the information 
about all its processes and system calls are used to access this information. The System calls under this are 
getpid(), alarm(), sleep().

### getpid():
getpid stands for Get the Process ID.
The getpid() function shall return the process ID of the calling process.
The getpid() function shall always be successful and no return value is reserved to indicate an error.

### alarm():
This system call sets an alarm clock for the delivery of a signal that when it has to be reached.
It arranges for a signal to be delivered to the calling process.

### sleep():
  - **Parameters:** 1. unsigned int seconds <- (number of seconds to sleep)

This System call suspends the execution of the currently running process for some interval of time
Meanwhile, during this interval, another process is given chance to execute

---

## **Communication**
These types of system calls are specially used for inter-process communications.
Two models are used for inter-process communication

**(1) Message Passing**(processes exchange messages with one another)

**(2) Shared memory**(processes share memory region to communicate)
The system calls under this are *pipe()* , *shmget()* , *mmap()*.

### kill():
  - **Parameters:** 1. pid_t pid <- (process id)
                    2. int sig <- (signal number)

The kill() system call is used to send a signal to a process.

### pipe():
The pipe() system call is used to communicate between different Linux processes.
It is mainly used for inter-process communication.
The pipe() system function is used to open file descriptors.

### shmget():
shmget stands for shared memory segment.
It is mainly used for Shared memory communication.
This system call is used to access the shared memory and access the messages in order to communicate with the process.

### mmap():
This function call is used to map or unmap files or devices into memory.
The mmap() system call is responsible for mapping the content of the file to the virtual memory space of the process.

### mq_open():

### mq_send(mq, msg_ptr, msg_size, msg_prio):
  - **Parameters:** 1. mqd_t        mqdes
                    2. const  char* msg_ptr 
                    3. size_t       msg_len
                    4. unsigned int msg_prio);
  - **Returns:**
Sends a message to a message queue.


### mq_receive():
  - **Parameters:** 1. mqd_t  mq
                    2. char   msg_ptr[msg_len],
                    3. size_t msg_size
                    4. size_t msg_len, unsigned int *msg_prio
  
  - **Returns:** Success: ssize_t : Size of message 
                 Fail   : -1

Recieves a message from a message queue.
mq_receive() removes the oldest message with the highest priority
       from the message queue referred to by the message queue descriptor
       mqdes, and places it in the buffer pointed to by msg_ptr.  The
       msg_len argument specifies the size of the buffer pointed to by
       msg_ptr; this must be greater than or equal to the mq_msgsize
       attribute of the queue (see mq_getattr(3)).  If msg_prio is not
       NULL, then the buffer to which it points is used to return the
       priority associated with the received message.

### mq_close():

---


## **Multi-threading**

These types of system calls are specifically used to enable multi-threading within a process.
Threads are sometimes called light-weight processes.
To be more specific, threads break down a single process into multiple threads, all which execute at the "same time".
Threads essentially enable concurrency at at an intra-process level.
Threads of a process share all memory segments *except* for the **Stack**. Threads have independent *call stacks*.
In theory memory across *call stacks* is still accesible, but you probably shouldn't do that.
**Concurrency** exists without threads, but threads streamline **Shared Memory** between tasks.

Beware there be *Deadlocks* and *Race Conditions*.

---

## POSIX Threads

In C language, POSIX <pthread.h> standard API (Application program Interface) for all thread related functions. It allows us to create multiple threads for concurrent process flows. The type pthread_t is a unique identifier for a thread. In other words, think of this value as a key or an opaque ID mapping to a thread.

You may have to compile with one of these:
```
gcc -pthread file.c
gcc -lpthread file.c
```

### pthread_create()
  - **Parameters:** 1. pthread_t*             thread            // thread ID
                    2. const pthread_attr_t*  atrr              // attributes (NULL)
                    3. void*                  (*routine)(void*) // function pointer
                    4. void*                  arg);             // argument   (NULL | struct* for multiple args)
 
- **Returns:**    - Integer value. 0 for success, -1 for failure 

### pthread_exit()
	Terminates the calling thread. This does not affect other threads.

### pthread_join()
	Waits for the specified thread to terminate. It blocks the calling thread until the target thread finishes.

### pthread_detach()
	Detaches a thread, meaning it will automatically release resources when it terminates without needing pthread_join()
.

### pthread_cancel()
	Requests cancellation of a thread. The thread must check periodically for cancellation to exit safely.

### pthread_self()
	Returns the thread ID of the calling thread.

### pthread_equal()
	Compares two thread IDs and returns non-zero if they are the same, zero otherwise.

### pthread_mutex_init()
	Initializes a mutex, which is used to prevent race conditions in concurrent programming.

### pthread_mutex_destroy()
	Destroys a mutex when it's no longer needed.

### pthread_mutex_lock()
	Locks a mutex. If the mutex is already locked by another thread, the calling thread will be blocked.

### pthread_mutex_unlock()
	Unlocks a mutex that was previously locked by the calling thread.

### pthread_cond_init()
	Initializes a condition variable, used for synchronization between threads.

### pthread_cond_destroy()
	Destroys a condition variable.

### pthread_cond_wait()
	Blocks the calling thread until the condition variable is signaled.

### pthread_cond_signal()
	Wakes up one thread that is waiting on a condition variable.

### pthread_cond_broadcast()
	Wakes up all threads waiting on a condition variable.

