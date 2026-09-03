import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <section className="bg-cream text-charcoal px-14 py-24">
        <p className="text-ember text-sm uppercase tracking-widest font-semibold mb-4">
          How it works
        </p>
        <h2 className="font-bold text-3xl max-w-xl mb-16">
          Five passes of reasoning, not one lucky guess
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <FeatureCard
            title="Deep, staged reasoning"
            description="Your plan is parsed, brainstormed against, and re-examined branch by branch."
          />
          <FeatureCard
            title="Grounded in real sources"
            description="Top risks are checked against live search results, with citations."
          />
          <FeatureCard
            title="See it, don't just read it"
            description="Every risk is a branch you can click into — specific and ranked."
          />
        </div>
      </section>
    </main>

  );
}