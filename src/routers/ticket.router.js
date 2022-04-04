const express = require("express")
const router = express.Router()

router.all('/', (req,res,next) => {
    // res.json({message: "returnn from ticket router"})
   next();
})
// router.post("/",(req,res) =>
// {
//     res.json(req.body);
//     // console.log("blabalbabal");
//     // try {
//     //     const result = await insertUser (req.body);
//     //     console.log(result);
//     //     res.json({message: "New user created", result});
        
//     // } catch (error) {
//     //     console.log(error);
//     //     res.json({statusx:'error',message: error.message});
//     // }
   
// });

module.exports = router;

