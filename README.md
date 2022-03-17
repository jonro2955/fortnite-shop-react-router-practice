npm run build

npm start

Note: you can chain together more automatic scripts into package.json's "scripts" object’s “git” command like below:
"git": "npm run build && git add . && git commit -m",

Now you can run a single command to execute both “npm run build and the the git commit:
npm run git -- '<YOUR COMMIT MESSAGE>'
