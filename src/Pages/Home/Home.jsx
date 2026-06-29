import React from "react";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/exploreskills");
  };
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            Learn & Grow{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with expert mentors, learn new skills, and unlock your
            potential in a vibrant community.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition">
              Start Learning <ArrowRight size={20} />
            </button>
            <button
              onClick={handleClick}
              className="border-2 border-slate-300 cursor-pointer hover:border-slate-400 text-slate-700 px-8 py-3 rounded-full font-semibold transition"
            >
              Explore Mentors
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-slate-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">500+</p>
            <p className="text-slate-600 mt-2">Skills Available</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600">10K+</p>
            <p className="text-slate-600 mt-2">Active Learners</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-pink-600">98%</p>
            <p className="text-slate-600 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Why Choose SkillBridge?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Expert Mentors
            </h3>
            <p className="text-slate-600">
              Learn directly from industry professionals with real-world
              experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Zap className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Learn Faster
            </h3>
            <p className="text-slate-600">
              Flexible scheduling with personalized learning paths tailored to
              you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Star className="text-pink-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Trusted Community
            </h3>
            <p className="text-slate-600">
              Join thousands of students achieving their goals with verified
              mentors.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join our community and start learning from the best mentors today.
          </p>
          <button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-3 rounded-full font-bold transition">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
