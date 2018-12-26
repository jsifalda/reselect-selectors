import selector from '../selector'

describe('selector util', function() {
  it('returns value from object based on key path', () => {
    const value = 'test'
    const state = {
      key: {
        property: value
      }
    }
    const result = selector('key.property')(state)
    expect(result).toBe(value)
  })

  it('returns undefined value because property does not exists on object', () => {
    const state = {}
    const result = selector('key.property')(state)
    expect(result).toBe(undefined)
  })
})
