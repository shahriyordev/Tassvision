
const {Router} = require('express');
const router = Router();

router.get('/organization', (req, res) => {
    res.render('organization', {
        title: 'Organization Bo`limi',
        isAdd: true
    })
});

module.exports = router
