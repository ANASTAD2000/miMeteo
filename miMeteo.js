// DOM Elements 
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cityName = document.getElementById("cityName");
const tempValue = document.getElementById("tempValue");
const weatherIcon = document.getElementById("weatherIcon");

 // Add event  to search btn 
searchButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    const city = searchInput.value; // the city entered by the user
    if (city) {
      fetchWeatherData(city); // Call the function to fetch weather data
    } else {
      alert("Please enter a city name!");
    }
  });
  
