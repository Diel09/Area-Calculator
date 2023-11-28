<!-- Improved compatibility of back to top link: See: https://github.com/Diel09/Area-Calculator -->
<a name="readme-top"></a>

<!-- How to use the API -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Diel09/Area-Calculator">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is to calculate the area of basic geometric shapes, including rectangle, square, circle, and triangle. This project also provides API endpoints available for use

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- API Endpoints -->
## API Endpoints

To use the API Endpoints you must request and HTTP Post request method with a payload depending on the shape
### Square

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/square <br />
JSON payload: <br />
{ <br />
  "shape": "square", <br /> 
  "dimensions": { <br />
    "side": 5 <br />
  } <br />
} <br />

Sample JSON response: <br />
{ <br />
  "shape": "square", <br />
  "area": 25 <br />
} <br />

### Rectangle

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/rectangle <br />
JSON payload: <br />
{ <br />
  "shape": "rectangle", <br />
  "dimensions": { <br />
    "length": 5, <br />
    "width": 3 <br />
  } <br />
} <br /> 
Sample JSON response:  <br />
{ <br />
  "shape": "rectangle", <br />
  "area": 15 <br />
} <br />

### Circle

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/circle
JSON payload:  <br />
{ <br />
  "shape": "circle", <br />
  "dimensions": { <br /> 
    "radius": 5 <br />
  } <br />
} <br />
Sample JSON response: <br />
{ <br />
  "shape": "circle", <br />
  "area": 24 <br />
} <br />

### Triangle

API endpoint: https://basic-area-calculator.netlify.app/.netlify/functions/app/triangle
JSON payload:  <br />
{ <br />
  "shape": "triangle", <br />
  "dimensions": { <br />
    "base": 5, <br />
    "height": 5, <br />
  } <br />
} <br />
Sample JSON Response: <br />
{ <br />
  "shape": "triangle", <br />
  "area": 24 <br />
} <br />


<p align="right">(<a href="#readme-top">back to top</a>)</p> <br />
<p align="center">--- Eliezer lng malakas ---</a>)</p>
