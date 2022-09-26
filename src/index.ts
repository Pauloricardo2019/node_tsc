import express from 'express';

import { userRouter } from './modules/user/userRouter.js';

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello world!');
});

server.use('/user', userRouter);

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
