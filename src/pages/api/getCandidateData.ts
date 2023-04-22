import { NextApiRequest, NextApiResponse } from 'next'

const getCandidate = [
  {
    number: 15,
    name: 'Gustavo Villar',
    photo: {
      src: 'https://bit.ly/dan-abramov',
      alt: 'Dan'
    },
    isValid: true
  },
  {
    number: 14,
    name: 'Teste 1',
    photo: {
      src: 'https://bit.ly/dan-abramov',
      alt: 'Dan'
    },
    isValid: true
  }
]

const invalidCandidate = {
  number: undefined,
  name: undefined,
  photo: undefined,
  isValid: false
}

const getCandidateData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { numbers } = req.body

    const candidate = getCandidate?.find((candidate) => String(candidate.number) === numbers)

    if (!!candidate) return res.status(200).json(candidate)

    if (!candidate) return res.status(200).json(invalidCandidate)
  } catch (error) {
    console.log(error)
  }
}

export default getCandidateData
