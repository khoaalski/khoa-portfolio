"use client"

import { useState } from "react"
import { Book, Briefcase, Gamepad2, Package, type LucideIcon } from "lucide-react"
import { DialogueBox } from "@/components/dialogue-box"
import { CommandButton } from "@/components/command-button"
import { ContentModal } from "@/components/content-modal"

export type MenuOption = "EDUCATION" | "EXPERIENCE" | "HOBBY" | "OTHERS" | null

// Define exactly what a menu item looks like
type MenuItem = {
  id: MenuOption
  label: string
  icon: LucideIcon
  color: "red" | "blue" | "green" | "pink"
}

export default function BattlePage() {
  const [selectedOption, setSelectedOption] = useState<MenuOption>(null)

  // Explicitly type this array as MenuItem[]
  const menuItems: MenuItem[] = [
    {
      id: "EDUCATION",
      label: "EDUCATION",
      icon: Book,
      color: "blue",
    },
    {
      id: "EXPERIENCE",
      label: "EXPERIENCE",
      icon: Briefcase,
      color: "green",
    },
    {
      id: "HOBBY",
      label: "HOBBY",
      icon: Gamepad2,
      color: "red",
    },
    {
      id: "OTHERS",
      label: "OTHERS",
      icon: Package,
      color: "pink",
    },
  ]

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#1a1a2e]">
      {/* Top Section - Dark Forest Background */}
      <section
        className="relative flex-1 flex flex-col justify-end bg-cover bg-bottom bg-repeat-x"
        style={{
          backgroundImage: `url('/images/dark-forest.png')`,
          minHeight: "60vh",
        }}
      >

        {/* Character Stage */}
        <div className="relative mx-auto flex h-[500px] w-full max-w-[800px] items-end justify-center mb-14 scale-125 origin-bottom">
          
          {/* Zoroark */}
          <div className="pointer-events-none absolute bottom-0 right-[48%] z-20">
            <img
              src="/images/zoroark.gif"
              alt="Zoroark"
              className="h-64 w-auto object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Trainer */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-30 -translate-x-1/2 drop-shadow-2xl">
            <img
              src="/images/avatar.png"
              alt="Khoa"
              className="h-72 w-auto object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Bayleef */}
          <div className="pointer-events-none absolute bottom-0 left-[56%] z-20">
            <img
              src="/images/bayleef.gif"
              alt="Bayleef"
              className="h-68 w-auto object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Clefairy */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-50 -translate-x-1/2">
            <img
              src="/images/clefairy.gif"
              alt="Clefairy"
              className="h-20 w-auto object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </section>

      {/* Bottom Section - Battle UI */}
      <section className="w-full shrink-0 p-2">
        <div className="flex flex-col items-stretch gap-2 md:flex-row">
          {/* Left Column - Dialogue Box */}
          <div className="w-full md:w-3/5">
            <DialogueBox className="h-full" />
          </div>

          {/* Right Column - Command Menu */}
          <div className="w-full md:w-2/5">
            <div className="grid h-full grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <CommandButton
                  key={item.id as string}
                  label={item.label}
                  icon={item.icon}
                  color={item.color}
                  onClick={() => setSelectedOption(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Modal */}
      <ContentModal
        option={selectedOption}
        onClose={() => setSelectedOption(null)}
      />
    </main>
  )
}