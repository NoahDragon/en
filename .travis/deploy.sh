
#!/bin/bash

# Set Git config
git config --global user.name "Abner Chou"
git config --global user.email contact@abnerchou.me
# Clone the repository
git clone --branch gh-pages git@github.com:NoahDragon/en.git .deploy_git
# Deploy to GitHub
npm run deploy
# Purge CDN
curl "https://api.keycdn.com/zones/purgeurl/$CDN_ZONE_ID.json" -u $CDN_API: -X DELETE -H "Content-Type: application/json" --data '{"urls":["'"$CDN_ZONE_URL"'/index.html","'"$CDN_ZONE_URL"'/tags/index.html", "'"$CDN_ZONE_URL"'/categories/index.html", "'"$CDN_ZONE_URL"'/archives/index.html", "'"$CDN_ZONE_URL"'/sitemap.xml", "'"$CDN_ZONE_URL"'/page-sitemap.xml", "'"$CDN_ZONE_URL"'/post-sitemap.xml", "'"$CDN_ZONE_URL"'/tag-sitemap.xml","'"$CDN_ZONE_URL"'/category-sitemap.xml"]}'
