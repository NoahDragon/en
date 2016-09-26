
#!/bin/bash

# Set Git config
git config --global user.name "Abner Chou"
git config --global user.email contact@abnerchou.me
# Clone the repository
git clone --branch gh-pages git@github.com:NoahDragon/en.git .deploy_git
# Deploy to GitHub
npm run deploy
