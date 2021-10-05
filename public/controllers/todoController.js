const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster0.pbshb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const todoSchema = new mongoose.Schema({
    item: String

});

const Todo = mongoose.model('Todo', todoSchema);

// const itemOne = Todo({item:'buy flowers'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');

// });

// const data =[{item:'get milk'},{item:'walk dog'},{item:'football'},];

module.exports = function(app){
    app.get('/todo', function(req,res){
        Todo.find({}, function(err, data){
            if(err) throw err;
        res.render('todo', {todos:data});
        });
    });

    app.post('/todo', urlencodedParser, function(req,res){
        const itemOne = Todo(req.body).save(function(err,data){
                 if(err) throw err;
                 res.json(data);
                 console.log('item saved');
                 });
    });

    app.delete('/todo/:item', function(req, res) {
        // data = data.filter(function(todo) {
        //   return todo.item.replace(/ /g, "-") !== req.params.item;
        // });
        Todo.find({item: req.params.item.replace(/-/g, " ")}).remove(function(err, data) {
          if (err) throw err;
          res.json(data);
          console.log('item deleted');
        });
      });
}