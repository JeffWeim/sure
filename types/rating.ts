export type FormValues = {
  first_name: string
  last_name: string
  line_1: string
  line_2: string
  city: string
  region: string
  postal: string
}

export type TServerErrors = {
  address: {
    postal: string
  }
}
