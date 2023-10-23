import { ordered as cakeOrdered } from '../cake/cakeSlice'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    numOfIcecreams: number
}

const initialState: InitialState = {
    numOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state, action: PayloadAction<number>) => {
            state.numOfIcecreams -= action.payload
        },
        restocked : (state, action: PayloadAction<number>) => {
            state.numOfIcecreams += action.payload
        },
    },

    // Method 2: Recommended using - Build function
    // now, extraReducers is a function.
    
    extraReducers : (builder) => {
        // .addCase( <actionType> , <function---typical_reducer_type_function> : it receives the (state, action) and mutates the state)
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions

// -----------------------------------------------------------------

// // v - 23
// // const { cakeActions } = require('../cake/cakeSlice')
// import { ordered as cakeOrdered } from '../cake/cakeSlice'

// import { createSlice } from '@reduxjs/toolkit'

// // v - 21
// // const createSlice = require('@reduxjs/toolkit').createSlice

// const initialState = {
//     numOfIcecreams : 20
// }

// const icecreamSlice = createSlice({
//     name : 'icecream',
//     initialState,
//     reducers : {
//         ordered : (state, action) => {
//             state.numOfIcecreams -= action.payload
//         },
//         restocked : (state, action) => {
//             state.numOfIcecreams += action.payload
//         },
//     },
//     // Method 1:
//     // extraReducers: {
//     //     ['cake/ordered']: (state) => {
//     //         state.numOfIcecreams--
//     //     }
//     // },

//     // Method 2: Recommended using - Build function
//     // now, extraReducers is a function.
    
//     // extraReducers : (builder) => {
//     //     // .addCase( <actionType> , <function---typical_reducer_type_function> : it receives the (state, action) and mutates the state)
//     //     builder.addCase(cakeOrdered, state => {
//     //         state.numOfIcecreams--
//     //     })
//     // }
// })


// export default icecreamSlice.reducer
// export const { ordered, restocked } = icecreamSlice.actions

// // module.exports = icecreamSlice.reducer
// // module.exports.icecreamActions = icecreamSlice.actions


// // extraReducers:
// // same scenario, let's decrement the numOfIcecreams, when the cake is ordered.
// // BUY A CAKE & GET AN ICE CREAM FREE - IS OUR OFFER.


// // OUTPUT : 

// // PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// // Initial State :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
// // Updated state :  { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 19 } }
// // Updated state :  { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 18 } }
// // Updated state :  { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 17 } }
// // Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
// // Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }
// // Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 12 } }
// // Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 11 } }
// // Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }




// -----------------------------------------------------------------