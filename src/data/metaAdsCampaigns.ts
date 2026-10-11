export type MetaAdsCampaignRow = {
  id: string
  name: string
  on: boolean
  budgetDaily: number
  results: number
  reach: number
  impressions: number
  costPerResult: number
  amountSpent: number
}

export const metaAdsCampaigns: MetaAdsCampaignRow[] = [
  {
    id: "1",
    name: "Jewel_sep_21_static_1",
    on: true,
    budgetDaily: 3500,
    results: 627,
    reach: 312458,
    impressions: 682905,
    costPerResult: 37.84,
    amountSpent: 23725.68,
  },
  {
    id: "2",
    name: "Jewel_sep_21_static_2",
    on: true,
    budgetDaily: 1400,
    results: 412,
    reach: 212039,
    impressions: 465612,
    costPerResult: 30.08,
    amountSpent: 12393.69,
  },
  {
    id: "3",
    name: "Jewel_sep_21_static_3",
    on: true,
    budgetDaily: 1500,
    results: 286,
    reach: 178426,
    impressions: 391504,
    costPerResult: 35.49,
    amountSpent: 10149.07,
  },
  {
    id: "4",
    name: "Jewel_sep_21_static_4",
    on: true,
    budgetDaily: 2500,
    results: 198,
    reach: 142888,
    impressions: 313353,
    costPerResult: 58.89,
    amountSpent: 11661.31,
  },
  {
    id: "5",
    name: "Jewel_sep_21_static_5",
    on: true,
    budgetDaily: 1000,
    results: 89,
    reach: 98245,
    impressions: 215492,
    costPerResult: 68.22,
    amountSpent: 6071.58,
  },
  {
    id: "6",
    name: "Jewel_sep_21_video_1",
    on: true,
    budgetDaily: 2800,
    results: 30,
    reach: 88954,
    impressions: 195841,
    costPerResult: 417.98,
    amountSpent: 12539.24,
  },
]

export const metaAdsTotals = {
  results: 1642,
  reach: 1033010,
  impressions: 2165307,
  amountSpent: 89280.57,
}

export function formatInr(amount: number, fractionDigits = 2): string {
  return `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })}`
}

export function formatInteger(n: number): string {
  return n.toLocaleString("en-IN")
}
