require('dotenv').config();
const express = require('express');
const { getRateLimit } = require('./twitter')

const app = express();

app.listen(process.env.PORT, async () => {
    console.log(`App ready and listening on port ${process.env.PORT}`);
    try {
        const result = await getRateLimit();
        console.log(result.resources.users['/users/lookup']);
    } catch (error) {
        console.log(error);
    }
});