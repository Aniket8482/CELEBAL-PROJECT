const express = require('express')
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static("./"));

app.get("*",(req,res) => {
    app.sendFile(path.resolve(__dirname,"index.html"));
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});