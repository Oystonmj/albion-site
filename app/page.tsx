import { HookSection } from "@/components/sections/HookSection";
import { PainSection } from "@/components/sections/PainSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import content from "@/content/albion.json";

export default function Page() {
  return (
    <>
      <HookSection data={content.hero} />
      <PainSection items={content.pains} />
      <PersonaSection data={content.persona} />
      <PrinciplesSection items={content.principles} />
      <ProofSection data={{ proofs: content.proofs, testimonials: content.testimonials }} />
      <FinalCTASection data={content.finalCta} />
    </>
  );
}