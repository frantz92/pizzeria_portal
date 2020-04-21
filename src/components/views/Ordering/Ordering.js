import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  LinearProgress,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function createData(
  name,
  actionLink,
  actionName,
  statusName,
  statusBar,
  time,
  sum,
  id
) {
  return { name, actionLink, actionName, statusName, statusBar, time, sum, id };
}

const rows = [
  createData('1', 'ordering/new', 'New', 'ordered', 20, '12:40', 12, '#102'),
  createData('2', 'ordering/new', 'New', 'preparing', 40, '12:33', 120, '#205'),
  createData('3', 'pop', 'Delivered', 'ready', 60, '12:26', 60, '#303'),
  createData('4', 'pop', 'New/Pay', 'delivered', 80, '12:02', 40, '#407'),
  createData('5', 'pop', 'Cleaned', 'payed', 100, '11:59', 85, '#502'),
  createData('6', 'ordering/new', 'New', '', 0, '--:--', 0, '#---'),
];

function checkReady(row) {
  if (row.statusName === 'ready') {
    return true;
  }
}

function checkNew(row) {
  if (row.actionName === 'New') {
    return true;
  }
}

const Ordering = ({ orderId = 'Order_1' }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width='10%' align='center'>
              Table n°
            </TableCell>
            <TableCell width='20%' align='center'>
              Action
            </TableCell>
            <TableCell width='25%' align='center'>
              Status
            </TableCell>
            <TableCell width='15%' align='center'>
              Time
            </TableCell>
            <TableCell width='15%' align='center'>
              Sum($)
            </TableCell>
            <TableCell width='15%' align='center'>
              ID
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              style={{ backgroundColor: checkReady(row) ? 'green' : 'white' }}
            >
              <TableCell align='center'>{row.name}</TableCell>
              <TableCell align='center'>
                <Button
                  onClick={checkNew(row) ? null : handleClickOpen}
                  variant='contained'
                  color='primary'
                  href={checkNew(row) ? row.actionLink : null}
                >
                  {row.actionName}
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  //keepMounted
                  onClose={handleClose}
                  //aria-labelledby="alert-dialog-slide-title"
                  //aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle align='center' /*id="alert-dialog-slide-title"*/>
                    Confirm
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={handleClose} color='secondary'>
                      <CancelIcon />
                    </Button>
                    <Button onClick={handleClose} color='primary'>
                      <CheckCircleIcon />
                    </Button>
                  </DialogActions>
                </Dialog>
              </TableCell>
              <TableCell align='center'>
                <React.Fragment>
                  <LinearProgress
                    variant='determinate'
                    value={row.statusBar}
                    color='secondary'
                  />
                  <p>{row.statusName}</p>
                </React.Fragment>
              </TableCell>
              <TableCell align='center'>{row.time}</TableCell>
              <TableCell align='center'>{row.sum}</TableCell>
              <TableCell align='center'>
                <Link
                  to={`/ordering/order/${orderId}` /*<={row.id}*/}
                  color='inherit'
                  underline='none'
                >
                  {row.id}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Ordering;
