import { useIntl, FormattedMessage } from "react-intl"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { styled } from "@mui/material/styles"
import Social from "../components/Social"
import Donations from "../components/Donations"
import { NextSeo } from "next-seo"
import { generateCanonical, generateLangLinks } from "../utils/langUtils"
import { withRouter } from "next/router"
import SecurityIcon from "@mui/icons-material/Security"
import PublicIcon from "@mui/icons-material/Public"
import CodeIcon from "@mui/icons-material/Code"
import LanguageIcon from "@mui/icons-material/Language"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import SendIcon from "@mui/icons-material/Send"
import GavelIcon from "@mui/icons-material/Gavel"
import BusinessIcon from "@mui/icons-material/Business"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import PersonIcon from "@mui/icons-material/Person"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

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

const SectionCard = styled(Card)(({ theme }) => ({
  border: "2px solid",
  borderColor: theme.palette.divider,
  transition: "border-color 0.3s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}))

const SectionIconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginBottom: theme.spacing(2),
}))

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  border: "2px solid",
  borderColor: theme.palette.divider,
  transition: "all 0.3s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
  },
}))

const FeatureIconBox = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}))

const StatCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
  border: "2px solid",
  borderColor: theme.palette.divider,
  borderRadius: theme.spacing(1),
  transition: "all 0.3s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
  },
}))

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}))

const FounderCard = styled(Card)(({ theme }) => ({
  height: "100%",
  border: "2px solid",
  borderColor: theme.palette.divider,
  transition: "all 0.3s",
  textAlign: "center",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
  },
}))

const ContributorCard = styled(Card)(({ theme }) => ({
  height: "100%",
  border: "2px solid",
  borderColor: theme.palette.divider,
  transition: "all 0.3s",
  textAlign: "center",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
  },
}))

const About = ({ router }) => {
  const intl = useIntl()
  const Description = intl.formatMessage({ id: "about.newDescription", defaultMessage: "YourDigitalRights.org is a free, open-source service that helps people take back control of their online privacy." })
  const BaseURL = "/about"

  return (
    <div>
      <NextSeo
        title={intl.formatMessage({ id: "about.title", defaultMessage: "About Us" })}
        canonical={generateCanonical(BaseURL, router.locale)}
        description={Description}
        openGraph={{
          description: Description,
        }}
        languageAlternates={generateLangLinks(BaseURL)}
      />
      <Nav />

      <HeroSection>
        <Container maxWidth="md">
          <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
            <img src="/images/mascot.svg" alt="YourDigitalRights.org" style={{ height: "100px" }} />
          </Box>
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            <FormattedMessage id="about.heroTitle" defaultMessage="Taking Back Control of Your Personal Data" />
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, fontSize: "1.25rem", lineHeight: 1.6 }}>
            <FormattedMessage
              id="about.heroSubtitle"
              defaultMessage="YourDigitalRights.org is a free, open-source service that helps people take back control of their online privacy. We make it simple to exercise your legal rights over your personal data — to ask companies to delete it, access it, or stop selling it — under privacy laws like the GDPR, CCPA, and dozens more around the world."
            />
          </Typography>
        </Container>
      </HeroSection>

      <Box sx={{ py: 10, px: 2, bgcolor: "action.hover" }}>
        <Container maxWidth="md">
          <Typography variant="body1" paragraph sx={{ fontSize: "1.125rem", lineHeight: 1.7, mb: 3 }}>
            <FormattedMessage
              id="about.introText"
              defaultMessage="With just a few clicks, you can find thousands of companies that hold your data and send them a legally-binding request. Our built-in follow-up system keeps track of your requests and helps you escalate cases to the right regulator when organizations fail to comply."
            />
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 4 }}>
            <FeatureIconBox>
              <PublicIcon sx={{ color: "white", fontSize: 32 }} />
            </FeatureIconBox>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
                <FormattedMessage id="about.whyWeExist" defaultMessage="Why We Exist" />
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" paragraph sx={{ fontSize: "1.125rem", lineHeight: 1.7, mb: 3 }}>
            <FormattedMessage
              id="about.whyWeExistText1"
              defaultMessage="The internet was built for people — but today, most of it is powered by the trade in our personal information. We believe everyone deserves digital privacy by default, not just by law. YourDigitalRights.org was created to make those rights practical, simple, and enforceable."
            />
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            <FormattedMessage
              id="about.whyWeExistText2"
              defaultMessage="We are part of {cd}, a nonprofit organization advancing digital human rights worldwide. Together, we build open, people-centered tools that empower individuals — not corporations or governments — to be first-class citizens in the digital world."
              values={{
                cd: (
                  <a target="_blank" href="https://consciousdigital.org/" rel="noreferrer">
                    <FormattedMessage id="about.consciousDigitalLink" defaultMessage="Conscious Digital" />
                  </a>
                ),
              }}
            />
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 10, px: 2, bgcolor: "action.hover" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom fontWeight="bold" sx={{ mb: 8 }}>
            <FormattedMessage id="about.ourApproach" defaultMessage="Our Approach" />
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            <FeatureCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <FeatureIconBox>
                    <SecurityIcon sx={{ color: "white" }} />
                  </FeatureIconBox>
                  <Box>
                    <Typography variant="h5" gutterBottom fontWeight="600">
                      <FormattedMessage id="about.privacyFirstTitle" defaultMessage="Privacy-First by Design" />
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.privacyFirstText"
                    defaultMessage="We collect no personal data by default, run no ads, and never sell user information."
                  />
                </Typography>
              </CardContent>
            </FeatureCard>

            <FeatureCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <FeatureIconBox>
                    <CodeIcon sx={{ color: "white" }} />
                  </FeatureIconBox>
                  <Box>
                    <Typography variant="h5" gutterBottom fontWeight="600">
                      <FormattedMessage id="about.openSourceTitle" defaultMessage="Open Source & Transparent" />
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.openSourceText"
                    defaultMessage="All code, data, and methods are public and free to reuse."
                  />
                </Typography>
              </CardContent>
            </FeatureCard>

            <FeatureCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <FeatureIconBox>
                    <LanguageIcon sx={{ color: "white" }} />
                  </FeatureIconBox>
                  <Box>
                    <Typography variant="h5" gutterBottom fontWeight="600">
                      <FormattedMessage id="about.globalTitle" defaultMessage="Global & Inclusive" />
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.globalText"
                    defaultMessage="We support 25+ data protection laws, covering more than four billion people, and our platform is available in multiple languages thanks to a growing volunteer community."
                  />
                </Typography>
              </CardContent>
            </FeatureCard>

            <FeatureCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <FeatureIconBox>
                    <SupportAgentIcon sx={{ color: "white" }} />
                  </FeatureIconBox>
                  <Box>
                    <Typography variant="h5" gutterBottom fontWeight="600">
                      <FormattedMessage id="about.supportTitle" defaultMessage="End-to-End Support" />
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.supportText"
                    defaultMessage="From sending your first request to filing a complaint with a regulator, our tools help you every step of the way."
                  />
                </Typography>
              </CardContent>
            </FeatureCard>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 6, justifyContent: "center" }}>
            <FeatureIconBox>
              <PersonIcon sx={{ color: "white", fontSize: 32 }} />
            </FeatureIconBox>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
                <FormattedMessage id="about.foundersTitle" defaultMessage="Our Founders" />
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: "auto" }}>
            <FormattedMessage
              id="about.foundersSubtitle"
              defaultMessage="YourDigitalRights.org was founded by two passionate advocates for digital rights and human-centered design."
            />
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            <FounderCard elevation={0}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                  <img
                    src="/images/yoav.png"
                    alt="Yoav Aviram"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover"
                    }}
                  />
                </Box>
                <Typography variant="h5" gutterBottom fontWeight="600">
                  <FormattedMessage id="about.founder1Name" defaultMessage="Yoav Aviram" />
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.founder1Role"
                    defaultMessage="Human Rights Activist, Author, Philosopher"
                  />
                </Typography>
              </CardContent>
            </FounderCard>

            <FounderCard elevation={0}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                  <img
                    src="/images/rafa.png"
                    alt="Rafa Prada"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover"
                    }}
                  />
                </Box>
                <Typography variant="h5" gutterBottom fontWeight="600">
                  <FormattedMessage id="about.founder2Name" defaultMessage="Rafa Prada" />
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.founder2Role"
                    defaultMessage="Design Consultant and Visiting Lecturer at UCL and UAL"
                  />
                </Typography>
              </CardContent>
            </FounderCard>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, px: 2, bgcolor: "action.hover" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 6, justifyContent: "center" }}>
            <FeatureIconBox>
              <CodeIcon sx={{ color: "white", fontSize: 32 }} />
            </FeatureIconBox>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
                <FormattedMessage id="about.contributors" defaultMessage="Contributors" />
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: "auto" }}>
            <FormattedMessage
              id="about.contributorsSubtitle"
              defaultMessage="We're grateful to the talented developers and engineers who have contributed their time and expertise to make YourDigitalRights.org better for everyone."
            />
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            <ContributorCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="600">
                  Hans Sprecher
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <FormattedMessage
                    id="about.contributorsBody1"
                    defaultMessage="Frontend web developer."
                  />
                </Typography>
                <a
                  href="https://www.linkedin.com/in/hanssprecher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" }}
                >
                  <LinkedInIcon sx={{ fontSize: 20, color: "primary.main" }} />
                </a>
              </CardContent>
            </ContributorCard>

            <ContributorCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="600">
                  Mark Gerrard
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <FormattedMessage
                    id="about.contributorsBody3"
                    defaultMessage="Frontend web developer."
                  />
                </Typography>
                <a
                  href="https://www.linkedin.com/in/mark-gerrard-56865012/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" }}
                >
                  <LinkedInIcon sx={{ fontSize: 20, color: "primary.main" }} />
                </a>
              </CardContent>
            </ContributorCard>

            <ContributorCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="600">
                  Ricardo Hernandez
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <FormattedMessage
                    id="about.contributorsBody5"
                    defaultMessage="Infrastructure Engineer."
                  />
                </Typography>
                <a
                  href="https://www.linkedin.com/in/richerve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" }}
                >
                  <LinkedInIcon sx={{ fontSize: 20, color: "primary.main" }} />
                </a>
              </CardContent>
            </ContributorCard>

            <ContributorCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="600">
                  Rob Chandler
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <FormattedMessage
                    id="about.createdByBody2"
                    defaultMessage="Frontend web developer, mobile app developer and creator of Skyjacker, the AR flight tracking game."
                  />
                </Typography>
                <a
                  href="https://www.linkedin.com/in/robertchandler85"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" }}
                >
                  <LinkedInIcon sx={{ fontSize: 20, color: "primary.main" }} />
                </a>
              </CardContent>
            </ContributorCard>

            <ContributorCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="600">
                  Steeve George Vadakkumchery
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <FormattedMessage
                    id="about.contributorsBody4"
                    defaultMessage="Frontend web developer."
                  />
                </Typography>
                <a
                  href="https://www.linkedin.com/in/steeve-george-vadakkumchery-2319878a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" }}
                >
                  <LinkedInIcon sx={{ fontSize: 20, color: "primary.main" }} />
                </a>
              </CardContent>
            </ContributorCard>

            <ContributorCard elevation={0}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="600">
                  Kyohei Hamaguchi
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <FormattedMessage
                    id="about.contributorsBody6"
                    defaultMessage="Full stack engineer, contributed APPI support and overall Japanese translation of the website."
                  />
                </Typography>
                <a
                  href="https://tnzk.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "none" }}
                >
                  <LinkedInIcon sx={{ fontSize: 20, color: "primary.main" }} />
                </a>
              </CardContent>
            </ContributorCard>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 6, justifyContent: "center" }}>
            <FeatureIconBox>
              <BusinessIcon sx={{ color: "white", fontSize: 32 }} />
            </FeatureIconBox>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
                <FormattedMessage id="about.sponsors" defaultMessage="Supporting Organizations" />
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 800, mx: "auto" }}>
            <FormattedMessage id="about.sponsorsTitle" defaultMessage="We'd like to thank the following organizations for supporting our open-source effort by providing a free or discounted version of their services:" />
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr" },
              gap: 3,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            <SectionCard elevation={0}>
              <CardContent sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ flexShrink: 0 }}>
                  <img
                    src="/images/sponsors/crunchbase.png"
                    alt="Crunchbase"
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.sponsorsBody2"
                    defaultMessage="{crunchbase} - for providing a snapshot of their company database which we use to enrich our list of organizations."
                    values={{
                      crunchbase: (
                        <a href="https://www.crunchbase.com" target="_blank" rel="noopener noreferrer">
                          Crunchbase
                        </a>
                      ),
                    }}
                  />
                </Typography>
              </CardContent>
            </SectionCard>

            <SectionCard elevation={0}>
              <CardContent sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ flexShrink: 0 }}>
                  <img
                    src="/images/sponsors/featureupvote.png"
                    alt="FeatureUpvote"
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.sponsorsBody3"
                    defaultMessage="{featureupvote} - for providing an effective way to gather community feedback regarding our {roadmap}."
                    values={{
                      featureupvote: (
                        <a href="https://featureupvote.com" target="_blank" rel="noopener noreferrer">
                          FeatureUpvote
                        </a>
                      ),
                      roadmap: (
                        <a href="https://wishlist.opt-out.eu" target="_blank" rel="noopener noreferrer">
                          roadmap
                        </a>
                      ),
                    }}
                  />
                </Typography>
              </CardContent>
            </SectionCard>

            <SectionCard elevation={0}>
              <CardContent sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ flexShrink: 0 }}>
                  <img
                    src="/images/sponsors/innocraft.png"
                    alt="Innocraft"
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.sponsorsBody4"
                    defaultMessage="{innocraft} - for providing a hosted version of Matomo (Piwik), the open-source and privacy-minded web analytics platform."
                    values={{
                      innocraft: (
                        <a href="https://innocraft.cloud" target="_blank" rel="noopener noreferrer">
                          Innocraft
                        </a>
                      ),
                    }}
                  />
                </Typography>
              </CardContent>
            </SectionCard>

            <SectionCard elevation={0}>
              <CardContent sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ flexShrink: 0 }}>
                  <img
                    src="/images/sponsors/smoothwebsites.png"
                    alt="Smooth Websites"
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.sponsorsBody6"
                    defaultMessage="{sws} - for helping us implement an SEO strategy."
                    values={{
                      sws: (
                        <a href="https://smoothwebsites.net/" target="_blank" rel="noopener noreferrer">
                          Smooth Websites
                        </a>
                      ),
                    }}
                  />
                </Typography>
              </CardContent>
            </SectionCard>

            <SectionCard elevation={0}>
              <CardContent sx={{ p: 3, display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ flexShrink: 0 }}>
                  <img
                    src="/images/sponsors/assisemendes.png"
                    alt="Assis e Mendes Advogados"
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  <FormattedMessage
                    id="about.sponsorsBody7"
                    defaultMessage="{ama} - for helping us understand, and support the Brazilian data privacy regulation, Lei Geral de Proteção de Dados Pessoais (LGPD)."
                    values={{
                      ama: (
                        <a href="https://assisemendes.com.br/" target="_blank" rel="noopener noreferrer">
                          Assis e Mendes Advogados
                        </a>
                      ),
                    }}
                  />
                </Typography>
              </CardContent>
            </SectionCard>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, px: 2, bgcolor: "action.hover" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 6, justifyContent: "center" }}>
            <FeatureIconBox>
              <TrendingUpIcon sx={{ color: "white", fontSize: 32 }} />
            </FeatureIconBox>
            <Box>
              <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
                <FormattedMessage id="about.impactTitle" defaultMessage="Real-World Impact" />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 3,
            }}
          >
            <StatCard>
              <SendIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <StatNumber>
                <FormattedMessage id="about.stat1Number" defaultMessage="410,000+" />
              </StatNumber>
              <Typography variant="body2" color="text.secondary">
                <FormattedMessage
                  id="about.stat1Text"
                  defaultMessage="Data requests submitted to organizations worldwide"
                />
              </Typography>
            </StatCard>

            <StatCard>
              <GavelIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <StatNumber>
                <FormattedMessage id="about.stat2Number" defaultMessage="1,800+" />
              </StatNumber>
              <Typography variant="body2" color="text.secondary">
                <FormattedMessage
                  id="about.stat2Text"
                  defaultMessage="Complaints filed with regulators"
                />
              </Typography>
            </StatCard>

            <StatCard>
              <BusinessIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <StatNumber>
                <FormattedMessage id="about.stat3Number" defaultMessage="41,000+" />
              </StatNumber>
              <Typography variant="body2" color="text.secondary">
                <FormattedMessage
                  id="about.stat3Text"
                  defaultMessage="Companies in our database"
                />
              </Typography>
            </StatCard>

            <StatCard>
              <SecurityIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <StatNumber>
                <FormattedMessage id="about.stat4Number" defaultMessage="1,000+" />
              </StatNumber>
              <Typography variant="body2" color="text.secondary">
                <FormattedMessage
                  id="about.stat4Text"
                  defaultMessage="Data brokers tracked through DataBrokersWatch.org"
                />
              </Typography>
            </StatCard>
          </Box>
        </Container>
      </Box>
      <Donations />
      <Footer />
    </div>
  )
}

export default withRouter(About)
