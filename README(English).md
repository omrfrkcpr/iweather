# IWeather App ©️

💻 https://iweather-app.vercel.app/

![iweather-screenshots](https://github.com/omrfrkcpr/iweather/assets/77440899/70673eb2-5c98-442c-bc07-b219f47b5b58)

## Description

IWeather App is a single-page web application that allows users to view instant weather information from around the world. Users can see the weather forecast for the cities they want, save their favorite cities and access detailed weather information. The application is designed with a modern and user-friendly interface, so users can quickly and easily access the weather information they want.

## Outcome

![iweather-app](https://github.com/omrfrkcpr/iweather/assets/77440899/04e2ff8c-8979-4148-81ce-6644f1bdfcec)

## Project Planning & Management

**Epic User Story:** As a user of the weather app, I want to effortlessly access current weather information for various locations, save frequently viewed locations for quick access, view detailed weather forecasts for multiple days, and seamlessly navigate between different sections of the app. 🌤️

**User Stories:**

1️⃣ **View Current Weather Information:**

- 🥇 As a user, I want to see the current weather information by entering a city name.
- 🥈 I want to visualize the weather with appropriate icons and background images.

  **_Task-1 =_** Create user interface (city input field and weather display area).<br>
  **_Task-2 =_** Write a function to fetch weather information using the OpenWeatherMap API.<br>
  **_Task-3 =_** Make API call using Axios and process the returned data.<br>
  **_Task-4 =_** Display weather information automatically to the user with specific URL endpoint.<br>
  **_Task-5 =_** Change icons and background images based on weather conditions.<br>

2️⃣ **View 5 Days Weather Details:**

- 🥇 As a user, I want to see the 5-day weather forecast for the entered city.
- 🥈 As a user, I want detailed weather information with min and max temperatures for each day.

  **_Task-1 =_** Create a Forecast component to display daily weather details.<br>
  **_Task-2 =_** Write a formatter functions to get the 5-day weather forecast using the OpenWeatherMap API.<br>
  **_Task-3 =_** Display the formatted daily weather forecast to the user.

3️⃣ **Responsive Design:**

- 🥇 As a user, I want a design that is responsive across different screen sizes.
- 🥈 As a user, I want the application to be usable on mobile, tablet, and desktop devices.

  **_Task-1 =_** Make the design responsive to different screen sizes with using TailwindCSS.<br>
  **_Task-2 =_** Style the application using TailwindCSS for mobile, tablet, and desktop devices.<br>

4️⃣ **Adding/Removing Weather Information to Favorites:**

- 🥇 As a user, I should be able to add and remove any weather information I want from my favorite cities.
- 🥈 As a user, when I add or remove items from my favorites, I should see this from the icons and notifications.

  **_Task-1 =_** The heart icon should change dynamically when weather information is added or removed from the favorite.<br>
  **_Task-2 =_** The user should receive notifications at every stage regarding their favorite status.<br>

5️⃣ **Store Local Weather Information:**

- 🥇 As a user, I want the ability to store weather information for previously searched cities locally.
- 🥈 As a user, I want to store weather information for multiple cities.

  **_Task-1 =_** Use Local Storage to store and retrieve weather information.<br>
  **_Task-2 =_** Display stored weather information for multiple cities in a carousel format.<br>

6️⃣ **View Weather Informations in Carousel Style:**

- 🥇 As a user, I want to view stored weather information in a carousel-style display (Material Tailwind).
- 🥈 As a user, I want to easily switch between different cities' weather information.

  **_Task-1 =_** Implement Carousel Component from Material Tailwind<br>

7️⃣ **Error and Success Notifications:**

- 🥇 As a user, I want to be notified when weather information retrieval is successful.
- 🥈 As a user, I want appropriate notifications to indicate errors and guide me on what went wrong.

  **_Task-1 =_** Write functions to display appropriate notifications based on the status of Axios requests.<br>
  **_Task-2 =_** Integrate React Toastify package for notifications.<br>

8️⃣ **Navigate Between Pages Using React Router:**

- 🥇 As a user, I want to navigate between pages using onClick events.
- 🥈 As a user, I want to use React Router for page navigation.

  **_Task-1 =_** Set up React Router for page navigation.<br>
  **_Task-2 =_** Create separate pages/components for different sections of the application (e.g., home page, weather details page).<br>
  **_Task-3 =_** Implement onClick event handlers to navigate between pages.<br>

9️⃣ **Global State Management Using React Context API:**

- 🥇 As a user, I want state management to be handled using React Context.
- 🥈 As a user, I want to ensure seamless communication between components using context.

  **_Task-1 =_** Create a context provider to manage the application state.<br>
  **_Task-2 =_** Define state variables and functions to update state within the context provider.<br>
  **_Task-3 =_** Wrap relevant components with the context provider to access state and update it as needed.<br>

1️⃣0️⃣ **Get City Suggestions from an API:**

- 🥇 As a user, I want city suggestions to be filtered as I type in the city input field.
- 🥈 As a user, I want to see city suggestions in a dropdown format.

  **_Task-1 =_** Write a function to display city suggestions as the user enters the city input.<br>
  **_Task-2 =_** Use a free API ([AllCities_API_URL](https://countriesnow.space/api/v0.1/countries)) with Axios to fetch city suggestions and present them to the user in a dropdown format that you styled with TailwindCSS.

## Project Skeleton 🩻

```
📖IWeather App (folder)
|
├── 📁public
│     └── index.html
├── 📁src
│    ┣ 📂assets
│    ┃       ┗ [images and icons]
│    ┣ 📂components
│    ┃       ┣ Footer.jsx
│    ┃       ┣ Forecast.jsx
│    ┃       ┣ GeneralInfos.jsx
│    ┃       ┣ Messages.jsx
│    ┃       ┣ Navbar.jsx
│    ┃       ┣ Search.jsx
│    ┃       ┗ WeatherDetails.jsx
|    ┃
│    ┣ 📂context
|    ┃    ┗ WeatherProvider.js
|    ┃
│    ┣ 📂helpers
|    ┃    ┗ toastNotify.js
|    ┃
│    ┣ 📂pages
│    ┃       ┣ Home.js
│    ┃       ┣ ShowWeather.js
│    ┃       ┗ WeatherLists.js
│    ┃
│    ┣ 📂router
│    ┃       ┗ AppRouter.js
|    ┃
│    ┣ 📂services
│    ┃       ┣ cityFormatters.js
│    ┃       ┣ cityService.js
│    ┃       ┣ constants.js
│    ┃       ┣ weatherFormatters.js
│    ┃       ┗ weatherService.js
|    ┃
│    ┣ App.js
│    ┣ index.css
│    ┗ index.js
|
├── example.env
├── .gitignore
├── iweather-app.gif
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Objective

With this project, a single-page Weather Application will be developed using ReactJS and TailwindCSS, and it is aimed to develop skills in subjects such as API usage, asynchronous data processing and dynamic content management.

### At the end of the project, following topics are to be covered; 🎯

- HTML & CSS & JS & ReactJS

- TailwindCSS (Material Tailwind)

- Axios

- React-Router & React-Context API

### At the end of the project, will be able to; 💪

- improve coding skills within HTML & CSS (TailwindCSS) & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Step-By-Step Project Guide

- Step 1: Clone the Repository to Your Local Machine:

  **_Copy the URL of the project repository from GitHub or a similar platform._**
  **_Open your terminal or command prompt and navigate to the directory where you want to store the project._**
  **_Use the following command to clone the repository:_**

  ```
  git clone <repository_url>
  ```

  **_Replace <repository_url> with the URL of the project repository you copied._**

- Step 2: Install Node Package Manager:

  **_Navigate to the root directory of the project in your terminal or command prompt._**
  **_Use the following command to install npm packages:_**

  ```
  npm install
  ```

  **_This command will install the project's dependencies based on the list in the package.json file._**

- Step 3: Signup `https://home.openweathermap.org/users/sign_up` and get api key. After that, paste your personal api key into your .env file. You can check "example.env" file in project root directory.

  ```
  REACT_APP_API_KEY=[YOUR_PERSONAL_OPENWEATHER_API_KEY]
  ```

  **_Replace [YOUR_PERSONAL_OPENWEATHER_API_KEY] with your personal api key that you get from openweathermap_**

- Step 4 : Once all packages are successfully installed and api key is pasted, use the following command to start the project:

  ```
  npm start
  ```

  **_This command will start the development server and open a live preview of the project in your default web browser._**
  **_If the browser doesn't open automatically, you can view the project by navigating to http://localhost:3000._**

## Additional Data 📦

- [Assets Folder](./src/assets/)
- [AllCities_API_URL](https://countriesnow.space/api/v0.1/countries)
- [OPENWEATHERMAP_API](https://openweathermap.org/api/one-call-3#start)

## Contributing 🤝

Your insights and contributions greatly enrich my projects! Whether you're bursting with fresh project concepts or have ideas to enhance existing ones, your input is invaluable. Feel free to open an issue to initiate a dialogue about your thoughts, or submit a pull request with your proposed modifications. Every contribution plays a vital role in my growth and improvement, so thank you for being an integral part of my community!

## LICENSE 🪪

This repository is licensed under the MIT License. See the MIT licence file for details. For more information please visit [MIT License](https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide)

**<p align="center">&#9786; Happy Coding &#9997;</p>**
