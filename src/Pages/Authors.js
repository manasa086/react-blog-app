import React,{useState,useEffect} from "react";
import {useRouteMatch,Link,Switch,Route} from "react-router-dom";
import Author from "../Components/Author"

const Authors=()=>{
    const [authors,setAuthors]=useState([]);

    const {path,url}=useRouteMatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setAuthors(data))
        .catch(console.error)
    }, []);

    return (
        <div className="container">
            <h2>Authors</h2>
            <ul>
                {
                    authors.map((author,index)=>{
                    return <li key={index}><Link to={url+"/"+author.id}>{author.name}</Link></li>
                    })
                }
            </ul>
            <Switch>
                <Route path={path+"/:authorId"}>
                    <Author/>
                </Route>
            </Switch>

        </div>
    )
   

}


export default Authors;