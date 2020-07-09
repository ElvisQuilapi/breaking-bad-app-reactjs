import React from 'react'

import CharactersItem from '../characters/CharactersItem'
import Spinner from '../ui/Spinner'

const CharactersGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
        ) : (
        <section className="cards">
            {items.map((item) => (
                <CharactersItem key={item.char_id} item={item}></CharactersItem>
            ))}
        </section>
        )
}

export default CharactersGrid