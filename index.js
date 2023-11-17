let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});
*/

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayAboutPage);


/* GET Products page. */
router.get('/products', indexController.displayProductPage);

/* GET Services page. */
router.get('/services', indexController.displayServicePage);

/* GET Contact page. */
router.get('/contactus',indexController.displayContactPage);

module.exports = router;
