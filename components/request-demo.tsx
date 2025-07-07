"use client"
import React, { useState } from 'react'

export const metadata = {
    title: 'Request Demo',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image'
  //import PageBg from '@/public/images/request-demo-bg.jpg'
  //import CustomerAvatar from '@/public/images/customer-avatar-04.jpg'
  
  export default function RequestDemo() {
    type FormType = {
      firstName: string;
      lastName: string;
      title: string;
      companyName: string;
      businessEmail: string;
      phoneNumber: string;
      intelligenceModules: string[];
      potentialUsers: string;
      demoScheduling: string;
      timeZone: string;
    };
    type ErrorsType = Partial<Record<keyof FormType, string>>;
    const [form, setForm] = useState<FormType>({
      firstName: '',
      lastName: '',
      title: '',
      companyName: '',
      businessEmail: '',
      phoneNumber: '',
      intelligenceModules: [],
      potentialUsers: '',
      demoScheduling: '',
      timeZone: '',
    });
    const [errors, setErrors] = useState<ErrorsType>({});
    const [submitted, setSubmitted] = useState(false);

    const intelligenceOptions = [
      'SEC Disclosures',
      'SEC Comment Letters',
      'Executive & Director Compensation',
      'Corporate Governance',
      'Proxy Proposals & Shareholder Engagement',
      'Charters & Policies',
      'Risk Factors, Accounting Standards, and MD&A',
      'Audit Fees & SOX',
      'Financials',
      'Institutional Ownership & Activist Investors',
      'Custom Research Services & API',
      'ESG & Cybersecurity Analytics',
    ];
    const userOptions = [
      '1 - 3',
      '4 - 10',
      '10 - 30',
      'More then 30 Users',
    ];
    const schedulingOptions = [
      'Morning Preferred',
      'Afternoon Preferred',
    ];
    const timeZoneOptions = [
      'Eastern Time',
      'Central Time',
      'Pacific Time',
    ];

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox' && name === 'intelligenceModules') {
        setForm((prev) => ({
          ...prev,
          intelligenceModules: checked
            ? [...prev.intelligenceModules, value]
            : prev.intelligenceModules.filter((v) => v !== value),
        }));
      } else if (type === 'checkbox') {
        setForm((prev) => ({ ...prev, [name]: checked ? value : '' }));
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
    }

    function validate() {
      const newErrors: ErrorsType = {};
      if (!form.firstName) newErrors.firstName = 'Required';
      if (!form.lastName) newErrors.lastName = 'Required';
      if (!form.title) newErrors.title = 'Required';
      if (!form.companyName) newErrors.companyName = 'Required';
      if (!form.businessEmail) newErrors.businessEmail = 'Required';
      if (!form.phoneNumber) newErrors.phoneNumber = 'Required';
      if (form.intelligenceModules.length === 0) newErrors.intelligenceModules = 'Select at least one';
      if (!form.potentialUsers) newErrors.potentialUsers = 'Required';
      if (!form.demoScheduling) newErrors.demoScheduling = 'Required';
      if (!form.timeZone) newErrors.timeZone = 'Required';
      return newErrors;
    }

    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        try {
          const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ form }),
          });
          if (res.ok) {
            setSubmitted(true);
          } else {
            setSubmitted(false);
            alert('There was an error sending your request. Please try again later.');
          }
        } catch (err) {
          setSubmitted(false);
          alert('There was an error sending your request. Please try again later.');
        }
      }
    }

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-18 px-2">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-5xl font-bold text-gray-700 mb-2 tracking-tight flex items-center">
            CompanyIQ<sup className="ml-1 text-2xl">®</sup>
            <span className="ml-4 text-4xl font-normal">Demo Request</span>
          </h1>
          <form onSubmit={handleSubmit} className="mt-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input name="firstName" className="border border-gray-300 rounded-md px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.firstName} onChange={handleChange} />
                {errors.firstName && <div className="text-red-500 text-xs mt-1">{errors.firstName}</div>}
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input name="lastName" className="border border-gray-300 rounded-md px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.lastName} onChange={handleChange} />
                {errors.lastName && <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>}
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                <input name="title" className="border border-gray-300 rounded-md px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.title} onChange={handleChange} />
                {errors.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
              </div>
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                <input name="companyName" className="border border-gray-300 rounded-md px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.companyName} onChange={handleChange} />
                {errors.companyName && <div className="text-red-500 text-xs mt-1">{errors.companyName}</div>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Business Email <span className="text-red-500">*</span></label>
                  <input name="businessEmail" type="email" className="border border-gray-300 rounded-md px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.businessEmail} onChange={handleChange} />
                  {errors.businessEmail && <div className="text-red-500 text-xs mt-1">{errors.businessEmail}</div>}
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                  <input name="phoneNumber" className="border border-gray-300 rounded-md px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="(201) 555-0123" value={form.phoneNumber} onChange={handleChange} />
                  {errors.phoneNumber && <div className="text-red-500 text-xs mt-1">{errors.phoneNumber}</div>}
                </div>
              </div>
            </div>
            {/* Intelligence Modules */}
            <div className="mb-2">
              <label className="block text-lg font-semibold text-gray-700 mb-2">Intelligence Modules <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-1">
                {intelligenceOptions.map((option) => (
                  <label key={option} className="inline-flex items-center text-base font-semibold text-gray-700">
                    <input
                      type="checkbox"
                      name="intelligenceModules"
                      value={option}
                      checked={form.intelligenceModules.includes(option)}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.intelligenceModules && <div className="text-red-500 text-xs mt-1">{errors.intelligenceModules}</div>}
              <div className="text-sm text-gray-500 mt-1">Please select the intelligence modules above that you would like to explore during your trial of CompanyIQ<sup>®</sup> AnswerDesk.</div>
            </div>
            {/* Grouped Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Potential Users */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Potential Users <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-3">
                  {userOptions.map((option) => (
                    <label key={option} className="inline-flex items-center text-base text-gray-700">
                      <input
                        type="checkbox"
                        name="potentialUsers"
                        value={option}
                        checked={form.potentialUsers === option}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.potentialUsers && <div className="text-red-500 text-xs mt-1">{errors.potentialUsers}</div>}
              </div>
              {/* Demo Scheduling */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Demo Scheduling <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-3">
                  {schedulingOptions.map((option) => (
                    <label key={option} className="inline-flex items-center text-base text-gray-700">
                      <input
                        type="checkbox"
                        name="demoScheduling"
                        value={option}
                        checked={form.demoScheduling === option}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.demoScheduling && <div className="text-red-500 text-xs mt-1">{errors.demoScheduling}</div>}
              </div>
              {/* Time Zone */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Select Your Time Zone <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-3">
                  {timeZoneOptions.map((option) => (
                    <label key={option} className="inline-flex items-center text-base text-gray-700">
                      <input
                        type="checkbox"
                        name="timeZone"
                        value={option}
                        checked={form.timeZone === option}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.timeZone && <div className="text-red-500 text-xs mt-1">{errors.timeZone}</div>}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-start mt-5">
              <button className="bg-gray-800 hover:bg-gray-900 text-white text-base 
              font-semibold px-3 py-2 rounded-lg shadow flex items-center transition-all duration-150" type="submit">
                SUBMIT <span className="ml-2 text-lg">→</span>
              </button>
            </div>
            {/* Confirmation Message */}
            {submitted && (
              <div className="mt-8 text-teal-600 text-lg font-semibold">
                Upon submittal, you should receive a confirmation email. A member of our team will reach out to you within one business day of your request. Please call us at 888-564-4910 at any time or if you don't hear back from us because email spam filters can block our communications or sometimes things get lost due to human mistake.
              </div>
            )}
          </form>
        </div>
      </div>
    )
  }