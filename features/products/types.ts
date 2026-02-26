export interface ProductDTO {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  images: string[];
  price: number;
  discountPrice: number;
  stockQuantity: number;
  sku: string;
  status: ProductStatus;
  categoryId: string;
  tags: string[];
  isFeatured: boolean;
}

// Category Interface
export interface Category {
  _id: string
  name: string
  slug: string
}

// User Interface (createdBy)
export interface CreatedBy {
  _id: string
  name: string
  email: string
}

// Product Status Type (better than plain string)
export type ProductStatus = "active" | "inactive" | "draft"

// Main Product Interface
export interface ProductResponse {
 products: Product[]
}

export interface Product {
   _id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  images: string[]

  price: number
  discountPrice: number
  stockQuantity: number

  sku: string
  status: ProductStatus

  categoryId: Category
  createdBy: CreatedBy

  isDeleted: boolean
  tags: string[]
  isFeatured: boolean

  createdAt: string   // ISO Date string
  updatedAt: string   // ISO Date string

  __v: number
}