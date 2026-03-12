# Vim / Neovim Quick Reference

A compact, practical command sheet.  
Focus: **navigation → editing → searching → buffers/files → windows → misc**

---

# Modes
| Mode | Enter | Description |
|-----|------|-------------|
| Normal | `Esc` | Default command/navigation mode |
| Insert | `i` `a` `o` | Insert text |
| Visual | `v` `V` `Ctrl+v` | Select text |
| Command | `:` | Run commands |
| Replace | `R` | Overwrite text |

---

# Most Important Commands (Daily Use)

| Command | Description |
|------|-------------|
| `:w` | save file |
| `:q` | quit |
| `:wq` | save + quit |
| `:q!` | quit without saving |
| `u` | undo |
| `Ctrl+r` | redo |
| `yy` | yank (copy) line |
| `dd` | delete line |
| `p` | paste after cursor |
| `P` | paste before cursor |
| `/pattern` | search |
| `n` | next match |
| `N` | previous match |

---

# Normal Mode (Navigation)

### Basic Movement
| Command | Description |
|------|-------------|
| `h` | left |
| `j` | down |
| `k` | up |
| `l` | right |

### Faster Movement
| Command | Description |
|------|-------------|
| `w` | next word |
| `b` | previous word |
| `e` | end of word |
| `0` | beginning of line |
| `^` | first non-blank |
| `$` | end of line |

### File Navigation
| Command | Description |
|------|-------------|
| `gg` | top of file |
| `G` | bottom of file |
| `:n` | go to line n |
| `Ctrl+d` | half page down |
| `Ctrl+u` | half page up |
| `Ctrl+f` | page down |
| `Ctrl+b` | page up |

---

# Insert Mode

| Command | Description |
|------|-------------|
| `i` | insert before cursor |
| `I` | insert at start of line |
| `a` | insert after cursor |
| `A` | insert at end of line |
| `o` | new line below |
| `O` | new line above |
| `Esc` | exit insert mode |

---

# Editing (Normal Mode)

### Delete / Change
| Command | Description |
|------|-------------|
| `x` | delete character |
| `dd` | delete line |
| `dw` | delete word |
| `d$` | delete to end of line |
| `cw` | change word |
| `cc` | change line |
| `C` | change to end of line |

### Copy / Paste
| Command | Description |
|------|-------------|
| `yy` | copy line |
| `yw` | copy word |
| `p` | paste after |
| `P` | paste before |

### Replace
| Command | Description |
|------|-------------|
| `r<char>` | replace one character |
| `R` | replace mode |

---

# Visual Mode (Selection)

| Command | Description |
|------|-------------|
| `v` | character selection |
| `V` | line selection |
| `Ctrl+v` | block selection |

### Common Operations
| Command | Description |
|------|-------------|
| `d` | delete selection |
| `y` | yank selection |
| `>` | indent right |
| `<` | indent left |

---

# Search

| Command | Description |
|------|-------------|
| `/pattern` | search forward |
| `?pattern` | search backward |
| `n` | next result |
| `N` | previous result |
| `*` | search word under cursor |
| `#` | search backward word |

---

# Replace / Substitution

| Command | Description |
|------|-------------|
| `:%s/foo/bar/g` | replace in entire file |
| `:s/foo/bar/g` | replace in line |
| `:%s/foo/bar/gc` | confirm each replace |

---

# Files & Buffers

| Command | Description |
|------|-------------|
| `:e file` | open file |
| `:w` | save |
| `:saveas file` | save as |
| `:bd` | close buffer |
| `:ls` | list buffers |
| `:b n` | switch to buffer |

---

# Windows / Splits

| Command | Description |
|------|-------------|
| `:split` | horizontal split |
| `:vsplit` | vertical split |
| `Ctrl+w h` | move left |
| `Ctrl+w j` | move down |
| `Ctrl+w k` | move up |
| `Ctrl+w l` | move right |
| `Ctrl+w q` | close window |

---

# Tabs

| Command | Description |
|------|-------------|
| `:tabnew` | new tab |
| `gt` | next tab |
| `gT` | previous tab |
| `:tabclose` | close tab |

---

# Macros

| Command | Description |
|------|-------------|
| `qa` | record macro to register a |
| `q` | stop recording |
| `@a` | run macro |
| `@@` | repeat macro |

---

# Marks

| Command | Description |
|------|-------------|
| `ma` | set mark a |
| `` `a `` | jump to mark |
| `'a` | jump to mark line |

---

# Useful Operators

Operators combine with motions.

| Pattern | Meaning |
|------|------|
| `d<motion>` | delete |
| `y<motion>` | yank |
| `c<motion>` | change |

### Examples
