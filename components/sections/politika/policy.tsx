'use client'

import 'next-cloudinary/dist/cld-video-player.css'
import SectionDivider from '../../section-divider'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/lib/utils'
import { CircleUser, Download, HelpCircle, Linkedin, LockKeyhole, LucideUserCheck2, Paperclip, Plus, PlusCircle, UserCheck2, Youtube } from 'lucide-react'
import Image from 'next/image'
import { useActiveSectionContext } from '@/store/active-section-context'
import { FaDiscord, FaYoutube } from 'react-icons/fa'

export default function Policy() {
  const { ref } = useSectionInView('home')
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <>
      <section
        className="flex flex-col h-screen w-full scroll-mt-36 justify-center items-center relative"
        id="policy"
        ref={ref}
      >
        <div
          className={
            'absolute top-0 left-0 h-screen w-screen dark:bg-[#0000007c]'
          }
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="-z-10 object-cover h-screen w-screen"
        >
          <source src="/layout.mp4" />
        </video>

        <div className="absolute top-36 lg:top-48 flex flex-col items-start justify-center container tracking-wide text-black dark:text-white">
          <div className="relative w-full h-full container">
            <div className="lg:text-[3rem] text-[2rem] font-extrabold lg:mb-5 text-start h-72 w-[350px] md:w-[700px] lg:w-[1000px]">
              <span className="font-extrabold mb-10 text-start"> Gizlilik Politikası Ve </span> < br />
              <span className="font-extrabold mb-10 text-start"> Hizmet Koşulları </span>
              
              <br />
            </div>
            <motion.div
              className="flex flex-col md:flex-row w-91 items-center md:mt-12 justify-center gap-3 px-4 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group w-64 sm:w-auto bg-darkBg text-white hover:dark:text-black px-7 py-3 cursor-pointer flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-darkBeige active:scale-105 transition"
                href="#"
                target='_blank'
              >
                Gizlilik Politikası {' '}
                <LockKeyhole className="opacity-70 group-hover:translate-x-1 transition" />
              </a>

              <a
                className="group w-64 sm:w-auto bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="#"
                target='_blank'
              >
                Hizmet Koşulları {' '}
                <LucideUserCheck2 className="opacity-60 group-hover:translate-y-1 transition" />
              </a>

              <div className="flex gap-2 ">
                <a
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full w-[60px] h-[60px] focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://discord.gg/Dv5Mj9UPKv"
                  target="_blank"
                >
                  <FaDiscord/>
                </a>

                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/WizyX77/WizyX_MusicWeb"
                  target="_blank"
                >
                  <Image
                    width={27}
                    height={27}
                    src={'/svgs/github.svg'}
                    alt="İcon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="dark:bg-darkBg w-full flex justify-center">
        <SectionDivider />
      </div>
    </>
  )
}
