import React, { Component, ReactNode } from 'react'

// styles
import { styles } from './Running.styles'

// Assets
import image from '../../assets/Home - How it Works.svg'

// Components
import { OnboardingPage } from '../../../../components'
import { ListUnstyled, MiningStatus } from '../../../../components'
import { StartButton } from '../../../machine-views/components/StartButton'

// Packages
import withStyles, { WithStyles } from 'react-jss'
// import classnames from 'classnames'

interface Props extends WithStyles<typeof styles> {
  earningRatePerDay: number | undefined
  rewardsOverTime: number | undefined
  initializingStatus: boolean
  runningStatus: boolean
  earningStatus: boolean
}

class _Running extends Component<Props> {
  render() {
    const { initializingStatus, runningStatus, earningRatePerDay, rewardsOverTime, earningStatus } = this.props

    const list: ReactNode[] = [
      <MiningStatus
        label={'Initializing - First step! Salad is detecting your hashrate.'}
        completed={initializingStatus}
      />,
      <MiningStatus
        label={'Running - Salad detected a hashrate and is trying to submit a share.'}
        completed={runningStatus}
      />,
      <MiningStatus
        label={'Earning - Salad is successfully submitting shares. You should see your balance rising.'}
        completed={earningStatus}
      />,
    ]

    const LeftElements = (
      <>
        <ListUnstyled componentList={list} />
      </>
    )
    const RightElements = (
      <>
        <StartButton />
      </>
    )

    return (
      <OnboardingPage
        title={`How Running Salad Works`}
        image={image}
        leftContent={LeftElements}
        rightContent={RightElements}
        rightColumnWidth={'60%'}
        leftColumnPadding={'4rem 1rem 4rem 2rem'}
        rightColumnPadding={'4rem 2rem 4rem 1rem'}
        alignItems={'start'}
        display={'block'}
        onboardingHeader
        earningRatePerDay={earningRatePerDay}
        rewardsOverTime={rewardsOverTime}
        testingComplete={true}
        runningActive={true}
      ></OnboardingPage>
    )
  }
}

export const Running = withStyles(styles)(_Running)