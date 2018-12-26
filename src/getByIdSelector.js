import isObject from 'is-plain-object'
import { defaultMemoize } from 'reselect'
import idhash from 'idhash'

const hash = (key) => {
  return defaultMemoize((data) => {
    if (!isObject(data)) {
      data = idhash(data, key)
    }

    return data
  })
}

const getByIdSelector = (selector, key = 'id') => {
  return (state, { id }) => {
    let data = selector(state)
    return (hash(key)(data) || {})[id]
  }
}

export default getByIdSelector
