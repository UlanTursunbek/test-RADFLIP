import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { editSelectedItem } from '../redux/reducers/items'

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

  const items = useSelector((s) => s.items.items)
  const { id } = useParams()
  const selectedItem = items.filter((it) => it._id === id)

  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [title, setTitle] = useState(selectedItem[0].title)
  const [category, setCategory] = useState(selectedItem[0].category)
  const [description, setDescrition] = useState(selectedItem[0].description)
  const [price, setPrice] = useState(selectedItem[0].price)

  const dispatch = useDispatch()

  const categories = ['laptop', 'phone', 'camera', 'gadget', 'multitool']


  const body = (
    <div style={modalStyle} className={classes.paper}>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" placeholder={title} label="Title" value={title} oonChange={((e) => {
          if (e.target.value.length < 20) {
            setTitle(e.target.value)
          }
        })} />
        <InputLabel id="demo-simple-select-label" >Select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {categories.map((it) => {
            return (
              <MenuItem key={it} value={it}
                onClick={(() => setCategory(it))}>{it}</MenuItem>
            )
          })}
        </Select>
        <TextField id="standard-basic" placeholder={description} label="Description" value={description} onChange={((e) => {
          if (e.target.value.length < 200) {
            setDescrition(e.target.value)
          }
        })} />
        <TextField id="standard-basic" placeholder={price} label="Price" value={price} onChange={((e) => setPrice(e.target.value))} />
        <div className="flex-col space-x-2">
          <Button variant="contained">
            <Link to='/'>
              CANCEL
            </Link>
          </Button>
          <Button variant="contained" color="primary" onClick={(() => {
            dispatch(editSelectedItem(id, title, category, description, price))
          })}
          >
            <Link to='/'>
              SAVE
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )

  return (
    <div>

      {body}
    </div>
  )
}
