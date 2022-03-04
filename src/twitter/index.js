require('dotenv').config();

const Index = require('twitter');

const {
    TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET,
    TWITTER_BEARER_TOKEN,
} = process.env;

const client = new Index({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    bearer_token: TWITTER_BEARER_TOKEN
});

const getRateLimit = async () => {
    try {
        return await client.get('application/rate_limit_status', {});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getRateLimit };