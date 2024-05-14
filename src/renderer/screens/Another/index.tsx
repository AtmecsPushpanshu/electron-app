import { useNavigate } from 'react-router-dom'

import { Container, Heading, Button } from '../../components'
import { useEffect } from 'react'
import { useWindowStore } from 'renderer/store'
import { Paper } from '@mui/material'
import BasicTable from '../Main/sampleTable'
const { App } = window
export function AnotherScreen() {
  const navigate = useNavigate()
  const store = useWindowStore().about

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
      <Heading>Hello! 👋</Heading>
      <h2>It's another screen! ✨</h2>

      <nav>
        <Button onClick={() => navigate('/')}>Go back to Main screen</Button>
        <Button
          className={store.isOpen ? 'disabled' : ''}
          onClick={openAboutWindow}
        >
          Open About Window
        </Button>
      </nav>
      <Paper elevation={3}>
        <BasicTable />
      </Paper>
    </Container>
  )
}
