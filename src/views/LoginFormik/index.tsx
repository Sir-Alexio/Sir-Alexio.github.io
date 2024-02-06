import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLoginFormState } from "../../services/ValidationService";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import "./styles.css";

interface IFormValues {
  email: string;
  password: string;
}

const Basic: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { onEmailChange, onPasswordChange } = useLoginFormState();
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };
  return (
    <div className="form-container">
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values: IFormValues) => {
          onEmailChange(values.email);
          onPasswordChange(values.password);
          navigate("/login-formik/success");
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

export default Basic;
