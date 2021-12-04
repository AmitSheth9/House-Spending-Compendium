import React from 'react'
import './forms.css'

export default function Search({ searchQuery, setSearchQuery, handleSubmit}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label> Search 2020 US House of Representatives: 
                <input onChange={(e) => setSearchQuery(e.target.value)} />
            </label>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}
