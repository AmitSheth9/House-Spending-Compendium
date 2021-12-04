import React from 'react'
import './Candidates.css'

export default function Candidates({candidateArr}) {
    return (
        <div>
            {candidateArr.map((candidate => {
                return <div className='pol-container' key={candidate.candidate_id}>
                    <p className='name'>{candidate.name}</p>
                    <p className='top-lines'>Receipts: {candidate.receipts}</p>
                    <p className='top-lines'>Disbursements: {candidate.disbursements}</p>
                    <br/>
                    <p>Party: {candidate.party_full}</p>
                    <p>Cycle: {candidate.cycle}</p>
                    <p>State: {candidate.state}</p>
                    <p>Cash on Hand: {candidate.cash_on_hand_end_period}</p>
                    </div>
            }))}
        </div>
    )
}
