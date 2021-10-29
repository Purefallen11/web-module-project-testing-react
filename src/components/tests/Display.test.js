import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Display from './../Display';
import userEvent from '@testing-library/user-event'

import mockFetchShow from '../../api/fetchShow'
jest.mock('../../api/fetchShow')

const testData = {
	name: test,
	summary: 'test test test',
	seasons: [
		{
			id: 0,
			name: 'seasons 1',
			episode: []
		},
		{
			id: 1,
			name: 'season 2',
			episode:[]
		},
		{
			id: 2,
			name: 'season 3',
			episode: []
		}
	]
}


test("render without errors", () => {
	render(<Display />)
})

test('')




///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.