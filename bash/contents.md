# **BASH** Guide

---

## Using Bash

Most users think of **BASH** and think it as a prompt on a commmand line. This is partially true, but of course does not 
capture the whole picture. **BASH** actually has two modes in which it will exectute. Not to be confused with the two modes
running modes of the CPU. 

- *interactive mode   :* Typing a ***BASH*** command into the terminal.  
- *non-interactve mode:* Running a ***BASH script*** ("./script_name").

Think of a ***BASH script*** as essentially just a list of ***BASH*** commmands, that are executed sequentially by the shell.
For the most part that last statement is true. However, *scripts* also support logical statements, loops, variables, 
functions, and much more... Writing *scripts* allows us to automate certain logic to make our life or job breazier.

We'll start with the basics of an interactive shell. Once you are familiar with these you will be able to combine them
to make *scripts*.

### Important!!!
You should familiarize yourselves greatly with the following two commands.

```
$ man man
$ man apropos
```

To be brief, *man* stands for "manual" and it is the command that will pull up the text manual for many things. Needless to 
say it is quite essential to self-tutoring and becoming a great systems programmer.
(tbh I dont know what apropos comman does :laugh:, however there is a great way to find out![by running it])

The *man* command stands for "manual"; it opens documentaion (so called "man pages") on various topics. You use it by 
running the command `man [topic]` at the **BASH** prmpt, where [topic] is the name of the 'page' you want to read. Note that
many of these 'pages' are considerbly longer than one printed page; never the less, the name persists. Each command 
(application) on your system is likely to have a man page. There are pages for other things too, such as system calls or
specific configuration files. 
In this guide we will only be covering commands.

___**Note: **___ if you are looking for information of **BASH** built-ins (commands provided by **BASH**/not exteral) then you
should look in `man bash` instead. **BASH's** manual is extensive and detailed. It is an excellent reference, albeit more 
technical than this guide.

**BASH** also offers a `help` command which contains brief summaries of it's built-in commands.

```
$ help
$ help read
```

---

### Prompts

Because we are using **BASH** as our shell we will see a '$' at the begining of each of our lines in the terminal. 
Traditionally the terminal liek will either with a $, % or a #. Each of these give us a hint about the *shell** we are 
currently using, and they well be explained below:

** $ ** <-- compatible with **Bourne Shell** (i.e. Posix shell, Korn Shell, BASH)
** % ** <-- C shel (i.e. csh, tcsh)
** # ** <-- this indicates shell is running as *superuser* [*dangerous*]

Prefixing the prompt symbol, will very likely be a lot more text. Prompts are often highly individualized.

---

___**Recall:**___
***interactive mode: A mode of operation where a prompt asks you for one command at a time.***
***Script: A file that contains a sequence of commands to be executed one after the other.***

---

## Contents

This guide has been organized into several distinct section. The sections are generally intended to be read in the order in
which they are presented. If you skip ahead to a later section, you may find yourself missing some backround information from
the previous sections. (Links to relevant sections are not always provided when a topic is mentioned.)

1. Commands & Arguments
    -- Types of commands; argument splitting; writing scrips.

2. Special Characters

3. Parameters
    -- Variables; special parameters; parameter types; parameter expansions.

4. Patterns
    -- Globs; filename matching; extended globs; brace expansion; regular expressions.

5. Tests & Conditions
    -- Exit status; && and ||; if, test and [[; while, until and for, case & select.

6. Arrays
    -- Arrays & associative arrays.
7. I/O
    -- Redirection; here documents; here strings; pipes; process substitution.

8. Compound Commands
    -- Subshells; command grouping; arithmetic evaluation; functions; aliases.

9. Sourcing
    -- Reading commands from other files.

10. Job Control

11. Practices
    -- Choosing your shell; quoting; readability; debugging.

---
