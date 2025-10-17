import { PrismaClient } from '../../src/generated/prisma'

const prisma = new PrismaClient()

export default async function seedOwners() {
  const news1 = await prisma.news.create({
    data: {
      name: "新プロジェクト",
      date: "10月14日, 2025",
      description: "自然の中で土に触れ、ワインを楽しむ贅沢なひととき。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news2 = await prisma.news.create({
    data: {
      name: "マーケット",
      date: "09月13日, 2025",
      description: "平日は東京、週末はワイナリーのそばで静かな時間を。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news3 = await prisma.news.create({
    data: {
      name: "コラボ",
      date: "08月12日, 2025",
      description: "クリエイターNとXXXを創設",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news4 = await prisma.news.create({
    data: {
      name: "今年のワインの売れ行き",
      date: "10月14日, 2025",
      description: "自然の中で土に触れ、ワインを楽しむ贅沢なひととき。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news5 = await prisma.news.create({
    data: {
      name: "新プロジェクト",
      date: "10月14日, 2025",
      description: "自然の中で土に触れ、ワインを楽しむ贅沢なひととき。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news6 = await prisma.news.create({
    data: {
      name: "マーケット",
      date: "09月13日, 2025",
      description: "平日は東京、週末はワイナリーのそばで静かな時間を。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news7 = await prisma.news.create({
    data: {
      name: "コラボ",
      date: "08月12日, 2025",
      description: "クリエイターNとXXXを創設",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news8 = await prisma.news.create({
    data: {
      name: "マーケット",
      date: "09月13日, 2025",
      description: "平日は東京、週末はワイナリーのそばで静かな時間を。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news9 = await prisma.news.create({
    data: {
      name: "コラボ",
      date: "08月12日, 2025",
      description: "クリエイターNとXXXを創設",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news10 = await prisma.news.create({
    data: {
      name: "マーケット",
      date: "09月13日, 2025",
      description: "平日は東京、週末はワイナリーのそばで静かな時間を。",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  const news11 = await prisma.news.create({
    data: {
      name: "コラボ",
      date: "08月12日, 2025",
      description: "クリエイターNとXXXを創設",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
    }
  })

  console.log({
    news1,
    news2,
    news3,
    news4,
    news5,
    news6,
    news7,
    news8,
    news9,
    news10,
    news11
  })
}