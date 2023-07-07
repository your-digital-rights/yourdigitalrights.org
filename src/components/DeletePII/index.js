import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';
import Button from "@mui/material/Button";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";
import fetch from "isomorphic-fetch";
import { useRouter } from 'next/router'

const DeletePII = ({ classes, uuid }) => {
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
    <div className={classes.container}>
      <div id="deletePII" className={classes.heading}>
        <Typography
          variant="h4"
          component="h2"
          className={classes.title}
          gutterBottom={true}
        >
          <FormattedMessage id="deletePII.heading" defaultMessage="Delete my data" />
        </Typography>
        { !dataDeleted && 
          <>
            <Typography color="inherit" className={classes.intro}>
              <FormattedMessage
                id="deletePII.intro"
                defaultMessage="Your personal data will be automatically deleted 120 days after a request was made, however you can choose to delete your data now. Do you wish to delete the data which is associated with this request (ref: {ref}), or with all of your requests?"
                values={{ 
                  ref: <a target="_blank" href={`/r/${uuid}`} rel="noreferrer noopener">{ref}</a>,
                }}
              />
            </Typography>          
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.leftButton}
                onClick={() => onClick('request')}
              >
                <FormattedMessage id="deletePII.deleteSpecificPII" defaultMessage="This request" />
              </Button>                          
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.rightButton}
                onClick={() => onClick('all')}
              >
                <FormattedMessage id="deletePII.deleteAllPII" defaultMessage="All requests" />
              </Button>
          </div>
        </>
      }
      { dataDeleted == 'all' &&
        <Typography color="inherit" className={classes.intro}>
          <FormattedMessage
            id="deletePII.doneAll"
            defaultMessage="We have successfully deleted the personal data associated with all of your requests."
          />
        </Typography>       
      }
      { dataDeleted == 'request' &&
        <Typography color="inherit" className={classes.intro}>
          <FormattedMessage
            id="deletePII.doneRequest"
            defaultMessage="We have successfully deleted the personal data associated with this request."
          />
        </Typography>       
      }      
      </div>
    </div>
  );
};
export default withStyles(styles)(DeletePII);
