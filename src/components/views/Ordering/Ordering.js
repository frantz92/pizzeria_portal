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
  CircularProgress,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function createData(
  name,
  actionLink,
  secondActionLink,
  actionName,
  secondActionName,
  statusName,
  statusBar,
  time,
  sum,
  id
) {
  return {
    name,
    actionLink,
    secondActionLink,
    actionName,
    secondActionName,
    statusName,
    statusBar,
    time,
    sum,
    id,
  };
}

const rows = [
  createData(
    '1',
    'ordering/new',
    '',
    'New',
    '',
    'ordered',
    20,
    '12:40',
    12,
    '#102'
  ),
  createData(
    '2',
    'ordering/new',
    '',
    'New',
    '',
    'preparing',
    40,
    '12:33',
    120,
    '#205'
  ),
  createData('3', 'pop', '', 'Delivered', '', 'ready', 60, '12:26', 60, '#303'),
  createData(
    '4',
    'ordering/new',
    'pop',
    'New',
    'Pay',
    'delivered',
    80,
    '12:02',
    40,
    '#407'
  ),
  createData('5', 'pop', '', 'Cleaned', '', 'payed', 100, '11:59', 85, '#502'),
  createData('6', 'ordering/new', '', 'New', '', '', 0, '--:--', 0, '#---'),
];

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
        <TableHead style={{ display: 'none' }}>
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
              style={{
                backgroundColor:
                  row.statusName === 'ready' ? 'green' : 'transpaernt',
              }}
            >
              <TableCell align='center' style={styles.table}>
                {row.name}
              </TableCell>
              <TableCell align='center'>
                <Button
                  onClick={row.actionName === 'New' ? null : handleClickOpen}
                  style={styles.button}
                  href={row.actionName === 'New' ? row.actionLink : null}
                >
                  {row.actionName}
                </Button>
                {row.statusName === 'delivered' ? (
                  <Button
                    onClick={handleClickOpen}
                    style={styles.button}
                    href={null}
                  >
                    {row.secondActionName}
                  </Button>
                ) : (
                  ''
                )}
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  onClose={handleClose}
                >
                  <DialogTitle align='center'>Confirm</DialogTitle>
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
                  <CircularProgress
                    variant='determinate'
                    thickness={2}
                    value={row.statusBar}
                    style={styles.progressCircle}
                  />
                  <p style={styles.progressName}>{row.statusName}</p>
                </React.Fragment>
              </TableCell>
              <TableCell align='center'>{row.time}</TableCell>
              <TableCell align='center'>{row.sum}</TableCell>
              <TableCell align='center'>
                <Link
                  to={`/ordering/order/${orderId}` /*<={row.id}*/}
                  style={styles.button}
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

const styles = {
  button: {
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '35%',
    padding: '15px',
    height: '70px',
    width: '100px',
    fontSize: '15px',
    textAlign: 'center',
    margin: '5px',
    color: 'black',
    textDecoration: 'none',
  },
  table: {
    fontSize: '20px',
  },
  progressCircle: {
    color: 'yellow',
  },
  progressName: {
    textTransform: 'uppercase',
    fontSize: '12px',
  },
};
export default Ordering;
