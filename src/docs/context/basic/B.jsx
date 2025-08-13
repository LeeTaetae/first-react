import React from 'react';

const B = ({name}) => {
    return (
        <div>
            <C name={name} />
            <CharContext.Povider >
                {(context) => (
                    <p style={{color : context.color}}> B의 글자!</p>
                )}
            </CharContext.Povider>
            <p>B의 글자!</p>
        </div>
    );
};

export default B;