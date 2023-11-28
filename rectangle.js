exports.handler = async (event, context) => {
    const { length, width } = JSON.parse(event.body);
    const area = length * width;
    return {
        statusCode: 200,
        body: JSON.stringify({ shape: 'rectangle', area }),
    };
};
