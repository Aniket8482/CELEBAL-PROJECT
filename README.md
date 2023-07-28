# LearnX - E-learning Website

LearnX is an E-learning website built using React.js that offers a wide range of courses for users to learn and enhance their skills. The platform provides features like a recommendation section, course management, user authentication, search and filter options, video playback, shopping cart, payment processing, and more. It also utilizes Redux for efficient API data management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

LearnX is designed to provide a user-friendly and efficient platform for learning various courses online. It allows users to explore new courses, view video content, manage their cart, and securely make payments. The website is equipped with an admin section to manage courses and users effectively.

## Features

1. **Landing Page - Recommendation Section**: The landing page welcomes users with a personalized recommendation section, showcasing courses based on their interests and previous learning.

2. **New Course Adding Page**: Admins can easily add new courses to the platform by providing necessary details such as course name, description, category, video content, etc.

3. **SignIn/Signout Functionality**: Users can create accounts, sign in to access their personalized dashboard, and sign out to securely log out of their accounts.

4. **Search & Filter Functionality as per Category**: Users can search for specific courses using keywords and filter courses based on categories, making it easier to find the desired content.

5. **Video Playing Page**: Users can view course content through a dedicated video playing page that offers a seamless playback experience.

6. **CRUD Operations**: Admins have the ability to perform CRUD (Create, Read, Update, Delete) operations on courses and user accounts for efficient management.

7. **Separate Account for User & Admin**: The website has separate account types for regular users and admin users. Admin accounts have additional privileges to manage courses and users.

8. **Cart Page**: Users can add and remove courses from their cart, review the selected courses, and proceed to payment.

9. **Payment Page**: After proceeding to pay, users are directed to a secure payment page where they can complete the transaction using various payment methods.

10. **Redux for API Data Management**: Redux is used to manage the state of API data, providing a scalable and maintainable solution for handling data across the application.

## Getting Started

To run LearnX locally on your machine, follow the installation and usage instructions below.

## Installation

1. Ensure you have Node.js and npm (Node Package Manager) installed on your system.
2. Clone this repository to your local machine or download the ZIP file and extract it.

## Usage

1. Open a terminal or command prompt and navigate to the project's root directory.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file and configure necessary environment variables like API keys, database connection strings, etc. (if applicable).
4. Start the development server by running `npm start`.
5. Open your web browser and go to `http://localhost:3000` to access LearnX.

## Technologies Used

- React.js: Front-end library for building user interfaces.
- Redux: State management library for managing application state and API data.
- JSON Server: A lightweight fake REST API server that serves as the backend for simulating API requests and responses.
- HTML5: Markup language for creating the website's structure.
- CSS3: Styling language for designing the website's layout and appearance.
- JavaScript: Programming language for implementing interactive features.

With this setup, we'll use Redux to manage the application state, including data fetched from the JSON Server, which will act as a mock backend for our E-learning website.

Remember that this approach is suitable for development and testing purposes but not for production use. In a real-world scenario, you would replace the JSON Server with a real backend built using technologies like Express.js and MongoDB or any other suitable database system.

The usage section for running LearnX locally will remain the same as previously mentioned.

## Contributing

Contributions to LearnX are welcome and encouraged. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

The LearnX project is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.
