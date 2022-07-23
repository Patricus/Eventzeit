import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addOneTicket } from "../../store/tickets";


function TicketForm({event}) {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const [purchased, setPurchased] = useState(false)
    const user = useSelector(state => state.session.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (name.length < 25) setErrors([]);
        else setErrors(['Name must be 25 characters or less.']);
    }, [name])

    const updateName = (e) => {
        setName(e.target.value);
    };

    const onPurchase = (e) => {
        e.preventDefault();
        if (!name) setErrors(['Name field is required.'])
        const data = {
            attendee: name,
            for_sale: false,
            user_id: user.id,
            event_id: event.id
        }
        dispatch(addOneTicket(data))
        setPurchased(true)
    }

    return (
        <div>
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
                        <button type="submit" disabled={!name}>Submit</button>
                    </div>
                </form>
            }
            {purchased &&
                <div>
                    <h2>Purchase Complete</h2>
                    <p>Enjoy your time at {event.name}</p>
                </div>
            }
        </div>
    );
};

export default TicketForm;
