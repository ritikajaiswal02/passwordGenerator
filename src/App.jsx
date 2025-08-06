import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let [length,setLength] = useState(8)
  let [num,setnum] = useState(false)
  let [char,setchar] = useState(false)
  let [password,setPassword] = useState("")
  const inputref = useRef()

  //here usecallback is used for optimization and will only render based on dependenct list
  const generatePassword= useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num) str+="0123456789"
    if(char) str+="{}[]&:;<>?/!@#$*()-"

    let p = ""
    for(let i=0;i<length;i++){
      let a = Math.random()*str.length+1
      p+=str.charAt(a)
    }

    setPassword(p)
  },[length,num,char,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,num,char])

  const copyPassword=()=>{
    inputref.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className='h-screen w-full bg-[#0a0a0a] flex justify-center items-center p-4'>
        <div className='w-full h-100 md:h-80  m-0 md:m-40 lg:m-50 xl:m-120 bg-[rgba(200,195,195,0.43)] rounded-3xl p-15 flex flex-col items-center'>
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6'>
            <input type="text" className=' h-12 rounded-xl px-4 text-black font-semibold bg-white w-full' value={password} ref={inputref} readOnly/>
            <button className='h-12 bg-blue-600 px-6 text-white font-bold hover:bg-blue-700 rounded-xl' onClick={copyPassword}>Copy</button>
          </div>
          <div className='text-white flex flex-col  gap-6 w-full items-center'>
            <div className='flex flex-col items-center md:mt-8'>
              <input type="range" min={8} max={30} value={length} onChange={(e)=> setLength(Number(e.target.value))}/>
              <label>Length({length})</label>
            </div>
            <div className='flex flex-col items-center md:flex-row md:w-full md:justify-center md:mt-5'>
              <input type="checkbox" name="number" id="num" onChange={(e)=>setnum(!num)}/>
              <label className='mb-7 md:mb-0 md:mr-40' htmlFor='num'>Numbers</label>
              <input type="checkbox" name="char" id="char" onChange={(e)=> setchar(!char)} />
              <label htmlFor='char' className='flex items-center gap-2'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
