import { api } from '@/providers/axios'

type registrationParams = {
  registration: string
}

type registrationResponse = Promise<{
  canVote: boolean
}>

export const validateRegistrationAPI = (data: registrationParams): registrationResponse =>
  api.post('/validateRegistration', data)
