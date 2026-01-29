import { useRef, useEffect, useState } from 'react';

const stats = [
  { id: 1, name: 'Cars Cleaned', value: '50,000+', description: 'Professional cleaning services' },
  { id: 2, name: 'Happy Customers', value: '15,000+', description: 'Satisfied clients worldwide' },
  { id: 3, name: 'Years of Excellence', value: '5+', description: 'Trusted by our community' },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [animateIndex, setAnimateIndex] = useState(-1); // track current animating stat

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stats.forEach((_, i) => {
            setTimeout(() => {
              setAnimateIndex(i); // trigger one at a time
            }, i * 600); // stagger
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-white max-w-2xl mx-auto">
            Shine Ride has been delivering exceptional car cleaning services to thousands of satisfied customers.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-white">{stat.name}</dt>

              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {animateIndex >= index && stat.value}
              </dd>

              <p className="text-white">{stat.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
