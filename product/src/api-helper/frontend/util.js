import axios from "axios"

export const signUpApi = async(data) =>{
    const header = {
        "Content-Type": "application/json",
        //token: token,
        //"Access-Control-Allow-Origin": "http://localhost:3000/" ,
        //'x-rapidapi-host': 'localhost:8000',// Host header to identify domain, most likely without header request will throw 400 error
      };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        headers: header,
        data: {
         query: `mutation {
            register(username: "${data.firstName}" , email: "${data.email}", password1 : "${data.password1}" ,password2 : "${data.password2}" ){
                success
                errors 
                token 
                refreshToken 
                }
            }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata);
       return resdata;
}

export const signInApi = async(data) =>{
    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        headers: header,
        data: {
         query: `mutation {
            tokenAuth(username: "${data.username}" , password : "${data.password}"){
                success,
                errors,
                token,
                refreshToken
                user{
                    username
                    
                }
                }
            }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata);
       return resdata;
}

export const sendProduct = async (data) =>{

    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
       // headers: header,
        data: {
         query: `mutation{
            createProduct( productId:"${data.productId}",productName:"${data.productName}", productDescription:"${data.productDescription}",
            productImage:"${data.productImage}", listPrice:${data.listPrice} ,slaesPrice:${data.slaesPrice},
            productStock:"${data.productStock}",productFeatures:"${data.productFeatures}",currency:"${data.currency}"
            ){
              success
              product{
                 productId,
              productName,
              productDescription,
              listPrice,
              slaesPrice
              }
            }
          }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata);
       return resdata;
}

export const getAllProduct = async(data) =>{
    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        headers: header,
        data: {
         query: `{
            products{
               productId,
               productName,
               productDescription,
               listPrice
               slaesPrice
               productImage
              }
           }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata.data);
       return resdata;
}
export const getProductById = async (id) =>{
    const header = {
        "Content-Type": "application/json",
        };
    const res = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        headers: header,
        data: {
         query: `{
            product(productId:"${id}"){
                productId,
                productName,
                productDescription,
                listPrice,
                slaesPrice,
                productImage
              }
            }`
        }
       });
       const resdata = await res.data;
       console.log("data" + resdata.data);
       return resdata;
}