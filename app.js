// School Website & Principal CMS Engine
const STORAGE_KEY = 'SRI_NEHRU_SCHOOL_DATA_V1';
const ADMIN_PIN = 'principal123';

// Default Seed Data
const DEFAULT_DATA = {
  school: {
    name: "Sri Nehru Lower Primary Convent School",
    shortName: "Sri Nehru Convent School",
    tagline: "Dedicated to Academic Eminence & Navodaya/Morarji Selections",
    motto: "Knowledge • Character • Excellence",
    affiliation: "Recognized by Govt. of Karnataka | Affiliation No. KA-2024-9182",
    phone: "+91 94801 23456 / +91 81922 45678",
    email: "principal@vidyadhama.edu.in",
    address: "Ichhangi Village, Savanuru Taluk, Haveri District, Karnataka - 581118",
    principalName: "Dr. S. R. Patil",
    principalTitle: "M.Sc., B.Ed., Ph.D. (Educational Leadership)",
    principalPhoto: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
    principalMessage: "Welcome to Sri Nehru Convent School. For nearly two decades, our mission has been to nurture young minds from rural and urban communities into leaders of high moral character and exceptional intellectual rigor. Our structured, child-centric preparation for prestigious entrance examinations like Jawahar Navodaya Vidyalaya (JNV) and Morarji Desai Residential Schools stands as a testament to our faculty's devotion and our students' tireless work ethic. We welcome parents and well-wishers to explore our vibrant campus and celebrate the successes of our budding scholars.",
    stats: {
      passRate: "100%",
      navodayaSelections: "48+",
      morarjiSelections: "72+",
      yearsExcellence: "18+"
    }
  },
  notices: [
    {
      id: "n-1",
      title: "Admissions Open for Academic Year 2026-2027 (Classes 1st to 10th & Special JNV Batch)",
      date: "2026-09-10",
      category: "Admissions",
      isUrgent: true,
      description: "Application forms are available at the administrative office and downloadable online."
    },
    {
      id: "n-2",
      title: "Navodaya & Morarji Desai Crash Course Batch Commencing This Saturday",
      date: "2026-09-08",
      category: "Exams",
      isUrgent: false,
      description: "Special weekend mock test series, mental ability workshops, and doubt-clearing sessions."
    },
    {
      id: "n-3",
      title: "Science & Innovation Fair Scheduled for October 2nd, 2026",
      date: "2026-09-02",
      category: "Events",
      isUrgent: false,
      description: "Students from 5th to 10th will present interactive STEM models and sustainable energy projects."
    }
  ],
  achievers: [
    {
      id: "ach-1",
      name: "Rohan K. Biradar",
      category: "Navodaya",
      year: "2025-2026",
      marks: "98.5%",
      rank: "District Rank 1",
      schoolAdmitted: "Jawahar Navodaya Vidyalaya, Davangere",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
      badge: "JNV Topper"
    },
    {
      id: "ach-2",
      name: "Sahana M. Goudar",
      category: "Morarji",
      year: "2025-2026",
      marks: "97.2%",
      rank: "State Rank 4",
      schoolAdmitted: "Morarji Desai Residential School, Chitradurga",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
      badge: "Morarji State Merit"
    },
    {
      id: "ach-3",
      name: "Prajwal S. Nayak",
      category: "Navodaya",
      year: "2025-2026",
      marks: "96.8%",
      rank: "Taluk Rank 1",
      schoolAdmitted: "Jawahar Navodaya Vidyalaya, Shivamogga",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      badge: "JNV Qualified"
    },
    {
      id: "ach-4",
      name: "Ananya B. Patil",
      category: "Morarji",
      year: "2024-2025",
      marks: "98.0%",
      rank: "District Rank 2",
      schoolAdmitted: "Morarji Desai Residential School, Harihar",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
      badge: "Morarji Top 10"
    },
    {
      id: "ach-5",
      name: "Darshan H. Pujar",
      category: "Kittur / Other",
      year: "2024-2025",
      marks: "95.5%",
      rank: "Merit Rank 8",
      schoolAdmitted: "Kittur Rani Chennamma Sainik School",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      badge: "Sainik School Merit"
    },
    {
      id: "ach-6",
      name: "Sneha V. Kulkarni",
      category: "Navodaya",
      year: "2023-2024",
      marks: "97.0%",
      rank: "District Rank 3",
      schoolAdmitted: "Jawahar Navodaya Vidyalaya, Ballari",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
      badge: "JNV Qualified"
    }
  ],
  events: [
    {
      id: "ev-1",
      title: "79th Independence Day Flag Hoisting & Patriotic Parade",
      category: "Independence Day",
      date: "2026-08-15",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=80",
      description: "Students presenting guard of honour followed by tricolour cultural choreography."
    },
    {
      id: "ev-2",
      title: "Annual Sports Meet: Track & Field Championships",
      category: "Sports Day",
      date: "2026-02-18",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
      description: "Inter-house athletics competition, relay races, and award ceremony."
    },
    {
      id: "ev-3",
      title: "Republic Day Parade & NCC Drill Showcase",
      category: "Republic Day",
      date: "2026-01-26",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
      description: "NCC cadets drill, yoga performance, and constitution values speech."
    },
    {
      id: "ev-4",
      title: "Annual Cultural Fest - 'Taranga 2025' Highlights",
      category: "Annual Day",
      date: "2025-12-20",
      type: "video",
      mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Folk dance, theatrical skits, and music performances by primary and high school students."
    },
    {
      id: "ev-5",
      title: "Inter-School Science Model Exhibition & Robotics Demo",
      category: "Science Fair",
      date: "2025-11-14",
      type: "image",
      mediaUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&auto=format&fit=crop&q=80",
      description: "Solar irrigation models, AI rover demonstrations, and science quiz."
    }
  ],
  faculty: [
    {
      id: "fac-1",
      name: "Dr. S. R. Patil",
      role: "Principal & Head of Institution",
      subject: "Science & Administration",
      qualification: "M.Sc., B.Ed., Ph.D.",
      photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "fac-2",
      name: "Prof. Manjunath Hiremath",
      role: "Senior Faculty & JNV Lead Coach",
      subject: "Mathematics & Mental Ability",
      qualification: "M.Sc. (Maths), B.Ed. (15+ Years Exp)",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "fac-3",
      name: "Mrs. Savitha Deshpande",
      role: "Head of Languages",
      subject: "Kannada & English Literature",
      qualification: "M.A., B.Ed., M.Phil.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "fac-4",
      name: "Mr. Raghavendra Joshi",
      role: "Residential Warden & Science Mentor",
      subject: "Physics & Chemistry",
      qualification: "M.Sc. (Physics), B.Ed.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
    }
  ]
};

// Global App State
let state = loadState();
let activeAchieverCategory = 'ALL';
let activeAchieverYear = 'ALL';
let achieverSearchTerm = '';
let activeEventCategory = 'ALL';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to parse stored state, reverting to default.", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Storage error:", e);
    showToast("Storage quota exceeded or storage unavailable.", "error");
  }
}

// Toast Helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  let icon = '✓';
  if (type === 'error') icon = '✕';
  if (type === 'info') icon = 'ℹ';
  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Render Functions for Public View
function renderPublicContent() {
  // School details
  const s = state.school;
  document.querySelectorAll('.school-name-text').forEach(el => el.textContent = s.name);
  document.querySelectorAll('.school-short-text').forEach(el => el.textContent = s.shortName);
  document.querySelectorAll('.school-tagline-text').forEach(el => el.textContent = s.tagline);
  document.querySelectorAll('.school-motto-text').forEach(el => el.textContent = s.motto);
  document.querySelectorAll('.school-phone-text').forEach(el => el.textContent = s.phone);
  document.querySelectorAll('.school-email-text').forEach(el => el.textContent = s.email);
  document.querySelectorAll('.school-address-text').forEach(el => el.textContent = s.address);
  document.querySelectorAll('.school-affiliation-text').forEach(el => el.textContent = s.affiliation);

  // Principal Details
  const princNameEl = document.getElementById('principal-name');
  if (princNameEl) princNameEl.textContent = s.principalName;
  const princTitleEl = document.getElementById('principal-title');
  if (princTitleEl) princTitleEl.textContent = s.principalTitle;
  const princMsgEl = document.getElementById('principal-message');
  if (princMsgEl) princMsgEl.textContent = s.principalMessage;
  const princPhotoEl = document.getElementById('principal-photo');
  if (princPhotoEl) princPhotoEl.src = s.principalPhoto;

  // Stats
  if (document.getElementById('stat-pass-rate')) document.getElementById('stat-pass-rate').textContent = s.stats.passRate;
  if (document.getElementById('stat-navodaya')) document.getElementById('stat-navodaya').textContent = s.stats.navodayaSelections;
  if (document.getElementById('stat-morarji')) document.getElementById('stat-morarji').textContent = s.stats.morarjiSelections;
  if (document.getElementById('stat-years')) document.getElementById('stat-years').textContent = s.stats.yearsExcellence;

  renderNotices();
  renderAchievers();
  renderEvents();
  renderFaculty();
}

function renderNotices() {
  const container = document.getElementById('notices-container');
  const tickerContainer = document.getElementById('ticker-content');
  if (!container) return;

  if (state.notices.length === 0) {
    container.innerHTML = `<div class="text-center py-8 text-slate-500">No circulars posted at this time.</div>`;
    if (tickerContainer) tickerContainer.textContent = "Welcome to " + state.school.name;
    return;
  }

  // Marquee ticker
  if (tickerContainer) {
    const tickerText = state.notices.map(n => `📢 ${n.title} (${n.date})`).join('  |  ');
    tickerContainer.textContent = tickerText;
  }

  container.innerHTML = state.notices.map(n => `
    <div class="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full ${n.isUrgent ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}">
            ${escapeHtml(n.category)}
          </span>
          <span class="text-xs text-slate-400">📅 ${escapeHtml(n.date)}</span>
        </div>
        <h4 class="font-semibold text-slate-800">${escapeHtml(n.title)}</h4>
        <p class="text-sm text-slate-600">${escapeHtml(n.description)}</p>
      </div>
      <button onclick="viewNoticeModal('${n.id}')" class="shrink-0 px-4 py-2 text-xs font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
        View Notice
      </button>
    </div>
  `).join('');
}

function renderAchievers() {
  const container = document.getElementById('achievers-grid');
  if (!container) return;

  let filtered = state.achievers.filter(a => {
    const matchesCat = activeAchieverCategory === 'ALL' || a.category === activeAchieverCategory;
    const matchesYear = activeAchieverYear === 'ALL' || a.year === activeAchieverYear;
    const matchesSearch = !achieverSearchTerm || 
      a.name.toLowerCase().includes(achieverSearchTerm.toLowerCase()) ||
      a.schoolAdmitted.toLowerCase().includes(achieverSearchTerm.toLowerCase());
    return matchesCat && matchesYear && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
        <div class="text-3xl mb-2">🎓</div>
        <h4 class="font-semibold text-slate-700">No Achievers Found</h4>
        <p class="text-sm text-slate-500">Try adjusting your category or year filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(a => `
    <div class="premium-card bg-white rounded-2xl overflow-hidden border border-slate-200 relative group flex flex-col">
      <div class="relative h-60 w-full overflow-hidden bg-slate-100">
        <img src="${escapeHtml(a.photo)}" alt="${escapeHtml(a.name)}" class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'">
        <div class="laurel-badge px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm flex items-center gap-1">
          <span>★</span> ${escapeHtml(a.badge || a.category)}
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80"></div>
        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500 text-slate-950 inline-block mb-1">${escapeHtml(a.year)}</span>
          <h3 class="text-lg font-bold leading-tight">${escapeHtml(a.name)}</h3>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500 font-medium">Entrance Exam:</span>
            <span class="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">${escapeHtml(a.category)}</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500 font-medium">Score / Performance:</span>
            <span class="font-bold text-amber-600">${escapeHtml(a.marks)} (${escapeHtml(a.rank)})</span>
          </div>
          <div class="pt-2 border-t border-slate-100">
            <p class="text-xs text-slate-400 font-medium">Selected For & Admitted To:</p>
            <p class="text-xs font-semibold text-slate-700 leading-snug mt-0.5">${escapeHtml(a.schoolAdmitted)}</p>
          </div>
        </div>
        <button onclick="shareAchiever('${a.id}')" class="w-full py-2 rounded-xl bg-slate-50 hover:bg-amber-50 hover:text-amber-800 text-slate-600 text-xs font-semibold border border-slate-200 transition">
          View Certificate & Profile
        </button>
      </div>
    </div>
  `).join('');
}

function renderEvents() {
  const container = document.getElementById('events-grid');
  if (!container) return;

  let filtered = state.events.filter(ev => {
    return activeEventCategory === 'ALL' || ev.category === activeEventCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
        <div class="text-3xl mb-2">📸</div>
        <h4 class="font-semibold text-slate-700">No Gallery Items in this Category</h4>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ev => `
    <div class="premium-card bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col group cursor-pointer" onclick="openMediaLightbox('${ev.id}')">
      <div class="relative h-52 bg-slate-900 overflow-hidden">
        ${ev.type === 'video' ? `
          <div class="w-full h-full flex items-center justify-center bg-slate-900 relative">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80" class="w-full h-full object-cover opacity-60">
            <div class="absolute w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition">▶</div>
          </div>
        ` : `
          <img src="${escapeHtml(ev.mediaUrl)}" alt="${escapeHtml(ev.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'">
        `}
        <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
          ${escapeHtml(ev.category)}
        </span>
        <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs px-2 py-0.5 rounded font-medium">
          ${escapeHtml(ev.date)}
        </span>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-slate-800 group-hover:text-blue-700 transition">${escapeHtml(ev.title)}</h4>
          <p class="text-xs text-slate-500 mt-1.5 line-clamp-2">${escapeHtml(ev.description)}</p>
        </div>
        <div class="mt-4 flex items-center justify-between text-xs text-blue-600 font-semibold pt-3 border-t border-slate-100">
          <span>${ev.type === 'video' ? 'Watch Video' : 'View High-Res Photo'}</span>
          <span>→</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFaculty() {
  const container = document.getElementById('faculty-grid');
  if (!container) return;

  container.innerHTML = state.faculty.map(f => `
    <div class="bg-white rounded-2xl p-5 border border-slate-200 text-center flex flex-col items-center hover:border-amber-400 transition">
      <img src="${escapeHtml(f.photo)}" alt="${escapeHtml(f.name)}" class="w-24 h-24 rounded-full object-cover border-4 border-slate-100 mb-3 shadow-inner" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'">
      <h4 class="font-bold text-slate-800 text-base">${escapeHtml(f.name)}</h4>
      <p class="text-xs font-semibold text-amber-600 mt-0.5">${escapeHtml(f.role)}</p>
      <p class="text-xs text-slate-500 mt-1">${escapeHtml(f.subject)}</p>
      <div class="mt-3 px-3 py-1 bg-slate-50 rounded-full text-[11px] text-slate-600 font-medium">
        ${escapeHtml(f.qualification)}
      </div>
    </div>
  `).join('');
}

// Filter Event Listeners
function setupFilters() {
  // Achiever category pills
  document.querySelectorAll('.achiever-cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.achiever-cat-btn').forEach(b => {
        b.classList.remove('bg-blue-900', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-blue-900', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
      activeAchieverCategory = btn.dataset.category;
      renderAchievers();
    });
  });

  // Achiever year dropdown
  const yearSelect = document.getElementById('achiever-year-select');
  if (yearSelect) {
    yearSelect.addEventListener('change', (e) => {
      activeAchieverYear = e.target.value;
      renderAchievers();
    });
  }

  // Achiever search input
  const searchInput = document.getElementById('achiever-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      achieverSearchTerm = e.target.value;
      renderAchievers();
    });
  }

  // Events category pills
  document.querySelectorAll('.event-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.event-cat-btn').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-amber-500', 'text-slate-950');
      btn.classList.remove('bg-white', 'text-slate-700');
      activeEventCategory = btn.dataset.category;
      renderEvents();
    });
  });
}

// Media Lightbox Modal
function openMediaLightbox(id) {
  const item = state.events.find(e => e.id === id);
  if (!item) return;
  const modal = document.getElementById('media-lightbox');
  const mediaWrap = document.getElementById('lightbox-media-wrap');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const dateEl = document.getElementById('lightbox-date');

  titleEl.textContent = item.title;
  descEl.textContent = item.description;
  dateEl.textContent = `${item.category} • ${item.date}`;

  if (item.type === 'video') {
    mediaWrap.innerHTML = `
      <div class="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg">
        <iframe src="${escapeHtml(item.mediaUrl)}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else {
    mediaWrap.innerHTML = `
      <div class="max-h-[70vh] flex items-center justify-center bg-black rounded-xl overflow-hidden">
        <img src="${escapeHtml(item.mediaUrl)}" class="max-h-[70vh] w-auto object-contain rounded-xl" onerror="this.src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80'">
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

function closeLightbox() {
  const modal = document.getElementById('media-lightbox');
  const mediaWrap = document.getElementById('lightbox-media-wrap');
  if (mediaWrap) mediaWrap.innerHTML = '';
  modal.classList.add('hidden');
}

// Notice Modal
function viewNoticeModal(id) {
  const notice = state.notices.find(n => n.id === id);
  if (!notice) return;
  alert(`📢 OFFICIAL CIRCULAR\n\nTitle: ${notice.title}\nCategory: ${notice.category}\nDate: ${notice.date}\n\nDetails:\n${notice.description}`);
}

function shareAchiever(id) {
  const a = state.achievers.find(item => item.id === id);
  if (!a) return;
  alert(`🏆 STUDENT ACHIEVEMENT CARD\n\nStudent: ${a.name}\nExam: ${a.category}\nYear: ${a.year}\nPerformance: ${a.marks} (${a.rank})\nAdmitted Institution: ${a.schoolAdmitted}\n\nCongratulations on bringing honor to ${state.school.name}!`);
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inq-name').value;
    showToast(`Thank you, ${name}! Your inquiry has been sent to the Principal's Office. We will contact you shortly.`, 'success');
    form.reset();
  });
}

// ==========================================
// PRINCIPAL & ADMIN DASHBOARD LOGIC
// ==========================================

let isAdminLoggedIn = false;

function openAdminAuthModal() {
  if (isAdminLoggedIn) {
    openAdminDashboard();
  } else {
    document.getElementById('admin-auth-modal').classList.remove('hidden');
    document.getElementById('admin-pin-input').value = '';
    document.getElementById('admin-pin-input').focus();
  }
}

function closeAdminAuthModal() {
  document.getElementById('admin-auth-modal').classList.add('hidden');
}

function submitAdminAuth() {
  const enteredPin = document.getElementById('admin-pin-input').value.trim();
  if (enteredPin === ADMIN_PIN) {
    isAdminLoggedIn = true;
    closeAdminAuthModal();
    showToast("Authentication successful! Welcome, Principal.", "success");
    openAdminDashboard();
  } else {
    showToast("Invalid password! Default is: principal123", "error");
  }
}

function openAdminDashboard() {
  document.getElementById('admin-dashboard-modal').classList.remove('hidden');
  renderAdminOverview();
  renderAdminAchievers();
  renderAdminEvents();
  renderAdminNotices();
  renderAdminSchoolForm();
}

function closeAdminDashboard() {
  document.getElementById('admin-dashboard-modal').classList.add('hidden');
  // Refresh public content in case changes were made
  renderPublicContent();
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  closeAdminDashboard();
  showToast("Logged out from Principal Admin Portal.", "info");
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.remove('bg-blue-900', 'text-white');
    btn.classList.add('bg-slate-100', 'text-slate-600');
  });
  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-blue-900', 'text-white');
    activeBtn.classList.remove('bg-slate-100', 'text-slate-600');
  }

  document.querySelectorAll('.admin-tab-panel').forEach(panel => panel.classList.add('hidden'));
  const targetPanel = document.getElementById(`admin-panel-${tabName}`);
  if (targetPanel) targetPanel.classList.remove('hidden');
}

// Admin: Overview
function renderAdminOverview() {
  document.getElementById('adm-count-achievers').textContent = state.achievers.length;
  document.getElementById('adm-count-events').textContent = state.events.length;
  document.getElementById('adm-count-notices').textContent = state.notices.length;
  document.getElementById('adm-count-faculty').textContent = state.faculty.length;
}

// Admin: Achievers Management
function renderAdminAchievers() {
  const tbody = document.getElementById('adm-achievers-table-body');
  if (!tbody) return;

  tbody.innerHTML = state.achievers.map((a, idx) => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 flex items-center gap-2">
        <img src="${escapeHtml(a.photo)}" class="w-8 h-8 rounded-full object-cover border" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'">
        <span class="font-bold text-slate-800">${escapeHtml(a.name)}</span>
      </td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded font-semibold ${a.category === 'Navodaya' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}">
          ${escapeHtml(a.category)}
        </span>
      </td>
      <td class="py-3 px-4 font-medium text-slate-600">${escapeHtml(a.year)}</td>
      <td class="py-3 px-4 font-bold text-slate-700">${escapeHtml(a.marks)} (${escapeHtml(a.rank)})</td>
      <td class="py-3 px-4 text-slate-500 max-w-[200px] truncate">${escapeHtml(a.schoolAdmitted)}</td>
      <td class="py-3 px-4 text-right">
        <button onclick="deleteAchiever('${a.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 rounded bg-red-50 hover:bg-red-100 transition">
          Delete
        </button>
      </td>
    </tr>
  `).join('');
}

function handleAddAchiever(e) {
  e.preventDefault();
  const name = document.getElementById('ach-form-name').value.trim();
  const category = document.getElementById('ach-form-cat').value;
  const year = document.getElementById('ach-form-year').value.trim();
  const marks = document.getElementById('ach-form-marks').value.trim();
  const rank = document.getElementById('ach-form-rank').value.trim();
  const schoolAdmitted = document.getElementById('ach-form-school').value.trim();
  const badge = document.getElementById('ach-form-badge').value.trim() || `${category} Merit`;
  let photo = document.getElementById('ach-form-photo-url').value.trim();

  const fileInput = document.getElementById('ach-form-file');
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      photo = evt.target.result;
      saveNewAchiever({ name, category, year, marks, rank, schoolAdmitted, badge, photo });
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    if (!photo) {
      photo = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
    }
    saveNewAchiever({ name, category, year, marks, rank, schoolAdmitted, badge, photo });
  }
}

function saveNewAchiever(data) {
  const newAchiever = {
    id: "ach-" + Date.now(),
    ...data
  };
  state.achievers.unshift(newAchiever);
  saveState();
  renderAdminAchievers();
  renderAdminOverview();
  document.getElementById('add-achiever-form').reset();
  showToast(`Achiever "${data.name}" added successfully!`, "success");
}

function deleteAchiever(id) {
  if (!confirm("Are you sure you want to remove this achiever?")) return;
  state.achievers = state.achievers.filter(a => a.id !== id);
  saveState();
  renderAdminAchievers();
  renderAdminOverview();
  showToast("Achiever removed.", "info");
}

// Admin: Events Management
function renderAdminEvents() {
  const tbody = document.getElementById('adm-events-table-body');
  if (!tbody) return;

  tbody.innerHTML = state.events.map(ev => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold text-slate-800">${escapeHtml(ev.title)}</td>
      <td class="py-3 px-4 text-slate-600">${escapeHtml(ev.category)}</td>
      <td class="py-3 px-4 text-slate-500">${escapeHtml(ev.date)}</td>
      <td class="py-3 px-4 uppercase font-semibold text-slate-600">${escapeHtml(ev.type)}</td>
      <td class="py-3 px-4 text-right">
        <button onclick="deleteEvent('${ev.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 rounded bg-red-50 hover:bg-red-100 transition">
          Delete
        </button>
      </td>
    </tr>
  `).join('');
}

function handleAddEvent(e) {
  e.preventDefault();
  const title = document.getElementById('ev-form-title').value.trim();
  const category = document.getElementById('ev-form-cat').value;
  const date = document.getElementById('ev-form-date').value;
  const type = document.getElementById('ev-form-type').value;
  const description = document.getElementById('ev-form-desc').value.trim();
  let mediaUrl = document.getElementById('ev-form-url').value.trim();

  const fileInput = document.getElementById('ev-form-file');
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      mediaUrl = evt.target.result;
      saveNewEvent({ title, category, date, type, description, mediaUrl });
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    if (!mediaUrl) {
      mediaUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80";
    }
    saveNewEvent({ title, category, date, type, description, mediaUrl });
  }
}

function saveNewEvent(data) {
  const newEv = {
    id: "ev-" + Date.now(),
    ...data
  };
  state.events.unshift(newEv);
  saveState();
  renderAdminEvents();
  renderAdminOverview();
  document.getElementById('add-event-form').reset();
  showToast(`Event "${data.title}" added to gallery!`, "success");
}

function deleteEvent(id) {
  if (!confirm("Are you sure you want to delete this event?")) return;
  state.events = state.events.filter(e => e.id !== id);
  saveState();
  renderAdminEvents();
  renderAdminOverview();
  showToast("Event removed.", "info");
}

// Admin: Notices Management
function renderAdminNotices() {
  const tbody = document.getElementById('adm-notices-table-body');
  if (!tbody) return;

  tbody.innerHTML = state.notices.map(n => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
      <td class="py-3 px-4 font-bold text-slate-800">${escapeHtml(n.title)}</td>
      <td class="py-3 px-4 text-slate-600">${escapeHtml(n.category)}</td>
      <td class="py-3 px-4 text-slate-500">${escapeHtml(n.date)}</td>
      <td class="py-3 px-4">
        ${n.isUrgent ? '<span class="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold">Urgent</span>' : '<span class="text-slate-400">Normal</span>'}
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="deleteNotice('${n.id}')" class="text-red-600 hover:text-red-800 font-semibold px-2 py-1 rounded bg-red-50 hover:bg-red-100 transition">
          Delete
        </button>
      </td>
    </tr>
  `).join('');
}

function handleAddNotice(e) {
  e.preventDefault();
  const title = document.getElementById('not-form-title').value.trim();
  const category = document.getElementById('not-form-cat').value;
  const date = document.getElementById('not-form-date').value || new Date().toISOString().split('T')[0];
  const isUrgent = document.getElementById('not-form-urgent').checked;
  const description = document.getElementById('not-form-desc').value.trim();

  const newNotice = {
    id: "n-" + Date.now(),
    title,
    category,
    date,
    isUrgent,
    description
  };

  state.notices.unshift(newNotice);
  saveState();
  renderAdminNotices();
  renderAdminOverview();
  document.getElementById('add-notice-form').reset();
  showToast("New announcement published successfully!", "success");
}

function deleteNotice(id) {
  if (!confirm("Delete this notice?")) return;
  state.notices = state.notices.filter(n => n.id !== id);
  saveState();
  renderAdminNotices();
  renderAdminOverview();
  showToast("Notice deleted.", "info");
}

// Admin: School & Principal Info Form
function renderAdminSchoolForm() {
  const s = state.school;
  document.getElementById('sch-form-name').value = s.name;
  document.getElementById('sch-form-tagline').value = s.tagline;
  document.getElementById('sch-form-phone').value = s.phone;
  document.getElementById('sch-form-email').value = s.email;
  document.getElementById('sch-form-address').value = s.address;
  document.getElementById('sch-form-principal-name').value = s.principalName;
  document.getElementById('sch-form-principal-title').value = s.principalTitle;
  document.getElementById('sch-form-principal-msg').value = s.principalMessage;
}

function handleSaveSchoolInfo(e) {
  e.preventDefault();
  state.school.name = document.getElementById('sch-form-name').value.trim();
  state.school.tagline = document.getElementById('sch-form-tagline').value.trim();
  state.school.phone = document.getElementById('sch-form-phone').value.trim();
  state.school.email = document.getElementById('sch-form-email').value.trim();
  state.school.address = document.getElementById('sch-form-address').value.trim();
  state.school.principalName = document.getElementById('sch-form-principal-name').value.trim();
  state.school.principalTitle = document.getElementById('sch-form-principal-title').value.trim();
  state.school.principalMessage = document.getElementById('sch-form-principal-msg').value.trim();

  saveState();
  showToast("School and Principal details updated!", "success");
}

// Admin: Backup & Restore
function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  const date = new Date().toISOString().split('T')[0];
  downloadAnchor.setAttribute("download", `School_Website_Backup_${date}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Backup JSON file exported successfully!", "success");
}

function importDataJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && imported.school && imported.achievers) {
        state = imported;
        saveState();
        renderPublicContent();
        renderAdminOverview();
        renderAdminAchievers();
        renderAdminEvents();
        renderAdminNotices();
        renderAdminSchoolForm();
        showToast("Backup data restored successfully!", "success");
      } else {
        showToast("Invalid JSON backup structure!", "error");
      }
    } catch (err) {
      showToast("Error parsing backup JSON file.", "error");
    }
  };
  reader.readAsText(file);
}

function resetToDefaultData() {
  if (!confirm("Warning: This will reset all photos, achievers, and settings to original demo data. Continue?")) return;
  state = JSON.parse(JSON.stringify(DEFAULT_DATA));
  saveState();
  renderPublicContent();
  renderAdminOverview();
  renderAdminAchievers();
  renderAdminEvents();
  renderAdminNotices();
  renderAdminSchoolForm();
  showToast("Reset to factory defaults completed.", "info");
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  renderPublicContent();
  setupFilters();
  setupContactForm();

  // Attach Admin Form Listeners
  const achForm = document.getElementById('add-achiever-form');
  if (achForm) achForm.addEventListener('submit', handleAddAchiever);

  const evForm = document.getElementById('add-event-form');
  if (evForm) evForm.addEventListener('submit', handleAddEvent);

  const notForm = document.getElementById('add-notice-form');
  if (notForm) notForm.addEventListener('submit', handleAddNotice);

  const schForm = document.getElementById('school-info-form');
  if (schForm) schForm.addEventListener('submit', handleSaveSchoolInfo);

  // JSON Import
  const importInput = document.getElementById('json-import-input');
  if (importInput) {
    importInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        importDataJSON(e.target.files[0]);
      }
    });
  }
});
