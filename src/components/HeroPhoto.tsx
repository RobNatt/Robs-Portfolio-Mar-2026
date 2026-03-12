import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import profPhoto from "../../public/profphoto.png"

export function HeroPhoto() {
  return (
    <Card className="relative mx-auto w-full max-w-lg pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={profPhoto.src}
        alt="Profile photo"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-60"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Meet the Developer</CardTitle>
        <CardDescription>
          "I create meaningful experiences for users and businesses alike."
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
