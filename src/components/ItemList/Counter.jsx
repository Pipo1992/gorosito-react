import { useState } from 'react'
import PropTypes from 'prop-types';

const Counter = ({stock = 5, initialValue = 0}) => {
  const [counter, setCounter] = useState(initialValue)

  const handleSum = () => {
    if(counter < stock)
    setCounter(prev => prev + 1)
  }
  const handleRest = () => {
    if (counter > 0)
    setCounter(prev => prev - 1)
  }
  return (
    <div>
      <button onClick={handleSum}>Incrementar</button>
      <button onClick={handleRest}>Decrementar</button>
      <p>{counter}</p>
    </div>
  )
}

Counter.propTypes = {
  stock: PropTypes.number,
  initialValue: PropTypes.number,
};

export default Counter