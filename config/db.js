const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/tassvisiontest", {
      useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true
    })
    console.log(`Successfully connected to MongoDB via mongoose: ${conn.connection.host}`)
  }
  catch (error) {
    console.log(`Error occured on connecting to MongoDB:`, error.message)
  }
}


module.exports = connectDB