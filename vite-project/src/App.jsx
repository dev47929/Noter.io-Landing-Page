import './App.css'
import Squares from './components/background'
import PillNav from './components/Nav'
import logo from './assets/react.png'

function App() {



  return (<>

    <div className='w-screen h-screen absolute bg-black -z-10'>
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
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '' },
          { label: 'About', href: '' },
          { label: 'Services', href: '' },
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
    </div>


    <div className='mt-50 ml-20'>


      <div >
        <h1 class=" mb-4 text-8xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text
      -6xl dark:text-white">The world’s best <span className='text-blue-700 
 transition-all ease-in-out duration-2000 hover:shadow-[0px_0px_191px_38px_rgba(46,70,255,0.9)]
 bg-transparent'>Notes Taking App</span> <br /><span class="underline underline-offset-3 decoration-8 
      decoration-blue-400 dark:decoration-blue-600"></span> Free and open source.</h1>
      </div>
      <div>
        <h1 className='text-white '>

          Take notes the way you want — quick ideas, detailed plans, or anything in between. <br /> With a clean interface and lightning-fast performance, staying organized has never been easier.
        </h1>
      </div>
    </div>

  </>)
}

export default App
