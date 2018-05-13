var Team = require('../model/team.js');

const controller = {}
controller.getTeams = () => {
  return (req, res) => {
    Team.find().exec((err, teams) => {
      if (err) throw err
      res.json(teams);
    })
  }
}

controller.getTeam = () => {
  return (req, res) => {
    const id = req.params.id;
    console.log(id)
    Team.findById(id).exec((err, team) => {
      if (err) throw err
      res.json(team);
    })
  }
}

controller.saveTeam = () => {
  return (req, res) => {
    const team = new Team(req.body)
    Team.create(req.body).exec((err, team) => {
      if (err) {
        res.json({ success: false, err, status: 501 }).status(500)
      } else {
        res.json({ success: true, team, status: 201 }).status(200)
      }
    })
  }
}



controller.teams = (app) => {
  return app.render(req, res, '/team', req.query)
}

module.exports = controller;
