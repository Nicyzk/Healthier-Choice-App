const pool = require("../../db");
const queries = require("./queries");


// For userlists table
const getUserlistsbyId = (req, res) => {
    const userid = parseInt(req.params.userid);
    pool.query(queries.getUserlistsbyId, [userid], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const addUserlist = (req, res) => {
    const { userid, list, productid } = req.body;

    // check if list exists already
    pool.query(
        queries.checkUserlistExists,
        [userid, list, productid],
        (error, results) => {
            if (results.rows.length) {
                return res.status(500).send("Item had already been added previously!");
            } else {
                // add list to userlists table
                pool.query(
                    queries.addUserlist,
                    [userid, list, productid],
                    (error, results) => {
                        if (error) return res.status(500).send(error.message);
                        res.status(201).send("Item added successfully!");
                    }
                );
            }
        }
    );
};

// For when a user wants to create a new list
const createList = (req, res) => {
    const { userid, list, productid } = req.body;

    // check if list exists already
    pool.query(
        queries.checkOnlyListExists,
        [userid, list],
        (error, results) => {
            if (results.rows.length) {
                return res.status(422).send("List name already being used!");
            } else {
                // add list to userlists table
                pool.query(
                    queries.addUserlist,
                    [userid, list, productid],
                    (error, results) => {
                        if (error) return res.status(500).send(error.message);
                        res.status(201).send("List added successfully!");
                    }
                );
            }
        }
    );
};

const removeProduct = (req, res) => {
    const { userid, list, productid } = req.body;

    pool.query(
        queries.checkUserlistExists,
        [userid, list, productid],
        (error, results) => {
            if (!results.rows.length) {
                return res.status(422).send("Cannot remove product which has not been added yet!");
            }

            pool.query(
                queries.removeProduct,
                [userid, list, productid],
                (error, results) => {
                    if (error) return res.status(500).send(error.message);
                    res.status(200).send("Product removed successfully!");
                }
            );
        }
    );
};

const removeList = (req, res) => {
    const { userid, list } = req.body;

    pool.query(queries.checkOnlyListExists, [userid, list], (error, results) => {
        if (!results.rows.length) {
            // res.send("Cannot remove list which has not been added yet!");
            // if (error) return res.status(500).send(error.message);
            res.status(500).send("Cannot remove list which has not been added yet!")
            return;
        }

        pool.query(queries.removeList, [userid, list], (error, results) => {
            if (error) return res.status(500).send(error.message);
            res.status(200).send("List removed successfully!");
        });
    });
};


module.exports = {
    //userlists table
    getUserlistsbyId,
    addUserlist,
    createList,
    removeProduct,
    removeList
  };