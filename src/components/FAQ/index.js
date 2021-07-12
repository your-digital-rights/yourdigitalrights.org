import Text, { Title } from "./text";
import { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionActions";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

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
      <div className={classes.alphaList}>
        {body.map((text, index) => {
          return (
            <div key={index}>
              <Typography color="textSecondary" component="p">
                {text.item || text}
              </Typography>
              {text.subItems && (
                <ul className={classes.list}>
                  {text.subItems.map((subItemText, index) => (
                    <li key={index}>
                      <Typography color="textSecondary">
                        {subItemText}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}
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
          expandIcon={<Icon>expand_more</Icon>}
        >
          <Typography variant={"body2"}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
