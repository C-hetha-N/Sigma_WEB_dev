import React from 'react'

const Signin = () => {


  return (
    <div className="mx-4 md:container md:w-[600px] md:mx-auto my-6 rounded-xl  bg-violet-200 min-h-[60vh] max-w-xl ">
      <div className='flex flex-row '>
        <aside className='p-4 m-4  flex flex-col justify-center items-center md:w-[400px] min-h-[60vh] max-w-xl'>
          <h2 className='font-bold'>Hello!</h2>
          <p>Sign in to your account</p>
          <input type="email" placeholder='E-mail' className='my-2 w-80 p-2 rounded-2xl' />
          <input type="password" placeholder='Password' className='my-2 w-80 p-2 rounded-2xl' />

          <div className='flex justify-between gap-16 '>
            <div>
              <input type="checkbox" name="" id="" />
              Remember me  
            </div>
            <div>Forget Password?</div>
          </div>

          <button type="submit" className='rounded-3xl bg-violet-500 px-4 py-1 m-2 w-[92px] text-center'>Sign In</button>
          <div>Don't have an account? Create</div>
        </aside>

        <aside className='p-2 flex flex-col justify-center items-center rounded-xl bg-violet-500 md:w-[200px] min-h-[60vh] max-w-xl'>
          <h2 className='p-2 font-bold'>Hello</h2>
          <div className='p-2'>Lorem ipsum dolor sit amet consectetur ad ipisicing elit.</div>
        </aside>
      </div>
    </div>
  )
}

export default Signin


