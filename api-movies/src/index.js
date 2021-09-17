(async () => {
    const path = require('path')
    require('dotenv-safe').config({ path: path.resolve(__dirname, '../.env.example') })
    const movies = require('./api/movies');
    const server = require("./server/server");
    const repository = require("./repository/repository");
    try {
        await server.start(movies, repository);
        console.log('Server is up and running at ' + process.env.PORT);
    } catch (error) {
        console.error(error);
    }
})();