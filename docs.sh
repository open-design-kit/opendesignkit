#/bin/bash

repository="https://github.com/bocoup/opendesignkit.wiki.git"
wikiRepo="./wiki-copy"
localFolder="./wiki"
# close our wiki
git clone "$repository" "$wikiRepo"
# copy our local folder files to the cloned repo
cp "$localFolder"/* "$wikiRepo"/
# go to repo folder
cd "$wikiRepo"
# Add files & commit
git add * && git commit -m "Docs updated"
# push changes to the wiki repo
git push -u origin master
# move out of folder
cd ../
# remove the cloned repo
rm -rf "$wikiRepo"