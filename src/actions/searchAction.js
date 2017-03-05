export const updateSearchTerm = (value) => ({
    type: 'UPDATESEARCH',
    value
})

export const fireSearch = () => ({
    type: "FIRESEARCH",
    fireSearch: true
})