import React, { Component } from 'react'

// Styles
import { styles } from './WindowsSettings.styles'

// Store
import { getStore } from '../../../../Store'

// UI
import { Username, P, ToggleSwitch } from '../../../../components'

// Packages
import withStyles, { WithStyles } from 'react-jss'
import classnames from 'classnames'
import { Config } from '../../../../config'

interface Props extends WithStyles<typeof styles> {
}

class _SmartStart extends Component<Props> {
  store = getStore()
  state = {
    value: Config.smartStartGPUThreshold
  }

  toggleSmartStart = () => {
    if (this.store.native.smartStart) {
      this.store.native.disableSmartStart()
      return
    }

    this.store.native.enableSmartStart()
  }

  handleSliderChange = (e: any) => {
    e.preventDefault()
    this.setState({ value: e.target.value })

    // this.props.sliderValue = this.state.value
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classnames(classes.container)}>
        <div className={classnames(classes.togglerSmartStart)}>
          <ToggleSwitch
            toggleId="smart-start"
            toggleLeft="Off"
            toggleRight="On"
            toggleClick={this.toggleSmartStart}
            toggleDefault={this.store.native.smartStart}
          />
        </div>
        <div className={classnames(classes.description)}>
          <Username blue>Smart Start</Username>
          <P>
            We could cause a diplomatic crisis. Take the ship into the Neutral Zone Mr. Worf, you do remember how to
            fire phasers? Your head is not an artifact!
          </P>

          {/* <Username blue>GPU Threshold - {sliderValue}%</Username>
          <P>Fate. It protects fools, little children, and ships named "Enterprise."</P>
          <Slider
            sliderId={'gpu-threshold'}
            sliderDefaultValue={Config.smartStartGPUThreshold.toString()}
            sliderValue={this.handleSliderChange}
          /> */}
        </div>
      </div>
    )
  }
}

export const SmartStart = withStyles(styles)(_SmartStart)
