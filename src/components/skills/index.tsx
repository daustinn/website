import React from 'react'
import Skill from './skill'
import {
  CSSIcon,
  CloudinaryIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoDBIcon,
  MysqlIcon,
  NextJSIcon,
  PostgreSQLIcon,
  ReactJSIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon
} from 'icons'

function Skills() {
  return (
    <section
      id="jobs"
      title="Daustinn's Works"
      className="w-full pt-3 border-t border-neutral-800"
    >
      <h3 className="text-xl opacity-70 font-medium">Skills</h3>
      <section id="skills" className="pt-10">
        <div className="grid grid-cols-8 max-md:grid-cols-7 max-sm:grid-cols-5 space-x-2 justify-center items-center">
          <Skill title="HTML" icon={<HTMLIcon />} />
          <Skill title="CSS" icon={<CSSIcon />} />
          <Skill title="Next js" icon={<NextJSIcon />} />
          <Skill title="React js" icon={<ReactJSIcon />} />
          <Skill title="JavaScript" icon={<JavaScriptIcon />} />
          <Skill title="TypeScript" icon={<TypeScriptIcon />} />
          <Skill title="Tailwidcss" icon={<TailwindCSSIcon />} />
          <Skill title="Figma" icon={<FigmaIcon />} />
          <Skill title="Firebase" icon={<FirebaseIcon />} />
          <Skill title="Postgress" icon={<PostgreSQLIcon />} />
          <Skill title="Git" icon={<GitIcon />} />
          <Skill title="MongoDb" icon={<MongoDBIcon />} />
          <Skill title="Cloudinary" icon={<CloudinaryIcon />} />
          <Skill title="Vercel" icon={<VercelIcon />} />
          <Skill title="Java" icon={<JavaIcon />} />
          <Skill title="Mysql" icon={<MysqlIcon />} />
        </div>
      </section>
    </section>
  )
}

export default Skills
