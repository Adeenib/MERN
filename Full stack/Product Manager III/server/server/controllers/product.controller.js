const Product = require('../models/product.model');


module.exports.findAllProducts = (req, res) => {

    Product.find()
        .then((allProducts) => res.json({ Products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}


module.exports.creatProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));

}
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json(oneSingleProduct))
        .catch(err => res.json({ message: "Something went wrong", error: err }));

}
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
