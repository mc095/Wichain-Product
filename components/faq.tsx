"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What is WiChain and how does it work?",
      content: (
        <div className="text-muted-foreground">
          WiChain is a decentralized LAN chat platform that uses advanced peer discovery and secure communication protocols. It utilizes mDNS for automatic peer discovery, UDP for initial connection requests, and TCP for establishing reliable connections between peers.
        </div>
      ),
    },
    {
      title: "How secure is WiChain's encryption?",
      content: (
        <div className="text-muted-foreground">
          WiChain implements military-grade security with AES-256-GCM encryption for messages and ED25519 (the same signing algorithm used in Tor) for digital signatures. This ensures maximum security and privacy for all communications within your local network.
        </div>
      ),
    },
    {
      title: "What features does WiChain support?",
      content: (
        <div className="text-muted-foreground">
          WiChain supports rich multimedia messaging including images and photos, group chat creation, and secure file sharing. The UI is built with Framer Motion and Hero UI for a smooth, modern user experience. All communications are end-to-end encrypted and locally stored.
        </div>
      ),
    },
    {
      title: "How does peer discovery work?",
      content: (
        <div className="text-muted-foreground">
          WiChain uses mDNS (Multicast DNS) for automatic peer discovery on your local network. When a peer is found, it initiates a UDP-based connection request, followed by a secure TCP handshake for establishing a reliable, encrypted connection.
        </div>
      ),
    },
    {
      title: "Can I create and manage group chats?",
      content: (
        <div className="text-muted-foreground">
          Yes! WiChain fully supports group chat functionality. You can create secure groups for team collaboration, and all group communications are protected with the same military-grade encryption used in one-on-one chats.
        </div>
      ),
    },
    {
      title: "Do I need internet to use WiChain?",
      content: (
        <div className="text-muted-foreground">
          No. WiChain is designed specifically for local area networks (LANs). All communication happens directly between peers using local network protocols, without relying on any external server or internet access.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Frequently Asked Questions
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Everything you need to know about WiChain and how it works.
        </p>
       
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className="text-muted-foreground"
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
