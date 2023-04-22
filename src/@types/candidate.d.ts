export declare type Candidate = {
  number: number | undefined
  name: string | undefined
  photo:
    | {
        src: string
        alt: string
      }
    | undefined
  isValid: boolean
}
