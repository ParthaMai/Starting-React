import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const[from,setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAmount, setConverterdAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from) // means in useCurrencyinfo hook pass from means usd to get all usd convertion value 

  const options = object.keys(currencyInfo) // to get only the keys like inr, 

  // For swaping the convertion
  const swap = () =>{
    //const temp = from ; // don’t need to this line //•	React groups multiple state updates together and applies them in a single re-render
    setFrom(to);
    setTo(from);
    setConverterdAmount(amount); // for this value will be swap, so this is optional
    setAmount(convertedAmount)
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency converter</h1>
    </>
  )
}

export default App
