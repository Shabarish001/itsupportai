import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Brain, Cpu, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Ask Naturally",
    description: "Employees describe their issue in plain language via Slack or Teams.",
    examples: ['"I forgot my password"', '"VPN is not working"'],
  },
  {
    number: "02",
    icon: Brain,
    title: "Company-Aware Intelligence",
    description: "ITsupportAI uses your internal IT documentation — SOPs, knowledge bases, and policies.",
    examples: ["Accurate responses", "Secure & company-specific"],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Intelligent Decision Engine",
    description: "The AI decides the best action: guide the user, fix the issue, or escalate to ITSM.",
    examples: ["No blind automation", "No hallucinations"],
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Ticket Avoided",
    description: "Issue resolved without creating a ticket. Productivity saved, IT workload reduced.",
    examples: ["Zero IT involvement", "Instant resolution"],
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-elevated/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary border border-primary/20 rounded-full bg-primary/5"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From question to resolution
            <br />
            <span className="text-gradient">in seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless flow that prevents tickets before they're created
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-16 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Content */}
              <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-6 md:p-8 rounded-2xl"
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">{step.number}</span>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    {step.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-surface-elevated border border-border/50 rounded-full text-muted-foreground"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Center Node */}
              <div className="hidden md:flex items-center justify-center relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                  className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-glow"
                >
                  <span className="text-lg font-bold text-primary">{step.number}</span>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
