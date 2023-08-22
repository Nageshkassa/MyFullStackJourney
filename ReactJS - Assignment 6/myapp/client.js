var net = require("net");
var client = new net.Socket();

var makeGETRequest = function() {
  client.connect(3001, "localhost", function() {
    const request = [
      "GET /test?a=1 HTTP/1.0",
      "Host: localhost:3001",
      "Content-Type: application/json",
      "Content-Length: 7",
      "\r\n"
    ].join("\r\n");
    client.write(request);
  });
};

var makePOSTRequest = function() {
  client.connect(3001, "localhost", function() {
    console.log("makePostRequest function");
    const request = [
      "POST /test1?a=1 HTTP/1.0",
      "Host: localhost:3001",
      "Content-Type: application/x-www-form-urlencoded",//it is  media type of the data being sent in an HTTP request or response.
      //URL-encoded form- it is  way of representing data in key-value pairs,
      "Content-Length: 7",
      "\r\n"
      
    ].join("\r\n");
    client.write(request);
  });
};

// makeGETRequest();
makePOSTRequest();

let receivedData = "";

client.on("data", function(data) {
  receivedData += data.toString();
  if (receivedData.includes("\r\n\r\n")) {
    const [headers, body] = receivedData.split("\r\n\r\n");
    const responseHeaders = headers.split("\r\n");
    console.log("Response Headers:");
    for (const header of responseHeaders) {
      console.log(header);
    }
    console.log("\nResponse Body:");
    console.log(body);
    client.end(); // Close the connection
  }
});

client.on("close", function() {
  console.log("Connection closed");
});
