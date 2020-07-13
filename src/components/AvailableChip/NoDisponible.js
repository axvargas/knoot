import React from 'react';
import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';
const NoDisponible = () => {
    return (
        <div>
            <Chip
                icon={<BlockIcon />}
                label="No disponible"
                color="secondary"
                disabled 
            />
        </div>
    );
}

export default NoDisponible;