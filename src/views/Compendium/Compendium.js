import React from 'react'
import { useEffect, useState } from 'react'
import { fetchByReceipts } from '../../services/Fetch'
import Candidates from '../../components/candidates/Candidates';
import Search from '../../components/candidates/search/Search';
import { fetchSearchQuery } from '../../services/Fetch';
import SearchResults from '../../components/search-results/SearchResults';

export default function Compendium() {

const [candidateArr, setCandidateArr] = useState([]);
const [searchQuery, setSearchQuery] = useState('fire');
const [searchResult, setSearchResult] = useState([]);

useEffect(() => {
    async function getTopReceipts() {
        const candidateList = await fetchByReceipts();
        console.log(candidateList);
        setCandidateArr(candidateList);
    }
    getTopReceipts();
},[]);    

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
            <SearchResults searchResult={searchResult} />
            <Candidates candidateArr={candidateArr} />
            
        </div>
    )
}
