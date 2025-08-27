exports.refreshRender = async (req,res) => {
    try{
        res.status(200).json({message:"Backend server started"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}