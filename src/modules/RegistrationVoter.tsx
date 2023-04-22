import { Box, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { VoterRegistration } from '@/common/components'
import { validateRegistrationAPI } from '@/services/registrations'
import useErrorToast from '@/common/hooks/useErrorToast'

const RegistrationVoter = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { push } = useRouter()
  const voterHasAlreadyVoterToast = useErrorToast('Eleitor já votou. Procure o mesário para mais informações')

  const handleValidateRegistrationAPI = async (registration: string) => {
    try {
      setIsLoading(true)

      const response = await validateRegistrationAPI({ registration: registration })

      if (!response.canVote) {
        voterHasAlreadyVoterToast()
        return setIsLoading(false)
      }

      setIsLoading(false)
      return push('/votacao')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      return
    }
  }

  return (
    <Box
      mx='auto'
      mt={40}
      maxW='50%'
    >
      <Heading
        as='h1'
        mb={8}
      >
        Insira o título de eleitor
      </Heading>
      <VoterRegistration
        isLoading={isLoading}
        handleValidateRegistrationAPI={handleValidateRegistrationAPI}
      />
    </Box>
  )
}

export default RegistrationVoter
