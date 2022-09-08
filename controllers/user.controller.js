let users = require('../public/fakeData.json');


module.exports.getRandomUser = (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    res.send(randomUser);
};


module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;
    // (limit && limit <= users.length) && (users = users.slice(0, limit));
    if (limit) {
        if (limit <= users.length && limit > -1) {
            users = users.slice(0, limit);
            res.send(users);
        }
        else {
            res.status(404).send("users not found.")
        }
    };
    res.send(users);
};

module.exports.saveAUser = (req, res) => {
    users.push(req.body);
    res.send(users);
};

module.exports.updateAUser = (req, res) => {
    // const { id } = req.params;
    const { id, gender, name, contact, address, img } = req.body;
    const filter = { _id: id };
    if (typeof (id) !== "string") {
        res.status(404).send("id is not found");
    }
    const updatedUser = users.find(user => user.id === Number(id));
    gender && (updatedUser.gender = gender);
    name && (updatedUser.name = name);
    contact && (updatedUser.contact = contact);
    img && (updatedUser.img = img);
    address && (updatedUser.address = address);
    res.send(updatedUser);
};


module.exports.deleteAUser = (req, res) => {
    const { id } = req.body;
    users = users.filter(user => user.id !== Number(id));

    res.send(users);
};





