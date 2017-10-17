import React, { Component } from 'react'

import {
  INTERPOLATION_OPTIONS,
  THEME_OPTIONS,
  Selector
} from './index'

export default class AdvancedChartPanel extends Component {

  static defaultProps = {
    aspectRatioClass: 'a16_9',
    baseClassName: 'chart-panel',
    className: '',
    interpolation: 'natural',
    interpolationOptions: INTERPOLATION_OPTIONS,
    theme: 'sequential',
    themeOptions: THEME_OPTIONS,
    title: 'Chart Title',
    xField: 'x',
    xFieldOptions: ['x'],
    yFieldOptions: ['y1', 'y2', 'y3'],
    yFields: 'y1'
  }

  constructor (props) {
    super(props)

    this.state = {
      interpolation: props.interpolation,
      theme: props.theme,
      xField: props.xField,
      yFields: props.yFields
    }

    this.handleThemeChange = this.handleThemeChange.bind(this)
    this.handleInterpolationChange = this.handleInterpolationChange.bind(this)
    this.handleXFieldChange = this.handleXFieldChange.bind(this)
    this.handleYFieldsChange = this.handleYFieldsChange.bind(this)
  }

  handleThemeChange (event) {
    const { target: { value } } = event
    this.setState({ theme: value })
  }

  handleInterpolationChange (event) {
    const { target: { value } } = event
    this.setState({ interpolation: value })
  }

  handleXFieldChange (event) {
    const { target: { value } } = event
    this.setState({ xField: value })
  }

  handleYFieldsChange (event) {
    const { target: { value } } = event
    this.setState({ yFields: value })
  }

  render () {
    const {
      aspectRatioClass,
      baseClassName,
      children,
      className,
      interpolationOptions,
      themeOptions,
      title,
      xFieldOptions,
      yFieldOptions,
    } = this.props
    const {
      interpolation,
      theme,
      xField,
      yFields
    } = this.state

    return (
      <div className={ `${ baseClassName } ${className}` }>
        <div className={ `${ baseClassName }__header` }>
          <h4 className={ `${ baseClassName }__title` }>{ title }</h4>
          <div className={ `${ baseClassName }__toolbar` }>

            { xField && xFieldOptions &&
            <Selector title="Select xField"
              value={ xField }
              onChange={ this.handleXFieldChange }
              options={ xFieldOptions } /> }

            { yFields && yFieldOptions &&
            <Selector title="Select yFields"
              value={ yFields }
              onChange={ this.handleYFieldsChange }
              options={ yFieldOptions }
              multiple /> }

            { theme && themeOptions &&
            <Selector title="Select a theme"
              value={ theme }
              onChange={ this.handleThemeChange }
              options={ themeOptions } /> }

            { interpolation && interpolationOptions &&
            <Selector title="Select an interpolation"
              value={ interpolation }
              onChange={ this.handleInterpolationChange }
              options={ interpolationOptions } /> }

          </div>
        </div>
        <div className={ `${baseClassName }__content ${ aspectRatioClass}` }>
          <div className="chart">
            { children && React.cloneElement(children, { interpolation, theme, xField, yFields } )}
          </div>
        </div>
      </div>
    )
  }
}
