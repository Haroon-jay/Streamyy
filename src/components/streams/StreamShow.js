import React from "react"
import {connect} from "react-redux"
import {selectStream} from "../../actions"
import flv from "flv.js"

class StreamShow extends React.Component{
    constructor(props){
        super(props)

        this.videoRef=React.createRef()
        console.log(this.videoRef)
    }
    componentDidMount(){
        this.props.selectStream(this.props.match.params.id)
this.buildPlayer()

      }

componentDidUpdate(){
    this.buildPlayer()
}
componentWillUnmount(){
    this.player.destroy()
}
    buildPlayer(){
        if(this.player || !this.props.stream){
         return 
        }
        this.player= flv.createPlayer({
            type:"flv",
            url:`http://localhost:9000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    


    }



    render(){
        if(!this.props.stream){
            return <div>Loading</div>
        }
        const {title,description}=this.props.stream
        return(
            <div >
                <video ref={this.videoRef} style={{width:"100%"}} controls ></video>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
return{
    stream:state.selected
}
}
export default  connect(mapStateToProps,{selectStream})(StreamShow)