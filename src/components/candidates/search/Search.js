import React from 'react'

export default function Search({ searchQuery, setSearchQuery, handleSubmit}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label> Search for 2020 House members
                <input onChange={(e) => setSearchQuery(e.target.value)} />
            </label>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}
