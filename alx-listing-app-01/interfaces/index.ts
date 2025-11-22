export interface Address {
city: string
country: string
}


export interface Review {
id: string
name: string
avatar: string
rating: number
comment: string
date?: string
}


export interface PropertyProps {
id: string
name: string
description: string
rating: number
address: Address
pricePerNight: number
image: string
images?: string[]
category: string[]
reviews: Review[]
}