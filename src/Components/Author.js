import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";

const Author=()=>{

    const [author,setAuthor]=useState({});

    const {authorId} =useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/"+authorId)
        .then((res)=>res.json())
        .then((data)=>setAuthor(data))
        .catch(console.error)
    }, [authorId]);

    return(
        <div>
            <p>{author.name}</p>
            <p>{author.email}</p>            
             <p>{author.website}</p>       
        </div>
    )


}

export default Author;