import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/ui/Header'
import CharactersGrid from './components/characters/CharactersGrid'
import Search from './components/ui/Search'

import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`)

      console.log(result)

      setItems(result.data)
      setLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App
  