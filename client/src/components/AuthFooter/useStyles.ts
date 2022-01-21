import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  authFooter: {
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '3rem',
  },
  accAside: {
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '.25rem',
  },
  linkText: {
    color: '#f14140',
  },
}));

export default useStyles;
