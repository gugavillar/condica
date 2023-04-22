import { HStack, Heading, PinInput, PinInputField } from '@chakra-ui/react'
import { useState } from 'react'

type NumberProps = {
  handleCandidateDataAPI: (numbers: string) => Promise<void>
}

const Number = ({ handleCandidateDataAPI }: NumberProps) => {
  const [numbers, setNumbers] = useState('')

  const handleSetNumber = async (value: string) => {
    setNumbers(value)
    if (value?.length === 2) return await handleCandidateDataAPI(value)
  }

  return (
    <HStack>
      <Heading fontSize='2xl'>Número:</Heading>
      <PinInput
        size='lg'
        placeholder=''
        onChange={handleSetNumber}
        autoFocus
        value={numbers}
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
