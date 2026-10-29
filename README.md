# 🌦️ Weather App

A responsive Weather App built using React.js and Material UI that allows users to check current weather information for different cities.

## 🚀 Live Demo

**[View Weather App](https://weather-app-gamma-three-20.vercel.app/)**

## ✨ Features

- 🔍 Search for weather by city name.
- 🌡️ Display current temperature.
- 💧 Show humidity levels.
- 🌤️ Display weather conditions and descriptions.
- 📊 Show minimum and maximum temperatures.
- 🌡️ Display the feels-like temperature.
- 🖼️ Weather-based images and icons.
- 📱 Responsive user interface.
- ⚡ Fetch weather data using the OpenWeatherMap API.

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Material UI
- OpenWeatherMap API
- Vite
- Git and GitHub
- Vercel

## 📸 Project Preview

Visit the live demo to see the Weather App in action:

**[Weather App – Live Website](https://weather-app-gamma-three-20.vercel.app/)**

## 💻 Run Locally

Follow these steps to run the project on your computer.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd mini-project-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add:

```env
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your own API key.

Get an API key from [OpenWeatherMap](https://openweathermap.org/api).

**Note:** Never commit your `.env` file to GitHub. Vite exposes `VITE_` variables in the browser, so this API key is not secret in a frontend-only application.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

### 6. Build for production

```bash
npm run build
```

## 🌐 Deployment

This project is deployed using [Vercel](https://vercel.com/).

**Live URL:** https://weather-app-gamma-three-20.vercel.app/

## 📚 Learning Outcomes

Through this project, I practiced:

- Building reusable React components.
- Managing state using `useState`.
- Passing data between components using props.
- Handling API requests using `fetch()`.
- Working with environment variables.
- Styling a responsive interface using CSS and Material UI.
- Deploying a React application using Vercel.

## 👩‍💻 Author

**Sakshi Saindane**

- GitHub: [sakshi-saindane03](https://github.com/sakshi-saindane03)

---

⭐ If you find this project useful, feel free to explore the code and try it out!
