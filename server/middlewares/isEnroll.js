let Product = require('../models/Product');

async function isEnroll(req, res, next) {
    if (req.user) {
        let product = await Product.findById(req.params.productId);
        let isTrue = product.usersEnrolled.includes(req.user._id);



        if (isTrue) {
            res.locals.isEnroll = true;
        }
    }

    next();
}

module.exports = isEnroll;