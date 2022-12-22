import React, { useEffect, useState } from 'react';

const DisplayReview = ({review}) => {
    const {user, serviceName, service, price, text , name} = review;
    const [serviceReviews, setServiceReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceReviews(data))
    }, [service])

    return (
        <tr>
            {/* <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {
                                serviceReviews?.img &&
                                <img src={serviceReviews.img} alt="" />}
                        </div>
                    </div>
                    <div>
                        {serviceName}
                        <br />
                        <span className="badge badge-ghost badge-sm">${price}</span>

                    </div>
                </div>
            </td>
            <td>
                {user?.displayName} 
                <br/>
                 {user?.email}
            </td> */}
            <td>
                <span className='font-semibold'>{name && `${name} -`}</span> {text} 
            </td>
        </tr>
    );
};

export default DisplayReview;