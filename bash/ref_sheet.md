/***********************************************************************************************************************
 * ESSENTIAL TERMINAL COMMANDS
 ***********************************************************************************************************************

date 
time
whoami

cd “name” 	// enter nested directory
cd .. 		// exit current directory
cd /  		// jump to root directory of your linux file system
cd //
cd /// 
cd ~ 		// jump to users home directory


ls		// list directory contents
pwd

mkdir “name” 		// make directory
rmdir empty_dir	// remove empty directory
rm -r dir_name 	// remove directory and contents
rm file_name		// remove file

mv “file_name” “new_name”
mv “file_name” “directory_name”/
cp og_name copy_name	// copy existing file

touch file_name 	// create an empty file

file name		// identify file type

cat file.output 		// concatenates file contents to the standard output

exit			// exit terminal

/***********************************************************************************************************************
 * ESSENTIAL GNU (GNUs Not Linux) COMMANDS 
 ***********************************************************************************************************************/

gcc file_name.c -o executable_name		// compile a c or cpp file with gcc (gnu compiler collection)


/***********************************************************************************************************************
 * ESSENTIAL PROCESS COMMANDS
 ***********************************************************************************************************************/

ps 			// show running processes
top	
htop 			// real-time process monitor
kill pid			// terminate process by pid
man some_cmd	// open manual
clear			// clear terminal screen

ctrl-C			// terminate current running program


/***********************************************************************************************************************
 * ESSENTIAL GIT COMMANDS
 ***********************************************************************************************************************/
git status
git add “file_or_dir”
git rm “file_or_dir”
git commit -m “message”
git push

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



/***********************************************************************************************************************
 * CLONING EXISTING REPOS
 ***********************************************************************************************************************/

// --- Clone (download) an existing GitHub repo to your machine ---
git clone https://github.com/<username>/<repo>.git



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






