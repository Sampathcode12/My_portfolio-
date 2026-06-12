import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Smartphone,
  Layers,
  CheckCircle2,
  FlaskConical,
  Share2,
  Upload,
  Search,
  MessageSquare,
  Camera,
  Globe,
  FileText,
  ExternalLink,
} from "lucide-react";

const APP = {
  portfolioTitle: "AutoBlog Mobile Application",
  displayName: "Outbox",
  tagline: "Offline-first message outbox with one-tap publishing to WordPress and Blogger.",
  version: "1.0",
  packageName: "com.example.autoblog",
  minAndroid: "Android 7.0+ (API 24)",
  apkSize: "6.9 MB",
  apkUrl: "/downloads/outbox-v1.0.apk",
  mainScreenshot: "/projects/autoblog/main-messages.png",
  createScreenshot: "/projects/autoblog/create-message.png",
  editScreenshot: "/projects/autoblog/edit-message.png",
  shareScreenshot: "/projects/autoblog/share-message.png",
  publishScreenshot: "/projects/autoblog/publish-online.png",
  detailsScreenshot: "/projects/autoblog/message-details.png",
  loginScreenshot: "/projects/autoblog/login.png",
};

// Upload public/documents/Outbox-Test-Results-Report.html to Google Drive,
// set sharing to "Anyone with the link", then paste the link below.
const TEST_RESULTS = {
  driveUrl: "",
  localReportUrl: "/documents/Outbox-Test-Results-Report.html",
  summary: "Gradle verified 23/23 unit tests passed with 0 failures.",
};

const ABOUT =
  "Outbox is an offline-first Android app for composing, searching, and managing messages on your device. Users can attach images from the camera or gallery, share content through native Android intents, and publish to WordPress.com, self-hosted WordPress, or Google Blogger when online.";

const FOCUS_AREAS = [
  {
    title: "Offline-first messaging",
    description: "Draft and manage messages locally with Room persistence before publishing or sharing.",
  },
  {
    title: "Media-rich content",
    description: "Attach photos from camera or gallery and include them in messages and published articles.",
  },
  {
    title: "Multi-platform publishing",
    description: "Publish to WordPress.com, self-hosted WordPress REST API, or Google Blogger with OAuth support.",
  },
  {
    title: "Productivity workflows",
    description: "Search, bulk select, delete, share, and publish multiple messages from one screen.",
  },
];

const FEATURES = [
  { icon: <MessageSquare size={18} />, title: "Message CRUD", detail: "Create, edit, view, and delete messages with title, body, and optional image." },
  { icon: <Search size={18} />, title: "Real-time search", detail: "Filter messages instantly by title or body text." },
  { icon: <Camera size={18} />, title: "Camera & gallery", detail: "Capture or pick images and store them in internal app storage." },
  { icon: <Share2 size={18} />, title: "Native sharing", detail: "Share to Email, Twitter, Facebook, Instagram, LinkedIn, and more." },
  { icon: <Upload size={18} />, title: "Online publishing", detail: "Publish formatted HTML articles to WordPress or Blogger." },
  { icon: <Smartphone size={18} />, title: "Adaptive UI", detail: "Single-pane phones and two-pane master/detail layout on tablets." },
];

const SCREENS = [
  { name: "Login", caption: "Sign in to continue", image: APP.loginScreenshot },
  { name: "My Messages", caption: "Search and compose messages", image: APP.mainScreenshot },
  { name: "Create Message", caption: "Title, body, and image attach", image: APP.createScreenshot },
  { name: "Edit Message", caption: "Update title, body, and change image", image: APP.editScreenshot },
  { name: "Message Details", caption: "View, edit, share, and publish", image: APP.detailsScreenshot },
  { name: "Share", caption: "Email and social share targets", image: APP.shareScreenshot },
  { name: "Publish Online", caption: "WordPress and Blogger publishing", image: APP.publishScreenshot },
];

const TECH_STACK = [
  {
    category: "Platform",
    items: ["Android", "Min SDK 24", "Target SDK 34", "Single Activity + Fragments"],
  },
  {
    category: "Languages & tools",
    items: ["Java", "Gradle Kotlin DSL", "Android Studio", "Git"],
  },
  {
    category: "Libraries",
    items: ["AndroidX", "Material Components", "Room", "LiveData", "ViewModel", "OkHttp", "Google Play Services Auth"],
  },
  {
    category: "APIs & storage",
    items: ["Room DB (autoblog.db)", "WordPress.com OAuth", "WordPress REST API", "Blogger API v3"],
  },
];

function PhoneScreenshot({ src, alt, name, caption }: { src: string; alt: string; name: string; caption: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
      <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[1.75rem] border border-slate-700/60 bg-slate-900 shadow-[0_20px_60px_rgba(142,36,170,0.25)]">
        <img src={src} alt={alt} className="block w-full object-cover object-top" />
      </div>
      <p className="mt-4 text-center text-sm font-medium text-white">{name}</p>
      <p className="mt-1 text-center text-xs text-slate-400">{caption}</p>
    </div>
  );
}

function ScreenMockup({ name, caption }: { name: string; caption: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
      <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border border-slate-700/60 bg-[#6A1B7A] shadow-[0_20px_60px_rgba(142,36,170,0.25)]">
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-white/80">
          <span>9:41</span>
          <span>Outbox</span>
        </div>
        <div className="bg-[#8E24AA] px-4 py-3">
          <p className="text-sm font-semibold text-white">{name}</p>
        </div>
        <div className="space-y-2 bg-white p-4 text-slate-800">
          <div className="h-2 w-3/4 rounded-full bg-slate-200" />
          <div className="h-2 w-full rounded-full bg-slate-100" />
          <div className="h-2 w-5/6 rounded-full bg-slate-100" />
          <div className="mt-3 rounded-xl bg-purple-50 p-2 text-[10px] text-purple-900">{caption}</div>
          <div className="mt-2 flex gap-2">
            <div className="h-8 flex-1 rounded-lg bg-[#8E24AA]/20" />
            <div className="h-8 flex-1 rounded-lg bg-[#21759B]/20" />
          </div>
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
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-400">
        {icon}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
    </div>
  );
}

export default function AutoBlogPage() {
  return (
    <div className="min-h-screen theme-bg theme-text overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b theme-border backdrop-blur-xl theme-surface/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-20">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/60 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <a
            href={APP.apkUrl}
            download
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            <Download size={16} /> Download APK
          </a>
        </div>
      </header>

      <main className="relative">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-purple-300">Android Project</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                {APP.portfolioTitle}
              </h1>
              <p className="mt-3 text-2xl font-semibold text-purple-300">{APP.displayName}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{APP.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2">v{APP.version}</span>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2">{APP.minAndroid}</span>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2">{APP.packageName}</span>
              </div>
            </div>
            <div className="rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-slate-950/80 to-cyan-500/10 p-6 shadow-[0_40px_100px_rgba(15,23,42,0.35)]">
              <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900 shadow-[0_20px_60px_rgba(142,36,170,0.35)]">
                <img
                  src={APP.mainScreenshot}
                  alt="Outbox My Messages main screen"
                  className="block w-full object-cover object-top"
                />
              </div>
              <p className="mt-6 text-center text-xl font-semibold text-white">My Messages</p>
              <p className="mt-2 text-center text-sm text-slate-400">Main screen — search, browse, and compose</p>
              <a
                href={APP.apkUrl}
                download
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8E24AA] to-[#6A1B7A] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                <Download size={18} /> Download APK ({APP.apkSize})
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Globe size={20} />} title="About the App" />
          <div className="mt-8 rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <p className="text-lg leading-8 text-slate-300">{ABOUT}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Smartphone size={20} />} title="App Focus" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FOCUS_AREAS.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Smartphone size={20} />} title="Screenshots" />
          <p className="mt-4 max-w-3xl text-slate-400">
            Real device captures across login, messaging, editing, sharing, and publishing flows.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {SCREENS.map((screen) =>
              "image" in screen && screen.image ? (
                <PhoneScreenshot
                  key={screen.name}
                  src={screen.image}
                  alt={`Outbox ${screen.name} screen`}
                  name={screen.name}
                  caption={screen.caption}
                />
              ) : (
                <ScreenMockup key={screen.name} name={screen.name} caption={screen.caption} />
              )
            )}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<CheckCircle2 size={20} />} title="Key Features" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-3 text-purple-300">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<FlaskConical size={20} />} title="Test Results & QA" />
          <div className="mt-8 rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-lg leading-8 text-slate-300">{TEST_RESULTS.summary}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Full test cases, QA notes, and Gradle results are available in the test report document on Google Drive.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href={TEST_RESULTS.driveUrl || TEST_RESULTS.localReportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  <FileText size={18} />
                  {TEST_RESULTS.driveUrl ? "View Test Report (Google Drive)" : "View Test Report"}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
          <SectionTitle icon={<Layers size={20} />} title="Languages & Platforms" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700/50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-20">
          <div className="rounded-[2rem] border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-slate-950/80 to-cyan-500/10 p-10 text-center shadow-[0_40px_100px_rgba(15,23,42,0.35)]">
            <h2 className="text-3xl font-bold text-white">Try Outbox on Android</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Download the debug APK to explore offline messaging, image attachments, sharing, and WordPress/Blogger publishing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={APP.apkUrl}
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                <Download size={18} /> Download APK v{APP.version}
              </a>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <ArrowLeft size={18} /> Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
