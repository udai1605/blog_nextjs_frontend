import Image from 'next/image'
import HeroSection from './_components/HeroSection'
import InfoBlock from './_components/InfoBlock'
import axios from 'axios'
import { fetchDataFromStrapi, processInfoBlocks } from '@/utils/strapi.utils'

export default async function Home() {
  const headline = (
    <>
      <h1>barrel.</h1>
      <h1>Your.</h1>
      <h1>happiness</h1>
    </>
  )

  // const response = await axios.get("http://localhost:1337/api/infoblocks-landing?populate=deep")
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep")
  const infoBlockData = processInfoBlocks(data)
  console.log(infoBlockData)

  return (
    <main >
      <HeroSection headline={headline} />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  )
}
