const toolPages = [
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
      {
        type: 'paragraph',
        text: 'Human Life Value helps you determine the ideal coverage level based on income, liabilities, and long-term financial goals.'
      },
      {
        type: 'list',
        items: ['Understand the protection needed for your family', 'Balance income replacement with savings', 'Use HLV to identify the right sum assured', 'Align LIC products with your financial objectives']
      }
    ]
  }
]

export default toolPages
