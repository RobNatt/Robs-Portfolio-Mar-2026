import { TextAnimationBlurFadeIn, TextAnimationTypewriterEffect } from "@/components/TextEffects";
import { DotDistortionShader } from "@/components/DotDistortionShader";
import { SimpleNavbarWithHoverEffects } from "@/components/HeaderNavBar";
import { Footer } from "@/components/Footer";
import { LogoClouds } from "@/components/LogoClouds";
import { Projects } from "@/components/Projects";
import { HeroPhoto } from "@/components/HeroPhoto";
import { RemoteGlobe } from "@/components/RemoteGlobe";
import { ContactForm } from "@/components/ContactForm";
import { ConsultationMetrics } from "@/components/ConsultationMetrics";
import { TypewriterEffectDemo } from "@/components/TypewriterEffect";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      {/* Fixed background layer */}
      <div className="fixed inset-0 z-0">
        <DotDistortionShader
          dotGap={14}
          dotSize={1}
          mouseRadius={100}
          distortionStrength={1.2}
          returnSpeed={0.06}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {/* Content layer above background */}
      <div className="relative z-10 max-w-screen-lg mx-auto">
        <SimpleNavbarWithHoverEffects />
        <div className="flex flex-row items-center justify-center">
          <TextAnimationTypewriterEffect />
          <HeroPhoto />
        </div>
        <div id="projects" className="mt-32 scroll-mt-32">
          <TextAnimationBlurFadeIn />
        </div>
        <Projects />
        <LogoClouds />
        <div id="Services" className="mt-32 scroll-mt-32">
          <TypewriterEffectDemo />
        </div>
        <div id="consultation-metrics" className="scroll-mt-32">
          <ConsultationMetrics />
        </div>
        <div id="prices" className="scroll-mt-32">
          <RemoteGlobe />
        </div>
        <div id="contact" className="scroll-mt-32">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </section>
  )
}

