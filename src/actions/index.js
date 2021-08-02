import {SIGN_IN,SIGN_OUT,CREATE_STREAM,DELETE_STREAM,FETCH_STREAM,FETCH_STREAMS,EDIT_STREAM} from "./types"
import history from "../history"

import axios from "axios"

const stream = axios.create({
    baseURL: 'http://localhost:8000/api',
})




export const signIn=(userId)=>{
    return {
        type:SIGN_IN,
        payload:userId
    }
}

export const signOut=()=>{
    return {
        type:SIGN_OUT
    }
}

export const createStream=formValues=>async (dispatch,getState)=>{
    const {userId}=getState().auth

const res=await stream.post(`/stream`,{...formValues,userId})
dispatch({type:CREATE_STREAM,payload:res.data})

history.push("/")

}
export const fetchStreams=()=>async dispatch=>{
    const res=await stream.get("/stream")
    console.log(res.data.data)
    dispatch({type:FETCH_STREAMS,payload:res.data.data})
}


export const fetchStream=id=>async dispatch=>{
    const res=await stream.get(`/stream/${id}`)
    console.log(res.data.data)

    dispatch({type:FETCH_STREAM,payload:res.data.data})
}
export const deleteStream=id=>async dispatch=>{
const res=await stream.delete(`/stream/${id}`)
console.log(res.data.data)
dispatch({type:DELETE_STREAM,payload:res.data.data})
history.push("/")
}
export const editStream=(id,payload)=>async dispatch=>{
const res=await stream.put(`/stream/${id}`, payload)
dispatch({type:EDIT_STREAM,payload:id})

history.push("/")
}

export const selectStream=id=> async dispatch=>{
    const res=await stream.get(`/stream/${id}`)
    console.log(res.data.data)
    dispatch({type:"SELECT_STREAM",payload:res.data.data})
}