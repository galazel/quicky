import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";


function Countdown({ initialSeconds }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <span className="countdown font-mono text-2xl">{formatTime(timeLeft)}</span>
  );
}

function Quiz() {
  const location = useLocation();
  const quizData = location.state;
  const quiz = JSON.parse(quizData);

  return (
    <main className="flex flex-col gap-1 justify-center items-center mb-20">
      <header className="flex flex-col justify-center gap-5">
        <h1 className="text-center text-4xl">{quiz["quiz-title"].title}</h1>
        <p className="text-center text-2xl w-5xl">
          {quiz["quiz-title"].instruction}
        </p>
      </header>

      <section className="w-[50vw] h-[65vh] flex gap-1 flex-col">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHourglassEnd} className="animate-spin" />
          <Countdown initialSeconds={600} />
        </div>
        <Carousel className="w-full h-full">
          <CarouselContent>
            {quiz["quiz"].map((element, key) => (
              <CarouselItem key={key} className="inset-shadow-2xs">
                <div className="p-1">
                  <Card className="border-none rounded-none">
                    <CardContent className="flex aspect-video items-center justify-center p-5">
                      <div className="flex flex-col gap-10 w-full">
                        <p className="text-black text-4xl">
                          {key + 1}. {element["question"]}
                        </p>
                        <div className="flex flex-col gap-3">
                          {element["choices"].map((item, index) => (
                            <div className="flex gap-3" key={index}>
                              <input
                                type="radio"
                                required
                                name={`choice-${key}`} 
                                id={`choice-${key}-${index}`}
                              />
                              <label htmlFor={`choice-${key}-${index}`}>
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
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
