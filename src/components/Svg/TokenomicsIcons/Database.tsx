import React from 'react'

import { SvgProps } from '@gravis.finance/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.94922 3.01313C1.94922 2.7836 2.1082 2.44768 2.63951 2.1289C3.15588 1.81907 3.91767 1.60313 4.79922 1.60313C5.68077 1.60313 6.44255 1.81907 6.95893 2.1289C7.49024 2.44768 7.64922 2.7836 7.64922 3.01313C7.64922 3.24265 7.49024 3.57857 6.95893 3.89736C6.44255 4.20718 5.68077 4.42313 4.79922 4.42313C3.91767 4.42313 3.15588 4.20718 2.63951 3.89736C2.1082 3.57857 1.94922 3.24265 1.94922 3.01313ZM4.79922 0.103127C3.69255 0.103127 2.65433 0.370717 1.86776 0.842656C1.09613 1.30564 0.449219 2.04971 0.449219 3.01313C0.449219 3.08688 0.45301 3.15935 0.460358 3.2305C0.453036 3.27257 0.449219 3.31584 0.449219 3.36V7.68C0.449219 8.64318 1.09624 9.38722 1.86773 9.85021C2.65427 10.3222 3.69248 10.59 4.79922 10.59C5.90581 10.59 6.94403 10.3225 7.73062 9.85062C7.90651 9.7451 8.07591 9.62497 8.23266 9.49097L11.2006 12.4589L8.67933 14.9799C8.42627 14.6459 8.09216 14.3674 7.73067 14.1505C6.94411 13.6785 5.90589 13.4109 4.79922 13.4109C3.69255 13.4109 2.65433 13.6785 1.86776 14.1505C1.097 14.6129 0.450693 15.3558 0.449221 16.3176L0.449219 16.32V16.3209V20.64C0.449219 21.6032 1.09624 22.3472 1.86773 22.8102C2.65427 23.2822 3.69248 23.55 4.79922 23.55C5.90581 23.55 6.94403 23.2825 7.73062 22.8106C8.50233 22.3477 9.14922 21.6036 9.14922 20.64V16.6312L12.2613 13.5196L14.859 16.1173C14.8526 16.183 14.8493 16.2498 14.8492 16.3176L14.8492 16.32V16.3209V20.64C14.8492 21.6032 15.4962 22.3472 16.2677 22.8102C17.0543 23.2822 18.0925 23.55 19.1992 23.55C20.306 23.55 21.3442 23.2822 22.1307 22.8102C22.9022 22.3472 23.5492 21.6032 23.5492 20.64V16.3209C23.5492 15.3575 22.9023 14.6135 22.1307 14.1505C21.3441 13.6785 20.3059 13.4109 19.1992 13.4109C18.0925 13.4109 17.0543 13.6785 16.2678 14.1505C16.0127 14.3035 15.7713 14.4872 15.5624 14.6994L13.322 12.459L16.0629 9.71844C16.1299 9.76461 16.1983 9.80855 16.2677 9.85021C17.0543 10.3222 18.0925 10.59 19.1992 10.59C20.306 10.59 21.3442 10.3222 22.1307 9.85021C22.9022 9.38722 23.5492 8.64318 23.5492 7.68V3.36094C23.5492 2.39753 22.9023 1.65345 22.1307 1.19047C21.3441 0.718529 20.3059 0.450939 19.1992 0.450939C18.0925 0.450939 17.0543 0.718529 16.2678 1.19047C15.497 1.65292 14.8507 2.39583 14.8492 3.35765L14.8492 3.36V3.36094V7.68C14.8492 8.01367 14.9269 8.32105 15.0604 8.59955L12.2613 11.3983L9.07969 8.21669C9.12476 8.04639 9.14922 7.86735 9.14922 7.68V3.36C9.14922 3.31584 9.1454 3.27257 9.13808 3.2305C9.14543 3.15935 9.14922 3.08688 9.14922 3.01313C9.14922 2.04971 8.50231 1.30564 7.73067 0.842656C6.94411 0.370717 5.90589 0.103127 4.79922 0.103127ZM7.64922 16.3209C7.64922 16.0914 7.49024 15.7555 6.95893 15.4367C6.44255 15.1269 5.68077 14.9109 4.79922 14.9109C3.91767 14.9109 3.15588 15.1269 2.63951 15.4367C2.1082 15.7555 1.94922 16.0914 1.94922 16.3209C1.94922 16.5505 2.1082 16.8864 2.63951 17.2052C3.15588 17.515 3.91767 17.7309 4.79922 17.7309C5.68077 17.7309 6.44255 17.515 6.95893 17.2052C7.49024 16.8864 7.64922 16.5505 7.64922 16.3209ZM7.53714 8.03695C7.54383 8.02463 7.55088 8.01245 7.55831 8.00044C7.62353 7.88181 7.64922 7.77233 7.64922 7.68V5.23123C6.87312 5.6735 5.8681 5.92313 4.79922 5.92313C3.73034 5.92313 2.72532 5.6735 1.94922 5.23123V7.68C1.94922 7.90914 2.10812 8.2451 2.63958 8.56403C3.15601 8.87395 3.91779 9.09 4.79922 9.09C5.68079 9.09 6.44257 8.87412 6.95894 8.56434C7.25493 8.38677 7.43537 8.20386 7.53714 8.03695ZM1.94922 18.539V20.64C1.94922 20.8691 2.10812 21.2051 2.63958 21.524C3.15601 21.8339 3.91779 22.05 4.79922 22.05C5.68079 22.05 6.44257 21.8341 6.95894 21.5243C7.49019 21.2056 7.64922 20.8697 7.64922 20.64V18.539C6.87312 18.9813 5.8681 19.2309 4.79922 19.2309C3.73034 19.2309 2.72532 18.9813 1.94922 18.539ZM17.0395 2.47671C16.5082 2.79549 16.3492 3.13142 16.3492 3.36094C16.3492 3.59046 16.5082 3.92639 17.0395 4.24517C17.5559 4.555 18.3177 4.77094 19.1992 4.77094C20.0808 4.77094 20.8426 4.555 21.3589 4.24517C21.8902 3.92639 22.0492 3.59046 22.0492 3.36094C22.0492 3.13142 21.8902 2.79549 21.3589 2.47671C20.8426 2.16688 20.0808 1.95094 19.1992 1.95094C18.3177 1.95094 17.5559 2.16688 17.0395 2.47671ZM16.3492 5.57904V7.68C16.3492 7.90914 16.5081 8.2451 17.0396 8.56403C17.556 8.87395 18.3178 9.09 19.1992 9.09C20.0806 9.09 20.8424 8.87395 21.3589 8.56403C21.8903 8.2451 22.0492 7.90914 22.0492 7.68V5.57904C21.2731 6.02131 20.2681 6.27094 19.1992 6.27094C18.1303 6.27094 17.1253 6.02131 16.3492 5.57904ZM17.0395 15.4367C16.5082 15.7555 16.3492 16.0914 16.3492 16.3209C16.3492 16.5505 16.5082 16.8864 17.0395 17.2052C17.5559 17.515 18.3177 17.7309 19.1992 17.7309C20.0808 17.7309 20.8426 17.515 21.3589 17.2052C21.8902 16.8864 22.0492 16.5505 22.0492 16.3209C22.0492 16.0914 21.8902 15.7555 21.3589 15.4367C20.8426 15.1269 20.0808 14.9109 19.1992 14.9109C18.3177 14.9109 17.5559 15.1269 17.0395 15.4367ZM16.3492 18.539V20.64C16.3492 20.8691 16.5081 21.2051 17.0396 21.524C17.556 21.8339 18.3178 22.05 19.1992 22.05C20.0806 22.05 20.8424 21.8339 21.3589 21.524C21.8903 21.2051 22.0492 20.8691 22.0492 20.64V18.539C21.2731 18.9813 20.2681 19.2309 19.1992 19.2309C18.1303 19.2309 17.1253 18.9813 16.3492 18.539Z"
        fill="white"
      />
    </svg>
  )
}

export default Icon
