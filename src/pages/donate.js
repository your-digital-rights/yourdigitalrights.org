import { useIntl, FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { styled } from "@mui/material/styles"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SecurityIcon from "@mui/icons-material/Security"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import GroupIcon from "@mui/icons-material/Group"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { NextSeo } from 'next-seo';
import { generateCanonical, generateLangLinks } from "../utils/langUtils";
import { useRouter } from "next/router";

const HeroSection = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#ffffff",
  padding: theme.spacing(12, 2),
  textAlign: "center",
  "& *": {
    color: "#ffffff !important",
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
}))

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  border: "2px solid",
  borderColor: theme.palette.divider,
  transition: "border-color 0.3s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}))

const FeatureIconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}))

const DonationCard = styled(Card)(({ theme }) => ({
  border: "2px solid",
  borderColor: theme.palette.divider,
  transition: "border-color 0.3s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}))

const ClosingSection = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#ffffff",
  padding: theme.spacing(12, 2),
  textAlign: "center",
  "& *": {
    color: "#ffffff !important",
  },
}))

export default function DonatePage() {
  const intl = useIntl();
  const router = useRouter();
  const Description = intl.formatMessage({id: "donate.description", defaultMessage: "Help us protect online privacy for everyone. Your donation helps ensure our long-term financial stability and independence."});
  const BaseURL = "/donate";

  return (
    <>
      <NextSeo
        title={intl.formatMessage({id: "donate.title", defaultMessage: "Support Our Mission"})}
        canonical={generateCanonical(BaseURL, router.locale)}
        description={Description}
        openGraph={{
          description: Description,
        }}
        languageAlternates={generateLangLinks(BaseURL)}
      />
      <Nav/>

      <Box>
        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="md">
            <IconWrapper>
              <FavoriteIcon sx={{ fontSize: 32, color: "#ffffff" }} />
            </IconWrapper>
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              <FormattedMessage id="donate.hero.title" defaultMessage="Support Our Mission" />
            </Typography>
            <Typography variant="h4" sx={{ opacity: 0.9, mb: 4, fontSize: '1.5rem' }}>
              <FormattedMessage id="donate.hero.subtitle" defaultMessage="Help us protect online privacy for everyone. Your donation helps ensure our long-term financial stability and independence." />
            </Typography>
          </Container>
        </HeroSection>

        {/* Intro Section */}
        <Box sx={{ py: 10, px: 2, bgcolor: "action.hover" }}>
          <Container maxWidth="md">
            <Typography variant="body1" paragraph sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              <FormattedMessage
                id="donate.intro.paragraph1"
                defaultMessage="YourDigitalRights.org is a free, open-source service that helps people reclaim their privacy online. It is maintained by Conscious Digital, a nonprofit organization building people-centered digital initiatives to advance digital human rights."
              />
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              <FormattedMessage
                id="donate.intro.paragraph2"
                defaultMessage="We do not show ads, sell data, or rely on invasive tech. Instead, we rely on the support of a global community. Your donation directly powers the tools that let people everywhere request their data, delete their profiles, and stand up to surveillance."
              />
            </Typography>
          </Container>
        </Box>

        {/* Why Donate Section */}
        <Box sx={{ py: 10, px: 2 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" component="h2" align="center" gutterBottom fontWeight="bold" sx={{ mb: 8 }}>
              <FormattedMessage id="donate.whyDonate.title" defaultMessage="Why Donate?" />
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4
            }}>
              <FeatureCard elevation={0} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: "flex", gap: 2, height: '100%' }}>
                    <FeatureIconBox>
                      <SecurityIcon sx={{ color: "white" }} />
                    </FeatureIconBox>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.whyDonate.privacy.title" defaultMessage="Privacy-first, always" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage id="donate.whyDonate.privacy.description" defaultMessage="No ads. No tracking. No profit motives." />
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </FeatureCard>

              <FeatureCard elevation={0} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: "flex", gap: 2, height: '100%' }}>
                    <FeatureIconBox>
                      <CheckCircleIcon sx={{ color: "white" }} />
                    </FeatureIconBox>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.whyDonate.transparent.title" defaultMessage="Open and transparent" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage id="donate.whyDonate.transparent.description" defaultMessage="All our code and data are public. You can review our work at any time." />
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </FeatureCard>

              <FeatureCard elevation={0} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: "flex", gap: 2, height: '100%' }}>
                    <FeatureIconBox>
                      <TrendingUpIcon sx={{ color: "white" }} />
                    </FeatureIconBox>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.whyDonate.impact.title" defaultMessage="Proven impact" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage
                          id="donate.whyDonate.impact.description"
                          defaultMessage="With your help, we've supported 400,000+ privacy requests, 1,800+ regulatory complaints, and reached <strong>4+ billion individuals</strong> across supported jurisdictions."
                          values={{
                            strong: chunks => <strong>{chunks}</strong>
                          }}
                        />
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </FeatureCard>

              <FeatureCard elevation={0} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: "flex", gap: 2, height: '100%' }}>
                    <FeatureIconBox>
                      <GroupIcon sx={{ color: "white" }} />
                    </FeatureIconBox>
                    <Box>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.whyDonate.change.title" defaultMessage="Real-world change" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage id="donate.whyDonate.change.description" defaultMessage="Every donation helps hold data brokers, tech giants and other organizations accountable." />
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </FeatureCard>
            </Box>
          </Container>
        </Box>

        {/* Ways to Give Section */}
        <Box sx={{ py: 10, px: 2, bgcolor: "action.hover" }}>
          <Container maxWidth="md">
            <Typography variant="h2" component="h2" align="center" gutterBottom fontWeight="bold">
              <FormattedMessage id="donate.waysToGive.title" defaultMessage="Ways to Give" />
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8 }}>
              <FormattedMessage id="donate.waysToGive.subtitle" defaultMessage="Choose a method that works for you:" />
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <DonationCard elevation={0}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 2,
                      alignItems: { md: "center" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.waysToGive.openCollective.title" defaultMessage="Open Collective" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage id="donate.waysToGive.openCollective.description" defaultMessage="Supports one-time or recurring donations. Ideal for individuals, foundations, or companies. Funds go to Conscious Digital, our parent nonprofit." />
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<OpenInNewIcon />}
                      href="https://opencollective.com/consciousdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <FormattedMessage id="donate.waysToGive.openCollective.button" defaultMessage="Donate" />
                    </Button>
                  </Box>
                </CardContent>
              </DonationCard>

              <DonationCard elevation={0}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 2,
                      alignItems: { md: "center" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.waysToGive.github.title" defaultMessage="GitHub Sponsors" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage id="donate.waysToGive.github.description" defaultMessage="Direct support for our developers and infrastructure. Easy for GitHub users." />
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<OpenInNewIcon />}
                      href="https://github.com/sponsors/your-digital-rights"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderWidth: 2,
                        "&:hover": { borderWidth: 2 },
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <FormattedMessage id="donate.waysToGive.github.button" defaultMessage="Sponsor" />
                    </Button>
                  </Box>
                </CardContent>
              </DonationCard>

              <DonationCard elevation={0}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 2,
                      alignItems: { md: "center" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom fontWeight="600">
                        <FormattedMessage id="donate.waysToGive.liberapay.title" defaultMessage="Liberapay" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <FormattedMessage id="donate.waysToGive.liberapay.description" defaultMessage="A community-driven platform for weekly or monthly giving." />
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<OpenInNewIcon />}
                      href="https://liberapay.com/YourDigitalRights.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderWidth: 2,
                        "&:hover": { borderWidth: 2 },
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <FormattedMessage id="donate.waysToGive.liberapay.button" defaultMessage="Support" />
                    </Button>
                  </Box>
                </CardContent>
              </DonationCard>
            </Box>
          </Container>
        </Box>

        {/* Institutional Support Section */}
        <Box sx={{ py: 10, px: 2 }}>
          <Container maxWidth="md">
            <Typography variant="h2" component="h2" align="center" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
              <FormattedMessage id="donate.institutional.title" defaultMessage="Institutional Support" />
            </Typography>
            <Card elevation={0} sx={{ border: "2px solid", borderColor: "divider", bgcolor: "action.hover" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="donate.institutional.paragraph1"
                    defaultMessage="<a>Conscious Digital</a> is a registered nonprofit organization in Estonia (Reg. 80600079). We welcome support from foundations, companies, and philanthropic organizations."
                    values={{
                      a: chunks => (
                        <a target="_blank" rel="noopener noreferrer" href="https://consciousdigital.org/">
                          {chunks}
                        </a>
                      )
                    }}
                  />
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="donate.institutional.paragraph2"
                    defaultMessage="Please <a>contact us</a> to discuss grants, matching donations, or custom sponsorships."
                    values={{
                      a: chunks => (
                        <a target="_blank" rel="noopener noreferrer" href="mailto:info@consciousdigital.org">
                          {chunks}
                        </a>
                      )
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>

        {/* Closing CTA Section */}
        <ClosingSection>
          <Container maxWidth="md">
            <Typography variant="h2" component="h2" gutterBottom fontWeight="bold">
              <FormattedMessage id="donate.closing.title" defaultMessage="Every Bit Helps" />
            </Typography>
            <Typography variant="h4" sx={{ mb: 4, opacity: 0.9, fontSize: '1.5rem', fontWeight: 400 }}>
              <FormattedMessage id="donate.closing.subtitle" defaultMessage="Your support keeps YourDigitalRights.org free, open, and independent. Whether it's €5 or €500, every donation makes a difference." />
            </Typography>
            <Typography variant="h3" fontWeight="600">
              <FormattedMessage id="donate.closing.thanks" defaultMessage="Thank you for standing up for privacy and empowering people everywhere." />
            </Typography>
          </Container>
        </ClosingSection>
      </Box>

      <Footer/>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const { getLocaleMessages } = await import('../utils/localeMessages');
  return {
    props: {
      messages: await getLocaleMessages(locale),
    },
  };
}
