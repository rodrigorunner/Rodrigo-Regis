import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { addReserveReduce, updateAmountReduce } from './actions'
import { toast } from 'react-toastify';
import api from '../../../services/api'

function* addToReserve({ id }) {

    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    )

    const stockAmount = yield call(api.get, `stock/${id}`)

    const myStock = stockAmount.data.amount 

    const currentStock = tripExists ? tripExists.amount : 0

    const amount = currentStock + 1

    if(amount > myStock) {
        toast.warn('Quantidade máxima atingida.')
        return
    }

    if(tripExists) {

        yield put(updateAmountReduce(id, amount))
        
    } else {
        const res = yield call(api.get, `trips/${id}`)
    
        const data = {
            ...res.data,
            amount:1
        }
    
        yield put(addReserveReduce(data))

    }

}

function* updateAmount({id, amount}) {
    if(amount <= 0) return 

    const stockAmount = yield call(api.get, `stock/${id}`)

    const myStock = stockAmount.data.amount 

    if(amount > myStock) {
        toast.warn('Quantidade máxima atingida')
        return
    }

    yield put(updateAmountReduce(id, amount))
}

export default all([
    takeLatest('ADD_RESERVE_SAGA', addToReserve),
    takeLatest('UPDATE_SAGA', updateAmount),
])