import {
  render, screen, waitFor,
} from '@testing-library/react'
import { useForm } from 'react-hook-form'

import Input from '../../../components/form/Input'

describe('Input', () => {
  it('should render the input', async () => {
    const Component = () => {
      const { control } = useForm()

      return (
        <Input
          testId="input-first-name"
          control={control}
          label="First Name"
          name="first_name"
          rules={{ required: true }}
        />
      )
    }

    render(<Component />)

    const input = await screen.getByTestId('input-first-name')

    expect(input).toBeInTheDocument()
  })

  it('should render an error ', async () => {
    const WrapperForm = () => {
      const {
        control,
        handleSubmit,
      } = useForm()

      const onSubmit = jest.fn()

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            label="First Name"
            name="first_name"
            rules={{ required: true }}
            testId="input-first-name"
          />

          <button data-testid="submit" type="submit">Submit</button>
        </form>
      )
    }

    await render(
      <WrapperForm />,
    )

    await waitFor(() => {
      const submit = screen.getByTestId('submit')
      submit.click()
    })

    const error = screen.getByTestId('input-first-name-error')

    expect(error).toBeInTheDocument()
  })
})
