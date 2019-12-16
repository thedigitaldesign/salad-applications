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

interface Props extends WithStyles<typeof styles> {}

class _AutoLaunch extends Component<Props> {
  store = getStore()

  toggleAutoLaunch = () => {
    if (this.store.native.autoLaunch) {
      this.store.native.disableAutoLaunch()
      return
    }

    this.store.native.enableAutoLaunch()
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classnames(classes.container)}>
        <div className={classnames(classes.togglerAutoLaunch)}>
          <ToggleSwitch
            toggleId="auto-launch"
            toggleLeft="Off"
            toggleRight="On"
            toggleClick={this.toggleAutoLaunch}
            toggleDefault={this.store.native.autoLaunch}
          />
        </div>
        <div className={classnames(classes.description)}>
          <Username blue>Auto Launch</Username>
          <P>
            Auto Launch opens Salad once you log into Windows, getting the Kitchen warmed up for when you're ready to
            start chopping.
          </P>
        </div>
      </div>
    )
  }
}

export const AutoLaunch = withStyles(styles)(_AutoLaunch)
