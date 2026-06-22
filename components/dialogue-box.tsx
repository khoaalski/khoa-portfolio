"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"

const dialogueLines = [
  "Hello hello, I'm Khoa (pronounced like quoi in French), an aspiring Product Manager currently working in Growth at Wealthsimple.",
  "I hope this website tells you more about me. Don't be afraid to reach out!",
  "Toronto, ON",
  "Email: kbsch28@gmail.com",
]

interface DialogueBoxProps {
  className?: string
}

export function DialogueBox({ className = "" }: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isComplete) return

    const fullText = dialogueLines.join("\n\n")

    if (charIndex < fullText.length) {
      // Typing speed: 30ms per character
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 30)
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [charIndex, isComplete])

  const formatText = (text: string) => {
    return text.split("\n\n").map((line, index) => {
      const formattedLine = line
        // Highlight 'Khoa'
        .replace(
          /Khoa/g,
          '<span class="text-[#4d96ff] font-bold">Khoa</span>'
        )
        // Highlight 'Product Manager'
        .replace(
          /Product Manager/g,
          '<span class="text-[#ffd93d] font-bold">Product Manager</span>'
        )
        // Linkify Email
        .replace(
          /kbsch28@gmail\.com/g,
          '<a href="mailto:kbsch28@gmail.com" class="underline decoration-green-400 decoration-2 underline-offset-2 hover:text-white transition-colors cursor-pointer relative z-50">kbsch28@gmail.com</a>'
        )

      // Special layout for the Location Line
      // UPDATE: Changed index from 1 to 2 because we added a new text line above
      if (index === 2) {
        return (
          <div key={index} className="flex items-center gap-2 mb-2 last:mb-0 leading-relaxed text-[#a7f3d0]">
            <MapPin className="w-4 h-4 text-[#ff6b6b] shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          </div>
        )
      }

      // Standard layout for Bio and Email
      return (
        <p
          key={index}
          className="mb-2 last:mb-0 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      )
    })
  }

  return (
    <div className={`bg-[#1a3320] border-4 border-[#4ade80] rounded-lg p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex flex-col ${className}`}>
      {/* Fixed height (h-32) prevents zooming/shifting */}
      <div className="text-[#a7f3d0] font-pixel text-[10px] md:text-xs lg:text-sm leading-loose whitespace-pre-line h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#4ade80] scrollbar-track-transparent">
        {formatText(displayedText)}
        {!isComplete && (
          <span className="inline-block w-2 h-3 bg-[#a7f3d0] ml-1 animate-pulse align-middle" />
        )}
      </div>
    </div>
  )
}