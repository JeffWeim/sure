import Header from '../../components/Header'

describe('Header', () => {
  it('should render the correct icon', async () => {
    const { getByText } = await setupWithTheme(<Header />)

    expect(getByText(/🚀/i)).toBeInTheDocument()
  })
})
