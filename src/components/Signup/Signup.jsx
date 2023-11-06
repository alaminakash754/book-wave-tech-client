import { useContext, useState } from "react";
import { BookWaveContext } from "../../Providers/UserProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
    const [signUpError, setSignUpError] = useState('');
    const [successSignUp, setSuccessSignUp] = useState('')
    const navigate = useNavigate();

    const { createUser, logOut, signWithGoogle } = useContext(BookWaveContext);

    const handleSignUp = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        setSignUpError('');
        setSuccessSignUp('');

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be more than six character',

            })
            setSignUpError();


            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be one capital letter',

            })
            setSignUpError();

            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>\s]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password must be one capital letter',
            })
            setSignUpError();

            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setSuccessSignUp()
                
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated')
                    })
                    .catch(error => {
                        console.error(error)
                    });
                    logOut();
                    navigate('/login');

            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })

            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-3">
            <div>
                <img className="rounded-lg" src="https://i.ibb.co/yQwv7by/loginpage.jpg" alt="" />
            </div>
            <div className="hero  bg-base-200 rounded-lg">
                <div className=" flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-gray-400 mb-3">SignUp Here now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <p>Already have an account? <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                            <p className="text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost" > <FcGoogle  /></button></p>
                        </div>
                        {
                            signUpError && <p className="text-red-700">{signUpError}</p>
                        }
                        {
                            successSignUp && <p className="text-green-700">{successSignUp}</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;