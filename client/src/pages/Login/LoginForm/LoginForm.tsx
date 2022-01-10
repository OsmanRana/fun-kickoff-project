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
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
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
              id="email"
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
              name="email"
              autoComplete="email"
              autoFocus
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
              placeholder="Your password"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
                endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,
              }}
              type="password"
              autoComplete="current-password"
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
            />
          </Box>
          <Box textAlign="center" marginTop={5}>
            <Button
              type="submit"
              size="large"
              className={classes.submit}
              sx={{
                backgroundColor: '#f14140',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#f14140',
                  border: '1px solid #f14140',
                },
              }}
            >
              {isSubmitting ? <CircularProgress style={{ color: '#f14140' }} /> : 'Login'}
            </Button>
          </Box>
          <Box>
            <AuthFooter linkTo="/signup" asideText="Not a member?" btnText="Sign Up" />
          </Box>
        </form>
      )}
    </Formik>
  );
}
