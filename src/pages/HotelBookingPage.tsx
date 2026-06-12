import { Link } from "react-router-dom";
import { ArrowLeft, Download, Smartphone, Layers, CheckCircle2, FlaskConical, Globe, FileText, ExternalLink, BedDouble, Users, CalendarCheck, Shield, LogIn, Wrench } from "lucide-react";

const APP = {
  portfolioTitle: "Hotel Booking Android App",
  displayName: "BookMyRoom",
  tagline: "Browse rooms, book stays, reserve services, and manage hotel listings with admin and customer roles.",
  version: "1.0",
  packageName: "com.example.hottelapp",
  minAndroid: "Android 7.0+ (API 24)",
  apkUrl: "/downloads/hottelapp-v1.0.apk",
};

const TEST_RESULTS = {
  driveUrl: "",
  localReportUrl: "/documents/HotelBooking-Test-Results-Report.html",
  summary: "Manual QA verified login, room/service booking, admin CRUD, and SQLite persistence across core flows.",
};

const DEMO_LOGINS = [
  { role: "Admin", username: "Admin", password: "123", note: "Manage users, rooms, services, and bookings" },
  { role: "Customer", username: "Amal", password: "123", note: "Browse and book rooms and services" },
];

const ABOUT = "BookMyRoom (HottelApp) is an offline Android hotel management app. Customers browse rooms and services, make bookings, and view hotel information. Admins manage users, room listings, services, about content, and review pending reservations — all stored locally in SQLite with image support.";

const FOCUS_AREAS = [
  { title: "Role-based access", description: "Separate admin and customer dashboards and workflows." },
  { title: "Room & service booking", description: "Browse listings with images and prices, then book rooms or reserve services." },
  { title: "Admin management", description: "Full CRUD for users, rooms, services, about content, and booking review." },
  { title: "Local-first storage", description: "SQLite stores users, rooms, bookings, reservations, and images offline." },
];

const FEATURES = [
  { icon: <LogIn size={18} />, title: "Authentication", detail: "Admin, demo customer, and registered user login." },
  { icon: <BedDouble size={18} />, title: "Room browsing", detail: "View room listings with images, categories, and prices." },
  { icon: <CalendarCheck size={18} />, title: "Room booking", detail: "Book rooms with automatic date and pending status." },
  { icon: <Wrench size={18} />, title: "Service reservations", detail: "Browse and book hotel services." },
  { icon: <Users size={18} />, title: "User management", detail: "Admin adds and modifies user accounts." },
  { icon: <Shield size={18} />, title: "Booking review", detail: "Admin reviews room and service reservations." },
];

const SCREENS = [
  { name: "Splash & Login", caption: "App entry and role-based sign in" },
  { name: "Customer Dashboard", caption: "Browse rooms and services" },
  { name: "Browse Rooms", caption: "View images, prices, and book" },
  { name: "Book Services", caption: "Reserve hotel services" },
  { name: "Admin Dashboard", caption: "Manage hotel operations" },
  { name: "Manage Rooms", caption: "Add, update, and delete listings" },
  { name: "View Bookings", caption: "Review pending reservations" },
];

const TECH_STACK = [
  { category: "Platform", items: ["Android", "Min SDK 24", "Target SDK 34", "Activity-based UI"] },
  { category: "Languages & tools", items: ["Java 11", "Gradle Kotlin DSL", "Android Studio", "XML layouts"] },
  { category: "Libraries", items: ["AndroidX AppCompat", "Material Components", "ConstraintLayout", "SQLiteOpenHelper"] },
  { category: "Database", items: ["SQLite (HotelDB v15)", "Users & login", "Rooms & services", "Bookings & reservations"] },
];

function ScreenMockup({ name, caption }: { name: string; caption: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
      <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border border-slate-700/60 bg-gradient-to-b from-fuchsia-600 to-violet-800 shadow-[0_20px_60px_rgba(217,70,239,0.25)]">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-white/80"><span>9:41</span><span>BookMyRoom</span></div>
        <div className="bg-fuchsia-500/90 px-4 py-3"><p className="text-sm font-semibold text-white">{name}</p></div>
        <div className="space-y-2 bg-white p-4 text-slate-800">
          <div className="h-16 rounded-xl bg-gradient-to-br from-fuchsia-100 to-violet-100" />
          <div className="h-2 w-3/4 rounded-full bg-slate-200" />
          <div className="mt-3 rounded-xl bg-fuchsia-50 p-2 text-[10px] text-fuchsia-900">{caption}</div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-white">{name}</p>
      <p className="mt-1 text-center text-xs text-slate-400">{caption}</p>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-fuchsia-400/15 bg-fuchsia-400/10 text-fuchsia-400">{icon}</div>
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
    </div>
  );
}

export default function HotelBookingPage() {
  return (
    <div className="min-h-screen theme-bg theme-text overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b theme-border backdrop-blur-xl theme-surface/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-20">
          <Link to="/#projects" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/60 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"><ArrowLeft size={16} /> Back to Portfolio</Link>
          <a href={APP.apkUrl} download className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-violet-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"><Download size={16} /> Download APK</a>
        </div>
      </header>
      <main className="relative">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Android Project</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{APP.portfolioTitle}</h1>
              <p className="mt-3 text-2xl font-semibold text-fuchsia-300">{APP.displayName}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{APP.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2">v{APP.version}</span>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2">{APP.minAndroid}</span>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2">{APP.packageName}</span>
              </div>
            </div>
            <div className="rounded-[2rem] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 via-slate-950/80 to-violet-500/10 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.35)]">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white shadow-[0_20px_60px_rgba(217,70,239,0.35)]"><BedDouble size={48} /></div>
              <p className="mt-6 text-center text-xl font-semibold text-white">BookMyRoom</p>
              <p className="mt-2 text-center text-sm text-slate-400">Hotel room & service booking</p>
              <a href={APP.apkUrl} download className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"><Download size={18} /> Download APK v{APP.version}</a>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Globe size={20} />} title="About the App" />
          <div className="mt-8 rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"><p className="text-lg leading-8 text-slate-300">{ABOUT}</p></div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Smartphone size={20} />} title="App Focus" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">{FOCUS_AREAS.map((item) => (<div key={item.title} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"><h3 className="text-xl font-semibold text-white">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.description}</p></div>))}</div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Smartphone size={20} />} title="Screenshots" />
          <p className="mt-4 max-w-3xl text-slate-400">UI flow previews — send device captures to replace placeholders.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{SCREENS.map((screen) => (<ScreenMockup key={screen.name} name={screen.name} caption={screen.caption} />))}</div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<CheckCircle2 size={20} />} title="Key Features" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{FEATURES.map((feature) => (<div key={feature.title} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"><div className="mb-4 inline-flex rounded-2xl bg-fuchsia-500/10 p-3 text-fuchsia-300">{feature.icon}</div><h3 className="text-lg font-semibold text-white">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{feature.detail}</p></div>))}</div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<LogIn size={20} />} title="How to Use (Demo Login)" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">{DEMO_LOGINS.map((login) => (<div key={login.role} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"><p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">{login.role}</p><p className="mt-4 text-lg font-semibold text-white">{login.username} / {login.password}</p><p className="mt-3 text-sm leading-7 text-slate-400">{login.note}</p></div>))}</div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<FlaskConical size={20} />} title="Test Results & QA" />
          <div className="mt-8 rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{TEST_RESULTS.summary}</p>
              <a href={TEST_RESULTS.driveUrl || TEST_RESULTS.localReportUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"><FileText size={18} /> View Test Report <ExternalLink size={16} /></a>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Layers size={20} />} title="Languages & Platforms" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">{TECH_STACK.map((group) => (<div key={group.category} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"><h3 className="text-lg font-semibold text-white">{group.category}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => (<span key={item} className="rounded-full border border-slate-700/50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-400">{item}</span>))}</div></div>))}</div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-20">
          <div className="rounded-[2rem] border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-500/10 via-slate-950/80 to-violet-500/10 p-10 text-center shadow-[0_40px_100px_rgba(15,23,42,0.35)]">
            <h2 className="text-3xl font-bold text-white">Try BookMyRoom on Android</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Download the APK to browse rooms, book stays, and explore the admin panel.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={APP.apkUrl} download className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-violet-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"><Download size={18} /> Download APK v{APP.version}</a>
              <Link to="/#projects" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"><ArrowLeft size={18} /> Back to Portfolio</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
