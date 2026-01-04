## Web-Browser 

---

# Document
Here we will learn to manipulate the a Web-page using JavaScript.

### 1. Browser environment, specs
The JS language was initially created for web-browsers. Since then it has evolved into a language with many uses and platforms.
A platform may be a browser, a web-server, some other host, or even a "Smart" coffee machine given it can run JS. Each of these proved platform-specific functionality. The JavaScript specification calls that a *host environment*.

A *host environment* provides its own objects and functions in addtion to the language core. Web browsers give a means to control Web pages. Node.js provides server-side features, and so on.

Here is a bird's eye view of what we have when JS runs in a Web-browser:

```mermaid
flowchart TD
  %% Define nodes
  A[Window]:::window
  B[document]:::dom
  C[navigator]:::bom
  D[Object]:::js

  %% DOM Column
  B --> B1[...]
  
  %% BOM Column
  C --> D1[screen]
  C --> D2[location]
  C --> D3[frames]
  C --> D4[history]
  C --> D5[document]
  C --> D6[XMLHttpRequest]
  
  %% JavaScript Objects Column
  D --> J1[Array]
  D --> J2[Function]
  D --> J3[...]

  %% Connections
  A --> B
  A --> C
  A --> D

  %% Styles
  classDef dom fill:#a8f0a0,stroke:#000,stroke-width:1px;  %% green
  classDef bom fill:#a0c4f0,stroke:#000,stroke-width:1px;  %% blue
  classDef js fill:#f0a0a0,stroke:#000,stroke-width:1px;   %% red
  class A window
  class B,B1 dom
  class C,C1,C2,C3,C4,C5,C6 bom
  class D,D1,D2,D3 js
```

### 2. DOM tree
### 3. Walking the DOM
### 4. Searching: getElement*, querySelector*
### 5. Node properties: type, tag and contents
### 6. Attributes and properties
### 7. Modifying the document
### 8. Styles and classes
### 9. Element size and scrolling
### 10. Window sizes and scrolling
### 11. Coordinates
