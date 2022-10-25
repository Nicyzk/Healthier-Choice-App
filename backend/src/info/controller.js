const pool = require("../../db");
const queries = require("./queries");

//For username table
const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUsersbyId = (req, res) => {
  const userid = parseInt(req.params.userid);
  pool.query(queries.getUsersbyId, [userid], (error, results) => {
    if (error) throw error;
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
      if (error) throw error;
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
      if (error) throw error;
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
      if (error) throw error;
      res.status(200).send("Username updated successfully");
    });
  });
};

// For userpreference table

const getPreferencebyId = (req, res) => {
  const userid = parseInt(req.params.userid);
  pool.query(queries.getPreferencebyId, [userid], (error, results) => {
    if (error) throw error;
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
        res.send("Preference has already been added previously!");
      } else {
        // add preference to userpreference table
        pool.query(
          queries.addPreference,
          [userid, preference],
          (error, results) => {
            if (error) throw error;
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
        res.send("Cannot remove preference which has not been added yet!");
      }

      pool.query(
        queries.removePreference,
        [userid, preference],
        (error, results) => {
          if (error) throw error;
          res.status(200).send("Preference removed successfully!");
        }
      );
    }
  );
};

// For userlists table
const getUserlistsbyId = (req, res) => {
  const userid = parseInt(req.params.userid);
  pool.query(queries.getUserlistsbyId, [userid], (error, results) => {
    if (error) throw error;
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
        res.send("Item had already been added previously!");
      } else {
        // add list to userlists table
        pool.query(
          queries.addUserlist,
          [userid, list, productid],
          (error, results) => {
            if (error) throw error;
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
  pool.query(queries.checkOnlyListExists, [userid, list], (error, results) => {
    if (results.rows.length) {
      res.send("List name already being used!");
    } else {
      // add list to userlists table
      pool.query(
        queries.addUserlist,
        [userid, list, productid],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Item added successfully!");
        }
      );
    }
  });
};

const removeProduct = (req, res) => {
  const { userid, list, productid } = req.body;

  pool.query(
    queries.checkUserlistExists,
    [userid, list, productid],
    (error, results) => {
      if (!results.rows.length) {
        res.send("Cannot remove product which has not been added yet!");
      }

      pool.query(
        queries.removeProduct,
        [userid, list, productid],
        (error, results) => {
          if (error) throw error;
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
      res.send("Cannot remove list which has not been added yet!");
    }

    pool.query(queries.removeList, [userid, list], (error, results) => {
      if (error) throw error;
      res.status(200).send("List removed successfully!");
    });
  });
};

// For products table

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsbyId = (req, res) => {
  const productid = parseInt(req.params.productid);
  pool.query(queries.getProductsbyId, [productid], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsbyBrand = (req, res) => {
  const brand = req.params.brand;
  pool.query(queries.getProductsbyBrand, [brand], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsbySubcategory = (req, res) => {
  const subcategory = req.params.subcategory;
  pool.query(
    queries.getProductsbySubcategory,
    [subcategory],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getProductsbyAll = (req, res) => {

  let str = "SELECT * FROM products WHERE ";
  const keywords = req.body.keywords;
  for (let kw of keywords) {
    str += `UPPER(productname) LIKE UPPER(('%${kw}%')) OR UPPER(productdescription) LIKE UPPER(('%${kw}%')) OR UPPER(subcategory) LIKE UPPER(('%${kw}%')) OR `
  }
  str = str.slice(0,-4)
  pool.query(str, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// For hcs_categories table

const getInfo = (req, res) => {
  pool.query(queries.getInfo, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getInfobyCategory = (req, res) => {
  const category = req.params.category;
  pool.query(queries.getInfobyCategory, [category], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// NOTE: Names need to be changed according to the column names
const addInfo = (req, res) => {
  const { hcs_subcat, hcs_cat, hcs_subcat_des } = req.body;

  pool.query(queries.checkSubcatExists, [hcs_subcat], (error, results) => {
    if (results.rows.length) {
      res.send("Username already taken.");
    }
    // add user to db
    pool.query(
      queries.addInfo,
      [hcs_subcat, hcs_cat, hcs_subcat_des],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("User created successfully");
      }
    );
  });
};

module.exports = {
  //username table
  getUsers,
  getUsersbyId,
  addUser,
  removeUser,
  updateUser,
  //userpreference table
  getPreferencebyId,
  addPreference,
  removePreference,
  //userlists table
  getUserlistsbyId,
  addUserlist,
  createList,
  removeProduct,
  removeList,
  //products table
  getProducts,
  getProductsbyId,
  getProductsbyBrand,
  getProductsbySubcategory,
  getProductsbyAll,
  //hcs_categories table
  getInfo,
  getInfobyCategory,
  addInfo,
};
