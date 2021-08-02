import React from "react"
import Modal from "../Modal"
import history from "../../history"
import {fetchStream,deleteStream} from "../../actions"
import { connect} from "react-redux"

class StreamDelete extends React.Component{
componentDidMount(){
  //  this.props.fetchStream(this.props.match.params.id)
}
delete=(id)=>{
    this.props.deleteStream(id)
}
renderContent(){
    if(!this.props.stream){
return (
    `Are you sure you want to delete this stream`
)
    }
    else{
        return `Are you sure you want to delete the ${this.props.stream.title} stream`
    }
}
    render(){
return(
    
        <Modal onDismiss={()=>history.push("/")}
         header="Delete Stream!" 
         Cancelbtn="Cancel"
          deleteBtn="Delete!"
          onDelete={()=>this.delete(this.props.match.params.id)}
          content={this.renderContent()}/>
         

)}

}

const mapStateToProps=(state,ownProps)=>{
return {stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)