import React, { useState, useEffect } from 'react';
import { Search, ShieldCheck, ArrowLeft, Radio, ArrowUpRight, Users, Database, ScanFace, Fingerprint } from 'lucide-react';
import Logo from '../components/site/Logo';
import Reveal from '../components/site/Reveal';
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

  const FALLBACK_IMG = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80';

  const specs = selectedDevice
    ? [
        { label: 'User Capacity', value: `${selectedDevice.user_capacity || selectedDevice.capacity_users || 1000} Users`, icon: Users },
        { label: 'Log Capacity', value: `${selectedDevice.log_capacity || 50000} Records`, icon: Database },
        { label: 'Face Capacity', value: `${selectedDevice.face_capacity || '500 - 3000'} Faces`, icon: ScanFace },
        { label: 'Fingerprint Capacity', value: `${selectedDevice.fingerprint_capacity || 1000} Templates`, icon: Fingerprint },
      ]
    : [];

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans flex flex-col justify-between">
      {/* 1. Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
        <div className="max-w-6xl mx-auto glass rounded-full pl-2 pr-2 py-2 flex items-center justify-between shadow-[0_10px_30px_-12px_rgba(16,24,40,0.18)]">
          <div className="flex items-center gap-3">
            <button onClick={onBackToHome} className="btn btn-ghost btn-sm">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Homepage</span>
            </button>
            <div className="hidden sm:flex items-center gap-2.5">
              <Logo className="h-6" />
              <span className="text-sm text-ink-3">/ Device Directory</span>
            </div>
          </div>
          <a href="#trial-signup" onClick={onBackToHome} className="btn btn-primary btn-sm">
            Start Free Trial
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="grow">
        {/* 2. Hero */}
        <section className="relative glow-bg-soft overflow-hidden pt-36 sm:pt-44 pb-24 sm:pb-32">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
            <div className="eyebrow justify-center">Device Directory</div>
            <h1 className="fade-up text-[2.4rem] leading-[1.04] sm:text-6xl font-semibold text-ink text-balance">
              Supported Biometric Terminals
            </h1>
            <p className="fade-up text-base sm:text-lg text-ink-2/80 leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '120ms' }}>
              Explore fully tested eSSL & ZKTeco biometric devices compatible with Bluetyk's Push SDK cloud server. View capacities, communication protocols, and 3-step ADMS setup guides.
            </p>
          </div>
        </section>

        {/* 3. Controls + grid */}
        <section className="relative -mt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="glass rounded-[28px] p-2.5 flex flex-col md:flex-row items-center justify-between gap-3 shadow-[0_20px_40px_-24px_rgba(16,24,40,0.3)]">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id ? 'bg-ink text-white' : 'text-ink-2 hover:text-ink hover:bg-white/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-ink-3 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search model (e.g. K40, MB20, SpeedFace)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-4 bg-white rounded-full text-sm text-ink placeholder:text-ink-3/70 outline-none ring-1 ring-line transition-all focus:ring-4 focus:ring-brand-100"
              />
            </div>
          </div>

          {selectedDevice ? (
            /* Inspector view */
            <div className="card p-5 sm:p-8 fade-up" style={{ animationDuration: '0.6s' }}>
              <button onClick={() => setSelectedDevice(null)} className="btn btn-ghost btn-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to All Devices
              </button>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-5 rounded-3xl bg-[linear-gradient(160deg,#E3F0FF,#F6FAFF)] ring-1 ring-brand-100 p-6 sm:p-8 text-center space-y-5">
                  <div className="relative h-64 bg-white rounded-2xl ring-1 ring-line p-4 overflow-hidden flex items-center justify-center">
                    <img src={selectedDevice.image || FALLBACK_IMG} alt={selectedDevice.model_name} className="max-h-full max-w-full object-contain" />
                    <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Push SDK Active
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-ink">{selectedDevice.model_name}</h3>
                    <p className="text-xs font-semibold text-brand-600 uppercase tracking-[0.1em]">
                      {selectedDevice.category_name || selectedDevice.category_label || selectedDevice.category || 'Biometric Terminal'}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-100 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-700">
                    <ShieldCheck className="w-4.5 h-4.5" />
                    Tested & Verified for Bluetyk Cloud
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-ink-3 uppercase tracking-[0.12em] mb-3">Technical Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {specs.map(({ label, value, icon: Icon }) => (
                        <div key={label} className="rounded-2xl bg-canvas p-4">
                          <div className="flex items-center gap-2 text-xs text-ink-3 mb-2">
                            <Icon className="w-3.5 h-3.5 text-brand-600" />
                            {label}
                          </div>
                          <div className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-ink text-white p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-300">
                      <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                      2-STEP ADMS PUSH SDK SETUP GUIDE
                    </div>
                    <ol className="space-y-3 text-[13px] text-white/75 font-mono">
                      <li className="flex gap-3"><span className="w-6 h-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[11px]">1</span><span>On device menu: Navigate to <strong className="text-white">Comm. &gt; ADMS / Cloud Server Settings</strong></span></li>
                      <li className="flex gap-3"><span className="w-6 h-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[11px]">2</span><span>Enter Server Domain: <strong className="text-emerald-400">push.bluetyk.in</strong> (Port: <strong className="text-emerald-400">8080</strong>)</span></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ) : filteredDevices.length === 0 ? (
            <div className="card text-center py-16 px-6 space-y-2">
              <p className="font-semibold text-ink">No devices found matching "{searchQuery}".</p>
              <p className="text-sm text-ink-3">Contact sales for custom eSSL firmware support.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredDevices.map((device, i) => (
                <Reveal key={device.id || device.model_name} delay={(i % 3) * 90}>
                  <button
                    type="button"
                    onClick={() => setSelectedDevice(device)}
                    className="card card-hover group w-full h-full p-3 text-left flex flex-col cursor-pointer"
                  >
                    <div className="relative w-full h-48 rounded-[18px] bg-[linear-gradient(160deg,#EEF5FF,#F7F9FC)] overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={device.image || FALLBACK_IMG}
                        alt={device.model_name}
                        className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 flex items-center gap-1.5 glass text-emerald-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Push SDK Active
                      </span>
                    </div>

                    <div className="px-3 pt-5 pb-3 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold text-ink tracking-tight">{device.model_name}</h3>
                        <span className="text-[10px] font-semibold text-ink-2 uppercase px-2.5 py-1 rounded-full bg-canvas shrink-0">
                          {device.brand || 'ZKTeco'}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] font-semibold text-brand-600 uppercase tracking-[0.1em]">
                        {device.category_name || device.category_label || device.category || 'Biometric Terminal'}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded-xl bg-canvas px-3 py-2.5">
                          <div className="text-ink-3">Capacity:</div>
                          <div className="font-semibold text-ink mt-0.5">{device.user_capacity || device.capacity_users || 1000} Users</div>
                        </div>
                        <div className="rounded-xl bg-canvas px-3 py-2.5">
                          <div className="text-ink-3">Protocol:</div>
                          <div className="font-semibold text-ink mt-0.5 truncate">
                            {Array.isArray(device.communication) ? device.communication.join(', ') : (device.communication || 'TCP/IP Push')}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-sm font-semibold text-ink">
                        <span>View Specs &amp; Setup Guide</span>
                        <span className="arrow-badge w-8 h-8 transition-transform duration-500 group-hover:rotate-45">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* 4. Footer */}
      <footer className="bg-white border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-3">
          <div>
            Need help integrating your eSSL / ZKTeco hardware? Contact{' '}
            <a href="mailto:support@bluewhyteapps.com" className="text-brand-600 font-semibold hover:underline">
              support@bluewhyteapps.com
            </a>
          </div>
          <button onClick={onBackToHome} className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-4 h-4" />
            Return to Bluetyk Home
          </button>
        </div>
      </footer>
    </div>
  );
}
