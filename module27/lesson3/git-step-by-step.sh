### Git Step by Step ###


# Initialize a Git repository
cd /path/to/react-calculator
git init


# Create your first commit
git add .
git commit -m "Initial commit: Add React Calculator project"


# Create Github repository online:
# - Go to https://github.com/ and sign in.
# - Click the "New" button to create a new repository.
# - Give the repository a name, e.g., react-calculator, and set it to public or private.
# - Do NOT initialize with a README or .gitignore (we’ve already done this locally).


# Link local repo to Github and push
git remote add origin https://github.com/your-username/react-calculator.git
git branch -M main
git push -u origin main


# Make changes and create a new branch
git checkout -b feature/additiona-function


# Make changes, save, stage, and commit them
git add .
git commit -m "Added additional function to calculator"


# Push new branch to Github
git push -u origin feature/additional-function


# Merge feature branch into main branch
git checkout main
git pull origin main
git merge feature/additional-function
git push origin main

