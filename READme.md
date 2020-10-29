# Convo-To-Go-App (done)
This application helps users to prepare and initiate conversations in a wide variety of settings. It provides the user with a set list of events or environments, and based on their input, they will receive a number of relevant questions and conversation starters. New users or visitors will have the ability to access the pre-existing conversation starters. Upon log in, users can input suggestions for new questions and events.

## 1. Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://my-app-client.herokuapp.com/ and Node app here: https://my-app-server.herokuapp.com/


## 2. User Stories (done)
This app is for two types of users: a visitor and a logged-in user

Landing

#### Landing Page
* As a visitor
* I want to understand what I can do with this app (read about, sign up, or log in),
* so I can decide if I want to use it.

#### Login Page
* As a returning register user
* I want to enter my password and username to use this app,
* so I can have access to my account.

#### Sign Up
* As a visitor 
* I want to register to use this app
* so I can create my own conversation starters.

#### Home Page 
* As a logged-in user,
* I want to be able to preview the content of the app,
* so I can start looking conversation starters.

#### Question Category Page
* As a logged-in user,
* I want to be able to select a category,
* so I can view the corresponding conversation starters.

#### Suggestion Page
* As a logged-in user,
* I want to suggest new events and/or initiaters,
* so that I can access those suggestions.


## 3. Functionality (to do now)
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to search for 



## 4. Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

### 5. Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)

## 6. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -

## 7. Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


## 8. API Documentation (to do later)
API Documentation details:
* (Example) get all users



## Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality

## How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test