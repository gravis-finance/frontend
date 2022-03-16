import andeddu from 'assets/team/Avatar=Avatar11.png'
import zagreus from 'assets/team/Avatar=Avatar12.png'
import revan from 'assets/team/Avatar=Avatar9.png'
import anait from 'assets/team/Avatar=Avatar1.png'
import mac from 'assets/team/Avatar=Avatar17.png'
import nihilus from 'assets/team/Avatar=Avatar3.png'
import viper from 'assets/team/Avatar=Avatar4.png'
import arct from 'assets/team/Avatar=Avatar5.png'
import glovoc from 'assets/team/Avatar=Avatar6.png'
import orochi from 'assets/team/Avatar=Avatar7.png'
import cage from 'assets/team/Avatar=Avatar8.png'
import shadow from 'assets/team/Avatar=Avatar16.png'
import lumen from 'assets/team/Avatar=Avatar10.png'
import klobac from 'assets/team/Avatar=Avatar2.png'
import spider from 'assets/team/Avatar=Avatar19.png'
import sun from 'assets/team/Avatar=Avatar13.png'
import udva from 'assets/team/Avatar=Avatar14.png'
import pa from 'assets/team/Avatar=Avatar18.png'
import syro from 'assets/team/Avatar=Avatar20.png'

export enum TeamCategory {
  MANAGEMENT = 'management',
  DEVELOPMENT = 'development',
  MARKETING = 'marketing',
  DESIGNERS = 'designers',
}

export type TeamMemberType = {
  name: string
  position: string
  category: TeamCategory
  image: string
  id: number
}

export const teamMembers: TeamMemberType[] = [
  {
    name: 'Darth Andeddu',
    position: 'Founder',
    category: TeamCategory.MANAGEMENT,
    image: andeddu,
  },
  {
    name: 'Darth Zagreus',
    position: 'Project Manager',
    category: TeamCategory.MANAGEMENT,
    image: zagreus,
  },
  {
    name: 'Darth Revan',
    position: 'Dev Lead',
    category: TeamCategory.MANAGEMENT,
    image: revan,
  },
  {
    name: 'Darth Anait',
    position: 'CMO',
    category: TeamCategory.MANAGEMENT,
    image: anait,
  },
  {
    name: 'Darth Mac',
    position: 'Lead Designer',
    category: TeamCategory.DESIGNERS,
    image: mac,
  },
  {
    name: 'Darth Nihilus',
    position: 'Lead Frontend Developer',
    category: TeamCategory.DEVELOPMENT,
    image: nihilus,
  },
  {
    name: 'Darth Viper',
    position: 'Lead Backend Developer',
    category: TeamCategory.DEVELOPMENT,
    image: viper,
  },
  {
    name: 'Darth Arct',
    position: 'Lead Solidity Developer',
    category: TeamCategory.DEVELOPMENT,
    image: arct,
  },
  {
    name: 'Darth Glovoc',
    position: 'Rust Developer',
    category: TeamCategory.DEVELOPMENT,
    image: glovoc,
  },
  {
    name: 'Darth Orochi',
    position: 'Lead QA',
    category: TeamCategory.DEVELOPMENT,
    image: orochi,
  },
  {
    name: 'Darth Cage',
    position: 'Solidity Developer',
    category: TeamCategory.DEVELOPMENT,
    image: cage,
  },
  {
    name: 'Darth Shadow',
    position: 'Frontend Developer',
    category: TeamCategory.DEVELOPMENT,
    image: shadow,
  },
  {
    name: 'Darth Lumen',
    position: 'Frontend Developer',
    category: TeamCategory.DEVELOPMENT,
    image: lumen,
  },
  {
    name: 'Darth Klobac',
    position: 'QA',
    category: TeamCategory.DEVELOPMENT,
    image: klobac,
  },
  {
    name: 'Darth Spider',
    position: 'Business Developer',
    category: TeamCategory.MARKETING,
    image: spider,
  },
  {
    name: 'Darth Sun',
    position: 'SMM Lead',
    category: TeamCategory.MARKETING,
    image: sun,
  },
  {
    name: 'Darth Udva',
    position: 'HR',
    category: TeamCategory.MANAGEMENT,
    image: udva,
  },
  {
    name: 'Darth Pa',
    position: 'SMM',
    category: TeamCategory.MARKETING,
    image: pa,
  },
  {
    name: 'Darth Syro',
    position: 'Partnership Developer',
    category: TeamCategory.MARKETING,
    image: syro,
  },
].map((item, i) => ({ ...item, id: i }))
