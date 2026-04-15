"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import classNames from "classnames";
import SectionHeadingComponent from "@/_components/ui/section-heading-component";
import generalData from "@/_data/general-data.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { testimonials },
} = generalData;

const TestimonialSlide = ({
  quote,
  name,
}: {
  quote: string[];
  name: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setOverflows(contentRef.current.scrollHeight > 100);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center text-center px-5 desktop:px-15">
      <div
        ref={contentRef}
        className={classNames("relative overflow-hidden flex flex-col gap-3", {
          "max-h-[100px]": !expanded,
        })}
      >
        {quote.map((paragraph, i) => (
          <blockquote key={i} className="text-paragraph">
            {paragraph}
          </blockquote>
        ))}
        {!expanded && overflows && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-lustre to-transparent pointer-events-none" />
        )}
      </div>
      {!expanded && overflows && (
        <button
          onClick={() => setExpanded(true)}
          className="text-white text-[14px] px-2 py-1 bg-citrine rounded-md font-light desktop:hover:opacity-80 desktop:hover:cursor-pointer ease-in-out duration-300"
        >
          Read more +
        </button>
      )}
      <cite className="text-paragraph not-italic font-bold">- {name}</cite>
    </div>
  );
};

const TestimonialsComponent = ({ cssClasses }: Props) => {
  return (
    <section className={classNames("flex flex-col gap-10 pt-15", cssClasses)}>
      <SectionHeadingComponent>Testimonials</SectionHeadingComponent>
      <div className="relative pb-10 border-b-[3px] border-citrine">
        <div className="overflow-x-hidden">
          <Swiper
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            speed={1000}
            loop
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ dynamicBullets: true }}
            navigation={{
              prevEl: ".swiper-testimonial-button-prev-custom",
              nextEl: ".swiper-testimonial-button-next-custom",
            }}
            style={
              {
                "--swiper-pagination-color": "#9097AA",
                "--swiper-pagination-bullet-inactive-color": "#9097AA",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
              } as React.CSSProperties
            }
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-10">
                <TestimonialSlide
                  quote={testimonial.quote}
                  name={testimonial.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          className="swiper-testimonial-button-prev-custom hidden desktop:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center desktop:hover:cursor-pointer desktop:hover:opacity-75 ease-in-out duration-300"
          aria-label="Previous slide"
        >
          <CircleChevronLeft size={24} color="#1A1B1C" />
        </button>
        <button
          className="swiper-testimonial-button-next-custom hidden desktop:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center desktop:hover:cursor-pointer desktop:hover:opacity-75 ease-in-out duration-300"
          aria-label="Next slide"
        >
          <CircleChevronRight size={24} color="#1A1B1C" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
