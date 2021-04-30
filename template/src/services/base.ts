import Axios from 'axios'
import { BASE_URL } from 'configs'
import { showMessage } from 'react-native-flash-message'

export interface ServiceParams {
  _limit?: number
  _sort?: string
  _start?: number
  _q?: string
  _name?: string
  _category?: string
  _barcode?: string
  _type?: string
  _timeFrom?: string
  _timeTo?: string
}

export default class BaseService<T> {
  protected baseURL = ''

  constructor() {
    this.baseURL = BASE_URL
  }

  getAll(): Promise<T[]> {
    return Axios.get(this.baseURL)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        showMessage({
          message: 'Error!',
          description: 'Check your Internet Connection!',
          type: 'danger',
        })
      })
  }
  getWithParams(params: ServiceParams): Promise<T[]> {
    return Axios.get(this.baseURL, {
      params: {
        ...params,
        _start: params._start ?? 0,
        _sort: params._sort ?? 'published_at:desc',
      },
    })
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
        showMessage({
          message: 'Error!',
          description: 'Check your Internet Connection!',
          type: 'danger',
        })
      })
  }

  getById(id: string): Promise<T> {
    return Axios.get(this.baseURL + `${id}/`)
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
        showMessage({
          message: 'Error!',
          description: 'Check your Internet Connection!',
          type: 'danger',
        })
      })
  }

  add(item: any): Promise<T> {
    return Axios.post(this.baseURL, item)
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
        showMessage({
          message: 'Error!',
          description: 'Check your Internet Connection!',
          type: 'danger',
        })
        return null
      })
  }

  update(id: string, item: any): Promise<T> {
    return Axios.put(this.baseURL + `${id}/`, item)
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
        showMessage({
          message: 'Error!',
          description: 'Check your Internet Connection!',
          type: 'danger',
        })
        return null
      })
  }

  delete(id: number): Promise<string> {
    return Axios.delete(this.baseURL + `${id}/`)
      .then(res => {
        console.log(res.status)
        return 'success'
      })
      .catch(err => {
        console.log(err)
        showMessage({
          message: 'Error!',
          description: 'Check your Internet Connection!',
          type: 'danger',
        })
        return 'error'
      })
  }
}
