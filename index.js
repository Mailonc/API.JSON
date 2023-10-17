const express = require('express');
const serven = express();
const filmes = require('./src/data/filmes.json');

serven.get('/filmes', (req,res) => {
    return res.json({filmes})
})

serven.listen(3000, () => {
 console.log('servidor esta funcionando....')
});
