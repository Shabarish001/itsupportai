import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquare, 
  Brain, 
  Workflow, 
  TicketX,
  Shield,
  BarChart3,
  Zap,
  Users
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MessageSquare,
      title: "AI IT Copilot",
      subtitle: "Employee Interface",
      description: "Your employees' first point of contact. They describe issues in plain language — 'I forgot my password' or 'VPN is not working' — and the AI Copilot understands, responds, and resolves.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Specialist AI Agents",
      subtitle: "Multi-Agent Architecture",
      description: "Behind the scenes, specialized agents handle different domains: Password Agent, Network Agent, Software Agent, and more. Each trained on your company's specific systems and policies.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Workflow,
      title: "Intelligent Orchestration",
      subtitle: "Decision Engine",
      description: "The orchestrator routes requests to the right specialist agent, combines their expertise, and decides: guide the user, fix automatically, or escalate to human IT. No blind automation.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: TicketX,
      title: "Zero-Ticket Resolution",
      subtitle: "Outcome Focused",
      description: "When resolved, no ticket is created. Your IT team focuses on complex problems while routine issues vanish. Employees get instant help, IT gets capacity back.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    { icon: Shield, label: "Enterprise Security", value: "SOC 2 Compliant" },
    { icon: BarChart3, label: "Average Resolution", value: "< 30 seconds" },
    { icon: Zap, label: "Tickets Prevented", value: "50%+" },
    { icon: Users, label: "Employee Satisfaction", value: "95%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            How ITsupportAI Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From question to{" "}
            <span className="text-gradient">resolution</span>{" "}
            in seconds
          </h2>
          <p className="text-lg text-muted-foreground">
            ITsupportAI sits before your IT help desk. Employees ask for help inside Slack or Teams, and issues get resolved automatically.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {feature.subtitle}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{benefit.value}</p>
                <p className="text-sm text-muted-foreground">{benefit.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
