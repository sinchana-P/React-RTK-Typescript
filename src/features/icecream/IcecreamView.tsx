import React from 'react'

// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  
  const [value, setValue] = React.useState(1)
  // const [value, setValue] = useState(1)

  const numOfIcecreams = useAppSelector(state => state.icecream.numOfIcecreams)
  console.log(numOfIcecreams)

  const dispatch = useAppDispatch()

  return (
    <div className='icecream-container'>
      <h2>Number of Ice creams - { numOfIcecreams }</h2>
      <button onClick={() => dispatch(ordered(3))}>Order Ice cream</button>
      <input 
        type='number' 
        placeholder='Enter Num Of Icecreams to be Ordered'
        value={value}
        // get hold of the event "e": 
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
    </div>
  )
}

// export default IcecreamView
