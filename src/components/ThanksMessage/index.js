import { FormattedMessage } from "react-intl";
import Subscribe from "../Subscribe";
import tracking from "../../utils/tracking";
import { 
  ThanksTitleText, 
  ThanksCopyPart1Email,
  ThanksCopyPart1Copy, 
  ThanksRequestTypeDelete,
  ThanksRequestTypeAccess
} from "./text";
import {useIntl} from 'react-intl';
import Regulations from "../../utils/regulations";
import * as S from "./styles";

const ThanksMessage = (props) => {
  const intl = useIntl();
  let { requestType, regulationType, selectedActionName } = props;
  let requestTypeText = (requestType == "DELETION") ? ThanksRequestTypeDelete : ThanksRequestTypeAccess;
  let ThanksCopyPart1 = (selectedActionName == "Copy") ? ThanksCopyPart1Copy : ThanksCopyPart1Email;
  let replyTimeText = regulationType ? intl.formatMessage({
      id: "thankyou.howLongToReply",
      defaultMessage: "Organizations have {days} to comply, and may request additional information in order to verify your identity.",
    },
    {
      days: (<em>{Regulations[regulationType].timeLimit} days</em>),
    }
  ) : "";

  let hide = () => {
    tracking.trackFindAnotherOrg();
    props.hideThanks();
  };

  const trackDonate = (type) => {
    tracking.trackDonate(type, "Thank You Component");
  };

  const trackWebExtension = (brower) => {
    tracking.trackWebExtension(brower, "Thank You Component");
  };

  return (
    <S.Root
      elevation={10}
      id="ThanksMessage"
    >
      <S.Content>
        <S.Title
          variant="h4"
          gutterBottom={true}
          id="ThanksMessageTitle"
        >
          {ThanksTitleText}
        </S.Title>
        <S.Text
          component="p"
          gutterBottom={true}
          id="ThanksMessageText"
        >
          {requestTypeText}{" "}{ThanksCopyPart1}{" "}{replyTimeText}
        </S.Text>
        <br/>
        <S.Text
          component="p"
          variant="h5"
          gutterBottom={false}
        >      
          <FormattedMessage
            id="thankyou.donation"
            defaultMessage="Help us keep this service free by <a>making a donation</a> to help ensure our long-term financial stability and independence."
            values={{
              a: txt => ( <a rel="noreferrer noopener" href="https://opencollective.com/consciousdigital" target="_blank">{txt}</a>),
            }}
          />
        </S.Text>
      </S.Content>
      <Subscribe/>
{/*      <S.StartAgainBtn
          variant="contained"
          color="secondary"
          type="submit"
          id="ThanksMessageBtn"
          onClick={hide}
        >
          {FindCompanyText}
      </S.StartAgainBtn>      
*/}      
    </S.Root>
  );
};

export default ThanksMessage;
