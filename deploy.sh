cd /var/www/mumez/mumez-website-v2
rm package-lock.json 
git pull origin master
npm i
npm run build 
pm2 restart mumez-website-v2