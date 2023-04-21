import { Box } from '@chakra-ui/react'

import { Candidate } from '@/common/components'

const Voting = () => {
  return (
    <Box
      p={8}
      maxW='80%'
      marginRight='auto'
      marginLeft='auto'
    >
      <Candidate />
    </Box>
  )
}

export default Voting
