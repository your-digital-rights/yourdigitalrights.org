import { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Icon from "@material-ui/core/Icon";
import Text from "./text";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    maxWidth: "777px",
    margin: "auto",
    padding: "30px",
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "60px 60px 0",
      margin: "60px auto 0"
    }
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5em"
  },
  list: {
    margin: "20px 0"
  }
});

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
        {body.map(text => {
          return (
            <div>
              <Typography color="textSecondary" component="p">
                {text.item || text}
              </Typography>
              {text.subItems && (
                <ul className={classes.list}>
                  {text.subItems.map(subItemText => (
                    <li>
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

  renderItem = ({ heading, body }, i) => {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel
        expanded={expanded === `panel${i}`}
        onChange={this.handleChange(`panel${i}`)}
      >
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
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
          {"Frequently Asked Questions"}
        </Typography>
        {Text.map(this.renderItem)}
      </div>
    );
  }
}

export default withStyles(styles)(FAQ);
