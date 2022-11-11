import { Formik } from 'formik'
import Image from 'next/image'
import React from 'react'
import styles from './styles'
import * as Yup from 'yup'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/reducers/userSlice'
import { userMock } from 'components/mocks/userMock'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { COOKIE_EXPIRE_TIME } from 'utils/constant'

function SignInForm({ formStyle }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const USER_SCHEMA = Yup.object({
    email: Yup.string().email().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'At least 8 characters')
      .test('hasUpperCase', 'Password need at least 1 uppercase character', (value, _context) => {
        return /[A-Z]/.test(value)
      })
      .test('hasLowerCase', 'Password need at least 1 lowercase character', (value, _context) => {
        return /[a-z]/.test(value)
      })
      .test('hasNumber', 'Password need at least 1 number', (value, _context) => {
        return /[0-9]/.test(value)
      })
      .test('hasSymbol', 'Password need at least 1 special character (!, @, #, %, &)', (value, _context) => {
        return /[!@#%&]/.test(value)
      }),
  })

  return <Formik
    validationSchema={USER_SCHEMA}
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={async (values, { setSubmitting, resetForm }) => {
      console.log(values)

      try {
        setSubmitting(true)
        // Validate user

        // Set userSlice
        Cookies.set('user', JSON.stringify(userMock), { expires: COOKIE_EXPIRE_TIME })
        dispatch(setUser(userMock))
        router.push('/')
        setSubmitting(false)
        resetForm({ email: '', password: '' })
      } catch (e) {
        setSubmitting(false)
        resetForm({ email: '', password: '' })
      }
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
      <form name="sign-in" className="form-wrapper" encType="multipart/form-data" onSubmit={handleSubmit} style={formStyle}>
        <div className="icon-lg">
          <Image src="/images/Auth/Logo.svg" width={128} height={128} />
        </div>
        <div className="form-container">
          <div className="input">
            <div className="icon-sm">
              <Image src="/images/Auth/email.svg" width={24} height={24} />
            </div>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="EMAIL"
            />
          </div>
          {touched['email'] && errors['email'] && (
            <div className="error">
              <p>{errors['email']}</p>
            </div>
          )}
          <div className="input">
            <div className="icon-sm">
              <Image src="/images/Auth/lock.svg" width={24} height={24} />
            </div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="PASSWORD"
              autoComplete="current-password"
            />
          </div>
          {touched['password'] && errors['password'] && (
            <div className="error">
              <p>{errors['password']}</p>
            </div>
          )}
          <div className="reset-password">
            <Link href="/reset-password">
              <a>Forgot password?</a>
            </Link>
          </div>
        </div>
        <div className="form-event">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button"
            style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
          >
            LOGIN
          </button>

          <p className="sign-up">
            You don't have account?{' '}
            <Link href="/sign-up">
              <a>Sign up here!</a>
            </Link>
          </p>
        </div>
        <style jsx>{styles}</style>
      </form>
    )}
  </Formik>
}

const SignIn = () => {

  return (
    <div className="wrapper">
      <div className="round-layer">
        <Image src="/images/Auth/BG.png" layout="fill" alt="background" />
      </div>
      <SignInForm formStyle={{}} />
      <style jsx>{styles}</style>
    </div>
  )
}

export default SignIn
