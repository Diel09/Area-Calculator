exports.handler = async (event, context) => {
    const { side } = JSON.parse(event.body);
    const area = Math.pow(side, 2);
    return {
        statusCode: 200,
        body: JSON.stringify({ shape: 'square', area }),
    };
};
