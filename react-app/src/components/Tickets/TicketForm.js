import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addOneTicket } from "../../store/tickets";


function TicketForm() {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const [purchased, setPurchased] = useState(false)
    // const eventId = useParams()
    const user = useSelector(state => state.session.user)
    // const event = useSelector(state => state.events.eventId)

    const dispatch = useDispatch()

    useEffect(() => {
        if (name.length > 25) return;
        setErrors('Name must be 25 characters or less.');
    }, [errors])

    const updateName = (e) => {
        setName(e.target.value);
    };

    const onPurchase = async (e) => {
        e.preventDefault();
        if (!name) setErrors('Name field is required.')
        const data = {
            attendee: name,
            for_sale: false,
            user_id: user.id,
            event_id: 1
        }
        newTicket = await dispatch(addOneTicket(data))
        if (newTicket.id) {
            setPurchased(true)
        }
    }

    return (
        <>
            {!purchased &&
                <form onSubmit={onPurchase}>
                    <div>
                        {errors && errors.map((error, i) => (
                            <div key={i}>{error}</div>
                        ))}
                    </div>
                    <div>
                        <label>Name of Attendee</label>
                        <input
                            type="text"
                            value={name}
                            onChange={updateName}
                        ></input>
                    </div>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            }
            {purchased &&
                <div>
                    <h2>Purchase Complete</h2>
                </div>
            }
        </>
    );
};

export default TicketForm;
