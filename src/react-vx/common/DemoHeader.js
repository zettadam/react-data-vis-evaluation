import React from 'react'

export default ({
  handlers
}) =>
  <header>
    <h3>Using React and <a href="https://vx-demo.now.sh/">VX</a> library</h3>
    <div className="demo--toolbar">
      <span className="dev--notes"
        onClick={ handlers.onToolbarNotesClick }
        title="View developer notes">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
          <path d="M18.5 76c0 4.7 3.8 8.5 8.5 8.5h46c4.7 0 8.5-3.8 8.5-8.5V24c0-4.7-3.8-8.5-8.5-8.5H27c-4.7 0-8.5 3.8-8.5 8.5V76zM44.5 42.5h2 11 2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-2 -11 -2c-1.4 0-2.5-1.1-2.5-2.5S43.1 42.5 44.5 42.5zM44.5 54.5h2 18 2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-2 -18 -2c-1.4 0-2.5-1.1-2.5-2.5S43.1 54.5 44.5 54.5zM23.5 24c0-1.9 1.6-3.5 3.5-3.5h4.8v59H27c-1.9 0-3.5-1.6-3.5-3.5V24z"/>
        </svg>
      </span>
      <span className="dev--charts"
        onClick={ handlers.onToolbarChartsClick }
        title="View chart examples">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100">
          <g>
            <rect x="33.342" y="47.22" width="5.095" height="16.887"/>
            <rect x="47.342" y="42.22" width="5.095" height="21.887"/>
            <rect x="61.342" y="34.22" width="5.095" height="29.887"/>
            <path d="M50.045,14.728C30.689,14.728,15,30.418,15,49.772s15.689,35.045,35.045,35.045c19.354,0,35.045-15.69,35.045-35.045   S69.399,14.728,50.045,14.728z M41.437,65.607c0,0.829-0.672,1.5-1.5,1.5h-8.095c-0.828,0-1.5-0.671-1.5-1.5V45.72   c0-0.829,0.672-1.5,1.5-1.5h8.095c0.828,0,1.5,0.671,1.5,1.5V65.607z M55.437,65.607c0,0.829-0.672,1.5-1.5,1.5h-8.095   c-0.828,0-1.5-0.671-1.5-1.5V40.72c0-0.829,0.672-1.5,1.5-1.5h8.095c0.828,0,1.5,0.671,1.5,1.5V65.607z M69.437,65.607   c0,0.829-0.672,1.5-1.5,1.5h-8.095c-0.828,0-1.5-0.671-1.5-1.5V32.72c0-0.829,0.672-1.5,1.5-1.5h8.095c0.828,0,1.5,0.671,1.5,1.5   V65.607z"/>
          </g>
        </svg>
      </span>
    </div>
  </header>
