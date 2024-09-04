# NLP Article Analysis Tool

## Overview

The NLP Article Analysis Tool allows users to analyze news articles by extracting sentiment data such as agreement, subjectivity, confidence, irony, and score tags using URL.

## Technologies Used

- HTML
- SCSS for styling
- JavaScript for frontend logic
- Node.js and Express for backend operations
- Webpack for asset bundling
- Jest for testing
- MeaningCloud API for NLP
- dotenv for environment variable management

## Project Setup

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Ensure you have Node.js and npm installed by running:

```bash
node -v
npm -v
```

### Installation

1. **Download the project** and unzip it to your preferred directory
   or

   ```bash
   git clone https://repository-url.git
   ```

3. **Navigate to the Project Directory -> to "MyProject"**:

   ```bash
   cd <project-directory>
   ```

4. **Install Dependencies**:

   ```bash
   npm install
   ```

5. **API Key Configuration**:
   - Sign up and obtain an API key from [MeaningCloud](https://www.meaningcloud.com/developer/create-account).
   - Install the dotenv package to manage your environment variables:
     ```bash
     npm install dotenv
     ```
   - Create a `.env` file in the root directory of the project and add your API key:
     ```plaintext
     PORT=8001
     APIKEY=**************************
     ```

### Development Setup

1. **Install Additional Plugins and Loaders**:
   Ensure that your development environment is set up with the necessary tools:

   ```bash
   npm install --save-dev nodemon
   npm install --save-dev @babel/core @babel/preset-env babel-loader
   npm install --save-dev webpack webpack-cli webpack-dev-server
   npm install --save-dev style-loader node-sass css-loader sass-loader
   npm install --save-dev clean-webpack-plugin html-webpack-plugin
   npm install --save-dev html-webpack-plugin clean-webpack-plugin
   npm install --save-dev mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin

   ```

   ### Production Build

   This is to create a production build, run:

   ```bash
   npm run build
   ```

2. **Running the Development Server**:

   ```bash
   cd .\src\
   ```

   To make sure finding the webpack-dev-server you should run this command!:

   ```bash
    npm update webpack webpack-cli webpack-dev-server
   ```
   Then run: 
   ```bash
   npm run dev
   ```

### Start the Server

To start the backend server, you should be on the project Directory run:

```bash
npm start
```

3. **Install Jest for Testing**:
   Ensure you have Jest installed for running the tests:
   ```bash
   npm install --save-dev jest
   ```

Once Jest is installed, you can run your tests using the following command:

```bash
npm test
```

## Usage

Open the web application in your browser [localho](http://localhost:8080/) and enter the URL of the news article you wish to analyze.
