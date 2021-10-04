export type InputProps = {
  testId: string,
  error?: boolean,
  label: string,
  id: string,
  validations?: object,
  formState: {
    errors: {
      [id: string]: {
        type: string
      }
    }
  },
  register: (id: string, validations: object) => void // eslint-disable-line
}
