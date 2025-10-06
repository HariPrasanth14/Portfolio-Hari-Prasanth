const { app,port } = require("./app")

app.use((req,res)=>{
    res.status(404).send("404 Page Not Found")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
}
)

app.on("error",(err)=>{
    console.log(`Error occurred: ${err.message}`)
    process.exit(1)
})