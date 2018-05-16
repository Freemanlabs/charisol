var Skill = require('../model/skill.js');

const controller = {}
controller.getSkills = () => {
  return (req, res) => {
    Skill.find().exec((err, skills) => {
      if (err) throw err
      res.json(skills);
    })
  }
}

controller.getSkill = () => {
  return (req, res) => {
    const id = req.params.id;
    Skill.findById(id).exec((err, skill) => {
      if (err) throw err
      res.json(skill);
    })
  }
}

controller.saveSkill = () => {
    return (req, res) => {
      const skill = new Skill(req.body);
      skill.save(req.body, (err) => {
        if (err) {
          res.json({ success: false, err, status: 501 }).status(500)
        } else {
          res.json({ success: true, skill, status: 201 }).status(200)
        }
      })
    }
  }



// controller.teams = (app) => {
//   return app.render(req, res, '/team', req.query)
// }

module.exports = controller;