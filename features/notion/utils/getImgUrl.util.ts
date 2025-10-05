import type { ExtendedImageBlockObjectResponse } from 'features/notion'

export const getImgUrl = (block: ExtendedImageBlockObjectResponse): string => {
  const imageProps = block
  return (imageProps.image.type === 'external' ? imageProps.image.external?.url : imageProps.image.file?.url) as string
}
