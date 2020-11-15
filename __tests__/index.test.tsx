import renderer from 'react-test-renderer'
import React from 'react'

import App from '../pages/index'

test('AppTitle', () => {
  const component = renderer.create(
    <App
      allPostsData={[
        { date: '2020-01-01', title: 'test_title', id: 'test_id' },
      ]}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
