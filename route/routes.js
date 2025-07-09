const indexHtml = require("../src/index.js");
const styleCss = require("../src/style.js");
const notFoundPageHtml = require("../src/404.js");
const handleAddPage = require("../utils/handleAddPage");
const handleSubPage = require("../utils/handleSubPage");
const handleMulPage = require("../utils/handleMulPage");
const handleDivPage= require("../utils/handleDivPage");

function router(req,res) {
    if (req.url == "/" || req.url == "/home") {
      console.log("home page accessed");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(indexHtml);
    } 
    else if (req.url.startsWith("/add")) {
      console.log("add page accessed");
      const resultHtml = handleAddPage(req);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(resultHtml);
    }
    else if (req.url.startsWith("/sub")) {
      console.log("sub page accessed");
      const resultHtml=handleSubPage(req);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(resultHtml);
    } 
    else if (req.url.startsWith("/div")) {
      console.log("div page accessed");
      let resultHtml=handleDivPage(req);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(resultHtml);
    }
    else if (req.url.startsWith("/mul")) {
      console.log("mul page accessed");
      const resultHtml=handleMulPage(req);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(resultHtml);
    } 
    else if (req.url == "/style.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(styleCss);
    } 
    else {
      console.log("404 page accessed");
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(notFoundPageHtml);
    }
  };


  module.exports=router;
