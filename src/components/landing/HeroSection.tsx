import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stats = [
    { icon: Zap, label: "50%+ tickets prevented" },
    { icon: Clock, label: "Instant resolutions" },
    { icon: Shield, label: "Enterprise secure" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                AI-Powered IT Resolution Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Resolve IT issues{" "}
              <span className="text-gradient">before tickets</span>{" "}
              are created
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              ITsupportAI prevents repetitive IT tickets by solving employee issues at Level-0 — before they ever reach your help desk or ITSM.
            </motion.p>

            {/* Email Input CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <div className="relative flex-1 max-w-md">
                <Input
                  type="email"
                  placeholder="Your work email"
                  className="h-12 pl-4 pr-4 bg-muted border-border focus:border-primary transition-colors"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="h-12 px-6 bg-gradient-primary hover:opacity-90 transition-opacity group">
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Password Reset Request</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">Auto-resolved</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <span className="text-xs">JD</span>
                    </div>
                    <div className="bg-muted rounded-xl px-4 py-3 max-w-xs">
                      <p className="text-sm text-muted-foreground">I forgot my password, can someone help?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 max-w-xs">
                      <p className="text-sm text-foreground">I've initiated a secure password reset. Check your email for a reset link. Valid for 15 minutes.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Resolved in 8 seconds • No ticket created</span>
                </div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">127</p>
                  <p className="text-xs text-muted-foreground">Tickets prevented today</p>
                </div>
              </motion.div>

              {/* Floating Integration Card */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#4A154B] flex items-center justify-center text-white text-xs font-bold">S</div>
                  <div className="w-8 h-8 rounded-lg bg-[#7B83EB] flex items-center justify-center text-white text-xs font-bold">T</div>
                </div>
                <p className="text-xs text-muted-foreground">Works in Slack & Teams</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
