const pool = require("../../db");
const queries = require("./queries");

// For products table

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };
  
  const getProductsbyId = (req, res) => {
    const productid = parseInt(req.params.productid);
    pool.query(queries.getProductsbyId, [productid], (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };
  
  const getProductsbyBrand = (req, res) => {
    const brand = req.params.brand;
    pool.query(queries.getProductsbyBrand, [brand], (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };
  
  const getProductsbySubcategory = (req, res) => {
    const subcategory = req.params.subcategory;
    pool.query(
      queries.getProductsbySubcategory,
      [subcategory],
      (error, results) => {
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows);
      }
    );
  };
  
  const getProductsbyAll = (req, res) => {
    const searchstring = req.params.searchstring;
    let str = "SELECT * FROM products WHERE ";
    const keywords = searchstring.split(" ");
    for (let kw of keywords) {
      if (kw == "*") {
        str = "SELECT * FROM products OR ";
        break;
      }
      str += `UPPER(productname) LIKE UPPER(('%${kw}%')) OR UPPER(productdescription) LIKE UPPER(('%${kw}%')) OR UPPER(subcategory) LIKE UPPER(('%${kw}%')) OR UPPER(location) LIKE UPPER(('%${kw}%')) OR `;
    }
    str = str.slice(0, -4);
    pool.query(str, (error, results) => {
      if (error) return res.status(500).send(error.message);
      res.status(200).json(results.rows);
    });
  };

  
module.exports = {
    //products table
    getProducts,
    getProductsbyId,
    getProductsbyBrand,
    getProductsbySubcategory,
    getProductsbyAll
  };
  