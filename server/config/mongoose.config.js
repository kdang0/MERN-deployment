const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/piratedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));