import { Heading, Box, Divider } from '@chakra-ui/react'

import TextFooter from './TextFooter'

type FooterProps = {
  isLoading: boolean
}

const Footer = ({ isLoading }: FooterProps) => {
  return (
    <Box>
      <Divider
        my={2}
        borderColor='black'
      />
      {isLoading ? <Heading textAlign='center'>CONFIRA SEU VOTO</Heading> : <TextFooter />}
    </Box>
  )
}

export default Footer
