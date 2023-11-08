import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookWaveContext } from "../../Providers/UserProvider";
import Swal from 'sweetalert2'
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";


const LogIn = () => {

    const [logInError, setLogInError] = useState('');
    const [successLogin, setSuccessLogin] = useState('')
    const location = useLocation();

    const { signInUser, signWithGoogle } = useContext(BookWaveContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setLogInError('');
        setSuccessLogin('');

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };

                // get access token
                axios.post('https://book-wave-server.vercel.app/jwt', user)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
                console.log(result.user);
                e.target.reset();
                setSuccessLogin(Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }))
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setLogInError(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '"email or password are wrong"',
                }));
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-3 p-4">
            <div>
                <img className="rounded-lg h-[400px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src="https://i.ibb.co/yQwv7by/loginpage.jpg" alt="" />
            </div>
            <div className="hero  bg-base-200 rounded-lg">
                <div className=" flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-gray-500 mb-3">Login Here now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body space-y-2">
                            <form onSubmit={handleLogin}>
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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>Do not have an account? Please <Link to='/signup'><button className="btn btn-link ">Sign Up</button></Link></p>

                            <p className="text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost" > <FcGoogle className="text-2xl" /></button></p>
                        </div>
                        {
                            logInError && <p className="text-red-700">{logInError}</p>
                        }
                        {
                            successLogin && <p className="text-green-600">{successLogin}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;