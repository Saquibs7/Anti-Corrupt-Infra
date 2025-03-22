const MOCK_PROJECTS = [
  {
    id: '1',
    name: 'Central Metro Line Extension',
    description: 'Extending the metro line to connect suburban areas with improved infrastructure and accessibility.',
    startDate: '2024-01-15',
    expectedCompletionDate: '2025-06-30',
    contractor: 'Metro Infrastructure Co.',
    budget: 15000000,
    completionPercentage: 35,
    location: {
      lat: 40.7128,
      lng: -74.0060,
      address: 'Downtown Metro District'
    },
    category: 'roads',
    priority: 1,
    votes: 256,
    riskLevel: 'medium',
    aiInsights: {
      estimatedCompletion: '2025-07-15',
      delayProbability: 0.3,
      riskFactors: [
        'Weather conditions may affect construction timeline',
        'Supply chain delays possible for specialized equipment'
      ],
      qualityAssessment: {
        score: 85,
        findings: ['Construction quality meets standards', 'Material quality is excellent']
      }
    },
    transactions: [
      {
        date: '2024-01-15',
        amount: 2000000,
        description: 'Initial funding release',
        hash: '0x123...abc',
        phase: 'Phase 1'
      },
      {
        date: '2024-02-15',
        amount: 3000000,
        description: 'Equipment procurement',
        hash: '0x456...def',
        phase: 'Phase 1'
      }
    ],
    officials: [
      {
        id: '1',
        name: 'John Smith',
        role: 'Project Manager',
        department: 'Infrastructure',
        contactInfo: 'john.smith@metro.gov',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        role: 'Chief Engineer',
        department: 'Engineering',
        contactInfo: 'sarah.j@metro.gov',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    phases: [
      {
        id: '1',
        name: 'Planning & Design',
        description: 'Initial planning and detailed design phase',
        startDate: '2024-01-15',
        endDate: '2024-03-15',
        status: 'completed',
        completionPercentage: 100
      },
      {
        id: '2',
        name: 'Foundation Work',
        description: 'Ground preparation and foundation laying',
        startDate: '2024-03-16',
        endDate: '2024-06-30',
        status: 'ongoing',
        completionPercentage: 45
      },
      {
        id: '3',
        name: 'Construction',
        description: 'Main construction phase',
        startDate: '2024-07-01',
        endDate: '2025-03-30',
        status: 'upcoming',
        completionPercentage: 0
      }
    ],
    media: [
      {
        id: '1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Site Overview',
        description: 'Aerial view of construction site',
        uploadDate: '2024-02-01'
      },
      {
        id: '2',
        type: 'document',
        url: '#',
        title: 'Technical Specifications',
        description: 'Detailed technical specifications document',
        uploadDate: '2024-01-15'
      }
    ],
    issues: [
      {
        id: '1',
        title: 'Material Delivery Delay',
        description: 'Steel shipment delayed by 2 weeks',
        status: 'resolved',
        dateReported: '2024-02-01',
        reportedBy: 'Site Manager'
      }
    ]
  },
  {
    id: '2',
    name: 'Smart Grid Implementation',
    description: 'Modernizing the city\'s electrical grid with smart meters and renewable energy integration.',
    startDate: '2024-02-01',
    expectedCompletionDate: '2024-12-31',
    contractor: 'EcoGrid Solutions',
    budget: 8500000,
    completionPercentage: 45,
    location: {
      lat: 40.7282,
      lng: -73.9942,
      address: 'East Industrial Zone'
    },
    category: 'electricity',
    priority: 2,
    votes: 189,
    riskLevel: 'low',
    aiInsights: {
      estimatedCompletion: '2024-12-15',
      delayProbability: 0.1,
      riskFactors: [],
      qualityAssessment: {
        score: 92,
        findings: ['Implementation follows best practices', 'System reliability is high']
      }
    },
    transactions: [
      {
        date: '2024-02-01',
        amount: 1500000,
        description: 'Initial phase funding',
        hash: '0x456...def',
        phase: 'Phase 1'
      }
    ],
    officials: [
      {
        id: '3',
        name: 'Michael Chen',
        role: 'Technical Lead',
        department: 'Smart Infrastructure',
        contactInfo: 'michael.c@ecogrid.com',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    phases: [
      {
        id: '4',
        name: 'System Design',
        description: 'Smart grid system architecture and planning',
        startDate: '2024-02-01',
        endDate: '2024-03-31',
        status: 'completed',
        completionPercentage: 100
      },
      {
        id: '5',
        name: 'Implementation',
        description: 'Smart meter installation and grid upgrades',
        startDate: '2024-04-01',
        endDate: '2024-10-31',
        status: 'ongoing',
        completionPercentage: 40
      }
    ],
    media: [
      {
        id: '3',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Smart Meter Installation',
        description: 'Installation of new smart meters',
        uploadDate: '2024-03-15'
      }
    ],
    issues: []
  },
  {
    id: '3',
    name: 'Urban Water Treatment Facility',
    description: 'Construction of a state-of-the-art water treatment facility using AI-powered purification systems.',
    startDate: '2024-03-01',
    expectedCompletionDate: '2025-09-30',
    contractor: 'AquaPure Technologies',
    budget: 12000000,
    completionPercentage: 20,
    location: {
      lat: 40.7500,
      lng: -73.9800,
      address: 'Riverside Industrial Park'
    },
    category: 'water',
    priority: 1,
    votes: 312,
    riskLevel: 'medium',
    aiInsights: {
      estimatedCompletion: '2025-10-15',
      delayProbability: 0.2,
      riskFactors: [
        'Environmental permit pending',
        'Specialized equipment delivery timeline uncertain'
      ],
      qualityAssessment: {
        score: 88,
        findings: ['Environmental impact within acceptable range', 'Water quality metrics exceed standards']
      }
    },
    transactions: [
      {
        date: '2024-03-01',
        amount: 3000000,
        description: 'Initial funding',
        hash: '0x789...ghi',
        phase: 'Phase 1'
      }
    ],
    officials: [
      {
        id: '4',
        name: 'Emma Wilson',
        role: 'Environmental Officer',
        department: 'Water Resources',
        contactInfo: 'emma.w@aquapure.com',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    phases: [
      {
        id: '6',
        name: 'Environmental Assessment',
        description: 'Environmental impact studies and permits',
        startDate: '2024-03-01',
        endDate: '2024-05-31',
        status: 'ongoing',
        completionPercentage: 70
      }
    ],
    media: [
      {
        id: '4',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Facility Design',
        description: '3D rendering of the treatment facility',
        uploadDate: '2024-03-01'
      }
    ],
    issues: []
  }
];
export default MOCK_PROJECTS;
