import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inpval, setInpVal] = useState(0)
  const [showCopy, setShowCopy] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const check = symbols || numbers || lowercase || uppercase;
    if (check) {

      let charset = '';
      if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
      if (numbers) charset += '0123456789';
      if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

      let newPass = ''

      for (let index = 0; index < inpval; index++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        newPass += charset[randomIndex]

      }

      setPassword(newPass)
    }

  }

  const copyHandler = (text) => {
    setShowCopy(true)

    navigator.clipboard.writeText(password)
    setTimeout(() => {
      setShowCopy(false)
    }, 2000);


  }





  return (
    <>
      <div className="container">
        <header>
          <h2>Password Generator</h2>
        </header>
        <main>
          <div className='placeOfGeneration'>
            {password == 0 ? <p className='pale'>P4$5W0rD!</p> : <p className='passwordP' >{password}</p>}
            <div className='copyDv'>
              {showCopy ? <span className='copied'>COPIED</span> : null}
              <svg className='copySvg' onClick={copyHandler} width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF" /></svg>
            </div>
          </div>
          <div className="generate">
            <div className="charLength">
              <p>Character Length</p>
              <h3>{inpval}</h3>
            </div>
            <form >
              <input type="range" id='range' min='1' max='20' value={inpval} onChange={(e) => setInpVal(e.target.value)} />
              <span className='fillInp' style={{ width: inpval * 5 + '%' }}></span>

            </form>
            <div className='checkbox'>
              <input type="checkbox" id='check' onChange={() => setUppercase(!uppercase)} checked={uppercase} />
              <p>Include Uppercase Letters</p>
            </div>
            <div className='checkbox'>
              <input type="checkbox" id='check' onChange={() => setLowercase(!lowercase)} checked={lowercase} />
              <p>Include Lowercase Letters</p>
            </div>
            <div className='checkbox'>
              <input type="checkbox" id='check' onChange={() => setNumbers(!numbers)} checked={numbers} />
              <p>Include Numbers</p>
            </div>
            <div className='checkbox'>
              <input type="checkbox" id='check' onChange={() => setSymbols(!symbols)} checked={symbols} />
              <p>Include Symbols</p>
            </div>
            <div className='strength'>
              <p className='strengthP'>STRENGTH</p>
              {inpval <= 1 ? <div className='strengthDone tooWeak'>
                <p></p>
                <div className='strengthSpans'>
                  <span className='emptySpan'></span>
                  <span className='emptySpan'></span>
                  <span className='emptySpan'></span>
                  <span className='emptySpan'></span>
                </div>
              </div> : null}
              {inpval <= 5 && inpval > 1 ? <div className='strengthDone tooWeak'>
                <p>TOO WEAK!</p>
                <div className='strengthSpans'>
                  <span className='tooWeakSpan'></span>
                  <span className='emptySpan'></span>
                  <span className='emptySpan'></span>
                  <span className='emptySpan'></span>
                </div>
              </div> : null}
              {inpval <= 10 && inpval > 5 ? <div className='strengthDone weak '>
                <p>WEAK</p>
                <div className='strengthSpans'>
                  <span className='weakSpan'></span>
                  <span className='weakSpan'></span>
                  <span className='emptySpan'></span>
                  <span className='emptySpan'></span>
                </div>
              </div> : null}
              {inpval <= 15 && inpval > 10 ? <div className='strengthDone medium '>
                <p>MEDIUM</p>
                <div className='strengthSpans'>
                  <span className='mediumSpan'></span>
                  <span className='mediumSpan'></span>
                  <span className='mediumSpan'></span>
                  <span className='emptySpan'></span>
                </div>
              </div> : null}
              {inpval <= 20 && inpval > 15 ? <div className='strengthDone strong '>
                <p>STRONG</p>
                <div className='strengthSpans'>
                  <span className='strongSpan'>
                  </span><span className='strongSpan'>
                  </span><span className='strongSpan'>
                  </span><span className='strongSpan'></span>
                </div>
              </div> : null}
            </div>
            <button onClick={generatePassword} className='btn'>GENERATE <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" /></svg></button>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
