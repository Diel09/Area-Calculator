// functions/app.js

exports.handler = async function (event, context) {
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
          body: JSON.stringify({ error: 'Invalid shape provided' }),
        };
    }
  
    return {
      statusCode: 200,
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
  