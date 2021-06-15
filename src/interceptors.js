// import axios from "axios";

// export default function  setupInterceptors(history){
//     axios.defaults.baseURL = "http://localhost:3300/";

//     axios.interceptors.request.use(
//         function(req){
//             let token = localStorage.getItem("token");
//             if(!token){
//                 console.log("Token not found");
//             }else{
//                 req.headers["authorization"] = "Bearer "+token;
//             }
//             return req;
//         }
//     ,
//     function(error){
//         console.log("Error faced", error.message)
//         return Promise.reject(error)
//     }
// )