import {
  screen, render,
} from '@testing-library/react'

import Form from '../../../components/form/Form'

describe('Form', () => {
  it('should render form children', async () => {
    await render(
      <Form>
        <input data-testid="input" type="text" placeholder="" />
      </Form>,
    )

    const input = screen.getByTestId('input')

    expect(input).toBeInTheDocument()
  })

  it('should call the onSubmit handler when the form is submitted', async () => {
    const mockOnSubmit = jest.fn((e) => e.preventDefault())
    await render(
      <Form onSubmit={mockOnSubmit}>
        <input data-testid="input" type="text" placeholder="" />

        <button data-testid="submit" type="submit">Submit</button>
      </Form>,
    )

    const submit = screen.getByTestId('submit')

    submit.click()

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })
})
