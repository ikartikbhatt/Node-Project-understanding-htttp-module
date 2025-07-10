const loadhtml = require("../src/main.js");
const handleOperations = require("../utils/handleOperations.js");

function router(req, res) {
  const fullPath = req.url.split("?")[0]; // returns /add , /sub , /
  console.log('fullPath>>>',fullPath);
  
  const request = fullPath === "/" ? "/" : fullPath.slice(1);   // handle "/" correctly
  console.log("requested page>>>>", request);           //[add,sub,mul,div,/]

  const routeTable = {
    "/": {
      page: () => loadhtml.indexHtml
    },
    home: {
      page: () => loadhtml.indexHtml
    },
    add: {
      page: handleOperations,
    },
    sub: {
      page: handleOperations,
    },
    mul: {
      page: handleOperations,
    },
    div: {
      page: handleOperations,
    },
  };

  const route = routeTable[request];
  if (route) {
    console.log(`${request} page accessed`);
    const resultHtml = route.page(req); 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(resultHtml);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(loadhtml.notFoundPageHtml);
  }
}

module.exports = router;
