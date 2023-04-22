import { VStack } from '@chakra-ui/react'

import { IfComponent, Footer } from '@/common/components'
import { Candidate } from '@/@types/candidate'

import Photo from './Photo'
import Number from './Number'
import Name from './Name'
import NullVote from './NullVote'

type CandidateProps = {
  candidateData: Candidate | undefined
  isLoading: boolean
  handleCandidateDataAPI: (numbers: string) => Promise<void>
}

const Candidate = ({ candidateData, isLoading, handleCandidateDataAPI }: CandidateProps) => {
  return (
    <>
      <VStack
        spacing={10}
        align='flex-start'
        {...(!!candidateData?.name && { mb: 16 })}
      >
        <Photo photo={candidateData?.photo} />
        <Number handleCandidateDataAPI={handleCandidateDataAPI} />
        <IfComponent
          condition={!!candidateData?.name}
          component={<Name name={candidateData?.name} />}
        />
      </VStack>
      <IfComponent
        condition={!candidateData?.isValid}
        component={<NullVote />}
      />
      <IfComponent
        condition={!!candidateData}
        component={<Footer isLoading={isLoading} />}
      />
    </>
  )
}

export default Candidate
