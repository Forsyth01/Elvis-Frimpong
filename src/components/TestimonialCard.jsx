import React from "react";

const TestimonialCard = () => {
  const feedbacks = [
    {
      quote:
        "Elvis transformed our data strategy at TradePeak! His dashboards are intuitive, insightful, and have streamlined our decision-making process. A true data wizard!",
      rating: 5,
      name: "Michael Chen",
      title: "CTO, TradePeak Solutions",
      image: "/Image/profilepic/1.jpg",
    },
    {
      quote:
        "Elvis's analytical skills are top-tier! He built predictive models for Genix Analytics that boosted our forecasting accuracy by 30%. His work is precise and impactful.",
      rating: 5,
      name: "Sarah Thompson",
      title: "Head of Analytics, Genix Analytics",
      image: "/Image/profilepic/2.jpg",
    },
    {
      quote:
        "Working with Elvis was a game-changer. His ability to turn raw data into actionable insights for Prospa Ventures was phenomenal. Fast, clear, and brilliant!",
      rating: 5,
      name: "David Okoye",
      title: "CEO, Prospa Ventures",
      image: "/Image/profilepic/3.jpg",
    },
    {
      quote:
        "Elvis delivered stunning visualizations that made complex data accessible for our team at DataCore. His attention to detail and clarity is unmatched!",
      rating: 5,
      name: "Amaka Nwosu",
      title: "Data Lead, DataCore Systems",
      image: "/Image/profilepic/4.jpg",
    },
    {
      quote:
        "Elvis's data pipelines for InsightFlow are flawless. He optimized our workflows, saving us hours of processing time. His expertise is a cut above the rest!",
      rating: 5,
      name: "Rachel Patel",
      title: "Operations Manager, InsightFlow",
      image: "/Image/profilepic/5.jpg",
    },
  ];

  return (
    <div>
      <div className="flex gap-10">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-yellow-50 p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <p className="text-gray-700 italic mb-4">"{feedback.quote}"</p>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-10 h-10 object-cover rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold text-gray-900">{feedback.name}</p>
                  <p className="text-gray-600 text-sm">{feedback.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;