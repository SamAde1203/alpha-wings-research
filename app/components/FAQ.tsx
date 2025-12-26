
//app/components/FAQ.tsx
export default function FAQ() {
  const faqs = [
    {
      q: "Who is this for?",
      a: "Christian academics at any career stage PhD students, postdocs, assistant professors, tenured faculty, or adjuncts. If you feel scattered in your research and want strategic clarity, this is for you."
    },
    {
      q: "What if I'm in a niche field?",
      a: "The framework works across all theological and biblical studies disciplines—systematic theology, biblical studies, church history, practical theology, ethics, and more. I tailor everything to your specific field."
    },
    {
      q: "How much time do I need to invest?",
      a: "About 2 hours total: 30 minutes for discovery call, 20 minutes for intake questionnaire, 60 minutes for kickoff, and 90 minutes for delivery. I do all the heavy lifting."
    },
    {
      q: "What if I don't have publications yet?",
      a: "That's perfect—we'll design your publication strategy from scratch. Early career academics often benefit most because we can build the right trajectory from the beginning."
    },
    {
      q: "Will this work if I'm bivocational (pastor + academic)?",
      a: "Absolutely. We'll design a strategy that honors both callings and shows how they can strengthen each other rather than compete."
    },
    {
      q: "What if my institution doesn't support my research focus?",
      a: "We'll navigate that tension strategically finding ways to meet institutional expectations while advancing work that matters to you and the Church."
    },
    {
      q: "Can I pay in installments?",
      a: "Yes—I offer 50% now and 50% at delivery if that helps. Just mention it on the discovery call."
    },
    {
      q: "What happens after the intensive?",
      a: "You'll have a complete strategic plan to execute independently. If you want ongoing support, I may offer a continuation program in the future, but it's not required."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-lightGray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-4">{faq.q}</h3>
              <p className="text-lg text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}