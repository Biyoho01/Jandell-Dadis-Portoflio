## A very complicated way to Updating the Portfolio - I'll leave here so I dont forget lmao

### 1. Edit the website

Make changes inside the main project:

C:\Users\jande\Desktop\React js\Jandell-Dadis-Portoflio

### 2. Build the website

Run:

npm run build

This creates a new `dist` folder containing the finished version of the website.

### 3. Copy the new `dist` files

Run:

Get-ChildItem ..\portfolio-deploy -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force

Copy-Item -Path .\dist\* -Destination ..\portfolio-deploy -Recurse -Force

### 4. Go to the deployment folder

cd ..\portfolio-deploy

### 5. Upload to GitHub Pages

git add .
git commit -m "Update portfolio"
git push origin gh-pages --force

### 6. Check the website

https://biyoho01.github.io/Jandell-Dadis-Portoflio/

If the old version appears, press:

Ctrl + Shift + R
