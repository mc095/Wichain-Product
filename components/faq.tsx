"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What is WiChain?",
      content: (
        <div className="text-muted-foreground">
          WiChain is a decentralized LAN chat application that uses blockchain technology to ensure tamper-evident message history. It works without the internet, using peer-to-peer UDP messaging over a local network.
        </div>
      ),
    },
    {
      title: "Do I need internet to use WiChain?",
      content: (
        <div className="text-muted-foreground">
          No. WiChain is designed specifically for local area networks (LANs). All communication happens directly between peers, without relying on any external server or internet access.
        </div>
      ),
    },
    {
      title: "How is the chat history stored?",
      content: (
        <div className="text-muted-foreground">
          Each device maintains a local, append-only blockchain to store chat history. Every message is signed and added to the chain, making it verifiable and tamper-evident.
        </div>
      ),
    },
    {
      title: "Is the chat end-to-end encrypted?",
      content: (
        <div className="text-muted-foreground">
          No, WiChain uses a lightweight obfuscation method (SHA3-512 XOR) for basic LAN confidentiality. While it&apos;s not strong encryption, it prevents plain-text sniffing on the network.
        </div>
      ),
    },
    {
      title: "Can I chat in groups?",
      content: (
        <div className="text-muted-foreground">
          Yes, WiChain supports ephemeral group chats. Group IDs are generated deterministically based on the public keys of members, allowing for secure, temporary group messaging.
        </div>
      ),
    },
    {
      title: "How do I get started?",
      content: (
        <div className="text-muted-foreground">
          You can download the latest release and run it on two or more devices connected to the same LAN. No server setup is needed. For developers, clone the repo and follow the instructions in the README to build it from source.
        </div>
      ),
    },
    {
      title: "Is WiChain open source?",
      content: (
        <div className="text-muted-foreground">
          Yes! WiChain is fully open-source and available on GitHub. Give it a star today 🌟. It&apos;s built for learning and experimentation with decentralized systems and blockchain concepts.
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
