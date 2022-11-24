import { Formik } from 'formik'
import * as Yup from 'yup'
import { setUser } from 'store/reducers/userSlice'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import styles from './styles'
import Link from 'next/link'
import Cookies from 'js-cookie'
import axios from 'axios'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

export const SignInForm = ({ setSignUp, callback }) => {
  const dispatch = useDispatch()

  const USER_SCHEMA = Yup.object({
    email: Yup.string().email('Email must be valid').required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'At least 8 characters')
      .test('hasUpperCase', 'Password need at least 1 uppercase character', (value) => {
        return /[A-Z]/.test(value)
      })
      .test('hasLowerCase', 'Password need at least 1 lowercase character', (value) => {
        return /[a-z]/.test(value)
      })
      .test('hasNumber', 'Password need at least 1 number', (value) => {
        return /[0-9]/.test(value)
      })
      .test('hasSymbol', 'Password need at least 1 special character (!, @, #, %, &)', (value) => {
        return /[!@#%&]/.test(value)
      }),
  })

  return (
    <Formik
      validationSchema={USER_SCHEMA}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const loginInData = await axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, {
              email: values.email,
              password: values.password,
            })
            .then((res) => res.data)

          if (loginInData) {
            const userInfo = {
              id: loginInData.user.id,
              username: loginInData.user.username,
              firstName: loginInData.user.firstName,
              lastName: loginInData.user.lastName,
              token: loginInData.accessToken,
            }
            Cookies.set('user', JSON.stringify(userInfo), { expires: loginInData.expiredIn })
            dispatch(setUser(userInfo))
          }

          callback()
        } catch (e) {
          console.log(e)
        }
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form name="sign-in" className="form-wrapper" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="icon-lg">
            <Image src="/images/auth-icon.png" width={128} height={128} alt="Image" />
          </div>
          <div className="form-container">
            <div className="input">
              <div className="icon-sm">
                <MdPerson fontSize={24} />
              </div>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
              />
            </div>
            {touched['email'] && errors['email'] && (
              <div className="error">
                <p>{errors['email']}</p>
              </div>
            )}
            <div className="input">
              <div className="icon-sm">
                <MdLock fontSize={24} />
              </div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
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
              {"You don't have account?"} <span onClick={setSignUp}>Sign up here!</span>
            </p>
          </div>
          <style jsx>{styles}</style>
        </form>
      )}
    </Formik>
  )
}

export const SignUpForm = ({ setSignIn, callback }) => {
  const dispatch = useDispatch()

  const USER_SCHEMA = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Username must be a valid email').required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'At least 8 characters')
      .test('hasUpperCase', 'Password need at least 1 uppercase character', (value) => {
        return /[A-Z]/.test(value)
      })
      .test('hasLowerCase', 'Password need at least 1 lowercase character', (value) => {
        return /[a-z]/.test(value)
      })
      .test('hasNumber', 'Password need at least 1 number', (value) => {
        return /[0-9]/.test(value)
      })
      .test('hasSymbol', 'Password need at least 1 special character (!, @, #, %, &)', (value) => {
        return /[!@#%&]/.test(value)
      }),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match'),
  })

  return (
    <Formik
      validationSchema={USER_SCHEMA}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const registerData = await axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            })
            .then((res) => res.data)

          if (registerData) {
            const userInfo = {
              id: registerData.user.id,
              username: registerData.user.username,
              firstName: registerData.user.firstName,
              lastName: registerData.user.lastName,
              token: registerData.accessToken,
            }
            Cookies.set('user', JSON.stringify(userInfo), { expires: registerData.expiredIn })
            dispatch(setUser(userInfo))
          }

          callback()
        } catch (e) {
          console.log(e)
        }
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form name="sign-in" className="form-wrapper" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="input">
              <div className="icon-sm">
                <MdPerson fontSize={24} />
              </div>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="Enter first name"
              />
            </div>
            {touched['firstName'] && errors['firstName'] && (
              <div className="error">
                <p>{errors['firstName']}</p>
              </div>
            )}
            <div className="input">
              <div className="icon-sm">
                <MdPerson fontSize={24} />
              </div>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Enter last name"
              />
            </div>
            {touched['lastName'] && errors['lastName'] && (
              <div className="error">
                <p>{errors['lastName']}</p>
              </div>
            )}

            <div className="input">
              <div className="icon-sm">
                <MdEmail fontSize={24} />
              </div>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
              />
            </div>
            {touched['email'] && errors['email'] && (
              <div className="error">
                <p>{errors['email']}</p>
              </div>
            )}
            <div className="input">
              <div className="icon-sm">
                <MdLock fontSize={24} />
              </div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
              />
            </div>
            {touched['password'] && errors['password'] && (
              <div className="error">
                <p>{errors['password']}</p>
              </div>
            )}
          </div>
          <div className="form-event">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button"
              style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              REGISTER
            </button>

            <p className="sign-in">
              Already have an account? <span onClick={setSignIn}>Sign in here!</span>
            </p>
          </div>
          <style jsx>{styles}</style>
        </form>
      )}
    </Formik>
  )
}
