type IfComponentProps = {
  component: JSX.Element
  condition: boolean
}

const IfComponent = ({ component, condition }: IfComponentProps) => (condition ? component : null)

export default IfComponent
