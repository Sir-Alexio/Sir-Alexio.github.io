import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import {useNavigate} from 'react-router-dom';
import {ValidationContainer} from '../../Services/ValidationService';

interface IFormValues {
  email: string;
  password: string;
}

const Basic: React.FC = () => {
  const { emailError, passError, onEmailChange, onPasswordChange, inputLogin,inputPassword, reset } = ValidationContainer();  
  const navigate = useNavigate();
  return (<div>
    <h1>Formik</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values: IFormValues) => {
        const errors: Partial<IFormValues> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address.';
        }

        if (values.password.length<=6) {
          errors.password = 'Less than 6 characters.'
        }
        return errors;
      }}
      onSubmit={(values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
        const fakeEvent: React.ChangeEvent<HTMLInputElement> = {
          target: {
            value: values.email,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        onEmailChange(fakeEvent);
        fakeEvent.target.value = values.password;
        onPasswordChange(fakeEvent);
        navigate('/login-redux/success');
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <h3>email: {values.email}</h3>
          <h3>password: {values.password}</h3>
        </form>
      )}
    </Formik>
  </div>);
}
  

export default Basic;
