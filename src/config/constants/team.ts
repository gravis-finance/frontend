import testImage from 'assets/captains.png'

export enum TeamCategory {
  MANAGEMENT = 'management',
  SUPPORT = 'support',
  DEVELOPMENT = 'development',
  MARKETING = 'marketing',
  DESIGNERS = 'designers',
}

export type TeamMemberType = {
  name: string
  position: string
  category: TeamCategory
  image: string
}

export const teamMembers: TeamMemberType[] = [
  {
    name: 'Darth Andeddu',
    position: 'CEO',
    category: TeamCategory.MANAGEMENT,
    image: testImage,
  },
  {
    name: 'Darth Revan',
    position: 'CTO',
    category: TeamCategory.MANAGEMENT,
    image: testImage,
  },
  {
    name: 'Darth Zagreus',
    position: 'COO',
    category: TeamCategory.MANAGEMENT,
    image: testImage,
  },
  {
    name: 'Darth Anait',
    position: 'CMO',
    category: TeamCategory.MANAGEMENT,
    image: testImage,
  },
  {
    name: 'Darth Vidar',
    position: 'Lead Designer',
    category: TeamCategory.DESIGNERS,
    image: testImage,
  },
  {
    name: 'Darth Nihilus',
    position: 'Lead Frontend Developer',
    category: TeamCategory.DEVELOPMENT,
    image: testImage,
  },
  {
    name: 'Darth Viper',
    position: 'Lead Backend Developer',
    category: TeamCategory.DEVELOPMENT,
    image: testImage,
  },
  {
    name: 'Darth Arct',
    position: 'Lead Solidity Developer',
    category: TeamCategory.DEVELOPMENT,
    image: testImage,
  },
  {
    name: 'Darth Azard',
    position: 'Rust Developer',
    category: TeamCategory.DEVELOPMENT,
    image: testImage,
  },
  {
    name: 'Darth Glovoc',
    position: 'Lead QA',
    category: TeamCategory.DEVELOPMENT,
    image: testImage,
  },
]
