
# C Common Libraries

## Standard I/O Library
Header: `#include <stdio.h>`

### Console API
printf();   // print formatted output to stdout
scanf();    // read formatted input through stdin
getchar();  // read a single character
putchar();  // write a single character
puts();     // write a string with a newline
fgets();    // read a string safely

### File API
fopen();      // Open a file and return a FILE*
fclose();     // Close a file
fread();      // Read binary data
fwrite();     // Write binary data
fprintf();    // Print formatted output to a file
fscanf();     // Read formatted input from a file
fseek();      // Move file position
ftell();      // Get current file position
rewind();     // Reset file position to start
feof();       // Check end-of-file
perror();     // Print error message based on errno

## Standard Library
Header: `#include <stdlib.h>`

### Memory Management
malloc();     // Allocate memory
calloc();     // Allocate and zero-initialize memory
realloc();    // Resize allocated memory
free();       // Free allocated memory

### Primitive Utilities
atoi();       // Convert string to int
atof();       // Convert string to double
strtol();     // Convert string to long
rand();       // Generate pseudo-random number
srand();      // Seed random generator
system();     // Run shell command
exit();       // Terminate program
abs();        // Absolute value (int)

# String Library
Header: `#include <string.h>`

#### String Utilities
strlen();     // Get string length
strcpy();     // Copy string
strncpy();    // Copy with length limit
strcat();     // Concatenate strings
strcmp();     // Compare two strings
strncmp();    // Compare with length limit
strchr();     // Find first occurrence of character
strstr();     // Find substring
memset();     // Fill block of memory
memcpy();     // Copy block of memory
memcmp();     // Compare memory blocks


# Math Library
Header: `#include <math.h>`

### Common Mathematical Functions
sqrt();       // Square root
pow();        // Power (x^y)
abs();        // Absolute value (int)
fabs();       // Absolute value (float/double)
sin(); cos(); tan();    // Trigonometric functions
asin(); acos(); atan(); // Inverse trig
exp(); log(); log10();  // Exponential and logarithmic
ceil(); floor(); round(); // Rounding functions
fmod();       // Floating-point remainder


## Other Important Libraries
<ctype.h>	Character classification and conversion (isdigit(), toupper()).
<time.h>	Time and date (time(), clock(), difftime(), sleep() on POSIX).
<errno.h>	Error handling (errno, perror(), strerror()).
<assert.h>	Debugging checks with assert().
<stdbool.h>	Defines bool, true, and false.
<stddef.h> / <stdint.h>	Type definitions like size_t, int32_t, NULL, et.
