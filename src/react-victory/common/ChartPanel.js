import React, { Component } from 'react'

export default class ChartPanel extends Component {

  static defaultProps = {
    aspectRatioClass: 'a16_9',
    baseClassName: 'chart-panel',
    className: '',
    interpolation: 'natural',
    theme: 'sequential',
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
                <option value="sequential">Sequential</option>
                <option value="divergent">Divergent</option>
                <option value="qualitativeA">Qualitative A</option>
                <option value="qualitativeB">Qualitative B</option>
                <option value="grayscale">Grayscale</option>
              </select>
            </label>
            <label>
              <select title="Select interpolation" name="interpolation"
                value={ interpolation }
                onChange={ this.handleInterpolationChange }>
                <option value="basis">Basis</option>
                <option value="bundle">Bundle</option>
                <option value="cardinal">Cardinal</option>
                <option value="catmullRom">CatmullRom</option>
                <option value="linear">Linear</option>
                <option value="monotoneX">MonotoneX</option>
                <option value="monotoneY">MonotoneY</option>
                <option value="natural">Natural</option>
                <option value="step">Step</option>
                <option value="stepAfter">Step After</option>
                <option value="stepBefore">Step Before</option>
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
