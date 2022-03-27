import backedBy1 from 'assets/supporters/backed1.png'
import backedBy2 from 'assets/supporters/backed2.png'
import backedBy3 from 'assets/supporters/backed3.png'
import backedBy4 from 'assets/supporters/backed4.png'
import backedBy5 from 'assets/supporters/backed5.png'
import backedBy6 from 'assets/supporters/backed6.png'
import backedBy7 from 'assets/supporters/backed7.png'
import backedBy8 from 'assets/supporters/backed8.png'
import backedBy9 from 'assets/supporters/backed9.png'

import supportedBy1 from 'assets/supporters/supported1.png'
import supportedBy2 from 'assets/supporters/supported2.png'
import supportedBy3 from 'assets/supporters/supported3.png'
import supportedBy4 from 'assets/supporters/supported4.png'
import supportedBy5 from 'assets/supporters/supported5.png'
import supportedBy6 from 'assets/supporters/supported6.png'
import supportedBy7 from 'assets/supporters/supported7.png'
import supportedBy8 from 'assets/supporters/supported8.png'
import supportedBy9 from 'assets/supporters/supported9.png'
import supportedBy10 from 'assets/supporters/supported10.png'

import supportedBy12 from 'assets/supporters/supported12.png'

import poweredBy1 from 'assets/supporters/powered1.png'
import poweredBy2 from 'assets/supporters/powered2.png'
import poweredBy3 from 'assets/supporters/powered3.png'
import poweredBy4 from 'assets/supporters/powered4.png'
import poweredBy5 from 'assets/supporters/powered5.png'
import poweredBy6 from 'assets/supporters/powered6.png'
import poweredBy7 from 'assets/supporters/powered7.png'

type PartnersType = {
  [key in 'backed' | 'supported' | 'powered']: { img: string; alt?: string; soon?: boolean }[]
}

const PartnersConfig: PartnersType = {
  backed: [
    { img: backedBy1, alt: 'blocksolfi' },
    { img: backedBy2, alt: 'dutch crypto investors' },
    { img: backedBy3, alt: 'a-crypto' },
    { img: backedBy4, alt: 'OneBlock Labs' },
    { img: backedBy5, alt: 'tccl ventures' },
    { img: backedBy6, alt: 'gem mouse' },
    { img: backedBy7, alt: 'crypto era' },
    { img: backedBy8 },
    { img: backedBy9 },
  ],
  supported: [
    { img: supportedBy1 },
    { img: supportedBy2, alt: 'coin sixty eight' },
    { img: supportedBy3, alt: 'blocksolfi' },
    { img: supportedBy4, alt: 'mads' },
    { img: supportedBy5 },
    { img: supportedBy6, alt: 'C' },
    { img: supportedBy7 },
    { img: supportedBy8 },
    { img: supportedBy9 },
    { img: supportedBy10 },
    { img: supportedBy12 },
  ],
  powered: [
    { img: poweredBy1, alt: 'polygon' },
    { img: poweredBy2, alt: 'binance' },
    { img: poweredBy3, alt: 'huobi' },
    { img: poweredBy4, soon: true, alt: 'polkadot' },
    { img: poweredBy5, soon: true, alt: 'near' },
    { img: poweredBy6, soon: true, alt: 'solana' },
    { img: poweredBy7, soon: true, alt: 'unknown' },
  ],
}

export default PartnersConfig
