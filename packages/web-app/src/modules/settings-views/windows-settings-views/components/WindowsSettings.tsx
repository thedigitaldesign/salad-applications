import React, { Component } from 'react'

// Styles
import { styles } from './WindowsSettings.styles'

// Store
import { getStore } from '../../../../Store'

// UI
import { CondensedHeader, Divider } from '../../../../components'
import { AutoLaunch, SmartStart } from '.'

// Packages
import withStyles, { WithStyles } from 'react-jss'
// import classnames from 'classnames'

interface Props extends WithStyles<typeof styles> {}

class _WindowsSettings extends Component<Props> {
  store = getStore()

  render() {
    const {  } = this.props

    return (
      <>
        <div className="header">
          <CondensedHeader>Settings</CondensedHeader>
        </div>
        <Divider />
        <AutoLaunch />
        <Divider />
        <SmartStart />
      </>
    )
  }
}

export const WindowsSettings = withStyles(styles)(_WindowsSettings)
