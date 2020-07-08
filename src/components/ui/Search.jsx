import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Search Caharacters"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
    )
}

export default Search
