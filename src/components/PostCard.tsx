"use client";

import * as React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";

interface PostCardProps {
  post: {
    id: number;
    directive: string;
    images: string[];
  };
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <h3 className="font-semibold">{post.directive}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>Message</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Send className="mr-2 h-4 w-4" />
              <span>Repost</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {post.images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Post image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {post.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </>
          )}
        </Carousel>
      </CardContent>
      <CardFooter className="p-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setIsLiked(!isLiked)}>
          <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          <span className="sr-only">Like</span>
        </Button>
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Comment</span>
        </Button>
      </CardFooter>
    </Card>
  );
}