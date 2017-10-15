import React, { Component } from 'react'

import ColorSchemeSelector from 'common/ColorSchemeSelector'
import InterpolationSelector from './InterpolationSelector'

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
    console.log( 'Set interpolation', value)
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
            <ColorSchemeSelector value={ theme } onChange={ this.handleThemeChange } />
            <InterpolationSelector value={ interpolation } onChange={ this.handleInterpolationChange } />
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
