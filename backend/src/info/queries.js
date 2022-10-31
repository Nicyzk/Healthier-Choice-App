// For username table
const getUsers = "SELECT * FROM username";
const getUsersbyId = "SELECT * FROM username WHERE userid = $1";
const checkUsernameExists = "SELECT username FROM username WHERE username = $1";
const addUser = "INSERT INTO username (userid,username) VALUES ($1, $2)";
const removeUser = "DELETE FROM username WHERE userid = $1";
const updateUser = "UPDATE username SET username = $1 WHERE userid = $2";

// For userpreference table

const getPreferencebyId = "SELECT * FROM userpreference WHERE userid = $1";
const checkPreferenceExists =
  "SELECT userid, preference FROM userpreference WHERE userid = $1 AND preference = $2";
const addPreference =
  "INSERT INTO userpreference (userid, preference) VALUES ($1, $2)";
const removePreference =
  "DELETE FROM userpreference WHERE userid = $1 AND preference = $2";

//For userlists table

const getUserlistsbyId = "SELECT * FROM userlists WHERE userid = $1";
const checkUserlistExists =
  "SELECT (userid, list, productid) FROM userlists WHERE (userid = $1 AND list = $2 AND productid = $3)";
const addUserlist =
  "INSERT INTO userlists (userid, list, productid) VALUES ($1, $2, $3)";
const removeProduct =
  "DELETE FROM userlists WHERE userid = $1 AND list = $2 AND productid = $3";
const checkOnlyListExists =
  "SELECT userid, list  FROM userlists WHERE userid =$1 AND list = $2";
const removeList = "DELETE FROM userlists WHERE userid = $1 AND list = $2";

// For products table

const getProducts = "SELECT * FROM products";
const getProductsbyId = "SELECT * FROM products WHERE productid = $1";
const getProductsbyBrand = "SELECT * FROM products WHERE brand = $1";
const getProductsbySubcategory =
  "SELECT * FROM products where subcategory = $1";
//const getProductsbyAll = "SELECT * FROM products WHERE subcategory LIKE ('%$1%') OR productdescription LIKE ('%$2%') OR brand LIKE ('%$3%')"

// For hcs_categories table

const getInfo = "SELECT * FROM hcs_categories";
const getInfobyCategory = "SELECT * FROM hcs_categories WHERE category = $1";
// NOTE: Names need to be changed according to the column names
const addInfo =
  "INSERT INTO hcs_categories (subcategory, category, subcategorydescription) VALUES ($1, $2, $3)";
const checkSubcatExists =
  "SELECT subcateogry FROM hcs_categories WHERE subcateogry = $1";

module.exports = {
  //usernames table
  getUsers,
  getUsersbyId,
  checkUsernameExists,
  addUser,
  removeUser,
  updateUser,
  //userpreferences table
  getPreferencebyId,
  checkPreferenceExists,
  addPreference,
  removePreference,
  //userlists table
  getUserlistsbyId,
  checkUserlistExists,
  addUserlist,
  removeProduct,
  checkOnlyListExists,
  removeList,
  //products table
  getProducts,
  getProductsbyId,
  getProductsbyBrand,
  getProductsbySubcategory,
  //hcs_categories table
  getInfo,
  getInfobyCategory,
  addInfo,
  checkSubcatExists,
};
