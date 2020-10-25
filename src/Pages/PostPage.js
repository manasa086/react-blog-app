import React, { useEffect,useState } from "react";
import Post from "../Components/Post";
import {useParams} from "react-router-dom";

const useFetchPostByID=(id)=>{
    const [post,setPost]=useState({});
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/"+id)
        .then((res)=>res.json())
        .then((data)=>setPost(data))
        .catch(console.error);

    },[id]);

    return post;

}


const PostPage=()=>{
     
    const { id }=useParams();

    const post=useFetchPostByID(id);
    

    

    return (
      <div className="container">
          <h3>post page!!!</h3>
          
          <Post title={post.title} body={post.body} userId={post.userId} />
      </div>

    )


}

export default PostPage;