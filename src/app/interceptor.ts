import axios from 'axios'

  export default {
    init() {
        axios.interceptors.request.use((config) => {
            return config;
          }, (error) => {
            return Promise.reject(error);
          });
        
        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            console.log("the response is",response);
            var split = response.headers.authorization.split(" ")
            if(split[0]=="Bearer"){
              localStorage.setItem("token",split[1]);
            }
            return response;
          }, (error) => {
            console.log(error);
            if(error.response){
              switch (error.response.status) {
                case 401:
                  return Promise.reject("Unauthorized Login");
                  break;
                case 408:
                  return Promise.reject("Request Timeout, try again later");
                  break;
                case 500:
                  return Promise.reject("Internal Sever Error");
                  break;
                default:
                  return Promise.reject("Error");
                  break;
              }  
            }else{
              return Promise.reject("Ups Something Went Wrong");
            }
          });
        
    }

  }