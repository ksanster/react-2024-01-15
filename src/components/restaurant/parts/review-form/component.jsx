import styles from './styles.module.css';
import {useReducer} from "react";

const InitialValue = {
    name: '',
    text: '',
    rating: 0
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'setName':
            return {
                ...InitialValue,
                name: payload
            }
        case 'setText':
            return {
                ...state,
                text:payload
            }
        case 'setRating':
            return {
                ...state,
                rating: payload
            }
    }
}

export const ReviewForm = ({username, minRating, maxRating}) => {
    const [form, dispatch] = useReducer(reducer, InitialValue);

    return (
        <form name='review-form'>
            <div className={styles.root}>
                <div className={styles.field}>
                    <span>Name:</span>
                    <span className={styles.name}>{username}</span>
                </div>
                <div className={styles.field}>
                    <label htmlFor='text'>Text</label>
                    <textarea id='text' value={form.text} onChange={(event) =>
                        dispatch({type: 'setText', payload: event.target.value})}/>
                </div>
                <div className={styles.field}>
                    <label htmlFor='rating'>Rating</label>
                    <input id='rating' type='number' min={minRating} max={maxRating}
                           value={form.rating}
                           onChange={(event) => dispatch({type: 'setRating', payload: event.target.value})}/>
                </div>
            </div>
        </form>
    );
}
