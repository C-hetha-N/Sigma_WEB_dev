import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4 p-6 max-w-xl min-h-[80vh] bg-violet-200 rounded-xl">
        <h2 className='mb-6 font-bold text-xl text-center'>iTask - Manage your todos at one place</h2>

        <h3 className='font-bold text-lg '>Add a Todo</h3>

        <div className='flex gap-2 m-2'>
          <input type="text" className='rounded-2xl w-11/12' />
          <button className='py-1 px-4 bg-violet-400 rounded-2xl cursor-pointer hover:font-medium hover:bg-violet-500'>Save</button>
        </div>

        <div><input type="checkbox" className='cursor-pointer' name="Show Finised" id="finish" /> Show Finished</div>

        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

        <div className='my-2'>
          <h3 className='my-2 font-bold text-lg '>Your Todo</h3>
          <div className='flex justify-between'>
            <div className='todo name flex gap-2 items-center'>
              <input type="checkbox" className='items-center cursor-pointer' name="Show Finised" id="finish" />
              Show Finished
            </div>

            <div className='icon flex gap-4'>
              <img src="src\assets\edit.svg" className='bg-violet-500 p-1 rounded-lg cursor-pointer hover:bg-violet-600' alt="" />
              <img src="src\assets\delete.svg" className='bg-violet-500 p-1 rounded-lg cursor-pointer hover:bg-violet-600' alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
