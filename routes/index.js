
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Asosiy Bo`limi',
        isAdd: true
    });
});

module.exports = router
