import Text, { Title } from "./text";

import { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class FAQ extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  renderItemBody = body => {
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
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel
        key={index}
        expanded={expanded === `panel${index}`}
        onChange={this.handleChange(`panel${index}`)}
      >
        <ExpansionPanelSummary id={`faq-${index}`} expandIcon={<Icon>expand_more</Icon>}>
          <Typography variant={"body2"}>{heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.renderItemBody(body)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} id="faq">
        <Typography
          variant={"display1"}
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
