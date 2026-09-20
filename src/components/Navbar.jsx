import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const closeTimer = useRef(null);

  const menuItems = ["Work", "Services", "Posts", "Products", "About"];

  const openTemporarily = () => {
    clearTimeout(closeTimer.current);

    setIsOpen(true);

    closeTimer.current = setTimeout(() => {
      if (!isHovering) {
        setIsOpen(false);
      }
    }, 2500);
  };

  useEffect(() => {
    let lastSection = 0;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (
          index > 0 &&
          rect.top >= 0 &&
          rect.top <= window.innerHeight * 0.15 &&
          index !== lastSection
        ) {
          lastSection = index;
          openTemporarily();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(closeTimer.current);
    };
  }, [isHovering]);

  const handleClick = () => {
  clearTimeout(closeTimer.current);
  setIsOpen(true);
};

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center px-2 py-3 pointer-events-none">
      <div
        onMouseEnter={() => {
          setIsHovering(true);
          clearTimeout(closeTimer.current);
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          clearTimeout(closeTimer.current);
          setIsOpen(false);
        }}
        onClick={handleClick}
        className={`
          pointer-events-auto
          relative
          flex
          items-center
          bg-black
          text-white
          rounded-xl
          overflow-hidden
          cursor-pointer
          shadow-lg
          transition-all
          duration-500
          ease-[cubic-bezier(0.77,0,0.175,1)]
          ${
            isOpen
              ? "w-[min(94vw,430px)] h-[46px] px-2"
              : "w-[105px] h-[42px] px-3"
          }
        `}
      >
        {/* Closed state */}
        <div
          className={`
            absolute
            inset-0
            flex
            flex-row-reverse
            items-center
            justify-evenly
            gap-2
            transition-all
            duration-300
            ${
              isOpen
                ? "opacity-0 scale-90"
                : "opacity-100 scale-100"
            }
          `}
        >
          {/* Menu icon */}
          <div className="flex flex-col gap-[4px]">
            <span className="w-[15px] h-[1.5px] bg-white rounded-full" />
            <span className="w-[15px] h-[1.5px] bg-white rounded-full" />
          </div>

          {/* Menu text */}
          <span className="text-[11px] font-medium tracking-wide">
            Menu
          </span>
        </div>

        {/* Open menu */}
        <div
          className={`
            flex
            items-center
            justify-center
            gap-0.5
            w-full
            transition-all
            duration-400
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }
          `}
        >
          {menuItems.map((item) => (
            <h4
              key={item}
              onClick={(e) => e.stopPropagation()}
              className="
                text-white
                text-[9px]
                sm:text-xs
                px-2
                sm:px-3
                py-1.5
                rounded-xl
                font-semibold
                whitespace-nowrap
                hover:bg-white
                hover:text-black
                transition-colors
                duration-300
              "
            >
              {item}
            </h4>
          ))}

          <h4
            onClick={(e) => e.stopPropagation()}
            className="
              text-white
              text-[9px]
              sm:text-xs
              px-2
              sm:px-3
              py-1.5
              rounded-xl
              font-semibold
              whitespace-nowrap
              hover:bg-white
              hover:text-black
              transition-colors
              duration-300
            "
          >
            Contact
          </h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;