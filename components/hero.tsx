"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Hero() {
  const router = useRouter();
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onOpenChange: onVideoOpenChange,
  } = useDisclosure();

  const goToDownloads = () => {
    router.push("/downloads");
  };

  return (
    <div className="relative justify-center items-center">
      {/* HERO SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 py-28 md:py-36 flex flex-col justify-center items-center gap-12 md:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-6 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit h-full text-sm bg-card px-2 py-1 border border-border rounded-full">
            Local. Secure. Decentralized.
          </span>

          <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            WiChain - A Trust-First Chat Platform for Local Networks
          </h1>

          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance leading-relaxed">
            WiChain is a peer-to-peer, LAN-first chat app with tamper-evident message history — private by design, no servers required.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
          >
            <Button onPress={goToDownloads} color="primary" variant="shadow">
              Downloads
            </Button>

            <Link href="#about" className="inline-block">
              <Button color="primary" variant="ghost">
                Learn more
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-28 md:py-36 space-y-12">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-reenie bg-gradient-to-b from-foreground to-foreground text-transparent bg-clip-text">
            WiChain
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A lightweight, privacy-first LAN chat that keeps signed, append-only history locally. Open-source on GitHub.
          </p>
        </div>

        <div className="space-y-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            WiChain provides secure, serverless messaging for devices on the same local network. Devices discover each other automatically, exchange signed messages, and retain a tamper-evident local history — all without external servers or cloud storage.
          </p>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Built with a Rust/Tauri backend and a modern web frontend, WiChain uses UDP-based peer discovery and direct peer-to-peer messaging so conversations remain within your LAN. Messages are signed with Ed25519 for authenticity and appended to a local, append-only ledger for auditability. This makes WiChain lightweight, resilient, and ideal for classrooms, small teams, and privacy-conscious environments where keeping data local is key.
          </p>
        </div>
      </section>

      {/* BACKGROUND LIGHT EFFECT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none"
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]" />
        </div>
      </motion.div>

      {/* DEMO VIDEO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-24 md:mt-36 w-full max-w-3xl mx-auto px-4 pb-24"
      >
        <div
          className="relative overflow-hidden rounded-xl border border-border shadow-xl cursor-pointer group"
          onClick={onVideoOpen}
        >
          <video
            src="/Linkedin.mp4"
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/90 text-primary group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 md:w-10 md:h-10 ml-1"
              >
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
              </svg>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isVideoOpen}
          placement="center"
          onOpenChange={onVideoOpenChange}
          size="full"
        >
          <ModalContent>
            <ModalBody className="p-0 flex items-center justify-center bg-black min-h-screen">
              <video
                src="/Linkedin.mp4"
                controls
                autoPlay
                className="w-full h-auto max-h-screen"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </motion.section>
    </div>
  );
}
