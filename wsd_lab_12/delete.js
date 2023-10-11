const fs = require("fs");
const path = require("path");

//delete file
fs.unlink(path.join(__dirname, "posts", "blogPost.txt"), (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File Deleted");
    }
});