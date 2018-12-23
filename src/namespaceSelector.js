import selector from './selector'

const namespaceSelector = (namespace) => {
  return (key) => {
    return selector(`${namespace}.${key}`)
  }
}

export default namespaceSelector
