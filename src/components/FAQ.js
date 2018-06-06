import { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { FormattedMessage as F } from "react-intl";
import Icon from "@material-ui/core/Icon";
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

const Text = [
  {
    heading: (
      <F
        id="heading1"
        defaultMessage="Which organizations does the GDPR regulation affect?
        "
      />
    ),
    body: [
      <F
        id="1a"
        defaultMessage="It applies to all companies processing and holding the personal data of European Union residents, regardless of the organisation’s location."
      />
    ]
  },
  {
    heading: (
      <F id="heading2" defaultMessage="When can you request erasure? " />
    ),
    body: [
      <F
        id="2a"
        defaultMessage="The right to erasure is not absolute. The right only applies in the following circumstances:"
      />,
      <F
        id="2b"
        defaultMessage="The organisation no longer needs your data. Example: after you have cancelled your gym membership, it no longer needs to keep details of your name, address, age and health conditions."
      />,
      <F
        id="2c"
        defaultMessage="You initially consented to the use of your data, but have now withdrawn your consent. Example: you agreed to take part in a market-research study and now no longer wish to do so."
      />,
      <F
        id="2d"
        defaultMessage="You have objected to the use of your data, and your interests outweigh those of the organisation using it."
      />,
      <F
        id="2e"
        defaultMessage="The organisation has collected or used your data unlawfully. Example: it hasn’t complied with the rules on data protection."
      />,
      <F
        id="2f"
        defaultMessage="The organisation has a legal obligation to erase your data."
      />,
      <F
        id="2g"
        defaultMessage="The data was collected from you as a child for an online service. Example: social media or a gaming app. The law gives children special protection because they may be less aware of the risks and consequences of giving their data to organisations. Even if you are now an adult, you have a right to have your data erased if it was collected from you as a child."
      />
    ]
  },
  {
    heading: (
      <F id="heading3" defaultMessage="When can the organisation say no?" />
    ),
    body: [
      {
        item: (
          <F
            id="3a"
            defaultMessage="The organisation can refuse to erase your data in the following circumstances:"
          />
        ),
        subItems: [
          <F
            id="3ai"
            defaultMessage="When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes)."
          />
        ]
      }
    ]
  }
];

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
