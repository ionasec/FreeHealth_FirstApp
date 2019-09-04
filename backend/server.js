const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Issue = require('./models/issue.js');
//const IssueModel = issue.IssueModel;

//var instance = new issue( {title: 'test'},{responsible: 'me'});

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issues');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connetion to Mongo successfull');
});

router.route('/issues').get((req,res) => {
    Issue.find((err, issues) => {
        if(err)
            console.log(err);
        else
            res.json(issues);
    });
});


router.route('/issues/:id').get((req,res) => {
    Issue.findById(req.params.id,(err,issue) => {
        if(err)
           console.log(err);
        else
        res.json(issue);
    });
});

router.route('/issues/add').post((req,res) => {
    
    let issue = new Issue(req.body);
    
    issue.save().then(issue => {
        res.status(200).json('added issue done');
    }).catch(err => {
        res.status(400).send('added failed');
    });
});

router.route('/issues/update/:id').post((req,res) => {
    Issue.findById(req.params.id,(err,issue) => {
        if(!issue)
        {
            console.log('sfwnfoneoifnwoifwnoifnwiofwn');
            console.log(err);
            return next(new Error('cloud not load document'));
        }
        else
        {
            console.log(issue);
            console.log(req.body.title);
            console.log(req.body.responsible);
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
})

app.use('/', router);

app.get('/', (req,res) => res.send('hello world'));

app.listen(4000, () => console.log('express server running on port 4000'));