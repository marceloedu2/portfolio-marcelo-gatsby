import { generateMedia, pxToRem } from 'styled-media-query'

const config = pxToRem({
  xxl: '1920px',
  lg: '1600px',
  md: '1024px',
  sm: '768px',
  sm1: '640px',
  xs: '414px'
})

const media = generateMedia(config)

export default media