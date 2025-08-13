import React from 'react';

const PropsComponent02 = (props) => {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    );
};

export default PropsComponent02;