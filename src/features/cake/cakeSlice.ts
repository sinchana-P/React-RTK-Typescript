
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// const createSlice = require('@reduxjs/toolkit').createSlice

type InitialState = {
    numOfCakes: number
}

// 1. state
const initialState: InitialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({

    name : 'cake',          // name for this slice.
    initialState,
    
    reducers : {
        ordered : (state) => {
            state.numOfCakes--
        },
        restocked : (state, action: PayloadAction<number>) => {
            state.numOfCakes += action.payload
        },       
    },
})


export default cakeSlice.reducer

export const { ordered, restocked } = cakeSlice.actions



// ---------------------------------------------------------------------

// //1. v - 19

// //✨ step 1 :
// import { createSlice } from '@reduxjs/toolkit'
// // const createSlice = require('@reduxjs/toolkit').createSlice

// // 1. state
// const initialState = {
//     numOfCakes : 10
// }

// //✨ step 2 :
// const cakeSlice = createSlice({

//     name : 'cake',          // name for this slice.
//     initialState,
//     reducers : {
//         ordered : (state) => {
//             state.numOfCakes--
//         },
//         restocked : (state, action) => {
//             state.numOfCakes += action.payload
//         },       
//     },
// })

// // module.exports = cakeSlice.reducer
// export default cakeSlice.reducer

// // Export the Actions by de-structuring them
// export const { ordered, restocked } = cakeSlice.actions

// // module.exports.cakeActions = cakeSlice.actions

// ---------------------------------------------------------