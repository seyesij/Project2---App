const showapiController = {};

showapiController.index = (req, res) => {
      res.render('shows/show-index', {
        currentPage: 'index',
        message: 'ok',
        data: res.locals.show,
        pageNumber: res.locals.page,
        showName: res.locals.name,
      })
};

showapiController.show = (req, res) => {
      res.render('shows/show-single', {
        currentPage: 'show',
        message: 'ok',
        data: res.locals.show,
        showName: res.locals.name,
      })
    };

module.exports = showapiController;
