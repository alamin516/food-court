import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('My Review')

    useEffect(() => {
        fetch(`https://food-court-server.vercel.app/reviews`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [user?.email])


    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to delete')
        if (procced) {
            fetch(`https://food-court-server.vercel.app/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete sucessfully')
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }




    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold mb-10'>Review - {reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <>
                            {
                                reviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                >
                                </ReviewRow>)
                            }
                        </>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;