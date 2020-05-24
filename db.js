const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('🍺 🍺 🍺 MongoDB Connected...');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
