//method 1 of making wrapper function using promise
const asyncHandler=(asyncHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}




//higher order function which take other function as a parameter and return them as well
/*method 2 of making wrapper function using try and catch
const asyncHandler=(fn)=>async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }catch(error){
        res.status(error.code||500).json({
            success:false,
            message:error.message
        })
    }
}*/
export {asyncHandler}