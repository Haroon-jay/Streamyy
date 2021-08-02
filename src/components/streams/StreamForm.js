import React,{Component} from "react"
import {Field,reduxForm} from "redux-form"
class StreamForm extends Component{
    renderInput=(formprops)=>{
        const className=`field ${formprops.meta.error && formprops.meta.touched? "error" :" " }`
   return(
       <div className={className}>
        <label >{formprops.label}</label>
      <input {...formprops.input}></input>
      <div>{this.renderError(formprops.meta)}</div>
      </div>

   )
    }
    renderError=({error,touched})=>{
   if(touched&&error){
       return(
           <div className="ui error message">
               <div className="header">
                   {error}
               </div>
           </div>
       )
   }
    }

    onSubmit=(formValues)=>{
        console.log(this.props)
        this.props.onSubmit(formValues)
    }
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} action className="ui form error">
                <Field label="Enter title" name="title" color="red" component={this.renderInput}></Field>
                <Field label="Enter Description" component={this.renderInput} name="description"></Field>
                <button className="ui button danger">Submit!!!</button>
            </form>
        )
    }
}
const validate=(formValues)=>{
    const errors={}
    if(!formValues.title){
    errors.title="You mst enter title!"
    }
    if(!formValues.description){
        errors.description="Enter description"
    }
return errors
}

export default (reduxForm({
    form:"streamForm",validate
})(StreamForm))
