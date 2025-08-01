import { Title } from "./text";
import Typography from "@mui/material/Typography";
import * as S from "./styles";
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import Image from "next/legacy/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const items = [
  { name: "Fast Company", image: "/images/press/fastcompany.png", url: "https://www.fastcompany.com/90310803/here-are-the-data-brokers-quietly-buying-and-selling-your-personal-information" },
  { name: "Business Insider", image: "/images/press/business-insider.png", url: "https://www.businessinsider.com/how-to-delete-yourself-from-the-internet?IR=T" },
  { name: "Wired", image: "/images/press/wired.png", url: "https://www.wired.com/story/delete-yourself-from-internet/" },
  //{ name: "Karspesky", image: "/images/press/kaspersky_b.png", url: "https://www.kaspersky.com/resource-center/preemptive-safety/how-to-stop-data-brokers-from-selling-your-personal-information" },
  { name: "How To Geek", image: "/images/press/howtogeek.png", url: "https://www.howtogeek.com/570124/how-to-delete-your-personal-information-from-people-finder-sites/" },
  //{ name: "MSN", image: "/images/press/msn.png", url: "https://www.msn.com/en-us/news/technology/how-to-delete-yourself-from-the-internet-with-5-different-methods/ar-BB1aZJ4A?li=BBnb7Kz" },
  { name: "The Sun", image: "/images/press/the-sun.png", url: "https://www.the-sun.com/tech/7794302/billions-facebook-photos-scraped-ai-police-lineup/" },
  { name: "Vanity Fair", image: "/images/press/vanity-fair.png", url: "https://www.vanityfair.fr/article/6-facons-de-disparaitre-internet-pour-toujours" },
  //{ name: "Bed Credit", image: "/images/press/bc-logo-2x.png", url: "https://www.badcredit.org/news/yourdigitalrights-offers-digital-privacy-resources/" },
  { name: "Norton", image: "/images/press/norton-logo.png", url: "https://us.norton.com/blog/how-to/how-to-remove-personal-information-from-internet" },
  
];


const PressCoverage = () => {

  const theme = useTheme();
  const slicedItems = useMediaQuery(theme.breakpoints.up('md')) ? items : items.slice(0,4);
  return (
    <S.Container>
        <Typography
          variant={"h5"}
          gutterBottom={true}
          component={"h2"}
        >
        {Title}
      </Typography>
      <S.Inner>
        <S.GridList>
          {slicedItems.map((item) => (
            <S.GridListItem
              key={item.url}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.PressLogo
                  src={item.image}
                  alt={item.name}
                />
              </a>
            </S.GridListItem>
          ))}
        </S.GridList>
      </S.Inner>
    </S.Container>
  );
};
export default PressCoverage;
