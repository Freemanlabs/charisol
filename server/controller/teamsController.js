var Team = require('../model/team.js');

const controller = {}
controller.getTeams = () => {
  return (req, res) => {
    Team.find()
    .populate('skills').sort('positionNumber')
    .exec((err, teams) => {
      if (err) throw err
      res.json(teams);
    })
  }
}

controller.getTeam = () => {
  return (req, res) => {
    const id = req.params.id;
    Team.findById(id)
    .populate('skills')
    .exec((err, team) => {
      if (err) throw err
      res.json(team);
    })
  }
}

controller.updateTeam = () => {
  return (req, res) => {
    const id = req.params.id;
    const params = req.body;
    Team.findByIdAndUpdate(id, params).exec((err, team) => {
      if (err) throw err
      res.json({status: 201, user: team, success: true});
    })
  }
}

controller.deleteTeam = () => {
  return (req, res) => {
    const id = req.params.id;
    console.log(id)
    Team.deleteOne({_id: id}).exec((err, team) => {
      if (err) throw err
      res.json({status: 201, msg: "Deleted", success: true});
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

  controller.updateOrCreate = () => {
    return (req, res) => {
      const emailParams = req.params.email;
      const teamParams = new Team(req.body)
      Team.findOne({ email: emailParams }).exec((err, team) => {
        if (err) throw err
          if (team) {
            console.log('Updating team');
            Team.findOneAndUpdate({_id: team._id}, req.body).exec((err, user) => {
              if (err) throw err
                res.json({status: 200, user, success: true})
            })
          }  else {
            console.log('creating team');
            teamParams.save((err) => {
              if (err) {
                res.json({ success: false, err, status: 501 }).status(500)
              } else {
                res.json({ success: true, user: teamParams, status: 201 }).status(200)
              }
            })
          }
      })
    }
}



controller.teams = (app) => {
  return app.render(req, res, '/team', req.query)
}

module.exports = controller;
