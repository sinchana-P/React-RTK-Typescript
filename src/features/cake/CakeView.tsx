import React from 'react'

// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

// import Action Creators from the cakeSlice
import { ordered, restocked } from './cakeSlice'


export const CakeView = () => {
  // const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  console.log(numOfCakes)

  const dispatch = useAppDispatch()

  return (
    <div className='cake-container'>
      <h2>Number of cakes -  { numOfCakes } </h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}

// export default CakeView
