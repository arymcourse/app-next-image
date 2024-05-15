'use client'

export default function myImageLoader(prop) {
  const { src, width } = prop;
  return `https://images.pexels.com/photos/2014422/${src}?auto=compress&cs=tinysrgb&w=${width}`
}