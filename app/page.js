'use client'

export default function Home() {
  return (
    <main>
      <div className="ondebox">
        <svg 
          className="onde" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shape-rendering="auto"
        >
          <defs>
            <path id="onda" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
          </defs>
          <g className="parallaxonde">
            <use xlinkHref="#onda" x="48" y="0" fill="rgba(8, 145, 178, 0.6)" />  {/* Your blue */}
            <use xlinkHref="#onda" x="48" y="3" fill="rgba(8, 145, 178, 0.4)" />
            <use xlinkHref="#onda" x="48" y="5" fill="rgba(34, 197, 94, 0.4)" />  {/* Your green */}
            <use xlinkHref="#onda" x="48" y="7" fill="rgba(34, 197, 94, 0.2)" />
          </g>
        </svg>
      </div>
      {/* rest of your content */}
    </main>
  );
}
