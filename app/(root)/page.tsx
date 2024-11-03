import React from 'react'
import SearchForm from '../components/SearchForm'

interface SearchParams {
  searchParams: Promise<{query?: string}>
}

const Home = async ({searchParams}: SearchParams) => {
  const query = (await searchParams).query

  return (
    <>
      <section className="pink_container">
        <h1 className='heading'>Pitch your Startup <br /> Connect with enterpreneurs</h1>
        <p className='sub-heading !max-w-3xl'>
          Submit ideas, vote on pitches and Get Noticed in Virtual Competitions!
        </p>
        <div>
          <SearchForm query={query}/>
        </div>
      </section>
    </>
  )
}

export default Home