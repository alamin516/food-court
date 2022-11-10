import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        // console.log(title, img, price, rating, description)

        const service = {
            title,
            img,
            price,
            rating,
            description
        }

        fetch('https://food-court-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.acknowledged === true){
                    toast("Service added successfully")
                    form.reset();
                }
            })
            .catch(err => console.error(err))


        
    }

    return (
            <div>
                <div>
                    <div className="shadow-2xl bg-base-100 w-full rounded-lg py-10">
                    <h1 className='text-center text-3xl font-bold mb-10'>Add Service</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input name='title' type="text" placeholder="Service title" className="input input-bordered rounded-lg"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img URL</span>
                                </label>
                                <input name='img' type="url" placeholder="Img URL" className="input input-bordered rounded-lg"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="number" placeholder="Price" className="input input-bordered rounded-lg"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name='rating' type="number" placeholder="Rating" className="input input-bordered rounded-lg"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                
                                <textarea name='description' className="textarea textarea-bordered h-24 w-full my-4" placeholder='Your Message' required></textarea>
                            </div>

                            <div className="mt-6">
                                <button className="btn bg-red-600 border-red-600 rounded-lg text-white">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default AddService;