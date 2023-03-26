class UserController {
    login = function (req, res) {
        res.json({id: 1, mail: "test@mail.ru"});
    }
}

module.exports = {
    userController: new UserController()
};
