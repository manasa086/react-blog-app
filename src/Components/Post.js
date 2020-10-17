import React,{useEffect,useState} from "react";

const Post=(props)=>{

    const {userId}= props;
    
    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then((res)=>res.json())
        .then((data)=>setUser(data))
        .catch(console.error);
    },[userId]);
    


   
    return(
        <div className="container">
            <h3>{props.title}</h3>
            <p>Author: {user.name}</p>
            <p>{props.body}</p>
                    
        </div>
    )




}

export default Post;