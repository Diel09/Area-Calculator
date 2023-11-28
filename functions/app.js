// functions/area.js

exports.handler = async function (event, context) {
    // Allow requests from any origin
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };
    
    if (event.httpMethod === 'OPTIONS') {
        return {
          statusCode: 200,
          headers,
          body: '',
        };
    }
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }
  
    const { shape, dimensions } = JSON.parse(event.body);
  
    let area;
    switch (shape) {
      case 'square':
        area = calculateSquareArea(dimensions);
        break;
      case 'rectangle':
        area = calculateRectangleArea(dimensions);
        break;
      case 'circle':
        area = calculateCircleArea(dimensions);
        break;
      case 'triangle':
        area = calculateTriangleArea(dimensions);
        break;
      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid shape provided' }),
        };
    }
  
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ shape, area }),
    };
  };
  
  function calculateSquareArea({ side }) {
    return side * side;
  }
  
  function calculateRectangleArea({ length, width }) {
    return length * width;
  }
  
  function calculateCircleArea({ radius }) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  function calculateTriangleArea({ base, height }) {
    return 0.5 * base * height;
  }
  