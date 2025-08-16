import './App.css'
import Squares from './components/background'
import PillNav from './components/Nav'
import { FaNoteSticky } from "react-icons/fa6";
import SampleNote from './components/Notesexample';

function App() {
  return (<>



    <div className='w-screen h-screen fixed bg-black -z-10'>
      <Squares
        speed={0.5}
        squareSize={40}
        direction='diagonal'
        borderColor='#271E37'
        hoverFillColor='#222222'
      />
    </div>
    <div className='flex justify-center w-full'>


      <PillNav
        logo={<FaNoteSticky className="text-3xl text-blue-500" />}
        logoAlt="Company Logo"
        items={[
          { label: 'Login', href: '' },
          { label: 'About', href: '' },
          { label: 'Pricing', href: '' },
          { label: 'Contact', href: '' }
        ]}
        activeHref="/"
        className="custom-nav mt-3 "
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />


      <h1 class=" mb-4 mt-30 text-9xl font-extrabold leading-none tracking-tight text-blue-900  
          dark:text-blue-600">Noter.<span className='text-white'>io</span></h1>

    </div>

    <div className='flex flex-row justify-between '>

      <div className='mt-30 ml-20'>
        <div >
          <h1 class=" mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text
      -6xl dark:text-white">The world’s best <span className='text-blue-700 
      transition-all ease-in-out duration-2000 hover:shadow-[0px_0px_191px_38px_rgba(46,70,255,0.9)]
      bg-transparent'>Notes Taking App</span> <br /><span class="underline underline-offset-3 decoration-8 
      decoration-blue-400 dark:decoration-blue-600"></span> Free and open source.</h1>
        </div>
        <div>
          <h1 className='text-white '>
            Take notes the way you want — quick ideas, detailed plans, or anything in between.
            Whether you’re jotting down a <br /> thought that just popped into your mind, outlining your next big project, or keeping track of daily tasks, our notes <br />app adapts to your style. <br />

            With a clean interface and lightning-fast performance, staying organized has never been easier.
            No clutter, no <br />distractions — just a smooth and intuitive space where your ideas flow effortlessly. <br />
          </h1>
        </div>
      </div>

      <div className='mr-20 mt-30 flex flex-row justify-center p'>
        <div className='m-5 flex flex-col'>

          <SampleNote
            heading='Organized & Searchable'
            context='Keep your notes structured with folders, tags, and a powerful search. Find exactly what you need in seconds.'
            button='Learn More'
          ></SampleNote>
        </div>

        <div className='m-5 flex flex-col'>
          <SampleNote
            heading='Customizable Experience'
            context='Choose your style — light/dark themes, text formatting, and layouts that match your workflow.'
            button='Learn More'
          ></SampleNote>
        </div>

      </div>
    </div>
    <div className='flex flex-col items-center justify-center mt-30'>
      <h1 class="text-center mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text
      -6xl dark:text-white">Start Taking <span className='text-blue-700 
      transition-all ease-in-out duration-2000 hover:shadow-[0px_0px_191px_38px_rgba(46,70,255,0.9)]
      bg-transparent'>Notes</span> <br /><span class="underline underline-offset-3 decoration-8 
      decoration-blue-400 dark:decoration-blue-600"></span> with just a click</h1>



      <button type="button" class="p-5 w-auto h-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
      <button type="button" class="p-5  w-auto h-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>


      <button type="button" class="p-5  w-auto h-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue as Guest</button>
    </div>


  </>)
}

export default App
