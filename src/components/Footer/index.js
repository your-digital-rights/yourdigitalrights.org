import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import tracking from "../../utils/tracking";
import Link from 'next/link';
import Image from 'next/image';
import Vercel from "../../../public/images/powered-by-vercel.svg";
import { StyledLink, StyledButton, StyledVercelLogo } from './styles';

const WishButtonText = (
  <FormattedMessage id="footer.wishList" defaultMessage="make a wish on our roadmap" />
);

const PoweredBy = (
  <FormattedMessage id="footer.poweredBy" defaultMessage="Powered by Vercel" />
);

const DisclaimerText = (
  <FormattedMessage
    id="footer.disclaimer"
    defaultMessage="<span>Disclaimer:</span> This service is provided as is, without warranty of any kind. Use of this service is entirely at your own risk. We cannot take responsibility for any direct or indirect damages resulting from the use of this service. The information provided by this service along with the content on our website related to legal matters is provided for your private use and does not constitute legal advice. If you need legal advice for a specific problem, you should consult with a licensed attorney."
    values={{
      span: txt => (<span style={{ fontWeight: "bold", color: "black" }}>{txt}</span>)
    }}
  />
);

const QueryText = (
  <FormattedMessage
    id="footer.contact"
    defaultMessage="© Copyright 2019 - 2022"
  />
);

const Footer = ({ showRoadmap = true }) => {
  const theme = useTheme();
  const trackWishlist = () => {
    tracking.trackWishlist();
  };

  return (
    <>
      <Box sx={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', borderTop: '1px solid #eaeaea' }} />
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", padding: "0 30px" }}>
        {showRoadmap && (
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <StyledButton
              onClick={trackWishlist}
              variant="contained"
              href="https://wishlist.yourdigitalrights.org/"
              color="secondary"
              type="submit"
              target="_blank"
            >
              {WishButtonText}
            </StyledButton>
          </Box>
        )}

        <Box sx={{ 
          mt: 4, 
          pt: 4, 
          pb: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4
        }}>
          <Box sx={{ 
            width: { xs: "100%", md: "20%" },
            textAlign: { xs: "center", md: "left" }
          }}>
            <Typography component="p" variant="subtitle2">
              <FormattedMessage
                id="footer.madeBy"
                defaultMessage="<a>Made by Conscious Digital</a>"
                values={{
                  a: txt => (<StyledLink target="_blank" href="https://consciousdigital.org">{txt}</StyledLink>)
                }}
              />
            </Typography>
            <Typography component="p" variant="subtitle2">
              <FormattedMessage
                id="footer.stats"
                defaultMessage="<a>Statistics</a>"
                values={{
                  a: txt => (
                    <Link href="/stats" passHref legacyBehavior>
                      <a style={{ color: "#005ea5", fontWeight: 600, textDecoration: "none" }}>
                        {txt}
                      </a>
                    </Link>
                  )
                }}
              />
            </Typography>
            <Typography component="p" variant="subtitle2">
              <FormattedMessage
                id="footer.privacyPolicy"
                defaultMessage="<a>Privacy Policy</a>"
                values={{
                  a: txt => (
                    <Link href="/privacy" passHref legacyBehavior>
                      <a style={{ color: "#005ea5", fontWeight: 600, textDecoration: "none" }}>
                        {txt}
                      </a>
                    </Link>
                  )
                }}
              />
            </Typography>
            <Typography component="p" variant="subtitle2">
              <StyledLink target="_blank" rel="nofollow" href="https://www.uplead.com">
                Logos by UpLead
              </StyledLink>
            </Typography>
            <Link target="_blank" href="https://vercel.com?utm_source=Conscious%20Digital&utm_campaign=oss" passHref>
              <StyledVercelLogo 
                src={Vercel}
                alt={PoweredBy}
              />
            </Link>
          </Box>

          <Box sx={{ 
            width: { xs: "100%", md: "80%" },
            fontSize: { xs: '10px', md: '14px' },
            fontWeight: 400
          }}>
            <Typography gutterBottom color="textSecondary" variant="subtitle2">
              {DisclaimerText}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
