let Product = require('../models/Product');
let User = require('../models/User');

async function clearIds(req, res, next){
   
    let user = await User.findById(req.user?._id);

    if(user){
       user.bookedHotels.forEach(index => {
 
          let id = index.toString();
    
          Product.findById(id)
           .then(res => {
    
              if(!res){

               let filter = user.bookedHotels.filter(x => x._id.toString() !== id);
               user.bookedHotels = filter;
               user.save();
               
              }
           })
       })
    }

    next();
}

module.exports = clearIds