
#!/bin/bash
# Decrypt the private key
openssl aes-256-cbc -K $encrypted_5cd716f23a63_key -iv $encrypted_5cd716f23a63_iv -in .travis/ssh_key.enc -out ~/.ssh/id_rsa -d
# Set the permission of the key
chmod 600 ~/.ssh/id_rsa
# Start SSH agent
eval $(ssh-agent)
# Add the private key to the system
ssh-add ~/.ssh/id_rsa
# Copy SSH config
cp .travis/ssh_config ~/.ssh/config
# Set Git config
git config --global user.name "Abner Chou"
git config --global user.email contact@abnerchou.me
# Clone the repository
git clone --branch gh-pages git@github.com:NoahDragon/en.git .deploy_git
# Deploy to GitHub
npm run deploy
