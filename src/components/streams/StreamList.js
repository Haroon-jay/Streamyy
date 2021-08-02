import React from "react"
import {connect} from "react-redux"
import {fetchStreams} from "../../actions"
import {Link} from "react-router-dom"
class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams()
    }

  renderAdmin(stream){
      if(stream.userId===this.props.userId && this.props.isSignedIn){
        return( <div className="right floated content">
            <Link className="ui button primary" to={`/streams/edit/${stream._id}`}>Edit</Link>
            <Link to={`/streams/delete/${stream._id}`} className="ui button negative">Delete</Link>
        </div>)
      }

  }

    render(){
        return(
            <div> 
                <h2>Streams</h2>
            <div className="ui celled list">
               
           {this.renderList()}
            {this.renderCreate()}
            </div></div>
        )
    }
renderCreate(){
if(this.props.isSignedIn){
    return (
<div className="ui primary" style={{textAlign:"right"}}>
    <Link to="/streams/new">Create Stream</Link>
</div>
    )
}
}

cleanState=()=>{
    Object.keys(this.props.streams).forEach(key => key === undefined? delete this.props.stream[key] : 0)
}

    renderList(){
      return( this.props.streams.map(stream=>{
          if(stream.title && stream.description){
          return (
              <div key={stream._id} className="item">
                   {this.renderAdmin(stream)}
                  <i className="large middle aligned icon camera"></i>
                  <div className="content">
                      <Link className="header" to={`/streams/${stream._id}`}> {stream.title} </Link>
                      
                  <div className="description">{stream.description}</div>
                  </div>
              </div>
          )}
      })
          )    }
}
const mapStateToProps=(state)=>{
    return {
        streams:Object.values(state.streams),
        userId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList)