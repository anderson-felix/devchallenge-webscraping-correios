import express from 'express';
import cheerio from 'cheerio';
import rp from 'request-promise';

const cep = '14402-431';

const options = {
  uri: 'https://buscacepinter.correios.com.br/app/endereco/index.php',
  transform: (body: any) => cheerio.load(body),
};

rp(options)
  .then($ => {
    const inputCep = $('#endereco').val(cep);
    console.log($);
  })
  .catch(err => {
    console.log(err);
  });

// https://www.luiztools.com.br/post/webscrapping-com-node-js-parte-2/

const server = express();

server.listen(3333);

server.use(express.json());
