const pool = require("../../db");
const queries = require("./queries");

//For username table
const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const getUsersbyId = (req, res) => {
    const userid = parseInt(req.params.userid);
    pool.query(queries.getUsersbyId, [userid], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { userid, username } = req.body;

    // check if username exists already
    pool.query(queries.checkUsernameExists, [username], (error, results) => {
        if (results.rows.length) {
            res.send("Username already taken.");
        }

        // add user to db
        pool.query(queries.addUser, [userid, username], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(201).send("User created successfully");
        });
    });
};

const removeUser = (req, res) => {
    const userid = parseInt(req.params.userid);

    pool.query(queries.getUsersbyId, [userid], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database");
        }

        pool.query(queries.removeUser, [userid], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(200).send("User removed successfully!");
        });
    });
};

const updateUser = (req, res) => {
    const userid = parseInt(req.params.userid);
    const { username } = req.body;
    pool.query(queries.getUsersbyId, [userid], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database");
        }

        pool.query(queries.updateUser, [username, userid], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(200).send("Username updated successfully");
        });
    });
};


module.exports = {
    //username table
    getUsers,
    getUsersbyId,
    addUser,
    removeUser,
    updateUser
  };