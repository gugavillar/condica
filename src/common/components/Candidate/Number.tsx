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
        <PinInputField
          fontSize='2rem'
          fontWeight='bold'
        />
        <PinInputField
          fontSize='2rem'
          fontWeight='bold'
        />
      </PinInput>
    </HStack>
  )
}

export default Number
