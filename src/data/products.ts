export interface Product {
  id: string
  name: string
  description: string
  priceAud: number
  type: "gated-content"
  features: string[]
}

const exitPlanWorkbook: Product = {
  id: "exit-plan-workbook",
  name: "Exit Plan Workbook + Spreadsheet Pack",
  description:
    "Everything you need to map your path from 9-to-5 to financially independent. Includes projection spreadsheets, calculators, and a 12-month exit roadmap.",
  priceAud: 59,
  type: "gated-content",
  features: [
    "Super projection spreadsheet",
    "FIRE number calculator",
    "Coast-FIRE calculator",
    "12-month exit roadmap template",
    "AU tax & super rules cheat sheet",
  ],
}

const fireNumberGuide: Product = {
  id: "fire-number-guide",
  name: "AU FIRE Number Masterclass",
  description:
    "A deep-dive course on calculating and reaching your FIRE number in the Australian context — covering super, tax, property, and drawdown strategies.",
  priceAud: 39,
  type: "gated-content",
  features: [
    "Video walkthroughs of every calculation",
    "AU-specific withdrawal strategy guide",
    "Super vs non-super asset allocation",
    "Tax-efficient drawdown sequencing",
    "Lifetime access with updates",
  ],
}

export const ALL_PRODUCTS: Product[] = [exitPlanWorkbook, fireNumberGuide]

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id)
}
