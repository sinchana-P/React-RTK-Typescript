import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        cake : cakeReducer,  // cakeReducer: this reducer has both state & reducer of Cake in that Slice imported. check cakeSlice.js
        icecream : icecreamReducer,
        user: userReducer
    },
})

export default store

// To type our store:
// We're going to export 2 inferred types from store.js
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// We r going to use these types, to type the useSelector and useDispatch hooks from react-redux

// The convention is to create a new file - hooks.ts in app folder
















// ------------------------------------------------------------

// // import "reducer" in this file
// import { configureStore } from '@reduxjs/toolkit'
// import cakeReducer from '../features/cake/cakeSlice'
// import icecreamReducer from '../features/icecream/icecreamSlice'
// import userReducer from '../features/user/userSlice'

// // const configureStore = require('@reduxjs/toolkit').configureStore

// // v - 22
// // const reduxLogger = require('redux-logger')

// // const cakeReducer = require('./features/cake/cakeSlice')
// // const icecreamReducer = require('./features/icecream/icecreamSlice')
// // const userReducer = require('./features/user/userSlice')

// // const logger = reduxLogger.createLogger()

// const store = configureStore({
//     // this is where we specify all the reducers from slices that belong to features.
//     reducer: {
//         cake : cakeReducer,
//         icecream : icecreamReducer,
//         user: userReducer
//     },
//     // we assign an arrow function
//     // this function receives another function as its argument i.e getDefaultMiddleware.
//     // in the fun body we r going to implicitly return "getDefaultMiddleware" 
//     // & concatenate the list with the logger middleware.
//     // So, to the list of middleware we append logger middleware.

//     // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
// })

// // module.exports = store
// export default store

// // ----------------------------------------------------------------

// // Simple Store for Cake Store

// // const configureStore = require('@reduxjs/toolkit').configureStore
// // const cakeReducer = require('./features/cake/cakeSlice')

// // const store = configureStore({
// //     // this is where we specify all the reducers from slices that belong to features.
// //     reducer: {
// //         cake : cakeReducer
// //     },
// // })

// // module.exports = store


// ------------------------------------------------------------