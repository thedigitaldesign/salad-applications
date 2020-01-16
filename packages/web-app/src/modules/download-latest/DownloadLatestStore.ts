import { observable, action, flow } from 'mobx'
// import { Config } from '../../config'
// import { RootStore } from '../../Store'

// Packages
import { AxiosInstance } from 'axios'

// const yaml = require('js-yaml')
// const fs = require('fs')
// const semver = require('semver')

export class DownloadLatestStore {
  //-- Private
  // private checkVersionHeartbeat?: NodeJS.Timeout
  // private releasePath: string = 'https://salad-app-releases.s3.us-east-2.amazonaws.com/latest.yml'

  //-- Observables
  @observable
  public configVersion: string = ''

  @observable
  public awsVersion: string = ''

  @observable
  public showDownloadButton: boolean = false

  @observable
  public downloadPath: string = ''

  constructor(private readonly axios: AxiosInstance) {}

  //-- Actions
  // Hour Timer

  // Check Version - Set Show Update Button
  @action.bound
  checkVersion = flow(function*(this: DownloadLatestStore) {
    // https://salad-app-releases.s3.us-east-2.amazonaws.com/latest.yml
    // this.axios.get(this.releasePath).then((response) => {

    // })

    try {
      console.log('===== [[DownloadLatestStore] checkVersion] =====')

      // let file = yield this.axios.get('https://salad-app-releases.s3.us-east-2.amazonaws.com/latest.yml', { responseType: 'blob' })
      let file = yield this.axios.get('https://salad-app-releases.s3.us-east-2.amazonaws.com/latest.yml')

      console.log('===== [[DownloadLatestStore] checkVersion] file: ', file)

      // const doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'))

      // console.log('---- doc: ', doc)

      // console.log('===== [[DownloadLatestStore] checkVersion] =====')
      // const doc = yaml.safeLoad(fs.readFileSync(this.releasePath, 'utf8'))
      // console.log('---- doc: ', doc)

      // this.axios.get(this.releasePath)

      // this.axios.get(this.releasePath, { headers: { 'Content-Type': 'application/octet-stream' } }).then(response => {
      // this.axios.get('https://salad-app-releases.s3.us-east-2.amazonaws.com/latest.yml', { responseType: 'blob' }).then(response => {
      //   console.log('===== [[DownloadLatestStore] checkVersion] =====')
      //   console.log('===== [[DownloadLatestStore] checkVersion] response: ', response)

      //   const doc = yaml.safeLoad(fs.readFileSync(response, 'utf8'))

      //   console.log('---- doc: ', doc)
      // })
    } catch (error) {
      console.log('--- yaml error: ', error)
    }
  })

  // Set Download Path
  // https://salad-app-releases.s3.us-east-2.amazonaws.com/Salad Setup __.__.__.exe
}
