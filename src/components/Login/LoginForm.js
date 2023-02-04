import React from 'react'

export default function LoginForm({ isLogin }) {
  return (
    <div className={'${!isLogin ? "active" : "" } show'}>
        <div className='login-form'>
            <div>
                <form>
                    <label>username</label>
                    <label>Password</label>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    </div>
  )
}
