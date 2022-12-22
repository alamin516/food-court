import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const {_id, user, serviceName, service, price, text } = review;
    const [serviceReviews, setServiceReviews] = useState({});

    useEffect(() => {
        fetch(`https://food-court-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceReviews(data))
    }, [service])
    

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {
                                serviceReviews?.img &&
                                <img src={serviceReviews.img} alt="Avatar Tailwind CSS Component" />}
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
                <div className="font-bold">{user?.email}</div>
            </td>
            <td>
                {text}
            </td>
        </tr>
    );
};

export default ReviewRow;