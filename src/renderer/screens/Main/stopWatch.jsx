import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
const Stopwatch = ({ isRunning, time, setTime }) => {
  // Function to push elements to the array

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        let date = new Date()
        setTime((prevArray) => {
          // If array length is equal to maxArrayLength, pop the first element
          if (prevArray.length === 10) {
            // Remove the first element and return the new array
            return [
              ...prevArray.slice(1),
              moment(date).format('DD-MMM-YY hh:mm:ss'),
            ]
          } else {
            // Return the array with the new element pushed
            return [...prevArray, moment(date).format('DD-MMM-YY hh:mm:ss')]
          }
        })
      }, 1000)
    } else {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  return (
    <Grid container>
      <Grid item>
        {time.map((dateTime) => (
          <li key={dateTime} style={{ color: 'white' }}>
            {dateTime} Crane ABBClient
          </li>
        ))}
      </Grid>
    </Grid>
  )
}

export default Stopwatch
