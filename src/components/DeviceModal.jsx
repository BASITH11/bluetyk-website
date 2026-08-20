import React, { useState, useEffect } from 'react';
import { X, Search, Cpu, ShieldCheck, CheckCircle2, ArrowRight, Zap, Radio, ChevronRight } from 'lucide-react';
import { fetchDeviceCatalog, FALLBACK_DEVICES } from '../services/api';

export default function DeviceModal({ isOpen, onClose }) {
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
    if (isOpen) {
      loadDevices();
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="bg-[#0B192C] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center text-[#0284C7]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold text-[#0284C7] uppercase tracking-widest">
                ZKTeco Hardware Compatibility Directory
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Supported Biometric Terminals
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model (e.g. K40, MB20)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7]"
            />
          </div>

        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto grow space-y-6">
          
          {selectedDevice ? (
            /* Detailed Inspector View for Selected Device */
            <div className="space-y-6 text-left animate-in fade-in duration-150">
              
              {/* Back to Catalog Navigation Button */}
              <button
                onClick={() => setSelectedDevice(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:underline"
              >
                ← Back to All Devices
              </button>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Left: Device Image & Badges */}
                <div className="md:col-span-5 bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center space-y-4">
                  <div className="relative h-56 bg-white rounded-xl border border-slate-200/80 p-2 overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedDevice.image || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'}
                      alt={selectedDevice.model_name}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                      Push SDK Ready
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-slate-900">
                      {selectedDevice.model_name}
                    </h3>
                    <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                      {selectedDevice.category_name || selectedDevice.category || 'Biometric Terminal'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-center gap-2 text-xs font-bold text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Tested & Verified for Bluetyk Cloud</span>
                  </div>
                </div>

                {/* Right: Technical Specification & ADMS Push Guide */}
                <div className="md:col-span-7 space-y-6">
                  
                  {/* Key Specifications Grid */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-0.5">User Capacity</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {selectedDevice.user_capacity || selectedDevice.capacity_users || 1000} Users
                        </span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-0.5">Log Capacity</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {selectedDevice.log_capacity || 50000} Records
                        </span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-0.5">Face Capacity</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {selectedDevice.face_capacity || '500 - 3000'} Faces
                        </span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block mb-0.5">Fingerprint Capacity</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {selectedDevice.fingerprint_capacity || 1000} Templates
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Communication Interfaces */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Communication Protocols
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      {(selectedDevice.communication || ['TCP/IP', 'USB', 'Push ADMS']).map((comm, idx) => (
                        <span key={idx} className="bg-sky-50 text-[#0284C7] border border-sky-200 px-3 py-1 rounded-lg">
                          {comm}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Step-by-Step ADMS Connection Setup */}
                  <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0284C7]">
                      <Radio className="w-4 h-4 animate-pulse text-emerald-400" />
                      <span>2-STEP ADMS PUSH SDK CONFIGURATION STEPS</span>
                    </div>

                    <ol className="space-y-2 text-xs text-slate-300 font-mono">
                      <li>1. On device: Open <strong className="text-white">Menu &gt; Comm. &gt; ADMS / Cloud Server Settings</strong></li>
                      <li>2. Set Server IP: <strong className="text-emerald-400">push.bluetyk.in</strong> (Port: <strong className="text-emerald-400">8080</strong>)</li>
                    </ol>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* Grid View of Compatible Devices */
            <div>
              {filteredDevices.length === 0 ? (
                <div className="text-center py-12 text-slate-500 space-y-2">
                  <p className="font-bold">No devices matched your search query "{searchQuery}".</p>
                  <p className="text-xs">Contact our engineering team to add support for custom ZKTeco firmware models.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
                  {filteredDevices.map((device) => (
                    <div
                      key={device.id || device.model_name}
                      onClick={() => setSelectedDevice(device)}
                      className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#0284C7] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        {/* Image view */}
                        <div className="relative w-full h-36 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2">
                          <img
                            src={device.image || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'}
                            alt={device.model_name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute top-2 left-2 bg-slate-900/90 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded border border-slate-800">
                            Push SDK Active
                          </div>
                        </div>

                        {/* Title */}
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                            {device.model_name}
                          </h3>
                          <span className="text-[9px] font-bold text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100">
                            {device.brand || 'ZKTeco'}
                          </span>
                        </div>

                        <p className="text-[11px] font-semibold text-[#0284C7] uppercase tracking-wider mb-3">
                          {device.category_name || device.category || 'Biometric Terminal'}
                        </p>

                        {/* Quick Spec List */}
                        <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                          <div className="flex items-center justify-between py-0.5 border-b border-slate-100">
                            <span className="text-slate-400">Capacity:</span>
                            <span className="font-bold text-slate-800">{device.user_capacity || device.capacity_users || 1000} Users</span>
                          </div>
                          <div className="flex items-center justify-between py-0.5">
                            <span className="text-slate-400">Protocol:</span>
                            <span className="font-bold text-slate-800">{Array.isArray(device.communication) ? device.communication[0] : 'TCP/IP Push'}</span>
                          </div>
                        </div>
                      </div>

                      {/* View Details Button Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7] group-hover:text-[#0369A1]">
                        <span>View Specs & Setup Guide</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 shrink-0">
          <div>
            Need help integrating your ZKTeco hardware? Contact{' '}
            <a href="mailto:support@bluewhyteapps.com" className="text-[#0284C7] font-bold underline">
              support@bluewhyteapps.com
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
          >
            Close Directory
          </button>
        </div>

      </div>
    </div>
  );
}
