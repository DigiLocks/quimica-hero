export default function PhoneMockup() {
  return (
    <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
      {/* Glow halo behind phone */}
      <div className="absolute inset-0 -m-20 bg-orange-500/20 rounded-full blur-3xl" />
      
      {/* Floating wrapper */}
      <div className="relative animate-[float_6s_ease-in-out_infinite]">
        {/* Phone frame */}
        <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl shadow-purple-900/50">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
          
          {/* Inner screen */}
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="https://cdn.sceneai.art/Hero%20Section%20Video/247f75dd-335a-4aaa-ba65-47df2f7b24b9.mp4" type="video/mp4" />
            </video>
            
            {/* Subtle dark overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* App header */}
            <div className="absolute top-12 left-0 right-0 px-5 flex items-center justify-between text-white text-xs">
              <div className="font-semibold">DigiLock</div>
              <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur" />
            </div>
            
            {/* Bottom controls */}
            <div className="absolute bottom-6 left-0 right-0 px-5">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-white rounded-full" />
                </div>
                <span className="text-[10px] text-white/80 font-mono">2:14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
