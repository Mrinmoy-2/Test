import {createSlice} from '@reduxjs/toolkit';
export const counterslice = createSlice({
    name:'counter',
    initialState:{
        value:0,
        favourites:[]
    },
    reducers:{
        increment:state=>{
            state.value +=1;
        },
        decrement : state=>{
            state.value -= 1
        },
        addtoFav :(state,action)=>{
            state.favourites.push(action.payload)
        }
    }
})
export const{increment,decrement,addtoFav} = counterslice.actions;
export default counterslice.reducer