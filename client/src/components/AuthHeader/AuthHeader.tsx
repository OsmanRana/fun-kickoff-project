import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
  variantName: any;
}

const AuthFooter = ({ linkTo, asideText, btnText, variantName }: Props): JSX.Element => {
  const classes = useStyles();
  if (variantName === 'outlined') {
    console.log('Okay');
  }
  return (
    <Box
      p={1}
      display="flex"
      justifyContent="flex-end"
      alignSelf="flex-end"
      marginRight={5}
      className={classes.authHeader}
    >
      <Box>
        <Typography className={classes.accAside} sx={{ fontWeight: 'bold' }}>
          {asideText}
        </Typography>
      </Box>
      <Box>
        {variantName === 'text' && (
          <Button
            component={Link}
            to={linkTo}
            className={classes.accBtn}
            variant={variantName}
            sx={{
              border: '1px solid #f14140',
              color: '#f14140',
              '&:hover': {
                backgroundColor: '#f14140',
                border: '1px solid #f14140',
                color: 'white',
              },
            }}
          >
            {btnText}
          </Button>
        )}
        {variantName === 'contained' && (
          <Button
            component={Link}
            to={linkTo}
            className={classes.accBtn}
            variant={variantName}
            sx={{
              backgroundColor: '#f14140',
              border: '1px solid #f14140',
              color: 'white',
              '&:hover': {
                backgroundColor: 'white',
                border: '1px solid #f14140',
                color: '#f14140',
                boxShadow: 'none',
              },
            }}
          >
            {btnText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AuthFooter;
