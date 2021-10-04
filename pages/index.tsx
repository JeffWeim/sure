import Button from '@mui/material/Button'
import Head from 'next/head'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rocket Insurance</title>
      <meta name="description" content="Rocket Insurance" />
    </Head>

    <Typography data-testid="headline" variant="h4" gutterBottom align="center">
      Rocket Insurance
    </Typography>

    <Typography data-testid="subtext" sx={{ margin: '0 0 30px' }} align="center">
      Click below to get started on your quote
    </Typography>

    <Link href="/rating" passHref>
      <Button
        data-testid="get-started"
        fullWidth
        href="/rating"
        variant="contained"
      >
        Get Started
      </Button>
    </Link>
  </>
)

export default Home
