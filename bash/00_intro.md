# BASH Guide

[Guide URL: ](https://mywiki.wooledge.org/BashGuide)

Credit for creating this guide goes to:
-- Lhunath *(primary author)*
-- GreyCat

## About This Guide

Please keep in mind I am *not* the original author of this guide, as I am simply a student who enjoys to transcribe as they learn.
With that out of the way, lets begin. This guide aims to aid people who wish to develop a working understanding of **BASH** basics.
This guide aspires to teach good BASH technique, as well as provide the ability to write simple scripts.

Target Demographic: Beginner users -- no advanced knowledge will be assumed -- understanding of basic computer concepts helps.
                    The only real requirement is the ability to login to a **UNIX** like system and open a terminal interface.

---

## Definition

###*So what even is bash?*
Well first, you should know is that it is an acronymn, so its should be denoted in all caps as **BASH**.
Second, **BASH** is a shell, which hopefully is a type of program you have heard of before. Think of the terminal or 
command-line as just an I/O connection that lets you type to the screen, but on its own it cant do anything real useful. Here 
is where a shell comes in: a shell is a user-program that works closely with the terminal, and under the hood it acts as an
interpreter, thus giving our I/O meaning and purpose. So our shell is essentially the first layer of user-space wherin we 
can actually make use of the OS provided API. Think **system calls** and the sort. The shell can read out input via the
terminal, interpret it, and then subsequently do whatever that specific shell command does, and most likely ask the kernel
for help at some point.

### *Some History*

Cursory knowledge of OS/Shell history will prove quite useful in undertanding what shell is exactly, why it exists, and why we are working with it. Below I have created a non-encompassing overview of some of the most important systems software which
were developed from the 60s to 90s. Please keep in mind how crucial of a time period this was for humanity. The first
turing machine was invented in 1936 by Alan Turing. By the 60s the modern computers were massive mainframes that took up an
entire room and were laughbly expensive. So this really was a pramount period for the development of what we consider to be 
the modern computer. Not to mention how the Internet was also being pioneered at this time. Indeed a critical time period I
hope we can all agree. With that being said lets now jump into the history I mentioned:

| Operating System | year | Signifigance / Breakthrough Feature                              |
|------------------|------|------------------------------------------------------------------|
| Atlas Supervisor | 1962 | virtual memory. 					      	                     |
| MULTICS          | 1965 | file-system + time sharing. 						             |
| IBM OS/360       | 1966 | cross-machine compatibility. 						             |
| UNIX             | 1971 | portable, modular, multi-user. [most influential] 	           	 |
| MS-DOS           | 1981 | brought OS to PCs. 						                         |
| Linux            | 1991 | free/open-source **UNIX**, fostered global collaboration culture |

| Shell            | Year | Significance / Breakthrough Feature                              |
|------------------|------|------------------------------------------------------------------|
| Thompson shell   | 1971 | first **UNIX** shell; redirection & basic scripting.             |
| Bourne shell (sh)| 1979 | standardized **UNIX** scripting              [defined **POSIX**] |
| C shell     (csh)| 1978 | command history, aliases, and C-like syntax                      |
| Bash             | 1989 | **GNU** version of **BS**, free/open-source [**POSIX** compliant]|
| Zsh              | 1990 | modern customization and plugins            [**POSIX** compliant]|

__Extra Context__
**POSIX:** (1988) is a standard set of rules that makes different UNIX-like operating systems behave the same, so software and scripts 
           can run across them without changes. Keep in mind that **POSIX** is not an OS, it is a standardization for UNIX-style OS.

**GNU**: (1984) is a massive library of essential OS tools, free/open-source, developed at MIT AI Lab by Stallman.
          Acronynm = GNUs Not Unix. Was paired with the Linux kernel to define the Linux OS.

Okay after absoring all of that wonderful history, I would say you are quite ready to move on. But first, some more direct
referneces from the guide.

**BASH** is an acronym for **Bourne Again Shell**. It is part of the **GNU** library, it is of course based on **Bourne Shell**and it is compatible with most of its features. 

**Shells** are command interpreters. They are programs that allow us to interface with the OS via commands. Think of it as a 
way for you to talk to your system. The API provided by the OS is powerful yet quite basic, so shells give us more 
functionality. 
  Over our critical time period many shells were developed. A very important feature that was fundamental in giving modern
shells hyper amounts of utility was that of **scripting**. Scripting was functionality that that allowed complex actions to be
done through a shell such as redirecting output of programs, chaining programs together, running programs with special flags,
and many more... Eventually many shells started to allow users to write their own **scripts** which are essentially
user-programs written in the syntax of some shell, so that shell functionality can be automated. Needless to say, the ability
to write scripts is important even today. 
  Think of ***coding*** as a way to build tools, and ***scripting*** as a way to make your tools work together. Another 
important distiction, is that scripts dont have to be compiled. Scripts in general represent an abstraction higher than most 
if not all coding languages, that being said scripts are interpreted by the shell, they are inherently simpler than coding
languages.

---

###***In The Manual:***
*Shell: A (possibly interactive) command interpreter, acting as a layer between the user and the system.*
*Bash: The Bourne Again Shell, a Bourne compatible shell.*

---

## Using **BASH**

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
