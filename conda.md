# Conda
Conda is a package and environment manager, similar to pip and venv combined, but more powerful.
Less powerful than docker(containers) but much lighter weight.

### Core Functions:
  - Installs Python and packages.
  - Manages isolated environments.
  - Works for python and non-Python languages.

### Pros:
  - Very reliable.
  - Pre-built Binaries(no compilation needed).
  - Cross-platform, Linux, macOS, Windows...

---

**Conda** is an *open-source* package/env manager.

**Anaconda** is a distribution of *Python* and *R* that includes the **Conda** package/env manager. 
  - Very comprehensive, heav-weight distribution: 300+ pre-installed packages.

**Miniconda** is a lightweight version of *Anaconda*, designed to only give you the essentials.
  - Small and flexible; only packages you have are the ones you manually install.

Both come with the **Conda** package/env manager as well as a *Python* interpreter.

---

## Installing Conda on LINUX

### **1. Install Miniconda**

```bash
# Download installer (for your architecture)
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

# Run installer
bash Miniconda3-latest-Linux-x86_64.sh
```

Press **Enter** through the license, type `yes` to accept, and allow it to add itself to your PATH (or restart your shell).

---

### **2. Create a new environment**

```bash
conda create -n myenv python=3.12
```

👉 Creates an isolated environment named *myenv* with Python 3.12.

---

### **3. Activate it**

```bash
conda activate myenv
```

Your shell prompt will change to `(myenv)` — now you’re inside that environment.

---

### **4. Install packages**

```bash
conda install numpy
```

or for multiple:

```bash
conda install numpy pandas matplotlib
```

---

### **5. Use it**

```bash
python script.py
```

---

### **6. Deactivate / remove**

```bash
conda deactivate          # exit current env
conda env remove -n myenv # delete it entirely
```

---

**Summary:**

* `conda create` → make environment
* `conda activate` → enter
* `conda install` → add packages
* `conda deactivate` → leave

That’s 95 % of what you’ll ever need.

