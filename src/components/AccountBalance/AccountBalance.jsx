import PropTypes from "prop-types";
import React from 'react';
import styled from 'styled-components'

const Section = styled.section `
border: 1px solid aqua;
padding-left:30px;
text-align:left;
`;


export default function AccountBalance (props) {
 
    
    const buttonText = props.showBalance ? 'Hide balance':'Show Balance';
    let content = null;
    if (props.showBalance){
      content =<> Current Balance: $ {props.amount} </>;
    }
  
  
    return (
      <Section>
      {content}
      <button onClick={props.hideBalance}>{buttonText}</button>
      <button onClick={props.addBalance}>Add 1200$</button>
      </Section>
    )
  
}








AccountBalance.propTypes = {
  amount:PropTypes.number
}
