var express = require('express');
var inventory = express.Router();

inventory.books = [
    { id: '1', name: 'Hamlet', published: 'Apr' },
    { id: '2', name: 'The Hobbit', published: 'Aug' },
    { id: '3', name: 'Dream of the Red Chamber', published: 'Apr' },
    { id: '4', name: 'And Then There Were None', published: 'Jan' },
    { id: '5', name: 'The Little Prince', published: 'Feb' },
    { id: '6', name: 'The Catcher in the Rye', published: 'Aug' },
    { id: '7', name: 'The Da Vinci Code', published: 'Mar' },
    { id: '8', name: 'Gone with the Wind', published: 'Apr' },
    { id: '9', name: 'Valley of the Dolls', published: 'Aug' },
    { id: '10', name: 'The Godfather', published: 'Apr' },
    { id: '11', name: 'To Kill A Mocking Bird', published: 'Aug' },
    { id: '12', name: 'The Thorn Birds', published: 'Apr' },
    { id: '13', name: 'Planet Of The Apes', published: 'Jan' },
    { id: '14', name: 'War and Peace', published: 'Jan' },
];

module.exports = inventory;