"use client";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#eef7f0] py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-5 rounded-full bg-[#e8f7eb] text-[#5ebc66] shadow-md">
            <FileText className="w-12 h-12" />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          These terms outline the responsible and transparent use of our medical
          billing and practice management services. By engaging with our
          platform, you agree to work together with us in a professional,
          compliant, and secure manner.
        </p>

        {/* Content */}
        <div className="text-left space-y-10 bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              1. Acceptance of Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you confirm that you understand and agree
              to these terms. Our goal is to build long-term professional
              relationships with healthcare providers based on trust and
              integrity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              2. Professional Collaboration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We strive to maintain seamless and transparent communication with
              all partners. Both parties agree to cooperate in good faith and
              uphold compliance standards across all billing and operational
              processes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              3. Intellectual Property
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All materials, software, and branding associated with our platform
              are owned by Demeta. You may use them solely for authorized
              professional purposes related to your practice and agreed
              services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              4. Data Confidentiality
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We treat all shared data — including patient and provider
              information — with strict confidentiality. All handling aligns
              with HIPAA and relevant data protection guidelines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              5. Limitation of Liability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              While we take every measure to ensure reliability, we are not
              liable for indirect or incidental losses beyond the scope of our
              professional services. Our focus remains on proactive prevention
              and transparent resolution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              6. Updates to These Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From time to time, these terms may be updated to reflect changes
              in compliance standards or service offerings. Any updates will be
              shared transparently with our partners.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Demeta Technologies. These terms are
          provided to promote clarity and confidence in our collaboration and do
          not constitute a formal legal agreement.
        </p>
      </div>
    </section>
  );
}
