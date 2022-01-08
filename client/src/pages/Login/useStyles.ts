import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    maxHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
  },
}));

export default useStyles;
