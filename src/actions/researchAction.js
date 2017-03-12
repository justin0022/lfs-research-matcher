export const populateResearch = research => ({
    type: 'POPULATE_RESEARCH',
    researchListing: research
})

export const filterByWord = word => ({
    type: 'FILTER_BY',
    filterBy: word
})

export const selectResearch = id => ({
    type: 'SELECT_RESEARCH',
    select: id
})
