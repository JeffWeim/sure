import {
  screen, act,
} from '@testing-library/react'

import Input from '../../../components/form/Input'

describe('Input', () => {
  it('should render the input', async () => {
    await act(async () => setupWithTheme(
      <Input
        testId="input-first-name"
        error={false}
        label="First Name"
        id="first_name"
        validations={{ required: true }}
        formState={{ errors: {} }}
        register={jest.fn()}
      />,
    ))

    const input = await screen.getByTestId('input-first-name')

    expect(input).toBeInTheDocument()
  })

  it('should render an error ', async () => {
    await act(async () => setupWithTheme(
      <Input
        testId="input-first-name"
        error
        label="First Name"
        id="first_name"
        validations={{ required: true }}
        formState={{ errors: { first_name: { type: 'required' } } }}
        register={jest.fn()}
      />,
    ))

    const input = await screen.getByTestId('input-first-name-error')

    expect(input).toBeInTheDocument()
  })
})
