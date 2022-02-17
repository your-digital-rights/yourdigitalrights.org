import { Title } from "./text";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from "@material-ui/core/GridListTile";
import Image from 'next/image'

const items = [
  { name: "Fast Company", image: "/images/press/fastcompany.png", url: "https://www.fastcompany.com/90310803/here-are-the-data-brokers-quietly-buying-and-selling-your-personal-information" },
  { name: "Business Insider", image: "/images/press/business-insider.png", url: "https://www.businessinsider.com/how-to-delete-yourself-from-the-internet?IR=T" },
  { name: "Wired", image: "/images/press/wired.png", url: "https://www.wired.com/story/delete-yourself-from-internet/" },
  { name: "Karspesky", image: "/images/press/kaspersky_b.png", url: "https://www.kaspersky.com/resource-center/preemptive-safety/how-to-stop-data-brokers-from-selling-your-personal-information" },
  { name: "How To Geek", image: "/images/press/howtogeek.png", url: "https://www.howtogeek.com/570124/how-to-delete-your-personal-information-from-people-finder-sites/" },
  //{ name: "MSN", image: "/images/press/msn.png", url: "https://www.msn.com/en-us/news/technology/how-to-delete-yourself-from-the-internet-with-5-different-methods/ar-BB1aZJ4A?li=BBnb7Kz" },
  { name: "Indivigital", image: "/images/press/indivigital.png", url: "https://indivigital.com/news/new-gdpr-tool-targets-google-facebook-with-automated-right-to-be-forgotten-requests/" },
];


const PressCoverage = ({ classes }) => {
  return (
    <div className={classes.container}>
        <Typography
          variant={"h5"}
          className={classes.title}
          gutterBottom={true}
          component={"h2"}
        >
        {Title}
      </Typography>
      <div className={classes.inner}>
        <GridList className={classes.gridList} cols={items.length} cellHeight={50} spacing={50}>
          {items.map((item) => (
            <GridListTile
              button="true"
              component="a"
              target="_blank"
              href={item.url}
              key={item.url}
            >
              <Image
              className={classes.pressLogo}
              src={item.image}
              alt={item.name}
              layout='fill'
            />  
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};
export default withStyles(styles)(PressCoverage);
