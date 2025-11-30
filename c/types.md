
# Types in C Language



## **Structs**

What is a struct?
  - A struct is a collection of related data members (variables).
  - These members can be different types.
  - Our collection of variables is contained within a single block of memory.
  ~ Very similar to how classes operate in C++. (without methods of course)

### Defining Struct Type

'''
//     tag_name
struct Player {
  
  char name[20];
  int  score;
};
'''

### Instanciating a Struct

'''
struct Player player1;
struct Player player2;
'''

### Using a Struct

''' 
player1.name = "Riey";
player1.score = 69;
'''

