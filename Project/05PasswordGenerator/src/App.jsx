import {useState, useCallback , useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [charac, setCharac] = useState(false)
  const [password, setPassword] = useState("")

  //UseRef HOOk
  const passwordRef = useRef(null)


  const passwordGenerator= useCallback(() => {
    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(number==true){
      str+= "0123456789"
    }
    if(charac==true){
      str+="~!@#$%^&*()+="
    }
    for(let i=1;i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length +1) // Math.random function return b/w 0 to 1
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,number, charac, setPassword]) // pass all dependency menas aktakeo jodi ki6u change kori tahole  abar run hoye jabe

  const copyPasswordToClipboard = useCallback(() => {
    // for highlighting the part which part is copying thats time we use PasswordRef
    passwordRef.current.select();
    // if we try to copy in range then 
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password) // this is for copy the password
  },
  [password]) // this is means optimization 

  useEffect(() => {
    passwordGenerator();
  }, [length,number,charac, passwordGenerator]) //means aktakeo jodi ki6u change kori tahole  abar run hoye jabe
  return (
    <>
    <div className='w-full h-screen '  style={{backgroundColor: "black"}}>
      {/* this div for password Generator */}
      <div className='w-full max-w-md mx-auto shawdow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800'>
        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type='text'
           value={password}
           className='outline-none w-full py-1 px-3 bg-gray-500 '
           placeholder='password'
           readOnly
           ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div> {/*end of pass Generator */}
        <div className='flex text-sm gap-x-2'>
          <div className='glex items-center gap-x-1'>
            <input // this input is the volume bar or range bar
              type="range"
              min={5}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>
                {setLength(e.target.value)}
              }
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input // this is for checkbox
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() =>{
                  setNumber((prev) => !prev); // this is for togling the true and false
                }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input // this is for checkbox
                type="checkbox"
                defaultChecked={charac}
                id="numberInput"
                onChange={() =>{
                  setNumber((prev) => !prev); 
                }}
            />
            <label htmlFor='numberInput'>Characters</label>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default App
