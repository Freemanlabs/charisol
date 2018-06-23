var Recommend = require("../model/recommend.js");

const controller = {};

controller.getWord = () => {
  return (req, res) => {
    Recommend.find({}).exec((err, recommendations) => {
      if (err) throw err;
      res.json(recommendations);
    });
  };
};

controller.saveWord = () => {
  return (req, res) => {
    const recommendation = new Recommend({
      imageUrl: req.body.imageUrl,
      name: req.body.name,
      praise: req.body.praise,
      recommender: req.body.recommender,
      recommenderCompany: req.body.company
    });

    recommendation
      .save()
      .then(recommendation =>
        res.json({ success: true, recommendation, status: 201 }).status(500)
      )
      .catch(err => res.json({ success: false, err, status: 501 }).status(500));
  };
};

controller.deleteWord = () => {
  return (req, res) => {
    const id = req.params.id;
    console.log(id);
    Recommend.deleteOne({ _id: id }).exec((err, recommendations) => {
      if (err) throw err;
      res.json({ status: 201, msg: "Deleted", success: true });
    })
  };
};



module.exports = controller;