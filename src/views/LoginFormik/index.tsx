import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import {useNavigate} from 'react-router-dom';
import {ValidationContainer} from '../../Services/ValidationService';
import Typography from '@mui/material/Typography';

interface IFormValues {
  email: string;
  password: string;
}

const Basic: React.FC = () => {
  const {onEmailChange, onPasswordChange} = ValidationContainer();  
  const navigate = useNavigate();
  return (<div>
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
        navigate('/login-formik/success');
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
      }) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', margin: '58px' }}>
        <Typography variant="h5" style={{ color: 'white', marginBottom: '10px', textShadow: '0px 0px 1px white' }}>
        FORMIK
        </Typography>
        <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <input
    type="email"
    name="email"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}
    style={{
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '300px',
      fontSize: '16px',
      background: 'transparent',
      color: 'white',
    }}
  />
  {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>}

  <input
    type="password"
    name="password"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.password}
    style={{
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '300px',
      fontSize: '16px',
      background: 'transparent',
      color: 'white',
    }}
  />
  {errors.password && touched.password && <div style={{ color: 'red' }}>{errors.password}</div>}

  <button
    type="submit"
    disabled={isSubmitting}
    style={{
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: isSubmitting ? '#ccc' : '#1a5276',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    }}>
    Submit
  </button>

  <div className="counter-block" style={{ marginTop: '20px', fontSize: '18px', color: 'white', margin: '70px' }}>
        <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
          Current email: {values.email}
        </div>
        <div style={{ color: 'white', fontSize: '16px', margin: '10px' }}>
          Current password: {values.password}
        </div>
      </div>
</div>

        </form>
        </div>
      )}
    </Formik>
  </div>);
}
  

export default Basic;
