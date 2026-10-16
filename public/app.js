const icons = {
  grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
  pulse: '<svg viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
  drop: '<svg viewBox="0 0 24 24"><path d="M12 3s6 6.1 6 11a6 6 0 0 1-12 0c0-4.9 6-11 6-11Z"/><path d="M9.5 15.5c.5 1.1 1.4 1.7 2.8 1.9"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16"/><path d="m7 15 3-4 3 2 5-7"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.2a2 2 0 1 1-4 0v-.2a2 2 0 0 0-3.4-1.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 3.4 12 2 2 0 0 0 3 8.6a2 2 0 1 1 2.8-2.8l.1.1A2 2 0 0 0 9.3 4.5h.2a2 2 0 1 1 4 0v.2a2 2 0 0 0 3.4 1.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 20.6 12 2 2 0 0 0 19.4 15Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5.2-3.4 8.6-8 10-4.6-1.4-8-4.8-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 7"/></svg>',
  alert: '<svg viewBox="0 0 24 24"><path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v5M12 17.2v.1"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.1 3.1-4.7 7-4.7s6.2 1.6 7 4.7"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>'
};

document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icons[el.dataset.icon] || ''; });

const pathToView = { '/': 'dashboard', '/dashboard': 'dashboard', '/requests': 'requests', '/inventory': 'inventory', '/notifications': 'notifications', '/reports': 'reports', '/architecture': 'architecture', '/settings': 'settings', '/new-request': 'new-request' };
const viewToPath = Object.fromEntries(Object.entries(pathToView).map(([path, view]) => [view, path]));
const state = {
  view: pathToView[window.location.pathname] || 'dashboard',
  role: 'Blood Bank',
  query: '',
  requests: [
    { id: 'REQ-2481', person: 'Meera Shah', meta: 'CityCare Hospital · Mumbai', group: 'O−', units: 2, urgency: 'Critical', status: 'Pending review', time: '12 min ago', initials: 'MS', tone: 'red' },
    { id: 'REQ-2479', person: 'Vikram Rao', meta: 'Family request · Pune', group: 'B+', units: 1, urgency: 'Standard', status: 'Approved', time: '42 min ago', initials: 'VR', tone: 'blue' },
    { id: 'REQ-2475', person: 'Asha Menon', meta: 'Metro General · Bengaluru', group: 'AB+', units: 3, urgency: 'Urgent', status: 'Matching donors', time: '1 hr ago', initials: 'AM', tone: 'mint' },
    { id: 'REQ-2468', person: 'Dev Patel', meta: 'Northside Medical · Delhi', group: 'A+', units: 2, urgency: 'Standard', status: 'Completed', time: 'Yesterday', initials: 'DP', tone: 'amber' }
  ],
  inventory: [
    { group: 'O−', units: 8, capacity: 20, expiry: '14 Nov 2026', status: 'Critical', tone: 'critical' },
    { group: 'O+', units: 42, capacity: 60, expiry: '26 Nov 2026', status: 'Healthy', tone: 'good' },
    { group: 'A+', units: 28, capacity: 50, expiry: '03 Dec 2026', status: 'Healthy', tone: 'good' },
    { group: 'A−', units: 12, capacity: 24, expiry: '19 Nov 2026', status: 'Low stock', tone: 'low' },
    { group: 'B+', units: 34, capacity: 50, expiry: '28 Nov 2026', status: 'Healthy', tone: 'good' },
    { group: 'AB+', units: 16, capacity: 22, expiry: '06 Dec 2026', status: 'Healthy', tone: 'good' }
  ],
  notifications: [
    { kind: 'success', title: 'Donor match found for REQ-2475', text: '3 available AB+ donors were notified in Bengaluru.', time: '8 min ago', meta: 'Delivered' },
    { kind: 'demo', title: 'Development SMS queued', text: 'Demo provider active · O− request REQ-2481', time: '12 min ago', meta: 'Demo only' },
    { kind: 'success', title: 'Inventory approval recorded', text: 'B+ · 1 unit reserved for Vikram Rao.', time: '42 min ago', meta: 'Logged' },
    { kind: 'info', title: 'Reminder window opened', text: '12 donors can receive a donation reminder today.', time: '2 hrs ago', meta: 'Ready' }
  ]
};

const app = document.getElementById('app');
const breadcrumb = document.getElementById('breadcrumb-current');
const viewLabels = { dashboard: 'Command center', requests: 'Blood requests', inventory: 'Inventory', notifications: 'Notifications', reports: 'Reports', architecture: 'How it works', settings: 'Settings', 'new-request': 'New blood request' };
const roleData = {
  Donor: { eyebrow: 'Donor workspace', title: 'Your availability can change a day.', body: 'See matching requests, choose when you can help, and keep your donation history in one place.', number: '03', numberLabel: 'matching requests today', metric: ['Availability', 'On · searchable'], action: ['Update availability', 'Keep your donor status current.'], secondary: ['View request history', 'Accepted and declined matches.'] },
  Recipient: { eyebrow: 'Recipient workspace', title: 'A clear next step when time matters.', body: 'Search by group and location, submit a requirement, and track each handoff without exposing private details.', number: '01', numberLabel: 'request in progress', metric: ['Request status', 'Matching donors'], action: ['Create a blood request', 'Share only the details needed to route help.'], secondary: ['Search availability', 'View reported stock by group.'] },
  Hospital: { eyebrow: 'Hospital workspace', title: 'Coordinate requests with confidence.', body: 'Review blood-bank stock, submit patient requests, and follow every approval, issue, and completion event.', number: '04', numberLabel: 'active hospital requests', metric: ['Fastest approval', '18 min'], action: ['Submit hospital request', 'Send a verified requirement to the queue.'], secondary: ['Check stock', 'View bank availability before requesting.'] },
  'Blood Bank': { eyebrow: 'Blood bank workspace', title: 'Route the next unit with confidence.', body: 'A calm operational view for inventory, approvals, donor matching, and every auditable stock movement.', number: '08', numberLabel: 'requests need review', metric: ['Low-stock groups', '02'], action: ['Review request queue', 'Approve only after stock and authorization checks.'], secondary: ['Update inventory', 'Record a traceable stock change.'] },
  Admin: { eyebrow: 'Admin workspace', title: 'One system. Five accountable roles.', body: 'Monitor users, inventory, requests, notifications, reports, and audit events without exposing sensitive details.', number: '96%', numberLabel: 'workflow coverage', metric: ['Audit events', '184 this month'], action: ['Review audit log', 'Keep important changes visible and accountable.'], secondary: ['Manage role access', 'Authorization belongs on the server.'] }
};

function icon(name) { return icons[name] || ''; }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char])); }
function statusClass(status) { return status.toLowerCase().replace(/\s+/g, '-'); }
function initialsTone(tone) { return `avatar-${tone}`; }
function formatStatus(status) { return `<span class="status-pill status-${statusClass(status)}">${escapeHtml(status)}</span>`; }
function avatar(initials, tone = 'red') { return `<span class="avatar ${initialsTone(tone)}">${escapeHtml(initials)}</span>`; }

function shell({ eyebrow, title, body, action = '' }) {
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="lede">${body}</p></div><div class="page-actions">${action}</div></div>`;
}
function safetyBanner() {
  return `<div class="safety-banner"><span data-icon="shield">${icon('shield')}</span><span><strong>Safety boundary:</strong> recorded blood group helps route a request, but it is not a transfusion compatibility or medical eligibility decision. Qualified hospital or blood-bank staff must confirm testing and crossmatching.</span></div>`;
}
function metricStrip(items) {
  return `<div class="metrics-strip">${items.map((item) => `<div class="metric"><div class="metric-label">${item.label}</div><div class="metric-value">${item.value}</div><div class="metric-trend ${item.neutral ? 'neutral' : ''}">${item.trend}</div><span class="metric-icon">${icon(item.icon)}</span></div>`).join('')}</div>`;
}
function pulseCard() {
  return `<section class="card pulse-card"><div class="card-header"><div><div class="eyebrow">Network pulse</div><h3>Requests in motion</h3><p>Live-looking demo signal from today’s workflow.</p></div><span class="live-dot"></span></div><div class="pulse-content"><div class="pulse-stat">24 <small>active</small></div><div class="pulse-sub">+6 requests since yesterday</div><div class="sparkline"><svg viewBox="0 0 350 45" preserveAspectRatio="none"><path class="spark-fade" d="M0 34h350"/><path d="M0 36 C18 36 22 24 38 29 S63 38 79 26 99 32 116 20 135 33 153 25 174 35 189 17 211 22 228 12 247 28 267 23 287 32 308 12 326 21 350 7"/></svg></div><div class="pulse-footer"><span>08:00</span><span>Now</span></div></div></section>`;
}
function recentRequests() {
  return `<section class="card"><div class="card-header"><div><h2>Recent requests</h2><p>Every request has a visible next step.</p></div><button class="link-button" data-view="requests">View all ${icon('arrow')}</button></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Request</th><th>Group</th><th>Need</th><th>Priority</th><th>Status</th><th></th></tr></thead><tbody>${state.requests.slice(0, 4).map((r) => `<tr><td><div class="request-person">${avatar(r.initials, r.tone)}<div><strong>${escapeHtml(r.person)}</strong><span>${escapeHtml(r.id)} · ${escapeHtml(r.time)}</span></div></div></td><td><span class="group-token">${r.group}</span></td><td>${r.units} unit${r.units > 1 ? 's' : ''}</td><td>${escapeHtml(r.urgency)}</td><td>${formatStatus(r.status)}</td><td><button class="action-link" data-action="inspect" data-id="${r.id}">Open</button></td></tr>`).join('')}</tbody></table></div></section>`;
}
function inventoryCard() {
  return `<section class="card"><div class="card-header"><div><h2>Stock overview</h2><p>Units available across connected banks.</p></div><button class="link-button" data-view="inventory">Manage ${icon('arrow')}</button></div><div class="card-body"><div class="inventory-mini">${state.inventory.slice(0, 4).map((item) => `<div class="inventory-line"><span class="blood-badge">${item.group}</span><div><strong>${item.status}</strong><span>${item.expiry} · ${Math.round((item.units / item.capacity) * 100)}% of target</span><div class="progress"><i style="width:${(item.units / item.capacity) * 100}%"></i></div></div><div class="inventory-amount">${item.units} <small>u</small></div></div>`).join('')}</div></div></section>`;
}
function alertsCard() {
  return `<section class="card alert-card"><div class="card-header"><div><h2>Needs attention</h2><p>Small signals before they become blockers.</p></div><span class="status-pill status-pending">3 open</span></div><div class="card-body"><div class="alert-item"><span class="alert-icon">${icon('alert')}</span><div><strong>O− stock is below safe buffer</strong><p>8 units available · suggested target is 20.</p></div></div><div class="alert-item"><span class="alert-icon">${icon('bell')}</span><div><strong>2 donor responses pending</strong><p>REQ-2481 has matching donors to review.</p></div></div><div class="alert-item"><span class="alert-icon">${icon('lock')}</span><div><strong>SMTP is not configured</strong><p>Email delivery is currently in demo mode.</p></div></div></div></section>`;
}
function dashboard() {
  const r = roleData[state.role];
  return `${shell({ eyebrow: r.eyebrow, title: r.title, body: r.body, action: `<button class="button button-primary" data-view="new-request">${icon('plus')} New blood request</button>` })}
    <div class="role-strip"><span class="role-label">Viewing as</span>${Object.keys(roleData).map((role) => `<button class="role-chip ${role === state.role ? 'active' : ''}" data-role="${role}">${role}</button>`).join('')}</div>
    ${metricStrip([
      { label: 'Requests in motion', value: '24', trend: '+12% this week', icon: 'pulse' },
      { label: r.metric[0], value: r.metric[1], trend: state.role === 'Blood Bank' ? '2 groups need attention' : 'Updated just now', icon: 'drop' },
      { label: 'Registered donors', value: '1,248', trend: '+84 this month', icon: 'user' },
      { label: 'Units issued', value: '186', trend: '+18% vs last month', icon: 'check' }
    ])}
    <div class="overview-grid">${pulseCard()}<section class="card"><div class="card-header"><div><h2>Today’s flow</h2><p>A quick view of operational handoffs.</p></div><span class="status-pill status-approved">On track</span></div><div class="card-body"><div class="status-list"><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>8 requests matched</strong><span>Donors notified with a secure reference</span></div><span class="status-time">09:42</span></div><div class="status-row"><span class="status-dot"></span><div class="status-copy"><strong>3 requests need review</strong><span>Stock and authorization check required</span></div><span class="status-time">09:17</span></div><div class="status-row"><span class="status-dot amber"></span><div class="status-copy"><strong>2 reminders due</strong><span>Donor availability window closes soon</span></div><span class="status-time">08:55</span></div><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>0 failed deliveries</strong><span>Demo email/SMS queue is healthy</span></div><span class="status-time">08:30</span></div></div></div></section></div>
    ${recentRequests()}
    <div class="bottom-grid section-gap">${inventoryCard()}${alertsCard()}</div>${safetyBanner()}`;
}
function requestRows(requests = state.requests) {
  if (!requests.length) return `<tr><td colspan="7"><div class="empty-state"><h3>No matching requests</h3><p>Try a different search or filter.</p></div></td></tr>`;
  return requests.map((r) => `<tr><td><span class="request-id">${r.id}</span></td><td><div class="request-person">${avatar(r.initials, r.tone)}<div><strong>${escapeHtml(r.person)}</strong><span>${escapeHtml(r.meta)}</span></div></div></td><td><span class="group-token">${r.group}</span></td><td>${r.units} unit${r.units > 1 ? 's' : ''}</td><td>${escapeHtml(r.urgency)}</td><td>${formatStatus(r.status)}</td><td><button class="action-link" data-action="inspect" data-id="${r.id}">Details ${icon('arrow')}</button></td></tr>`).join('');
}
function requestsView() {
  const filtered = state.requests.filter((r) => `${r.id} ${r.person} ${r.meta} ${r.group} ${r.status}`.toLowerCase().includes(state.query.toLowerCase()));
  return `${shell({ eyebrow: 'Operations queue', title: 'Requests with a visible next step.', body: 'Search the shared queue, review urgency, and keep the approval handoff accountable.', action: `<button class="button button-primary" data-view="new-request">${icon('plus')} New request</button>` })}
    <div class="card"><div class="card-header"><div class="filter-row"><div class="search-bar"><span data-icon="search">${icon('search')}</span><input id="request-search" type="search" value="${escapeHtml(state.query)}" placeholder="Search request, person, group" aria-label="Search requests" /></div><select class="select" aria-label="Filter request status"><option>All statuses</option><option>Pending review</option><option>Approved</option><option>Matching donors</option><option>Completed</option></select></div><span class="status-pill status-review">${filtered.length} visible</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Reference</th><th>Requesting person</th><th>Group</th><th>Units</th><th>Priority</th><th>Status</th><th></th></tr></thead><tbody id="request-table-body">${requestRows(filtered)}</tbody></table></div></div>${safetyBanner()}`;
}
function newRequestView() {
  return `${shell({ eyebrow: 'Secure intake', title: 'Create a blood request.', body: 'Share only the minimum details needed to route a verified requirement. This demo stores nothing outside the browser.', action: `<button class="button button-quiet" data-view="requests">Cancel</button>` })}
    <section class="card"><div class="card-header"><div><h2>Requirement details</h2><p>Fields mirror the production Spring Boot request model.</p></div><span class="status-pill status-review">Draft</span></div><div class="card-body"><form id="request-form"><div class="form-grid"><div class="field"><label for="requester-name">Requesting person / patient reference</label><input id="requester-name" name="name" placeholder="e.g. Meera Shah" required /></div><div class="field"><label for="blood-group">Requested blood group</label><select id="blood-group" name="group" required><option value="">Select group</option><option>O−</option><option>O+</option><option>A+</option><option>A−</option><option>B+</option><option>B−</option><option>AB+</option><option>AB−</option></select></div><div class="field"><label for="units">Units required</label><input id="units" name="units" type="number" min="1" max="10" value="1" required /></div><div class="field"><label for="urgency">Urgency</label><select id="urgency" name="urgency"><option>Standard</option><option>Urgent</option><option>Critical</option></select></div><div class="field"><label for="hospital">Hospital / care location</label><input id="hospital" name="hospital" placeholder="e.g. CityCare Hospital" required /></div><div class="field"><label for="location">City / general location</label><input id="location" name="location" placeholder="e.g. Mumbai" required /></div><div class="field full"><label for="contact">Authorized contact channel</label><input id="contact" name="contact" placeholder="Secure email or hospital desk reference" required /></div><div class="field full"><label for="notes">Relevant request note <span style="font-weight:400;color:#9aa5a6">(avoid unnecessary patient details)</span></label><textarea id="notes" name="notes" placeholder="Add a concise operational note…"></textarea></div><div class="field full"><div class="form-note">By submitting, the request enters a review queue. Matching is based on recorded group and location; medical eligibility and compatibility must be confirmed by qualified staff before issue.</div></div></div><div class="form-actions"><button type="button" class="button button-quiet" data-view="requests">Save as draft</button><button type="submit" class="button button-primary">Submit for review ${icon('arrow')}</button></div></form></div></section>`;
}
function inventoryView() {
  return `${shell({ eyebrow: 'Blood bank module', title: 'Inventory you can audit.', body: 'Track available units, expiry windows, low-stock signals, and the authorization boundary around every stock change.', action: `<button class="button button-primary" data-action="stock-update">${icon('plus')} Record stock update</button>` })}
    <div class="report-grid" style="margin-bottom:22px"><div class="report-stat"><span>Total available units</span><strong>140</strong><small>+12% this month</small></div><div class="report-stat"><span>Low-stock groups</span><strong>02</strong><small style="color:#a76a10">Needs attention</small></div><div class="report-stat"><span>Expiring in 14 days</span><strong>09</strong><small style="color:#a76a10">Review soon</small></div><div class="report-stat"><span>Last stock action</span><strong style="font-size:20px">09:17</strong><small>By Arjun Kapoor</small></div></div>
    <section class="card inventory-table"><div class="card-header"><div><h2>Units by blood group</h2><p>Demo inventory · production updates require an authorized role and transaction.</p></div><span class="status-pill status-approved">Stock validated</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Group</th><th>Available</th><th>Target fill</th><th>Earliest expiry</th><th>State</th><th>Action</th></tr></thead><tbody>${state.inventory.map((item) => `<tr><td><span class="group-token">${item.group}</span></td><td><strong>${item.units} units</strong></td><td style="min-width:150px"><div class="progress"><i style="width:${(item.units / item.capacity) * 100}%"></i></div><small style="color:#849092">${Math.round((item.units / item.capacity) * 100)}% of ${item.capacity}</small></td><td>${item.expiry}</td><td><span class="stock-state stock-${item.tone}">${item.status}</span></td><td><button class="action-link" data-action="stock-update" data-group="${item.group}">Update</button></td></tr>`).join('')}</tbody></table></div></section>
    <div class="view-grid section-gap"><section class="card"><div class="card-header"><div><h2>Transaction guardrails</h2><p>What the Spring service must enforce.</p></div></div><div class="card-body"><div class="status-list"><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Atomic approval + deduction</strong><span>Use a database transaction with row-level protection.</span></div><span class="status-time">Required</span></div><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Never issue negative stock</strong><span>Validate availability immediately before issue.</span></div><span class="status-time">Required</span></div><div class="status-row"><span class="status-dot amber"></span><div class="status-copy"><strong>Expiry-aware allocation</strong><span>Exclude expired or unavailable units from matching.</span></div><span class="status-time">Required</span></div></div></div></section>${alertsCard()}</div>`;
}
function notificationsView() {
  return `${shell({ eyebrow: 'Notification monitor', title: 'Reach the right donor, privately.', body: 'Every delivery carries a request reference and general location — never a broadcast of patient details or donor phone numbers.', action: `<button class="button button-quiet" data-action="notification-settings">${icon('settings')} Provider settings</button>` })}
    <div class="metrics-strip"><div class="metric"><div class="metric-label">Delivered today</div><div class="metric-value">126</div><div class="metric-trend">98.4% success rate</div><span class="metric-icon">${icon('check')}</span></div><div class="metric"><div class="metric-label">Donor responses</div><div class="metric-value">18</div><div class="metric-trend">7 accepted · 11 pending</div><span class="metric-icon">${icon('user')}</span></div><div class="metric"><div class="metric-label">Demo provider events</div><div class="metric-value">09</div><div class="metric-trend neutral">SMTP/SMS not configured</div><span class="metric-icon">${icon('mail')}</span></div><div class="metric"><div class="metric-label">Duplicate prevented</div><div class="metric-value">04</div><div class="metric-trend">Idempotency key active</div><span class="metric-icon">${icon('shield')}</span></div></div>
    <section class="card"><div class="card-header"><div><h2>Recent notification events</h2><p>Matching, delivery, and response history.</p></div><span class="status-pill status-review">Audit ready</span></div><div>${state.notifications.map((n) => `<div class="notification-card"><span class="notification-icon ${n.kind === 'success' ? 'success' : n.kind === 'demo' ? 'demo' : ''}">${icon(n.kind === 'success' ? 'check' : n.kind === 'demo' ? 'mail' : 'bell')}</span><div class="notification-copy"><strong>${escapeHtml(n.title)}</strong><p>${escapeHtml(n.text)}</p></div><div class="notification-meta"><span>${escapeHtml(n.time)}</span><span>${escapeHtml(n.meta)}</span></div></div>`).join('')}</div></section>
    <div class="view-grid section-gap"><section class="card"><div class="card-header"><div><h2>Provider configuration</h2><p>Development-safe integration status.</p></div></div><div class="card-body"><div class="status-list"><div class="status-row"><span class="status-dot amber"></span><div class="status-copy"><strong>SMTP email</strong><span>Configurable through environment secrets.</span></div><span class="status-time">Demo mode</span></div><div class="status-row"><span class="status-dot amber"></span><div class="status-copy"><strong>SMS provider</strong><span>Interface ready for a provider adapter.</span></div><span class="status-time">Demo mode</span></div><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Delivery history</strong><span>Keep status and provider response IDs.</span></div><span class="status-time">Enabled</span></div></div></div></section>${safetyBanner()}</div>`;
}
function reportsView() {
  return `${shell({ eyebrow: 'Reports & analytics', title: 'See what the system is learning.', body: 'Operational summaries are calculated from the application data model, not hardcoded dashboard decoration.', action: `<button class="button button-primary" data-action="export-report">${icon('file')} Export snapshot</button>` })}
    <div class="report-grid" style="margin-bottom:22px"><div class="report-stat"><span>Registered donors</span><strong>1,248</strong><small>+84 this month</small></div><div class="report-stat"><span>Donations recorded</span><strong>392</strong><small>+29 this month</small></div><div class="report-stat"><span>Units issued</span><strong>186</strong><small>+18% vs last month</small></div><div class="report-stat"><span>Requests completed</span><strong>74</strong><small>92% completion rate</small></div></div>
    <div class="view-grid"><section class="card"><div class="card-header"><div><h2>Requests by status</h2><p>Last 7 days · demo operational data</p></div><span class="status-pill status-approved">Healthy</span></div><div class="card-body"><div class="bar-chart"><div class="bar-column"><div class="bar soft" style="height:50%"></div><label>Mon</label></div><div class="bar-column"><div class="bar" style="height:68%"></div><label>Tue</label></div><div class="bar-column"><div class="bar soft" style="height:44%"></div><label>Wed</label></div><div class="bar-column"><div class="bar" style="height:82%"></div><label>Thu</label></div><div class="bar-column"><div class="bar" style="height:62%"></div><label>Fri</label></div><div class="bar-column"><div class="bar soft" style="height:56%"></div><label>Sat</label></div><div class="bar-column"><div class="bar" style="height:92%"></div><label>Sun</label></div></div></div></section><section class="card"><div class="card-header"><div><h2>Audit activity</h2><p>Important changes stay traceable.</p></div><button class="link-button" data-action="audit-log">Full log ${icon('arrow')}</button></div><div class="card-body"><div class="status-list"><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Inventory updated</strong><span>O− · 4 units received · Arjun Kapoor</span></div><span class="status-time">09:17</span></div><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Request approved</strong><span>REQ-2479 · B+ · 1 unit reserved</span></div><span class="status-time">08:42</span></div><div class="status-row"><span class="status-dot"></span><div class="status-copy"><strong>Role access reviewed</strong><span>Hospital operators · Admin review</span></div><span class="status-time">Yesterday</span></div></div></div></section></div>
    <div class="card section-gap"><div class="card-header"><div><h2>Report coverage</h2><p>Production endpoints mapped for the backend handoff.</p></div></div><div class="card-body"><div class="role-strip"><span class="status-pill status-approved">Donors</span><span class="status-pill status-approved">Donations</span><span class="status-pill status-approved">Stock by group</span><span class="status-pill status-approved">Low stock</span><span class="status-pill status-approved">Requests by status</span><span class="status-pill status-approved">Notifications</span></div></div></div>`;
}
function architectureView() {
  return `${shell({ eyebrow: 'Beginner guide', title: 'A clear path from demo to production.', body: 'This prototype shows the front-end experience. The production version keeps the same flows behind Spring Boot, MySQL, and server-side authorization.', action: `<button class="button button-primary" data-action="download-guide">${icon('file')} Run checklist</button>` })}
    <div class="arch-grid"><section class="card"><div class="card-header"><div><h2>How the system connects</h2><p>The simplest mental model for the college presentation.</p></div></div><div class="card-body"><div class="arch-list"><div class="arch-step"><span class="arch-step-number">01</span><div><strong>Frontend captures a safe request</strong><p>HTML, CSS, and JavaScript validate the minimum fields and keep private details scoped.</p></div></div><div class="arch-step"><span class="arch-step-number">02</span><div><strong>Spring Boot authenticates the role</strong><p>REST controllers use secure password hashing and role-based authorization before any restricted action.</p></div></div><div class="arch-step"><span class="arch-step-number">03</span><div><strong>MySQL stores the workflow</strong><p>Users, roles, donors, hospitals, blood groups, inventory, requests, status history, notifications, and audit logs are linked by foreign keys.</p></div></div><div class="arch-step"><span class="arch-step-number">04</span><div><strong>Matching creates a private notification</strong><p>Only contactable, available, preference-enabled donors with relevant recorded group and location are considered.</p></div></div><div class="arch-step"><span class="arch-step-number">05</span><div><strong>Blood bank closes the loop</strong><p>Approval and stock deduction happen in one transaction, with expiry checks and no negative inventory.</p></div></div></div></div></section><section class="card"><div class="card-header"><div><h2>Suggested project tree</h2><p>Spring Boot + Maven handoff.</p></div></div><div class="card-body"><pre class="code-block"><span class="code-comment">// backend/src/main/java</span>
<span class="code-key">com.bloodconnect</span>
├── auth/
├── donor/
├── recipient/
├── hospital/
├── bloodbank/
├── notification/
├── report/
└── audit/

<span class="code-comment">// database</span>
schema.sql
application.yml
pom.xml</pre><div class="safety-banner"><span data-icon="lock">${icon('lock')}</span><span>Keep database passwords, SMTP credentials, and SMS keys in environment configuration — never in public JavaScript.</span></div></div></section></div>
    <section class="card section-gap"><div class="card-header"><div><h2>Verification checklist</h2><p>Use this sequence when presenting the project.</p></div><span class="status-pill status-review">Stage 1 · UI prototype</span></div><div class="card-body"><div class="report-grid"><div class="report-stat"><span>01 · Role access</span><strong style="font-size:18px">Server-side</strong><small>Never trust URL changes</small></div><div class="report-stat"><span>02 · Request flow</span><strong style="font-size:18px">Trackable</strong><small>Pending → issued → done</small></div><div class="report-stat"><span>03 · Notifications</span><strong style="font-size:18px">Auditable</strong><small>Real or demo, clearly labeled</small></div><div class="report-stat"><span>04 · Inventory</span><strong style="font-size:18px">Transactional</strong><small>No duplicate deductions</small></div></div></div></section>`;
}
function settingsView() {
  return `${shell({ eyebrow: 'Workspace settings', title: 'Keep the environment honest.', body: 'This demo is intentionally safe: no real SMS, email, patient records, or administrator self-registration are enabled.', action: `<button class="button button-primary" data-action="save-settings">Save preferences</button>` })}
    <div class="view-grid"><section class="card"><div class="card-header"><div><h2>Notification preferences</h2><p>Controls shown here map to future account settings.</p></div></div><div class="card-body"><div class="status-list"><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Request matching alerts</strong><span>Send only when group and location are relevant.</span></div><input class="switch" type="checkbox" checked aria-label="Request matching alerts" /></div><div class="status-row"><span class="status-dot mint"></span><div class="status-copy"><strong>Donation reminders</strong><span>Respect donor availability and notification preferences.</span></div><input class="switch" type="checkbox" checked aria-label="Donation reminders" /></div><div class="status-row"><span class="status-dot amber"></span><div class="status-copy"><strong>SMS channel</strong><span>Provider not configured in demo mode.</span></div><input class="switch" type="checkbox" aria-label="SMS channel" /></div></div></div></section><section class="card"><div class="card-header"><div><h2>Access boundary</h2><p>Role restrictions are a backend concern.</p></div></div><div class="card-body"><div class="form-note"><strong>Admin accounts are provisioned securely.</strong><br />There is no public path to become an administrator. In production, user and role changes should be protected by server-side authorization and audit logging.</div><div class="section-gap"><button class="quick-action" data-action="toast" data-message="Secure sign-in flow is staged for the Spring Boot authentication module."><span class="quick-action-icon">${icon('lock')}</span><span><strong>Review authentication plan</strong><span>Hash passwords, validate sessions, authorize roles.</span></span><span class="quick-arrow">${icon('arrow')}</span></button></div></div></section></div>`;
}

function render() {
  const views = { dashboard, requests: requestsView, inventory: inventoryView, notifications: notificationsView, reports: reportsView, architecture: architectureView, settings: settingsView, 'new-request': newRequestView };
  app.innerHTML = views[state.view]();
  breadcrumb.textContent = viewLabels[state.view] || 'Command center';
  document.title = `BloodConnect — ${viewLabels[state.view] || 'Command center'}`;
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === state.view));
  document.querySelectorAll('[data-icon]').forEach((el) => { if (!el.innerHTML.trim()) el.innerHTML = icon(el.dataset.icon); });
  bindViewEvents();
  app.focus({ preventScroll: true });
}
function toast(message) {
  const region = document.getElementById('toast-region');
  const node = document.createElement('div'); node.className = 'toast'; node.textContent = message; region.appendChild(node);
  window.setTimeout(() => node.remove(), 3600);
}
function openView(view) { state.view = view; state.query = view === 'requests' ? state.query : ''; window.history.pushState({}, '', viewToPath[view] || '/'); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function bindViewEvents() {
  document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => openView(button.dataset.view)));
  document.querySelectorAll('[data-role]').forEach((button) => button.addEventListener('click', () => { state.role = button.dataset.role; toast(`${state.role} workspace selected`); render(); }));
  const search = document.getElementById('request-search');
  if (search) search.addEventListener('input', (event) => { state.query = event.target.value; const body = document.getElementById('request-table-body'); if (body) body.innerHTML = requestRows(state.requests.filter((r) => `${r.id} ${r.person} ${r.meta} ${r.group} ${r.status}`.toLowerCase().includes(state.query.toLowerCase()))); });
  const form = document.getElementById('request-form');
  if (form) form.addEventListener('submit', (event) => { event.preventDefault(); const values = new FormData(form); const request = { id: `REQ-${2482 + state.requests.length}`, person: values.get('name'), meta: `${values.get('hospital')} · ${values.get('location')}`, group: values.get('group'), units: Number(values.get('units')), urgency: values.get('urgency'), status: 'Pending review', time: 'Just now', initials: String(values.get('name')).split(' ').map((part) => part[0]).join('').slice(0,2).toUpperCase(), tone: 'red' }; state.requests.unshift(request); state.notifications.unshift({ kind: 'demo', title: `Demo notification queued for ${request.id}`, text: `${request.group} request · ${request.meta}`, time: 'Just now', meta: 'Demo only' }); toast(`${request.id} submitted for review`); openView('requests'); });
  document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'inspect') { const request = state.requests.find((item) => item.id === button.dataset.id); toast(`${request?.id || 'Request'} opened · private details remain scoped`); }
    if (action === 'stock-update') toast(`${button.dataset.group || 'Inventory'} update staged · transaction and audit log required`);
    if (action === 'notification-settings') toast('Provider settings are ready for SMTP and SMS secrets.');
    if (action === 'export-report') toast('Report snapshot prepared for download in production.');
    if (action === 'audit-log') toast('Audit log is restricted to authorized admin roles.');
    if (action === 'download-guide') toast('Presentation checklist marked ready.');
    if (action === 'save-settings') toast('Demo preferences saved locally.');
    if (action === 'focus-search') { openView('requests'); window.setTimeout(() => document.getElementById('request-search')?.focus(), 30); }
    if (action === 'toast') toast(button.dataset.message || 'Action staged.');
  }));
}

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => openView(button.dataset.view)));
window.addEventListener('popstate', () => { state.view = pathToView[window.location.pathname] || 'dashboard'; render(); });
render();
