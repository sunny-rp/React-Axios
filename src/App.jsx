import { useEffect } from "react";
import getPosts from "./api/PostApi.jsx";


function App() {
  // console.log(getPosts());
  const getPostData = async() => {
    const res = await getPosts();
    console.log(res.data);
  }

  useEffect (()=>{
    getPostData();
  },[]);
  return (
    <>
      <h1>Hello </h1>
    </>
  )
}

export default App
