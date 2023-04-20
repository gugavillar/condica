import { HStack, Heading, Text } from '@chakra-ui/react'

type NameProps = {
  name: string | undefined
}

const Name = ({ name }: NameProps) => {
  return (
    <HStack>
      <Heading fontSize='2xl'>Nome:</Heading>
      <Text fontSize='2xl'>{name}</Text>
    </HStack>
  )
}

export default Name
