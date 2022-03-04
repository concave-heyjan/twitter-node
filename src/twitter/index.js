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
};

const getUserInfo = async ({ twitterHandler }) => {
    try {
        const params = { screen_name: twitterHandler };
        const user = await client.get('users/lookup', params);
        return user[0];
    } catch (error) {}
}

module.exports = { getRateLimit, getUserInfo };