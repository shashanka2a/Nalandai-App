'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../src/components/ui/button';
import { Card } from '../src/components/ui/card';
import { Input } from '../src/components/ui/input';
import { Badge } from '../src/components/ui/badge';
import { Separator } from '../src/components/ui/separator';
import { ImageWithFallback } from '../src/components/figma/ImageWithFallback';
import { 
  Lock, 
  Eye, 
  DollarSign, 
  Shield, 
  Code, 
  ArrowRightLeft, 
  Bot, 
  Database, 
  Zap, 
  Crown,
  ArrowRight,
  ChevronRight,
  Mail,
  Menu,
  X,
  Star,
  Users,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Clock,
  Globe,
  Award,
  FileText
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

const slideInFromTop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50 dark:to-slate-900">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Crown className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Nalandai
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.button 
                onClick={() => scrollToSection('solution')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Solution
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('use-cases')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Use Cases
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('blueprint')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Blueprint
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  onClick={() => scrollToSection('early-access')}
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg"
                >
                  Get Access
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border p-4 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.button 
                  onClick={() => scrollToSection('solution')} 
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Solution
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('use-cases')} 
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Use Cases
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('blueprint')} 
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Blueprint
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    onClick={() => scrollToSection('early-access')}
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg"
                  >
                    Get Access
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-60"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full opacity-40"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-50"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="relative mb-8" variants={fadeInUp}>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-violet-600 bg-clip-text text-transparent leading-tight"
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Project Nalandai: A Sovereign Code Generation Engine
              </motion.h1>
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-60"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Self-reliant, customizable, and secure AI for code generation. 
              Break free from vendor dependencies and take control of your development future.
            </motion.p>

            {/* Key Benefits Bar */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-center justify-center space-x-2 p-3 bg-card/50 rounded-lg border border-border"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">100% Data Ownership</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center space-x-2 p-3 bg-card/50 rounded-lg border border-border"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">60% Cost Reduction</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center space-x-2 p-3 bg-card/50 rounded-lg border border-border"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="h-5 w-5 text-violet-600" />
                <span className="text-sm font-medium">10x Faster Setup</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('early-access')}
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Early Access
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-violet-200 hover:border-violet-300 px-8 py-4 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-950 transition-all duration-300"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Read Whitepaper
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative max-w-4xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBnZW5lcmF0aW9uJTIwQUklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODk4MDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Abstract AI Technology"
                  width={1080}
                  height={640}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl border border-border"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div 
                className="absolute -bottom-6 left-6 bg-card border border-border rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">500+</div>
                    <div className="text-xs text-muted-foreground">Early Users</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 right-6 bg-card border border-border rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-violet-600" />
                  <div>
                    <div className="font-semibold">1M+</div>
                    <div className="text-xs text-muted-foreground">Lines Generated</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              The Current Development Landscape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations face critical challenges with existing AI code generation solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Lock,
                title: "Vendor Lock-in",
                description: "Trapped in proprietary ecosystems with limited flexibility and escalating costs.",
                impact: "78% experience lock-in"
              },
              {
                icon: Eye,
                title: "Data Privacy",
                description: "Your sensitive code and business logic exposed to third-party AI services.",
                impact: "91% concerned about data"
              },
              {
                icon: Shield,
                title: "Lack of Control",
                description: "No control over model updates, capabilities, or customization for your needs.",
                impact: "65% need customization"
              },
              {
                icon: DollarSign,
                title: "Rising Costs",
                description: "Unpredictable pricing models that scale with your success, not your value.",
                impact: "200% average cost increase"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 border border-border rounded-xl group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <problem.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{problem.description}</p>
                    <motion.div 
                      className="text-xs text-red-600 dark:text-red-400 font-medium bg-red-50 dark:bg-red-950/30 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {problem.impact}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="relative" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmV0d29yayUyMG5vZGVzfGVufDF8fHx8MTc1ODk4MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Futuristic Network Technology"
                  width={1080}
                  height={640}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl"></div>
              </motion.div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="w-3 h-3 bg-violet-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
              
              {/* Floating feature callouts */}
              <motion.div 
                className="absolute -left-4 top-20 bg-card border border-border rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium">Self-Hosted</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-4 bottom-20 bg-card border border-border rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-xs font-medium">Fully Customizable</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Crown className="h-5 w-5 text-violet-600 mr-2" />
                <span className="text-violet-700 dark:text-violet-300 font-medium">The Solution</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                The Nalanda Model – Open, Sovereign, Customizable
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Nalandai represents a paradigm shift toward sovereign AI development. Our platform empowers 
                organizations to own their AI infrastructure, customize models for their specific needs, 
                and maintain complete control over their data and development processes.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {[
                  { text: "Full ownership of your AI models and data", icon: CheckCircle },
                  { text: "Customizable training on your codebase", icon: CheckCircle },
                  { text: "Open foundation for community collaboration", icon: CheckCircle },
                  { text: "Enterprise-grade security and compliance", icon: CheckCircle }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl"
                  >
                    Learn More About Our Approach
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    variant="outline"
                    className="border-violet-200 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Transform Your Development Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how leading organizations are leveraging sovereign AI to revolutionize their development processes
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Code,
                title: "Internal Developer Platform",
                description: "Build custom AI coding assistants tailored to your team's coding standards, patterns, and architecture decisions.",
                cta: "Build Your Platform",
                benefits: ["30% faster development", "Consistent code quality", "Team-specific patterns"],
                color: "blue"
              },
              {
                icon: ArrowRightLeft,
                title: "Code Migration",
                description: "Automate large-scale code migrations and refactoring projects with AI trained on your specific codebase patterns.",
                cta: "Start Migration",
                benefits: ["80% automation rate", "Zero data exposure", "Legacy system modernization"],
                color: "violet"
              },
              {
                icon: Bot,
                title: "Specialized AI Products",
                description: "Create domain-specific AI products and services powered by your proprietary models and expertise.",
                cta: "Create AI Products",
                benefits: ["Revenue generation", "IP protection", "Market differentiation"],
                color: "indigo"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 bg-card hover:shadow-xl transition-all duration-300 border border-border rounded-xl group hover:border-violet-200 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-bl-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <div className="space-y-6 relative z-10">
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 rounded-full w-fit"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <useCase.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                    
                    <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                    
                    <motion.div 
                      className="space-y-2"
                      variants={staggerContainer}
                    >
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <motion.div 
                          key={benefitIndex} 
                          className="flex items-center space-x-2"
                          variants={fadeInUp}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="group-hover:bg-violet-50 dark:group-hover:bg-violet-950 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 p-0 h-auto group/btn"
                      >
                        {useCase.cta}
                        <motion.div
                          className="ml-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Blueprint */}
      <section id="blueprint" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Strategic Blueprint
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your path to AI sovereignty in three strategic phases
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 transform -translate-y-1/2 rounded-full hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  icon: Database,
                  title: "Data Supremacy",
                  description: "Establish complete ownership and control over your development data and AI training processes.",
                  timeline: "Month 1-2",
                  deliverables: ["Data audit", "Infrastructure setup", "Security protocols"]
                },
                {
                  icon: Zap,
                  title: "Advanced Training",
                  description: "Deploy sophisticated training pipelines customized for your specific domain and requirements.",
                  timeline: "Month 3-4",
                  deliverables: ["Custom model training", "Performance optimization", "Integration testing"]
                },
                {
                  icon: Crown,
                  title: "Open Foundation",
                  description: "Build on open, transparent foundations that ensure long-term sustainability and community collaboration.",
                  timeline: "Month 5+",
                  deliverables: ["Community integration", "Continuous improvement", "Scale optimization"]
                }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 bg-card border-2 border-violet-200 dark:border-violet-800 rounded-xl text-center relative z-10 hover:shadow-lg transition-all duration-300">
                    <motion.div 
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </motion.div>
                    
                    <div className="pt-6 space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <step.icon className="h-8 w-8 text-violet-600 dark:text-violet-400 mx-auto" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <motion.div 
                        className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.timeline}
                      </motion.div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      
                      <motion.div 
                        className="space-y-2 pt-4"
                        variants={staggerContainer}
                      >
                        <h4 className="font-medium text-sm text-foreground">Key Deliverables:</h4>
                        {step.deliverables.map((deliverable, dIndex) => (
                          <motion.div 
                            key={dIndex} 
                            className="flex items-center justify-center space-x-2"
                            variants={fadeInUp}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle className="h-3 w-3 text-green-600" />
                            </motion.div>
                            <span className="text-xs text-muted-foreground">{deliverable}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="early-access" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Crown className="h-4 w-4 mr-2" />
              Limited Early Access Program
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Join the Sovereign AI Revolution
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Be among the first to experience true AI sovereignty. Get early access to Nalandai 
            and take control of your development future.
          </motion.p>

          {/* Early Access Benefits */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur rounded-lg p-4"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Briefcase className="h-6 w-6 text-white mx-auto mb-2" />
              </motion.div>
              <div className="text-white font-medium text-sm">Priority Support</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur rounded-lg p-4"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <TrendingUp className="h-6 w-6 text-white mx-auto mb-2" />
              </motion.div>
              <div className="text-white font-medium text-sm">50% Early Bird Discount</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur rounded-lg p-4"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="h-6 w-6 text-white mx-auto mb-2" />
              </motion.div>
              <div className="text-white font-medium text-sm">Exclusive Community</div>
            </motion.div>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {emailSubmitted ? (
              <motion.div 
                className="max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-green-500 text-white p-4 rounded-xl mb-4 flex items-center justify-center space-x-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </motion.div>
                  <span>Successfully registered! Check your email for next steps.</span>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleEmailSubmit} 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative flex-1"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </motion.div>
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/90 border-white/20 rounded-xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50"
                    required
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-white text-violet-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Get Early Access
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
          
          <motion.p 
            className="text-blue-200 mt-6 text-sm"
            variants={fadeInUp}
          >
            No spam. Unsubscribe at any time. Your data stays sovereign. • Only 47 spots remaining.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Crown className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Nalandai
                </h3>
              </motion.div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Sovereign Code Generation Engine - Building the future of independent AI development.
              </p>
              <motion.div 
                className="flex space-x-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xs font-bold">𝕏</span>
                </motion.div>
                <motion.div 
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xs font-bold">in</span>
                </motion.div>
                <motion.div 
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xs font-bold">GH</span>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">Product</h4>
              <motion.div 
                className="space-y-2 text-sm text-muted-foreground"
                variants={staggerContainer}
              >
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Pricing
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Documentation
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  API Reference
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">Company</h4>
              <motion.div 
                className="space-y-2 text-sm text-muted-foreground"
                variants={staggerContainer}
              >
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Blog
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Careers
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-violet-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center"
            variants={fadeInUp}
          >
            <motion.p 
              className="text-muted-foreground text-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              © 2025 Nalandai. All rights reserved. Built for sovereignty, designed for the future.
            </motion.p>
            <motion.div 
              className="flex space-x-6 mt-4 sm:mt-0 text-sm text-muted-foreground"
              variants={staggerContainer}
            >
              <motion.a 
                href="#" 
                className="hover:text-violet-600 transition-colors"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-violet-600 transition-colors"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-violet-600 transition-colors"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Security
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
