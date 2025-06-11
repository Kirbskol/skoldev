import { useState, useEffect } from 'react'
import { Logo } from './design/Logo'
import { GitHub, LinkedIn } from './design/Icons'

function App() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[80vh] max-h-[80vh] sm:max-h-[100vh] sm:h-[100vh] gap-4">
        <div className="flex flex-col items-center">
          <a href="./" target="_self">
            <Logo />
          </a>
        </div>
        <div className="card">
          <p>
            <code>Website under development{'.'.repeat(dotCount)}</code>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Kirbskol" target="_blank">
            <button className="text-white h-[3em]">
              <GitHub /> 
            </button>
          </a>
          <a href="mailto:jake@kirbskol.com" target="_blank">
            <button className="text-white h-[3em]">
              Contact Me 
            </button>
          </a>
          <a href="https://www.linkedin.com/in/kirbskol/" target="_blank">
            <button className="text-white h-[3em]">
              <LinkedIn /> 
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
