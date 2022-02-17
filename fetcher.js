const args = process.argv.slice(2) 
const URL = args[0]
const file = args[1]

// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like:
 
//Downloaded and saved 1235 bytes to ./index.html.

const request = require('request');

if (!URL || !file) {
 console.log('URL/File is not valid')
} else {
 request(URL, (error, response, body) => {
  if (error) {
   console.log('error:', error); // Print the error if one occurred
   return
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const fs = require('fs')

  // whatever file name is given, a file will be created with that file name and content will be stored in that file 
  // fs.writeFile is an async operation
  fs.writeFile(file, body, err => {
   if (err) {
    console.log("Couldn't download file")
    return
   }
   console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
  })
 });
}

// PLAN
// pass args[1] into first parameter of request 
// take body and input it into index.html
// use fs.writeFile to copy the contents(body) to index.html
//

