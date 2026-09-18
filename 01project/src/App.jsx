import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)


  function addcount(){
   
    if(count<20){
      setCount(count +1);
    }

  }

  function removecount(){
    
    if(count>0){
      count=count-1;
      setCount(count);
    }
  }

  return (
    <>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1>lets start count</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={addcount}
            style={{
              height: '40px',
              width: '120px',
              backgroundColor: 'green',
              color: 'white',
              padding: '8px 12px',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            add count {count}
          </button>
          <button
            onClick={removecount}
            style={{
              height: '40px',
              width: '120px',
              backgroundColor: 'red',
              color: 'white',
              padding: '8px 12px',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            reduce count {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
