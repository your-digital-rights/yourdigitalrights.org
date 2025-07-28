import React from "react";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";
import fetch from "isomorphic-fetch";
import { useRouter } from 'next/router'
import * as S from "./styles";

const DeletePII = ({ uuid }) => {
  const router = useRouter();
  const ref = uuid ? uuid.split("-")[0] : "";
  const [dataDeleted, updateDataDeleted] = React.useState();
  
  const trackDeletePII = (type) => {
    tracking.trackDeletePII(type);
  };

  const onClick = (type) => {
    const params = {
      uuid: uuid,
      type: type,
    };

    const res = fetch(
      "/api/delete",
      {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    trackDeletePII("Delete " + type + " PII");
    updateDataDeleted(type);
  };

  return (
    <S.StyledContainer>
      <S.StyledHeading id="deletePII">
        <S.StyledTitle
          variant="h4"
          component="h2"
          gutterBottom={true}
        >
          <FormattedMessage id="deletePII.heading" defaultMessage="Delete my data" />
        </S.StyledTitle>
        { !dataDeleted && 
          <>
            <S.StyledIntro color="inherit">
              <FormattedMessage
                id="deletePII.intro"
                defaultMessage="Your personal data will be automatically deleted 120 days after a request was made, however you can choose to delete your data now. Do you wish to delete the data which is associated with this request (ref: {ref}), or with all of your requests?"
                values={{ 
                  ref: <a target="_blank" href={`/r/${uuid}`} rel="noreferrer noopener">{ref}</a>,
                }}
              />
            </S.StyledIntro>          
            <S.StyledButtons>
              <S.StyledLeftButton
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => onClick('request')}
              >
                <FormattedMessage id="deletePII.deleteSpecificPII" defaultMessage="This request" />
              </S.StyledLeftButton>                          
              <S.StyledRightButton
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => onClick('all')}
              >
                <FormattedMessage id="deletePII.deleteAllPII" defaultMessage="All requests" />
              </S.StyledRightButton>
            </S.StyledButtons>
        </>
      }
      { dataDeleted == 'all' &&
        <S.StyledIntro color="inherit">
          <FormattedMessage
            id="deletePII.doneAll"
            defaultMessage="We have successfully deleted the personal data associated with all of your requests."
          />
        </S.StyledIntro>       
      }
      { dataDeleted == 'request' &&
        <S.StyledIntro color="inherit">
          <FormattedMessage
            id="deletePII.doneRequest"
            defaultMessage="We have successfully deleted the personal data associated with this request."
          />
        </S.StyledIntro>       
      }      
      </S.StyledHeading>
    </S.StyledContainer>
  );
};

export default DeletePII;
