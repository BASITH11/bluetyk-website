import React, { useState, useEffect } from 'react';
import { Search, Cpu, ShieldCheck, ArrowLeft, Radio, ChevronRight, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';
import { fetchDeviceCatalog, FALLBACK_DEVICES } from '../services/api';

export default function DeviceCatalogPage({ onBackToHome }) {
  const [devices, setDevices] = useState(FALLBACK_DEVICES);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    async function loadDevices() {
      const res = await fetchDeviceCatalog();
      if (res && res.data && res.data.length > 0) {
        setDevices(res.data);
      } else {
        setDevices(FALLBACK_DEVICES);
      }
    }
    loadDevices();
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', label: 'All Compatible Devices' },
    { id: 'face', label: 'Face Recognition' },
    { id: 'fingerprint', label: 'Fingerprint' },
    { id: 'multi', label: 'Multi-Biometric' }
  ];

  const filteredDevices = devices.filter((d) => {
    const cat = (d.category || d.category_name || '').toLowerCase();
    const model = (d.model_name || '').toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch = model.includes(query) || cat.includes(query);

    if (!matchesSearch) return false;

    if (activeCategory === 'face') return cat.includes('face');
    if (activeCategory === 'fingerprint') return cat.includes('fingerprint');
    if (activeCategory === 'multi') return cat.includes('multi') || cat.includes('face_fingerprint');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* 1. SEPARATE SCREEN TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0284C7] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>

            <div className="hidden sm:block h-5 w-px bg-slate-300" />

            <div className="hidden sm:flex items-center gap-2 overflow-visible">
              <img src="/bluetyk_logo.png" alt="Bluetyk" className="h-10 sm:h-12 object-contain scale-[1.8] origin-left" />
              <span className="text-xs font-normal text-slate-500 ml-6">/ Device Directory</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#trial-signup"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <span>Start Free Trial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. MAIN PAGE CONTENT */}
      <main className="grow">
        
        {/* Page Hero Banner */}
        <section className="bg-[#0B192C] text-white py-16 sm:py-20 relative overflow-hidden text-left border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.25)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Supported Biometric Terminals
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
              Explore fully tested eSSL & ZKTeco biometric devices compatible with Bluetyk's Push SDK cloud server. View capacities, communication protocols, and 3-step ADMS setup guides.
            </p>
          </div>
        </section>

        {/* Directory Controls & Devices Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8 text-left">
          
          {/* Controls Bar: Category Filters & Search Box */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search model (e.g. K40, MB20, SpeedFace)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:bg-white"
              />
            </div>

          </div>

          {/* Selected Device Inspector View OR Devices Grid */}
          {selectedDevice ? (
            /* Inspector View */
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg space-y-8 animate-in fade-in duration-200">
              
              <button
                onClick={() => setSelectedDevice(null)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0284C7] hover:underline"
              >
                ← Back to All Devices
              </button>

              <div className="grid lg:grid-cols-12 gap-10 items-start">
                
                {/* Left: Device Image & Verified Badge */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center space-y-5">
                  <div className="relative h-64 bg-white rounded-2xl border border-slate-200 p-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedDevice.image || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'}
                      alt={selectedDevice.model_name}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-xs">
                      Push SDK Active
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900">
                      {selectedDevice.model_name}
                    </h3>
                    <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                      {selectedDevice.category_name || selectedDevice.category || 'Biometric Terminal'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-center gap-2 text-xs font-bold text-emerald-600">
                    <ShieldCheck className="w-4.5 h-4.5" />
                    <span>Tested & Verified for Bluetyk Cloud</span>
                  </div>
                </div>

                {/* Right: Technical Specs & Step-by-Step Setup */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-1">User Capacity</span>
                        <span className="font-bold text-slate-900 text-base">
                          {selectedDevice.user_capacity || selectedDevice.capacity_users || 1000} Users
                        </span>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-1">Log Capacity</span>
                        <span className="font-bold text-slate-900 text-base">
                          {selectedDevice.log_capacity || 50000} Records
                        </span>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-1">Face Capacity</span>
                        <span className="font-bold text-slate-900 text-base">
                          {selectedDevice.face_capacity || '500 - 3000'} Faces
                        </span>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-1">Fingerprint Capacity</span>
                        <span className="font-bold text-slate-900 text-base">
                          {selectedDevice.fingerprint_capacity || 1000} Templates
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ADMS Setup Guide */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0284C7]">
                      <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <span>2-STEP ADMS PUSH SDK SETUP GUIDE</span>
                    </div>

                    <ol className="space-y-2.5 text-xs text-slate-300 font-mono">
                      <li>1. On device menu: Navigate to <strong className="text-white">Comm. &gt; ADMS / Cloud Server Settings</strong></li>
                      <li>2. Enter Server Domain: <strong className="text-emerald-400">push.bluetyk.in</strong> (Port: <strong className="text-emerald-400">8080</strong>)</li>
                    </ol>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* Devices Grid */
            <div>
              {filteredDevices.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-800">No devices found matching "{searchQuery}".</p>
                  <p className="text-xs text-slate-500">Contact sales for custom eSSL firmware support.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDevices.map((device) => (
                    <div
                      key={device.id || device.model_name}
                      onClick={() => setSelectedDevice(device)}
                      className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0284C7] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        {/* Device Image Container */}
                        <div className="relative w-full h-44 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden mb-5 flex items-center justify-center p-3">
                          <img
                            src={device.image || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'}
                            alt={device.model_name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded border border-slate-800">
                            Push SDK Active
                          </div>
                        </div>

                        {/* Device Title & Brand */}
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                            {device.model_name}
                          </h3>
                          <span className="text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100">
                            {device.brand || 'ZKTeco'}
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-4">
                          {device.category_name || device.category || 'Biometric Terminal'}
                        </p>

                        {/* Specs Table */}
                        <div className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
                          <div className="flex items-center justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-400">Capacity:</span>
                            <span className="font-bold text-slate-900">{device.user_capacity || device.capacity_users || 1000} Users</span>
                          </div>
                          <div className="flex items-center justify-between py-1">
                            <span className="text-slate-400">Protocol:</span>
                            <span className="font-bold text-slate-900">{Array.isArray(device.communication) ? device.communication.join(', ') : (device.communication || 'TCP/IP Push')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer Action Button */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7] group-hover:text-[#0369A1]">
                        <span>View Specs &amp; Setup Guide</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </section>

      </main>

      {/* 3. FOOTER */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Need help integrating your eSSL / ZKTeco hardware? Contact{' '}
            <a href="mailto:support@bluewhyteapps.com" className="text-sky-400 font-bold underline">
              support@bluewhyteapps.com
            </a>
          </div>
          <button
            onClick={onBackToHome}
            className="text-slate-300 hover:text-white font-bold underline"
          >
            ← Return to Bluetyk Home
          </button>
        </div>
      </footer>

    </div>
  );
}
