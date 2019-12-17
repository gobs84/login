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
              response.headers.Authorization=split[1];
              localStorage.setItem("token",split[1]);
              console.log("Guardando");
            }
            return response;
          }, (error) => {
            return Promise.reject(error);
          });
        
    }

  }