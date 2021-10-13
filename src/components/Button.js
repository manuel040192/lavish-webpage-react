import React from 'react';
import './Button.css';

const styles = ['btn--primary', 'btn--outline'];

const sizes = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const colors = ['primary', 'blue', 'red', 'green'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) 
        ? buttonStyle 
        : styles[0];

    const checkButtonSize = sizes.includes(buttonSize) 
        ? buttonSize 
        : sizes[0];

    const checkButtonColor = colors.includes(buttonColor) 
        ? buttonColor: null; 
        

    return (
        <button className={'btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}'} 
        onClick={onClick} type={type}>{children}</button>
    )
}