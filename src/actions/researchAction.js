export const populateResearch = research => ({
    type: 'POPULATE_RESEARCH',
    researchListing: research
})

export const filterByWord = word => ({
    type: 'FILTER_BY',
    term: word
})