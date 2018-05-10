const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 const teamsController = require('./server/controller/teamsController');
//conneting to mongoose
mongoose.connect('mongodb://localhost:27017/charisol')
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

  app.prepare()
  .then(() => {
    const server = express()
    // Takes the raw requests and turns them into usable properties on req.body
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/api/get-teams', teamsController.getTeams());
    server.post('/api/teams', teamsController.saveTeam());

    server.get('/contact', (req, res) => {
      return app.render(req, res, '/contact')
    })

    server.get('/', (req, res) => {
      return app.render(req, res, '/')
    })

    server.get('/team', (req, res) => {
      return app.render(req, res, '/team')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

//   const express = require('express')
// const next = require('next')

// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
//   .then(() => {
//     const server = express()

//     server.get('/a', (req, res) => {
//       return app.render(req, res, '/b', req.query)
//     })

//     server.get('/b', (req, res) => {
//       return app.render(req, res, '/a', req.query)
//     })

//     server.get('/posts/:id', (req, res) => {
//       return app.render(req, res, '/posts', { id: req.params.id })
//     })

//     server.get('*', (req, res) => {
//       return handle(req, res)
//     })

//     server.listen(port, (err) => {
//       if (err) throw err
//       console.log(`> Ready on http://localhost:${port}`)
//     })
//   })