import React,{useEffect,useState} from "react";
import Post from "../Components/Post";
import {useHistory} from "react-router-dom";
import button from "reactstrap";
import routes from "../routes";

const Home=()=>{
    const [posts,setPosts]=useState([]);

    const history=useHistory();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch(console.error);

    },[])


    return(
        <div className="container">
            <h2>Home Page!!!</h2>
            {
                
                posts.map((post,index)=>{
                    const openPostDetails=()=>{

                        history.push(routes.post.replace(":id",post.id));
                        
                    }
                    
                    return (
                        <div key={index} className="container">
                       <Post key={index}  title={post.title} body={post.body} userId={post.userId} />
                       <button onClick={openPostDetails}>Read More</button>
                       </div>
                    )
                    
                   
                })
            }
            
            

        </div>

    )



}


export default Home;