exports.handler = async (event, context) => {
    const { radius } = JSON.parse(event.body);
    const area = Math.PI * Math.pow(radius, 2);
    return {
        statusCode: 200,
        body: JSON.stringify({ shape: 'circle', area }),
    };
};
