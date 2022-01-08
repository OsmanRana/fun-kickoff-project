import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import InputLabel from '@mui/material/InputLabel';
import AuthFooter from '../../../components/AuthFooter/AuthFooter';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box width={1}>
            <InputLabel className={classes.inputLabel}>
              <Typography className={classes.label} variant="caption" display="inline" sx={{ fontWeight: 'bold' }}>
                EMAIL ADDRESS
              </Typography>
            </InputLabel>
            <TextField
              id="username"
              fullWidth
              margin="dense"
              variant="outlined"
              placeholder="Your email"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="username"
              autoComplete="username"
              autoFocus
              helperText={touched.username ? errors.username : ''}
              error={touched.username && Boolean(errors.username)}
              value={values.username}
              onChange={handleChange}
            />
            <InputLabel className={classes.inputLabel}>
              <Typography className={classes.label} variant="caption" display="inline" sx={{ fontWeight: 'bold' }}>
                NAME
              </Typography>
            </InputLabel>
            <TextField
              id="email"
              fullWidth
              margin="dense"
              variant="outlined"
              placeholder="Your name"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="email"
              autoComplete="email"
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
            />
            <InputLabel className={classes.inputLabel}>
              <Typography className={classes.label} variant="caption" display="inline" sx={{ fontWeight: 'bold' }}>
                PASSWORD
              </Typography>
            </InputLabel>
            <TextField
              id="password"
              fullWidth
              margin="dense"
              variant="outlined"
              placeholder="Creat a password"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              type="password"
              autoComplete="current-password"
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
            />
          </Box>

          <Box textAlign="center" marginTop={5} className={classes.submit}>
            <Button type="submit" size="large" style={{ color: 'white' }}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Sign Up'}
            </Button>
          </Box>
          <Box>
            <AuthFooter linkTo="/login" asideText="Already a member?" btnText="Login" />
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
