import { Candidate } from '@/@types/candidate'
import { api } from '@/providers/axios'

type candidateParams = {
  numbers: string
}

type candidateResponse = Promise<Candidate>

export const getCandidateDataAPI = (data: candidateParams): candidateResponse => api.post('/getCandidateData', data)
