/***********************************************************************************************************************
 * STEPS FOR USING GIT ON LINUX
 ***********************************************************************************************************************/

// --- Configure Git on your machine (one-time setup) ---
git config --global user.name "your_github_username"
git config --global user.email "your_github_email@example.com"
git config --list     // verify configuration

// --- Create a new local repo directory and enter it ---
mkdir repo_name
cd repo_name

// --- Initialize a new Git repository (.git folder is created) ---
git init

// --- Add files to the staging area ---
git add .             // add all files
git status            // optional: verify what’s staged

// --- Commit your changes ---
git commit -m "Initial commit - project setup"

// --- Link your local repo to a remote GitHub repo ---
// Replace <username> and <repo> with your actual GitHub info
git remote add origin https://github.com/<username>/<repo>.git

// --- Rename default branch to 'main' ---
git branch -M main

// --- Verify remote link and repo status ---
git remote -v
git status

// --- Push local commits to GitHub ---
// NOTE: The GitHub repo must already exist before this push
git push -u origin main
// Username: your_github_username
// Password: your_personal_access_token

