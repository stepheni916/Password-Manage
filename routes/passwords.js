// Welcome Page

router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));



// Dashboard

// Create a password

// POST /passwords/

router.post('/', ensureAuthenticated, (req, res) =>

  Password.insert({name: req.name, password: req.name, user: req.user})

);

// List passwords

// GET /passwords

router.get('/', ensureAuthenticated, (req, res) =>

  passwords: req.user.passwords

);



// List passwords

// DELETE /passwords/:id

router.delete('/:id', ensureAuthenticated, (req, res) =>

  Password.insert({name: req.name, password: req.name, user: req.user})

);



module.exports = router;