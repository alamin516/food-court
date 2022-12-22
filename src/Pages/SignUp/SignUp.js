import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Sign Up')

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                usernameUpdate(name)
                toast('Successfully Created')
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.error(err)
                alert(err)
            })
    }

    // const handleAddProduct = data => {
    //     const image = data.product_img[0];
    //     const formData = new FormData();
    //     formData.append('image', image)
    //     const url = `https://api.imgbb.com/1/upload?key=${imgHostingApiKey}`;
    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(imgData => {
    //             if (imgData.success) {
    //                 console.log(imgData.data.url);

    //                 const user = {
    //                     seller: data.seller,
    //                     name: data.name,
    //                     email: data.email,
    //                     phone: data.phone,
    //                     categoryId: data.categoryId,
    //                     img: imgData.data.url,
    //                     location: data.location,
    //                     price: data.price,
    //                     resale_price: data.resale_price,
    //                     description: data.description,
    //                     condition: data.condition,
    //                     used_time: data.used_time,
    //                     verified_seller : verifiedSeller.verified

    //                 }

    //                 fetch(`https://car-seller-server.vercel.app/products`, {
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type': 'application/json',
    //                         authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                     },
    //                     body: JSON.stringify(product)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.acknowledged) {
    //                             toast.success(`Product added successfully`);
    //                             navigate('/dashboard/myproducts')
    //                             refetch()
    //                         }
    //                     })
    //             }
    //         })

    // }

    const usernameUpdate = (name) => {
        updateUser({
            displayName: name
        })
            .then()
            .catch(error => alert(error))
    }

    return (
        <div className="hero py-10">
            <div className='lg:w-1/2'>
                <div className="shadow-2xl bg-base-100 w-75 rounded-lg pb-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered rounded-lg" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-red-600 border-red-600 rounded-lg text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-red-500'>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;