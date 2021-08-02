import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
const Modal=(props)=>{
return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
        <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
            <Link to="/" className="ui button">{props.Cancelbtn}</Link>
            <button onClick={props.onDelete} className="ui primary button">{props.deleteBtn}</button>
      
        </div>
        </div>
    </div>,document.querySelector("#modal")
)
}
export default Modal