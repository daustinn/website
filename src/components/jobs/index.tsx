import React from 'react'
import Job from './job'
import GroupJobs from './group'

function Jobs() {
  return (
    <section
      id="jobs"
      title="Daustinn's Works"
      className="w-full pt-3 border-t border-neutral-800"
    >
      <h3 className="text-xl opacity-70 font-medium">
        Featured experiences and projects
      </h3>
      <article className="pt-2 flex flex-col gap-8">
        <GroupJobs year="2024">
          <Job
            type="proyect"
            tags={['NextJS 14', 'TailwindCSS', 'CSS']}
            link="https://cosmoui.org"
            title="CosmoUI"
            description="Catalog of components for web development. For React, Vanila JavaScript, TailwindCSS."
          />
          <Job
            type="job"
            tags={[
              'NextJS 13',
              'TypeScript',
              'MongoDB',
              'TailwindCSS',
              'SocketIO',
              'Mysql'
            ]}
            link="https://ci.ilp.edu.pe"
            title="CI - ELP"
            description="Software for managing libraries with different floors, headquarters, tables and chairs. Implementation of single access for users with institutional email. And all this in real time."
          />
        </GroupJobs>
        <GroupJobs year="2023">
          <Job
            type="job"
            tags={['ReactJS', 'JavaScript', 'Firebase']}
            link="/"
            description="System for managing payments and members of the institution. Generation of proof of payment."
            title="Acropolis Perú"
          />
          <Job
            type="proyect"
            tags={[
              'NextJS 14',
              'Typescript',
              'MongoDB',
              'NodeJS',
              'Graphql',
              'TalwindCSS',
              'PostrgreSQL'
            ]}
            link="/"
            title="Univercel"
          />
          <Job
            type="proyect"
            tags={['Express', 'Typescript', 'Sunat']}
            link="/"
            title="Univercel API"
            description="Application for queries of people and companies for their DNI/RUC in Peru."
          />
        </GroupJobs>
      </article>
    </section>
  )
}

export default Jobs
