import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  // Read style from localStorage, default to 2
  const [styleType, setStyleType] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('portfolio-cursor-style')) || 2;
    }
    return 2;
  });

  const [hovered, setHovered] = useState(false);
  const [clickState, setClickState] = useState(false);
  const [linkHoverType, setLinkHoverType] = useState('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappy, professional springs with minimal lag
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isLink = target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.classList.contains('clickable');
      const isInput = target.closest('input') || target.closest('textarea') || target.closest('select');

      if (isLink) {
        setHovered(true);
        setLinkHoverType('link');
      } else if (isInput) {
        setHovered(true);
        setLinkHoverType('text');
      } else {
        setHovered(false);
        setLinkHoverType('default');
      }
    };

    const handleMouseDown = () => setClickState(true);
    const handleMouseUp = () => setClickState(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  const changeStyle = (type) => {
    setStyleType(type);
    localStorage.setItem('portfolio-cursor-style', type);
  };

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  const renderCursorContent = () => {
    switch (styleType) {
      case 1: {
        // Style 1: Minimal Dot (Solid Glow)
        let scale = 1;
        let opacity = 1;
        let color = "bg-primary";
        let shadow = "shadow-[0_0_10px_rgba(14,165,233,0.5)]";

        if (hovered) {
          if (linkHoverType === 'link') {
            scale = 2.0;
            color = "bg-accent";
            shadow = "shadow-[0_0_15px_rgba(0,245,212,0.8)]";
          } else if (linkHoverType === 'text') {
            scale = 0.5;
            opacity = 0.7;
          }
        }
        if (clickState) {
          scale = 0.8;
        }

        return (
          <motion.div
            className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] transition-colors duration-200 ${color} ${shadow}`}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: scale,
              opacity: opacity
            }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
          />
        );
      }

      case 2: {
        // Style 2: Fine Ring & Dot with Inverse Blend Mode (Standard Premium)
        let outerScale = 1;
        let innerScale = 1;
        let outerOpacity = 1;
        let innerOpacity = 1;

        if (hovered) {
          if (linkHoverType === 'link') {
            outerScale = 1.8;
            innerScale = 0.2;
            innerOpacity = 0;
          } else if (linkHoverType === 'text') {
            outerScale = 0.4;
            innerScale = 1.3;
          }
        }
        if (clickState) {
          outerScale = 0.7;
          innerScale = 1.5;
        }

        return (
          <>
            <motion.div
              className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: outerScale,
                opacity: outerOpacity
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
            <motion.div
              className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: innerScale,
                opacity: innerOpacity
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </>
        );
      }

      case 3: {
        // Style 3: Sleek Focus Circle (Border Only)
        let scale = 1;
        let borderColor = "border-[#6366f1]";
        let bg = "bg-transparent";

        if (hovered) {
          if (linkHoverType === 'link') {
            scale = 1.8;
            borderColor = "border-[#00f5d4]";
            bg = "bg-[#00f5d4]/5";
          } else if (linkHoverType === 'text') {
            scale = 0.6;
            borderColor = "border-[#0ea5e9]";
          }
        }
        if (clickState) {
          scale = 0.75;
          bg = "bg-primary/10";
        }

        return (
          <motion.div
            className={`fixed top-0 left-0 w-5 h-5 rounded-full border-2 pointer-events-none z-[9999] transition-colors duration-300 ${borderColor} ${bg}`}
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: scale
            }}
            transition={{ type: "spring", stiffness: 380, damping: 25 }}
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <>
      {renderCursorContent()}

      {/* Floating Selector UI */}
      <div 
        className="fixed bottom-6 right-6 z-[99999] glass-card px-4 py-3 rounded-2xl shadow-2xl border border-white/20 flex flex-col gap-2 items-center"
        style={{ userSelect: 'none' }}
      >
        <span className="text-[10px] font-bold text-gradient uppercase tracking-widest">
          ✨ Cursor Styles
        </span>
        <div className="flex gap-2">
          {[1, 2, 3].map((num) => {
            const labels = { 1: "Minimal Dot", 2: "Ring & Dot", 3: "Focus Ring" };
            return (
              <button
                key={num}
                onClick={() => changeStyle(num)}
                className={`px-3 py-1.5 rounded-lg font-bold text-[11px] transition-all ${
                  styleType === num 
                    ? 'bg-primary text-white shadow-lg scale-105 border border-white/30' 
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
                style={{ cursor: 'pointer' }}
                title={labels[num]}
              >
                {labels[num]}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cursor;
