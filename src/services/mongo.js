const mongoose = require('mongoose');

const init = async () => {
  await mongoose.connect('mongodb://localhost:27018/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};

init();