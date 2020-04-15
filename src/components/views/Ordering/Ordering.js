import React from 'react';
import {Link} from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, LinearProgress} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, actionLink, actionName, statusName, statusBar, time, sum, id) {
  return { name, actionLink, actionName, statusName, statusBar, time, sum, id };
}

const rows = [
  createData('1', 'ordering/new', 'New', 'ordered', 20, '12:40', 12, '#102'),
  createData('2', 'ordering/new', 'New', 'preparing', 40, '12:33', 120, '#205'),
  createData('3', 'pop', 'Delivered', 'ready', 60, '12:26', 60, '#303'),
  createData('4', 'pop', 'New / Pay', 'delivered', 80, '12:02', 40, '#407'),
  createData('5', 'pop', 'Cleaned', 'payed', 100, '11:59', 85, '#502'),
  createData('6', 'ordering/new', 'New', '', 0, '--:--', 0, '#---'),
];

const Ordering = ({orderId='Order_1'}) => {

  const classes = useStyles();

  return (
    <Container>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Table n°</TableCell>
            <TableCell>Action</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Sum($)</TableCell>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                <Button variant="contained" color="primary" href={row.actionLink}>{row.actionName}</Button>
              </TableCell>
              <TableCell align="left">
                <React.Fragment>
                  <LinearProgress variant="determinate" value={row.statusBar} color="secondary" />
                  <p>{row.statusName}</p>
                </React.Fragment>
              </TableCell>
              <TableCell align="left">
                {row.time}
              </TableCell>
              <TableCell align="left">{row.sum}</TableCell>
              <TableCell align="left"><Link to={`/ordering/order/${orderId}`/*<={row.id}*/}>{row.id}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
)}

export default Ordering;
