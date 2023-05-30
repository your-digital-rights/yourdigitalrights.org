import Text, { Title } from "./text";
import { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';

class FAQ extends Component {
  state = {
    expanded: null,
  };

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderItemBody = (body) => {
    const { classes } = this.props;

    return (
      <div>
        {body.map((text, index) => {
          return (
            <div key={index}>
              <Typography component="p" className={classes.list}>
                {text.item || text}
              </Typography>
              {text.subItems && (
                <>
                  <br />
                  <ul className={classes.list}>
                    {text.subItems.map((subItemText, index) => (
                      <li key={index}>
                        <Typography>
                          {subItemText}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <br />
            </div>
          );
        })}
      </div>
    );
  };

  renderItem = ({ heading, body }, index) => {
    const { expanded } = this.state;
    const { classes } = this.props;

    return (
      <Accordion
        key={index}
        expanded={expanded === `panel${index}`}
        onChange={this.handleChange(`panel${index}`)}
      >
        <AccordionSummary
          id={`faq-${index}`}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant={"body2"}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionBody}>
          {this.renderItemBody(body)}
        </AccordionDetails>
      </Accordion>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id="faq">
        <Typography
          variant={"h5"}
          className={classes.title}
          gutterBottom={true}
          component={"h2"}
        >
          {Title}
        </Typography>
        {Text.map(this.renderItem)}
      </div>
    );
  }
}

export default withStyles(styles)(FAQ);
