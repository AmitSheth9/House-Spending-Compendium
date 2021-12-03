import React from 'react'
import { useEffect, useState } from 'react'
import { fetchByReceipts } from '../../services/Fetch'
import Candidates from '../../components/candidates/Candidates';
import Search from '../../components/Forms/Search';
import { fetchSearchQuery } from '../../services/Fetch';
import SearchResults from '../../components/search-results/SearchResults';
import { fetchSortedCandidates } from '../../services/Fetch';
import Filter from '../../components/Forms/Filter';

export default function Compendium() {

const [candidateArr, setCandidateArr] = useState([]);
const [searchQuery, setSearchQuery] = useState('fire');
const [searchResult, setSearchResult] = useState([]);
const [selectedSort, setSelectedSort] = useState('receipts');

/*useEffect(() => {
    async function getTopReceipts() {
        const candidateList = await fetchByReceipts();
        console.log(candidateList);
        setCandidateArr(candidateList);
    }
    getTopReceipts();
},[]);    
*/
useEffect(() => {
    async function getSortedCandidates() {
        const sortedCandidates = await fetchSortedCandidates(selectedSort);
        console.log(sortedCandidates);
        setCandidateArr(sortedCandidates);
    }
    getSortedCandidates();
}, [selectedSort])

const handleSubmit = async (event) => {
    event.preventDefault();

    const searchResponse = await fetchSearchQuery(searchQuery);
    console.log(searchResponse);
    setSearchResult(searchResponse);
    setSearchQuery('');
    
}
    return (
        <div>
            <Search setSearchQuery={setSearchQuery}
                    handleSubmit={handleSubmit} />
            <Filter selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
            <SearchResults searchResult={searchResult} />
            <Candidates candidateArr={candidateArr} />
            
        </div>
    )
}
