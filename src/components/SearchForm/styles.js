import { visuallyHidden } from '../../styles/layout';

export default theme => ({
  searchInputWrapper: {
    padding: '6px 16px',
  },
  label: visuallyHidden,
  form: {
    position: 'relative',
    height: '44px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
      margin: '80px auto 0',
    },
  },
  results: {
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  searchIcon: {
    marginRight: '16px',
  },
  list: {
    padding: 0,
  },
});
