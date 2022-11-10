import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const HomeServiceCard = ({ service }) => {
    const { _id, img, title, price, description } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
            </PhotoProvider>
            {/* <figure><img src={img} alt="" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}....</p>
                <p className='text-orange-600 font-bold'>Price: ${price}</p>
                <div className="card-actions ">
                    <Link className='block w-full' to={`/services/${_id}`}><button className="btn bg-red-600 rounded-lg w-full border-none">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;