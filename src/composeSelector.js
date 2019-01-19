const composeSelector = (selectors, selector) => {
  return (...args) => {
    return selector(
      ...(selectors || []).map((s) => {
        return s(...args)
      })
    )
  }
}

export default composeSelector
