const fs = require("fs");

fs.unlink("./nodeJS_Architecture.txt", ()=>{
    console.log("File deleted successfully.");
});