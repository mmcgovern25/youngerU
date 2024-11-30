import React from 'react';
import '../styles/arrowdown.css';  // Ensure you import your CSS file

const DownIcon = (props) => {
  return (
    <svg
      fill="#0077BC"
      height="50px"
      width="50px"
      version="1.1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
      className="arrow"  // Apply the animation class here
      {...props}
    >
      <g id="green1">
        {/* First arrow with fade animation */}
        <path
          id="arrow3"
          className="fadeArrow"
          d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001 c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150 c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"
          fill="#65B5AC"  // Default fill color
        />
        {/* Second arrow with fade animation */}
        <path
          id="arrow2"
          className="fadeArrow"
          d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150 c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393 c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"
           fill="#65B5AC"
        />
        {/* Third arrow with fade animation */}
        <path
          id="arrow1"
          className="fadeArrow"
          d="M154.398,240.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150 c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,69.607 c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,240.607z"
         
        />
      </g>
    </svg>
  );
};

export default DownIcon;
