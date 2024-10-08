import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import whohasmyshit from '@/images/screenshots/whohasmyshit.png'
import jampak from '@/images/screenshots/jampak.png'
import obs from '@/images/screenshots/obs.png'
import ac from '@/images/screenshots/ac.png'
import hdzero from '@/images/screenshots/hdzero.webp'
import rickandmorty from '@/images/screenshots/rickandmorty.png'
import reactopenai from '@/images/screenshots/reactopenai.png'
import matchinggame from '@/images/screenshots/matchinggame.png'
import tictactoe from "@/images/screenshots/tic-tac-toe.png"
import flaskcrud from "@/images/screenshots/flaskcrud.png"
import resumeauditai from "@/images/screenshots/resumeauditai.png"
import lyricsgenerator from "@/images/screenshots/lyricsgenerator.png"

const projects = [
  {
    name: 'Jampak',
    description:
      'Application to support artist find alternative venues, and for people who have alternative venues to host artists.',
    link: { href: 'https://jampak.io', label: 'jampak.io' },
    logo: jampak,
  },
  {
    name: `Who has my stuff!`,
    description:
      'Application tool to lend or borrow gear from friends with automated reminders - WIP',
    link: { href: 'https://github.com/iameddieyayaya/who-has-my-shit', label: 'github.com' },
    logo: whohasmyshit,
  },
  {
    name: `AI Resume Audit`,
    description:
      `This project leverages OpenAI's API to analyze and provide feedback on resumes.`,
    link: { href: 'https://resume-audit-ai.vercel.app/', label: 'resume-audit-ai.vercel.app' },
    logo: resumeauditai,
  },
  {
    name: `AI Lyric Generator`,
    description:
      `This project leverages OpenAI's API to generate lyrics based on prompt.`,
    link: { href: 'https://lyrics-generator-ai.vercel.app/', label: 'lyrics-generator-ai.vercel.app' },
    logo: lyricsgenerator,
  },
  {
    name: `Next.js and Flask Docker Application`,
    description:
      'This project demonstrates a web application built with Next.js for the frontend, Flask for the backend, and Docker for containerization.',
    link: { href: 'https://github.com/iameddieyayaya/python-flask-crud', label: 'github.com' },
    logo: flaskcrud,
  },
  {
    name: `Tic Tac Toe Python`,
    description:
      'Simple Tic Tac Toe Game in Python using pygame',
    link: { href: 'https://github.com/iameddieyayaya/tic-tac-toe-', label: 'github.com' },
    logo: tictactoe,
  },
  {
    name: `React OpenAI Vision`,
    description:
      'A React app that uses OpenAI\'s Vision API to analyze images.',
    link: { href: 'https://github.com/iameddieyayaya/openai-vision', label: 'github.com' },
    logo: reactopenai,
  },
  {
    name: 'Oblique Strategies',
    description: 'Inpsired by Brian Eno\'s Oblique Stategies cards to prevent writers/artist block. Orignally project had an node/express api hosted on heroku free tier.',
    link: {
      href: 'https://the-oblique-strategies.vercel.app/', label: 'the-oblique-strategies.vercel.app'
    },
    logo: obs,
  }, {
    name: "Dedicated Gaming Servers",
    description: "Created a dedicated server for friends to play Assetto Corsa and PalWorld. AWS EC2 Ubuntu Server",
    link: {
      href: "https://github.com/iameddieyayaya/ACServer",
      label: "github.com"
    },
    logo: ac,
  },
  {
    name: "HDZero Mobile App",
    description: "React Native application to interface with HDZero open-source goggles for FPV Drones. Able to connect to goggles via wifi and stream video to app.",
    link: {
      href: "https://github.com/iameddieyayaya/HDZeroMobile",
      label: "github.com"
    },
    logo: hdzero,
  },
  {
    name: "Morty-Dex",
    description: "Morty-Dex is a pokedex theme Rick and Morty character lookup. Project built in React.js and searches the Rick and Morty API for characters.",
    link: {
      href: "https://rickandmortydex.netlify.app/",
      label: "rickandmortydex.netlify.app"
    },
    logo: rickandmorty,
  },
  {
    name: "Card Matching Game",
    description: "Card Matching Game. Project using html, css, and vanilla javascript.",
    link: {
      href: "https://github.com/iameddieyayaya/matching-game",
      label: "github.com"
    },
    logo: matchinggame,
  },
  {
    name: 'Trinity',
    description: `An application that trades/mines flo and raven crypto currencies. Using the Mining Rig Rental, Nicehash, and Bittrex APIs.`,
    link: { href: 'https://github.com/iameddieyayaya/trinity', label: 'github.com' },
    logo: 'https://i.ibb.co/Th8Bbyb/screenshot1.png',
  },
  {
    name: 'Crwn Apparel',
    description: 'Full Stack course project. Built with React + Firebase + Stripe + Redux',
    link: { href: 'https://github.com/iameddieyayaya/crwn-apparel', label: 'github.com' },
    logo: 'https://i.ibb.co/Lhqw0md/crwnapperal.png',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Some are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-48 w-64 items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""

                fill
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
