import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
  event: string,
  st: string,
  duration: string,
  arrange: string,
  direction: string,
  lane: string,
  l1: string,
  l2: string
) {
  return { event, st, duration, arrange, direction, lane, l1, l2 }
}

const rows = [
  createData('1', '14-May-2024', '0:00:0', '_40', 'Up', '5o', '', ''),
  createData('2', '14-May-2024', '0:00:0', '_40', 'Down', '5o', '', ''),
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Arrangement</TableCell>
            <TableCell align="right">Direction</TableCell>
            <TableCell align="right">Lane</TableCell>
            <TableCell align="right">L1 Result</TableCell>
            <TableCell align="right">L2 Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.event}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.event}
              </TableCell>
              <TableCell align="right">{row.st}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.arrange}</TableCell>
              <TableCell align="right">{row.direction}</TableCell>
              <TableCell align="right">{row.lane}</TableCell>
              <TableCell align="right">{row.l1}</TableCell>
              <TableCell align="right">{row.l2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
