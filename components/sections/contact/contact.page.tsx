'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import SubmitBtn from './submitBtn'
import SectionDivider from '../../section-divider'
import SectionHeading from '@/components/section-heading'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center dark:text-white dark:bg-darkBg w-full items-center flex flex-col py-20"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading> Bize Ulaşın! </SectionHeading>
      <div className="w-[min(100%,38rem)]">
        <p className="text-gray-700 mt-6 mb-20 dark:text-white/80">
          WizyX Music ve WizyX Botlarının Tümünde, Karşılaştığınız Hata/Bug Veya Sorularınızı Bize Sormaktan Çekinmeyin.{' '}
          <a className="underline" href="mailto:destekwizyxbot@gmail.com">
            destekwizyxbot@gmail.com
          </a>{' '}
          Adresinden Ekibimize Ulaşabilirsiniz.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action="https://formspree.io/f/mdoqpgpk"
          method="POST"
        >
          <input
            className="h-14 px-4 border bg-gray-50 dark:bg-white rounded-lg dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="Email"
            type="email"
            required
            maxLength={70}
            placeholder="E-Posta Adresiniz."
          />

          <input
            className="h-14 my-2 px-4 border bg-gray-50 dark:bg-white rounded-lg dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="Konu"
            type="text"
            required
            maxLength={60}
            placeholder="Konu Nedir?"
          />

          <textarea
            className="h-52 my-3 rounded-lg border p-4 bg-gray-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Mesajınız..."
            required
            maxLength={4000}
          />
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
      <SectionDivider />
    </motion.section>
    
  )
}
