import React, { Component } from 'react'

// Styles
import { styles } from './ToggleSwitch.styles'

// Packages
import withStyles, { WithStyles } from 'react-jss'
import classnames from 'classnames'

interface Props extends WithStyles<typeof styles> {
  toggleId: string
  toggleLeft?: string | 'Off'
  toggleRight?: string | 'On'
  toggleClick?: () => void
  disabled?: boolean
  toggleDefault: boolean
}

class _ToggleSwitch extends Component<Props> {
  render() {
    const { toggleId, toggleLeft, toggleRight, toggleClick, disabled, toggleDefault, classes } = this.props

    return (
      <>
        <input
          id={`${toggleId}-on`}
          className={classnames(classes.toggle, 'toggle-left', disabled && 'disabled')}
          name={toggleId}
          value="false"
          type="radio"
          defaultChecked={!toggleDefault}
          onClick={toggleClick}
          disabled={disabled}
        />
        <label htmlFor={`${toggleId}-on`} className={classnames(classes.btn, disabled && 'disabled')}>
          {toggleLeft}
        </label>
        <input
          id={`${toggleId}-off`}
          className={classnames(classes.toggle, 'toggle-right', disabled && 'disabled')}
          name={toggleId}
          value="true"
          type="radio"
          defaultChecked={toggleDefault}
          onClick={toggleClick}
          disabled={disabled}
        />
        <label htmlFor={`${toggleId}-off`} className={classnames(classes.btn, disabled && 'disabled')}>
          {toggleRight}
        </label>
      </>
    )
  }
}

export const ToggleSwitch = withStyles(styles)(_ToggleSwitch)
