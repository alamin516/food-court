import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import './AddProduct.css'

const AddProduct = () => {
    const {handleSubmit, register, reset, formState: { errors }} = useForm()
    const imgHostingApiKey = '5f6125700e3a7436ab7cd344a614ad29'
    useTitle('Add Service');

    const handleAddProduct = data => {
        const image = data.product_img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            console.log(imgData.data.url)
            if(imgData.success){

                const addProduct = {
                    title: data.title,
                    img: imgData.data.url,
                    price: data.price,
                    rating: data.rating,
                    description: data.description
                }
        
                console.log(addProduct);
        
                fetch('http://localhost:5000/service', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.acknowledged === true) {
                            toast("Service added successfully")
                            reset()
                        }
                    })
                    .catch(err => console.error(err))
            }

        })

    }

    return (
        <div>
            <div>
                <div className="shadow-2xl bg-base-100 w-full rounded-lg py-10">
                    <h1 className='text-center text-3xl font-bold mb-10'>Add Service</h1>
                    <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name='title' {...register("title", {required : "Title is required", })} type="text" placeholder="Service title" className="input input-bordered rounded-lg"/>
                            {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' {...register("price", {required : "Title is required"})} type="number" placeholder="Price" className="input input-bordered rounded-lg"/>
                            {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name='rating' {...register("rating")} type="number" placeholder="Rating" className="input input-bordered rounded-lg"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea {...register("description")} className="textarea textarea-bordered h-24 w-full rounded-lg my-4" placeholder='Your Message'></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add product image</span>
                            </label>
                            <label className="custom-file-upload">
                                <input name='img' {...register("product_img")} type="file" placeholder="Upload Products Image " className="input input-bordered rounded-lg"/>
                            </label>
                        </div>

                        <div className="mt-6">
                            <button className="btn bg-red-600 border-red-600 rounded-lg text-white">Add Products</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;