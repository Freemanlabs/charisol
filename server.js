const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });


/**for blog */
const http = require('http')
const { parse } = require('url')
const pathMatch = require('path-match')
const route = pathMatch()
const match = route('/post/:slug')



//conneting to mongoose
mongoose.connect(process.env.DATABASE)
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

const teamsController = require('./server/controller/teamsController');
const contactsController = require('./server/controller/contactsController');
const skillsController = require('./server/controller/skillsController');
const projectsController = require('./server/controller/projectsController');



  app.prepare()
  .then(() => {
    const server = express()
    // Takes the raw requests and turns them into usable properties on req.body
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/api/get-teams', teamsController.getTeams());
    server.post('/api/teams', teamsController.saveTeam());
    server.get('/api/team/:id', teamsController.getTeam());
    server.put('/api/team/:id', teamsController.updateTeam());
    server.delete('/api/team/:id', teamsController.deleteTeam());
    server.post('/api/update-create/:email', teamsController.updateOrCreate())
    // contacts
    server.post('/api/contacts', contactsController.saveContact());
    server.get('/api/get-contacts', contactsController.getContacts());
    // skills
    server.get('/api/get-skills', skillsController.getSkills());
    server.post('/api/skill', skillsController.saveSkill());
    server.get('/api/skill/:id', skillsController.getSkill());
    //projects
    server.get('/api/get-projects', projectsController.getProjects());
    server.post('/api/projects', projectsController.saveProjects());
    

    server.get('/contact', (req, res) => {
      return app.render(req, res, '/contact')
    })

    server.get('/', (req, res) => {
      return app.render(req, res, '/')
    })

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post'
      const queryParams = { slug: req.params.slug } 
      return app.render(req, res, actualPage, queryParams)
    })

   

    server.get('/team', (req, res) => {
      return app.render(req, res, '/team')
    })

    server.get('/dashboard/profile/:id', (req, res) => {
      const actualPage = '/admin-profile'
      const queryParams = { _id: req.params.id } 
      return app.render(req, res, actualPage, queryParams)
    })


    
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })


   
  })