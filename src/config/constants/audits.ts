import farmingImg from 'assets/audits/farming.png'
import chainsulting from 'assets/audits/chainsulting.png'

export type AuditItem = {
  title: string
  href: string
}

export type Audit = {
  title: string
  href: string
  img: string
  date: string
  smallImg: string
  items: AuditItem[]
}

export const Audits: Audit[] = [
  {
    title: 'Gravis Farming contracts audits',
    href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/tree/master/Gravis%20Finance',
    date: 'October 20st, 2021',
    img: farmingImg,
    smallImg: chainsulting,
    items: [
      {
        title: 'Farm',
        href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Gravis%20Finance/02_Smart%20Contract%20Audit_GravisFinance_Farm.pdf',
      },
      {
        title: 'Gravis Chef',
        href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Gravis%20Finance/02_Smart%20Contract%20Audit_GravisFinance_GravisChef.pdf',
      },
    ],
  },
  {
    title: 'Gravis Farming contracts audits',
    href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/tree/master/Gravis%20Finance',
    date: 'October 20st, 2021',
    img: farmingImg,
    smallImg: chainsulting,
    items: [
      {
        title: 'Farm',
        href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Gravis%20Finance/02_Smart%20Contract%20Audit_GravisFinance_Farm.pdf',
      },
      {
        title: 'Gravis Chef',
        href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/Gravis%20Finance/02_Smart%20Contract%20Audit_GravisFinance_GravisChef.pdf',
      },
    ],
  },
]
