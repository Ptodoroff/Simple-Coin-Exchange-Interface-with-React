import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


const Td= styled.td`

background-color: #cccccc;

border: 1px solid;

width: 25vh;

color:black;

`;
export default function Coin (props) {


    /*
    componentDidMount () {                                          // this is the first hook i get introuduced to. It gets invoked right after the first render of the component
        let callback= ()=>{                                         // with this hook i am telling react to update the state of this compinent
            let ranodomPercentage=0.995 + Math.random() * 0.01;     // after the first rendering of the component, the componentDidMount method instructs React to change the state of the component based on the code inside this method. Here, I am defining a setInterval function that takes a callback function every 1000ms ( 1 sec). I also define the callback function

            this.setState (function (oldState){                     // the 'callback'function here essentialy invokes the setState method, which instructs React to change the state of the  price prop (defined in the state object after the super keyword)
                return {
                    price:oldState.price * ranodomPercentage
                };
            });
        }

        
        setInterval(callback, 1000);                                
    }
    */
                                                                     // the 'callback'function here essentialy invokes the setState method, which instructs React to change the state of the  price prop (defined in the state object after the super keyword)
    const handleClick=(event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);  
    }
    
    return (
    
    <tr> 
    <Td>{props.name}   </Td> 
    <Td>{props.ticker} </Td> 
    <Td>${props.price}  </Td> 
    {props.showBalance ? <Td> {props.balance}</Td> : null}
    <Td><form action = '#' method = 'POST'>
    <button onClick={handleClick}>Refresh</button>
    </form> 
    </Td>                     
  </tr>
  
  );
    }

                                                         // every prop, used in the state object must be cited as this.STATE.propname in the returnrn statement of the render method
Coin.propTypes = {
    name:PropTypes.string,
    ticker:PropTypes.string,
    price:PropTypes.string
    
}
