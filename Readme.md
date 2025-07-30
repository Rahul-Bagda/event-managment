===========================
 Event Management Project
===========================

📌 Description:
This is a full-stack Event Management web application built with Node.js, Express, MongoDB, and EJS. Admins can create events, and users can view and register for events.

---------------------------
How to run this project 
---------------------------

- cd backend 
- npm i
- node server.js
- GO to the URL 

---------------------------
🔧 Requirements to Run
---------------------------

1. Node.js (v18+ recommended)
2. MongoDB (Local or Cloud MongoDB URI)
3. Internet connection for external dependencies (if used)

---------------------------
📁 Folder Structure
---------------------------

/project-root
│
├── /routes
├── /models
├── /views
├── /public
├── /controllers
├── /uploads        (optional)
├── server.js
├── package.json
├── .env.example    (Rename to .env and add your values)
└── README.txt

---------------------------
📦 Installation Steps
---------------------------

1. Clone or copy this project folder to your system.

2. Open terminal in the project folder and run:
   > npm install

3. Create a `.env` file in the root folder and add the following:


4. Start MongoDB (if using local) and run the server:
> npm start
or
> node server.js

5. Visit the app in your browser:
http://localhost:5000

---------------------------
👨‍💻 Default Routes
---------------------------

- `/` → Home Page
- `/events` → List All Events
- `/register` → User Registration
- `/admin` → Admin Login (if available)
- `/admin/create-event` → Create New Event

---------------------------
✅ Notes
---------------------------

- Make sure MongoDB is running and connected.
- File uploads will be stored in `/uploads` folder (if applicable).
- Feel free to customize styles in `/public/css`.

---------------------------
📧 Contact
---------------------------

Developer: [Rahul sharma]  
Email: [rbagda669@gmail.com]


