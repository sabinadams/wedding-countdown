import React, { useState, useEffect } from 'react'
import './App.css'

function ProgressCircle( props ) {

    // Calculation Functions
    const calculateStrokeDashOffset = ( circumference, progress ) => circumference - progress / 100 * circumference

    // Constants
    const stroke = 15,
          normalizedRadius = props.radius - stroke * 2,
          circumference = normalizedRadius * 2 * Math.PI

    // Hooks
    const [ progress, setProgress ] = useState(props.progress)
    const [ strokeDashoffset, setStrokeDashoffset ] = useState(calculateStrokeDashOffset(circumference, progress))

    // Effects
    useEffect(() => { 
        setProgress( props.progress)
        setStrokeDashoffset( calculateStrokeDashOffset(circumference, progress) ) 
    }, [progress, props.progress])
          
    return (
          <svg
            height={props.radius * 2}
            width={props.radius * 2}
            className="progressCircle"
          >
            <circle
               stroke="rgb(37, 41, 49)"
               fill="transparent"
               strokeWidth={ stroke }
               strokeLinecap="round"
               strokeWidth={ stroke }
               r={ normalizedRadius }
               cx={ props.radius }
               cy={ props.radius }
            />
            <circle
               stroke="rgb(43, 74, 84)"
               fill="transparent"
               strokeWidth={ stroke }
               strokeLinecap="round"
               strokeDasharray={ circumference + ' ' + circumference }
               style={ { strokeDashoffset } }
               strokeWidth={ stroke }
               r={ normalizedRadius }
               cx={ props.radius }
               cy={ props.radius }
            />
          </svg>
    )
  }
  
  export default ProgressCircle;