import React, { Component } from 'react'

export default class ChartPanel extends Component {

  static defaultProps = {
    aspectRatioClass: 'a16_9',
    baseClassName: 'chart-panel',
    className: '',
    interpolation: 'natural',
    theme: 'schemeAccent',
    title: 'Chart Title'
  }

  constructor (props) {
    super(props)

    this.state = {
      theme: props.theme,
      interpolation: props.interpolation
    }

    this.handleThemeChange = this.handleThemeChange.bind(this)
    this.handleInterpolationChange = this.handleInterpolationChange.bind(this)
  }

  handleThemeChange (event) {
    const { target: { value } } = event
    this.setState({ theme: value })
  }

  handleInterpolationChange (event) {
    const { target: { value } } = event
    this.setState({ interpolation: value })
  }

  render () {
    const {
      aspectRatioClass,
      baseClassName,
      children,
      className,
      title
    } = this.props
    const {
      interpolation,
      theme
    } = this.state

    return (
      <div className={ `${ baseClassName } ${className}` }>
        <div className={ `${ baseClassName }__header` }>
          <h4 className={ `${ baseClassName }__title` }>{ title }</h4>
          <div className={ `${ baseClassName }__toolbar` }>
            <label>
              <select title="Select theme" name="theme"
                value={ theme }
                onChange={ this.handleThemeChange }>
                <option value="schemeAccent">Scheme Accent</option>
                <option value="schemeBlues">Scheme Blues</option>
                <option value="schemeBrBG">Scheme BrBG</option>
                <option value="schemeBuGn">Scheme BuGn</option>
                <option value="schemeBuPu">Scheme BuPu</option>
                <option value="schemeDark2">Scheme Dark2</option>
                <option value="schemeGnBu">Scheme GnBu</option>
                <option value="schemeGreens">Scheme Greens</option>
                <option value="schemeGreys">Scheme Greys</option>
                <option value="schemeOranges">Scheme Oranges</option>
                <option value="schemeOrRd">Scheme OrRd</option>
                <option value="schemePaired">Scheme Paired</option>
                <option value="schemePastel1">Scheme Pastel1</option>
                <option value="schemePastel2">Scheme Pastel2</option>
                <option value="schemePiYG">Scheme PiYG</option>
                <option value="schemePRGn">Scheme PRGn</option>
                <option value="schemePuBu">Scheme PuBu</option>
                <option value="schemePuBuGn">Scheme PuBuGn</option>
                <option value="schemePuOr">Scheme PuOr</option>
                <option value="schemePuRd">Scheme PuRd</option>
                <option value="schemePurples">Scheme Purples</option>
                <option value="schemeRdBu">Scheme RdBu</option>
                <option value="schemeRdGy">Scheme RdGy</option>
                <option value="schemeRdPu">Scheme RdPu</option>
                <option value="schemeRdYlBu">Scheme RdYlBn</option>
                <option value="schemeRdYlGn">Scheme RdYlGn</option>
                <option value="schemeReds">Scheme Reds</option>
                <option value="schemeSet1">Scheme Set1</option>
                <option value="schemeSet2">Scheme Set2</option>
                <option value="schemeSet3">Scheme Set3</option>
                <option value="schemeSpectral">Scheme Spectral</option>
                <option value="schemeYlGn">Scheme YlGn</option>
                <option value="schemeYlGnBu">Scheme YlGnBu</option>
                <option value="schemeYlOrBr">Scheme YlOrBr</option>
                <option value="schemeYlOrRd">Scheme YlOrRd</option>
              </select>
            </label>
            <label>
              <select title="Select interpolation" name="interpolation"
                value={ interpolation }
                onChange={ this.handleInterpolationChange }>
                <option value="basis">Basis</option>
                <option value="cardinal">Cardinal</option>
                <option value="catmullRom">CatmullRom</option>
                <option value="linear">Linear</option>
                <option value="linearClosed">Linear Closed</option>
                <option value="monotoneX">MonotoneX</option>
                <option value="monotoneY">MonotoneY</option>
                <option value="natural">Natural</option>
                <option value="step">Step</option>
              </select>
            </label>
          </div>
        </div>
        <div className={ `${baseClassName }__content ${ aspectRatioClass}` }>
          <div className="chart">
            { children && React.cloneElement(children, { interpolation, theme } )}
          </div>
        </div>
      </div>
    )
  }
}
