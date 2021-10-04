export interface IFormInput {
  first_name: String
  last_name: String
  line_1: String
  line_2: String
  city: String
  region: String
  postal: String
}

export type TServerErrors = {
  address: {
    postal: string
  }
}
