import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { addNewItem } from '../redux/reducers/items'

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
    width: 400,
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
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()
  const [description, setDescrition] = useState()
  const [price, setPrice] = useState()

  const dispatch = useDispatch()

  const categories = ['laptop', 'phone', 'camera', 'gadget', 'multitool']

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Title" maxlength='20' value={title} onChange={((e) => {
          if (e.target.value.length < 20) {
            setTitle(e.target.value)
          }
        })} />
        <InputLabel id="demo-simple-select-label">Select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {categories.map((it) => {
            return (
              <MenuItem key={it} value={it} onClick={(() => setCategory(it))}>{it}</MenuItem>
            )
          })}
        </Select>
        <TextField id="standard-basic" label="Description" value={description} onChange={((e) => {
          if (e.target.value.length < 200) {
            setDescrition(e.target.value)
          }
        })} />
        <TextField id="standard-basic" label="Price" value={price} onChange={((e) => setPrice(e.target.value))} />
        <div className="flex-col space-x-2">
          <Button variant="contained" onClick={(() => handleClose())}>
            CANCEL
          </Button>
          <Button variant="contained" color="primary" onClick={(() => {
            dispatch(addNewItem(title, category, description, price))
            handleClose()
          })}
          >
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        ADD ITEM
</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
