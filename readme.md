# React.js Essential Training - Linkedlin course

### Use
React documentation: https://legacy.reactjs.org/
React Native: https://reactnative.dev/
I download the project and open the html in the browser to see the project.
I use the vscode to write the codes and to work with codes that its not supported in browser I used Babel in Try it out and copy and pasta the code there to use in the project and to it work I put the script below also and here the link of the website: https://babeljs.io/
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

Commands that help:

ctrl + command + space --> Emoji box
option + command + j --> shortcut to open the developer tools in the browser

Have options in cloud like to edit your code:
-  CODESANDBOX: https://codesandbox.io/s/react-new
- CODEPEN: https://codepen.io/
- GLITCH: https://glitch.com/


Formik: https://formik.org/
REACT HOOK FORM: https://react-hook-form.com/
USEHOOKS: https://usehooks.com/

Snowtooth TO USE GRAPHQL: https://snowtooth.moonhighway.com/
https://graphql.org/

working with react router 6: https://reactrouter.com/en/main

Data:
https://api.github.com/users/moonhighway

Run `npm test` create two documents 
function.js and inside:
export default function timesTwo(a) {
    return a * 2
}

function.test.js and inside:
import timesTwo from "./functions"

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8)
})

and run npm test and will appear everythinh that you need to do to fix a error!

https://jestjs.io/docs/using-matchers

Free photos website: https://www.pexels.com/pt-br/

To work with this you'll need install node.js if you dont have then test: 
  node -v 
  npm -v
  if its high then 5.2 its good!
  
See if appear some version about it if not download of this website and install the current version:
https://nodejs.org/en

To generate react project we use commands from this website:
https://create-react-app.dev/

and run in the terminal: npx create-react-app nameofproject
Then everything will be setup for us from scratch

"react": react its what we need to create the react components
"react-dom": its how we add the app to the page
"react-scripts": how we handle all of our bundlling

# Installation

### `npm install` or `npm i`
### `npm install react-router-dom@6`
### `npm start`
    
<!-- 
run in the terminal to this project:
### `npm install`
### `npm run dev` -->

***Have the extension `ES7+ React/Redux/React-Native snippets` and time rafce inside the componet that will apear in the screen only need select that will great the component easier to use will help a lot in the creation of the components of this project.***

***And updates in real time to see the change that you'll do use the link `<script src="https://livejs.com/live.js"></script>` in you index.html below the meta and link.***

# Deploy to Netlify
https://www.netlify.com/
Conect with the github and add new site and import an existet project already commited to github, pick a repository and you do the settings and deploy, its pretty simple and if you dont have already make manually: https://app.netlify.com/drop

run in the terminal `npm run build` and will generate a build folder and after this you can bring the folder for this website 

## Deploy projects Github pages
https://pages.github.com/
Create new repository in Githib with the same name of this project `nomeoftheproject` save like public to others people can see and follow the instructions of the github.
Open the project and terminal and run `git init`, readme create you same then jump and run `git add .`, after `git commit -m "Message commit that you would like put here"`, git branch -M main, copy and pasta the `git remove add origin url` that appear in the git with the url to dont have error and `git push -u origin main` after this upload the page and you can see the project in the github.

To work with github pages install `npm i gh-pages -save-dev` and package.json add:
<username>.github.io/<repositoryname>
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

and in vite.config.js:
base: "/repositoryname"

after this run `npm run deploy` if run without error works, then its only go to github pages and wait appear the link and you can share your project with others users.

## Description

Review about React.

<p align="center">
  <img src="https://img.shields.io/github/downloads/ThayRibeiro0/project0.2/total?color=%2300ff00&logo=Github&style=plastic" />
  <img src="https://img.shields.io/github/repo-size/ThayRibeiro0/project0.2?style=plastic" />
  <img src="https://img.shields.io/github/languages/top/ThayRibeiro0/project0.2?style=plastic" />
  <img src="https://img.shields.io/github/last-commit/ThayRibeiro0/project0.2?style=plastic" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/-Javascript/total?logo=Javascript" />
    <img src="https://img.shields.io/badge/HTML-E34F26?&logo=html5&logoColor=white&style=flat"  />
    <img src="https://img.shields.io/badge/CSS-3776AB?&logo=css3&logoColor=white&style=flat" />
    <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat">
</p>

## What each of the files you wrote for the project contains and does?

The project use the html, javascript and css and some commands in code.

## Referência
- [Youtube] - React.js Essential Training - Linkedin course with certification of conclusion - (https://www.linkedin.com/learning/react-js-essential-training-14836121/adding-component-properties)
