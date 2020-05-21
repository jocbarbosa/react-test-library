import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import Todo from './Todo';

describe('Tests from Todo component', () => {
    it('Should add new task when form is submitted', async () => {
        const { getByTestId, getByText } = render(<Todo />);
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        );

        const newTask = 'testing';
        fireEvent.change(
            fieldNode,
            { target: { value: newTask } }
        );

        expect(fieldNode.value).toEqual('testing');

        const btNode = await waitForElement(
            () => getByTestId('form-btn')
        )
        fireEvent.click(btNode);

        const tdNode = await waitForElement(
            () => getByText(newTask)
        )

        expect(tdNode).toBeDefined();

        // Render a component
        // Search an input
        // Type an information on input
        // Search the button
        // Click in the button
        // Search on table
        // Check if task was added on table
    });
});