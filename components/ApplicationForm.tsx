
import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 'name',
    question: 'Full Name',
    type: 'text',
    placeholder: 'Your full name'
  },
  {
    id: 'email',
    question: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com'
  },
  {
    id: 'phone',
    question: 'Phone Number',
    type: 'tel',
    placeholder: '(555) 123-4567'
  },
  {
    id: 'city',
    question: 'Location',
    type: 'text',
    placeholder: 'City, State'
  },
  {
    id: 'profession',
    question: 'Professional Background',
    type: 'text',
    placeholder: 'Your profession or industry'
  },
  {
    id: 'cigar_experience',
    question: 'What is your experience with cigars?',
    type: 'select',
    options: [
      'New to cigars',
      'Occasional enjoyment',
      'Regular enthusiast',
      'Seasoned aficionado'
    ]
  },
  {
    id: 'retreat_interest',
    question: 'Which experiences interest you?',
    type: 'select',
    options: [
      'Domestic retreats',
      'International retreats',
      'Both domestic and international'
    ]
  },
  {
    id: 'travel_style',
    question: 'What is your preferred travel style?',
    type: 'select',
    options: [
      'Luxury accommodations',
      'Elevated comfort',
      'Experience-focused'
    ]
  },
  {
    id: 'sisterhood',
    question: 'What are you seeking in a community like Plume Social?',
    type: 'textarea',
    placeholder: 'Share what connection and community mean to you...'
  },
  {
    id: 'hear_about',
    question: 'How did you learn about Plume Social Club?',
    type: 'select',
    options: [
      'Instagram',
      'Facebook',
      'LinkedIn',
      'Referral from a friend or colleague',
      'Cigar lounge or event',
      'Online search',
      'Other'
    ]
  }
];

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/email service
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-20 px-4 bg-plume-burgundy">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="text-6xl mb-6 font-serif italic text-plume-gold">Welcome</div>
          <h2 className="font-serif italic text-4xl mb-4">Welcome to the Circle, Sister</h2>
          <p className="text-plume-cream/80 text-lg mb-8">
            Your application has been received. We review each submission personally and will be in touch within 48 hours.
          </p>
          <p className="text-plume-gold font-serif italic text-xl">
            "The sisterhood you've been searching for awaits."
          </p>
        </div>
      </section>
    );
  }

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <section id="apply" className="py-20 px-4 bg-plume-cream">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-plume-gold font-sans tracking-[0.3em] text-sm mb-4 uppercase">Join Us</h3>
          <h2 className="text-plume-burgundy font-serif text-3xl md:text-4xl italic mb-4">
            Request an Invitation
          </h2>
          <p className="text-plume-charcoal/70">
            Tell us a little about yourself. This helps us curate the perfect experience for you.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-plume-charcoal/60 mb-2">
            <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-plume-ivory rounded-full overflow-hidden">
            <div
              className="h-full bg-plume-gold transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-sm border border-plume-gold/20 p-8 mb-6 min-h-[250px]">
            <label className="block">
              <span className="text-plume-burgundy font-serif italic text-xl block mb-4">
                {currentQuestion.question}
              </span>

              {currentQuestion.type === 'text' && (
                <input
                  type="text"
                  value={formData[currentQuestion.id] || ''}
                  onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full px-4 py-3 border border-plume-teal/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-plume-gold text-plume-charcoal"
                  required
                />
              )}

              {currentQuestion.type === 'email' && (
                <input
                  type="email"
                  value={formData[currentQuestion.id] || ''}
                  onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full px-4 py-3 border border-plume-teal/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-plume-gold text-plume-charcoal"
                  required
                />
              )}

              {currentQuestion.type === 'tel' && (
                <input
                  type="tel"
                  value={formData[currentQuestion.id] || ''}
                  onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full px-4 py-3 border border-plume-teal/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-plume-gold text-plume-charcoal"
                  required
                />
              )}

              {currentQuestion.type === 'select' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, i) => (
                    <label
                      key={i}
                      className={`flex items-center p-4 border rounded-sm cursor-pointer transition-all ${
                        formData[currentQuestion.id] === option
                          ? 'border-plume-gold bg-plume-gold/10'
                          : 'border-plume-teal/20 hover:border-plume-gold/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={option}
                        checked={formData[currentQuestion.id] === option}
                        onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                        formData[currentQuestion.id] === option
                          ? 'border-plume-gold'
                          : 'border-plume-teal/40'
                      }`}>
                        {formData[currentQuestion.id] === option && (
                          <span className="w-2 h-2 rounded-full bg-plume-gold" />
                        )}
                      </span>
                      <span className="text-plume-charcoal">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'textarea' && (
                <textarea
                  value={formData[currentQuestion.id] || ''}
                  onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  rows={4}
                  className="w-full px-4 py-3 border border-plume-teal/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-plume-gold text-plume-charcoal resize-none"
                />
              )}
            </label>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-6 py-3 font-bold tracking-widest text-xs uppercase transition-all ${
                currentStep === 0
                  ? 'text-plume-charcoal/30 cursor-not-allowed'
                  : 'text-plume-burgundy hover:text-plume-gold'
              }`}
            >
              ← Back
            </button>

            {currentStep === QUESTIONS.length - 1 ? (
              <button
                type="submit"
                className="bg-plume-gold text-plume-burgundy px-8 py-3 font-bold tracking-widest text-xs uppercase hover:scale-105 transition-transform rounded-sm"
              >
                Submit Application
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={!formData[currentQuestion.id]}
                className={`px-8 py-3 font-bold tracking-widest text-xs uppercase transition-all rounded-sm ${
                  formData[currentQuestion.id]
                    ? 'bg-plume-burgundy text-white hover:bg-opacity-90'
                    : 'bg-plume-charcoal/20 text-plume-charcoal/40 cursor-not-allowed'
                }`}
              >
                Next →
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
