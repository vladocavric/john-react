const reducer = (prevState, actions) => {
    switch (actions.type) {
        case 'ADD_ITEM':
            return {
                people: [...prevState.people, actions.person],
                modalOpen: true,
                modalContent: `${actions.person.name} was added`
            }
        case 'REMOVE_ITEM':
            const newPeople = prevState.people.filter(person => person.id !== actions.id)
            return {
                people: newPeople,
                modalOpen: true,
                modalContent: 'person was removed'
            }
        case 'EMPTY_VALUE':
            return {
                ...prevState,
                modalOpen: true,
                modalContent: 'please add value'
            }
        case 'CLOSE_MODAL':
            return {
                ...prevState,
                modalOpen: false,
                modalContent: ''
            }
        default:
          throw new Error('no matching actions type')
    }
}

export default reducer