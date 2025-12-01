
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

### fork()
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

