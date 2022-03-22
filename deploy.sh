#!/bin/sh
# ./deploy

npm run build

git add .

git commit -m "remove margin"

git status

read -p "Do you want to deploy? (y/n): " -n 1 -r
echo # a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    git push origin development
else
    exit 1
fi