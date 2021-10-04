export type FormProps = {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
  onSubmit?: () => void
}
