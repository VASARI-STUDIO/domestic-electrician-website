export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  images: string[]; // Array of images for gallery / before & after
  story: string;
  pros: string[];
  tasks: string[]; // List of tasks completed
  calculatorData?: {
    type: 'led';
    oldWatts: number;
    newWatts: number;
  };
  relatedService?: {
    name: string;
    path: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "led-conversion-brisbane",
    title: "Complete LED Downlight Conversion",
    category: "Residential",
    location: "Tarragindi, Brisbane",
    images: [
      "/led_wide.webp",
      "/led_close.webp"
    ],
    story: "The owners of this older brick home in Tarragindi were fed up with replacing hot, power-hungry halogen globes every few months. The rooms felt a bit dark, and the heat coming off the old lights was fighting their air conditioning in summer. We came in and swapped out their main living areas with 12 premium, flush-mount LED downlights. We specifically designed the layout so the ceiling wasn't overcrowded with 'swiss cheese' holes—just the perfect amount of clean, warm light. We also installed dimmer switches in the living and dining areas so they could drop the brightness down while watching a movie.",
    pros: [
      "Massive reduction in power consumption",
      "Added dimmers for perfect living room mood lighting",
      "Cooler operation takes the load off the aircon",
      "No more climbing ladders to change blown globes"
    ],
    tasks: [
      "Removed existing outdated halogen fittings",
      "Installed 12 premium 9W LED downlights in a clean layout",
      "Wired 3 new dimmer switches in living areas",
      "Safety tested all lighting circuits"
    ],
    calculatorData: {
      type: 'led',
      oldWatts: 50,
      newWatts: 9
    },
    relatedService: {
      name: "LED Light Conversions",
      path: "/services/led-light-conversions"
    }
  },
  {
    id: "bakery-emergency",
    title: "After-Hours Bakery Rescue",
    category: "Commercial / Emergency",
    location: "West End, Brisbane",
    images: [
      "/bakery_after.webp", // "After"
      "/bakery_before.webp"  // "Before"
    ],
    story: "We got a call at 3 AM from a local bakery owner in West End. Their main dough mixer had tripped the circuit and refused to turn back on, completely halting their morning prep. Missing the morning rush wasn't an option for them. We arrived on site within 40 minutes, traced the fault to a burnt-out contactor in the sub-board, and managed to source and replace the part from our emergency stock. They were back up and running before the sun came up, and didn't miss a single sale.",
    pros: [
      "On-site within 40 minutes of the late-night call",
      "Quickly identified the fault without guesswork",
      "Carried the right parts to fix it on the spot",
      "Saved the business from a lost day of trading"
    ],
    tasks: [
      "Emergency call-out at 3:00 AM",
      "Diagnosed tripped circuit to faulty contactor",
      "Replaced contactor using van stock",
      "Restored power and tested dough mixer load"
    ],
    relatedService: {
      name: "Fault Finding Services",
      path: "/services/fault-finding"
    }
  },
  {
    id: "yard-lighting-goldcoast",
    title: "Landscape & Yard Lighting",
    category: "Outdoor",
    location: "Broadbeach Waters, Gold Coast",
    images: [
      "/yard_wide.webp",
      "/yard_path.webp"
    ],
    story: "This client had a beautiful waterfront backyard down the coast, but it was pitch black as soon as the sun went down. They wanted to make the space usable for evening BBQs and highlight the garden features. We designed and installed a low-voltage lighting system, including soft uplighting for the palm trees, step lights for safety, and some festoon lighting over the deck. Everything was wired back to a smart switch they can control from their phone. It completely transformed the yard into an amazing entertaining area.",
    pros: [
      "Smart switch integration for phone control",
      "Fully waterproof and marine-grade fittings for coastal weather",
      "Greatly improved nighttime security and safety on stairs",
      "Transformed the backyard into a premium entertaining space"
    ],
    tasks: [
      "Designed full landscape lighting layout",
      "Installed 8 marine-grade uplights for palm trees",
      "Wired 12 low-voltage step lights for deck safety",
      "Installed smart switch for remote phone control",
      "Hung and secured commercial-grade festoon lighting"
    ],
    relatedService: {
      name: "Smart Home Automation",
      path: "/services/smart-home"
    }
  }
];
