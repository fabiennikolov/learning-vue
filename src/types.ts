declare global {
  interface ProductCardData {
    name: string
    description?: string
    image: string
    price: number
  }

  interface Link {
    label: string
    redirect: string
  }

  type Links = Link[]
  interface AccountCard {
    title: string
    description?: string
    image: string
    link: Link
    class?: string
  }
  interface ArticleCard {
    title: string
    description?: string
    image: string
    link: Link
  }
}

export {}
