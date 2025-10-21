### **BASH Guide**

---

### Contents

- Commands and Arguments
    - Strings
    - Types of commands
        - Aliases
        - Functions
        - Builtins
        - Keywords
        - Executables
    - Scripts

---

# 1. Commands and Arguments

**BASH** reads commands from its input (which is ususally from a terminal or file). Each line of input that it reads is
treated as a command -- an instruction to be carried out. (There are a few advanced cases, such as commands that span multiple
lines, that will be covered later.)

**BASH** divides each line up into words that are demarcated by a whitespace character (spaces and tabs). The first word in 
the line is the name of the command to be executed. All remaining words become *arguments* to that command (options, filenames,etc.).

Let us assume that we are in an empty directory... to try out these commands, please create an empty directory called 'test'
and enter said directory with the following commands:

```
$ mkdir test     # make directory named "test"
$ cd test        # change directory to "test"
```

```
$ ls             # list contents of curr dir
$ touch a b c    # touch(update) timestamp of 'a', 'b' and 'c', or create new file if none exists.
$ ls             # list
a b   c
```

The character ===#=== at the start of a word indicates a comment. Any words following a comment are ignored by the shell.

```
$ rm *        # Remove all files in the current directory.
```

===rm=== is just an application that removes all the files that it is given. * is a *glob*. It basically means *all*, and in 
this case it means *all files* in the current directory. We will discuss globs more later.

---

You may have noticed the spaces between the names 'a', 'b' and 'c' above, and how ther is 'extra' ws between 'b' and 'c'; that
is the thing, amount of whitespace doesnt matter, its all treated the same by the shell. To reiterate, the amount of 
whitespace between *arguments* does **not** matter!

```
$ echo This is a test.
This is a test
$ echo This      is    is   a       test.
This is a test.
```

===*echo*=== is a command that prints its arguments to the *standard output* (which in our case is the terminal). In this example we provide the *echo* command with four arguments: being four string, echo takes these *args* and prints them out one by one with a space between each one. The exact same thing happense regardless of how the ws is formatted. If we want to keep our
wierd ws formatting, then we need to pass the whole thing as a single string argument via "quotation marks". like so:

```
$ echo "This      is    an  example."
This      is    an  example.
```

Quotes group everything inside them into a single argument. Keep in mind that the quotation marks themselves are **not** part
of the argument -- **BASH** removes them before handing the argument to *echo*. 

___***Be Careful of the Following Scenerio:***___
```
$ ls                                          # There are two files in the current directory.
The secret voice in your head.mp3  secret
$ rm The secret voice in your head.mp3        # Executes rm with 6 arguments; not 1!
rm: cannot remove `The': No such file or directory
rm: cannot remove `voice': No such file or directory
rm: cannot remove `in': No such file or directory
rm: cannot remove `your': No such file or directory
rm: cannot remove `head.mp3': No such file or directory
$ ls                                          # List files in the current directory: It is still there.
The secret voice in your head.mp3             # But your file 'secret' is now gone!
```

You need to make sure you quote your filenames correctly, else you will end up deleting something you didnt intend to! rm takes
filenames as arguments. If we have multiple words not enclosed by quotes, then **BASH** will treat each word as the an argument, thus each word will be a passed in filename. This is the corrected command:

```
$ rm "The secret voice in your head.mp3"
```


