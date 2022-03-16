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
  backed: string[]
  supported: string[]
  powered: string[]
}

const PartnersConfig: PartnersType = {
  backed: [backedBy1, backedBy2, backedBy3, backedBy4, backedBy5, backedBy6, backedBy7, backedBy8, backedBy9],
  supported: [
    supportedBy1,
    supportedBy2,
    supportedBy3,
    supportedBy4,
    supportedBy5,
    supportedBy6,
    supportedBy7,
    supportedBy8,
    supportedBy9,
    supportedBy10,
    supportedBy12,
  ],
  powered: [poweredBy1, poweredBy2, poweredBy3, poweredBy4, poweredBy5, poweredBy6, poweredBy7],
}

export const comingSoonPartners: string[] = [poweredBy4, poweredBy5, poweredBy6, poweredBy7]

export default PartnersConfig
