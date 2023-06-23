
export interface Link {
  label: string
  redirect: string
}

export interface Card {
  name: string
  description?: string
  image: string
  price: number
  to?: string
}

export type Links = Link[]
export interface AccountCard {
  title: string
  description?: string
  image: string
  link: Link
  class?: string
}
export interface ArticleCardProps {
  title: string
  description?: string
  image: string
  link: Link
}

export interface CardProps {
  title: string
  description?: string
  image: string
  link: {
    label: string
    redirect: string
  }
}