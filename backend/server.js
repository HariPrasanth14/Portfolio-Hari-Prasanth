const { app,port } = require("./app")

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
}
)

app.on("error",(err)=>{
    console.log(`Error occurred: ${err.message}`)
    process.exit(1)
})