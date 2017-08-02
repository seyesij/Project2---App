const Show = require('../models/show');

const showController = {};

showController.index = (req, res) => {
  Show.findAll()
    .then(shows => {
      res.render('shows/show-index', {
        currentPage: 'index',
        message: 'ok',
        data: res.locals.show,
        pageNumber: res.locals.page,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

showController.show = (req, res) => {
  Show.findById(req.params.id)
    .then(show => {
      res.render('shows/show-single', {
        currentPage: 'show',
        message: 'ok',
        data: show,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};


// showController.create = (req, res) => {
//   Show.create({
//     title: req.body.title,
//     category: req.body.category,
//     status: req.body.status,
//     description: req.body.description,
//   }, req.user.id).then(() => {
//     res.redirect('/shows');
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

showController.update = (req, res) => {
  Show.update({
    title: req.body.title,
    category: req.body.category,
    status: req.body.status,
    description: req.body.description,
  }, req.params.id).then(show => {
    res.redirect(`/shows/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

showController.edit = (req, res) => {
  Show.findById(req.params.id)
    .then(show => {
      res.render('shows/show-single-edit', {
        currentPage: 'edit',
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
      res.redirect('/shows');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = showController;
