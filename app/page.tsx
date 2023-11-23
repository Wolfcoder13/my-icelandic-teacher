import Image from 'next/image'

import { helloBubble } from '../components/svgAssets';

import LessonCard from '../components/LessonCard'

export default function Home() {
  return (
    <main className="bg-gray-700 flex min-h-screen flex-col items-center justify-between">
      <section className="bg-gray-700">
        <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  " >
          <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div className="max-w-xl mx-auto text-center">
                <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                  <p className="text-4xl font-semibold tracking-widest text-g uppercase">Lessons:</p>
                </div>
                <p className="mt-4 text-base leading-relaxed group-hover:text-white">Here you can try to learn some basic icelandic. Here we focus mostly on vocabulary, and sprinkle in some grammar.</p>
              </div>
              <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                <LessonCard
                  href='/lesson/one'
                  notesLink='/lesson/one/guidebook'
                  title='1. Greetings & Introductions'
                  text='Here we learn how to say hello, say your name, ask others for their name, and say good bye.'
                  svg={helloBubble}
                />

                <LessonCard
                  href='/lesson/two'
                  notesLink='/lesson/two/guidebook'
                  title='2. Greetings & More'
                  text='Here we keep learning hellos, but expand a little on the vocabulary.'
                  svg={helloBubble}
                />

                <LessonCard
                  href='/lesson/three'
                  notesLink='/lesson/three/guidebook'
                  title='3. GPT GENERATED lesson'
                  text='This is probably wrong, and too hard because chatgpt tried creating the questions from scratch.'
                  svg={helloBubble}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
