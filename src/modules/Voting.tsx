import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Candidate } from '@/common/components'
import { Candidate as CandidateType } from '@/@types/candidate'
import { getCandidateDataAPI } from '@/services/candidates'

const Voting = () => {
  const [candidateData, setCandidateData] = useState<CandidateType>()
  const [isLoading, setIsLoading] = useState(false)

  const handleCandidateDataAPI = async (numbers: string) => {
    if (numbers?.length < 2) return
    try {
      setIsLoading(true)

      const response = await getCandidateDataAPI({ numbers: numbers })

      setCandidateData(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isLoading])

  return (
    <Box
      p={8}
      maxW='80%'
      marginRight='auto'
      marginLeft='auto'
    >
      <Candidate
        candidateData={candidateData}
        isLoading={isLoading}
        handleCandidateDataAPI={handleCandidateDataAPI}
      />
    </Box>
  )
}

export default Voting
