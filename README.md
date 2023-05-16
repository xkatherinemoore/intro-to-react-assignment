# Options for starting this assignment:

## Method 1: Cloning and Pushing to Your Own Repository
This method will provide you with a React project that has a lot of the work already donefor you. If you want to primarily focus on passing props and creating new components in React rather than styling and building a view with JSX, choose this method. If you want a more hands-on, realistic approach, try Method 2.
1. Fork this repository by clicking the "Fork" button in the top right corner of this page. This will create a copy of this repository in your GitHub account.
2. Clone your forked repository to your local machine using the following command in your terminal:
    - `git clone https://github.com/your-username/intro-to-react-assignment.git`
    - Replace `your-username` with your GitHub username.
3. Run the following commands to install the dependencies necessary for React to work and to start a local development server:
  ```
  npm install
  npm run dev
  ```
4. Make changes to the files in your local repository as directed in the exercises.
5. After making changes, add, commit and push your changes to your remote repository using the following commands in your terminal:

```
git add .
git commit -m "Add changes as directed in the exercises"
git push origin main
```

Replace `main` with the name of the branch you want

## Method 2: Creating a React Project using VITE
This method is a more realistic approach to starting a react project and we strongly encourage you to give it a try since it gives you a more hands-on approach to the React/Vite creation process.
1. Using your terminal, change your directory to a location where you are comfortable storing your React assignment
2. Next, run the following command to create a Vite project (replace your-project-name with the name of your project):
```
npm create vite@latest your-project-name
```
3. Using the arrow keys, navigate to where it says React and press enter
4. Using the arrow keys, navigate to Javascript and press enter
    - Note: If you are using Git Bash, interactive CLI may not work. Try redoing this from another terminal such as the one in VScode
5. Run the following three commands to change directory into your new React project, install local dependencies, and start a local development server
```
cd your-project-name
npm install
npm run dev
```
6. Make changes to the files in your brand new project as directed in the following instructions.
7. After making changes, initialize your project as a git repository with `git init` and follow the instructions to add, commit, and push it to a new repository on Github

# Rendering Users Profiles Assignment:
Your task for this React assignment is to take an array of user objects and to do the following with it:
1. Create a brand new component named `UserProfile.jsx` that defines a functional component that takes a user object as props
2. Have the `UserProfile` component render all three properties of the user object (`name`, `email`, and `imgURL`) and add your own styling if you want!
3. Lastly, inside of `App.jsx`, define the structure and styling of your App and use the `.map()` method on the array of users so that for each user object in the array, a `UserProfile` component is rendered. Make sure to set the key and proper props!
4. When you're done, you should have a screen that properly displays all 8 of the users in the array including their picture, their name, and their email!



The Array of Users (Copy and Paste it into `App.jsx` if you are starting the project from scratch):
```
const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "David Wilson",
      email: "david@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Sarah Davis",
      email: "sarah@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Daniel Thompson",
      email: "daniel@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Olivia Martinez",
      email: "olivia@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
  ];
```
