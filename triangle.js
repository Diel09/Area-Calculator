exports.handler = async (event, context) => {
    const { base, height } = JSON.parse(event.body);
    const area = 0.5 * base * height;
    return {
        statusCode: 200,
        body: JSON.stringify({ shape: 'triangle', area }),
    };
};
