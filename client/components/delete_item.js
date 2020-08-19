import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { deleteItem } from '../redux/reducers/items'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 350,
    },
  },
}))

export default function SimpleModal() {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
const { id } = useParams()
  const dispatch = useDispatch()

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="text-center font-bold text-lg mb-2">Delete selected item?</div>
      <div className="flex justify-center">
        <div className="flex-col space-x-2">
          <Button variant="contained">
            <Link to='/'>
              CANCEL
            </Link>
          </Button>
          <Button variant="contained" color="primary" onClick={(() => {
            dispatch(deleteItem(id))
          })}
          >
            <Link to='/'>
              DELETE
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div>


      {body}
    </div>
  )
}
