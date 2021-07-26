
const {Router} = require('express');
const router = Router();

router.get('/dash', (req, res) => {
    res.render('dash', {
        title: 'Dashboards Bo`limi',
        isAdd: true
    })
});

module.exports = router
