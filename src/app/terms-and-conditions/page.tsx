
// app/terms-and-conditions/page.tsx
import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Nordic Tiempo Lento',
  description:
    'Terms and Conditions for the Nordic Tiempo Lento website and communications.',
};

export function TermsAndConditionsPage() {
  const updated = '17 March 2026';

  return (
    <main className="w-full min-h-screen bg-[#F8F7F5] py-24 md:py-32 px-6">
      <section className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="text-[0.75rem] font-bold tracking-widest uppercase text-[#B98A45] mb-4">
            Legal
          </div>
          <h1 className="text-4xl md:text-[3.5rem] font-bold text-[#111C18] leading-tight tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-3xl mt-4">
            These Terms &amp; Conditions govern your use of the Nordic Tiempo Lento website. Nordic
            Tiempo Lento is an early-stage startup in Finland developing science-led concepts related
            to skin health, the gut-skin axis, microbiome science, and sustainable bioactive
            innovation.
          </p>
          <p className="text-sm text-[#6B6B6B] mt-4">Last updated: {updated}</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">1. Acceptance of these terms</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              By accessing or using this website, you agree to be bound by these Terms &amp;
              Conditions and applicable law. If you do not agree, please do not use the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">2. Informational purpose only</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>
                The content on this website is provided for general informational purposes only. It is
                intended to describe our scientific interests, startup vision, and potential business
                direction.
              </p>
              <p>
                Because we are an early-stage company, parts of our website may describe concepts,
                research directions, product ambitions, or future plans that are still under evaluation
                and may change substantially.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">3. No medical or health advice</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>
                Nothing on this website is intended to constitute medical advice, diagnosis, treatment,
                or healthcare guidance.
              </p>
              <p>
                Our content should not be relied upon as a substitute for advice from qualified medical
                or healthcare professionals. Always seek professional advice regarding any health,
                nutrition, or medical concerns.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">4. No offer or solicitation</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>
                Nothing on this website constitutes an offer to sell, a solicitation of an offer to
                buy, or a recommendation regarding any securities, financial instruments, investment,
                partnership, or commercial arrangement.
              </p>
              <p>
                Any discussions with investors, partners, advisors, or other stakeholders are subject to
                separate communications and, where relevant, separate agreements.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">5. Intellectual property</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Unless otherwise stated, the content of this website, including text, branding, logos,
              graphics, page design, and other materials, is owned by or licensed to Nordic Tiempo
              Lento and is protected by applicable intellectual property laws. You may not reproduce,
              distribute, modify, republish, or commercially exploit website content without prior
              written permission, except as permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">6. Acceptable use</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website unlawfully or in violation of applicable regulations</li>
                <li>Attempt to gain unauthorized access to systems, infrastructure, or data</li>
                <li>Interfere with the operation or security of the website</li>
                <li>Copy, scrape, or use the website content in a misleading or infringing manner</li>
                <li>Use our name, branding, or materials in a way that falsely implies endorsement</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">7. Accuracy and forward-looking statements</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>
                We aim to keep the website accurate and up to date, but we do not guarantee that all
                content is complete, current, or error-free.
              </p>
              <p>
                Any statements about future products, scientific development, business plans, market
                opportunities, regulatory pathways, funding, collaborations, or expected outcomes are
                inherently uncertain and should not be interpreted as guarantees.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">8. Third-party content and links</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              This website may include links to third-party websites, tools, or services for
              convenience. We do not control and are not responsible for third-party content,
              availability, security, or practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">9. Limitation of liability</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              To the fullest extent permitted by law, Nordic Tiempo Lento disclaims liability for any
              direct, indirect, incidental, consequential, or special damages arising from or related
              to your use of, or inability to use, this website or reliance on its content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">10. Indemnity</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              You agree to indemnify and hold harmless Nordic Tiempo Lento from claims, damages,
              liabilities, and expenses arising from your misuse of the website or violation of these
              Terms &amp; Conditions, to the extent permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">11. Privacy</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Your use of the website is also subject to our Privacy Policy, which explains how we may
              collect and process personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">12. Changes to the website or terms</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              We may modify or update the website and these Terms &amp; Conditions at any time, without
              prior notice. Continued use of the website after changes are posted constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">13. Governing law</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              These Terms &amp; Conditions are governed by the laws of Finland, without regard to
              conflict of law principles, unless mandatory law requires otherwise.
            </p>
          </section>

          <section className="space-y-3 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#111C18]">14. Contact</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Questions about these Terms &amp; Conditions can be sent to{' '}
              <a className="text-[#8B0000] hover:underline" href="mailto:info@nordictiempolento.com">
                info@nordictiempolento.com
              </a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default TermsAndConditionsPage;

