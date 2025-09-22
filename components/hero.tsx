"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";


export default function Hero() {
  const { isOpen: isDownloadOpen, onOpen: onDownloadOpen, onOpenChange: onDownloadOpenChange } = useDisclosure();
  const { isOpen: isVideoOpen, onOpen: onVideoOpen, onOpenChange: onVideoOpenChange } = useDisclosure();

  const windowsDownloadPath = "/software/wichain_0.1.0_x64_en-US.msi"; // Path to your MSI file
  const macDownloadPath = "/software/wichain_0.1.0_aarch64.dmg"; // Path to your DMG file


  const handleDownload = (path: string, filename: string) => {
    // 1. Initiate the download programmatically
    const link = document.createElement('a');
    link.href = path;
    link.download = filename; // Specify the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Open the modal to show the prompt
    onDownloadOpen();
  };

  return (
    <div className="relative justify-center items-center">
      <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit h-full text-sm bg-card px-2 py-1 border border-border rounded-full">
            Local. Secure. Decentralized.
          </span>
          <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            WiChain - A Trust-First Chat Platform for Local Networks
          </h1>
          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            No servers. No surveillance. Just cryptographically verifiable conversations on your LAN.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <Button
              onPress={() => handleDownload(windowsDownloadPath, 'wichain_0.1.0_x64_en-US.msi')}
              color="primary"
              variant="shadow" // Both buttons now use "shadow" variant
            >
              Download WiChain for Windows x64
            </Button>
            <Button
              onPress={() => handleDownload(macDownloadPath, 'wichain_0.1.0_aarch64.dmg')}
              color="primary"
              variant="shadow" // Both buttons now use "shadow" variant
            >
              Download WiChain for macOS
            </Button>

            <Modal
              isOpen={isDownloadOpen}
              placement="center"
              onOpenChange={onDownloadOpenChange}
            >
              <ModalContent>
                {/* Applied the same classes from the <h1> to the ModalHeader */}
                <ModalHeader className="text-xl md:text-3xl font-medium tracking-tighter mx-auto text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent text-center">
                  Thank you for downloading WiChain!
                </ModalHeader>

                <ModalBody>
                  <p className="text-lg tracking-tighter text-center mb-4">
                    Enjoy your decentralized LAN chat experience. ✨
                  </p>
                </ModalBody>
                <ModalFooter className="flex justify-center">
                  <Button color="primary" variant="solid" onPress={onDownloadOpenChange}>
                    Got It!
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>
      {/* Demo GIF with curved edges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 w-full max-w-3xl mx-auto px-4"
      >
        <div className="relative overflow-hidden rounded-xl border border-border shadow-xl cursor-pointer group" onClick={onVideoOpen}>
          <video
            src="/Linkedin.mp4"
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/90 text-primary group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 ml-1">
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
      </motion.div>
    </div>
  );
}