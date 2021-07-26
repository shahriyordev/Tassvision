
const {Router} = require('express');
const router = Router();

router.get('/devices', (req, res) => {
    res.render('devices', {
        title: 'Devices Bo`limi',
        isAdd: true
    })
});

module.exports = router
