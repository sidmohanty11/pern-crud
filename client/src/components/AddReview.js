import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from '../api/axios';

function AddReview() {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [rating, setRating] = useState("Rating");
    const [reviewText, setReviewText] = useState("");

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/${id}/addReview`, {
                name, rating, review: reviewText
            });
            history.push("/");
            history.push(location.pathname);
        } catch (err) {
            console.log(`err`, err)
        }
    }
    
    return (
        <div className="mb-2">
            <form>
                <div className="row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select value={rating} onChange={(e) => setRating(e.target.value)} id="rating" className="form-select">
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea placeholder="Write your Review here." value={reviewText} onChange={(e) => setReviewText(e.target.value)} id="review" className="form-control" />
                </div>
                <button onClick={handleSubmitReview} className="btn btn-dark mt-3" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddReview;
