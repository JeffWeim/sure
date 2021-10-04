import Head from 'next/head'
import type { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'

import FormGroup from '@mui/material/FormGroup'
import LoadingButton from '@mui/lab/LoadingButton'
import Typography from '@mui/material/Typography'

import { useQuote } from '../context/QuoteContext'

import Divider from '../components/Divider'
import Form from '../components/form/Form'
import Input from '../components/form/Input'

import { IFormInput, TServerErrors } from '../types/rating'
import theme from '../theme'

const Rating: NextPage = () => {
  const [, setQuote] = useQuote()
  const [isLoading, setIsLoading] = useState(false)
  const [serverErrors, setServerErrors] = useState<TServerErrors>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const {
      city, first_name, last_name, line_1, line_2, postal, region,
    } = data

    setIsLoading(true)
    setServerErrors(null)

    try {
      const response = await fetch('https://fed-challenge-api.sure.now.sh/api/v1/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name,
          last_name,
          address: {
            line_1,
            line_2,
            city,
            region,
            postal,
          },
        }),
      }).then((r) => r.json())

      if (response?.errors?.address) {
        setServerErrors(response.errors)
      } else {
        setQuote(response.quote)
        router.push('/quote')
      }

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Rating Information | Rocket Insurance</title>
        <meta name="description" content="Rating Information | Rocket Insurance" />
      </Head>

      <Typography variant="h4" gutterBottom align="center">
        Rating Information
      </Typography>

      <Typography sx={{ padding: '20px 0 10px' }} paragraph align="center">
        To get started on your quote, please fill out the following information
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input
            testId="input-first-name"
            error={errors.first_name?.type === 'required'}
            label="First Name"
            id="first_name"
            validations={{ required: true }}
            formState={formState}
            register={register}
          />

          <Input
            testId="input-last-name"
            error={errors.last_name?.type === 'required'}
            label="Last Name"
            id="last_name"
            validations={{ required: true }}
            formState={formState}
            register={register}
          />
        </FormGroup>

        <Divider margin="10px 0 30px" />

        <FormGroup>
          <Input
            testId="input-address1"
            error={errors.line_1?.type === 'required'}
            label="Address 1"
            id="line_1"
            validations={{ required: true }}
            formState={formState}
            register={register}
          />

          <Input
            testId="input-address2"
            label="Address 2"
            id="line_2"
            formState={formState}
            register={register}
          />

          <Input
            testId="input-city"
            error={errors.city?.type === 'required'}
            label="City"
            id="city"
            validations={{ required: true }}
            formState={formState}
            register={register}
          />

          <Input
            testId="input-state"
            error={errors.region?.type === 'required'}
            label="State"
            id="region"
            validations={{ required: true }}
            formState={formState}
            register={register}
          />

          <Input
            testId="input-zip"
            error={errors.postal?.type === 'required' || serverErrors?.address?.postal === 'invalid_postal_code'}
            label="Zip"
            id="postal"
            validations={{ required: true }}
            formState={formState}
            register={register}
          />
        </FormGroup>

        {serverErrors && serverErrors?.address?.postal ? (
          <Typography data-testid="text-invalid-zip" sx={{ color: theme.palette.error.main, margin: '0 0 20px' }}>
            The zip code was not valid
          </Typography>
        ) : null}

        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          data-testid="rating-continue"
        >
          Continue
        </LoadingButton>
      </Form>
    </>
  )
}

export default Rating
