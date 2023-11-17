var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
//const { router } = require('../config/app');
let Book = require('../models/Bio_books');
let bookController = require('../controller/book')
/* Get route for the Bio Books list */

// Read Operation
/*
router.get('/books',(req,res,next) => {
    Book.find((err,BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BookList);
        }
    });
});*/

router.get('/',bookController.displayBookList);

/* Add Operation*/
/* Get route for displaying the Add-Page -- Create opration*/
router.get('/add', bookController.displayAddPage); 

/* Post route for proessing the Add-Page -- Create opration*/
router.get('/add', bookController.processAddPage);

/* Edit Operation*/
/* Get route for displaying the Edit Operation -- Update opration*/
router.get('/edit/:id', bookController.displayEditPage);
/* Post route for proessing the Edit Operation -- Update opration*/
router.get('/edit/:id', bookController.processEditPage);

/* Delete Operation*/
/* Get to perform Delete Operation -- Deletion */
router.get('/delete/:id', bookController.performDelete);


 module.exports = router;