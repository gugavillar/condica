import { Box, Heading } from '@chakra-ui/react'

import { VoterRegistration } from '@/common/components'

const RegistrationVoter = () => {
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
      <VoterRegistration />
    </Box>
  )
}

export default RegistrationVoter
