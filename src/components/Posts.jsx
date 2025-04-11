import { useEffect,useState } from "react";
import { deletePost,getPosts } from "../api/Postapi";

function Posts() {
    const [data,setData] = useState([]);
    const getPostData = async () => {
        const res = await getPosts();
        console.log(res.data);
        setData(res.data);
    }

    useEffect(() => {
        getPostData();
    }, []); 

    const handleDeletePost = async (id) =>{
       try {
        const res = await deletePost(id);
        console.log("sunny bhai ka response", res.data);
        if(res.status === 200){
            console.log("sunny bhai ka 2nd response", data);
           const updatedPosts = data.filter((curPost) =>{
            return curPost.id !== id;
           })
           setData(updatedPosts);
        }
       } catch (error) {
        console.log(error);
       }
    }

    return (
        <>
        <h1>DATA is here</h1>
        <ol>
            {
                data.map((curData) => {
                    return <li key={curData.id}>
                        <p>Title: {curData.title}</p>
                        <p>Body: {curData.body}</p>
                        <button>Edit</button>
                        <button onClick={()=>handleDeletePost(curData.id)}>Delete</button>
                    </li>
                })
            }
        </ol>

        </>
    )
}

export default Posts