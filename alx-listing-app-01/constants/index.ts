export const API_URL = "https://api.example.com";
export const APP_NAME = "ALX Listing App";

import { PropertyProps } from '@/interfaces/index'


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
{
id: 'sunny-villa',
name: 'Sunny Villa',
description:
'A bright 3-bedroom villa with large garden, fast Wi-Fi and a short walk to the beach. Ideal for families and remote workers.',
rating: 4.7,
address: { city: 'Lagos', country: 'Nigeria' },
pricePerNight: 120,
image: '/images/properties/sunny-main.jpg',
images: [
'/images/properties/sunny-main.jpg',
'/images/properties/sunny-1.jpg',
'/images/properties/sunny-2.jpg',
'/images/properties/sunny-3.jpg'
],
category: ['Wi-Fi', 'Kitchen', 'Free parking', 'Washer'],
reviews: [
{
id: 'r1',
name: 'Ada',
avatar: '/images/avatars/ada.jpg',
rating: 5,
comment: 'Amazing stay, host was very helpful!',
date: '2025-09-20'
},
{
id: 'r2',
name: 'Tunde',
avatar: '/images/avatars/tunde.jpg',
rating: 4,
comment: 'Very comfortable, great location.',
date: '2025-09-12'
}
]
}
]


export default PROPERTYLISTINGSAMPLE
