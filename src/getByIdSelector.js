const getByIdSelector = (selector, key = 'id') => {
  return (state, { [key]: id }) => {
    return (selector(state) || {})[id]
  }
}

export default getByIdSelector
