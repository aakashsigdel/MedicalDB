import 'react-native'
import React from 'react'
import Search from '../../src/containers/Search'

import renderer from 'react-test-renderer'

it('should render <Search /> correctly', () => {
  const tree = renderer.create(
    <Search />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

