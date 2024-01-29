"use client"
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps){
const {messages, input, handleInputChange, handleSubmit} = useChat(
  {api: '/api/chat'}
)

  return(
  <Card className="w-[400px]">
  <CardHeader>
    <CardTitle>Chat AI</CardTitle>
    <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
  </CardHeader>
  <CardContent >
    <ScrollArea className="h-[640px] w-full space-y-4">

    {messages.map(message =>{
      return( 
        <div className="flex gap-3 text-slate-600 text-sm mt-2" key={message.id}>
        {message.role === 'user' && (
          <Avatar>
            <AvatarFallback>SA</AvatarFallback>
            <AvatarImage src="https://github.com/eusamir.png"/>
          </Avatar>
        )}

        {message.role === 'assistant' && (
          <Avatar>
            <AvatarFallback>ChatGPT</AvatarFallback>
            <AvatarImage src="https://github.com/chatgpt.png"/>
          </Avatar>
        )}

        
        <p className="leading-relaxed mb-5 mr-3">
          <span className="block font-bold text-slate-800">
            {message.role === 'user' ? 'Você:' : 'AI:'}
          </span>
          {message.content}</p>
      </div>
      )
    })}
    </ScrollArea>
  </CardContent>
  <CardFooter>
    <form className="w-full flex gap-2" onSubmit={handleSubmit}>
      <Input placeholder="How can i help you?" value={input} onChange={handleInputChange}/>
      <Button type="submit">Send</Button>
    </form>
  </CardFooter>
</Card>
)
}