import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Building2, Users, Sparkles, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Tailored to your company size",
    "Custom integrations included",
    "Dedicated onboarding support",
    "SLA guarantees",
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Custom pricing for{" "}
            <span className="text-gradient">every company</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand every organization is unique. Get a tailored quote based on your specific needs, team size, and integration requirements.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Decorative gradient */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6"
              >
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Enterprise Custom Pricing
              </h3>
              <p className="text-muted-foreground">
                Flexible plans designed around your organization's needs
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold text-foreground">100-2000+</span>
                </div>
                <span className="text-xs text-muted-foreground">Employees</span>
              </div>
              <div className="text-center border-x border-border">
                <span className="text-xl font-bold text-foreground">20%+</span>
                <p className="text-xs text-muted-foreground">Tickets Reduced</p>
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-foreground">30 days</span>
                <p className="text-xs text-muted-foreground">Free Pilot</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.a
                href="mailto:shabarish.ayyapu@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact for Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.a>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 text-sm text-muted-foreground"
              >
                Or email us directly at{" "}
                <a 
                  href="mailto:shabarish.ayyapu@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  shabarish.ayyapu@gmail.com
                </a>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
