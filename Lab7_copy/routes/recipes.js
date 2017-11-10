var express = require("express")
var data = require("../data")
var router = express.Router();
var recipeInfo = data.recipes;

router.get("/", async (req, res) =>{
    try
    {

        const allRecipes = await recipeInfo.getRecipes();
        res.json(allRecipes)
    }
    catch(e)
    {
        res.status(404).json({"error": "Not found"})
    }
    
        
});


router.get("/:_id",async (req, res) =>{
        try
        {
            const recipe = await recipeInfo.getRecipeById(req.params._id);
            res.json(recipe)
        }
        catch(e)
        {
            res.status(404).json({"error": "ID not found"})
        }
});

router.post("/", async (req,res) => {
        const title = req.body.title;
        const ingredients = req.body.ingredients;
        const steps = req.body.steps;
        const comments = req.body.comments;
        //console.log(RData)
        console.log(ingredients);
    
        try {
            //const {title,ingredients,steps} = RData;
            const newRecipe = await recipeInfo.addRecipes(title,ingredients,steps,comments);
            console.log("new recipe : "+newRecipe);
            res.json(newRecipe);
        } catch (e) {
            //res.status(500).json({error:e});
        }
    });


router.put("/:_id", async(req, res) => {
    var id = req.params._id;
    var updatedData = req.body;
    try{
        await recipeInfo.getRecipeById(id);
    }catch(e){
        res.status(404).json({error:"Recipe not found"});
    }
    try{
        const updatedRecipe = await recipeInfo.updateRecipe(id, updatedData);
        res.json(updatedRecipe);
    }catch(e){
        res.status(500).json({error:"Recipe not found"});
    }
    })




router.delete("/:_id",async (req, res)=>{
     let id = req.params._id;

     try {
        await recipeInfo.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }
    

    try{
        await recipeInfo.deleteRecipe(id);
    }catch(e){
        res.status(500).json({error:"not found"});
    }
    
      
     })
    
    
  




module.exports = router;