import React from 'react'

const VXDemo = props =>
  <section className="demo">
    <header>
      <h3>VX Demo</h3>
    </header>
    <p>Here are some charts created using <b><a href="https://vx-demo.now.sh/">vx</a></b> &mdash; a collection of reusable, low-level components combining the power of <b>D3</b> to generate your visualization with the benefits of <b>React</b> for updating the DOM.</p>

    <section className="charts charts--victory">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Area</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Lines</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Lines (with zoom)</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Scatter Plot</h4>
        </div>
        <div className="chart-panel__content">

        </div>
      </div>
    </section>
  </section>

export default VXDemo
