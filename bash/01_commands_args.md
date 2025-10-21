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
a b c
```


