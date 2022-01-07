// const connectionString = process.env.DB_CONNECTION;
const config = {

    PORT: process.env.PORT || 5000,
    DB_CONNECTION: "mongodb+srv://MERN:ivan1991@my-db.b2vfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    COOKIE_NAME: 'USER_NAME',
    SECRET: 'TOP',
    SECRET2: 'TOP2',
    SALT_ROUNDS: 10

}

module.exports = config;


