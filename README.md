## React app
React is a Javasript frontend framework that makes creating UI much easier. React enables programmers to add javascript code directly into the markup. React does this using Javascript XML(JSX). JSX uses function components or class components to achieve this. 
<br>

This simple app displays webcams and the UI is build using react.

## Dependencies
### Dev dependencies
-Webpack 
--webpack-cli 
--web-pack-dev-sever 
--@babel/eslint-parser
--babel-loader
--css-loader
--eslint
--eslint-config-react
--eslint-plugin-reac
--eslint-webpack-plugin
--html-webpack-plugin"
--mini-css-extract-plugin
--prettier
--style-loader,
--terser-webpack-plugin

### Dependencies
-@babel/core
-@babel/preset-env
-@babel/preset-react
-@babel/register
-@reduxjs/toolkit
-react
-react-do
-react-icons
-react-redux
-react-router-dom
-web-vitals



## Configurations
### Webpack
Configure webpack using a webpack.config.js file. Define the enrty point into the app 
````  entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    } ```
Define the output folder
````  output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/[name].[contenthash].js',
        assetModuleFilename: '[name].[ext]',
        clean: true
    } 
````
clean is set to true so that old bundles are removed when building a fresh. 
specify the output files inside of the build folder of compiles javascript files and css modules. 

````    module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/i,
                    //using MiniCssExtractPlugin since our app is already in production
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.(png|jpeg|svg|gif|ico|jpg)$/i,
                    type: 'asset/resource'
                }
            ]   
    } ````
    Specify how the modules are going to be transpliled.  <br>
    Babel-loader wil transpile react code(JSX) and ECMASript JS into native Javascript. <br>
    Use the css-loader to tranf=pile newer css syntax to older css syntax.<br>
    Add images and Icons into the build as assets/resources<br>

````  plugins: [
        new HtmlWebpackPlugin({
            title: "SeeWorld",
            filename: 'index.html',
            template: './public/index.html'
        }),
     
        new ESLintPlugin(),
    
        new MiniCssExtractPlugin({
            filename: 'css/[name][contenthash].css'
        })
    ]````

    Use htmlwebpack plugin to generate a html documement using a template.  <br>
    Htmlwebpack plugin for webpack docs: ![https://webpack.js.org/plugins/html-webpack-plugin/]
    MiniCssExractPlugin separates css files so they can be cached in production <br>


### Babel
Use a babel.config.json to configure babel.

````
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}````

Babel use preset-react to transpile react to native Javascript<br>
Babel use preset-env to ensure transpliled code is compatible with the environents you want such as Node.js versions and  browers

### Eslint
Use a .eslintrc file to configure eslint.

````{
    "parser": "@babel/eslint-parser",
    "extends": "react",
    "env": {
      "browser": true,
      "node": true
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }````

  Eslint finds sytax error realted to JavaScript code. 
  So basically hepls write clean Javasript code without all the hassle 

### Prettier
Use prettier to get more organized and readable code.
````
{
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5"
   }````

## Scripts
````   "scripts": {
        "start": "webpack-dev-server --mode development",
        "format": "prettier --write \"src/**/*.js\"",
        "test": "echo \"Error: no test specified\" && exit 1",
        "eslint-fix": "eslint --fix \"src/**/*.js\"",
        "build": "webpack --mode production"
    } ````


## Deployment

Deploy on github pages <br>
In the repository, go to settings then select pages. <br>
You can add a custom domain. Buy a domain name from a verified vendor such as NameCheap.<br>
Customize the DNS Settings. Use either an A recored or a CNAME <br>
Refer to the gitbub docs: ![https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site]


