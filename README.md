# KarmaPAD

Editor designed for editors, bloguers, journalists, copywritters and whoever that is searching for preflight valoration of its own text. App is based on AI Algorithm who knows what is negative and positive inside of a text. For this, each word has different value and also depending on which text context is used.
For example, I could review an important email before send to check if the vocabulary is on the positive way. Maybe you could review a formal letter or a post for an important blog.

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
  
  **Signup:** As an anon I can sign up in the platform so that I can start saving my own texts to check after with the algorithm.
  
  **Login:** As a user I can login to the platform so that I can see my saved texts.
  
  **Logout:** As a user I can logout from the platform so no one else can use it. 

  **List text templates** As a user I want to see text examples so that I can choose one to begin my own with some suggestions to be positive.
 
  **Create text** As a user I want to add a my own text so that I can save for review after.

  **See my texts** As a user I want to see my texts that I wrote before.

  **Analize my text** As a user I want to analize my own text to see how positive it is.

## Backlog

  **Edit my profile** As a user I want to edit my profile with more information about me.

  **View others profile** As a user I want to see others profile with its texts.

  **Edit text** As a user I want to edit my own text and reanalize again.

  **Text suggestions** As a user I want to recieve word suggestions to improve my texts on the way to make more positive.  

  **Voice to text** As a user I want to write text without hands, only with my voice.
  
# Client

## Routes (Guards)

  - / - Homepage with text templates (Anon user)
  - /auth/signup - Signup form (Anon user)
  - /auth/login - Login form (Anon user)  
  - /texts/create - (Logged user)  
  - /texts/:id - (Logged user)
  - /texts/:id/analize - (Logged user)
  - /texts/my-texts - (Logged user)

  ### Backlog

  - /user/me - my details (Logged user)
  - /user/:id - details of some user id and its texts (Logged user)
  - /texts/:id/edit - edit one text (Logged user)

## Services

- Auth Service
  - me()
  - login(user)
  - signup(user)
  - logout()
  - getUser()
  - setUser()
- Profile Service
  - me()
  - edit()
- Text Service
  - CreateOne()
  - listTextTemplates()
  - getAllById(id)
  - getOne(id)   

## Pages

- 404 Page
- Sign in Page
- Log in Page
- Home Page (List text templates)
- Add and analize text page
- Text Detail Page
- My Profile Page

## Components

- Navbar
- Text List
- Text Card
- Text Editor 

## IO

- Text List Page inputs single text to text card component
- Login/Sign up form outputs the form to the parent component
- Text Editor form outputs the form to the parent component

## Guards

- if logged in cannot access login/signup page
- if not logged in cannot access profile page

# Server

## Models

  User model

  ```
  username - String // required  
  password - // required
  ```

  Text model

  ```
  title - String // required
  body - String // required
  owner - ObjectId // UserId  
```

## API Endpoints/Backend Routes
  
  ### Auth

  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/logout  

  ### Text

  - POST /texts/create
  - GET /texts/:id
  - POST /texts/:id/analize  
  - GET /texts/my-texts

  
