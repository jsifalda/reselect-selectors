import namespaceSelector from '../namespaceSelector'

describe('namespaceSelector util', function() {
  it('returns value on object prefixed by namespace', () => {
    const value = 'test'
    const state = {
      key: {
        another: value
      }
    }
    const result = namespaceSelector('key')('another')(state)
    expect(result).toBe(value)
  })
})
