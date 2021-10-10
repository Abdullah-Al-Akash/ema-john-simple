import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../context/useAuth';
import './Shipping.css';

const Shipping = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);

        const { user } = useAuth()
        return (
                <div className="shipping-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input defaultValue={user.displayName}  {...register("name")} placeholder="name" />

                                {/* include validation with required or other standard HTML validation rules */}
                                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="email" />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className="error">This field is required</span>}

                                <input {...register("Address", { required: true })} placeholder="Address" />
                                {errors.Address && <span className="error">This field is required</span>}
                                <input {...register("Phone", { required: true })} placeholder="Phone" />
                                {errors.Phone && <span className="error">This field is required</span>}
                                <input {...register("City", { required: true })} placeholder="City" />
                                {errors.City && <span className="error">This field is required</span>}

                                <input type="submit" />
                        </form>
                </div>
        );
};

export default Shipping;