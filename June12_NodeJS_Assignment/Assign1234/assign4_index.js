const fs = require("fs");

const newData = "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

fs.appendFileSync("nodeJS_Architecture.txt", newData);

const data = fs.readFileSync("nodeJS_Architecture.txt");

console.log(data.toString());