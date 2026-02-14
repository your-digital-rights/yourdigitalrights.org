import Text, { Title } from "./text";
import { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import * as S from "./styles";

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
              <S.StyledList>
                {text.item || text}
              </S.StyledList>
              {text.subItems && (
                <>
                  <br />
                  <S.StyledUList>
                    {text.subItems.map((subItemText, index) => (
                      <li key={index}>
                        <Typography>
                          {subItemText}
                        </Typography>
                      </li>
                    ))}
                  </S.StyledUList>
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
          <Typography variant={"body2"}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <S.StyledAccordionBody>
            {this.renderItemBody(body)}
          </S.StyledAccordionBody>
        </AccordionDetails>
      </Accordion>
    );
  };

  render() {
    return (
      <S.StyledContainer id="faq">
        <S.StyledTitle>
          {Title}
        </S.StyledTitle>
        {Text.map(this.renderItem)}
      </S.StyledContainer>
    );
  }
}

export default FAQ;
