import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik, FormikConfig } from 'formik';
import { Box, TextField } from '@mui/material';
import * as Yup from 'yup';

import AuthForm from '../../components/auth-form';
import { selectAuthLoading } from '../../store/selectors';
import { createLoginActionThunk } from '../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .min(6, 'Min 6 symbols')
    .max(32, 'Max 32 symbols')
    .email('Enter a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Min 8 symbols')
    .max(32, 'Max 32 symbols')
    .matches(/[A-ZĄČĘĖĮŠŲŪŽ]/, 'Upper case letter required')
    .matches(/[a-ząčęėįšųūž]/, 'Lower case letter required')
    .matches(/\d/, 'Number is required'),
});

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const redirect = searchParams.get('redirect') ?? '/';
    const loginActionThunk = createLoginActionThunk({ email, password }, redirect);
    dispatch(loginActionThunk);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <Box sx={{ background: '#e5f3fb', pb: 20 }}>
      <AuthForm
        formTitle="Login"
        submitText="Login"
        btnActive={dirty && isValid}
        onSubmit={handleSubmit}
      >
        <TextField
          name="email"
          type="email"
          label="Email"
          fullWidth
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          disabled={loading}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          fullWidth
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          disabled={loading}
        />
      </AuthForm>
    </Box>
  );
};

export default LoginPage;
