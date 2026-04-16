module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Compliance as Infrastructure',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'start-here',
          label: 'Start Here',
        },
        {
          type: 'doc',
          id: 'ai-interpretation-harness',
          label: 'AI Interpretation Harness',
        },
        {
          type: 'doc',
          id: 'preface',
          label: 'Preface',
        },
        {
          type: 'doc',
          id: 'practitioner-reliance-disclaimer',
          label: 'Reliance Disclaimer',
        },
        {
          type: 'doc',
          id: 'ai-methodology-disclosure',
          label: 'AI Methodology Disclosure',
        },
        {
          type: 'doc',
          id: 'introduction',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'category-foundation',
          label: 'Category Foundation',
        },
        {
          type: 'doc',
          id: 'trust-gap',
          label: 'Trust Gap',
        },
        {
          type: 'category',
          label: 'Failure Mechanics',
          link: {
            type: 'doc',
            id: 'failure-mechanics',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'documentation-debt',
              label: 'Documentation Debt',
            },
            {
              type: 'doc',
              id: 'evidence-latency-and-enforcement-drift',
              label: 'Evidence Latency & Drift',
            },
            {
              type: 'doc',
              id: 'oracle-problem',
              label: 'Oracle Problem',
            },
          ],
        },
        {
          type: 'category',
          label: 'Architecture',
          link: {
            type: 'doc',
            id: 'architecture',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'translation-layer',
              label: 'Translation Layer',
            },
            {
              type: 'doc',
              id: 'control-assertion-engine',
              label: 'Control Assertion Engine',
            },
            {
              type: 'doc',
              id: 'attestation-layer',
              label: 'Attestation Layer',
            },
          ],
        },
        {
          type: 'category',
          label: 'Extensions',
          link: {
            type: 'doc',
            id: 'extensions/index',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'extensions/upstream-positioning',
              label: 'Upstream Positioning',
            },
            {
              type: 'doc',
              id: 'extensions/governance-diagnostic',
              label: 'Diagnostic Tool',
            },
            {
              type: 'doc',
              id: 'extensions/readiness-model',
              label: 'Readiness Model',
            },
            {
              type: 'doc',
              id: 'extensions/regulatory-crosswalk',
              label: 'Regulatory Crosswalk',
            },
          ],
        },
        {
          type: 'doc',
          id: 'future-of-compliance-infrastructure',
          label: 'Future',
        },
        {
          type: 'doc',
          id: 'glossary',
          label: 'Glossary',
        },
      ],
    },
  ],
};