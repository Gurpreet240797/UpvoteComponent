# [Upvote Component](https://gurpreet240797.github.io/UpvoteComponent/)

## Deployment

This component has been deployed on GitHub Pages for easy access: https://gurpreet240797.github.io/UpvoteComponent/
## Features

1. **Built with Vite and TypeScript**: This project is set up using Vite with TypeScript for fast and efficient development.
2. **Customizable Button Component**: A reusable button component that supports custom colors, styles, states, titles, and other props.
3. **Upvote List Components**: Includes two separate components for handling the upvote list.
4. **Data Persistence**: 
   - Uses cookies and Zustand store for persisting data.
   - Since cookies are accessible via the browser console, so Zustand is also implemented for demo to indicate enhancing security by hiding information from users.
5. **Dynamic List Management**:
   - Clicking the plus button adds a new button with an arrow to the default list.
   - Clicking the button toggles it between the default and selected lists.
6. **Testing with React Testing Library (Jest)**:
   - Ensures key functionalities with three test cases:
     1. Calls `onClick` handler when clicked.
     2. Renders with correct state classes (default or selected).
     3. Applies custom className correctly.
7. **Heroicons for Arrows**: The Heroicons library is used for displaying arrow icons.
8. **GitHub Actions for CI/CD**: Added a GitHub Actions workflow file to automatically run tests for new pull requests.

This repository contains a Vite project with TypeScript. Follow the instructions below to set up and run the project locally.

## Getting Started

### Clone the Repository

```sh
git clone <repository_url>
cd <repository_name>
```

### Install Dependencies

Using npm:
```sh
npm install
or 
npm i
```

### Run the Development Server
Using npm:
```sh
npm run dev
```

This will start the Vite development server. Open your browser and go to `http://localhost:5173/` (default port).

## Building the Project

To create a production build, run:

Using npm:
```sh
npm run build
```

The build files will be generated in the `dist` directory.

## Running Tests

If the project includes unit tests, you can run them with:

Using npm:
```sh
npm run test
```
