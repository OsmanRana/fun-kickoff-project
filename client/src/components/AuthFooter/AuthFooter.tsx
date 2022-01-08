import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} display="flex" justifyContent="flex-end" alignSelf="flex-end" className={classes.authFooter}>
      <Typography className={classes.accAside} sx={{ fontWeight: 'bold' }}>
        {asideText}
      </Typography>
      <Link to={linkTo} className={classes.linkText}>
        {btnText}
      </Link>
    </Box>
  );
};

export default AuthFooter;
