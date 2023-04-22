import { api } from '@/providers/axios'

type candidateParams = {
  number: string
}

type candidateResponse = Promise<
  | {
      number: number
      name: string
      photo: {
        src: string
        alt: string
      }
    }
  | {
      voto: string
    }
>

export const candidate = (data: candidateParams): candidateResponse => api.post('/candidates', data)
