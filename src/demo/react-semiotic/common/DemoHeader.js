import React from 'react'

export default ({
  handlers,
  visibleSection
}) =>
  <header>
    <h3>Using React and <a href="https://https://emeeks.github.io/semiotic/">Semiotic</a> library</h3>
    <div className="demo--toolbar">
      <span className={ `tb--charts ${ 'charts' === visibleSection ? 'active' : '' }` }
        onClick={ 'charts' !== visibleSection ? handlers.onToolbarChartsClick : null }
        title="View chart examples">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100">
          <path d="M46.375,45.75h6.25V62h-6.25V45.75L46.375,45.75z M35.125,53.25h6.25V62h-6.25V53.25L35.125,53.25z M57.625,37h6.25v25  h-6.25V37L57.625,37z M19.502,75.963c-13.336-15.09-13.337-37.835,0-52.925l10.64,10.64c-7.523,9.181-7.523,22.465,0,31.645  L19.502,75.963L19.502,75.963z M75.963,79.498c-15.09,13.336-37.835,13.336-52.925,0l10.639-10.64  c9.181,7.522,22.465,7.522,31.645,0L75.963,79.498L75.963,79.498z M79.498,23.038c13.336,15.09,13.336,37.835,0,52.925  L68.859,65.322c7.521-9.18,7.521-22.463,0-31.645L79.498,23.038L79.498,23.038z M23.038,19.502  c15.089-13.336,37.835-13.336,52.925,0l-10.641,10.64c-9.18-7.522-22.464-7.522-31.645,0L23.038,19.502L23.038,19.502z"/>
      </svg>

      </span>
      <span className={ `tb--bookmarks ${ 'bookmarks' === visibleSection ? 'active' : ''}` }
        onClick={ 'bookmarks' !== visibleSection ? handlers.onToolbarBookmarkClick : null }
        title="View related bookmarks">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 40" enableBackground="new 0 0 32 32">
          <path fillRule="evenodd" clipRule="evenodd" d="M25.714,28.967l-0.71,0.725c-0.393,0.4-1.027,0.4-1.421,0l-7.582-7.78l-7.584,7.78  c-0.391,0.4-1.028,0.4-1.419,0l-0.71-0.725c-0.393-0.4-0.393-1.051,0-1.451l8.287-8.501c0.002-0.002,0.004-0.006,0.006-0.01  l0.71-0.725c0.393-0.4,1.028-0.4,1.42,0l0.708,0.725c0.004,0.004,0.004,0.008,0.008,0.01l8.287,8.501  C26.104,27.916,26.104,28.566,25.714,28.967L25.714,28.967z M23.266,21c-0.206,0-0.395-0.084-0.529-0.22  c-0.006-0.005,0,0.021-0.002,0.022l-5.157-5.29c-0.069-0.071-0.126-0.132-0.158-0.164l-0.708-0.725c-0.393-0.4-1.027-0.4-1.42,0  l-0.71,0.725c-0.006,0.006-0.017,0.021-0.024,0.028l-5.279,5.417C9.142,20.92,8.965,21,8.766,21c-0.413,0-0.75-0.336-0.75-0.749V3  c0-0.553,0.447-1,1-1h14c0.553,0,1,0.447,1,1v17.251C24.016,20.664,23.68,21,23.266,21L23.266,21z"/>
      </svg>
      </span>
      <span className={ `tb--notes ${ 'notes' === visibleSection ? 'active' : '' }` }
        onClick={ 'notes' !== visibleSection ? handlers.onToolbarNotesClick : null }
        title="View related notes">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
          <path d="M18.5 76c0 4.7 3.8 8.5 8.5 8.5h46c4.7 0 8.5-3.8 8.5-8.5V24c0-4.7-3.8-8.5-8.5-8.5H27c-4.7 0-8.5 3.8-8.5 8.5V76zM44.5 42.5h2 11 2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-2 -11 -2c-1.4 0-2.5-1.1-2.5-2.5S43.1 42.5 44.5 42.5zM44.5 54.5h2 18 2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-2 -18 -2c-1.4 0-2.5-1.1-2.5-2.5S43.1 54.5 44.5 54.5zM23.5 24c0-1.9 1.6-3.5 3.5-3.5h4.8v59H27c-1.9 0-3.5-1.6-3.5-3.5V24z"/>
        </svg>
      </span>
    </div>
  </header>
