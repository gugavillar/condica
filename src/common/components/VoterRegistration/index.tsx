import { FormControl, FormHelperText, Input, Spinner, Flex, Text } from '@chakra-ui/react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useRouter } from 'next/router'

import { IfComponent } from '@/common/components'
import useErrorToast from '@/common/hooks/useErrorToast'

const VoterRegistration = () => {
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const invalidQuantityDigitsToast = useErrorToast('Quantidade de dígitos inválida')
  const voterHasAlreadyVoterToast = useErrorToast('Eleitor já votou. Procure o mesário para mais informações')

  const { push } = useRouter()

  const handleChangeRegistrationNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/
    if (event.target.value === '' || regex.test(event.target.value)) {
      setRegistrationNumber(event.target.value)
    }
  }

  const handleKeyPressEnter = (event: KeyboardEvent) => {
    if (registrationNumber?.length < 12 && event.key === 'Enter') return invalidQuantityDigitsToast()

    if (registrationNumber === '123456789000' && event.key === 'Enter') return voterHasAlreadyVoterToast()

    if (event.key === 'Enter' && registrationNumber?.length === 12) {
      setIsLoading(true)
      push('/votacao')
    }
  }

  return (
    <>
      <FormControl>
        <Input
          maxLength={12}
          height={14}
          fontSize='2rem'
          fontWeight='bold'
          value={registrationNumber}
          onChange={handleChangeRegistrationNumber}
          onKeyDown={handleKeyPressEnter}
          isDisabled={isLoading}
          _focusVisible={{
            borderColor: 'none'
          }}
        />
        <FormHelperText>Insira os 12 dígitos título de eleitor, e tecle enter</FormHelperText>
      </FormControl>
      <IfComponent
        condition={isLoading}
        component={
          <Flex
            mt={6}
            align='center'
            justify='center'
          >
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='lg'
            />
            <Text ml={4}>Validando...</Text>
          </Flex>
        }
      />
    </>
  )
}

export default VoterRegistration
