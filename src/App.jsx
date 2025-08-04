import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [num,setnum] = useState(false)
  const [char,setchar] = useState(false)
  const [password,setPassword] = useState("ritika")

  useCallback(()=>{
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const n = '0123456789'
    const c = "{}[]&:;<>?/!@#$*()-"
    if(num) str+=n
    if(char) str+=c
    let p = ""
    for(let i=0;i<num;i++){
      let a = Math.random((str.length * i)+1)
      p+=str[a]
      console.log(p)
    }
  },[length,num,char])


  return (
    <>
      <div className='h-screen w-screen bg-[#0a0a0a] flex justify-center items-center'>
        <div className='h-[50%] w-[90%]  bg-[#c8c3c36d] rounded-4xl flex flex-col items-center justify-center md:w-[50%]'>
          <div className='flex flex-wrap justify-center mr-7 ml-7'>
            <input type="text" className='h-15 bg-amber-50 rounded-2xl mt-5 pl-3 pr-3 md:mt-0 md:w-75' value={password}/>
            <button className='h-15 mt-10 bg-blue-600 p-4 text-white font-bold rounded-xl md:mt-0'>Copy</button>
          </div>
          <div className='text-white mt-10 md:mt-25 flex gap-5 justify-center flex-col md:flex-row'>
            <div className='flex justify-center gap-2'>
              <input type="range" min={8} max={30} value={length} onChange={(e)=> setLength(Number(e.target.value))}/>
              <label>Length({length})</label>
            </div>
            <div className='text-[16px] flex justify-center'>
              <input type="checkbox" name="number" id="num" />
              <label className='mr-7' htmlFor='num'>Numbers</label>
              <input type="checkbox" name="char" id="char" />
              <label htmlFor='char'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
