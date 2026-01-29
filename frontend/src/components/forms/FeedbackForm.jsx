import React, { useState } from 'react';
import { Star, MessageSquare, Send, RotateCcw } from 'lucide-react';

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackTopics, setFeedbackTopics] = useState({
    serviceQuality: false,
    responseTime: false,
    staffFriendliness: false,
    problemResolution: false,
    overallExperience: false,
    other: false
  });
  const [feedback, setFeedback] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [submitAnonymously, setSubmitAnonymously] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTopicChange = (topic) => {
    setFeedbackTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Feedback submitted:', {
        rating,
        name: submitAnonymously ? 'Anonymous' : name,
        email: submitAnonymously ? 'Anonymous' : email,
        feedbackTopics,
        feedback,
        priority,
        submitAnonymously
      });
      setIsSubmitting(false);
      alert('Thank you for your feedback!');
      handleClearForm();
    }, 1000);
  };

  const handleClearForm = () => {
    setRating(0);
    setName('');
    setEmail('');
    setFeedbackTopics({
      serviceQuality: false,
      responseTime: false,
      staffFriendliness: false,
      problemResolution: false,
      overallExperience: false,
      other: false
    });
    setFeedback('');
    setPriority('Medium');
    setSubmitAnonymously(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MessageSquare className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">We'd Love Your Feedback</h1>
          </div>
          <p className="text-purple-300 text-lg">Help us improve our service</p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/40 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Star Rating */}
            <div>
              <label className="block text-purple-200 font-semibold mb-3">
                How would you rate our service? <span className="text-red-400">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 transition-colors ${
                        star <= (hoveredRating || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-purple-200 font-semibold mb-2">
                  Name (Optional)
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitAnonymously}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-200 font-semibold mb-2">
                  Email (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitAnonymously}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Feedback Topics */}
            <div>
              <label className="block text-purple-200 font-semibold mb-3">
                What's your feedback about?
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { key: 'serviceQuality', label: 'Service Quality' },
                  { key: 'responseTime', label: 'Response Time' },
                  { key: 'staffFriendliness', label: 'Staff Friendliness' },
                  { key: 'problemResolution', label: 'Problem Resolution' },
                  { key: 'overallExperience', label: 'Overall Experience' },
                  { key: 'other', label: 'Other' }
                ].map((topic) => (
                  <label
                    key={topic.key}
                    className="flex items-center gap-3 p-3 bg-gray-800/50 border border-purple-500/30 rounded-lg cursor-pointer hover:bg-gray-800 hover:border-purple-500/50 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={feedbackTopics[topic.key]}
                      onChange={() => handleTopicChange(topic.key)}
                      className="w-5 h-5 accent-purple-600 cursor-pointer"
                    />
                    <span className="text-purple-200">{topic.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label htmlFor="feedback" className="block text-purple-200 font-semibold mb-2">
                Tell us more about your experience
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all resize-none"
                placeholder="Share your thoughts, suggestions, or concerns..."
              />
              <div className="text-right mt-2">
                <span className="text-purple-400 text-sm">{feedback.length}/500</span>
              </div>
            </div>

            {/* Priority Level */}
            <div>
              <label className="block text-purple-200 font-semibold mb-3">
                Priority Level
              </label>
              <div className="flex gap-3 flex-wrap">
                {['Low', 'Medium', 'High', 'Urgent'].map((level) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={level}
                      checked={priority === level}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-4 h-4 accent-purple-600 cursor-pointer"
                    />
                    <span className="text-purple-200">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Anonymously Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg">
              <span className="text-purple-200 font-semibold">Submit anonymously</span>
              <button
                type="button"
                onClick={() => setSubmitAnonymously(!submitAnonymously)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  submitAnonymously ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    submitAnonymously ? 'transform translate-x-7' : ''
                  }`}
                />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Feedback
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClearForm}
                className="w-full py-3 text-purple-300 font-semibold hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Clear Form
              </button>
            </div>
          </form>

          {/* Bottom Accent */}
          <div className="h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600"></div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-center">
          <p className="text-purple-300 text-sm">
            Your feedback helps us serve you better. Thank you for taking the time!
          </p>
        </div>
      </div>
    </div>
  );
}