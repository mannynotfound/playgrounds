import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import {getDirectories} from './utils';

const DEFAULT_PORT = 3000;
const server = express();

const playgroundsDir = path.resolve(__dirname, '../playgrounds');
const playgrounds = getDirectories(playgroundsDir);

playgrounds.forEach((pg) => {
  server.use(`/${pg}`, express.static(`${playgroundsDir}/${pg}/build`));

  try {
    const routes = require(`${playgroundsDir}/${pg}/api`).default;
    server.use(`/api/${pg}`, routes);
  } catch(e) {
    if (e.message.indexOf('Cannot find') === -1) {
      console.log('ERROR LOADING ', pg, e);
    }
  }
});

server.use(cors());
server.set('port', process.env.PORT || DEFAULT_PORT);
server.use(morgan('combined'));

server.listen(server.get('port'), () => {
  console.info(`Playgrounds running on port ${server.get('port')}`);
});
