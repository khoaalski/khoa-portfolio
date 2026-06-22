"use client"

import { GraduationCap, Building2, Flame, Sparkles, X } from "lucide-react"
import type { MenuOption } from "@/app/page"

interface ContentModalProps {
  option: MenuOption
  onClose: () => void
}

const content = {
  EDUCATION: {
    title: "EDUCATION",
    icon: GraduationCap,
    type: "water",
    items: [
      {
        title: "University of British Columbia",
        subtitle: "Business Technology Management & Finance • May 2026",
        description: "Graduated with a degree. My parents call it a miracle!",
        logo: "/images/ubc.png",
      },
    ],
  },
  EXPERIENCE: {
    title: "EXPERIENCE",
    icon: Building2,
    type: "grass",
    items: [
      {
        title: "Wealthsimple",
        subtitle: "Growth Specialist (Current)",
        description: "Working on scaling our Credit Card and Monthly Millionaire products. Search them up!",
        logo: "/images/wealthsimple.png",
      },
      {
        title: "OpusClip",
        subtitle: "AI Product Manager (Nov 2025 - Jan 2026)",
        description: "Worked on Agent Opus beta. I analyzed how people are prompting AI to create videos!",
        logo: "/images/opusclip.svg",
      },
      {
        title: "Dayforce",
        subtitle: "Product Manager Intern (Jan 2025 - Aug 2025)",
        description: "As part of the Platform Core Services team, I worked on improving how our developers work with our Kafka Event-Driven Architecture. Also shipped dashboards on Kafka Adoption to leadership.",
        logo: "/images/dayforce.png",
      },
      {
        title: "Globe",
        subtitle: "Product Manager (Oct 2024 - Dec 2024)",
        description: "Joined a pre-seed startup to provide more value to user base of our flagship tool and increase our top line via influencer marketing.",
        logo: "/images/globe.webp",
      },
      {
        title: "Capital One",
        subtitle: "Business Analyst Intern (May 2024 - Aug 2024)",
        description: "I worked on analyzing an exited credit card portfolio to predict its future profitability.",
        logo: "/images/c1.webp",
      },
      {
        title: "Trulioo",
        subtitle: "Customer Success Manager Intern (Aug 2023 - Apr 2024)",
        description: "I was the bridge between us and our SMB customers, ensuring they are always in the loop!",
        logo: "/images/trulioo.webp",
      },
      {
        title: "Soccercardholic VN",
        subtitle: "Co-Founder, CEO (Jul 2019 - Jan 2024)",
        description: "Where it all started! I co-founded a shipping service for sport cards and small collectibles items between Vietnam and the US during Covid by partnering with freight shipping companies.",
        logo: "/images/schvn.webp",
      },
    ],
  },
  HOBBY: {
    title: "HOBBY",
    icon: Flame,
    type: "fire",
    items: [
      {
        title: "Films in general",
        subtitle: "Absolute Cinema!",
        description: "I like stuff from Tarantino & Nolan. Favorite of all time: the Before trilogy (unrelated ik).",
        logo: "/images/movie.png",
      },
      {
        title: "Board Games",
        subtitle: "Catan >>>",
        description: "Always down to have a conversation during a good game night.",
        logo: "/images/dice.png",
      },
      {
        title: "Pokemon",
        subtitle: "Was it not obvious enough?",
        description: "Follows VGC, TCG and nuzlockes. Gotta catch 'em all!",
        logo: "/images/pokemon.webp",
      },
      {
        title: "Soccer",
        subtitle: "COYG!",
        description: "Guess what? We finally won something!",
        logo: "/images/arsenal.svg",
      },
    ],
  },
  OTHERS: {
    title: "OTHERS",
    icon: Sparkles,
    type: "fairy",
    items: [
      {
        title: "Projects",
        subtitle: "How I got my in to Product Management",
        description: "Built some random software projects here and there. This made me realized my friends are so smart LOL.",
        logo: "/images/projects.png",
      },
      {
        title: "Taylor Swift",
        subtitle: "1989 is the best album of all times and I refuse to hear otherwise",
        description: "Don't know how I became a Swiftie but here we are.",
        logo: "/images/1989.png",
      },
    ],
  },
}

// Elemental Type Themes
const elementalThemes = {
  water: {
    headerBg: "bg-blue-700",
    bodyBg: "bg-blue-50",
    border: "border-blue-400",
    cardBg: "bg-white/90",
    cardBorder: "border-blue-300",
    titleColor: "text-blue-900",
    subtitleColor: "text-blue-700",
    textColor: "text-blue-950",
    buttonBg: "bg-blue-600 hover:bg-blue-500",
    accent: "rounded-lg",
  },
  grass: {
    headerBg: "bg-green-700",
    bodyBg: "bg-green-50",
    border: "border-green-400",
    cardBg: "bg-white/90",
    cardBorder: "border-green-300",
    titleColor: "text-green-900",
    subtitleColor: "text-green-700",
    textColor: "text-green-950",
    buttonBg: "bg-green-600 hover:bg-green-500",
    accent: "rounded-lg",
  },
  fire: {
    headerBg: "bg-red-700",
    bodyBg: "bg-orange-50",
    border: "border-red-400",
    cardBg: "bg-white/90",
    cardBorder: "border-orange-300",
    titleColor: "text-red-900",
    subtitleColor: "text-red-700",
    textColor: "text-red-950",
    buttonBg: "bg-red-600 hover:bg-red-500",
    accent: "rounded-sm",
  },
  fairy: {
    headerBg: "bg-pink-500",
    bodyBg: "bg-pink-50",
    border: "border-pink-400",
    cardBg: "bg-white/90",
    cardBorder: "border-pink-300",
    titleColor: "text-pink-900",
    subtitleColor: "text-pink-700",
    textColor: "text-pink-950",
    buttonBg: "bg-pink-500 hover:bg-pink-400",
    accent: "rounded-xl",
  },
}

export function ContentModal({ option, onClose }: ContentModalProps) {
  if (!option) return null

  const data = content[option]
  const theme = elementalThemes[data.type as keyof typeof elementalThemes]
  const Icon = data.icon

  // Helper function to parse Markdown-style links [text](url)
  const formatDescription = (text: string) => {
    // Split the text by the link pattern: [Link Text](URL)
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)

    return parts.map((part, index) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (match) {
        // match[1] is the text, match[2] is the URL
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-2 hover:opacity-70 transition-opacity font-bold cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {match[1]}
          </a>
        )
      }
      return part
    })
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          ${theme.border}
          border-4 ${theme.accent} w-full max-w-5xl
          shadow-[0_0_30px_rgba(0,0,0,0.5)]
          animate-in zoom-in-95 duration-200
          overflow-hidden flex flex-col max-h-[85vh]
        `}
      >
        {/* Header */}
        <div className={`${theme.headerBg} p-4 flex items-center justify-between relative shrink-0`}>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-white" />
            <span className="text-white text-base sm:text-lg font-bold tracking-wide">{data.title}</span>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="
                w-8 h-8 flex items-center justify-center
                bg-white/10 hover:bg-white/30 active:bg-white/50
                rounded-full transition-all duration-200
                hover:rotate-90
                cursor-pointer
              "
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className={`${theme.bodyBg} p-6 space-y-4 overflow-y-auto custom-scrollbar`}>
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`${theme.cardBorder} ${theme.cardBg} border-2 ${theme.accent} p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-sm`}
            >
              {/* Logo Slot */}
              <div className="shrink-0 self-start">
                <div className={`w-24 h-24 flex items-center justify-center overflow-hidden rounded-2xl bg-white/50`}>
                  <img
                    src={item.logo || "/placeholder.svg"}
                    alt={`${item.title} logo`}
                    className="w-20 h-20 object-contain rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>

              {/* Text Details */}
              <div className="flex-1 min-w-0">
                <h3 className={`${theme.titleColor} text-lg sm:text-xl font-bold mb-1`}>
                  {item.title}
                </h3>
                <p className={`${theme.subtitleColor} text-[10px] md:text-xs font-semibold mb-3 uppercase opacity-90 whitespace-nowrap`}>
                  {item.subtitle}
                </p>
                <p className={`${theme.textColor} text-sm sm:text-base leading-relaxed`}>
                  {formatDescription(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}