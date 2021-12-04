

export const fetchByReceipts = async () => {
    const response = await fetch('https://api.open.fec.gov/v1/candidates/totals/?sort=-receipts&api_key=3etMZlqPKrP4YB4WXLsbfaJCFdQpWSyashiAeerd&is_active_candidate=true&sort_null_only=false&sort_nulls_last=false&office=H&per_page=20&sort_hide_null=false&election_full=true&cycle=2020&page=1');
    
    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON.results;
}
export const fetchSortedCandidates = async (sortValue) => {
    const response = await fetch(`https://api.open.fec.gov/v1/candidates/totals/?sort=-${sortValue}&api_key=3etMZlqPKrP4YB4WXLsbfaJCFdQpWSyashiAeerd&is_active_candidate=true&sort_null_only=false&sort_nulls_last=false&office=H&per_page=20&sort_hide_null=false&election_full=true&cycle=2020&page=1`);
    const responseJSON = await response.json();
    return responseJSON.results;
}

export const fetchSearchQuery = async (query) => {
    const response = await fetch(`https://api.open.fec.gov/v1/candidates/search/?sort=name&api_key=3etMZlqPKrP4YB4WXLsbfaJCFdQpWSyashiAeerd&election_year=2020&sort_null_only=false&sort_nulls_last=false&per_page=20&q=${query}&sort_hide_null=false&cycle=2020&page=1`);
    const responseJSON = await response.json();
    console.log(responseJSON.results);
    return responseJSON.results;

}