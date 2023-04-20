import { HStack, Heading, PinInput, PinInputField } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type NumberProps = {
  setNumber: Dispatch<SetStateAction<string>>
}

const Number = ({ setNumber }: NumberProps) => {
  return (
    <HStack>
      <Heading fontSize='2xl'>Número:</Heading>
      <PinInput
        size='lg'
        placeholder=''
        onChange={(event) => setNumber(event)}
      >
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  )
}

export default Number
