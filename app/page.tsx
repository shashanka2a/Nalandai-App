'use client'

import { useState } from 'react';
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Nalandai
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('solution')} className="text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </button>
              <button onClick={() => scrollToSection('use-cases')} className="text-muted-foreground hover:text-foreground transition-colors">
                Use Cases
              </button>
              <button onClick={() => scrollToSection('blueprint')} className="text-muted-foreground hover:text-foreground transition-colors">
                Blueprint
              </button>
              <Button 
                onClick={() => scrollToSection('early-access')}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg"
              >
                Get Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border p-4 space-y-4">
              <button onClick={() => scrollToSection('solution')} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </button>
              <button onClick={() => scrollToSection('use-cases')} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
                Use Cases
              </button>
              <button onClick={() => scrollToSection('blueprint')} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
                Blueprint
              </button>
              <Button 
                onClick={() => scrollToSection('early-access')}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg"
              >
                Get Access
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Enterprise Security</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">SOC 2 Compliant</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-violet-600" />
              <span className="text-sm text-muted-foreground">Open Source Foundation</span>
            </div>
          </div>

          <div className="text-center">
            <div className="relative mb-8">
              <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200">
                <Clock className="h-4 w-4 mr-2" />
                Early Access • Limited Spots Available
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-violet-600 bg-clip-text text-transparent leading-tight">
                Project Nalandai: A Sovereign Code Generation Engine
              </h1>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-60"></div>
            </div>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Self-reliant, customizable, and secure AI for code generation. 
              Break free from vendor dependencies and take control of your development future.
            </p>

            {/* Key Benefits Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 p-3 bg-card/50 rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">100% Data Ownership</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-3 bg-card/50 rounded-lg border border-border">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">60% Cost Reduction</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-3 bg-card/50 rounded-lg border border-border">
                <Zap className="h-5 w-5 text-violet-600" />
                <span className="text-sm font-medium">10x Faster Setup</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('early-access')}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-violet-200 hover:border-violet-300 px-8 py-4 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-950 transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Read Whitepaper
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBnZW5lcmF0aW9uJTIwQUklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODk4MDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Abstract AI Technology"
                width={1080}
                height={640}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">500+</div>
                    <div className="text-xs text-muted-foreground">Early Users</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-violet-600" />
                  <div>
                    <div className="font-semibold">1M+</div>
                    <div className="text-xs text-muted-foreground">Lines Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Trusted by Forward-Thinking Teams</h2>
            <p className="text-muted-foreground">Join industry leaders who are already building with sovereign AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Nalandai gives us complete control over our AI models while maintaining enterprise-grade security. Game-changing for our development workflow.",
                author: "Sarah Chen",
                role: "CTO, TechFlow Industries",
                avatar: "SC"
              },
              {
                quote: "The cost savings alone justify the switch, but the customization capabilities are what make this truly powerful for our use case.",
                author: "Michael Rodriguez",
                role: "Head of Engineering, DataStream",
                avatar: "MR"
              },
              {
                quote: "Finally, an AI solution that doesn't compromise on data sovereignty. Our compliance team loves it as much as our developers do.",
                author: "Emily Johnson",
                role: "VP Engineering, SecureLogic",
                avatar: "EJ"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              The Current Development Landscape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations face critical challenges with existing AI code generation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-all duration-300 border border-border rounded-xl group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{problem.description}</p>
                  <div className="text-xs text-red-600 dark:text-red-400 font-medium bg-red-50 dark:bg-red-950/30 px-3 py-1 rounded-full">
                    {problem.impact}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmV0d29yayUyMG5vZGVzfGVufDF8fHx8MTc1ODk4MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Network Technology"
                width={1080}
                height={640}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Floating feature callouts */}
              <div className="absolute -left-4 top-20 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">Self-Hosted</span>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-20 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium">Fully Customizable</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 rounded-full">
                <Crown className="h-5 w-5 text-violet-600 mr-2" />
                <span className="text-violet-700 dark:text-violet-300 font-medium">The Solution</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                The Nalanda Model – Open, Sovereign, Customizable
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nalandai represents a paradigm shift toward sovereign AI development. Our platform empowers 
                organizations to own their AI infrastructure, customize models for their specific needs, 
                and maintain complete control over their data and development processes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Full ownership of your AI models and data", icon: CheckCircle },
                  { text: "Customizable training on your codebase", icon: CheckCircle },
                  { text: "Open foundation for community collaboration", icon: CheckCircle },
                  { text: "Enterprise-grade security and compliance", icon: CheckCircle }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border">
                    <feature.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  Learn More About Our Approach
                </Button>
                <Button 
                  variant="outline"
                  className="border-violet-200 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Transform Your Development Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how leading organizations are leveraging sovereign AI to revolutionize their development processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={index} className="p-8 bg-card hover:shadow-xl transition-all duration-300 border border-border rounded-xl group hover:border-violet-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-bl-full"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 rounded-full w-fit">
                    <useCase.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-violet-50 dark:group-hover:bg-violet-950 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 p-0 h-auto group/btn"
                  >
                    {useCase.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Blueprint */}
      <section id="blueprint" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Strategic Blueprint
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your path to AI sovereignty in three strategic phases
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 transform -translate-y-1/2 rounded-full hidden md:block"></div>
            
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
                <div key={index} className="relative">
                  <Card className="p-8 bg-card border-2 border-violet-200 dark:border-violet-800 rounded-xl text-center relative z-10 hover:shadow-lg transition-all duration-300">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="pt-6 space-y-4">
                      <step.icon className="h-8 w-8 text-violet-600 dark:text-violet-400 mx-auto" />
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <div className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                        {step.timeline}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      
                      <div className="space-y-2 pt-4">
                        <h4 className="font-medium text-sm text-foreground">Key Deliverables:</h4>
                        {step.deliverables.map((deliverable, dIndex) => (
                          <div key={dIndex} className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="early-access" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            <Crown className="h-4 w-4 mr-2" />
            Limited Early Access Program
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Sovereign AI Revolution
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be among the first to experience true AI sovereignty. Get early access to Nalandai 
            and take control of your development future.
          </p>

          {/* Early Access Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Briefcase className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-white font-medium text-sm">Priority Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <TrendingUp className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-white font-medium text-sm">50% Early Bird Discount</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <Users className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-white font-medium text-sm">Exclusive Community</div>
            </div>
          </div>
          
          {emailSubmitted ? (
            <div className="max-w-md mx-auto">
              <div className="bg-green-500 text-white p-4 rounded-xl mb-4 flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Successfully registered! Check your email for next steps.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/90 border-white/20 rounded-xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Get Early Access
              </Button>
            </form>
          )}
          
          <p className="text-blue-200 mt-6 text-sm">
            No spam. Unsubscribe at any time. Your data stays sovereign. • Only 47 spots remaining.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Nalandai
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Sovereign Code Generation Engine - Building the future of independent AI development.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors">
                  <span className="text-xs font-bold">𝕏</span>
                </div>
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors">
                  <span className="text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors">
                  <span className="text-xs font-bold">GH</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-violet-600 transition-colors">Features</a>
                <a href="#" className="block hover:text-violet-600 transition-colors">Pricing</a>
                <a href="#" className="block hover:text-violet-600 transition-colors">Documentation</a>
                <a href="#" className="block hover:text-violet-600 transition-colors">API Reference</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-violet-600 transition-colors">About</a>
                <a href="#" className="block hover:text-violet-600 transition-colors">Blog</a>
                <a href="#" className="block hover:text-violet-600 transition-colors">Careers</a>
                <a href="#" className="block hover:text-violet-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Nalandai. All rights reserved. Built for sovereignty, designed for the future.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0 text-sm text-muted-foreground">
              <a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
