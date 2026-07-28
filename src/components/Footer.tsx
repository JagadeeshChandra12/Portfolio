export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-black/90">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 font-medium text-sm md:text-base tracking-wide">
          Code &bull; Learn &bull; Build &bull; Contribute 🚀
        </p>
        <p className="text-gray-600 text-xs mt-4">
          &copy; {new Date().getFullYear()} Rayana Naga Venkata Jagadeesh Chandra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
