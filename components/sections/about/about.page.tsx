'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion, useScroll, useTransform } from 'framer-motion'
import portfolioImg from '../../../public/images/WizyXMusic.png'
import Image from 'next/image'
import SectionDivider from '../../section-divider'
import { useRef } from 'react'
import SectionHeading from '../../section-heading'
import Link from 'next/link'
import { smoothScrollTo } from '@/lib/utils'

export default function About() {
  const { ref } = useSectionInView('about', 0.3)
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section
      className="flex flex-col scroll-mt-26 justify-center items-center leading-8 h-[1200px] z-50 w-full dark:bg-darkBg dark:text-white"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> WizyX Music Hakkında </SectionHeading>
      <motion.div
        className="relative lg:w-[980px] lg:h-[700px] overflow-hidden"
        ref={divRef}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <div className="group">
          <div className="flex flex-col gap-3 relative justify-center items-center text-center lg:text-start lg:block lg:absolute lg:right-0 lg:top-1/3 max-w-96 lg:max-w-[650px] text-md lg:text-lg z-40 font-semibold tracking-wide">
            WizyX Music, Discord Sunucunuzun En Gelişmiş Müzik Botu! <br />
            Gelişmiş Ses Kalitesi, Çeşitli Müzik Modlarıyla, Sunucunuzda <br /> 
            Size Kesintisiz Bir Müzik Dinleme Keyfi Yaşatır.
            <br />
            <br /> 
            WizyX Music Kullanan Her Discord Kullanıcısı Botumuzun, <br />
            Gizlilik Politikasını Ve Hizmet Koşullarını Kabul Etmiş Sayılır. <br />
            13 Yaş Altı Kullanıcıların Botu Kullanması Yasal Değildir.
            <br />
            <br /> 
            WizyX Music İle Alakalı Merak Ettiğiniz Tüm Soruları <br /> 
            Bize Sormaktan Lütfen Çekinmeyin 7/24 Sizlerleyiz :)
            <br />
            <br />

            <Link
              href={'contact'}
              onClick={(e) => {
                smoothScrollTo({ e, id: 'contact' })
              }}
            >
              <span className="text-2xl font-bold dark:bg-[#ddbea9] uppercase lg:normal-case bg-[#ffcbb4]">
                İletişim Formu
              </span>
            </Link>
          </div>
          <div className="absolute left-1/3 lg:left-0 lg:top-1/4 z-30">
            <div className="relative w-[470px] h-[470px]">
              <div className="group-hover:opacity-60 transition-opacity absolute inset-0 bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] rounded-full z-20"></div>
              <div className="absolute inset-0">
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  width={470}
                  height={470}
                  className="rounded-full z-10 w-[470px] h-[470px]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <SectionDivider />
    </motion.section>
  )
}
