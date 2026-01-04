## Web-Browser 

---

# Document
Here we will learn to manipulate the a Web-page using JavaScript.

### 1. Browser environment, specs
The JS language was initially created for web-browsers. Since then it has evolved into a language with many uses and platforms.
A platform may be a browser, a web-server, some other host, or even a "Smart" coffee machine given it can run JS. Each of these proved platform-specific functionality. The JavaScript specification calls that a *host environment*.

A *host environment* provides its own objects and functions in addtion to the language core. Web browsers give a means to control Web pages. Node.js provides server-side features, and so on.

Here is a bird's eye view of what we have when JS runs in a Web-browser:

![Alt text](table_1.png "Optional Title")

There is a root object called *window*, and it has two roles.
1. Serves as a global object for for the JavaScript code.
2. Represents the "browser window" and provides an interface for controlling it.

For instance we can use it as a global object:

```js

function sayHi(){
  alert("Hello");
}

window.sayHi();   // <- Global functions are methods of global objects.
```

And we can use it as a browser window, to show the window height:

```js
alert(window.innerHeight);
```

---

### 2. DOM tree

## DOM (Document Object Model)

The **DOM** represents all page content as objects that can be modified.
The *document* object is the main 'entry point' to the page. We can change or create anything on the page using it.

---

### 3. Walking the DOM
### 4. Searching: getElement*, querySelector*
### 5. Node properties: type, tag and contents
### 6. Attributes and properties
### 7. Modifying the document
### 8. Styles and classes
### 9. Element size and scrolling
### 10. Window sizes and scrolling
### 11. Coordinates
