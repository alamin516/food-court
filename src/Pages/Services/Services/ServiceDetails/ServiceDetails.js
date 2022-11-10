import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import DisplayReview from './DisplayReview';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, title, img, price, rating, description } = service;
    const [reviews, setReviews] = useState([])
    const location = useLocation();


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            user,
            img,
            text,
            rating,
        }

        fetch('https://food-court-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast("Review added successfully")
                    form.reset();
                    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
                }
            })
            .catch(err => console.error(err))

    }

    useEffect(() => {
        fetch(`https://food-court-server.vercel.app/reviews`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='py-10'>
            <div className='lg:flex mb-10'>
                <div className='lg:w-1/2'>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl font-bold mb-5'>{service.title}</h2>
                    <h3 className='text-2xl font-semibold mb-5'>Price: <span className='text-red-600'>${price}</span></h3>
                    <p className='mb-5'>{description.slice(0, 120)}...</p>
                    <p className='lg:mb-20 mb-5'>Rating: {rating}</p>
                    <input type="number" className='input input-bordered rounded-lg text-black' />
                    <button className="btn bg-red-600 rounded-lg w-25 border-none block mt-10">Add to cart</button>
                </div>
            </div>

            <h1 className='text-3xl font-bold mb-10'>Reviews</h1>
            <table className="table w-full">
                <tbody>
                    {
                        user?.uid && reviews.map(review => <DisplayReview
                            key={review._id}
                            review={review}
                        >
                        </DisplayReview>)
                    }
                </tbody>
            </table>
            <hr />
            <div>
                <form onSubmit={handleReview}>
                    <h2 className='text-3xl my-5'>{title}</h2>
                    <h4 className='text-xl'>Price: ${price}</h4>
                    <input name='text' className="input input-bordered h-24 w-full my-4" placeholder='Type Your Review Here' required />
                    {
                        user?.uid ? <button type="submit" className='btn my-2'> Review</button> :
                            <Link to='/login'><button type="submit" className='btn my-2'> Review</button></Link>

                    }
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;