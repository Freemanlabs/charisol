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

controller.saveTeam = () => {
  return (req, res) => {
    const team = new Team(req.body)
    Team.create(req.body).exec((err, team) => {
      if (err) {
        res.json({ success: false, err, status: 501 });
      } else {
        res.json({ success: true, team, status: 201 });
      }
    })
  }
}



controller.teams = (app) => {
  return app.render(req, res, '/team', req.query)
}

module.exports = controller;
