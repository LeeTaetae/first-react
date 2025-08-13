import React from 'react';
import AnimalButton from '../../styled/style';

const AnimalButtonComponent = ({remove, animal}) => {
    return (
        <div>
            <li><AnimalButton onClick={remove}>{animal}</AnimalButton></li>
        </div>
    );
};

export default AnimalButtonComponent;