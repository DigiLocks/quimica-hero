import { useEffect } from "react";
import { X, Mail, ArrowRight } from "lucide-react";

export default function Modal({ open, onClose }) {
  // Închide cu ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Blochează scroll-ul când modalul e deschis
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/70 backdrop-blur-md
                 animate-[fade-in_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md
                   bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950
                   border border-white/10
                   rounded-3xl p-8
                   shadow-2xl shadow-orange-500/20
                   animate-[pop-in_0.25s_ease-out]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full
                     bg-white/10 hover:bg-white/20
                     flex items-center justify-center
                     text-white/70 hover:text-white
                     transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex w-12 h-12 rounded-2xl
                          bg-gradient-to-br from-orange-500 to-purple-600
                          items-center justify-center mb-4">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            Start your DigiLock trial
          </h3>
          <p className="text-sm text-white/60 mt-2">
            Drop your email — we&apos;ll send a magic link.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            alert(`Magic link sent to ${email}! ✨`);
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-white/5 border border-white/10
                           rounded-xl pl-11 pr-4 py-3
                           text-white placeholder-white/30
                           focus:outline-none focus:border-orange-500/50 focus:bg-white/10
                           transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl
                       bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500
                       bg-[length:200%_200%] animate-gradient-shift
                       text-white font-semibold
                       hover:shadow-lg hover:shadow-purple-500/30
                       transition-shadow"
          >
            Send magic link →
          </button>
        </form>

        <p className="text-[11px] text-white/40 text-center mt-5">
          By continuing, you agree to our terms. No credit card required.
        </p>
      </div>
    </div>
  );
}
