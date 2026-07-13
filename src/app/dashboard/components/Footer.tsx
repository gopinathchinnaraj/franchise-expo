'use client';

export default function Footer() {
  return (
    <footer className="px-6 py-5 border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <div className="text-sm text-gray-500">
          © 2026 FranchiseExpo Pro • Exhibitor Portal v2.0
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:underline">Help Center</a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:underline">Documentation</a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
}
