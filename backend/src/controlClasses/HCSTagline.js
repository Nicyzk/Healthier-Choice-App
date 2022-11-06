const pool = require("../../db");
const queries = require("./queries");

// For hcs_categories table

const getInfo = (req, res) => {
    pool.query(queries.getInfo, (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

const getInfobyCategory = (req, res) => {
    const category = req.params.category;
    pool.query(queries.getInfobyCategory, [category], (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
    });
};

// NOTE: Names need to be changed according to the column names
const addInfo = (req, res) => {
    const { hcs_subcat, hcs_cat, hcs_subcat_des } = req.body;

    pool.query(queries.checkSubcatExists, [hcs_subcat], (error, results) => {
        if (results.rows.length) {
            return res.status(500).send("Username already taken.");
        }
        // add user to db
        pool.query(
            queries.addInfo,
            [hcs_subcat, hcs_cat, hcs_subcat_des],
            (error, results) => {
                if (error) return res.status(500).send(error.message);
                res.status(201).send("User created successfully");
            }
        );
    });
};

module.exports = {
    //hcs_categories table
    getInfo,
    getInfobyCategory,
    addInfo,
  };
  