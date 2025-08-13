import React from 'react';

const PropsComponent03 = (props) => {
    console.log(props)
    
    const {name} = props
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default PropsComponent03;