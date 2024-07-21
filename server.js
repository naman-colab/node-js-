const express=require('express')

PORT=4000
const app=express()

app.get("/",(req,res)=>{
    res.send("heloooo bhaiiiii")
})

const start=()=>{
try{
app.listen(PORT,()=>{
    console.log(`server is running :http://localhost:${PORT}`);

})
}
catch(err){
console.log(err)
}
}


start()