import React, {useState} from 'react';
import './App.css';
import ProgressCircle from './ProgressCircle'

function App() {
  const [ progress, setProgress ] = useState(20)
  const [ displayKey, setDisplayKey ] = useState('days')
  const [ format, setFormat ] = useState('number')

  const [ untilValues, setUntilValues ] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  })

  const countDownDate = new Date("Mar 21, 2020 00:00:00").getTime()
  const countDownBase = new Date("Jun 22, 2019 00:00:00").getTime()

  let x = setInterval( () => {
    let now = new Date().getTime()

    let distanceToDate = countDownDate - now
    let distanceFromBase = now - countDownBase
    let dateDiff = countDownDate - countDownBase

    setUntilValues({
      seconds: Math.floor(distanceToDate / 1000),
      minutes: Math.floor(distanceToDate / 1000 / 60),
      hours: Math.floor(distanceToDate / 1000 / 60 / 60),
      days: Math.floor(distanceToDate / 1000 / 60 / 60 / 24)
    })

    setProgress( (distanceFromBase / dateDiff )* 100 )

    if ( distanceToDate < 0 || distanceToDate == 0 ) {
      clearInterval(x)
    }

  }, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <div className="infoContainer">
          <h2 className="count">{ format === 'number' ? untilValues[displayKey] : `${Math.floor(progress)}%` }</h2>
          {
            format !== 'number' && <p>From engagement to wedding</p>
          }
          {
            format === 'number' && <>
              <p>{displayKey} until March 21!</p>
              <div>
                <button className="infoButton" onClick={() => setDisplayKey('days')}>Days</button>
                <button className="infoButton" onClick={() => setDisplayKey('hours')}>Hours</button>
                <button className="infoButton" onClick={() => setDisplayKey('minutes')}>Minutes</button>
                <button className="infoButton" onClick={() => setDisplayKey('seconds')}>Seconds</button>
              </div>
            </>
          }
        
          <div>
            {
              format === 'percentage' && <button className="infoButton" onClick={() => setFormat('number')}>Show Total</button>
            } 
            {
              format === 'number' && <button className="infoButton" onClick={() => setFormat('percentage')}>Percentage</button>
            } 
          </div>
        </div>

        <ProgressCircle
          radius={250}
          progress={progress}
        />
      </header>
    </div>
  );
}

export default App;
