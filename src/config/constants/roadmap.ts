export type RoadmapProjectItem = {
  text: string
  done?: boolean
}

export type RoadmapProject = {
  title: string
  color: string
  items: RoadmapProjectItem[]
}

export type RoadmapType = {
  period: string
  start?: boolean
  projects: RoadmapProject[]
}

export const roadmapConfig: RoadmapType[] = [
  {
    period: 'Q2 2021',
    projects: [
      {
        title: 'Gswap Project Start',
        color: '#70DD75',
        items: [
          {
            text: 'First Drone mission, Drone upgrades',
            done: true,
          },
          {
            text: 'New Evervoid trailer',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q3 2021',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First Drone mission, Drone upgrades',
            done: true,
          },
          {
            text: 'New Evervoid trailer',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q4 2021',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First Drone mission, Drone upgrades',
          },
          {
            text: 'New Evervoid trailer',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q1 2022',
    start: true,
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First Drone mission, Drone upgrades',
          },
          {
            text: 'New Evervoid trailer',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q2 2022',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First mission for First Mates',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale\n',
          },
          {
            text: 'Browser version UX and UI improvements',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q3 2022',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First mission for First Mates',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale\n',
          },
          {
            text: 'Browser version UX and UI improvements',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q4 2022',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First mission for First Mates',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale\n',
          },
          {
            text: 'Browser version UX and UI improvements',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q1 2023',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First mission for First Mates',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale\n',
          },
          {
            text: 'Browser version UX and UI improvements',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q2 2023',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First mission for First Mates',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale\n',
          },
          {
            text: 'Browser version UX and UI improvements',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
  {
    period: 'Q3 2023',
    projects: [
      {
        title: 'Evervoid',
        color: '#70DD75',
        items: [
          {
            text: 'First mission for First Mates',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Second Drone mission',
          },
          {
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale\n',
          },
          {
            text: 'Browser version UX and UI improvements',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
          {
            text: 'Autofarming',
          },
        ],
      },
    ],
  },
]
