import { useSelector, useDispatch } from 'react-redux'
import { login } from '../slices/signinSlice'
import { register } from '../slices/registrationSlice'
import { useRef } from 'react'

const Signin = () => {
    const registeredUsers = useSelector(state => state.register.registeredUsers)
    const dispatch = useDispatch()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    return (
        <div className='flex justify-center items-center bg-white h-screen'>
            <div className="signin__container w-96 max-w-full p-6 bg-white border-2 rounded-lg">
                <h1 className='text-3xl mb-6'>Sign in</h1>
                <form className='flex flex-col'>
                    <label htmlFor="signinUserEmail">Email</label>
                    <input ref={emailRef} className='border-2 rounded focus:outline-yellow-500 px-2 py-1 mb-2' type="email" name="signinUserEmail" id="signinUserEmail" />
                    <label htmlFor="signinPassword">Password</label>
                    <input ref={passwordRef} className='border-2 rounded focus:outline-yellow-500 px-2 py-1 mb-2' type="password" name="signinPassword" id="signinPassword" />
                    <button type='button' onClick={() => dispatch(login({ registeredUsers: registeredUsers, loginUser: { email: emailRef.current.value, password: passwordRef.current.value } }))} className='mt-2 bg-yellow-500 py-2 rounded hover:bg-yellow-400'>Sign in</button>
                    <span className='mt-4 text-center opacity-50 text-sm'>New to Amazon?</span>
                    <button type='button' onClick={() => dispatch(register({ email: emailRef.current.value, password: passwordRef.current.value }))} className='mt-2 bg-gray-300 hover:bg-gray-200 rounded py-2'>Create an account</button>
                </form>
            </div>
        </div>
    )
}

export default Signin