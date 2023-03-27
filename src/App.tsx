import { useState } from 'react'
import './App.css'
import { FaAudible,FaAmericanSignLanguageInterpreting,FaConfluence, FaForumbee,FaEnvira,FaFirstdraft,FaGitlab,FaMendeley,FaPinterestP,FaBattleNet } from "react-icons/fa";


function App() {
  const [isVisible,setIsVisible] = useState(false)
  return (
    <div className=" max-w-[2000px] text-slate-700 dark:text-slate-200 mx-auto dark:bg-cyan-900 ">
      <div>
    <nav className='mx-auto p-4 bg-amber-400'>
      <div className='container flex items-center justify-between'>
        <a href='#' className='focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:top-9 lg:-translate-x-1/2 z-50 hover:opacity-75 transition-opacity' aria-label='Go to Homepage'>
          <img src = 'public\assets\logo.svg' alt = 'Home Smart Logo' className='w-48 md:w-62 lg:w-72'/>
        </a>
        <button id='menu' className='focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-slate-700 hover:text-slate-400 transition-colors ' onClick={()=> setIsVisible(!isVisible)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 md:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        </button>
        <div role= 'menubar' id= 'mobilemenu' className={` flex-col items-center gap-4 absolute right-0 left-0 top-16 font-semibold bg-amber-400 shadow-xl text-center p-6 z-20 text-md lg:flex lg:flex-row lg:static lg:shadow-none lg:w-full lg:justify-between ${isVisible?'flex': 'hidden'}` }>
          <a href='#' role='menuitem' className='py-1 px-6 text-slate-700 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 '>Home</a>
          <a href='#' role='menuitem' className='py-1 px-6 text-slate-700 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:mr-auto'>Contact</a>
          <a href='#' role='menuitem' className='py-1 px-6 text-slate-700 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 '>Login</a>
          <a href='#' role='menuitem' className='py-2 px-6 bg-teal-900 text-white focus:outline-none focus-visible:ring-4 shadow-2xl hover:shadow-none transition-shadow ring-amber-400 rounded-lg ring-offset-4 ring-offset-amber-400 '>Sign Up</a>
        </div>
      </div>
    </nav>
    <header className='relative pt-16 md:pt-24 lg:pt-48'>
      <div className='absolute inset-0 bottom-8 md:bottom-24 lg:bottom-32 bg-gradient-to-b from-amber-400 to-amber-700 -z-10'></div>
      <div className="container mx-auto grid grid-rows-1 
      place-items-end px-2">
        <img src='public\assets\couch.png' alt = 'couch' className='row-start-1 row-end-2 col-start-1 col-end-2 mx-auto' />
        <img src='public\assets\app.svg' alt ='app' className='row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:64 lg:72'/>
      </div>
    </header>
    <main className='grid grid-cols gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden'></main>
    <a href='#' className='flex gap-2 items-center mx-auto py-2 px-6 bg-amber-500 text-slate-900 font-bold justify-center my-8 focus:outline-none w-1/3 focus-visible:ring-4 shadow-2xl hover:shadow-none transition-shadow ring-slate-400 dark:ring-offset-amber-500 rounded-lg ring-offset-4 ring-offset-white'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
     </svg>
      <span>Download the App</span>
    </a>
    <section className='flex flex-col md    
    lg:flex-row flex-wrap md:justify-around gap-3  md:items-center mx-auto' >
      <img src='public\assets\dots.svg' className='hidden md:block absolute mt-1/2 h-[50px] -translate-y-1/2 -left-24 lg:-left-10' aria-hidden='true' alt='dots'/>
      <div className='flex flex-col items-center gap-2'>
        <span className='border-4 p-3 md:p-2 rounded-full border-amber-400 '><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5"     stroke="currentColor" className="w-12 h-12">
         <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
         </svg>
       </span>
        <h3 className='text-3xl font-bold'>Safe</h3>
        <p className='lg:ml-4 font-semibold'>Our products are secure and private out-of-the-box</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='border-4 p-3 md:p-2 rounded-full border-amber-400 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
       </span>
        <h3 className='text-3xl font-bold'>Efficient</h3>
        <p className='lg:ml-4 font-semibold'>Feel good about your wallet and the environment</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='border-4 p-3 md:p-2 rounded-full border-amber-400 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
       </span>
        <h3 className='text-3xl font-bold'>Proven</h3>
        <p className='lg:ml-4 font-semibold'>Leading the Smart Home world for 10 years</p>
      </div>      
    </section>
    <section className='flex flex-col items-center mt-5 w-2/3 mx-auto   leading-widest tracking-wider justify-center gap-3'>
     <div className='flex flex-col gap-2'>
      <h2 className='text-amber-400 font-bold tracking-wider text-2xl lg:text-3xl text-center'>Our Partners</h2>
      <span className='text-sm md:text-xl text-center mx-[80px]'>We believe in interdependency and that great achivements are seldom achieved working alone.That is why we partner with great companies to bring you an all in one place wholesome service which saves you the time you would have spent looking around for other service providers</span>
     </div>
     <div className='grid grid-cols-3 md:grid-cols-4 gap-7  text-3xl mt-5 '>
      <FaAudible/>
      <FaBattleNet/>
      <FaAmericanSignLanguageInterpreting/>
      <FaConfluence/>
      <FaForumbee/>
      <FaEnvira/>    
      <FaGitlab/>
      <FaMendeley/>
      <FaPinterestP/>
     </div>
    </section>
     <section>
      <div className='flex flex-col md:flex-row-reverse relative gap-6 mt-10'>
      <div className='mr-6'>        
        <img src='public\assets\table.png' alt='table'/>             
      </div>
      <div className='flex flex-col text-slate-700 justify-start md:justify-center gap-4 leading-wider tracking-wider ml-4'>
        <h2 className='font-bold text-xl'>Relax, you're home!</h2>
        <p className='text-sm font-semibold max-w-md md:text-lg'>We are committed to helping you make your home as comfortable as possible at an affordable price. Trust us to transform your house into the cozy home of your dream.</p>
        <a href='#' className='flex mx-auto py-2 px-3 bg-amber-500 text-slate-900 font-bold justify-center ml-1 mb-2 focus:outline-none w-1/3 focus-visible:ring-4 shadow-xl hover:shadow-none transition-shadow ring-slate-400 dark:ring-offset-amber-500 rounded-lg ring-offset-4 ring-offset-amber-400'>    
         Sign Up
       </a>
      </div>
      </div>
      <div className='bg-teal-900 h-24 -mx-8 mt-5  md:-mb-5 md:h-48 md:-mt-[100px]  -z-10'></div>    
     </section>     
     <div className='flex flex-col md:flex-row gap-5 md:justify-around container mx-auto'>
      <div className='flex flex-col gap-8 w-2/3 md:w-2/5'>
        <img src='public\assets\lamp.png' alt='lamp' className='flex items-center mx-auto drop-shadow-3xl mt-4'/>
        <a href='#' className='flex gap-2 items-center mx-auto py-2 px-6 bg-amber-500 text-slate-900 font-bold justify-center my-8 focus:outline-none w-2/3 focus-visible:ring-4 shadow-2xl hover:shadow-none transition-shadow ring-slate-400 dark:ring-offset-amber-500 rounded-lg ring-offset-4 ring-offset-white hover:text-slate-600 '>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
       <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
       </svg>
       <span>Download the App</span>
       </a>
       <div className=' hidden relative md:flex'>
       <img src = 'public\assets\app.svg' alt ='app' className='z-20 ml-[82px]'/> 
       <div className='absolute -bottom-6 aspect-square -z-20 border-8 border-amber-400 rounded-full w-[420px] top-20 -left-20'></div>  
       </div>
      </div>      
        <form className='flex flex-col ml-[70px] border-4 border-neutral-900 dark:border-amber-400 rounded-xl h-[480px] gap-3 px-2
        w-[300px] md:mt-40 md:-ml-[360px]'>
          <h2 className='flex items-start ml-3 mt-3 font-bold text-xl md:text-2xl text-amber-400'>Let's Connect :</h2>
          <div className='flex flex-col w-[260px]mx-auto relative'>
            <input type='text' id='name' className='peer rounded-lg border-amber-400 border-2 mt-4 focus:outline-none placeholder-transparent mb-3'placeholder='Your Name' />
            <label htmlFor='name' className='font-semibold absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-7 peer-placeholder-shown:text-slate-900 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-slate-500 dark:peer-focus:text-white '>Your Name:</label>
            {/* //using the peer class connects the two elements. we included a placeholder att. because we wanted to make use of it in the label below, but we made it transparent such that its not visible. then we pushed the label up into the input filed.so, as long as the input field was not in foucs, the placeholder/label should be shwon. upon focus, we pushed the label upwards. take note of the positions used. */}
            
          </div>
          <div className='flex flex-col w-[260px]mx-auto relative'>
            <input type='email' id='email' className='peer rounded-lg border-amber-400 border-2 mt-4 focus:outline-none placeholder-transparent mb-3'placeholder='Your Email' />
            <label htmlFor='email' className='font-semibold absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-7 peer-placeholder-shown:text-slate-900 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-slate-500 dark:peer-focus:text-white'>Your Email:</label></div>
          <div className='flex flex-col w-[260px]mx-auto relative'>
            <textarea id='content' cols = {20} rows={5}  className='peer rounded-lg border-amber-400 border-2 mt-4 focus:outline-none placeholder-transparent 'placeholder='Your thoughts:' />
            <label htmlFor='content' className='font-semibold absolute -top-4 left-2  -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-7 peer-placeholder-shown:text-slate-900 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-slate-500 dark:peer-focus:text-white'>Your Thoughts:</label></div>
            <a href='#' className='flex mx-auto py-2 px-3 bg-black text-white  font-bold justify-center ml-1 mt-9 mb-2 focus:outline-none w-1/3 focus-visible:ring-4 shadow-2xl hover:shadow-none  ring-slate-400 dark:ring-offset-amber-500 rounded-lg ring-offset-4 ring-offset-white hover:opacity-80 transition-opacity'>    
         Sign Up
       </a>
        </form>
      
     </div>
      </div>
    </div> 
  )
}

export default App
