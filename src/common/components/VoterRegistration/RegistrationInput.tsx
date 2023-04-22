import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Input } from '@chakra-ui/react'

import useErrorToast from '@/common/hooks/useErrorToast'

type RegistrationInputProps = {
  handleValidateRegistrationAPI: (registration: string) => Promise<boolean | void>
  isLoading: boolean
}

const RegistrationInput = ({ handleValidateRegistrationAPI, isLoading }: RegistrationInputProps) => {
  const [registrationNumber, setRegistrationNumber] = useState('')

  const invalidQuantityDigitsToast = useErrorToast('Quantidade de dígitos inválida')

  const handleChangeRegistrationNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/
    if (event.target.value === '' || regex.test(event.target.value)) {
      setRegistrationNumber(event.target.value)
    }
  }

  const handleKeyPressEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (registrationNumber?.length < 12) return invalidQuantityDigitsToast()
      if (registrationNumber?.length === 12) return await handleValidateRegistrationAPI(registrationNumber)
    }
  }

  return (
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
  )
}

export default RegistrationInput
