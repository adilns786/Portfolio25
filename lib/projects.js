const projects = [
    {
      id: "shikshak-saarthi",
      title: "Shikshak Saarthi",
      shortDescription:
        "AI-powered faculty appraisal system that transforms the tedious annual evaluation process into an intuitive, conversational experience.",
      thumbnail: "/images/projects/shikshak-saarthi/thumbnail.jpg",
      tags: ["AI", "Education", "Full Stack", "Automation"],
      techStack: [
        "Next.js",
        "Gemini AI",
        "Framer Motion",
        "Tailwind CSS",
        "Shadcn UI",
        "Firebase",
      ],
      links: {
        github: "https://github.com/username/shikshak-saarthi",
        demo: "https://shikshak-saarthi.vercel.app",
        caseStudy: "/projects/shikshak-saarthi",
      },
      highlights: [
        "Conversational AI interface converts raw chat inputs into structured appraisal form data.",
        "Comprehensive tracking of teaching activities, research papers, patents, and industry projects.",
        "AI-generated reports, analysis, and suggestions tailored for faculty needs.",
        "One-click export to official DOCX format for offline applications.",
      ],
      detailsPage: {
        heroImage: "/images/projects/shikshak-saarthi/hero.jpg",
        gallery: [
          "/images/projects/shikshak-saarthi/screen1.jpg",
          "/images/projects/shikshak-saarthi/screen2.jpg",
        ],
        sections: [
          {
            subtitle: "The Problem We're Solving",
            content:
              "Every year, faculty members face the exhausting task of filling out lengthy appraisal forms with details about their teaching activities, research publications, hackathons, conferences, patents, and industry collaborations. It's a time-consuming process that takes focus away from what really matters - teaching and research. We knew there had to be a better way.",
          },
          {
            subtitle: "Our Approach",
            content:
              "Shikshak Saarthi digitalizes the entire faculty appraisal process with a twist - instead of wrestling with forms, faculty can simply chat with our AI system. Just describe what you've done in natural language, and the AI intelligently maps it to the relevant fields in your appraisal form. Think of it as having a smart assistant who understands academic work and handles all the paperwork. Of course, you can still manually edit anything with our intuitive interface if needed.",
          },
          {
            subtitle: "Built for Real Users",
            content:
              "This is our Semester 7 college major project, and we didn't build it in isolation. We worked closely with actual faculty members - the real stakeholders - to understand their pain points and incorporate features they actually need. From AI-generated insights to comprehensive analytics, every feature was suggested and validated by the people who'll use it daily. The system supports multiple roles including admins and faculty, following the official appraisal form structure while making it infinitely more manageable.",
          },
          {
            subtitle: "Technical Foundation",
            content:
              "We built this with Next.js for a smooth, responsive interface, integrated Gemini AI for natural language understanding, and used Firebase for secure authentication and data storage. Framer Motion and Tailwind CSS ensure the UI feels modern and intuitive, while Shadcn components maintain consistency. The entire platform is deployed on Vercel for reliable performance.",
          },
        ],
      },
      duration: "Aug 2024 – Dec 2024",
      role: "Full Stack Developer",
      status: "Completed",
      priority: 2,
    },
    {
      id: "gramlink",
      title: "GramLink",
      shortDescription:
        "Comprehensive digital governance platform transforming SC-majority villages into Adarsh Grams through AI-driven gap analysis and transparent project management.",
      thumbnail: "/images/projects/gramlink/thumbnail.jpg",
      tags: [
        "AI",
        "Social Impact",
        "Government Tech",
        "Full Stack",
        "SIH 2025",
      ],
      techStack: [
        "Next.js",
        "n8n",
        "Flask",
        "Firebase",
        "RAG",
        "Hugging Face",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      links: {
        github: "https://github.com/username/gramlink",
        demo: "https://gramlink.vercel.app",
        presentation: "/docs/gramlink-presentation.pdf",
        caseStudy: "/projects/gramlink",
      },
      highlights: [
        "Auto data fill solves baseline data availability challenges in remote villages.",
        "Smart survey app with offline-first capabilities for field data collection.",
        "Blockchain-based fund tracking ensures complete transparency.",
        "AI analytics and density heatmaps for data-driven prioritization of interventions.",
        "Comprehensive role-based dashboards from national to village level.",
        "Auto-generated VDP drafts and approval workflows accelerate planning.",
      ],
      detailsPage: {
        heroImage: "/images/projects/gramlink/hero.jpg",
        gallery: [
          "/images/projects/gramlink/field-visit.jpg",
          "/images/projects/gramlink/dashboard.jpg",
          "/images/projects/gramlink/survey-app.jpg",
          "/images/projects/gramlink/heatmap.jpg",
        ],
        sections: [
          {
            subtitle: "The Challenge",
            content:
              "The Pradhan Mantri Anusuchit Jaati Abhyudaya Yojana (PM-AJAY) aims to transform Scheduled Caste majority villages into Adarsh Grams by addressing gaps in infrastructure and services across education, healthcare, sanitation, connectivity, water, electricity, and livelihood opportunities. But there were real challenges: no real-time project status updates, difficulty identifying precise gaps due to limited data integration, and no data-driven mechanism to prioritize interventions based on actual ground-level needs.",
          },
          {
            subtitle: "Going Beyond the Screen",
            content:
              "This wasn't just a hackathon project we built from our computers. We conducted extensive interviews with government officials and actually visited Rahatoli village in Thane, Maharashtra - a place where this scheme was being implemented. Walking through the village, talking to local workers, understanding the bureaucratic processes, and seeing the ground reality firsthand completely shaped how we designed our solution. We realized technology alone isn't enough - it needs to work for everyone involved, from national planners to the village citizens.",
          },
          {
            subtitle: "A System for Everyone",
            content:
              "GramLink considers every single stakeholder in this complex ecosystem: national administrators, state officials, district coordinators, ward officers, panchayat members, village workers, citizens, contractors, and inspection officers. Each has their own dashboard with features tailored to their needs and workflows. This isn't about forcing everyone onto one generic platform - it's about giving each person the exact tools they need to do their job effectively while keeping everyone connected.",
          },
          {
            subtitle: "Innovation That Solves Real Problems",
            content:
              "We built features that directly address PM-AJAY's challenges: Auto data fill tackles limited baseline data availability. Our smart survey app works offline, solving HR and connectivity constraints in remote areas. Blockchain ensures fund tracking is transparent and tamper-proof. AI analytics provide the data-driven prioritization that was missing. Citizen feedback enables participatory monitoring. Density heatmaps offer geospatial mapping of infrastructure gaps. Auto-generated VDP drafts speed up planning. Approval reminders prevent bureaucratic bottlenecks. And our auto-scoring system provides a readiness index for Adarsh Gram declaration.",
          },
          {
            subtitle: "Impact That Matters",
            content:
              "This system isn't just about technology - it's about impact. For governance, it enables evidence-based decisions and accountability through SLA tracking. For society, it drives inclusive growth and citizen empowerment. Citizens can report issues directly without middlemen and track their complaints. Government officials get resource efficiency, better monitoring, and faster results. The platform is scalable and can extend to other schemes. Most importantly, it helps villages actually reach their Adarsh Gram targets while improving access to water, power, schools, and healthcare for the people who need it most.",
          },
          {
            subtitle: "Technical Architecture",
            content:
              "We built GramLink with Next.js for the frontend, using n8n for workflow automation and Flask for backend services. Firebase handles authentication and data storage. We implemented RAG using Hugging Face models for intelligent document processing. The entire platform is deployed on Vercel and Render, with Shadcn UI and Tailwind CSS creating an accessible, responsive interface that works on any device - critical for field officers working in remote locations.",
          },
        ],
      },
      duration: "Jan 2025 – Mar 2025",
      role: "Full Stack Developer & Field Research",
      status: "In Development",
      priority: 1,
    },
    {
      id: "sahkaar-setu",
      title: "Sahkaar Setu",
      shortDescription:
        "Award-winning platform revolutionizing interdepartmental coordination in Indian cities through AI-driven task mapping and unified project management.",
      thumbnail: "/images/projects/sahkaar-setu/thumbnail.jpg",
      tags: [
        "AI",
        "Government Tech",
        "Collaboration",
        "Full Stack",
        "SIH 2024 Winner",
      ],
      techStack: [
        "Next.js",
        "n8n",
        "Flask",
        "Firebase",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      links: {
        github: "https://github.com/username/sahkaar-setu",
        demo: "https://sahkaar-setu.vercel.app",
        presentation: "/docs/sahkaar-setu-presentation.pdf",
        caseStudy: "/projects/sahkaar-setu",
      },
      highlights: [
        "Won Smart India Hackathon 2024 at national level.",
        "Unified data sharing and resource pooling across departments.",
        "AI/ML-powered project classification and conflict prevention.",
        "Preemptive coordination prevents issues like roads being dug up after development.",
        "Comprehensive forums for intra-department, inter-department, and public engagement.",
        "Real-time NOC (No Objection Certificate) management system.",
      ],
      detailsPage: {
        heroImage: "/images/projects/sahkaar-setu/hero.jpg",
        gallery: [
          "/images/projects/sahkaar-setu/dashboard.jpg",
          "/images/projects/sahkaar-setu/iit-gandhinagar.jpg",
          "/images/projects/sahkaar-setu/team.jpg",
          "/images/projects/sahkaar-setu/noc-feature.jpg",
        ],
        sections: [
          {
            subtitle: "The Urban Coordination Crisis",
            content:
              "Ever noticed how roads get dug up right after being freshly laid? Or how multiple departments work on the same site without knowing about each other? This happens because Indian urban governance operates in silos. Departments don't share data, resources sit underutilized, projects overlap and conflict, and there's no unified planning. The problem statement from SIH 2024 was clear: create a platform for interdepartmental cooperation at city level that enables data and resource sharing, unified phasing, planning, and implementation of projects.",
          },
          {
            subtitle: "Our Journey to Victory",
            content:
              "This was my first ever hackathon win, and it was incredible. We traveled to IIT Gandhinagar for the finale from December 8-13, 2024. Being the only team from our college in our batch to win this prestigious national hackathon was surreal. But more than the win, we learned so much - about real-world problems, about building under pressure, about working as a team when it really matters. This project and this experience changed how I think about technology's role in solving systemic problems.",
          },
          {
            subtitle: "A Platform That Thinks Ahead",
            content:
              "sahkaar Setu isn't just about managing current projects - it's about preventing problems before they happen. Our AI/ML system automatically classifies projects and detects potential conflicts. When the water department plans to lay pipes on the same street where the roads department just finished work, our system flags it immediately. Departments can then coordinate their phasing and planning before any physical work begins. This preemptive approach saves money, time, and a lot of frustration.",
          },
          {
            subtitle: "Features That Actually Work",
            content:
              "We built comprehensive department profiles, project management tools, task scheduling, and project analysis dashboards. The resource inventory lets departments share machinery and expertise instead of wasting resources. Forums facilitate discussions within departments, between departments, and even with the public - creating transparency. We implemented a NOC feature during the hackathon for handling approvals and clearances. Training modules through workshops and seminars help build capacity. And the feedback system ensures continuous improvement based on actual user needs.",
          },
          {
            subtitle: "What Makes It Unique",
            content:
              "Unlike typical management platforms, sahkaar Setu combines unified data sharing with predictive conflict resolution. The AI layer doesn't just organize information - it actively prevents problems. Public engagement features break down the wall between government and citizens. The platform is specifically designed for the complexities of Indian urban governance, making it scalable and customizable for different cities. And perhaps most importantly, it focuses on building a collaborative culture, not just providing tools.",
          },
        ],
      },
      duration: "Oct 2024 – Dec 2024",
      role: "Full Stack Developer",
      status: "Completed",
      achievement: "SIH 2024 National Winner",
      priority: 1,
    },
    {
      id: "nivaran",
      title: "Nivaran",
      shortDescription:
        "Next-generation AI-driven IT helpdesk platform unifying multi-channel ticketing with emotion-aware prioritization and continuous learning for enterprise-scale support.",
      thumbnail: "/images/projects/nivaran/thumbnail.jpg",
      tags: ["AI", "Enterprise", "Full Stack", "ML", "SIH 2025"],
      techStack: [
        "Next.js",
        "Flask",
        "Node.js",
        "Firebase",
        "Pinecone",
        "Hugging Face",
        "Langchain",
        "Mistral",
        "Groq",
        "Shadcn UI",
      ],
      links: {
        github: "https://github.com/username/nivaran",
        demo: "https://nivaran.vercel.app",
        documentation: "/docs/nivaran-technical.pdf",
        caseStudy: "/projects/nivaran",
      },
      highlights: [
        "Unified ingestion from web, mobile, email, voice, Twitter, and legacy systems (GLPI, Solman).",
        "Emotion-aware ticket prioritization detects frustrated users for empathetic support.",
        "24×7 AI chatbot with RAG handles common issues without human intervention.",
        "Auto-generated knowledge articles from resolved tickets.",
        "Predictive analytics forecasts ticket volumes and identifies recurring patterns.",
        "Voice-to-ticket conversion supports multiple languages.",
      ],
      detailsPage: {
        heroImage: "/images/projects/nivaran/hero.jpg",
        gallery: [
          "/images/projects/nivaran/dashboard.jpg",
          "/images/projects/nivaran/chatbot.jpg",
          "/images/projects/nivaran/analytics.jpg",
          "/images/projects/nivaran/mobile-app.jpg",
        ],
        sections: [
          {
            subtitle: "Understanding the Problem",
            content:
              "POWERGRID employees had to navigate multiple platforms - GLPI, Solman, email - just to raise IT tickets. Each query meant figuring out which portal to use, creating accounts, learning different interfaces. Resolution tracking was scattered across systems. Employee satisfaction was understandably low. The challenge for SIH 2025 was clear: create a smart, unified helpdesk that consolidates everything while using AI to make support faster and more efficient.",
          },
          {
            subtitle: "Learning from the Users",
            content:
              "We didn't build this in isolation. We conducted extensive interviews and meetings with POWERGRID employees to understand their actual pain points and workflows. These conversations shaped every feature - from how tickets are created to how notifications are sent. Real user feedback drove our design decisions, ensuring we weren't just building cool technology, but solving real frustrations people face every day.",
          },
          {
            subtitle: "Intelligence That Understands Context",
            content:
              "Nivaran's AI doesn't just categorize tickets - it understands them. Using NLP and sentence transformers, it processes incoming requests, extracts intent, and classifies by category, priority, and urgency. But here's what makes it special: it also detects emotional tone. A frustrated user describing a critical issue gets flagged for expedited, empathetic support. The system learns continuously from every resolution, getting smarter about routing, classification, and even predicting what users need before they ask.",
          },
          {
            subtitle: "Knowledge That Grows Itself",
            content:
              "Traditional knowledge bases go stale because maintaining them is tedious. Nivaran solves this with auto-generation. As IT experts resolve tickets, their solutions are captured, processed, and turned into structured knowledge articles complete with troubleshooting steps and FAQs. The system uses RAG (Retrieval Augmented Generation) to provide contextual, conversational answers instead of just returning static documents. It's like having an expert who remembers every solution ever implemented.",
          },
          {
            subtitle: "Support That Never Sleeps",
            content:
              "The 24×7 AI chatbot handles common issues like password resets, VPN setup, and software installation without any human intervention. For complex issues, it gathers initial information and context before routing to the right team. Voice assistance lets employees describe problems verbally in multiple languages - especially useful for field technicians. And with offline mode, tickets can be created even without connectivity, automatically syncing once online.",
          },
          {
            subtitle: "Insights That Drive Decisions",
            content:
              "Interactive dashboards show geo-location and department-based heatmaps revealing where issues concentrate. Predictive models forecast ticket volumes based on historical patterns and organizational events, enabling proactive staffing. Root cause analysis clusters related tickets to identify systemic issues requiring fixes rather than repetitive individual resolutions. Real-time SLA monitoring ensures nothing falls through the cracks, with automatic escalations when deadlines are at risk.",
          },
          {
            subtitle: "Technical Innovation",
            content:
              "Built with Next.js and Flask for frontend and backend, Firebase and Pinecone for data storage and vector search, and a sophisticated AI stack including Hugging Face, Langchain, Mistral, and Groq. The architecture supports federated learning - allowing multiple organizational units to improve models collaboratively without sharing sensitive data. It integrates seamlessly with legacy systems while providing modern multi-channel access. And it scales to handle thousands of concurrent users across multiple geographies.",
          },
        ],
      },
      duration: "Jan 2025 – Mar 2025",
      role: "Full Stack Developer & ML Integration",
      status: "In Development",
      priority: 1,
    },
    {
      id: "tripsync",
      title: "TripSync",
      shortDescription:
        "Crowdsourced travel platform with ML-powered personalized recommendations based on user behavior and preferences.",
      thumbnail: "/images/projects/tripsync/thumbnail.jpg",
      tags: ["ML", "Travel", "Full Stack", "Community"],
      techStack: [
        "React",
        "Vite",
        "Flask",
        "TensorFlow",
        "Firebase",
        "Leaflet",
        "Tailwind CSS",
        "Beautiful Soup",
      ],
      links: {
        github: "https://github.com/username/tripsync",
        demo: "https://tripsync-live.vercel.app",
        caseStudy: "/projects/tripsync",
      },
      highlights: [
        "TensorFlow-based recommendation engine tracks user preferences.",
        "Crowdsourced itineraries from global traveler community.",
        "Intelligent tracking of user interests (cultural, historical, natural destinations).",
        "Admin-verified blog system ensures content quality.",
        "Multilingual support and web scraping for destination data.",
      ],
      detailsPage: {
        heroImage: "/images/projects/tripsync/hero.jpg",
        gallery: [
          "/images/projects/tripsync/map-view.jpg",
          "/images/projects/tripsync/itinerary.jpg",
          "/images/projects/tripsync/blog.jpg",
        ],
        sections: [
          {
            subtitle: "Where It All Started",
            content:
              "TripSync was my first major hackathon project, built during Syrus 2024 organized by CodeCell at VESIT. More than just a project, it was where I met two amazing people who became friends and went on to win SIH 2024 with me later. Sometimes the best things about hackathons aren't just the code you write, but the people you meet and the teams you build.",
          },
          {
            subtitle: "The Idea",
            content:
              "We wanted to create something different in travel planning - not another generic recommendation engine, but a platform where real travelers share real experiences. TripSync lets people interact, share views and suggestions about tourist locations, and build itineraries together. It's crowdsourced wisdom meets intelligent technology. Instead of reading generic travel blogs, you're connecting with fellow travelers who've actually been there.",
          },
          {
            subtitle: "Intelligence That Learns Your Style",
            content:
              "Here's the cool part: TripSync doesn't just show you random destinations. It tracks which types of places you interact with - cultural sites, historical monuments, natural landscapes - and learns your travel style. Using TensorFlow, we built a recommendation system that suggests places aligned with your interests. Like exploring temples and museums? The algorithm notices and surfaces similar experiences. It's personalized travel planning without the questionnaire.",
          },
          {
            subtitle: "Features That Connect Travelers",
            content:
              "Beyond recommendations, we built a complete travel community. Users create profiles, share travel stories through blogs, and review itineraries for authenticity. An admin panel verifies and approves posts before publication, ensuring quality. We integrated Leaflet maps for visual itinerary planning, implemented multilingual support for global accessibility, and used web scraping to enrich destination information with data and images from various sources.",
          },
          {
            subtitle: "Learning by Deploying",
            content:
              "After Syrus, I took TripSync further by deploying it on AWS while learning cloud technologies. There's something about taking a hackathon project and making it production-ready that teaches you things no tutorial can. From handling real user load to dealing with deployment challenges, it was practical education in making things that actually work in the real world.",
          },
        ],
      },
      duration: "Feb 2024 – Mar 2024",
      role: "Full Stack Developer",
      status: "Completed",
      achievement: "Built at Syrus 2024 Hackathon",
      priority: 3,
    },
  ]
  ;

export default projects;
