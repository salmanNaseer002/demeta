"use client";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#eef7f0] py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-5 rounded-full bg-[#e8f7eb] text-[#5ebc66] shadow-md">
            <ShieldCheck className="w-12 h-12" />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We respect the confidentiality of all healthcare professionals and
          patients we engage with. Our commitment is to handle all data with
          integrity, transparency, and the highest standards of security.
        </p>

        {/* Content */}
        <div className="space-y-10 text-left bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              1. Information We Collect
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We collect only the information necessary to provide our medical
              billing and practice management services efficiently. This may
              include contact details, billing data, and relevant healthcare
              practice information — all shared securely and with consent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              2. How We Use Your Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your information helps us deliver accurate billing, maintain
              compliance, and support smooth communication between practices,
              payers, and patients. We do <strong>not</strong> sell or misuse
              any data — ever.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              3. Data Security & Confidentiality
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All records are handled following HIPAA guidelines and stored on
              secure, encrypted systems. We apply strict access controls to
              protect patient and provider information at every level.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5ebc66] mb-2">
              4. Your Trust, Our Priority
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We understand the sensitivity of medical information. Our goal is
              to support healthcare providers with transparency, respect, and
              professionalism — ensuring your trust remains our strongest
              partnership value.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} All rights reserved. This policy is
          designed to demonstrate our respect for your privacy and does not
          constitute a legal contract.
        </p>
      </div>
    </section>
  );
}
