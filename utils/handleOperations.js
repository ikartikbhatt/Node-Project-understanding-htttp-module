// operators
const operations = require("../modules/operations");

// pages
const loadhtml=require("../src/main") 

function handleOperation(req) {
  const [path, queryString] = req.url.split("?"); // if query string is present, it will be separated by '?'
  const userOperation = path.split("/")[1]; // add sub mul div
  
  const hashMap = {
    add: {
      operation: operations.add,
      operator: "+",
      pages: loadhtml.operationTemplate(userOperation),
    },
    sub: {
      operation: operations.sub,
      operator: "-",
      pages: loadhtml.operationTemplate(userOperation),
    },
    mul: {
      operation: operations.mul,
      operator: "*",
      pages: loadhtml.operationTemplate(userOperation),
    },
    div: {
      operation: operations.div,
      operator: "/",
      pages: loadhtml.operationTemplate(userOperation),
    },
  };



  let resultHtml = hashMap[userOperation].pages; // html pages loaded

  if (queryString) {
    console.log("queryString>>>>>>>", queryString);

    const queryParams = {};

    queryString.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      console.log("key>>>>>", key);
      console.log("value>>>>", value);
      queryParams[key] = value;
    });
    console.log("querryParams>>>>>>", queryParams);

    const num1 = Number(queryParams.num1);
    const num2 = Number(queryParams.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
      let result = hashMap[userOperation].operation(num1, num2);
      const resultSection = `<h2 class="result">${num1} ${hashMap[userOperation].operator} ${num2} = ${result}</h2>`;
      resultHtml = resultHtml.replace("</form>", `</form>${resultSection}`);
    }
  }

  return resultHtml;
}

module.exports = handleOperation;
