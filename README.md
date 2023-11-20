# react_spa
This is React Microfrontendwhich is created using single spa and Material Ui
Main Container app is created using below command
npx create-single-spa --moduleType root-config --framework react

Other microfrontend created using below command
npx create-single-spa --framework react

Local development
After cloning the repo, navigate to each microfrontend:
cd header
npm i  -> installs all the dependency which is present in package.json
npm start -> This will start header microfrontend

cd footer
npm i 
npm start -> this will start footer microfrontend

cd hompegage
npm i 
npm start -> this will start homepage microfrontend

cd product
npm i
npm start -> This will start the product microfrontend 

cd pdp
npm i
npm start ->This will start the pdp microfrontend

cd user
npm i 
npm start ->This will start the user microfrontend

Now navigate to main container which includes all these microfrontend. This is the main applcation which will be running in 8080 port

cd container
npm i 
npm start 

Note: All port configuration done in package.json of each microfrontend.
All microfrontends are registered in main container src/index.ejs
