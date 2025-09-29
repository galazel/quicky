import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useLocation } from "react-router-dom";

function Quiz() {
  const location = useLocation();
  const quizData = location.state;
  const quiz = JSON.parse(quizData);

  return (
    <main className="flex flex-col gap-5 justify-center items-center">
      <header className="flex flex-col justify-center">
        <h1 className="text-center text-4xl">
          {quiz["quiz-title"].title}Placeholder
        </h1>
        <p className="text-center text-2xl w-5xl">
          {quiz["quiz-title"].instruction}
          Placeholder
        </p>
      </header>
      <section className=" w-[50vw] h-[60vh] flex justify-center">
        <Carousel className="w-full h-full ">
          <CarouselContent>
            {Array.from({ length: quiz.quiz.length }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 ">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-5 ">
                      <div>
                        <p></p>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}

export default Quiz;
