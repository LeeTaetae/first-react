import React from 'react';
import Animal from './Animal';
import {AnimalsProvider} from './AnimalsContext'

const Animals = () => {
    return (
        <div>
            <AnimalsProvider>
                <Animal />
            </AnimalsProvider>
        </div>
    );
};

export default Animals;