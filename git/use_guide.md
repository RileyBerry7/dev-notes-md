/***********************************************************************************************************************
 * ADDING NEW FILES TO AN EXISTING REPO
 ***********************************************************************************************************************/

// --- Create a new file ---
touch filename.txt              // or use a text editor like nano/vim to create and edit

// --- Check which files are new or modified ---
git status                      // shows untracked and changed files

// --- Stage the new file(s) to be tracked ---
git add filename.txt             // adds one file
git add .                        // adds all new or changed files

// --- Commit the staged changes ---
git commit -m "Add filename.txt with initial content"

// --- Push the commit to GitHub ---
git push                         // uploads the commit to the remote main branch




