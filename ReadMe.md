# E-Commerce Application (MERN Stack)

This is a mentor-guided project to build a full-fledged **E-commerce application** using the **MERN stack** (**MongoDB, Express.js, React.js, and Node.js**). The application includes features such as **user authentication, product management, order handling, and secure payment processing**.

## Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Axios (for API calls)  
- React Router (for navigation)  
- Context API (for global state management)  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose for database handling)  
- Multer (for file uploads)  
- JWT (JSON Web Tokens for authentication)  
- bcrypt (for password hashing)  


# FOLLOW-ALONG MILESTONE -1


## Task Instructions:-
Repository Creation

Create a new GitHub repository named Ecommerce-Follow-Along.
Ensure it is initialized with a README file.
Documentation

In the README file, include a brief description of the project(as explained by your mentor).
Add a section titled Milestone 1: Project Overview to summarize what was covered in the session.
Submission Guidelines

Push your repository to GitHub.
Share the repository link in the space provided below.



## WORK DONE :-
In this session we where taught how to make a use git commands , statging, branching , pulling etc.
---
### created :-
The Backend folder and a server.js file inside it ,
Frontend and public file inside it ,

has a package.json file.
---

# FOLLOW-ALONG MILESTONE - 2

## Task Instructions:-

 - Use the same GitHub repository created during Milestone 1: Ecommerce-Follow-Along.
 - If you haven’t done so already, ensure it is initialized with a README file.
 - Complete the code along for the Login Page.
 - Update the README file in the root of the repository
 - Include a section titled Milestone 2: Project Setup and Login Page that summarizes what was achieved in this milestone.
 - Ensure all changes are committed and pushed to your GitHub repository.
 - Share the repository link in the space provided below.

 ## WORK DONE :- 
 - Installed tailwind css :-
   - npm init
   - cd Frontend
   - (npm create vite@latest . ) command.
   - Assigned Name of pacakge , selected framework --> React , variant --> javascript .
   - Did npm i ,
   - then npm install tailwindcss @tailwindcss/vite
   - edited vite.config.js file in Frontend folder :-
     - Added -->
      - import taiwlindcss from '@tailwindcss/vite' , Added tailwindcss() in plugins :-
        - export default defineConfig ({
                  plugins: [react(),tailwindcss()],
             })

   - Deleted content in index.css inside "src" ,and added (@import  "@tailwindcss")
   - Deleted content in app.css inside "src"
   - edited index.html file .
     - Added <link rel="stylesheet" href="/src/index.css"> inside <head tag>
     - Added <h1> hello World ! insidebody
  - Created a simple server.
   
