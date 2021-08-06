const AuthorControllers = require('../controllers/author.controllers')
module.exports = app => {
    app.get('/api/author/', AuthorControllers.getAllAuthors)
    app.post('/api/author/new/', AuthorControllers.createAuthor)
    app.put('/api/author/update/:id', AuthorControllers.updateAuthor)
    app.delete('/api/author/delete/:id', AuthorControllers.deleteAuthor)
    app.get('/api/author/:id', AuthorControllers.getOneAuthor)
}