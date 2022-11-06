const pool = require("../../db");
const queries = require("./queries");


// For userpreference table

const getPreferencebyId = (req, res) => {
    const userid = parseInt(req.params.userid);
    pool.query(queries.getPreferencebyId, [userid], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const addPreference = (req, res) => {
    const { userid, preference } = req.body;

    // check if preference exists already
    pool.query(
        queries.checkPreferenceExists,
        [userid, preference],
        (error, results) => {
            if (results.rows.length) {
                return res.status(500).send("Preference has already been added previously!");
            } else {
                // add preference to userpreference table
                pool.query(
                    queries.addPreference,
                    [userid, preference],
                    (error, results) => {
                        if (error) return res.status(500).send(error.message);
                        res.status(201).send("Preference added successfully!");
                    }
                );
            }
        }
    );
};

const removePreference = (req, res) => {
    const { userid, preference } = req.body;

    pool.query(
        queries.checkPreferenceExists,
        [userid, preference],
        (error, results) => {
            if (!results.rows.length) {
                return res.status(500).send("Cannot remove preference which has not been added yet!");
            }

            pool.query(
                queries.removePreference,
                [userid, preference],
                (error, results) => {
                    if (error) return res.status(500).send(error.message);
                    return res.status(200).send("Preference removed successfully!");
                }
            );
        }
    );
};


module.exports = {
    //userpreference table
    getPreferencebyId,
    addPreference,
    removePreference
};


