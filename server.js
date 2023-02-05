const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cars=require("./car");
const bodyparse=require("body-parser");
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());

 app.get("/cars", async (req,res) => {

    try{

        await cars.find({}).then(result=>{res.send(result)});
    }
    catch(err){
        console.log(err);
    }
});

app.post("/add_cars",async(req,res)=>{

    try{
        let new_car=new cars({
            name:req.body.name,
            serial:req.body.serial,

            
        })
        await new_car.save();
        res.send("car add ")
    }
    catch(err){
        console.log(err)
    }
})

app.delete('/del/:id',async(req,res)=>{

    try {
        await cars.findOneAndDelete({id:req.params.id})
        res.send("tfasa5at c bon");
    } catch (err) {
        console.log(err)
    }
})

mongoose.connect(
    "mongodb+srv://haddad211:123456789Mh@haddad.orogwus.mongodb.net/myfirstdata?retryWrites=true&w=majority",
    (err,done) =>{
       if (err){
        console.log("false");
       }
       if(done){
        console.log("true in true")
       }
  
    }  
);


app.listen(9000,()=> console.log("server work"));