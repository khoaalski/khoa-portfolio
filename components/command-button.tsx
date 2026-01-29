"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"

interface CommandButtonProps {
  label: string
  icon: LucideIcon
  color: "red" | "blue" | "green" | "pink"
  onClick: () => void
}

const colorStyles = {
  blue: {
    bg: "bg-blue-600",
    border: "border-blue-900",
    shadow: "shadow-[inset_0_-4px_0_#1e40af]",
    active: "active:shadow-none active:translate-y-[2px]",
  },
  green: {
    bg: "bg-green-600",
    border: "border-green-900",
    shadow: "shadow-[inset_0_-4px_0_#166534]",
    active: "active:shadow-none active:translate-y-[2px]",
  },
  red: {
    bg: "bg-red-600",
    border: "border-red-900",
    shadow: "shadow-[inset_0_-4px_0_#991b1b]",
    active: "active:shadow-none active:translate-y-[2px]",
  },
  pink: {
    bg: "bg-pink-500",
    border: "border-pink-800",
    shadow: "shadow-[inset_0_-4px_0_#be185d]",
    active: "active:shadow-none active:translate-y-[2px]",
  },
}

// Rain drops for Water type
function RainEffect() {
  const drops = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.5,
    duration: 0.4 + Math.random() * 0.3,
  }))

  return (
    <>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-[3px] h-[12px] bg-blue-300/70 rounded-full animate-rain"
          style={{
            left: drop.left,
            top: "-12px",
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </>
  )
}

// Flames for Fire type
function FireEffect() {
  const flames = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 0.3,
    size: 8 + Math.random() * 12,
  }))

  return (
    <>
      {flames.map((flame) => (
        <div
          key={flame.id}
          className="absolute animate-flame"
          style={{
            left: flame.left,
            bottom: "-5px",
            animationDelay: `${flame.delay}s`,
            width: `${flame.size}px`,
            height: `${flame.size * 1.5}px`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300/0 rounded-t-full opacity-80" 
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>
      ))}
    </>
  )
}

// Overgrowth Effect for Grass type - Vines + Spores
function GrassEffect() {
  // Spore/Pollen particles rising from bottom
  const spores = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 0.8,
    duration: 1 + Math.random() * 0.5,
    size: 2 + Math.random() * 2,
    drift: (Math.random() - 0.5) * 30,
  }))

  return (
    <>
      {/* Left Vine */}
      <div 
        className="absolute left-0 bottom-0 w-[4px] bg-gradient-to-t from-green-800 via-green-600 to-green-400 animate-vine-grow"
        style={{ 
          imageRendering: "pixelated",
          boxShadow: "2px 0 0 #166534",
        }}
      />
      
      {/* Right Vine */}
      <div 
        className="absolute right-0 bottom-0 w-[4px] bg-gradient-to-t from-green-800 via-green-600 to-green-400 animate-vine-grow"
        style={{ 
          imageRendering: "pixelated",
          boxShadow: "-2px 0 0 #166534",
          animationDelay: "0.1s",
        }}
      />
      
      {/* Spore/Pollen Particles */}
      {spores.map((spore) => (
        <div
          key={spore.id}
          className="absolute animate-spore-rise"
          style={{
            left: `${spore.left}%`,
            bottom: "-4px",
            width: `${spore.size}px`,
            height: `${spore.size}px`,
            backgroundColor: spore.id % 3 === 0 ? "#fef08a" : spore.id % 2 === 0 ? "#bbf7d0" : "#86efac",
            animationDelay: `${spore.delay}s`,
            animationDuration: `${spore.duration}s`,
            ["--drift" as string]: `${spore.drift}px`,
            imageRendering: "pixelated",
          }}
        />
      ))}
    </>
  )
}

// Sparkles for Fairy type
function SparkleEffect() {
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 0.5,
    size: 8 + Math.random() * 8,
  }))

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            className="text-pink-200"
          >
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </>
  )
}

export function CommandButton({ label, icon: Icon, color, onClick }: CommandButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const styles = colorStyles[color]

  const getParticleEffect = () => {
    if (!isHovered) return null
    switch (color) {
      case "blue":
        return <RainEffect />
      case "red":
        return <FireEffect />
      case "green":
        return <GrassEffect />
      case "pink":
        return <SparkleEffect />
      default:
        return null
    }
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${styles.bg} ${styles.border} ${styles.active}
        pixel-btn
        relative overflow-hidden
        p-3 sm:p-4
        flex flex-col items-center justify-center gap-1 sm:gap-2
        cursor-pointer transition-all duration-100
        text-white
        min-h-[70px] sm:min-h-[90px]
      `}
    >
      {/* Particle Effects Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {getParticleEffect()}
      </div>

      {/* Content Layer - Above Effects */}
      <div className={`relative z-10 flex flex-col items-center justify-center gap-1 sm:gap-2 transition-transform duration-200 ${isHovered && color === "green" ? "-translate-y-1" : ""}`}>
        <Icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2.5} />
        <span className="text-[8px] sm:text-[10px] font-bold tracking-wide">{label}</span>
      </div>
    </button>
  )
}
