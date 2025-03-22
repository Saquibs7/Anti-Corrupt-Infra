export interface Official {
  id: string;
  name: string;
  role: string;
  department: string;
  contactInfo: string;
  imageUrl: string;
}

export interface ProjectPhase {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  completionPercentage: number;
}

export interface ProjectMedia {
  id: string;
  type: 'image' | 'video' | 'document';
  url: string;
  title: string;
  description: string;
  uploadDate: string;
}

// export interface AIInsights {
//   estimatedCompletion: string;
//   delayProbability: number;
//   riskFactors: string[];
//   qualityAssessment: {
//     score: number;
//     findings: string[];
//   };
// }

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  expectedCompletionDate: string;
  contractor: string;
  budget: number;
  completionPercentage: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  category: 'roads' | 'sanitation' | 'electricity' | 'bridges' | 'water';
  priority: number;
  votes: number;
  riskLevel: 'low' | 'medium' | 'high';
  aiInsights: {
    estimatedCompletion: string;
    delayProbability: number;
    riskFactors: string[];
    qualityAssessment: {
      score: number;
      findings: string[];
    };
  };
  transactions: {
    date: string;
    amount: number;
    description: string;
    hash: string;
    phase: string;
  }[];
  officials: Official[];
  phases: ProjectPhase[];
  media: ProjectMedia[];
  issues: {
    id: string;
    title: string;
    description: string;
    status: 'open' | 'investigating' | 'resolved';
    dateReported: string;
    reportedBy: string;
  }[];
}