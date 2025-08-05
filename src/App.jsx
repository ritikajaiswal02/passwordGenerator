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
      <div className='h-screen w-full bg-[#0a0a0a] flex justify-center items-center p-4'>
        <div className='w-full h-100 md:h-80  m-20 md:m-40 lg:m-50 xl:m-120 bg-[rgba(200,195,195,0.43)] rounded-3xl p-15 flex flex-col items-center'>
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6'>
            <input type="text" className=' h-12 rounded-xl px-4 text-black font-semibold bg-white w-full' value={password}/>
            <button className='h-12 bg-blue-600 px-6 text-white font-bold rounded-xl'>Copy</button>
          </div>
          <div className='text-white flex flex-col  gap-6 w-full items-center'>
            <div className='flex flex-col items-center md:mt-8'>
              <input type="range" min={8} max={30} value={length} onChange={(e)=> setLength(Number(e.target.value))}/>
              <label>Length({length})</label>
            </div>
            <div className='flex flex-col items-center md:flex-row md:w-full md:justify-center md:mt-5'>
              <input type="checkbox" name="number" id="num" />
              <label className='mb-7 md:mb-0 md:mr-40' htmlFor='num'>Numbers</label>
              <input type="checkbox" name="char" id="char" />
              <label htmlFor='char' className='flex items-center gap-2'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
