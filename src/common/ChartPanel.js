import React, { Component } from 'react'

export default class ChartPanel extends Component {

  static defaultProps = {
    aspectRatioClass: 'a16_9',
    baseClassName: 'chart-panel',
    className: '',
    title: 'Chart Title'
  }

  constructor (props) {
    super(props)

    this.state = {
      theme: props.theme || 'grayscale'
    }

    this.handleThemeChange = this.handleThemeChange.bind(this)
  }

  handleThemeChange (event) {
    const { target: { value } } = event
    this.setState({ theme: value })
  }

  render () {
    const {
      aspectRatioClass,
      baseClassName,
      children,
      className,
      title
    } = this.props
    const { theme } = this.state

    return (
      <div className={ `${ baseClassName } ${className}` }>
        <div className={ `${ baseClassName }__header` }>
          <h4 className={ `${ baseClassName }__title` }>{ title }</h4>
          <div className={ `${ baseClassName }__toolbar` }>
            <label>
              <select name="theme" value={ theme }
                onChange={ this.handleThemeChange }>
                <option value="sequential">Sequential</option>
                <option value="divergent">Divergent</option>
                <option value="qualitativeA">Qualitative A</option>
                <option value="qualitativeB">Qualitative B</option>
                <option value="grayscale">Grayscale</option>
              </select>
            </label>
          </div>
        </div>
        <div className={ `${baseClassName }__content ${ aspectRatioClass}` }>
          <div className="chart">
            { children && React.cloneElement(children, { theme } )}
          </div>
        </div>
      </div>
    )
  }
}
