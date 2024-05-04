const getProducts = async (req,res)=>{
    try {
        const products = {"Products": ["apple","mango","orange"]};
        // res.status(200).json(products);
        res.json(products).status(200);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const saveProducts = async (req,res)=>{
    try {
        const products = {"Products": "dates save successfully"};
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


module.exports = {
    getProducts,
    saveProducts
};