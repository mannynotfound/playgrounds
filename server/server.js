import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import api from './api';
import {getDirectories} from './utils';

const DEFAULT_PORT = 3000;
const server = express();

const playgroundsDir = path.resolve(__dirname, '../playgrounds');
const playgrounds = getDirectories(playgroundsDir);
playgrounds.forEach((pg) => {
  server.use(`/${pg}`, express.static(`${playgroundsDir}/${pg}/build`));
});

server.use(cors());
server.set('port', process.env.PORT || DEFAULT_PORT);
server.use(morgan('combined'));
server.use('/api', api);

server.listen(server.get('port'), () => {
  console.info(`Playgrounds running on port ${server.get('port')}`);
});
