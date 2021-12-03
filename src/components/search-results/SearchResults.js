import React from 'react'

export default function SearchResult({searchResult}) {
    return (
        
        <div>
            {searchResult.map((result => {
                return <div className='pol-container' key={result.candidate_id}>
                    <p>Name: {result.name}</p>
                    <p>Office: {result.office_full}</p>
                    <p>Party: {result.party_full}</p>
                    <p>State: {result.state}</p>

                    </div>

            }))}
        </div>
        
    
    )
}
