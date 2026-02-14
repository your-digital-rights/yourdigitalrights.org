import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import tracking from "../../utils/tracking";
import Link from 'next/link';
import * as S from "./styles";


const WishButtonText = (
  <FormattedMessage id="footer.wishList" defaultMessage="make a wish on our roadmap" />
);

const DisclaimerText = (
  <FormattedMessage
    id="footer.disclaimer"
    defaultMessage="<span>Disclaimer:</span> This service is provided as is, without warranty of any kind. Use of this service is entirely at your own risk. We cannot take responsibility for any direct or indirect damages resulting from the use of this service. The information provided by this service along with the content on our website related to legal matters is provided for your private use and does not constitute legal advice. If you need legal advice for a specific problem, you should consult with a licensed attorney."
    values={{
      span: txt => (
        <span key="footer-disclaimer-label" style={{ fontWeight: "bold", color: "black" }}>
          {txt}
        </span>
      )
    }}
  />
);

const Footer = ({ showRoadmap=true }) => {
  const trackWishlist = () => {
    tracking.trackWishlist();
  };

  return (
    <S.Root>
      {showRoadmap && (
        <S.WishList>
          <S.WishButton
            onClick={() => trackWishlist()}
            variant="contained"
            href="https://wishlist.yourdigitalrights.org/"
            color="secondary"
            type="submit"
          >
            {WishButtonText}
          </S.WishButton>
        </S.WishList>
      )}
      <S.Inner>
        <S.InnerLeft>
          <Typography component="p" variant="subtitle2">
            <FormattedMessage
              id="footer.madeBy"
              defaultMessage="<a>Made by Conscious Digital</a>"
              values={{
                a: txt=> (
                  <S.DisclaimerLink key="footer-made-by-link" target="_blank" href="https://consciousdigital.org">
                    {txt}
                  </S.DisclaimerLink>
                )
              }}
            />
          </Typography>   
          <Typography component="p" variant="subtitle2">
            <FormattedMessage
              id="footer.stats"
              defaultMessage="<a>Statistics</a>"
              values={{
                a: txt=> (
                  <Link key="footer-stats-link" href="/stats">
                    <S.DisclaimerLink as="span">{txt}</S.DisclaimerLink>
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
                a: txt=> (
                  <Link key="footer-privacy-link" href="/privacy">
                    <S.DisclaimerLink as="span">{txt}</S.DisclaimerLink>
                  </Link>
                )
              }}
            />
          </Typography>

          <Typography component="p" variant="subtitle2">
            <S.DisclaimerLink target="_blank" rel="nofollow" href="https://www.uplead.com">Logos by UpLead</S.DisclaimerLink>
          </Typography>
          {/* <a
            href="https://vercel.com?utm_source=Conscious%20Digital&utm_campaign=oss"
          >
            <S.VercelLogo>
              <Image
                src={Vercel}
                alt="Powered by Vercel"
                height={29}
                width={116}
              />
            </S.VercelLogo>
          </a> */}
        </S.InnerLeft>
        <S.InnerRight>
          <Typography gutterBottom={true} color="textSecondary" variant="subtitle2">
            {DisclaimerText}
          </Typography>
        </S.InnerRight>
      </S.Inner>
    </S.Root>
  );
};

export default Footer;
