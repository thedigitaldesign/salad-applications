import React, { Component } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../../../SaladTheme'

const styles = (theme: SaladTheme) => ({

})

interface Props extends WithStyles<typeof styles> {

}

class _DownloadLatest extends Component<Props> {
  // const {} = this.props

  render() {
    return (
      <>
        
      </>
    )
  }
}

export const DownloadLatest = withStyles(styles)(_DownloadLatest)
