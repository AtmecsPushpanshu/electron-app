import React from 'react'
import ReactDom from 'react-dom/client'
import { WindowStoreProvider } from './store'
import { AppRoutes } from './routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import 'resources/styles/globals.sass'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
})

ReactDom.createRoot(document.querySelector('app') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <WindowStoreProvider>
      <AppRoutes />
    </WindowStoreProvider>
  </ThemeProvider>
)
