import { helloWorld } from '../pages/api/hello'

describe('hello.tsx Functions TestCases', () => {
  it('should return Hello, World!', () => {
    const result = helloWorld('World!')
    const expected = 'Hello, World!'

    expect(result).toStrictEqual(expected)
  })
})
