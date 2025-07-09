const sub = require("../modules/sub.js");
const subHtml = require("../src/sub.js");

function handleSubPage(req) {
    const [path, queryString] = req.url.split("?");
  let resultHtml = subHtml;
  if (queryString) {
    const queryParams = {};
    queryString.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      queryParams[key] = value;
    });
    const num1 = queryParams.num1;
    const num2 = queryParams.num2;
    if (num1 && num2) {
      const result = sub(num1, num2);
      const resultSection = `<h2 class="result">${num1} - ${num2} = ${result}</h2>`;
      resultHtml = resultHtml.replace("</form>", `</form>${resultSection}`);
    }
  }
  return resultHtml
}

module.exports=handleSubPage;