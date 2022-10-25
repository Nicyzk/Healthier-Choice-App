const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// For username table in DB
router.get("/users", controller.getUsers);
router.post("/users", controller.addUser);
router.get("/users/:userid", controller.getUsersbyId);
router.delete("/users/:userid", controller.removeUser);
router.put("/users/:userid", controller.updateUser);

// For userpreference table in DB

router.get("/userpreference/:userid", controller.getPreferencebyId);
router.post("/userpreference", controller.addPreference);
router.delete("/userpreference/:userid", controller.removePreference);

// For userlists table in DB (Will not allow user to create an empty list, item has to be added into list)
router.get("/userlists/:userid", controller.getUserlistsbyId);
router.post("/userlists", controller.addUserlist);
router.post("/userlists/createlist", controller.createList);
router.delete("/userlists/removeproduct", controller.removeProduct);
router.delete("/userlists/removelist", controller.removeList);

// For products table in DB
// 
router.get("/search", controller.getProducts);
router.get("/search/product/:productid", controller.getProductsbyId);
router.get("/search/brand/:brand", controller.getProductsbyBrand);
router.get(
  "/search/subcategory/:subcategory",
  controller.getProductsbySubcategory
);
router.get("/search/all", controller.getProductsbyAll)

// For hcs_categories table

router.get("/info/category", controller.getInfo);
router.get("/info/category/:category", controller.getInfobyCategory);
router.post("/info/category", controller.addInfo);

module.exports = router;
