import { connect } from '../../connect'
import { RootStore } from '../../Store'
import { Settings } from './components'
import { Config } from '../../config'

const handleSettingsMenuClick = (store: RootStore, url: string) => {
  store.routing.push(url)
}

const mapStoreToProps = (store: RootStore) => {
  type LinkList = { url: string; text: string }
  const menuItems: LinkList[] = [
    { url: '/settings/account', text: 'Account' },
    { url: '/settings/referrals', text: 'Referrals' },
    { url: '/settings/windows-settings', text: 'Settings' },
  ]

  return {
    onCloseClicked: () => store.ui.hideModal(),
    onCloseKeyPress: () => store.ui.hideModal(),
    onListItemClick: (url: string) => handleSettingsMenuClick(store, url),
    onSendBug: store.ui.openCanny,
    menuItems: menuItems,
    appVersion: store.native.desktopVersion,
    appBuild: Config.appBuild,
    onSendLog: store.native.sendLog,
  }
}

export const SettingsContainer = connect(
  mapStoreToProps,
  Settings,
)
