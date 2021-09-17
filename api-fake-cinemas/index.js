const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    res.json([{ id: 1, title: 'Tivoli Shopping' }, { id: 2, title: 'Moviecom' }]);
})

app.listen(3001, () => { console.log('Cinemas running at 3001') });