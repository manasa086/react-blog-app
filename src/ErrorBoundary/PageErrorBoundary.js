import React,{Component} from "react";



class PageErrorBoundary extends Component{

    state={
        isCrashed:false,
    };
    
    static getDerivedStateFromError() {
        return {
            isCrashed:true,
        }
    }

    componentDidCatch(error,errorInfo){
        console.warn(error,errorInfo);
    }

    render()
    {
        if(!this.state.isCrashed){
            return this.props.children
        }
        return <h1>Something Went Wrong</h1>
    }

}

export default PageErrorBoundary;