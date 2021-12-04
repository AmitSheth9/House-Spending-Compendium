import React from 'react'
import './forms.css'

export default function Filter({setSelectedSort, selectedSort}) {
    return (
        <div>
            <select
                value={selectedSort}
                onChange={e => setSelectedSort(e.target.value)}>
                    <option value='disbursements'>Disbursements</option>
                    <option value='receipts'>Receipts</option>
                    <option value='cash_on_hand_end_period'>Cash on Hand</option>
                    <option value='debts_owed_by_committee'>Debts owed by Committee</option>


                </select>
        </div>
    )
}
