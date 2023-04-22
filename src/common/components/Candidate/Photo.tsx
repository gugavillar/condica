import { Flex, Heading, Image, ImageProps } from '@chakra-ui/react'

import { IfComponent } from '@/common/components'

type PhotoProps = {
  photo: ImageProps | undefined
}

const Photo = ({ photo }: PhotoProps) => {
  return (
    <Flex
      align='center'
      justify='space-between'
      w='100%'
      height={160}
    >
      <Heading
        my={8}
        fontSize='3xl'
      >
        Conselheiro
      </Heading>
      <IfComponent
        condition={!!photo?.src}
        component={
          <Image
            boxSize={40}
            objectFit='cover'
            src={photo?.src}
            alt={photo?.alt}
          />
        }
      />
    </Flex>
  )
}

export default Photo
