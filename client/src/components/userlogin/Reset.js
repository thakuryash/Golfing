import React from 'react'
import styles from '../../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidate } from '../../helper/validate'

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: 'admin@123',
      confirm_pwd: 'admin@123',
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values)
    },
  })

  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-cente text-gray-500'>
              Enter New Password
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-6'>
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type='text'
                placeholder='Password'
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                className={styles.textbox}
                type='text'
                placeholder='Repeat Password'
              />
              <button className={styles.btn} type='submit'>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}