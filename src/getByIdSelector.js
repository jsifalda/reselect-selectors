const getByIdSelector = (selector) => {
  return (state, { id }) => {
    return (selector(state) || {})[id]
  }
}

export default getByIdSelector
