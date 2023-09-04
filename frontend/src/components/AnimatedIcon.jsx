import React, { useState } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { SportsSoccer } from '@material-ui/icons';

const ShoeIcon = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleMouseEnter = () => {
        setShowMessage(true);
    };

    const handleMouseLeave = () => {
        setShowMessage(false);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SportsSoccer />
            </IconButton>
            {showMessage && (
                <Tooltip title="This is a shoe icon" placement="right">
                    <div style={{ marginLeft: '10px' }}>Hovered!</div>
                </Tooltip>
            )}
        </div>
    );
};

export default ShoeIcon;
