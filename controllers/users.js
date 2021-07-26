const User = require('../models/Users')

//@desc Get all users
//@route GET /users
//@access Private/Admin
exports.getUsers = async (req, res, next) => {
  try {
    users = await User.find()
    res.status(200).render("users", {data: users})
    // res.render('devices', { data: users })
  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message })
  }
}


//@desc Get a single user
//@route GET /user/:id
//@access Private/Admin
exports.getUser = async (req, res, next) => {
  try {
    console.log(req.params.id)
    const user = await User.findById(req.params.id)
    res.status(200).json({
      success: true,
      data: user
    })
  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message })
  }
}


//@desc Create  a user
//@route POST /users/
//@access Private/Admin
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json({
      success: true,
      data: user
    })
  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message })
  }
}


//@desc Update  a user
//@route PUT /users/:id
//@access Private/Admin
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      success: true,
      data: user
    })
  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message })
  }
}


//@desc Delete  a user
//@route DELETE users/:id
//@access Private/Admin
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
      success: true,
      data: {}
    })
  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message })
  }

}