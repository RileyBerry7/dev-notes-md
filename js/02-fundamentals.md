# JavaScript Fundamentals

---

## Hello World


### The "script" Tag

JavaScript programs can be inserted almost anywhere into an HTML document, using the `<script>` tag.
Example:
```
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```

### Legacy <script> Attributes

The<script> tag has a few rarely used attributes that may still be found in older code.

The **Type** attribute    : *<script type= ...    >* <- Used for modern JS modules
The **Language** attribute: *<script language=... >* <- Obsolete
The **Source** attribute  : *<script src=     ... >* <- Path to a script

**Note:**
As a rule, only the simplest of scripts are directly in the HTML file. More complex scripts are to reside in external files that are linked to and then used by the HTML file.

The benefit of having scripts in seperate files, is that the Web browser will download them and store them it its cache so that scripts can be used multiple times without requiring a re-download. This of course reduces traffic and makes pages faster.

If *src* is set, then all script content is ignored.

---
