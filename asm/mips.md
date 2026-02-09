# MIPS Assembly

---

### Example Code

```
main:

# add registers ($t0 and $t1)
li $t0, 66
li $t1, 67

# Add temporary 0 and temporary 1, store in argument 0.
add $a0, $t0, $t1

# Load immediate 1 into value register 0.
li $v0, 1

# System call 1: print integer (argument 0)
syscall

# End the program
li $v0, 0
jr $ra

```

### Machine Code (Hexadeciaml)

```
24080042
24090043
01092020
24020001
0000000c
24020000
03e00008
0a48656c
6c6f204d
49505320
61736d20
3a330a00
```

### Program Output

```
133

* Program execution complete *
```

---


## Registers

### Genearl-Purpose Registers
  
  | Name                | Number    | Alias     | Description
  | ------------------- | --------- | --------- | -------------------------------
  | Zero                | $0        | $zero     | Always 0
  | Assembler Temporary | $1        | $at       | Reserved for assemlber
  | Return Values       | $2  , $3  | $v0 , $v1 | Return value from a function 
  | Function Arguments  | $4  - $7  | $a0 - $a3 | Arguments to a function
  | Temporary Registers | $8  - $15 | $t0 - $t7 | Temporary storage
  | Saved Registers     | $16 - $23 | $s0 - $s7 | Must be saved by procedure if used
  | Temporary Registers | $24 , $25 | $t8 , $t9 | Temporary storage
  | Kernel              | $26 , $27 | $k0 , $k1 | Reserved for the kernel
  | Global Pointer      | $28       | $gp       | points to global/static data
  | Stack  Pointer      | $29       | $sp       | points to the top of the stack
  | Frame  Pinter       | $30       | $fp       | points to the top of the frame
  | Return Address      | $31       | $ra       | return addres for function calls

### Special-Purpose Registers

  | Name                | Number    | Alias     | Description
  | ------------------- | --------- | --------- | -------------------------------
  | HI                  | HI        |           | Remainder of mult / div
  | LO                  | LO        |           | Quotient of mult / div
  | Program Counter     | PC        |           | Insturciton Pointer

### Most Commonly Used Registers

If you are writing *MIPS* asm code by hand you will very likely only be using the following registers:
  
  - **Temportaty Registers**: $t0 - $t9
  - **Saved Registers**     : $s0 - $s7
  - **Function Arguments**  : $a0 - $a3
  - **Return Values**       : $v0 , $v1
  - **Stack Pointer**       : $sp
  - **Frame Pointer**       : $fp
  - **Return Address**      : $ra


--- 

## Syntax

### Jump Instructions

**beq**: Branch if equal   
**bnr**: Branch if *not* equal

## Procedures

### Parameters
There are some registers that are reserved for use as parameters to be passed into procedures.

**Parameters:** $a0, $a1, $a2, $a3

If a procedure requires more than 4 parameteres, then they will be passed on to the stack.

### Return Values

**Return Values:**   $v0, $v1 
**Return Address:**  $ra

ra: stores the instruction of the previous address
this is so that when a procedure is finished executing, contral can naturally return to the instruction just after the procedure call.

### Calling a Procedure

**Jump And Link:** jal
jal procedure_name


