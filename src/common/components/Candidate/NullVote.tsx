import { Box, Text, Heading } from '@chakra-ui/react'

const NullVote = () => {
  return (
    <Box
      width='full'
      mt={8}
    >
      <Text
        fontSize='2xl'
        mb={4}
      >
        NÚMERO ERRADO
      </Text>
      <Heading
        textAlign='center'
        size='3xl'
        mb={6}
      >
        VOTO NULO
      </Heading>
    </Box>
  )
}

export default NullVote
