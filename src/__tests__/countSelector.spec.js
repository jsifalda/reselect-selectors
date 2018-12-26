import countSelector from '../countSelector'

describe('countSelector', function() {
  it('returns length of the array', () => {
    const state = {
      prop: [1, 2, 3]
    }
    const selector = countSelector((s) => {
      return s.prop
    })
    const result = selector(state)
    expect(result).toBe(3)
  })
})
