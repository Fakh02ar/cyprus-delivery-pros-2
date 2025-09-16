import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutSection = () => {
  const images = ["/cyprus-1.jpeg", "/cyprus-2.jpeg"]; // apni images add karein
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent text-center">
            About Jimmy Fleet
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* Left Text Section */}
            <div className="order-2 lg:order-1 text-lg lg:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong className="text-accent">Jimmy Fleet</strong> is a
                delivery service that helps restaurants bring food to customers
                quickly and safely. We work as a{" "}
                <strong className="text-primary">
                  fleet partner with delivery companies inside Cyprus
                </strong>
                , which means we manage a team of trained riders who deliver
                orders from restaurants to people's homes.
              </p>

              <p>
                We have built a strong network of{" "}
                <strong className="text-success">more than 100 riders</strong>{" "}
                across Cyprus. Our goal is to make sure every delivery is on
                time, every customer is happy, and every restaurant can focus on
                cooking while we take care of the transport.
              </p>

              <p>
                We provide{" "}
                <strong className="text-success">
                  support to our riders every day
                </strong>{" "}
                and make sure they have the tools and guidance to do their job
                well.
              </p>
            </div>

            {/* Right Image Slider Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full lg:max-w-md xl:h-[370px] lg:h-[400] flex items-center justify-center">
                {/* Current Image */}
                <img
                  src={images[current]}
                  alt={`Slide ${current + 1}`}
                  className="shadow-lg w-full xl:h-[360px] lg:h-[400px] object-cover mt-2"
                />

                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full ${
                        current === index ? "bg-white" : "bg-gray-400"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Quick and reliable service for every order
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Professional Team
              </h3>
              <p className="text-muted-foreground">
                Trained and experienced riders
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">
                24/7 Support
              </h3>
              <p className="text-muted-foreground">
                Always here to help our riders
              </p>
            </div>

            <div className="card-elegant text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Delivery Partnership
              </h3>
              <p className="text-muted-foreground">
                Official fleet partner with proven track record
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
