import { useEffect } from "react";
import { X, Mail, ArrowRight } from "lucide-react";

export default function Modal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white">
          <X className="w-4 h-4" />
        </button>
        <div className="text-center mb-6">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 items-center justify-center mb-4">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Start your trial</h3>
          <p className="text-sm text-white/60 mt-2">Drop your email — magic link incoming.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert("Magic link sent!"); onClose(); }} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input name="email" type="email" required placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 text-white font-semibold">
            Send magic link →
          </button>
        </form>
      </div>
    </div>
  );
}
