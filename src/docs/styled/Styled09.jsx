import React from 'react';
import Button from '../../component/button/style';
import {byPrefixAndName, faDragon} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-svg-core'

const Styled09 = () => {

//   const buttonProps = {
//     color: "blue",
//     font: "h8",
//     size: "full",
//     border: ""
//   }

  return (
    <div>
      <FontAwesomeIcon icon={faDragon} size='2xl' style={{color : "#74C0FC"}} bounce/>
    </div>
  );
};

export default Styled09;