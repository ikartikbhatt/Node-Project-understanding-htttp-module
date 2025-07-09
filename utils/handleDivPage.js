const div=    require("../modules/div")
const divHtml= require("../src/div")

function handleDivPage(req) {
    const[path,queryString]=req.url.split("?");
    let resultHtml=divHtml;
    console.log(path);
    console.log(queryString);
    
    if (queryString) {
        const queryParams={};
        queryString.split("&").forEach(pair => {
            const[key,value]=pair.split("=")
            queryParams[key]=value
        });
        const num1=queryParams.num1;
        const num2=queryParams.num2;
        if (num1&&num2) {
            const result=div(num1,num2).toFixed(2);
            const resultSection=`<h2 class="result">${num1} / ${num2} = ${result}</h2>`;
            resultHtml=divHtml.replace("</form>",`</form>\n${resultSection}`);
        }
       
    }
    return resultHtml;
}

module.exports=handleDivPage;