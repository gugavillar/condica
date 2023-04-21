import { useToast } from '@chakra-ui/react'

type useErrorToastProps = string

const useErrorToast = (description: useErrorToastProps) => {
  return useToast({
    position: 'top-right',
    variant: 'top-accent',
    duration: 3000,
    status: 'error',
    description: description
  })
}

export default useErrorToast
