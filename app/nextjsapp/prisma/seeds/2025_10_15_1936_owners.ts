import { PrismaClient } from '../../src/generated/prisma'

const prisma = new PrismaClient()

export default async function seedOwners() {
  const emma = await prisma.owner.create({
    data: {
      familyname: 'Watson',
      firstname: 'Emma',
      nick: '@EmWatson',
      impressions: 'このワインを囲むと、不思議と会話が弾んで、心の距離もぐっと近づく気がします。',
      image: 'https://s-media-cache-ak0.pinimg.com/236x/c5/86/e6/c586e6afd87ee357bbab52df241480ac.jpg',
    },
  })

  const daniel = await prisma.owner.create({
    data: {
      familyname: 'Radcliffe',
      firstname: 'Daniel',
      nick: '@DanRad',
      impressions: '一緒にワインを楽しむ時間が、自然と私たちの絆を深めてくれました。',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
  })

  const hermione = await prisma.owner.create({
    data: {
      familyname: 'Granger',
      firstname: 'Hermione',
      nick: '@HGranger',
      impressions: '丁寧に選ばれた一本が、ただの食事を特別なひとときに変えてくれます。',
      image: 'https://images.unsplash.com/photo-1759784839707-a32c910a7747',
    },
  })

  const ron = await prisma.owner.create({
    data: {
      familyname: 'Weasley',
      firstname: 'Ron',
      nick: '@RonW',
      impressions: 'このワインがあるだけで、家族や友人との距離が驚くほど近く感じられました。',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    },
  })

  const luna = await prisma.owner.create({
    data: {
      familyname: 'Lovegood',
      firstname: 'Luna',
      nick: '@LLove',
      impressions: 'グラスを重ねるたびに、少しずつお互いの気持ちが近づいていくようでした。',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    },
  })

  const neville1 = await prisma.owner.create({
    data: {
      familyname: 'Longbottom',
      firstname: 'Neville',
      nick: '@NevLong',
      impressions: '特別なことはしていないのに、このワインがあるだけで心が通い合う気がします。',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c',
    },
  })

  const ginny1 = await prisma.owner.create({
    data: {
      familyname: 'Weasley',
      firstname: 'Ginny',
      nick: '@GinWeas',
      impressions: '静かに流れる時間とワインの香りが、自然と会話を深めてくれました。',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    },
  })

  const snape1 = await prisma.owner.create({
    data: {
      familyname: 'Snape',
      firstname: 'Severus',
      nick: '@SSevSnape',
      impressions: '久しぶりに家族と本音で話せた気がします。きっとワインのおかげです。',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    },
  })

  const neville2 = await prisma.owner.create({
    data: {
      familyname: 'Longbottom',
      firstname: 'Neville',
      nick: '@NevLong',
      impressions: '特別なことはしていないのに、このワインがあるだけで心が通い合う気がします。',
      image: 'https://plus.unsplash.com/premium_photo-1758893734322-172b22ba5278',
    },
  })

  const ginny2 = await prisma.owner.create({
    data: {
      familyname: 'Weasley',
      firstname: 'Ginny',
      nick: '@GinWeas',
      impressions: '静かに流れる時間とワインの香りが、自然と会話を深めてくれました。',
      image: 'https://plus.unsplash.com/premium_photo-1759793983877-d1c49cdd37eb',
    },
  })

  const snape2 = await prisma.owner.create({
    data: {
      familyname: 'Snape',
      firstname: 'Severus',
      nick: '@SSevSnape',
      impressions: '久しぶりに家族と本音で話せた気がします。きっとワインのおかげです。',
      image: 'https://images.unsplash.com/photo-1758539412442-23b83300f0bd',
    },
  })

  console.log({ emma, daniel, hermione, ron, luna, neville1, ginny1, snape1, neville2, ginny2, snape2 })
}