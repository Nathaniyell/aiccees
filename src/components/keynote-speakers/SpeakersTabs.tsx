import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpeakerCard from "./SpeakerCard";

// Mock data for 2025 speakers
const keynoteSpeakers2025 = [
  {
    name: "Prof. Yacob Mulugetta",
    picture: "", // Using existing image as placeholder
    description: "Professor of Energy and Development Policy at University College London. Lead Author at the Intergovernmental Panel on Climate Change, Greater London, England United Kingdom.",
    linkedin: "",
    topics: ["Energy Policy", "Climate Change", "Sustainable Development", "International Policy"]
  },
  {
    name: "Alicia Butterfield",
    picture: "", // Using existing image as placeholder
    description: "Global Manager at GeCCo, bringing extensive experience in global energy and climate change initiatives.",
    linkedin: "",
    topics: ["Global Energy Management", "Climate Change", "International Cooperation", "Energy Strategy"]
  },
  {
    name: "Glory Oguegbu",
    picture: "", // Using existing image as placeholder
    description: "Founder and CEO of Renewable Energy Technology Training Institute (RETTI), dedicated to advancing renewable energy education and training across Africa.",
    linkedin: "",
    topics: ["Renewable Energy Training", "Education", "Technology Transfer", "Capacity Building"]
  },
  {
    name: "Mr. Ejikeme Nwosu",
    picture: "", // Using existing image as placeholder
    description: "Founder of Lumos Lab, pioneering innovative solutions in clean energy and sustainable technology development.",
    linkedin: "",
    topics: ["Clean Energy Innovation", "Technology Development", "Sustainable Solutions", "Entrepreneurship"]
  },
  {
    name: "Dr. Ibiere Helen Jumbo",
    picture: "", // Using existing image as placeholder
    description: "A Research Fellow at the University of Aberdeen, specializing in energy and environmental law, with a focus on regional renewable energy governance in West Africa.",
    linkedin: "",
    topics: ["Energy Law", "Environmental Law", "Regional Governance", "West Africa Energy Policy"]
  },
  {
    name: "Radhakrishnan Mahalingam",
    picture: "", // Using existing image as placeholder
    description: "Award-winning technology strategist and advisor, driving AI and Blockchain-enabled energy transformations across the MENA region and beyond.",
    linkedin: "",
    topics: ["AI in Energy", "Blockchain Technology", "Digital Transformation", "MENA Region Energy"]
  },
  {
    name: "Dr. Tarek Kabel",
    picture: "", // Using existing image as placeholder
    description: "A lecturer in Economics at the University of Sadat City, specializing in energy economics and computable general equilibrium (CGE) modeling to assess renewable energy's role in economic development.",
    linkedin: "",
    topics: ["Energy Economics", "Economic Modeling", "CGE Analysis", "Economic Development"]
  }
];

// Updated keynoteSpeakerData with correct image paths
const keynoteSpeakers2024 = [
  {
    name: "Professor Youba Sokona",
    picture: "..",
    description1: "Prof. Sokona, with over 40 years of experience addressing energy, environment, and sustainable development in Africa, has been at the heart of numerous national and continental initiatives. He was a Vice-Chair of the Intergovernmental Panel on Climate Change (IPCC) Sixth Assessment Report, after serving as Co-Chair of IPCC Working Group III for the Fifth Assessment Report, and has been a Lead Author since 1990. He has a proven track record of organizational leadership and management, including as the Inaugural Coordinator of the African Climate Policy Centre and as Executive Secretary of the Sahara and the Sahel Observatory.",
    description2: "Prof. Sokona is affiliated with numerous boards and organizations. He is, among others, an Honorary Professor at University College London, a member of The World Academy of Sciences, the African Academy of Sciences, the International Council of Science, an Associate Member of the National Academy of Sciences and Technology of Senegal, and an Honorary Member of the Academy of Sciences of Mali. In short, Prof. Sokona is a global figure with deep technical knowledge, extensive policy experience, and an unwavering personal commitment to African-led development."
  },
  {
    name: "Professor Foluke Ishola",
    picture: "..",
    description1: "Mofoluwake Ishola, a distinguished Chemical Engineer, graduated from Ladoke Akintola University of Technology in 2002 and earned her M.Sc. with Distinction from Obafemi Awolowo University in 2008. She completed her PhD at the University of Borås, Sweden, in record time, focusing on biofuel ethanol production from lignocellulosic feedstocks. Her postdoctoral research was conducted at Chalmers University. Her expertise spans bioenergy, waste management, biofuels, and environmental sustainability. Mofoluwake has served as a university lecturer, environmental engineer, and journal reviewer, supervising numerous postgraduate students and authoring around thirty academic publications. She has received multiple scholarships and grants, including the Carnegie Scholarship (UK) and Fredrika Bremer Scholarship (Sweden). Currently, she is the Sustainability Ambassador and Senior R&D Engineer at Scanacon AB, Sweden, and a Visiting Professor at Ajayi Crowther University, Nigeria. She is affiliated with various professional engineering societies in Nigeria and Sweden."
  },
  {
    name: "Hon. (Prof) Robinah K. Nanyunja",
    picture: "..",
    description1: "Hon. (Prof) Robinah K. Nanyunja is an internationally recognized development expert and environmentalist, honored as an Honorary Professor by the Academic Union of the University of Oxford. She is the Founder and Chairman of Pilot International, a social enterprise based in Uganda that fosters sustainable development in over 100 countries. Prof. Nanyunja's work spans environmentalism, entrepreneurship, international development, and corporate governance. She has played a pivotal role in building business chambers, forming global partnerships, and facilitating investment in Africa and beyond. Additionally, she is the host of the upcoming Trans Africa Investment Summit, which will bring together entrepreneurs and investors from across the continent and the Diaspora.",
    description2: "With a profound career spanning environmentalism, entrepreneurship, international development, and corporate governance, Prof. Nanyunja has been instrumental in building business chambers, forming global partnerships, and driving investment throughout Africa and beyond. She also leads the upcoming Trans Africa Investment Summit, connecting entrepreneurs and investors across the continent and the diaspora."
  },
  {
    name: "Professor Emeka Oguzie",
    picture: "..",
    description1: "Emeka Oguzie is a Professor of Physical Chemistry at the Federal University of Technology Owerri (FUTO). He earned his Ph.D. in Physical Chemistry from the University of Calabar. He has held significant research positions, including being a visiting post-doctoral research fellow at the State Key Laboratory for Corrosion and Protection in China and a TWAS-UNESCO Associate. Prof. Oguzie is recognized as a Young Affiliate of TWAS, a Fellow of the OPEC Fund for International Development (OFID), and serves as Nigeria's Battery Ambassador for the Faraday Institution in the UK. His research focuses on Electrochemistry/Electrochemical Technology and Environmental & Occupational Hazards Management, with his research group known as the Electrochemistry & Materials Science Research Unit (EMRU-FUTO)."
  },
  {
    name: "Professor Amina Lawal Batagarawa",
    picture: "..",
    description1: "Amina Lawal Batagarawa is a distinguished specialist in Sustainable Built Environment with over 12 years of experience in Nigeria's educational sector. She holds a Doctor of Philosophy in Architecture from Newcastle University, a Masters of Science in Environmental Design of Buildings from Cardiff University, and a Bachelor's of Science in Architecture from Ahmadu Bello University. Her educational qualifications and extensive experience highlight her expertise in the field.",
    description2: "Currently, Amina serves as an Associate Professor of Architecture at Baze University in Abuja. She has previously held positions at Ahmadu Bello University and Applied Science University in Bahrain. Her leadership extends to roles in various organizations, including the World Renewable Energy Network and the Women in Renewable Energy Association of Nigeria. Beyond her professional achievements, Amina is a dedicated strategist, presenter, and mentor, actively involved in several organizations such as Muslimah Foundation and the ASTEVEN Energy Institute."
  },
  {
    name: "Professor Ioannis Tsipouridis",
    picture: "..",
    description1: "Professor Ioannis Tsipouridis is a distinguished expert in renewable energy with over 45 years of experience. He holds a B.Sc. in Chemical Engineering, an M.Sc. in Fuel and Energy, and a Ph.D. in Solar Energy from the University of Leeds. Throughout his career, he has been a key advocate for decarbonizing the global energy system and advancing renewable energy deployment. As CEO of Public Power Corporation Renewables in Greece, he expanded the company's project pipeline from 600 MW to 4,200 MW, leading initiatives in wind, solar, geothermal, and biomass energy during a period of national financial crisis. He also held leadership roles as Vice Chairman of the European Wind Energy Association and Chairman of the Hellenic Wind Energy Association. His advocacy has extended to global platforms, including COP21 in Paris and subsequent climate conferences, where he called for accelerated climate action.",
    description2: "Currently, Professor Tsipouridis directs the Renewable Energy & Climate Change Research Center at the Technical University of Mombasa and is a Visiting Professor and Technical Advisor at Meru University of Science and Technology in Kenya. He is deeply involved in promoting renewable energy in Sub-Saharan Africa through his consultancy, RED PRO Climate & Energy Consultants Ltd., and his leadership in organizations like the Loss & Damage Collaboration Group and the Fossil Fuel Non-Proliferation Treaty. An active voice in the climate movement, he also runs the e-mc2.gr platform to raise awareness of climate issues. His contributions to the field have earned him multiple awards, including the AIOLOS Prize for his work in wind energy and the Greek Green Award for lifetime achievement. He continues to mentor African students and contribute to the global dialogue on clean energy and sustainability."
  }
];

// Mock data for 2023 speakers (expanding on existing data)
const keynoteSpeakers2023Expanded = [
  {
    name: "Professor Yacob Mulugetta",
    picture: "", // Using existing image as placeholder
    description: "Professor Yacob Mulugetta is a renowned energy and development expert with extensive experience in African energy systems. He has been instrumental in shaping energy policies across the continent.",
    linkedin: "https://linkedin.com/in/yacob-mulugetta",
    topics: ["African Energy Future", "Energy Policy", "Development"]
  },
  {
    name: "Ifeoma Malo",
    picture: "", // Using existing image as placeholder
    description: "Ifeoma Malo is a global climate and energy leader who has been at the forefront of industry-academia collaboration in advancing clean energy innovation across Africa.",
    linkedin: "https://linkedin.com/in/ifeoma-malo",
    topics: ["Industry-Academia Collaboration", "Clean Energy Innovation", "Climate Leadership"]
  }
];

const SpeakersTabs = () => {
  const [activeTab, setActiveTab] = useState("2025");
  const [expandedSpeakers, setExpandedSpeakers] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (speakerId: string) => {
    setExpandedSpeakers(prev => ({
      ...prev,
      [speakerId]: !prev[speakerId]
    }));
  };

  return (
    <div className="pt-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full grid place-items-center space-y-12">
        <div className="overflow-x-auto">
          <TabsList className="flex w-max !p-0 gap-4 md:gap-8 lg:gap-20">
            <TabsTrigger 
              value="2025" 
              className="text-lg font-semibold data-[state=active]:text-green-600 data-[state=active]:bg-green-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 rounded-t-lg whitespace-nowrap"
            >
              2025 Speakers
            </TabsTrigger>
            <TabsTrigger 
              value="2024" 
              className="text-lg font-semibold data-[state=active]:text-green-600 data-[state=active]:bg-green-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 rounded-t-lg whitespace-nowrap"
            >
              2024 Speakers
            </TabsTrigger>
            <TabsTrigger 
              value="2023" 
              className="text-lg font-semibold data-[state=active]:text-green-600 data-[state=active]:bg-green-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 rounded-t-lg whitespace-nowrap"
            >
              2023 Speakers
            </TabsTrigger>
          </TabsList>
        </div>

        {/* 2025 Speakers */}
        <TabsContent value="2025" className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {keynoteSpeakers2025.map((speaker, index) => (
            <SpeakerCard 
              key={index} 
              speaker={speaker} 
              year="2025" 
              index={index}
              isExpanded={expandedSpeakers[`2025-${index}`] || false}
              onToggleExpanded={toggleExpanded}
            />
          ))}
        </TabsContent>

        {/* 2024 Speakers */}
        <TabsContent value="2024" className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {keynoteSpeakers2024.map((speaker, index) => (
            <SpeakerCard 
              key={index} 
              speaker={speaker} 
              year="2024" 
              index={index}
              isExpanded={expandedSpeakers[`2024-${index}`] || false}
              onToggleExpanded={toggleExpanded}
            />
          ))}
        </TabsContent>

        {/* 2023 Speakers */}
        <TabsContent value="2023" className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {keynoteSpeakers2023Expanded.map((speaker, index) => (
            <SpeakerCard 
              key={index} 
              speaker={speaker} 
              year="2023" 
              index={index}
              isExpanded={expandedSpeakers[`2023-${index}`] || false}
              onToggleExpanded={toggleExpanded}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpeakersTabs;
