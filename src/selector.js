import get from 'lodash.get'

const selector = (key) => {
  return (state) => {
    return get(state, key)
  }
}

export default selector
