
https://javascript.info/

## Introduction

---

### What is JavaScript?

With a syntax heavily influenced by C...

The language of JavaScript or JS, was built by *Brenden Eich* in just 10 days in May of 1995. At this time he was also working on the Netscape Navigator Browser. *Netscape Navigator* was a a revolutionary Web browser that greatly popularized the use of the World Wide Web and by extension the Internet as a whole. The NN Web browser was praised for its simple graphics and user-freindly interface, and since it was first Web browser to support JavaScript, it quickly became the dominant Web browser.

However the success of Netscape's success was short lived. By the mid to late 90s Microsoft's *Windows 95* had become the dominant operating system on the market. Alongside Windows 95, Microsoft also released an complementary Web browser called *Internet Explorer*. The iconic pairing of this OS and Web browser led to the direct decline of Netscape Navigator. On March 31st 1998, Netscape released the bulk of their the NN browser source code under a public licesne. Now effectively open-source, this would as a result lead to the creation of the *Mozilla* community, a global open-source organization dedicated to keeping the Internet  a free and accesible public resource. The namesake stemmed from the origianl codename of the Netscape Navigator browser, being "Mosaic Killer" or "Mozilla"(Mosaic being the name of the Web browser they wanted to replace). The Mozilla community was eventually formalized int the US Non-profit *Mozilla Foundation*, who in 2004 released the *Firefox* browser, an open-source Web browser direclry built off of the Netscape source code.


### Why is it called JavaScript?

Digressing back to *JavaScript*. Js was initially created to make Web pages "alive", or in other words facilitate the much desired element of interactivity on Web pages.

The initial name for JS was actually "LiveScript". Originally, JS was intended to be a scripting language to complement *Java*. Time would prove that the two languages could not be more unrelated to one another. In fact the name JavaScript was just a marketing ploy by Netscape to captialize on the popularity of Java at the time. Eventually JS would evolve into a fully-fledged language with its own formialized specification documentation known as the **ECMAS Script**.

The programs in this language are typically called *scripts*. They can be written right in a Web page's HTML and can be run automatically when the page is loaded. Scripts are provided and executed as plain text. 


### JavaScript Execution

Today JS can execute not only in the browser, but also on the server, or actually on any device/machine because of a special program called the **JavaScript Engine**. JS scripts need not be compiled or preprocessed, they are instead directly executed by the JavaScript Engine. 

Web browsers have an embedded JS Engine, often referred to as the **JavaScript Virtual Machine (JS VM).** This JS VM is what makes JS so portable much like that of Java and the JVM. Even another similarity can be found with the JIT coimpiler of the JS Engine which facilitates relatively fast execution of JS code via low-level optimizations. So we have established that JS is both highly portable and relatively fast.

Each Web browser actually has its own JS Engine and Interpreter (JSVM). This extends to the JS-Engine bytecode.

- **V8**            : Google Chrome, Opera GX, Microsoft Edge.
- **SpiderMonkey**  : Firefox.


| Execution Tool | Purpose                 | Method 
|----------------|-------------------------|----------------------------------------------------
| JS Engines     | Runs JavaScript Code    | Parses/Generates JS-Engine bytecode fo the JS VM
|----------------|-------------------------|----------------------------------------------------
| JS VM          | Runs JS-Engine Bytcode  | Interprets bytcode -> directly executes it.
|----------------|-------------------------|----------------------------------------------------
| JVM            | Runs Java Bytecode      | Completely unrelated to JavaScript.


### JS Engine Pipeline

1. **Parsing:** JS source code is used to generate an AST (Abstract Syntax Tree).

2. **Intermediate Code Generation:** JS-Engine bytecode is generated from AST.

3. **Execution:** Bytecode is executed by the Engine-specific interpreter. (JS VM)
              |   Machine code is executed on the CPU if any is present.   (CPU) 

4. **Optimization:** During bytecode execution, if the Engine detects a highly optimizable pattern, it will compile that section into highly optimized native machine code. (JIT Compiler)


### What can in-browser JavaScript do?

### What CAN’T in-browser JavaScript do?

### What makes JavaScript unique?

### Summary

- JavaScript is agreat language to learn for beginners.
- JavaScript is a terrible langage to learn for beginners.
