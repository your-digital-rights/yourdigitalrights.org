import { FormattedMessage, injectIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import Fab from '@mui/material/Fab';
import mailtoLink from "mailto-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import tracking from "../../utils/tracking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faFirefox } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import ExtensionToolTipImage from "../../../public/images/extensionHelperImages/extensionToolTipImage.png";
import FBIcon from "../../../public/images/sh/fb.svg";
import LinkedInIcon from "../../../public/images/sh/lin.svg";
import TwitterIcon from "../../../public/images/sh/tw.svg";
import EmailIcon from "../../../public/images/sh/mail.svg";
import * as S from "./styles";

const Social = ({
  intl,
  sourcePage = "thankyou" /* default value */,
  style,
}) => {
  const RootComponent = (sourcePage === "thankyou") ? S.OffsetThankYou : S.Offset;

  const emailSubject = intl.formatMessage({
    id: "social.emailSubject",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it | Your Digital Rights",
  });
  const emailBody = intl.formatMessage({
    id: "social.emailBody",
    defaultMessage:
      "Check out YourDigitalRights.org, a free service which makes it easy to find out what personal data thousands of organizations have on you, and get them to delete it.",
  });
  const twitterTitle = intl.formatMessage({
    id: "social.twitterTitle",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org.",
  });
  const facebookQuote = intl.formatMessage({
    id: "social.facebookQuote",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org.",
  });
  const emailLink = mailtoLink({ subject: emailSubject, body: emailBody });

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(emailLink);
  };

  const shareButtonProps = {
    className: "ss-btn",
  };

  const trackShare = (network) => {
    tracking.trackSocialShare(network, sourcePage);
  };

  const trackWebExtension = (brower) => {
    tracking.trackWebExtension(brower, sourcePage);
  };

  return (
    <RootComponent className="ss" style={style}>
      {sourcePage === "homepage" && (
        <S.ExtensionHelperPlaceHolder id="Extension">
          <S.ExtensionHelperContainer>
            <S.ExtensionHelpImgContainer>
              <S.ExtensionHelpImg
                src={ExtensionToolTipImage}
                alt="Extension helper"
              />
            </S.ExtensionHelpImgContainer>
            <S.ExtensionHelpTextContainer>
              <S.ExtensionHelpHeading
                component="h2"
                variant="h3"
                color="inherit"
              >
                <FormattedMessage id="social.extensionHeadline" defaultMessage="Opt out directly from your browser" />
              </S.ExtensionHelpHeading>
              <S.ExtensionHelpParagraph
                component="p"
                color="inherit"
              >
                <FormattedMessage id="social.extensionText" defaultMessage="Do you want better control over who has access to your personal data? Our browser extension allows you to opt out of the websites you visit with a click of a button." />
              </S.ExtensionHelpParagraph>
              <S.ExtensionHelpButtonContainer>
                <S.ExtensionDownloadButton
                  variant="extended"
                  onClick={() => trackWebExtension("chrome-extension")}
                  aria-label={intl.formatMessage({id: "social.chromeTitle", defaultMessage: "Google Chrome Extension"})}
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/opt-out-one-click-gdpr-er/dedldhojjkgbejnmmfpmbnbihmmpfbpd?hl=en-GB"
                >
                  <S.ExtensionDownloadButtonIcon>
                    <FontAwesomeIcon
                      color="#005ea5"
                      icon={faChrome}
                    />
                  </S.ExtensionDownloadButtonIcon>
                  <FormattedMessage id="social.chromeCTA" defaultMessage="Download it for Chrome" />
                </S.ExtensionDownloadButton>
                <S.ExtensionDownloadButton
                  variant="extended"
                  onClick={trackWebExtension.bind(null, 'firefox-extension')}
                  aria-label={intl.formatMessage({id: "social.frefoxTitle", defaultMessage: "FireFox Extention"})}
                  target="_blank"
                  href="https://addons.mozilla.org/en-GB/android/addon/opt-out/"
                >
                  <S.ExtensionDownloadButtonIconFireFox>
                    <FontAwesomeIcon
                      color="#005ea5"
                      icon={faFirefox}
                    />
                  </S.ExtensionDownloadButtonIconFireFox>
                  <FormattedMessage id="social.firefoxCTA" defaultMessage="Download it for Firefox" />
                </S.ExtensionDownloadButton>
              </S.ExtensionHelpButtonContainer>
            </S.ExtensionHelpTextContainer>
          </S.ExtensionHelperContainer>
        </S.ExtensionHelperPlaceHolder>
      )}

      <S.ShareHeading
        variant="h6"
        gutterBottom={true}
      >
        <FormattedMessage
          id="social.shareHeading"
          defaultMessage="If you find this service useful, please spread the word"
        />
      </S.ShareHeading>
      <S.ShareButton>
        <FacebookShareButton
          additionalProps={shareButtonProps}
          beforeOnClick={trackShare.bind(null, "facebook")}
          url={
            "https://yourdigitalrights.org/?pk_campaign=siteshare&pk_kwd=facebook&pk_source=" +
            sourcePage
          }
          className="ss-btn SocialMediaShareButton--facebook"
          quote={facebookQuote}
        >
          <Image src={FBIcon} />
        </FacebookShareButton>
      </S.ShareButton>
      <S.ShareButton>
        <LinkedinShareButton
          additionalProps={shareButtonProps}
          beforeOnClick={trackShare.bind(null, "linkedin")}
          url={
            "https://yourdigitalrights.org/?pk_campaign=siteshare&pk_kwd=linkedin&pk_source=" +
            sourcePage
          }
          className="ss-btn SocialMediaShareButton--linkedin"
        >
          <Image src={LinkedInIcon} />
        </LinkedinShareButton>
      </S.ShareButton>
      <S.ShareButton>
        <TwitterShareButton
          borderRadius={15}
          additionalProps={shareButtonProps}
          beforeOnClick={trackShare.bind(null, "twitter")}
          url={
            "https://yourdigitalrights.org/?pk_campaign=siteshare&pk_kwd=twitter&pk_source=" +
            sourcePage
          }
          title={twitterTitle}
          hashtags={[
            "GDPR",
            "CCPA",
            "yourdigitalrights",
            "righttobeforgotten",
            "optout",
            "ownyourdata",
          ]}
          className="ss-btn SocialMediaShareButton--twitter"
        >
          <Image src={TwitterIcon} />
        </TwitterShareButton>
      </S.ShareButton>
      <a
        href={emailLink}
        onClick={handleEmailClick}
        className="ss-btn SocialMediaShareButton--email"
      >
        <Image src={EmailIcon} />
      </a>
    </RootComponent>
  );
};

export default injectIntl(Social);
