import {
  MapPin,
  Phone,
  Building2,
  Star,
  ExternalLink,
  Stethoscope,
  Hospital,
  Users,
  Sparkles,
} from "lucide-react";

import { consulationService } from "@/lib/constants";

export default function MSConsultation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      
      <div className="pt-28 pb-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          MS Consultation Services
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-6">
          Connect with leading medical institutions and support organizations
          specializing in Multiple Sclerosis care across India
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consulationService.map((entry, index) => (
            <div
              key={index}
              className={`${entry.bgColor} ${entry.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden relative`}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${entry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${entry.color} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {entry.name.includes("MSSI") ? (
                        <Users className="h-6 w-6 text-white" />
                      ) : (
                        <Stethoscope className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                        {entry.name}
                      </h2>
                    </div>
                  </div>
                  {entry.rating && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-slate-900">
                        {entry.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">{entry.city}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <Phone className="h-4 w-4 text-slate-500 mt-0.5" />
                    <span className="text-sm">{entry.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-slate-500" />
                    <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-700 border border-slate-200">
                      {entry.type}
                    </span>
                  </div>
                </div>

                {/* Services */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {entry.services}
                </p>

                {/* Website link */}
                <a
                  href={entry.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${entry.color} text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>

                {/* Decorative element */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${entry.color} opacity-5 rounded-tl-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">
                Need Help Finding the Right Care?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We recommend consulting with your primary care physician for
                personalized referrals. All listed institutions offer
                specialized MS care with experienced neurologists and
                comprehensive treatment programs. Contact details are provided
                for direct inquiries about appointments and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
