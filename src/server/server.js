import express from 'express';
import path from 'path';
import http from 'http';
import SocketIO from 'socket.io';
import webpack from 'webpack';

import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import dogeError from './middleware/socket_doge_error';
import config from '../../webpack.config.babel.js';
import handleRender from './middleware/handleRender.js';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  const compiler = webpack(config);
  console.log(config.output.publicPath)
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
  }));

  app.use(webpackHotMiddleware(compiler));

} else {
  app.use('/static', express.static(path.join(__dirname, "static")));
}
app.use(handleRender);
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    console.log('user connected');
    //socket.use(dogeError);
});


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Env ${process.env.NODE_ENV}`);
});