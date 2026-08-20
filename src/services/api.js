const API_BASE = 'https://app.bluetyk.in/api/public';
const BACKEND_DOMAIN = 'https://app.bluetyk.in';

// Fallback pricing plans matching the exact live API schema
export const FALLBACK_PLANS = [
  {
    name: 'Free Trial',
    slug: 'trial',
    description: 'Seven days of full access. No credit card required.',
    features: [
      'Full Access to All Modules',
      'Up to 3 Biometric Devices',
      'Up to 50 Active Members',
      'Real-time Biometric Punch Logs',
      'Automated Payroll & Payslips',
      'Attendance & Department Reports',
      '7 Days Unrestricted Trial'
    ],
    monthly_price: 0,
    yearly_price: 0,
    currency: 'INR',
    max_devices: 3,
    max_members: 50,
    is_trial: true,
    duration_days: 7
  },
  {
    name: 'Starter',
    slug: 'starter',
    description: 'For a single site getting started with biometric attendance.',
    features: [
      'Attendance Tracking & Logs',
      'Basic Reports & Excel Export',
      'Up to 5 Biometric Devices',
      'Up to 100 Active Members',
      'ZKTeco Push SDK Integration',
      'Standard Support'
    ],
    monthly_price: 999,
    yearly_price: 9999,
    currency: 'INR',
    max_devices: 5,
    max_members: 100,
    is_trial: false,
    duration_days: null
  },
  {
    name: 'Professional',
    slug: 'professional',
    description: 'Payroll, SMS and multi-site attendance for a growing organisation.',
    features: [
      'Everything in Starter',
      'Automated Payroll Management',
      'SMS Punch Notifications',
      'Advanced Multi-Shift & Reports',
      'Up to 15 Biometric Devices',
      'Up to 500 Active Members',
      'Holiday & Leave Rules Engine',
      'Priority Phone & Email Support'
    ],
    monthly_price: 2499,
    yearly_price: 24999,
    currency: 'INR',
    max_devices: 15,
    max_members: 500,
    is_trial: false,
    duration_days: null
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'Unlimited scale with priority support and custom integrations.',
    features: [
      'Everything in Professional',
      'Unlimited Biometric Devices',
      'Unlimited Active Members',
      '24/7 Dedicated Account Manager',
      'Custom ERP & API Integrations',
      'Multi-Tenant Parent & Child Branch Hierarchy',
      'SLA & 99.9% Uptime Guarantee'
    ],
    monthly_price: 4999,
    yearly_price: 49999,
    currency: 'INR',
    max_devices: 9999,
    max_members: 99999,
    is_trial: false,
    duration_days: null
  }
];

// Fallback Device Catalog
export const FALLBACK_DEVICES = [
  {
    id: 'zk-mb20',
    model_name: 'ZKTeco MB20 / MB160',
    category: 'face_fingerprint',
    category_name: 'Face + Fingerprint',
    direction: 'in_out',
    direction_name: 'IN and OUT',
    user_capacity: 1000,
    face_capacity: 500,
    fingerprint_capacity: 500,
    log_capacity: 50000,
    communication: ['TCP/IP', 'USB'],
    screen: '2.8 inch Color Display',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    specs: ['500 Faces, 500 Fingerprints', 'Fast 0.5s Verification', 'Real-time Push']
  },
  {
    id: 'zk-k40',
    model_name: 'ZKTeco K40 / K40 Pro',
    category: 'fingerprint',
    category_name: 'Fingerprint & Card',
    direction: 'in_out',
    direction_name: 'IN and OUT',
    user_capacity: 1000,
    fingerprint_capacity: 1000,
    card_capacity: 1000,
    log_capacity: 80000,
    communication: ['TCP/IP', 'USB-Host'],
    screen: '2.8 inch TFT Screen',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    specs: ['1,000 Fingerprints', 'TCP/IP Push SDK', 'Built-in Battery Backup']
  },
  {
    id: 'zk-mb10vl',
    model_name: 'ZKTeco MB10-VL',
    category: 'face',
    category_name: 'Visible Light Face',
    direction: 'in_out',
    direction_name: 'IN and OUT',
    user_capacity: 1000,
    face_capacity: 1000,
    log_capacity: 50000,
    communication: ['TCP/IP', 'USB'],
    screen: '2.4 inch TFT Display',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    specs: ['1,000 Visible Light Faces', 'Anti-Spoofing Algorithm', '0.3s Match']
  },
  {
    id: 'zk-uface602',
    model_name: 'ZKTeco uFace 602 / 800',
    category: 'face_fingerprint',
    category_name: 'Face + Fingerprint',
    direction: 'in_out',
    direction_name: 'IN and OUT',
    user_capacity: 3000,
    face_capacity: 2000,
    fingerprint_capacity: 4000,
    log_capacity: 100000,
    communication: ['TCP/IP', 'WiFi', 'USB'],
    screen: '3.2 inch Touch Screen',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    specs: ['2,000 Faces & 4,000 Fingerprints', 'InfraRed Camera', 'Wi-Fi Enabled']
  },
  {
    id: 'zk-iclock990',
    model_name: 'ZKTeco iClock 990',
    category: 'face_fingerprint',
    category_name: 'Face + Fingerprint',
    direction: 'in_out',
    direction_name: 'IN and OUT',
    user_capacity: 10000,
    fingerprint_capacity: 10000,
    face_capacity: 2000,
    log_capacity: 500000,
    communication: ['TCP/IP', 'USB', 'RS485'],
    screen: '3.5 inch Color Screen',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    specs: ['10,000 Fingerprints', 'Heavy Duty Worksite Unit', '500,000 Log Capacity']
  },
  {
    id: 'zk-f22',
    model_name: 'ZKTeco ZK-F22',
    category: 'face',
    category_name: 'Touchscreen Face Recognition',
    direction: 'in_out',
    direction_name: 'IN and OUT',
    user_capacity: 3000,
    face_capacity: 3000,
    log_capacity: 200000,
    communication: ['TCP/IP', 'WiFi'],
    screen: '4.3 inch Touch Display',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    specs: ['3,000 Faces', 'Mask Detection & Temp Measurement', 'Touchscreen Interface']
  }
];

export async function fetchPlans() {
  try {
    const res = await fetch(`${API_BASE}/plans`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data.status && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
    return FALLBACK_PLANS;
  } catch (err) {
    console.warn('API fetchPlans failed, using fallback plans:', err);
    return FALLBACK_PLANS;
  }
}

// Helper to resolve device image URLs from API payloads
function resolveDeviceImageUrl(device, idx) {
  let rawUrl = device.main_image || (device.images && device.images[0]?.url) || device.image;
  
  if (rawUrl && typeof rawUrl === 'string') {
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      return rawUrl;
    }
    // Prepend API domain to relative storage paths like /storage/device-catalog/...
    return `${BACKEND_DOMAIN}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;
  }

  // Fallback to high-res placeholders if main_image is null
  const fallbacks = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
  ];

  return fallbacks[idx % fallbacks.length];
}

export async function fetchDeviceCatalog() {
  try {
    const res = await fetch(`${API_BASE}/device-catalog`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data.status && Array.isArray(data.data) && data.data.length > 0) {
      const normalizedData = data.data.map((device, idx) => ({
        ...device,
        image: resolveDeviceImageUrl(device, idx),
        user_capacity: device.capacity_users || device.user_capacity || 1000,
        face_capacity: device.capacity_faces || device.face_capacity || null,
        fingerprint_capacity: device.capacity_fingerprints || device.fingerprint_capacity || null,
        log_capacity: device.capacity_records || device.log_capacity || 50000,
        communication: device.communication || ['TCP/IP']
      }));
      return { ...data, data: normalizedData };
    }
    return { status: true, data: FALLBACK_DEVICES };
  } catch (err) {
    console.warn('API fetchDeviceCatalog failed, using fallback devices:', err);
    return { status: true, data: FALLBACK_DEVICES };
  }
}

export async function checkEmailAvailability(email) {
  if (!email || !email.includes('@')) {
    return { available: true };
  }
  try {
    const res = await fetch(`${API_BASE}/trial/check-availability?email=${encodeURIComponent(email)}`);
    if (!res.ok) return { available: true };
    const data = await res.json();
    return data;
  } catch (err) {
    return { available: true };
  }
}

export async function submitTrialSignup(formData) {
  try {
    const res = await fetch(`${API_BASE}/trial/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return {
      ok: false,
      data: {
        message: 'Network connection error. Please try again or contact support at support@bluewhyteapps.com.'
      }
    };
  }
}
