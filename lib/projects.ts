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
  }
];
