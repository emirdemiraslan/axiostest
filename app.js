const axios = require('axios');

const url= 'http://www.classification.gov.au/';


const getResponse = async () => {
    let response = null;
    try{
    
        response = await axios.get(url,{
            timeout: 3000,
            maxRedirects: 5
        });
    }
    catch(err ) {
        //console.error(err.response.status);
        response = err.response; 
        
    }  
    //console.log(response);
    return response;
}
let response = null;

(async () => {
    response = await getResponse();
    console.log(response.status);
    if(response.status == 200) {
        let lastRedirectedUrl = response.request.res.responseUrl;
        console.log(lastRedirectedUrl);
        if(lastRedirectedUrl != url) {
            console.log("redirected");
        }
    }
})()