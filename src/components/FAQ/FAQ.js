import React, { useState, useEffect } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What pet care services does Pet Me Maa offer?",
    answer: "Pet Me Maa is a complete pet care center in Noida offering premium dog boarding, daycare, professional grooming, veterinary care, dog training, spacious indoor and outdoor play areas, a hygienic swimming pool, and an exclusive pet-friendly cafe called Cafe Pooch."
  },
  {
    question: "Where is Pet Me Maa located?",
    answer: "Pet Me Maa operates out of two prime locations in Noida—one in Sector 115 and another in Sector 162. Whether you choose our Sector 115 branch or our Sector 162 center, your pet will enjoy the exact same luxurious, supervised, and cage-free environment. You can reach out to our team to find the facility nearest to you!"
  },
  {
    question: "Why is Pet Me Maa considered the best dog boarding facility in Noida?",
    answer: "Unlike regular kennels, Pet Me Maa offers luxurious, home-like comfort. Our dog boarding facility features lush green fenced playgrounds, swings, supervised playtime, healthy meals, and an on-premise vet, ensuring your pet is safe, active, and loved."
  },
  {
    question: "Does Pet Me Maa provide professional dog grooming services?",
    answer: "Yes, we offer expert pet grooming services in Noida. From basic baths and tick treatments to stylish breed-specific makeovers, our professional groomers pamper your pets in a safe and stress-free spa environment."
  },
  {
    question: "Is there a dog swimming pool available at Pet Me Maa?",
    answer: "Yes! Pet Me Maa features a secure, highly hygienic pet-friendly swimming pool. It is perfect for canine exercise, hydrotherapy, or simply letting your dog splash and have fun under expert supervision."
  },
  {
    question: "Does Pet Me Maa have an in-house veterinary clinic?",
    answer: "Yes, we provide expert veterinary care under one roof. Our on-premise vet team is available for routine checkups, preventive care, vaccinations, and emergencies, ensuring your pet's health is always in expert hands."
  },
  {
    question: "What is Cafe Pooch at Pet Me Maa?",
    answer: "Cafe Pooch is our exclusive pet-friendly cafeteria in Noida. It's a wonderful space where pet parents can enjoy delicious multi-cuisine food with family and friends while their furry companions relax right beside them."
  },
  {
    question: "Do you offer pet pick-up and drop-off services?",
    answer: "Yes, we understand that pet parents have busy schedules. Pet Me Maa offers safe, comfortable, and reliable pick-up and drop-off services across Noida and surrounding areas for boarding, grooming, and daycare appointments."
  },
  {
    question: "Is dog daycare available at Pet Me Maa for working pet parents?",
    answer: "Absolutely. Our dog daycare service provides a safe, supervised, and fun environment for your dog while you work. They get to socialize in our indoor and outdoor play zones, ensuring they return home happy and tired."
  },
  {
    question: "Does Pet Me Maa offer dog training and obedience schooling?",
    answer: "Yes, our pet schooling includes basic obedience training, behavioral correction, and supervised socialization sessions led by experienced dog trainers and animal behaviorists to help your dog become well-adjusted and well-mannered."
  },
  {
    question: "How do I book pet boarding or grooming at Pet Me Maa?",
    answer: "You can easily book our services by calling us, sending a message, or visiting our website. We recommend booking your pet's boarding, daycare, or grooming sessions in advance, especially during weekends and festive holidays."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Instantly scroll to top when the FAQ page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SEO: FAQPage structured data so Google can show these as rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="faq-wrapper">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">Answers to common questions about Pet Me Maa</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                  &#9662;
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;