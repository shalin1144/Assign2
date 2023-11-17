var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
//const { router } = require('../config/app');
let Book = require('../models/Bio_books');


module.exports.displayBookList = (req,res,next)=>{ //< Mark function as async
    try{
       const BookList = Book.find(); //< Use of await keyword
       res.render('book/list', {
          title: 'Books', 
          BookList: BookList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('Bio_books', {
          error: 'Error on server'
       });
    }
 }

 module.exports.displayAddPage = (req,res,next)=>{
    res.render('book/add',{title:'Add Book'})
}

module.exports.processAddPage =  (req,res,next)=>{
    let newBook = Book ({
        "name" :req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "discription":req.body.discription,
        "price":req.body.price
    });
    Book.create(newBook,(err,Book) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/bookslist');
        }
    });
    
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('book/edit',{title:'Edit Book', book:bookToEdit});
        }

    });
    
}


module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;
    let updateBook = Book({
        "_id": id,
        "name" :req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "discription":req.body.discription,
        "price":req.body.price
    });
    Book.updateOne({_id:id},updateBook,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/bookslist');
        }
    });
    
}

module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;
    Book.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/bookslist');
        }
    });
    
}