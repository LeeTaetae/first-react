import React from 'react';
import PropsComponent from './PropsComponent';
import PropsComponent02 from './PropsComponent02';
import PropsComponent03 from './PropsComponent03';

const PropsContainer = () => {

    const name = "홍길동"
    const age =20

    const style = {
        color : "blue"
    }

    return (
        <div>
            <PropsComponent name={name} age={age}/>
            <PropsComponent02>
                <span style={style}>내 이름은 {name}</span>
            </PropsComponent02>
            <PropsComponent03 name={name} />
        </div>
    );
};

export default PropsContainer;