import React, { useCallback } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLoginFormState } from "../../Services/ValidationService";
import Typography from "@mui/material/Typography";
import { validationSchema } from "./validation";
import { initialState } from "types/constants";
import "./styles.css";

interface IFormValues {
  email: string;
  password: string;
}

const LoginFormik: React.FC = () => {
  const { onEmailChange, onPasswordChange } = useLoginFormState();
  const navigate = useNavigate();
  const onSubmitButton = useCallback(
    (values: IFormValues) => {
      onEmailChange(values.email);
      onPasswordChange(values.password);
      navigate("/login-formik/success");
    },
    [onEmailChange, onPasswordChange]
  );

  return (
    <div className="form-container">
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={onSubmitButton}
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
          <div className="form-container">
            <Typography variant="h5" className="form-title">
              FORMIK
            </Typography>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-input"
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="form-input"
                />
                {errors.password && touched.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? "#ccc" : "#1a5276",
                    color: "white",
                  }}
                  className="form-button"
                >
                  Submit
                </button>

                <div className="counter-block">
                  <div className="info">Current email: {values.email}</div>
                  <div className="info">
                    Current password: {values.password}
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
