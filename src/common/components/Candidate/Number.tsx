import { HStack, Heading, PinInput, PinInputField } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type NumberProps = {
  setNumber: Dispatch<SetStateAction<string>>
}

const Number = ({ setNumber }: NumberProps) => {
  const handleSetNumber = (value: string) => setNumber(value)

  return (
    <HStack>
      <Heading fontSize='2xl'>Número:</Heading>
      <PinInput
        size='lg'
        placeholder=''
        onChange={handleSetNumber}
        autoFocus
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
