import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthirizationType{
    open:boolean
    isLoadnig:boolean
}

interface initialStateType {
    authorizationModalVisibility:ModalAuthirizationType
}

const initialState :initialStateType ={
        authorizationModalVisibility:{
            open:false,
            isLoadnig:false
        }
}

const modalSlice = createSlice({
    initialState,
    name:"Modal",
    reducers:{
        setAuthorizationModalVisibility(state ,{payload}){
            state.authorizationModalVisibility = payload
        }
    }
})

export const  { setAuthorizationModalVisibility } = modalSlice.actions
export default modalSlice.reducer