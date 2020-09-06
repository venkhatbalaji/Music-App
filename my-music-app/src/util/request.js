
async function request(endpoint) {
    try {         
          if(endpoint){
             const response = await fetch(endpoint).then(data => data.json());
             return response;
          }
    
        } catch (e) {
        console.log(e)
    }     
};


export default request;