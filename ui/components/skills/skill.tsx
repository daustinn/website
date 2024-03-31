import { cn } from 'utils'

export type SkillType = {
  title: string
  icon: React.ReactNode
  className?: string
  href: string
}

const Skill = ({ icon, title, className, href }: SkillType) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={`Go to ${title} website`}
      className={cn(
        'p-2 text-center slide hover:scale-110 transition-transform rounded-2xl',
        className
      )}
    >
      <div className="w-10 mx-auto drop-shadow-lg">{icon}</div>
      <p className="text-xs mt-2">{title}</p>
    </a>
  )
}
export default Skill
