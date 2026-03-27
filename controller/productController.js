const Products = require("../model/ProductModel");

const addProducts = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      cost:req.body.cost,
      description:req.body.description,
      categories: req.body.categories,
      ratings: req.body.ratings,
      imageSrc: req.body.imageSrc,
    };
    await Products.insertOne(newProduct);
    res.status(200).json({message:"product added successfully"});
  } catch (error) {
    res.status(500).json({message:"failed to add product"});

  }
};
//delete product

const deleteProduct=async(req,res)=>{
    try {
      const deletedProduct=await Products.findByIdAndDelete(req.params.id);
      if(!deleteProduct){
        res.status(404).json({message:"product not found please check"});
      }
      res.status(200).json({message:"Deleted Successfully"});

    } catch (error) {
      res.status(500).json({message:"Failed to Delete"});  
    }
};
//get all products

const getAllProducts=async(req,res)=>{
    try {
        const allProducts=await Products.find();
  if(!allProducts){
    res.status(404).json({message:"products not found"});
  }
  res.status(200).json({allProducts});
    } catch (error) {
        res.status(500).json({message:"Failed to retrieve products"});
    }
};
//get product based on ID
const getProduct=async(req,res)=>{
    try {
        const findProduct=await Products.findById(req.params.id);
        if(!findProduct){
            res.status(404).json({message:"product not found"});
        }
        res.status(200).json({findProduct});
    } catch (error) {
        res.status(500).json({message:"failed to retrieve product"});
    }
};
//edit product
const editProduct=async(req,res)=>{
    try {
      Products.findByIdAndUpdate(req.params.id,{name: req.body.name,
      cost:req.body.cost,
      description:req.body.description,
      categories: req.body.categories,
      ratings: req.body.ratings,
      imageSrc: req.body.imageSrc,
    },
    {new:true},
      );
      if(!updatedProduct){
        res.status(404).json({message:"product not found"});
      }
      res.status(200).json({message:"updated successfully"}),updatedProduct
    } catch (error) {
        res.status(500).json({message:"failed to update the product"});
    }
};

  module.exports={
    addProducts,
    getAllProducts,
    getProduct,
    deleteProduct,
    editProduct,
  };