import React from 'react'

const Login = () => {
    return (
        <div>
            <section className='login'>
                <div className='login_img'>
                    <div className='login_bgimg'></div>
                </div>
                <div className='login_detail'>
                    <form>
                        <div>
                            <label>User Name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>User Password</label>
                            <input type="password" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login
