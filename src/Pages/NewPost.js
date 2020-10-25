import React,{Component} from "react";


class NewPost extends Component{

    state={
        title:"",
        content:"",
    }

    onTitleChange=(event)=>{
        this.setState({
            title:event.target.value
        })
    }
    onContentChange=(event)=>{
        this.setState({
            content:event.target.value
        })
    }


    render()
    {
        return(
            <>
            <h1>Add New Post</h1>
            <label>Title:</label>
            <input type="text" value={this.state.title} onChange={this.onTitleChange}/>
            <label>Content:</label>
            <input type="text" value={this.state.content} onChange={this.onContentChange}/>
            </>
        )
    }


}


export default NewPost;