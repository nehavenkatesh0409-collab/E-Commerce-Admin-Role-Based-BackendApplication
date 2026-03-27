const{
     addProducts,
    getAllProducts,
    getProduct,
    deleteProduct,
    editProduct,
}=require("../controller/productController");
const express=require("express");
const { route } = require("./UserRouter");
const router=express.Router();

router.post("/add-product",addProducts);
router.get("/get-allProducts",getAllProducts);
router.get("/getProduct/:id",getProduct);
router.delete("/delete-product/:id",deleteProduct);
router.put("/update-Product/:id",editProduct);

module.exports=router;