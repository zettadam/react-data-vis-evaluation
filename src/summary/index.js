import React from 'react'

const Article = props => (
  <article>
    <h1>Summary</h1>
    <p>The challenge of integrating D3 with React is that React and D3 both want to control the DOM.
       The entire <b>select/enter/exit/update</b> pattern with D3 is in direct conflict with React and its virtual DOM.
       If you’re coming to React from D3, giving up your grip on the DOM is one of those “cold, dead hands” moments.
       The way most people use D3 with React is to use React to build the structure of the application,
       and to render traditional HTML elements, and then when it comes to the data visualization section,
       they pass a DOM container (typically an <code>&lt;svg&gt;</code>) over to D3 and use D3 to create and destroy and update elements.</p>
  </article>
)

export default Article
