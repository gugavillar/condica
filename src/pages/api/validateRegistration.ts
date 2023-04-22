import { NextApiRequest, NextApiResponse } from 'next'

const registrationNumber = '123456789000'

const validateRegistration = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { registration } = req.body

    if (registrationNumber === registration) {
      return res.status(200).json({ canVote: false })
    }

    return res.status(200).json({ canVote: true })
  } catch (error) {
    console.log(error)
  }
}

export default validateRegistration
