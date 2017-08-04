 const Show = require('../models/show');

const showController = {};

showController.index = (req, res) => {
  Show.findUserShows(req.user.id)
    .then(shows => {
      res.render('user/myshows', {
        message: 'ok',
        data: shows,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

showController.show = (req, res) => {
  Show.findById(req.params.id)
    .then(show => {
      res.render('user/myshows-single', {
        message: 'ok',
        data: show,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

showController.create = (req, res) => {
  Show.create({
    title: req.body.title,
    genre: req.body.genre,
    country: req.body.country,
    network: req.body.network,
    status: req.body.status,
    }, req.user.id).then(() => {
    res.redirect('/myshows');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};


showController.update = (req, res) => {
  Show.update({
    title: req.body.title,
    genre: req.body.genre,
    country: req.body.country,
    network: req.body.network,
    status: req.body.status,
  }, req.params.id).then(show => {
    res.redirect(`/myshows/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

showController.edit = (req, res) => {
  Show.findById(req.params.id)
    .then(show => {
      res.render('user/myshows-single-edit', {
        data: show,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

showController.delete = (req, res) => {
  Show.destroy(req.params.id)
    .then(() => {
      res.redirect('/myshows');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = showController;
