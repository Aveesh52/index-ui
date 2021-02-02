import { createContext } from 'react'
import BigNumber from 'utils/bignumber'

interface AirdropContextValues {
  deviceWidth?: string
  deviceHeight?: string
  isMobile?: boolean
  isTablet?: boolean
  isDesktop?: boolean
}

const AirdropContext = createContext<AirdropContextValues>({})

export default AirdropContext
