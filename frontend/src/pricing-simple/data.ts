export const plans: PlanData[] = [
  {
    value: 'free',
    title: 'Free',
    colorPalette: 'gray',
    features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
    priceUnit: 'month',
    price: 0,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: false,
  },
  {
    value: 'pro',
    title: 'Pro',
    features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
    priceUnit: 'month',
    price: 10,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: true,
  },
  {
    value: 'enterprise',
    title: 'Enterprise B2B',
    colorPalette: 'gray',
    features: [
      '30 users included',
      '10 GB of storage',
      'Priority email support',
      'SSO authentication',
    ],
    priceUnit: 'month',
    price: 100,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: false,
  },
]

export interface PlanData {
  value: string
  title: string
  features: string[]
  priceUnit: string
  price: number
  priceCurrency: string
  priceSymbol: string
  colorPalette?: string
  recommended?: boolean
}
