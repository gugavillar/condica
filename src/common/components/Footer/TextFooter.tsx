import { Heading, Text } from '@chakra-ui/react'
import { Fragment } from 'react'

const TextFooter = () => {
  return (
    <Fragment>
      <Text>Aperte a tecla:</Text>
      <Heading
        fontSize='md'
        marginLeft={4}
      >
        CONFIRMA para CONFIRMAR este voto
      </Heading>
      <Heading
        fontSize='md'
        marginLeft={4}
      >
        CORRIGE para REINICIAR este voto
      </Heading>
    </Fragment>
  )
}

export default TextFooter
