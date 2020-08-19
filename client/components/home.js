import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './head'
import Table from './table'
import Modal from './modal'
import { getItems } from '../redux/reducers/items'

const Home = () => {

  const dispatch = useDispatch()
  const newItem = useSelector((s) => s.items.newItem)

  useEffect(() => {
    if (typeof newItem !== 'undefined') {
      dispatch(getItems())
    }
  }, [newItem])

  return (
    <div>
      <Head title="Hello" />
      <div className="flex justify-center">
        <div className="max-w-3xl flex flex-col">
          <div className="flex justify-end my-8">
            <Modal />
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
