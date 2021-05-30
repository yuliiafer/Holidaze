export const BASE_URL=process.env.NEXT_PUBLIC_STRAPI_API_URL;
export const AUTH_PATH=process.env.NEXT_PUBLIC_STRAPI_API_AUTH;
export const HOTELS_PATH=process.env.NEXT_PUBLIC_HOTELS_PATH;
export const IMAGE_PATH=process.env.NEXT_PUBLIC_IMAGE_PATH;
export const CATEGORIES_PATH=process.env.NEXT_PUBLIC_CATEGORIES_PATH
export const NEXT_URL=process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'
export const KEY=process.env.JWT_SECRET || '3edd8aa6-3433-43ec-95c9-905ec627b813'
export const API_HEADER={
    "Content-Type": "applicatiom/json",
    key: KEY
}

export const PER_PAGE = 5

export const CLOUDINARY_N=process.env.CLOUDINARY_NAME
export const CLOUDINARY_K=process.env.CLOUDINARY_KEY
export const CLOUDINARY_S=process.env.CLOUDINARY_SECRET

