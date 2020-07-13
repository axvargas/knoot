import React from 'react';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const Disponible = () => {
    return (
        <div>
            <Chip
                icon={<CheckCircleIcon />}
                label="Disponible"
                color="secondary"

            
            />
        </div>
    );
}

export default Disponible;

