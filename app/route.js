module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/login', function(req, res) {
        res.render('login.ejs');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    app.post('/login', passport.authenticate('local-login', {
       successRedirect : '/profile',
       failureRedirect : '/login',
       failureFlash : true
   }));

app.post('/post_details', function(req, res){
emp({
 name: req.body.name,
 age   : req.body.age,
 file : req.body.file
}).save(function(err, doc){
 if(err) res.json(err);
 else    res.render('form.ejs');
});
});


    app.get('/signup', function(req, res) {

        res.render('signup.ejs');
    });


    app.post('/signup', passport.authenticate('local-signup', {
   successRedirect : '/profile',
   failureRedirect : '/signup',
   failureFlash : true
    }));


    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};


function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
