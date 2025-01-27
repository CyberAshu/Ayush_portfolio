"use client";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GEMINI_API_KEY: string
    }
  }
}
;

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X } from "lucide-react"
import { GoogleGenerativeAI } from "@google/generative-ai"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [scrollAreaRef]) //Corrected dependency

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string)
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })

      const prompt = `You are a professional AI assistant on Ayush Sen's portfolio website. Be concise and friendly. Your main goals are:

1. Share information about Ayush Sen's work:
- Full-stack developer with expertise in modern web technologies
- Creates innovative web solutions and applications
- Based in Indore, India

2. Highlight key projects and work:
- Aaradhya Dharma (https://aaradhyadhrma.life/) - A wellness and spiritual platform
[Add 2-3 other key projects here]

3. Guide visitors to:
- View detailed project showcases
- Schedule a meeting through Calendly
- Contact through the form for business inquiries
- Connect on professional networks

Keep responses under 3 sentences unless specifically asked for details. Always encourage viewing the portfolio or making contact for serious inquiries.

Query: ${input}`

      const result = await model.generateContent(prompt)
      const text = result.response.text()

      const assistantMessage: Message = { role: "assistant", content: text }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try again later.",
      }
      setMessages((prev) => [...prev, errorMessage])
    }

    setIsLoading(false)
  }

  return (
    <>
      <Button className="fixed bottom-4 right-4 rounded-full p-4" onClick={() => setIsOpen(true)}>
        <MessageCircle className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-background border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-semibold">Chat with Ayush's AI</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="h-80 p-4" ref={scrollAreaRef}>
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
              {isLoading && <div className="text-center text-muted-foreground">Thinking...</div>}
            </ScrollArea>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

