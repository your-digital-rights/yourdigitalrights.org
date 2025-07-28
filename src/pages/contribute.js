import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import Social from "../components/Social";
import Typography from "@mui/material/Typography";
import { container } from "../styles/layout";
import { styled } from '@mui/material/styles';
import Donations from "../components/Donations";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { useRouter } from "next/router";


const StyledContainer = styled('div')(({ theme }) => ({
  position: "relative",
  ...container,
  paddingTop: "50px",
  marginTop: "60px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingLeft: 120,
  paddingRight: 120,
  paddingTop: 50,
  paddingBottom: 50,
  [theme.breakpoints.down('md')]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));


export default function Contribute(){
  const intl = useIntl();
  const router = useRouter();
  const Description = intl.formatMessage({id: "contribute.description", defaultMessage: "Help us improve YourDigitalRights.org."});
  const BaseURL = "/contribute";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "contribute.title", defaultMessage: "Contribute"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />   
      <Nav />
      <StyledContainer>
        <StyledPaper elevation={2} >
          <Typography component="h1" variant="h4" gutterBottom={true}>
            <FormattedMessage id="contribute.title" defaultMessage="Contribute" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contribute.subtitle"
              defaultMessage="This project is developed and maintained entirely by volunteers. If you are concerned about the loss of privacy, rampant surveillance capitalism, micro-targeting and misinformation and the addictive nature of digital services then you can help:"
            />
          </Typography>
          <br/>          
          <Typography component="h2" variant="h3" gutterBottom={true}>
            <FormattedMessage id="contribute.reportAProblemTitle" defaultMessage="Report a Problem" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage            
                id="contribute.reportAProblem" 
                defaultMessage="If you experience problems with this site you can report them in the <a1>issue tracker</a1>, or via <a2>email</a2>." 
                values={{
                a1: chunks =>  (
                    <a 
                        href='https://github.com/your-digital-rights/yourdigitalrights.org/issues'
                        target="_blank"
                    >
                        {chunks}
                    </a>
                    ),
                a2: chunks =>  (
                    <a 
                        href="mailto:info@yourdigitalrights.org?subject=I'd like to report a problem"
                        target="_blank"
                    >
                        {chunks}
                    </a>
                    ),                    
                }}
              />
          </Typography>
          <br/>
          <Typography id="translate" component="h2" variant="h3" gutterBottom={true}>
            <FormattedMessage id="contribute.translateTitle" defaultMessage="Translate the website" />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contribute.translate1"
              defaultMessage="We would like this service to be available in many languages. Should yours not be among the ones currently available, or be in need of updates or improvement, we would love your help!"             
            />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contribute.translate2"
              defaultMessage="We use the online platform <a>Crowdin</a> to easily craft the translation strings. It makes the process much easier, and doesn't require you to know anything about programming. There is a quick tutorial available <b>here</b>. Follow these steps to get started:"
              values={{
                a: chunks =>  (
                    <a 
                        href='https://translate.yourdigitalrights.org/your-digital-rights'
                        target="_blank"
                    >
                        {chunks}
                    </a>
                    ),
                b: chunks =>  (
                  <a 
                      href='https://support.crowdin.com/in-context-localization/'
                      target="_blank"
                  >
                      {chunks}
                  </a>
                  ),                    
              }}              
            />            
          </Typography>
          <ol>
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep1" 
                  defaultMessage="Make an account at Crowdin by following this <a>link</a>." 
                  values={{
                    a: chunks =>  (
                        <a 
                            href='https://translate.yourdigitalrights.org/u/signup'
                            target="_blank"
                        >
                            {chunks}
                        </a>
                        ),                   
                  }}                     
                />
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep2" 
                  defaultMessage="Follow this <a>link</a> to load the translation system." 
                  values={{
                    a: chunks =>  (
                        <a 
                            href='https://yourdigitalrights.org/az'
                            target="_blank"
                        >
                            {chunks}
                        </a>
                        ),                   
                  }}                     
                />
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep3" 
                  defaultMessage="Choose a language (you will need to log in to Crowdin to do this)."                    
                />
              </Typography>
            </li>     
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep4" 
                  defaultMessage="You should now see boxes surrounding the various bits of text that make up the website. Hover over the text you wish to translate and click on the icon which will appear at the corner of the text."                    
                />
              </Typography>
            </li> 
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep5" 
                  defaultMessage="An editor will open up where you can provide your translation. Don't forget to click save when done."                    
                />
              </Typography>
            </li>        
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep6" 
                  defaultMessage="If you are experiencing any problems please <email>contact us.</email>"        
                  values={{
                    email: chunks =>  (
                        <a 
                          href="mailto:info@yourdigitalrights.org?subject=I am having problems with the translation system."
                          target="_blank"
                        >
                            {chunks}
                        </a>
                        ),                      
                  }}                                
                />
              </Typography>
            </li>                                  
          </ol>          
          <Typography component="h2" variant="h3" gutterBottom={true}>
            <FormattedMessage id="contribute.devTitle" defaultMessage="Help with Development" />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
                id="contribute.devSkills"
                defaultMessage="We are currently looking for Machine Learning, React and AWS engineers."
              />
              <br/>  
              <br/>  
              <FormattedMessage
              id="contribute.dev"
              defaultMessage="Our repositories are hosted on GitHub, with the main one being for this <a>website</a>. The best way to start is to get in touch via <email>email</email>. We will then add you to our slack channel and share ongoing development efforts. Alternatively, feel free to clone the repository and submit merge requests."
              values={{
                a: chunks =>  (
                    <a 
                        href='https://github.com/your-digital-rights/yourdigitalrights.org'
                        target="_blank"
                    >
                        {chunks}
                    </a>
                    ),
                email: chunks =>  (
                    <a 
                      href="mailto:info@yourdigitalrights.org?subject=I'd like to help with development"
                      target="_blank"
                    >
                        {chunks}
                    </a>
                    ),                      
              }}              
            />
          </Typography>        
          <br/>  
          <Typography component="h2" variant="h3" gutterBottom={true}>
            <FormattedMessage id="contribute.researchTitle" defaultMessage="Help with research" />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contribute.research"
              defaultMessage="We are always looking for better ways to promote Digital Rights and make them more accessible. Whether it's to better understand how people use technology or how organizations abuse it, there are always research projects going on. Please <email>email</email> us if you'd like to get involved."
              values={{
                email: chunks =>  (
                    <a 
                        href="mailto:info@yourdigitalrights.org?subject=I'd like to help with research"
                        target="_blank"
                    >
                        {chunks}
                    </a>
                    ),                      
              }}              
            />
          </Typography>    
          <br/>      
          <Typography component="h2" variant="h3" gutterBottom={true}>
            <FormattedMessage id="contribute.creditTitle" defaultMessage="Credit" />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contribute.creadit"
              defaultMessage="While we cannot afford to pay you for your work, we are more than happy to give you credit for your contributions, whether it's on this website, on github, or in other ways."           
            />
          </Typography> 
        </StyledPaper>
      </StyledContainer>
      <Social offset={true} sourcePage="contribute" />
      <Donations />
      <Footer />
    </div>
  );
};