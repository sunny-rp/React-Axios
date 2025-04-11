import axios from "axios";


// ye 1 axios ka instance h vo hum jab bi api se data lenge ya denge to create karna padta h 
// axios instance
 const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
 })


 // Get Method
 export const getPosts = () =>{
    return api.get("/posts");
 }
 
// Delete Method

export const deletePost = (id) =>{
   return api.delete(`posts/${id}`);
}