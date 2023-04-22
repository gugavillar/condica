import { NextApiRequest, NextApiResponse } from 'next'

const getCandidate = [
  {
    number: 15,
    name: 'Gustavo Villar',
    photo: {
      src: 'https://bit.ly/dan-abramov',
      alt: 'Dan'
    }
  },
  {
    number: 14,
    name: 'Teste 1',
    photo: {
      src: 'https://bit.ly/dan-abramov',
      alt: 'Dan'
    }
  }
]

const validateVote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { number } = req.body
    const candidate = getCandidate?.find((candidate) => String(candidate.number) === number)
    if (!!candidate) return res.status(200).json(candidate)
    if (!candidate) return res.status(200).json({ voto: 'nulo' })
  } catch (error) {
    console.log(error)
  }
}

export default validateVote
