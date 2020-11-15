import renderer from 'react-test-renderer'
import React from 'react'

import Id from '../pages/posts/[id]'

test('IdTest', () => {
  const component = renderer.create(
    <Id
      postData={{
        title: 'test_title',
        date: '2020-01-01',
        contentHtml: '<h1>Hello</h1>',
      }}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
