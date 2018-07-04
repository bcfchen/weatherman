import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressIndicator = ({ classes }) => {
    return (
        <div className="progress-indicator">
            <CircularProgress variant="indeterminate" className={classes.progress} color="inherit" />
        </div>
    );
}

const styles = theme => ({
    progress: {
        top: "40%",
        left: "45%",
        position: "fixed"
    }
});

export default withStyles(styles)(ProgressIndicator);