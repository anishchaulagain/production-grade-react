export interface HeroSliderResponse {
  success: boolean,
  message: string,
  data: HeroSliderData[]
}

export interface HeroSliderData {
    title: string,
    subtitle: string,
    imageUrl: string,
    mobileImageUrl: string,
    ctaText: string,
    ctaLink: string,
    order: number,
    isActive: boolean,
    _id: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

