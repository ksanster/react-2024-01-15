import styles from './styles.module.css';
import {useReducer} from "react";
import {Button} from "../button/component.jsx";
import {useCreateReviewMutation, useGetReviewsQuery} from "../../../../store/services/api.js";

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
        case 'clear':
            return {
                ...InitialValue
            }
    }
}

export const ReviewForm = ({restaurantId, username, minRating, maxRating}) => {
    const [form, dispatch] = useReducer(reducer, InitialValue);
    const [createReview, { isLoading }] = useCreateReviewMutation();

    const createReviewAndClearForm = async (form) => {
        await createReview(form);
        dispatch({type: 'clear'})
    }

    const { data: myReview } = useGetReviewsQuery(restaurantId, {
        selectFromResult: (result) => {
            return ({
                ...result,
                data: result.data?.find(({user}) => user === username),
            })
        }
    });
    const hasMyReview = !!myReview;


    return (
        hasMyReview
            ? <div className={styles.sent}>Review already sent</div>
            : <form name='review-form'>
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
                    {
                        isLoading
                            ? <div>Posting...</div>
                            : <Button onClick={() => {
                                createReviewAndClearForm({
                                    restaurantId,
                                    newReview: {
                                        user: username,
                                        text: form.text,
                                        rating: form.rating,
                                    }
                                })
                                }
                                }>
                                Submit
                             </Button>

                    }
                </div>
            </form>
    );
}
