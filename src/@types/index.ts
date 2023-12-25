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