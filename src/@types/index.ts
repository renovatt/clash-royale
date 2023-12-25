export interface Root {
  items: Item[]
  supportItems: SupportItem[]
}

export interface Item {
  name: string
  id: number
  maxLevel: number
  maxEvolutionLevel?: number
  elixirCost?: number
  iconUrls: IconUrls
  rarity: string
}

export interface IconUrls {
  medium: string
  evolutionMedium?: string
}

export interface SupportItem {
  name: string
  id: number
  maxLevel: number
  iconUrls: IconUrls2
  rarity: string
}

export interface IconUrls2 {
  medium: string
}

// 
export type RootChallenge = Root2[]

export interface Root2 {
  type: string
  startTime: string
  endTime: string
  challenges: Challenge[]
}

export interface Challenge {
  id: number
  name: string
  description: string
  winMode: string
  casual: boolean
  maxLosses: number
  gameMode: GameMode
  prizes: Prize[]
  maxWins: number
  iconUrl: string
}

export interface GameMode {
  id: number
  name: string
}

export interface Prize {
  type: string | null
  amount?: number
  consumableName?: string
  resource?: string
  chest?: string
}
