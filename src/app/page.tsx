import Footer from 'components/footer'
import Header from 'components/header'
import Hobbies from 'components/hobbies'
import Jobs from 'components/jobs'
import Presentation from 'components/presentation'
import Skills from 'components/skills'
import React from 'react'

function Home() {
  return (
    <>
      <main className="max-w-3xl p-5 gap-4 items-center mx-auto w-full flex flex-col pt-32 max-md:pt-10">
        <Header />
        <Presentation />
        <Jobs />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </>
  )
}

export default Home
