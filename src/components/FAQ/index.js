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
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "60px",
      margin: "60px auto"
    }
  },
  alphaList: {
    listStyleType: "lower-alpha",
    margin: 0
  },
  romanList: {
    listStyleType: "lower-roman",
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
      <ol className={classes.alphaList}>
        {body.map(text => {
          return (
            <li>
              <Typography>{text.item || text}</Typography>
              {text.subItems && (
                <ol className={classes.romanList}>
                  {text.subItems.map(subItemText => (
                    <li>
                      <Typography>{subItemText}</Typography>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
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
          <Typography variant={"body2"}>
            {`${i + 1}.`} {heading}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.renderItemBody(body)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  render() {
    const { classes } = this.props;
    return <div className={classes.container}>{Text.map(this.renderItem)}</div>;
  }
}

export default withStyles(styles)(FAQ);
