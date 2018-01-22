require('./app/models/user.js');

app.post('/post_details', function(req, res){
emp({
 name: req.body.name,
 age   : req.body.age
}).save(function(err, doc){
 if(err) res.json(err);
 else    res.send('Successfully inserted!');
});
});
