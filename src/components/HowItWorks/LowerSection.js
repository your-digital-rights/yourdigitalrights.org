import Typography from "@mui/material/Typography";
import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
  root: {
    textAlign: "center",
    margin: "32px 16px",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      margin: "32px",
    },
  },
  img: {
    display: "block",
    margin: "0 auto 16px",
    height: "70px",
  },
});

const LowerSection = ({ title, body, imgSrc, classes }) => {
  return (
    <div className={classes.root}>
      <img src={imgSrc} role="presentation" className={classes.img} />
      <Typography component="h3" variant="h5" gutterBottom={true}>
        {title}
      </Typography>
      <Typography component="p">{body}</Typography>
    </div>
  );
};

export default withStyles(styles)(LowerSection);
