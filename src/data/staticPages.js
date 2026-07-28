const staticPages = [
  {
    path: '/Home/About',
    title: 'About Us',
    subtitle: 'LIC agent services with a human touch and a royal theme.',
    body: [
      { type: 'paragraph', text: 'Our agency helps clients across India choose LIC and financial products that protect what matters most. We offer trusted advisory, personalized plan selection, and support from purchase through claim settlement.' },
      { type: 'paragraph', text: 'We specialize in life insurance, health protection, retirement planning, and education savings, serving both individual and family needs with integrity.' },
      { type: 'list', items: ['LIC policy guidance for endowment, term, and pension plans', 'Mutual fund planning and SIP investment support', 'Home loan assistance and senior financial advice', 'Claim support, policy servicing, and client education'] }
    ]
  },
  {
    path: '/Gallery/PhotoGallery',
    title: 'Photo Gallery',
    subtitle: 'A gallery of awards, events, and client milestones.',
    body: [
      { type: 'paragraph', text: 'Browse highlights from client events, seminars, and training programs. This gallery presents the people, moments, and achievements behind the agency.' },
      {
        type: 'gallery',
        items: [
          {
            id: 'gallery-1',
            title: 'Client Meet',
            summary: 'A warm evening with families and new policy discussions.',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80'
          },
          {
            id: 'gallery-2',
            title: 'Workshop Session',
            summary: 'Interactive financial planning workshop for long-term goals.',
            image:'../src/assets/gallery-photos/workshop-session.jpg'
          },
          {
            id: 'gallery-3',
            title: 'Award Ceremony',
            summary: 'Recognizing service excellence and community impact.',
            image: '../src/assets/gallery-photos/award-ceremony.jpg'
          },
          {
            id: 'gallery-4',
            title: 'Community Outreach',
            summary: 'A memorable day supporting local families and awareness drives.',
            image: '../src/assets/gallery-photos/community-outreach.jpg'
          }
        ]
      },
      { type: 'list', items: ['Client appreciation events', 'Financial planning workshops', 'Award recognition ceremonies', 'Community outreach activities'] }
    ]
  },
  {
    path: '/Gallery/CertificateGallery',
    title: 'Certificates',
    subtitle: 'Recognitions and professional credentials.',
    body: [
      { type: 'paragraph', text: 'Our agency holds certifications in insurance advisory, financial planning, and client service excellence. These credentials support our commitment to quality advice.' },
      { type: 'list', items: ['LIC training certifications', 'Mutual fund advisory credentials', 'Customer service achievement awards', 'Financial planning certificates'] }
    ]
  },
  {
    path: '/Gallery/AwardsGallery',
    title: 'Awards',
    subtitle: 'A record of excellence and industry recognition.',
    body: [
      { type: 'paragraph', text: 'Our team has received awards for sales leadership, service excellence, and community impact. Each award reinforces our focus on long-term client relationships.' },
      { type: 'list', items: ['Top LIC agency awards', 'Mutual fund advisory recognition', 'Leadership and service honors', 'Outstanding client support awards'] }
    ]
  },
  {
    path: '/Information/life_insurance',
    title: 'Why Life Insurance?',
    subtitle: 'Protect your family and build a financial safety net.',
    body: [
      { type: 'paragraph', text: 'Life insurance is the foundation of every secure financial plan. It replaces income, covers debts, and provides certainty if unforeseen events occur.' },
      { type: 'list', items: ['Financial protection for dependents', 'Tax savings under Indian law', 'Savings with guaranteed maturity benefits', 'Rider options for critical illness and accidents'] }
    ]
  },
  {
    path: '/Information/LifeInsuranceProducts',
    title: 'Life Insurance Products',
    subtitle: 'LIC product categories for every goal.',
    body: [
      { type: 'paragraph', text: 'Our LIC offerings cover a wide range of needs, from pure protection to savings and retirement planning. We tailor the right plan to your age, income, and future goals.' },
      { type: 'list', items: ['Term insurance and online protection plans', 'Endowment and money-back savings plans', 'Pension plans for retirement income', 'Children’s education and marriage plans'] }
    ]
  },
  {
    path: '/LIC/PremiumCalculator',
    title: 'LIC Premium Calculator',
    subtitle: 'Estimate a practical premium for your preferred LIC protection plan.',
    body: [
      {
        type: 'calculator',
        title: 'Quick premium estimate',
        description: 'Use this simple estimator to understand how age, sum assured, and policy term affect the monthly premium for a typical LIC plan.',
        fields: [
          { label: 'Sum Assured (₹)', name: 'sumAssured', type: 'number', defaultValue: 500000 },
          { label: 'Age', name: 'age', type: 'number', defaultValue: 32 },
          { label: 'Policy Term (years)', name: 'term', type: 'number', defaultValue: 20 },
          { label: 'Payment Mode', name: 'mode', type: 'select', options: ['Yearly', 'Half Yearly', 'Quarterly', 'Monthly'], defaultValue: 'Yearly' }
        ],
        resultLabel: 'Estimated Premium',
        assumptions: [
          'Approximate premium shown for illustration only.',
          'Actual LIC premium depends on plan type, riders, and underwriting.',
          'Contact us for a personalised quote with your exact needs.'
        ]
      }
    ]
  },
  {
    path: '/LIC/HLVCalculator',
    title: 'HLV Calculator',
    subtitle: 'Calculate Human Life Value for better coverage.',
    body: [
      { type: 'paragraph', text: 'Human Life Value helps you determine the ideal coverage level based on income, liabilities, and long-term financial goals.' },
      { type: 'list', items: ['Understand the protection needed for your family', 'Balance income replacement with savings', 'Use HLV to identify the right sum assured', 'Align LIC products with your financial objectives'] }
    ]
  },
  {
    path: '/Information/Why_mutualfund',
    title: 'Why Mutual Funds?',
    subtitle: 'Grow wealth with disciplined investing.',
    body: [
      { type: 'paragraph', text: 'Mutual funds offer professionally managed portfolios, diversification, and easy access to equity or debt markets. They are ideal for medium- and long-term wealth creation.' },
      { type: 'list', items: ['SIP investing for disciplined savings', 'Diversification across sectors and instruments', 'Professional fund management', 'Transparent costs and simple access'] }
    ]
  },
  {
    path: '/Funds/RecommendedFunds',
    title: 'Our Favourite Funds',
    subtitle: 'Selected funds for steady long-term returns.',
    body: [
      { type: 'paragraph', text: 'These are the mutual funds we recommend for balanced growth, stability, and goal-based planning. Each selection is aligned to risk tolerance and time horizon.' },
      { type: 'list', items: ['Large-cap equity funds', 'Balanced advantage funds', 'Debt funds for regular income', 'Tax-saving ELSS options'] }
    ]
  },
  {
    path: '/Funds/TopPerformingFund',
    title: 'Industry Top Performers',
    subtitle: 'Top performing mutual funds and investment strategies.',
    body: [
      { type: 'paragraph', text: 'This page showcases industry-leading funds that have delivered consistent performance across multiple market cycles.' },
      { type: 'paragraph', text: 'We analyze returns, volatility, and long-term growth potential to help you choose the right investment. Contact us for a personalized shortlist.' }]
  },
  {
    path: '/Calculator/Sipcalculator',
    title: 'SIP Calculator',
    subtitle: 'Estimate the future value of systematic investments.',
    body: [
      { type: 'paragraph', text: 'A SIP calculator helps you understand how regular monthly investments grow with compounding returns. It is ideal for long-term goals such as retirement, education, and wealth creation.' },
      { type: 'list', items: ['Choose a monthly investment amount', 'Set an investment horizon', 'Understand expected returns', 'Plan for future corpus requirements'] }
    ]
  },
  {
    path: '/Calculator/GoalPlanner',
    title: 'Goal Planner',
    subtitle: 'Plan for education, retirement, and major life goals.',
    body: [
      { type: 'paragraph', text: 'This page helps you set and prioritize key financial goals. We recommend LIC and mutual fund solutions based on your target amount and time frame.' },
      { type: 'list', items: ['Child education planning', 'Home purchase planning', 'Retirement income planning', 'Short-term and long-term savings goals'] }
    ]
  },
  {
    path: '/Miscallenous/InsuranceNews',
    title: 'Industry News',
    subtitle: 'Latest updates from insurance and financial markets.',
    body: [
      { type: 'paragraph', text: 'Stay informed about LIC announcements, regulatory changes, and investment trends that affect your financial planning.' },
      { type: 'list', items: ['Policy updates and new product launches', 'Financial market commentary', 'Insurance and investment insights', 'Regulatory and tax news for policyholders'] }
    ]
  },
  {
    path: '/Miscallenous/Articles',
    title: 'Articles',
    subtitle: 'Guidance, tips, and expert articles for investors.',
    body: [
      { type: 'paragraph', text: 'Read articles on insurance planning, investment strategy, and wealth creation. These resources are curated to help you make smarter financial decisions.' },
      { type: 'list', items: ['Insurance planning tips', 'SIP and mutual fund advice', 'Retirement readiness articles', 'Family wealth protection'] }
    ]
  },
  {
    path: '/Miscallenous/faqs',
    title: 'FAQs',
    subtitle: 'Common questions about LIC, mutual funds, and planning.',
    body: [
      { type: 'paragraph', text: 'Find answers to frequently asked questions about insurance, savings, and investment planning. If you need deeper support, contact our team directly.' },
      { type: 'list', items: ['How much life insurance do I need?', 'What is the difference between term and endowment plans?', 'How does SIP investing work?', 'What documents are required for KYC?'] }
    ]
  },
  {
    path: '/Miscallenous/Forms',
    title: 'Forms',
    subtitle: 'Download LIC and financial service forms.',
    body: [
      { type: 'paragraph', text: 'Access essential forms for policy applications, service requests, KYC updates, and claim support. Our team can also help you complete them correctly.' },
      { type: 'list', items: ['Policy application forms', 'Plan change request forms', 'Nomination update forms', 'Claim submission checklists'] }
    ]
  },
  {
    path: '/Miscallenous/KycForm',
    title: 'KYC Forms',
    subtitle: 'Complete your Know Your Customer documentation.',
    body: [
      { type: 'paragraph', text: 'KYC compliance is required for all insurance and mutual fund investments. We assist clients through the process to ensure a smooth application experience.' },
      { type: 'list', items: ['PAN card and identity proofs', 'Address proof documents', 'Photo and signature requirements', 'Document submission guidance'] }
    ]
  },
  {
    path: '/Home/ContactUs',
    title: 'Contact Us',
    subtitle: 'Connect with our LIC agency team today.',
    body: [
      { type: 'paragraph', text: 'Reach out for a consultation, policy review, or claim assistance. We are available by phone, email, and WhatsApp for prompt support.' },
      { type: 'list', items: ['Name: Neeraj Tiwari', 'Phone: 7850013022', 'Email: neerajtiwari11800@gmail.com', 'Office: Your local LIC agency office', 'Support: fast policy and claim assistance'] }
    ]
  },
  {
    path: '/Home/sitemap',
    title: 'Site Map',
    subtitle: 'Browse the local structure of this portfolio website.',
    body: [
      { type: 'paragraph', text: 'This site map shows the pages included in your LIC agent portfolio. Use the navigation menu to explore each section.' },
      { type: 'list', items: [
        '/Home/About',
        '/Gallery/PhotoGallery',
        '/Gallery/CertificateGallery',
        '/Gallery/AwardsGallery',
        '/Information/life_insurance',
        '/Information/LifeInsuranceProducts',
        '/LIC/PremiumCalculator',
        '/LIC/HLVCalculator',
        '/Information/Why_mutualfund',
        '/Funds/RecommendedFunds',
        '/Funds/TopPerformingFund',
        '/Calculator/Sipcalculator',
        '/Calculator/GoalPlanner',
        '/Miscallenous/InsuranceNews',
        '/Miscallenous/Articles',
        '/Miscallenous/faqs',
        '/Miscallenous/Forms',
        '/Miscallenous/KycForm',
        '/Home/ContactUs'
      ] }
    ]
  }
]

export default staticPages
