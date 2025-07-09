const add = require("../modules/add");
const addHtml = require("../src/add");

function handleAddPage(req) {
  console.log('request>>>>>>',req.url);
  
  const [path, queryString] = req.url.split("?");
  let resultHtml = addHtml;
  
  if (queryString) {
    console.log('queryString>>>>>>>',queryString);
    
    const queryParams = {};

    queryString.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      console.log('key>>>>>',key);
      console.log('value>>>>',value);
      queryParams[key] = value;
    });
    console.log('querryParams>>>>>>',queryParams);
    
    const num1 = queryParams.num1;
    const num2 = queryParams.num2;

    if (num1 && num2) {
      const result = add(num1, num2);
      const resultSection = `<h2 class="result">${num1} + ${num2} = ${result}</h2>`;
      resultHtml = resultHtml.replace("</form>", `</form>${resultSection}`);
    }
  }

  return resultHtml;
}

module.exports = handleAddPage;
