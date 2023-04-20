import { VStack } from '@chakra-ui/react'
import Photo from './Photo'
import Number from './Number'
import Name from './Name'
import { useEffect, useState } from 'react'
import Footer from '../Footer'
import IfComponent from '../IfComponent'

const getCandidate = {
  name: 'Gustavo Villar',
  photo: {
    src: 'https://bit.ly/dan-abramov',
    alt: 'Dan'
  }
}

const Candidate = () => {
  const [numbers, setNumbers] = useState('')
  const [candidate, setCandidate] = useState<typeof getCandidate | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let timer: any
    if (numbers?.length === 2) {
      setIsLoading(true)
      setCandidate(getCandidate)
      timer = setTimeout(() => {
        setIsLoading(false)
      }, 800)
    } else {
      setCandidate(null)
    }
    return () => clearTimeout(timer)
  }, [numbers?.length])

  return (
    <>
      <VStack
        spacing={10}
        align='flex-start'
        mb={16}
      >
        <Photo photo={candidate?.photo} />
        <Number setNumber={setNumbers} />
        <IfComponent
          condition={!!candidate}
          component={<Name name={candidate?.name} />}
        />
      </VStack>
      <IfComponent
        condition={!!candidate}
        component={<Footer isLoading={isLoading} />}
      />
    </>
  )
}

export default Candidate
