import React from 'react';
import './InputOption.css';

function InputOption({ Icon, title, color }) {
    return (
        <div className="inputOption">
            {/* using inline styling for the icon, by deconstruc color on the props */}
            <Icon style={{ color: color }}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
