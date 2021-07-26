
const {Router} = require('express');
const router = Router();

router.get('/debug', (req, res) => {
    res.render('debug', {
        title: 'Debug bo`limi',
        isAdd: true
    })
});

module.exports = router
