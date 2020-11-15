import renderer from 'react-test-renderer'
import React from 'react'

import Date from '../components/date'

test('DateTest', () => {
  const component = renderer.create(<Date dateString='2020-01-01' />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
