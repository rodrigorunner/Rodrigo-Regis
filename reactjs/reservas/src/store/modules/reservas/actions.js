export function addReserveSaga(id) {
    return {
        type: 'ADD_RESERVE_SAGA',
        id
    }
} 

export function addReserveReduce(trip) {
    return {
        type: 'ADD_RESERVE_REDUCE',
        trip
    }
} 

export function removeReserve(id) {
    return {
        type: 'REMOVE',
        id
    }
}

export function updateAmountSaga(id, amount) {
    return {
        type: 'UPDATE_SAGA',
        id,
        amount
    }
}

export function updateAmountReduce(id, amount) {
    return {
        type: 'UPDATE_REDUCE',
        id,
        amount
    }
}