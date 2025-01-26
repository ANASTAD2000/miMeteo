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

//   Fetch API
  function fetchWeatherData(city) {
    const apiKey = "6802f04ae1750fc890384ea73a25c188"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          updateUI(data); // Update the interface with fetched data
        } else {
          alert("City not found. Please try again!");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Something went wrong. Please try again later.");
      });
  } 
//   function for update user interface 
  function updateUI(data) {
    cityName.textContent = data.name; // Update city name
    tempValue.textContent = `${Math.round(data.main.temp)}°`; // Update temperature
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Update weather icon
  }

                             // dom btn local me //

  const localeButton = document.getElementById("localeButton");

  // Add event  for the Locate Me button btn 
localeButton.addEventListener("click", () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeatherDataByLocation(latitude, longitude);
        },
        (error) => {
          alert("Geolocation failed. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });
  


  
  
  
