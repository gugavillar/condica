import { Heading, Text } from '@chakra-ui/react'
import { Fragment, memo } from 'react'

const TextFooter = memo(() => {
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
})

TextFooter.displayName = 'TextFooter'

export default TextFooter
