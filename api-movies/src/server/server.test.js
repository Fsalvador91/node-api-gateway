const path = require('path')
require('dotenv-safe').config({ path: path.resolve(__dirname, '../../.env.example') })
const server = require('./server');

function apiMock(app, repo) {
}

test('Server Start', async () => {
    const instance = await server.start(apiMock, null);
    expect(instance).toBeTruthy();
})

test('Server Stop', async () => {
    const isStopped = await server.stop();
    expect(isStopped).toBeTruthy();
})