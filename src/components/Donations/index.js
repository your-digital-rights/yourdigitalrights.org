import { IntroText, SubtitleText, DonateButtonText } from './text'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { visuallyHidden } from '../../styles/layout'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const Donations = ({ classes, onCompanySelected, children }) => {
    return (
        <div className={classes.donate}>
            <div className={classes.container}>
                <div id="donations" className={classes.heading}>
                    <Typography
                        variant="display1"
                        component="h2"
                        className={classes.title}
                        gutterBottom={true}
                    >
                        {SubtitleText}
                    </Typography>
                    <Typography color="inherit" className={classes.intro}>
                        {IntroText}
                    </Typography>
                    <div className={classes.bitcoin}>
                        <Button
                            variant="raised"
                            href="bitcoin:34kHDRPhrBmP15BZBYvx4gn5amwCwa6kGe"
                            color="primary"
                            type="submit"
                            className={classes.donateButton}
                        >
                            {DonateButtonText}
                        </Button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(Donations)
