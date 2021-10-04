import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect, useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import LoadingButton from '@mui/lab/LoadingButton'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

import { useQuote } from '../context/QuoteContext'

import Description from '../components/Description'
import Divider from '../components/Divider'
import Form from '../components/form/Form'

const Quote: NextPage = () => {
  const [asteroidCollisionCoverage, setAsteroidCollisionCoverage] = useState({})
  const [deductible, setDeductible] = useState({})
  const [hasChangedOptions, setHasChangedOptions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useQuote()
  const router = useRouter()

  useEffect(() => {
    if (!quote) {
      router.push('/rating')
    }

    setDeductible(quote?.variable_selections?.deductible)
    setAsteroidCollisionCoverage(quote?.variable_selections?.asteroid_collision)
  }, [quote, router])

  const handleDeductibleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeductible(event.target.value)
    setHasChangedOptions(true)
  }

  const handleAsteroidCollisionCoverageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAsteroidCollisionCoverage(event.target.value)
    setHasChangedOptions(true)
  }

  const updateQuote = async () => {
    const {
      quoteId,
      rating_address: {
        line_1, line_2, city, region, postal,
      },
      policy_holder: { first_name, last_name },
    } = quote

    setIsLoading(true)

    try {
      const response = await fetch(`https://fed-challenge-api.sure.now.sh/api/v1/quotes/${quoteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quote: {
            quoteId,
            rating_address: {
              line_1,
              line_2,
              city,
              region,
              postal,
            },
            policy_holder: {
              first_name,
              last_name,
            },
            variable_selections: {
              deductible,
              asteroid_collision: asteroidCollisionCoverage,
            },
          },
        }),
      }).then((r) => r.json())

      setQuote(response.quote)
      setHasChangedOptions(false)
      setIsLoading(false)
    } catch (error) {
      console.error(error) // eslint-disable-line
      setHasChangedOptions(false)
      setIsLoading(false)
    }
  }

  if (!quote) return null

  return (
    <>
      <Head>
        <title>Quote | Rocket Insurance</title>
        <meta name="description" content="Quote | Rocket Insurance" />
      </Head>

      <Typography variant="h4" gutterBottom align="center">
        Quote Overview
      </Typography>

      <Typography
        data-testid="test-premium"
        variant="h5"
        gutterBottom
        align="center"
        sx={{ marginBottom: '30px' }}
      >
        Premium: $
        {quote.premium}
      </Typography>

      <Form>
        <FormControl fullWidth>
          <InputLabel id="deductible-label">{quote.variable_options.deductible.title}</InputLabel>

          <Select
            data-testid="select-deductible"
            labelId="deductible-label"
            id="deductible"
            value={deductible}
            label="Deductible"
            onChange={(e: ChangeEvent<HTMLInputElement>): void => handleDeductibleChange(e)}
          >
            {quote.variable_options.deductible.values.map((value: number) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Description>{quote.variable_options.deductible.description}</Description>

        <Divider margin="35px 0 40px" />

        <FormControl fullWidth>
          <InputLabel id="deductible-label">
            {quote.variable_options.asteroid_collision.title}
          </InputLabel>

          <Select
            data-testid="select-asteroid"
            labelId="asteroid-collision-coverage-label"
            id="asteroid-collision-coverage"
            value={asteroidCollisionCoverage}
            label="Asteroid Collision Coverage"
            onChange={
              (e: ChangeEvent<HTMLInputElement>): void => handleAsteroidCollisionCoverageChange(e)
            }
          >
            {quote.variable_options.asteroid_collision.values.map((value: number) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Description margin="10px 0 20px">
          {quote.variable_options.asteroid_collision.description}
        </Description>

        {hasChangedOptions && (
          <LoadingButton
            data-testid="button-update-quote"
            loading={isLoading}
            type="submit"
            variant="contained"
            onClick={updateQuote}
          >
            Update Quote
          </LoadingButton>
        )}
      </Form>
    </>
  )
}

export default Quote
