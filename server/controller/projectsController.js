const Project = require('../model/project.js');

const controller = {}
controller.getProjects = () => {
  return (req, res) => {
    Project.find().exec((err, projects) => {
      if (err) throw err
      res.json(projects);
    })
  }
}

controller.saveProjects = () => {
  return (req, res) => {
    const project = new Project(req.body);
    project.save(req.body, (err) => {
      if (err) {
        res.json({ success: false, err, status: 501 }).status(500)
      } else {
        res.json({ success: true, project, status: 201 }).status(200)
      }
    })
  }
}

controller.admin = () => {
    return (req, res) => {
      res.render('../../admin/index.html')
    }
  }



module.exports = controller;