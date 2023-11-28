<!-- Improved compatibility of back to top link: See: https://github.com/Diel09/Area-Calculator -->
<a name="readme-top"></a>

<!-- How to use the API -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Diel09/Area-Calculator">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is to calculate the area of basic geometric shapes, including rectangle, square, circle, and triangle. This project also provides API endpoints available for use

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- API Endpoints -->
## API Endpoints

To use the API Endpoints you must request and HTTP Post request method with a payload depending on the shape
### Square

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/square <br />
JSON payload: {"side": 5} <br />
Sample JSON response: 
{
  "shape": "square",
  "area": 25
}

### Rectangle

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/rectangle <br />
JSON payload: {"length": 5, "width": 3}
Sample JSON response: 
{
  "shape": "rectangle",
  "area": 15
}

### Circle

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/circle
JSON payload: {"radius": 4}
Sample JSON response: 
{
  "shape": "triangle",
  "area": 24
}

### Triangle

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/triangle
JSON payload: {"base": 5, "height": 8}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<p align="right">--- Eliezer lng malakas ---</a>)</p>
