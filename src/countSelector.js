const countSelector = (selector) => {
  return (state) => {
    return (selector(state) || []).length
  }
}

export default countSelector
