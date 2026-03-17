// app/privacy-policy/page.tsx
import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Nordic Tiempo Lento',
  description:
    'Privacy Policy for Nordic Tiempo Lento, an early-stage Finnish startup developing science-led skin health solutions through the gut-skin axis.',
};

export default function PrivacyPolicyPage() {
  const updated = '17 March 2026';

  return (
    <main className="w-full min-h-screen bg-[#F8F7F5] py-24 md:py-32 px-6">
      <section className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="text-[0.75rem] font-bold tracking-widest uppercase text-[#B98A45] mb-4">
            Legal
          </div>
          <h1 className="text-4xl md:text-[3.5rem] font-bold text-[#111C18] leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-3xl mt-4">
            Nordic Tiempo Lento is an early-stage startup based in Finland. We are building
            science-led approaches to skin health through the gut-skin axis, including future
            microbiome- and nutrition-based products. This Privacy Policy explains how we collect,
            use, and protect personal data when you visit our website or contact us.
          </p>
          <p className="text-sm text-[#6B6B6B] mt-4">Last updated: {updated}</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">1. Data controller</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-1">
              <p><strong>Nordic Tiempo Lento</strong></p>
              <p>Keskuskatu 16 A 49, 11100 Riihimäki, Finland</p>
              <p>Email: info@nordictiempolento.com</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">2. What personal data we may collect</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>We may collect personal data that you choose to provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Organization or professional affiliation, if you provide it</li>
                <li>Subject and contents of your message</li>
                <li>Any other information you voluntarily send through our contact form or email</li>
              </ul>
              <p>
                We may also collect limited technical data automatically through normal website
                operation, such as IP address, browser type, device information, referring pages,
                and basic usage data.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">3. How we collect data</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>We collect data when:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You submit a contact form on our website</li>
                <li>You email us directly</li>
                <li>You browse our website</li>
                <li>You interact with embedded third-party services, if any are enabled on the site</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">4. Why we process your data</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>We process personal data only where there is a valid reason to do so, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries from investors, partners, researchers, media, or other visitors</li>
                <li>Operate, maintain, and improve our website</li>
                <li>Understand website use and performance</li>
                <li>Protect the security and integrity of the site</li>
                <li>Comply with legal obligations</li>
                <li>
                  Evaluate potential collaborations, pilot discussions, scientific partnerships, or
                  business opportunities relevant to our early-stage activities
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">5. Legal bases for processing</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>Depending on the situation, our legal basis under applicable data protection law may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your consent</li>
                <li>Our legitimate interest in operating and developing the website and our business</li>
                <li>Taking steps at your request before entering into a potential business relationship</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">6. Sharing of personal data</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>We do not sell personal data.</p>
              <p>We may share data with trusted service providers that help us operate the website or respond to inquiries, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website hosting and infrastructure providers</li>
                <li>Form handling or email delivery providers</li>
                <li>Analytics or security providers, if enabled</li>
              </ul>
              <p>
                We may also disclose information if required by law, regulation, legal process, or to
                protect our rights, users, or operations.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">7. International transfers</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Some of our service providers may process data outside Finland or the European Economic
              Area. Where that happens, we aim to use appropriate safeguards required under applicable
              law, such as contractual protections or providers that offer adequate levels of data
              protection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">8. Data retention</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              We keep personal data only as long as reasonably necessary for the purposes described in
              this Privacy Policy, including responding to your inquiry, maintaining business records,
              complying with legal obligations, and resolving disputes. Because we are an early-stage
              company, our processes may evolve, but we aim to keep retention proportionate and limited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">9. Your rights</h2>
            <div className="text-[#5A5A5A] leading-relaxed space-y-3">
              <p>Subject to applicable law, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to or request restriction of certain processing</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request data portability where applicable</li>
                <li>Lodge a complaint with a competent data protection authority</li>
              </ul>
              <p>
                To exercise these rights, contact us at{' '}
                <a className="text-[#8B0000] hover:underline" href="mailto:info@nordictiempolento.com">
                  info@nordictiempolento.com
                </a>.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">10. Cookies and similar technologies</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Our website may use cookies or similar technologies that are necessary for site
              functionality, security, analytics, or performance. If we later enable non-essential
              cookies, analytics tools, or marketing technologies, we may update this policy and, where
              required, provide an appropriate cookie notice or consent mechanism.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">11. Third-party links and services</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Our website may contain links to third-party websites or use embedded services. We are not
              responsible for the privacy practices of third parties. We encourage you to review their
              policies separately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">12. Children&apos;s privacy</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Our website is not directed to children, and we do not knowingly collect personal data
              from children through this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111C18]">13. Changes to this policy</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              We may update this Privacy Policy from time to time as our website, operations, and legal
              obligations evolve. Any updates will be posted on this page with a revised effective date.
            </p>
          </section>

          <section className="space-y-3 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#111C18]">14. Contact</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              If you have questions about this Privacy Policy or our handling of personal data, please
              contact us at{' '}
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

