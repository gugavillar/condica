import { FormControl, FormHelperText } from '@chakra-ui/react'

import { IfComponent } from '@/common/components'

import RegistrationInput from './RegistrationInput'
import RegistrationLoader from './RegistrationLoader'

type VoterRegistrationProps = {
  handleValidateRegistrationAPI: (registration: string) => Promise<boolean | undefined>
  isLoading: boolean
}

const VoterRegistration = ({ handleValidateRegistrationAPI, isLoading }: VoterRegistrationProps) => {
  return (
    <>
      <FormControl>
        <RegistrationInput
          handleValidateRegistrationAPI={handleValidateRegistrationAPI}
          isLoading={isLoading}
        />
        <FormHelperText>Insira os 12 dígitos título de eleitor, e tecle enter</FormHelperText>
      </FormControl>
      <IfComponent
        condition={isLoading}
        component={<RegistrationLoader />}
      />
    </>
  )
}

export default VoterRegistration
