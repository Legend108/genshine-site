import express from 'express';
import utils from './utils';
import fs from 'fs';
const util = new utils();
const app: express = express();

app.get("/", (req: any, res: any) => {
  util.file(res, 'index.html');
})

fs.readdirSync('src/public/images').forEach(f => {
  app.get(`/assets/images/${f}`, (req: any, res: any) => {
    res.sendFile(`./public/images/${f}`, {
      root: __dirname,
    })
  });
})

fs.readdirSync('src/public/js').forEach(f => {
  app.get(`/assets/js/${f}`, (req: any, res: any) => {
    res.sendFile(`./public/js/${f}`, {
      root: __dirname,
    })
  });
})

fs.readdirSync('src/public/css').forEach(f => {
  app.get(`/assets/css/${f}`, (req: any, res: any) =>{ 
    res.sendFile(`./public/css/${f}`, {
      root: __dirname,
    })
  })
})

app.listen(3001, () => {
  console.log("Listening");
});
