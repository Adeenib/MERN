const Author = require('../models/author.model')

module.exports.createAuthor = (req, res) => {

    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));

}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(Authors => res.json(Authors))
        .catch(err => res.json(err))
}
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(ifDelete => res.json(ifDelete))
        .catch(err => res.json(err))
}
module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}