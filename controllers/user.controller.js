const users = require('../public/fakeData.json');


module.exports.getRandomUser = (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    res.send(randomUser);
};


module.exports.getAllUser = (req, res) => {
    res.send(users);
};

module.exports.saveAUser = (req, res) => {
    users.push(req.body);
    res.send(users);
}



