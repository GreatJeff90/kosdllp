"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  X,
  Loader2,
  ChevronDown,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba",
  "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Country searchable dropdown state
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Close country dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return COUNTRIES;
    return COUNTRIES.filter((c) =>
      c.toLowerCase().includes(countrySearch.toLowerCase())
    );
  }, [countrySearch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdwldnr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSelectedCountry("");
        setCountrySearch("");
        setShowModal(true);
      } else {
        const data = await response.json();
        setErrorMsg(
          data?.errors?.[0]?.message || "Failed to deliver message. Please try again."
        );
      }
    } catch {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between overflow-x-hidden">
      <main className="relative w-full flex-1">
        
        {/* Mobile Background Graphic */}
        <div
          className="pointer-events-none absolute inset-0 block md:hidden bg-contain bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: "url('/pillars.png')" }}
        />
        <div className="pointer-events-none absolute inset-0 block md:hidden bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Desktop Left Column: Pillar Graphic & Direct Reach */}
            <div className="relative flex flex-col justify-between lg:col-span-5 h-full">
              
              {/* Graphic container (Desktop only) */}
              <div className="relative hidden md:block aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50"
                  style={{ backgroundImage: "url('/pillars.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Direct Reach info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Direct Contact
                  </span>
                </div>

                <div className="space-y-2 text-xs text-neutral-300">
                  <a
                    href="mailto:admin@kosdllp.com"
                    className="flex items-center gap-2.5 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-neutral-400" />
                    <span>admin@kosdllp.com</span>
                  </a>
                  <a
                    href="tel:+2349017370734"
                    className="flex items-center gap-2.5 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-neutral-400" />
                    <span>+234 901 737 0734</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Header & Form */}
            <div className="lg:col-span-7 lg:pl-6">
              
              <div>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
                  Let&apos;s get<br />
                  <span className="font-serif italic font-light text-neutral-300">
                    in touch.
                  </span>
                </h1>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-lg">
                  Tell us about your project vision or technical requirements. We review incoming proposals and respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5 max-w-xl">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                  />
                </div>

                {/* Email Address & Mobile Number */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                    />
                  </div>
                </div>

                {/* Project Category & Country of Residence */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  
                  {/* Category Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 cursor-pointer pr-10"
                      >
                        <option value="" disabled className="bg-[#141414] text-neutral-500">
                          Select category
                        </option>
                        <option value="Website" className="bg-[#141414] text-white">
                          Website
                        </option>
                        <option value="Mobile App" className="bg-[#141414] text-white">
                          Mobile App
                        </option>
                        <option value="Other" className="bg-[#141414] text-white">
                          Other
                        </option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    </div>
                  </div>

                  {/* Searchable Country Dropdown */}
                  <div className="relative" ref={countryDropdownRef}>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Country of Residence
                    </label>
                    
                    {/* Hidden input submitted with the form */}
                    <input type="hidden" name="country" value={selectedCountry} required />

                    <button
                      type="button"
                      onClick={() => setIsCountryOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#141414] px-4 py-3 text-sm text-left outline-none transition focus:border-white/30"
                    >
                      <span className={selectedCountry ? "text-white" : "text-neutral-500"}>
                        {selectedCountry || "Select or search country"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-neutral-400 shrink-0 ml-2" />
                    </button>

                    <AnimatePresence>
                      {isCountryOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl border border-white/10 bg-[#161616] p-2 shadow-2xl backdrop-blur-xl"
                        >
                          {/* Search Filter Input */}
                          <div className="relative mb-2">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country..."
                              className="w-full rounded-lg border border-white/10 bg-white/5 py-1.5 pl-8 pr-3 text-xs text-white placeholder-neutral-500 outline-none focus:border-white/30"
                              autoFocus
                            />
                          </div>

                          {/* Country List */}
                          <div className="max-h-52 overflow-y-auto space-y-0.5 pr-1">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c) => (
                                <button
                                  key={c}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setIsCountryOpen(false);
                                    setCountrySearch("");
                                  }}
                                  className={`w-full rounded-lg px-3 py-2 text-left text-xs transition ${
                                    selectedCountry === c
                                      ? "bg-white text-black font-semibold"
                                      : "text-neutral-300 hover:bg-white/10 hover:text-white"
                                  }`}
                                >
                                  {c}
                                </button>
                              ))
                            ) : (
                              <p className="px-3 py-2 text-xs text-neutral-500">
                                No countries found
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Brief overview of what you are looking to build or scale..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-white/30"
                  />
                </div>

                {/* Private discovery call checkbox */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privateCall"
                    name="privateCall"
                    value="Yes"
                    className="h-4 w-4 rounded border-white/20 bg-white/5 accent-white cursor-pointer"
                  />
                  <label
                    htmlFor="privateCall"
                    className="text-xs text-neutral-300 select-none cursor-pointer"
                  >
                    Want a private discovery call?
                  </label>
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-bold text-black transition hover:bg-neutral-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                    </>
                  )}
                </button>

              </form>

            </div>

          </div>
        </div>
      </main>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#141414] p-6 text-center shadow-2xl sm:p-8"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 rounded-lg p-1 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/10 text-lime-400 mb-4">
                <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white">
                Proposal Received
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Thank you for reaching out. We have received your technical inquiry and will review your specifications shortly.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full rounded-xl bg-white py-2.5 text-xs font-bold text-black transition hover:bg-neutral-200 active:scale-95"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}