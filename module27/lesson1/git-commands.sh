### Git Commands ###
# git <command> [<flags..>] [<args..>]


## Starting a Git Repo 

# git init
# Initializes a new Git repo in the current directory
git init

# git clone <url>
# Clones a repo from Github using git's command clone
git clone https://github.com/PIC16B/git-practice


## Staging and Committing Changes

# git add <file/folder>
# Stages a file or folder, preparing it for commit
git add index.js

# git commit -m "<message>"
# Commits staged changes with a message describing the update 
git commit -m "Initial commit"

# git commit --amend
# Modifies the last commit, useful for small changes without creating a new commit
git commit --amend -m "Updated commited message"


## Branching and Merging

# git branch <branch-name>
# Creates a new branch, allowing parallel development.
$ git branch feature-xyz

# git checkout branch-name
# Switches to an existing branch.
git checkout feature-xyz

# git merge branch-name
# Merges a specified branch into the current branch.
git merge feature-xyz


## Viewing History and Logs

# git log
# Displays a log of previous commits in the current branch.
git log

# git diff
# Shows differences between working files and the latest commit.
git diff

## git blame <file> 
# Shows who made changes to each line in a file, useful for debugging.
git blame index.js


## Undoing Changes

# git checkout -- <file>
# Discards changes in a working file to match the last commit.
git checkout -- index.js

# git reset HEAD <file>
# Unstage a staged file, leaving the file as it was.
git reset HEAD index.js

# git revert <commit-hash>
# Creates a new commit that undoes a specific previous commit.
git revert abc1234


## Syncing with Remote Repositories 

# git push <remote> <branch>
# Pushes local commits to a remote repository.
git push origin main

# git pull <remote> <branch>
# Fetches updates from a remote repository and merges them.
git pull origin main

# git fetch <remote> <branch>
# Fetches updates from a remote repository without merging.
git fetch origin main


## Advanced Commands 

# git stash
# Temporarily saves changes without committing.
git stash

# git stash pop
# Restores stashed changes.
git stash pop

# git rebase
# Reapplies commits on top of another base commit, ideal for maintaining a clean history.
git rebase main


## Configuration and Aliases

# git config --global user.name "Your Name"
# Sets the global username for commits.
git config --global user.name "Your Name"

# git config --global user.email "you@example.com"
# Sets the global email for commits.
git config --global user.email "you@example.com"
