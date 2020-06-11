import { parseQueryString } from './parse-query-string'

describe('objectToQueryParamString', () => {
  it('Takes a url and parse the query params into an object', () => {
    const url = 'https://www.rickrolled.com?this-is-still-a-thing=yes&year=2020'
    expect(parseQueryString(url)).toEqual({ 'this-is-still-a-thing': 'yes', year: '2020' })
  })
})
