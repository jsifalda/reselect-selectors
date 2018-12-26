import isObject from 'is-plain-object'
import { defaultMemoize } from 'reselect'
import idhash from 'idhash'

const hash = defaultMemoize((data) => {
  if (!isObject(data)) {
    data = idhash(data)
  }
  return data
})

const getByIdSelector = (selector, key = 'id') => {
  return (state, { id }) => {
    let data = selector(state)
    return (hash(data, key) || {})[id]
  }
}

export default getByIdSelector
