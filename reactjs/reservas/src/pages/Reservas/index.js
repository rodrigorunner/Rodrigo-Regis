import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa'
import { removeReserve, updateAmountSaga } from '../../store/modules/reservas/actions'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'

const Reservas = () => {
    const reserve = useSelector(state => state.reserve)
    const dispatch = useDispatch()

    function remove(id) {
        dispatch(removeReserve(id))
    }

    function decrementAmount(trip) {
        dispatch(updateAmountSaga(trip.id, trip.amount - 1))
    }
    
    function incrementAmount(trip) {
        dispatch(updateAmountSaga(trip.id, trip.amount + 1))
    }

    return(
        <div>
            <h3>Você solicitou {reserve.length}
                {reserve.length > 1 ? ' reservas' : ' reserva'}
            </h3>

            {reserve.map(item => {
                return(
                    <div className='reserves-added' key={item.id}>
                        <div>
                            <img src={item.image} alt={item.title} />
                            <strong>{item.title}</strong>
                        </div>
                        <div className='btns'>
                            <button className='btn' 
                                    onClick={() => decrementAmount(item)}>
                                <FaMinusCircle />
                            </button>

                            <input readOnly value={item.amount} />

                            <button className='btn'
                                    onClick={() => incrementAmount(item)}>
                                <FaPlusCircle />
                            </button>
                        </div>
                            <button onClick={() => remove(item.id)} className='btn trash'>
                                <FaTrash />
                            </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Reservas