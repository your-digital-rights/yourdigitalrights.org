import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Social from "../components/Social";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
import Donations from "../components/Donations";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { withRouter } from "next/router";


const styles = (theme) => ({
  container: {
    position: "relative",
    ...container,
    paddingTop: "50px",
    marginTop: "60px",
  },
  inner: {
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
});


const Contribute = ({ classes, router }) => {
  const intl = useIntl();
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
      <div className={classes.container}>
        <Paper className={classes.inner} elevation={2} >
          <Typography component="h1" variant="h4" gutterBottom={true}>
            <FormattedMessage id="contribute.title" defaultMessage="Contribute" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contribute.subtitle"
              defaultMessage="This project is entirely developed and maintained by volunteers. If you are concerned about the loss of privacy, rampant surveillance capitalism, micro-targeting and misinformation and the addictive nature of digital services then you can help:"
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
          <Typography component="h2" variant="h3" gutterBottom={true}>
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
              defaultMessage="We use the online platform <a>Crowdin</a> to easily craft the translation strings. It makes the process much easier, and doesn't require you to know anything about programming. Here is a <vid>video tutorial</vid> of the translation editor to help you get started. Follow these steps to get started:"
              values={{
                a: chunks =>  (
                    <a 
                        href='https://translate.yourdigitalrights.org/your-digital-rights'
                        target="_blank"
                    >
                        {chunks}
                    </a>
                    ),
                vid: chunks =>  (
                  <a 
                      href='https://youtu.be/bxdC7MfrO7A?t=205'
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
                  defaultMessage="Make an account at Crowdin by following this <a>link</a>" 
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
                  defaultMessage="Open our translation <a>project</a>" 
                  values={{
                    a: chunks =>  (
                        <a 
                            href='https://translate.yourdigitalrights.org/your-digital-rights/'
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
                  defaultMessage="Hover over a language that you would like to translate, then click the 'Translate' button on the right"                    
                />
              </Typography>
            </li>     
            <li>
              <Typography color="textSecondary">
                <FormattedMessage 
                  id="contribute.crowdinStep4" 
                  defaultMessage="You now see the crowdsourcing dashboard where you can start translating strings that are marked with a red dot, or search for a string you would like to correct"                    
                />
              </Typography>
            </li>          
          </ol>          
          <Typography component="h2" variant="h3" gutterBottom={true}>
            <FormattedMessage id="contribute.devTitle" defaultMessage="Help with Development" />
          </Typography>          
          <Typography gutterBottom={true}>
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
                      href="mailto:info@yourdigitalrights.org?subject=I'd like to help with the developmemt"
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
              defaultMessage="While we cannot afford to pay you for your work, we are more than happy to give you credit for your contributions, whether on this website, on github or in other ways."           
            />
          </Typography> 
        </Paper>
      </div>
      <Social offset={true} sourcePage="contribute" />
      <Donations />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(withRouter(Contribute));