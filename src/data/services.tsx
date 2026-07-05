import { Lightbulb, Home, ZapOff, Activity, Fan, Wind, Bell, Cpu, Camera } from 'lucide-react';
import React from 'react';

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  heroImage: string;
  hoverImage: string;
  calculatorData?: {
    type: 'led';
    oldWatts: number;
    newWatts: number;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "led-light-conversions",
    icon: <Lightbulb size={32} />,
    title: "LED Light Conversions",
    shortDescription: "Upgrade your old halogens to energy-efficient LED downlights.",
    longDescription: "Tired of changing blown halogen globes and dealing with rooms that feel too hot? We specialise in converting outdated lighting systems to modern, energy-efficient LED downlights across Brisbane. LEDs not only instantly brighten your space but they consume a fraction of the power.",
    benefits: [
      "Massive reduction in lighting power bills",
      "Runs much cooler than halogens, reducing fire risk",
      "Dimmable options for perfect mood lighting",
      "Lasts up to 50,000 hours so you rarely need to change them"
    ],
    heroImage: "/led_wide.webp",
    hoverImage: "/service-led.webp",
    calculatorData: {
      type: 'led',
      oldWatts: 50,
      newWatts: 9
    }
  },
  {
    id: "ceiling-fans",
    icon: <Fan size={32} />,
    title: "Ceiling Fan Installation",
    shortDescription: "Professional installation and replacement of indoor and outdoor ceiling fans.",
    longDescription: "Beat the Queensland heat without running the AC all day. We install, replace, and wire ceiling fans for bedrooms, living rooms, and outdoor alfresco areas. Whether you've bought your own fan or need us to supply a high-quality model, we ensure it's balanced and wired safely.",
    benefits: [
      "Cost-effective cooling for hot QLD summers",
      "Outdoor rated fans for alfresco areas",
      "Remote control or hardwired wall switch options",
      "Old fan removal and safe disposal"
    ],
    heroImage: "/solution_fan.webp",
    hoverImage: "/service-fan.webp"
  },
  {
    id: "air-conditioning",
    icon: <Wind size={32} />,
    title: "Air Conditioning Wiring",
    shortDescription: "Dedicated circuits and hardwiring for split system air conditioners.",
    longDescription: "Installing a new split system? You need a dedicated power circuit installed by a licensed electrician to ensure it runs safely without tripping your main breaker. We work alongside HVAC technicians to handle the electrical side of your new air conditioning unit.",
    benefits: [
      "Safe, dedicated circuits that won't trip your house",
      "Compliance certificates provided",
      "Neat and tidy conduit work",
      "Upgrades to switchboards if required for high-draw units"
    ],
    heroImage: "/solution_ac.webp",
    hoverImage: "/service-ac.webp"
  },
  {
    id: "smoke-alarms",
    icon: <Bell size={32} />,
    title: "Smoke Alarms",
    shortDescription: "Installation and testing of interconnected smoke alarms to meet QLD legislation.",
    longDescription: "Queensland has strict smoke alarm legislation for all homes. We install interconnected photoelectric smoke alarms in every bedroom and hallway to ensure your family is safe and your property is fully compliant with the latest laws.",
    benefits: [
      "Full compliance with QLD smoke alarm legislation",
      "Interconnected systems (when one sounds, they all sound)",
      "Hardwired with battery backup for guaranteed safety",
      "Annual testing and maintenance available"
    ],
    heroImage: "/solution_smoke.webp",
    hoverImage: "/service-smoke.webp"
  },
  {
    id: "appliance-installation",
    icon: <Home size={32} />,
    title: "Appliance Installation",
    shortDescription: "Safe and compliant hardwiring of ovens, cooktops, and rangehoods.",
    longDescription: "Bought a new electric oven or induction cooktop? Most heavy kitchen appliances require professional hardwiring and a dedicated circuit. We remove your old appliance and safely install the new one, ensuring it draws power safely.",
    benefits: [
      "Safe hardwiring of high-draw appliances",
      "Old appliance disconnection and removal",
      "Induction cooktop circuit upgrades",
      "Compliance certificates for warranty purposes"
    ],
    heroImage: "/solution_appliance.webp",
    hoverImage: "/service-appliance.webp"
  },
  {
    id: "switchboard-upgrades",
    icon: <Activity size={32} />,
    title: "Switchboard Upgrades",
    shortDescription: "Ensure your home is safe with modern switchboards and safety switches.",
    longDescription: "Old ceramic fuses are a major fire and shock hazard. We upgrade old switchboards to modern enclosures fitted with RCD safety switches on every circuit, bringing your home up to modern safety standards and protecting your family from electrical faults.",
    benefits: [
      "Protection against electric shocks with modern RCDs",
      "Greatly reduced risk of electrical fires",
      "More capacity for modern appliances like ACs and induction cooktops",
      "Neat, labelled, and easy to understand panels"
    ],
    heroImage: "/bakery_after.webp",
    hoverImage: "/service-switchboard.webp"
  },
  {
    id: "fault-finding",
    icon: <ZapOff size={32} />,
    title: "Fault Finding",
    shortDescription: "Expert diagnosis and repair of tripping circuits and power outages.",
    longDescription: "Got a safety switch that keeps tripping or a circuit that just won't turn on? Electrical faults can be frustrating and dangerous. Our experienced team uses advanced testing equipment to track down the exact cause of the fault and fix it permanently.",
    benefits: [
      "Fast identification of hidden faults",
      "Permanent repairs, no temporary band-aids",
      "Testing of all related circuits for peace of mind",
      "Transparent pricing on the repair once the fault is found"
    ],
    heroImage: "/bakery_before.webp",
    hoverImage: "/service-fault.webp"
  },
  {
    id: "smart-home",
    icon: <Cpu size={32} />,
    title: "Smart Home Automation",
    shortDescription: "Transform your house with integrated smart lighting and control systems.",
    longDescription: "Bring your home into the future with automated lighting, smart switches, and integrated home control systems. Control your environment directly from your smartphone or voice assistant.",
    benefits: [
      "Convenient phone and voice control",
      "Automated scheduling to save energy",
      "Seamless integration with existing systems",
      "Modern touch-panel installations"
    ],
    heroImage: "/solution_smart.webp",
    hoverImage: "/service-smart.webp"
  },
  {
    id: "security-cameras",
    icon: <Camera size={32} />,
    title: "Security Cameras & Alarms",
    shortDescription: "Protect your property with hardwired CCTV and security systems.",
    longDescription: "Ensure your home is safe 24/7 with professional security camera installations. We hardwire CCTV systems so you never have to worry about changing batteries, with full phone access.",
    benefits: [
      "Reliable hardwired systems (no batteries)",
      "High-definition 4K camera options",
      "Remote viewing from your smartphone",
      "Deterrent against theft and property damage"
    ],
    heroImage: "/solution_security.webp",
    hoverImage: "/service-security.webp"
  }
];
