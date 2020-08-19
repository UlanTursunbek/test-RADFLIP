import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function SimpleTable() {
  const classes = useStyles();
  const items = useSelector((s) => s.items.items)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />

          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((it) => (
            <TableRow key={it.title}>
              <TableCell component="th" scope="row">
                {it._id}
              </TableCell>
              <TableCell align="right">{it.title}</TableCell>
              <TableCell align="right">{it.category}</TableCell>
              <TableCell align="right">{it.price}</TableCell>
              <TableCell align="right">{it.description}</TableCell>
              <TableCell align="right"><Link to={`/edit/${it._id}`}><EditIcon /></Link></TableCell>
              <TableCell align="right"><Link to={`/delete/${it._id}`}><DeleteIcon /></Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
