import React, { memo, useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px",
  });

  const particles = useMemo(
    () =>
      [...Array(25)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random(),
      })),
    []
  );

  return (
    <section
      ref={sectionRef}
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F8F5FC]
      flex
      items-center
      justify-center
      px-6
      pb-16
      md:pb-15
      "
    >
      {/* ========================
          Aurora Background
      ======================== */}

      <motion.div
        animate={
          shouldReduceMotion || !isInView
            ? {}
            : {
                x: [0, 100, -50, 0],
                y: [0, -80, 50, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[700px]
        h-[700px]
        bg-purple-500/20
        blur-[150px]
        rounded-full
        top-[-200px]
        transform-gpu
        will-change-transform
        "
      />

      <motion.div
        animate={
          shouldReduceMotion || !isInView
            ? {}
            : {
                x: [0, -100, 50, 0],
                y: [0, 80, -40, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[700px]
        h-[700px]
        bg-pink-500/20
        blur-[150px]
        rounded-full
        right-[-200px]
        transform-gpu
        will-change-transform
        "
      />

      {/* ====================
           Particle Dots
      ==================== */}

      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={
            shouldReduceMotion || !isInView
              ? {}
              : {
                  y: [0, -50, 0],
                  opacity: [0.3, 1, 0.3],
                }
          }
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            ease: "easeInOut",
          }}
          className="
          absolute
          w-2
          h-2
          rounded-full
          bg-purple-400
          transform-gpu
          will-change-transform
          "
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Floating cards */}

      <motion.div
        animate={
          shouldReduceMotion || !isInView
            ? {}
            : {
                y: [0, -15, 0],
                rotate: [0, 3, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-20
        top-40
        backdrop-blur-xl
        bg-white/60
        px-5
        py-4
        rounded-3xl
        shadow-xl
        will-change-transform
        "
      >
        ⚡ 30+ Digital Products
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion || !isInView
            ? {}
            : {
                y: [0, 20, 0],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-20
        top-56
        backdrop-blur-xl
        bg-white/60
        px-5
        py-4
        rounded-3xl
        shadow-xl
        "
      >
        🚀 Faster Delivery
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion || !isInView
            ? {}
            : {
                y: [0, -18, 0],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-24
        left-32
        backdrop-blur-xl
        bg-white/60
        px-5
        py-4
        rounded-3xl
        shadow-xl
        "
      >
        🛡 24/7 Support
      </motion.div>

      {/* ======================
          Main Content
      ====================== */}

      <div className="relative z-20 text-center max-w-5xl">

        {/* badge */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
          inline-flex
          px-6 py-3
          bg-white/80
          rounded-full
          shadow-lg
          backdrop-blur-lg
          mb-8
          "
        >
          <span className="font-semibold text-purple-700">
            Trusted Engineering Partner
          </span>
        </motion.div>

        {/* heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          text-6xl
          md:text-8xl
          font-black
          leading-[1.05]
          text-gray-900
          "
        >
          Build Software
          <br />
          That Makes

          <span
            className="
            block
            bg-gradient-to-r
            from-purple-600
            via-pink-500
            to-purple-600
            bg-clip-text
            text-transparent
            "
          >
            Businesses Grow.
          </span>
        </motion.h1>

        {/* subtext */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          mt-8
          text-xl
          text-gray-600
          max-w-3xl
          mx-auto
          "
        >
          Dedicated developers, faster delivery,
          scalable systems and long-term support —
          everything your business needs to grow.
        </motion.p>

        {/* CTA */}

        <a href="https://calendar.app.google/DTek8gGctaBMv7RD8">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow:
                "0 0 70px rgba(168,85,247,.6)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            animate={
              shouldReduceMotion || !isInView
                ? {}
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            mt-12
            px-12
            py-5
            rounded-full
            text-xl
            font-bold
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            flex
            items-center
            gap-3
            mx-auto
            will-change-transform
            "
          >
            Schedule a Call
            <ArrowRight />
          </motion.button>
        </a>

        <p className="mt-4 text-gray-500">
          Free strategy session • No commitment
        </p>
      </div>

      {/* ticker */}

      <div className="absolute bottom-4 left-0 w-full overflow-hidden whitespace-nowrap">

        <motion.div
          animate={
            shouldReduceMotion || !isInView
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="
          flex
          w-max
          gap-10
          text-lg
          font-bold
          text-purple-600
          md:text-xl
          "
        >
          <span>
            WEB APPS • ERP • AI • AUTOMATION • MOBILE APPS • CLOUD • DEVOPS • UI/UX • SOFTWARE DEVELOPMENT •
          </span>

          <span>
            WEB APPS • ERP • AI • AUTOMATION • MOBILE APPS • CLOUD • DEVOPS • UI/UX • SOFTWARE DEVELOPMENT •
          </span>

        </motion.div>

      </div>
    </section>
  );
};

export default memo(Hero);