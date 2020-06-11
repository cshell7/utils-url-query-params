import { objectToQueryParamString } from './object-to-query-param-string'

describe('objectToQueryParamString', () => {
  it('Takes an object and turns it keys/values into a url query param string', () => {
    const paramsObject = {
      foo: 'bar',
      asdf: 'fdsa',
    }
    expect(objectToQueryParamString(paramsObject)).toBe('?foo=bar&asdf=fdsa')
  })
})
