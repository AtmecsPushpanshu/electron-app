import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { Container, Heading } from '../../components'
import { useEffect, useState } from 'react'
import { useWindowStore } from 'renderer/store'
import { Box, Button, Card, Divider, Grid, Paper, Stack } from '@mui/material'
import BasicTable from '../Main/sampleTable'
import Stopwatch from '../Main/stopWatch'
const { App } = window
export function AnotherScreen() {
  const [isRunning, setIsRunning] = useState(true)
  const [time, setTime] = useState([])
  const watchProps = { isRunning, setIsRunning, time, setTime }
  const navigate = useNavigate()
  const store = useWindowStore().about
  const handleStartStop = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime([])
  }

  useEffect(() => {
    App.sayHelloFromBridge()

    App.whenAboutWindowClose(({ message }) => {
      console.log(message)

      store.setAboutWindowState(false)
    })
  }, [])

  function openAboutWindow() {
    App.createAboutWindow()
    store.setAboutWindowState(true)
  }

  return (
    <Container>
      <Grid
        container
        justifyContent={'space-between'}
        sx={{ marginBottom: '10px' }}
      >
        <Button variant={'outlined'} onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </Button>
        <Button
          variant={'outlined'}
          className={store.isOpen ? 'disabled' : ''}
          onClick={openAboutWindow}
        >
          <QuestionMarkIcon />
        </Button>
      </Grid>
      <Grid container sx={{ marginBottom: 2 }} justifyContent={'flex-end'}>
        <Button variant={'contained'} onClick={handleReset}>
          Clear Log
        </Button>
      </Grid>
      <Card variant="outlined">
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <span>Last Event: #3</span>
            <span>Hoist Pos: 13000</span>
            <span>Trolley Pos: 11000</span>
            <span>Container Type: 45</span>
            <span>Twist Lock: F</span>
          </Stack>
        </Box>
        <Divider />
        <Box>
          <BasicTable />
        </Box>
      </Card>
      <Card
        variant="outlined"
        style={{
          backgroundColor: 'black',
          minHeight: '250px',
          padding: '1em',
          marginTop: '2em',
        }}
      >
        <Stopwatch {...watchProps} />
      </Card>
    </Container>
  )
}
