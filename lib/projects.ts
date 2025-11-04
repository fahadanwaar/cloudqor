export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  link?: string;
  status?: 'active' | 'planned' | 'archived';
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Multi-Cloud Migration',
    summary: 'Lift-and-shift of legacy workloads with IaC, zero-downtime cutover, and cost optimization.',
    tags: ['AWS', 'Terraform', 'SRE'],
    image: '/images/sample1.jpg',
    link: '#',
    status: 'active'
  },
  {
    id: 'p2',
    title: 'Realtime Analytics Dashboard',
    summary: 'Streaming pipeline + dashboard for KPIs across regions; sub-2s latency.',
    tags: ['GCP', 'BigQuery', 'Next.js'],
    image: '/images/sample2.jpg',
    link: '#',
    status: 'planned'
  },
  {
    id: 'p3',
    title: 'Fintech Platform Hardening',
    summary: 'Security posture review, CI/CD hardening, and policy-as-code with OPA.',
    tags: ['Security', 'OPA', 'CI/CD'],
    link: '#',
    status: 'archived'
  },
  {
  id: 'p4',
  title: 'AI Chat Assistant — Emotionally Aware',
  summary:
    'Emotion-driven chatbot with Flask (Python) backend and React frontend for human-like conversations.',
  tags: ['Python', 'Flask', 'React', 'Next.js', 'Tailwind', 'AI'],
  image: '/images/projects/ai-emotion-chat/cover.jpg',
  link: '/marketing/portfolio/ai-chat-assistant-emotion',
  status: 'active'
},
{
  id: 'p5',
  title: 'Instagram Growth',
  summary:
    'Web app to boost Instagram followers, engagement, and visibility with real-time analytics and guided growth strategies.',
  tags: ['React', 'Next.js', 'Flask', 'Python', 'Analytics'],
  image: '/images/projects/instagram-growth/cover.jpg',     
  link: '/marketing/portfolio/instagram-growth',            
  status: 'active'
},
{
  id: 'p6',
  title: 'Sales Support',
  summary:
    'Rails + React app for sales comparisons, trend analysis, and faster decisions with a clean, real-time UI.',
  tags: ['Ruby on Rails', 'React', 'PostgreSQL', 'Analytics', 'Charts'],
  image: '/images/projects/sales-support/cover.jpg',
  link: '/marketing/portfolio/sales-support',
  status: 'active'
},
{
  id: 'p7',
  title: 'BUYMA Research Navi — Web Scraping',
  summary:
    'Product research portal with FastAPI + PostgreSQL backend and a Next.js frontend for fast, reliable scraping & analysis.',
  tags: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Web Scraping'],
  image: '/images/projects/buyma-navi/cover.jpg',
  link: '/marketing/portfolio/buyma-navi',
  status: 'active'
},
{
  id: 'p8',
  title: 'AI Contact Center — 24/7 Voice & Chat Agents',
  summary:
    'Voice + chat agents that answer, resolve, and escalate with human-grade clarity—at enterprise scale.',
  tags: ['LiveKit', 'Voice', 'Chat', 'Google LLMs', 'Orchestration','AI'],
  image: '/images/projects/ai-contact-center/cover.jpg',
  link: '/marketing/portfolio/ai-contact-center',
  status: 'active'
}




];
