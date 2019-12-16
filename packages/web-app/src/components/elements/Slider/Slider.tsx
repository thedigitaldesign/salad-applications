import React, { Component } from 'react'

// Styles
import { styles } from './Slider.styles'

// Packages
import withStyles, { WithStyles } from 'react-jss'
// import classnames from 'classnames'

interface Props extends WithStyles<typeof styles> {
  sliderId: string
  sliderMin?: string | '1'
  sliderMax?: string | '100'
  sliderDefaultValue: string | '50'
  // sliderValue: (e) => void
  disabled?: boolean
}

class _Slider extends Component<Props> {
  // state = {
  //   value: this.props.sliderValue
  // }

  // handleChange = (e: any) => {
  //   e.preventDefault()
  //   this.setState({value: e.target.value})

  //   this.props.sliderValue = this.state.value
  // }

  render() {
    const { sliderId, sliderMin, sliderMax, disabled, sliderDefaultValue, classes } = this.props

    return (
      <div className={classes.slideContainer}>
        <input
          id={sliderId}
          type="range"
          step="5"
          min={sliderMin}
          max={sliderMax}
          defaultValue={sliderDefaultValue}
          className={classes.slider}
          disabled={disabled}
          // value={this.state.value}
          // onChange={(e) => sliderValue(e)}
        />
        <span></span>
      </div>
    )
  }
}

export const Slider = withStyles(styles)(_Slider)
