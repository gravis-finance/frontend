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
        color: '#5AC2E3',
        items: [
          {
            text: 'Pitchdeck version 1',
            done: true,
          },
          {
            text: 'DEX launch',
            done: true,
          },
          {
            text: 'Home page release',
            done: true,
          },
          {
            text: 'Pre-Seed Round',
            done: true,
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
            text: 'Captains collection NFT sale',
            done: true,
          },
          {
            text: 'Demo version design',
            done: true,
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Private round',
            done: true,
          },
          {
            text: 'Angel round',
            done: true,
          },
          {
            text: 'GRVX bridge beta version',
            done: true,
          },
          {
            text: 'Chinese language support added',
            done: true,
          },
        ],
      },
      {
        title: 'Gmart',
        color: '#E0E69C',
        items: [
          {
            text: 'Gmart release version 1',
            done: true,
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
            text: 'Loot boxes sales launch',
            done: true,
          },
          {
            text: 'Mining mission launch',
            done: true,
          },
          {
            text: 'Equipment crafting release',
            done: true,
          },
          {
            text: 'Leaderboard release',
            done: true,
          },
          {
            text: 'Evervoid players stats release',
            done: true,
          },
          {
            text: 'Evervoid home page release',
            done: true,
          },
          {
            text: 'NFT contract audit',
            done: true,
          },
          {
            text: 'First Mates Search mission',
            done: true,
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Migration release',
          },
          {
            text: 'Farming release',
          },
          {
            text: 'Private sales',
          },
          {
            text: 'GRVX bridge release',
          },
          {
            text: 'GRVX staking for Public Round',
          },
        ],
      },
      {
        title: 'Gmart',
        color: '#E0E69C',
        items: [
          {
            text: 'Activity page release',
            done: true,
          },
          {
            text: 'Equipment listing',
            done: true,
          },
          {
            text: 'Gmart release version 2',
            done: true,
          },
          {
            text: 'Item page release',
            done: true,
          },
          {
            text: 'First Mates NFT collection listing',
            done: true,
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
            done: true,
          },
          {
            text: 'New Evervoid trailer',
            done: true,
          },
          {
            text: 'Type01 NFT collection release',
            done: true,
          },
          {
            text: 'New version mobile design\nand prototyping',
          },
          {
            text: 'Type01 free minting for whitelist users',
          },
          {
            text: 'Sale of the first batch of Type 01',
          },
          {
            text: 'New asset interaction mechanics',
          },
          {
            text: 'New resource staking contracts',
          },
          {
            text: 'Homepage redesign',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Type01 NFT bridge release',
            done: true,
          },
          {
            text: 'Multiple languages added',
          },
          {
            text: 'Big prize giveaway for staking, farming and migrating',
          },
        ],
      },
      {
        title: 'Gmart',
        color: '#E0E69C',
        items: [
          {
            text: 'Gmart for Type01 NFT collection listing',
            done: true,
          },
          {
            text: 'Profile release with nicknames and avatars',
            done: true,
          },
          {
            text: "Collections' pages release",
            done: true,
          },
          {
            text: 'Rarity module release',
            done: true,
          },
          {
            text: 'Cross-chain NFT bridge for ERC-721 first release',
            done: true,
          },
          {
            text: 'Gmart release version 3',
          },
          {
            text: 'Big prize giveaway for staking, farming and migrating',
          },
        ],
      },
      {
        title: 'All',
        color: '#E0E69C',
        items: [
          {
            text: 'Ship Building Parts transfer from NFT to ERC-20 standard',
            done: true,
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
            text: 'Space Races mission',
          },
          {
            text: 'New version game design',
          },
          {
            text: 'Free-to-play model design\nand integration',
          },
          {
            text: 'First premium lands batch sale',
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
            text: 'New networks support',
          },
        ],
      },
      {
        title: 'Gmart',
        color: '#E0E69C',
        items: [
          {
            text: 'Version v3: EIP-712 signatures\nto reduce gas fees, separate configurable fee for collection authors, and NFT auctions\n',
          },
          {
            text: 'First 20 partnerships\nwith blockchain games',
          },
          {
            text: 'Reduced fees for GRVS staking\nand trading in GRVS',
          },
          {
            text: 'NFT launchpad + auto listing',
          },
          {
            text: 'NFT orderbook',
          },
          {
            text: 'New networks support: Solana, NEAR, Ethereum, and more\n(Q2 / Q3)',
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
            text: 'New version mobile development',
          },
          {
            text: '3D design and animation of ingame assets',
          },
          {
            text: 'Second premium lands batch sale',
          },
          {
            text: 'New version basic buildings\nand units prototyping',
          },
          {
            text: 'New version demo',
          },
          {
            text: 'New version premium buildings and units prototyping',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Extended analytics',
          },
          {
            text: 'Mobile DeFi wallet app development (Q3 / Q4)',
          },
        ],
      },
      {
        title: 'Gmart',
        color: '#E0E69C',
        items: [
          {
            text: 'New networks support: Solana, NEAR, Ethereum, and more\n(Q2 / Q3)',
          },
          {
            text: 'UX and UI improvements',
          },
          {
            text: 'NFT portfolio analytics',
          },
          {
            text: 'NFT bridge for all supported networks and collections',
          },
          {
            text: 'Mobile Gmart app development (Q3 / Q4)',
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
            text: 'New version mobile release, browser version development',
          },
          {
            text: 'Third premium lands batch sale, launch of free lands',
          },
          {
            text: 'Land to NFT conversion',
          },
          {
            text: 'Integration of basic and premium resources',
          },
          {
            text: 'New daily missions',
          },
        ],
      },
      {
        title: 'Gswap',
        color: '#5AC2E3',
        items: [
          {
            text: 'Mobile DeFi wallet app development (Q3 / Q4)',
          },
        ],
      },
      {
        title: 'Gmart',
        color: '#E0E69C',
        items: [
          {
            text: 'Version v4: capable of supporting 100000+ collections',
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
            text: 'Old version missions and characters integration, third Captains mission',
          },
          {
            text: 'New resources integration, overall rebalancing',
          },
          {
            text: 'Type 01 integration',
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
            text: 'Clan system',
          },
          {
            text: 'Land bridging between networks',
          },
          {
            text: 'PvP system',
          },
        ],
      },
    ],
  },
]
