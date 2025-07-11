"use client";

import AuthDialog from "@/components/componentX/auth-dialog";
import ConicGradientBackground from "@/components/componentX/conic-gradient-background";
import GradientInsetBackground from "@/components/componentX/gradient-inset-background";
import MovingBackground from "@/components/componentX/moving-background";
import MovingGlow from "@/components/componentX/moving-glow";
import RadialFadePulsatingBackground from "@/components/componentX/radial-fade-pulsating-background";
import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";
import { siteConfig } from "@/config/site";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
  slideUpVariant,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";

const LandingPage = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const toggleAuthDialog = () => {
    setShowAuthDialog(!showAuthDialog);
  };

  return (
    <>
      <Navbar toggleAuthDialog={toggleAuthDialog} />
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
      >
        <div className="px-3 py-20 flex flex-col items-center justify-center text-center">
          <RadialFadePulsatingBackground />
          <motion.a
            href={siteConfig.links.twitter}
            target="_blank"
            variants={scaleInVariant}
            className="rounded group relative text-foreground px-3 py-1"
          >
            <MovingGlow />
            <GradientInsetBackground />
            <div className="absolute inset-0 group-hover:bg-muted/40 transition-all duration-200 z-[-3]" />
            <span
              className="z-10 text-sm 
          flex items-center justify-center gap-2"
            >
              <FaTwitterSquare className="size-3 " /> Follow For Updates
              <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>

          <motion.h1
            variants={blurInVariant}
            className="text-foreground text-center py-6 text-6xl md:text-7xl lg:text-8xl font-medium "
          >
            LLM Limits? Not Anymore.
            <br />
            <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
              Unlimited AI, One Gateway
            </span>
          </motion.h1>
          <motion.p
            variants={blurInVariant}
            className="mb-8 text-lg md:text-xl tracking-tight text-muted-foreground "
          >
            {siteConfig.name} lets you use multiple API keys from multiple LLM
            providers—automatically rotating and switching to keep your apps
            running, no matter the rate limit.
            <br />
            Register, add your keys, and get your own API endpoint. Never hit a
            quota wall again.
          </motion.p>
          <div className="flex items-center justify-center gap-4">
            <motion.div
              variants={scaleInVariant}
              className="relative border px-3 py-1 rounded flex items-center group cursor-pointer"
              onClick={toggleAuthDialog}
            >
              <MovingBackground />
              Get started
              <ArrowRightIcon
                className="ml-1 size-4 transition-all duration-300 
                group-hover:translate-x-1"
              />
            </motion.div>
            <motion.a
              href={siteConfig.links.githubRepo}
              target="_blank"
              variants={scaleInVariant}
              className="rounded group relative text-foreground px-3 py-1"
            >
              <MovingGlow />
              <GradientInsetBackground />
              <div className="absolute inset-0 group-hover:bg-muted/40 transition-all duration-200 z-[-3]" />
              <span className="z-10 flex items-center justify-center gap-2">
                <FaGithub className="size-3 " /> Github
              </span>
            </motion.a>
          </div>
        </div>

        <div className="min-h-screen relative px-4 sm:px-8 flex items-center">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4 sm:gap-8 sm:max-w-[60%] text-balance"
          >
            <motion.h1
              variants={blurInVariant}
              className="text-5xl text-balance leading-[1.3]"
            >
              Effortless LLM API Key Rotation & Provider Switching
            </motion.h1>
            <motion.p
              variants={blurInVariant}
              className="text-lg text-muted-foreground"
            >
              <strong>{siteConfig.name}</strong> is the fastest way to overcome
              LLM rate limits. Add all your OpenAI, Gemini, and Mistral keys—our
              gateway rotates and switches for you, so your requests never get
              blocked.
            </motion.p>
            <ul className="list-disc ml-6 text-base text-muted-foreground">
              <motion.li variants={slideUpVariant}>
                Register and get your own API credentials instantly
              </motion.li>
              <motion.li variants={slideUpVariant}>
                Add unlimited LLM API keys from any supported provider
              </motion.li>
              <motion.li variants={slideUpVariant}>
                Automatic key rotation within each provider
              </motion.li>
              <motion.li variants={slideUpVariant}>
                Cross-provider switching when limits are hit
              </motion.li>
              <motion.li variants={slideUpVariant}>
                Real-time usage metrics and rate limit status
              </motion.li>
              <motion.li variants={slideUpVariant}>
                Minimalist dashboard for API key management
              </motion.li>
              <motion.li variants={slideUpVariant}>
                Simple REST API—no SDK required
              </motion.li>
            </ul>
            <motion.div
              variants={scaleInVariant}
              className="relative border px-6 py-2 text-xl rounded flex items-center group cursor-pointer w-fit"
              onClick={toggleAuthDialog}
            >
              <GradientInsetBackground />
              Try {siteConfig.name} Now
              <ArrowRightIcon className="ml-1 size-4 transition-all duration-300 group-hover:translate-x-1" />
            </motion.div>
          </motion.div>
          <ConicGradientBackground />
        </div>
      </motion.div>
      <Footer />
      <AuthDialog
        isDialogVisible={showAuthDialog}
        setIsDialogVisible={setShowAuthDialog}
      />
    </>
  );
};

export default LandingPage;
