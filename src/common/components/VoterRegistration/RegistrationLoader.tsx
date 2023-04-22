import { Flex, Spinner, Text } from '@chakra-ui/react'

const RegistrationLoader = () => {
  return (
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
  )
}

export default RegistrationLoader
