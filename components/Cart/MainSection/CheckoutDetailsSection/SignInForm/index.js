import styles from './styles'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { consoleLog } from 'utils/function'

const SignInForm = () => {
  const userSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  })
  return (
    <div>
      <Formik
        validationSchema={userSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          consoleLog(values)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="woocommerce-form woocommerce-form-login login" onSubmit={handleSubmit}>
            <p>
              If you have purchased from us before, please login. If you are a new customer, please continue to enter
              your payment information.
            </p>
            <p className="form-row form-row-first">
              <label htmlFor="username">
                Username or email
                <span className="required">{' *'}</span>
              </label>
              <input
                name="username"
                type="text"
                autoComplete="username"
                className="input-text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </p>
            <p className="form-row form-row-last">
              <label htmlFor="password">
                Password
                <span className="required">{' *'}</span>
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                className="input-text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            <div className="clear"></div>
            <p className="form-row">
              <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                <input
                  className="woocommerce-form__input woocommerce-form__input-checkbox"
                  name="rememberme"
                  type="checkbox"
                  id="rememberme"
                  value="forever"
                />
                <span>Remember password</span>
              </label>
              <button
                type="submit"
                className="woocommerce-button button woocommerce-form-login__submit login"
                value="Login"
                disabled={isSubmitting}
              >
                Login
              </button>
            </p>
            <div className="lost_password">
              <Link href="#">
                <a>Forgot password?</a>
              </Link>
            </div>
            <div className="clear"></div>
          </form>
        )}
      </Formik>
      <style jsx>{styles}</style>
    </div>
  )
}

export default SignInForm
