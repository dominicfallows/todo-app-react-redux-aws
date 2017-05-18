### Todo App (React + Redux + AWS) Documentation
[Main Repo / Code](https://github.com/dominicfallows/todo-app-react-redux-aws) &nbsp;&nbsp;&nbsp;&nbsp; [Getting Started](https://github.com/dominicfallows/todo-app-react-redux-aws/blob/master/docs/getting-started.md)

# Getting Started

1. This app uses AWS Cognito as its authentication system. Please follow [these steps to prepare AWS Coginto](https://github.com/dominicfallows/todo-app-react-redux-aws/blob/master/docs/getting-started-aws-cognito.md) 

2. Copy the file `config/aws_SAMPLE.js` and rename to `config/aws.js`. Then, update the file with your Cognito details

3. From your project folder run: 
  - `npm i` - to install the project dependencies

  - This project uses relative paths from the `NODE_PATH` when using `import()` meaning we can have imports like `import(X/Y)` instead of `import(../../X/Y)`. 

      If you are on **macOS or Linux** and using **Bash** change the `"scripts"` section of `package.json` as below:

      `"start": "NODE_PATH=src react-scripts start",`
      `"build": "NODE_PATH=src react-scripts build",`
      `"test": "NODE_PATH=src react-scripts test --env=jsdom",`
      `"eject": "NODE_PATH=src react-scripts eject",`
    
      If you are on **Windows** and using **CMD** change the `"scripts"` section of `package.json` as below:
    
      `"start": "NODE_PATH=src&&react-scripts start",`
      `"build": "NODE_PATH=src&&react-scripts build",`
      `"test": "NODE_PATH=src&&react-scripts test --env=jsdom",`
      `"eject": "NODE_PATH=src&&react-scripts eject",`
    
      (Notice no space in `NODE_PATH=src&&react-scripts`)

  - `npm start` - to start running the development environment. Your browser should open automatically at the correct address. In addition, the address will be shown in your terminal. 
  
