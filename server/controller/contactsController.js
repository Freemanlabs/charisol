const Contact = require('../model/contact.js');

const controller = {}
controller.getContacts = () => {
  return (req, res) => {
    Contact.find().exec((err, teams) => {
      if (err) throw err
      res.json(teams);
    })
  }
}

controller.saveContact = () => {
  return (req, res) => {
    const contact = new Contact(req.body);
    contact.save(req.body, (err) => {
      if (err) {
        res.json({ success: false, err, status: 501 }).status(500)
      } else {
        res.json({ success: true, contact, status: 201 }).status(200)
      }
    })
  }
}



// controller.teams = (app) => {
//   return app.render(req, res, '/team', req.query)
// }

module.exports = controller;
