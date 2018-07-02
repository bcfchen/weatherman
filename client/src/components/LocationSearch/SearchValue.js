import React from "react";
import Typography from '@material-ui/core/Typography';

const SearchValue = ({ value, children }) => {
    return (
        <div className="Select-value async-select-value">
            <span className="Select-value-label">
                <Typography variant="headline" gutterBottom>{value.label}</Typography>
                {children}
            </span>
        </div>
    );
}

export default SearchValue;