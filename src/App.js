import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/ui/Header'

import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  console.log(process.env)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters`)
      setItems(result.data)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App
  