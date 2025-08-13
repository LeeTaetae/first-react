import React, { useContext } from 'react';
import FontContext from './FontContext';

const FontSizeComponent = () => {
    const {state, actions} = useContext(FontContext)
    const {setFontSize} = actions
    const {fontSize} = state
    return (
        <div>
            
              <p style={{fontSize}}>최하위 컴포넌트</p>
            
        </div>
    );
};

export default FontSizeComponent;