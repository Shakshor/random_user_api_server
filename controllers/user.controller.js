let users = require('../public/fakeData.json');


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
};

module.exports.updateAUser = (req, res) => {
    const { id } = req.params;
    const { gender, name, contact, address, img } = req.body;
    const filter = { _id: id };
    const updatedUser = users.find(user => user.id === Number(id));



    gender && (updatedUser.gender = req.body.gender);
    name && (updatedUser.name = req.body.name);
    contact && (updatedUser.contact = req.body.contact);
    img && (updatedUser.img = req.body.img);
    address && (updatedUser.address = req.body.address);

    // console.log(updatedUser);
    res.send(updatedUser);
};


module.exports.deleteAUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== Number(id));

    res.send(users);
};





