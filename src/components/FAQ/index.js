import Text, { Title } from "./text";
import { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import styles from "./styles";

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
    return (
      <div>
        {body.map((text, index) => {
          return (
            <div key={index}>
              <Typography component="div" sx={styles.list}>
                {text.item || text}
              </Typography>
              {text.subItems && (
                <>
                  <br />
                  <ul style={styles.list}>
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
          <Typography variant={"body2"} sx={styles.accordionHeading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionBody}>
          {this.renderItemBody(body)}
        </AccordionDetails>
      </Accordion>
    );
  };

  render() {
    return (
      <div style={styles.container} id="faq">
        <Typography
          variant={"h5"}
          sx={styles.title}
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

export default FAQ;
