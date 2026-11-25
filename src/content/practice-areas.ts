import type { Block, PracticeGroup } from "./types";

export type PracticeArea = {
  slug: string;
  title: string;
  group: PracticeGroup;
  /** Short card copy. The full text in `body` is the firm's existing page content. */
  summary: string;
  image: string;
  body: Block[];
  /**
   * "How we help" cards. When omitted, the first list in `body` is used instead.
   * Every entry here comes from the firm's own text for that area.
   */
  helps?: { title: string; text?: string }[];
  /** Optional FAQ accordion; the section is hidden when empty. Answers must come from the firm. */
  faqs?: { q: string; a: string }[];
};

export const practiceGroups: { id: PracticeGroup; label: string; short: string }[] = [
  { id: "corporate", label: "Corporate and Commercial", short: "Corporate" },
  { id: "finance", label: "Finance and Investment", short: "Finance" },
  { id: "people", label: "People and Property", short: "People & Property" },
  { id: "advisory", label: "Advisory and Resolution", short: "Advisory" },
];

export const practiceAreas: PracticeArea[] = [
  {
    "slug": "business-formation-and-compliance",
    "title": "Business Formation and Compliance",
    "group": "corporate",
    "summary": "Company incorporation, registrations and ongoing statutory compliance.",
    "image": "/images/practice/business-formation-and-compliance.jpg",
    "body": [
      {
        "type": "p",
        "text": "We have vast knowledge and expertise in the following areas:"
      },
      {
        "type": "ul",
        "items": [
          "Setting up legal entities be it sole proprietors, companies limited by shares, public companies, limited liability partnerships, companies limited by guarantees, NGOs, societies, micro savings groups (Chamas’), foreign branch offices or subsidiaries, to mention but a few.",
          "Compliance and company secretarial: JR Advocates also provides compliance and company secretarial services to any trading entity: – be it effecting resignation or appointments of officials, increase of share capital, allotment and transfer of shares, drafting and filing of annual returns, restructures, procuring of CR12’s or any other compliance issues required.",
          "Insolvency and winding down of companies."
        ]
      }
    ]
  },
  {
    "slug": "corporate-governance-advisory",
    "title": "Corporate Governance Advisory",
    "group": "corporate",
    "summary": "Board structures, charters and governance frameworks.",
    "image": "/images/practice/corporate-governance-advisory.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates understands the various mechanisms, relations, and processes by which an organization is controlled and directed. Corporate governance involves balancing the various interests of stakeholders in any organization."
      },
      {
        "type": "p",
        "text": "Some of our advocates have been professionally trained by the Center of Corporate Governance and the Institute of Directors to provide unmatched guidance and advisory services to boards of directors, board committees and the management of a company."
      },
      {
        "type": "p",
        "text": "Our corporate governance services cover a wide scope ranging from:"
      },
      {
        "type": "ul",
        "items": [
          "Drafting of board charters and related documents",
          "Providing company secretarial services to boards",
          "Advising boards, committees, management and leadership as relates to their legal and fiduciary obligations",
          "Sitting as your legal advisers in the Board of Directors",
          "Governance audits",
          "Dispute resolution as may arise from time to time."
        ]
      }
    ]
  },
  {
    "slug": "audits-hr-legal-and-corporate-governance",
    "title": "Audits – HR, Legal and Corporate Governance",
    "group": "corporate",
    "summary": "Independent HR, legal and governance audits that surface risk early.",
    "image": "/images/practice/audits-hr-legal-and-corporate-governance.jpg",
    "body": [
      {
        "type": "p",
        "text": "With our vast expertise, JR Advocates are well trained and equipped to execute the audits below:"
      }
    ],
    "helps": [
      {
        "title": "Legal Audit",
        "text": "A thorough appraisal of an organization’s operations to determine its compliance with the laws and regulations that apply to it. JR Advocates does check the company’s performance against the legal compliance standards and identify areas where an organization needs to adhereto in a bid to minimize the possibility of legal issues disrupting an organization’s effectiveness and growth."
      },
      {
        "title": "HR Audit",
        "text": "This is limited only to the HR function of a company. Together with our certified HR consultant, JR Advocates shall review the current human resources policies, procedures, documentation and systems to identify needs for improvement and enhancement of the HR function as well as to assess compliance with the ever-changing rules and regulations."
      },
      {
        "title": "Corporate Governance Audit",
        "text": "Limited to the governance of an organization, JR Advocates does an objective review of how an organization’s governance structure and operations in a bid to assess whether there are in place adequate checks and balances for effective governance."
      }
    ]
  },
  {
    "slug": "contract-negotiation-drafting-and-management",
    "title": "Contract Negotiation, Drafting and Management",
    "group": "corporate",
    "summary": "Clear agreements, negotiated and managed end to end.",
    "image": "/images/practice/contract-negotiation-drafting-and-management.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates have been professionally trained in the areas of contract negotiation, drafting and management."
      },
      {
        "type": "p",
        "text": "We have the expertise to negotiate and draft any kind of agreements. We believe that contracts are drafted for the rainy days and as such ensure that the terms negotiated and the eventual agreement drafted do not only cover your current legal and commercial interests. Our expertise and vast knowledge enables us to foresee what is likely to be an issue and give you solutions to mitigate the risks now."
      },
      {
        "type": "p",
        "text": "We further monitor the performance of a signed contract until close-out. And should there be any dispute ensuing from any agreement, the team at JR Advocates is equipped to offer dispute resolution services whilst ensuring minimum exposure to your business."
      }
    ],
    "helps": [
      {
        "title": "Negotiating and drafting agreements"
      },
      {
        "title": "Monitoring performance until close-out"
      },
      {
        "title": "Resolving contract disputes"
      }
    ]
  },
  {
    "slug": "investments-law",
    "title": "Investments Law",
    "group": "finance",
    "summary": "Advising foreign investors entering and growing in the Kenyan market.",
    "image": "/images/practice/investments-law.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates serves a foreign investors clientele looking to invest in the Kenya market. Our Advocates are knowledgeable in several practice areas which is critical knowledge in advising foreigners looking to invest in Kenya- business formation; tax law; compliance and regulatory legal framework; immigration laws; contract negotiation, drafting, and management; finance and debt structuring; joint ventures; property laws among others. In whichever industry or sector you wish to come and invest in Kenya, we shall walk with you as your legal advisors."
      }
    ],
    "helps": [
      {
        "title": "Business formation"
      },
      {
        "title": "Tax law"
      },
      {
        "title": "Compliance and regulatory legal framework"
      },
      {
        "title": "Immigration laws"
      },
      {
        "title": "Contract negotiation, drafting, and management"
      },
      {
        "title": "Finance and debt structuring"
      },
      {
        "title": "Joint ventures"
      },
      {
        "title": "Property laws"
      }
    ]
  },
  {
    "slug": "banking-and-finance",
    "title": "Banking and Finance",
    "group": "finance",
    "summary": "Securities, trade, consumer, asset and real estate finance.",
    "image": "/images/practice/banking-and-finance.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates represents both finance providers and users and thus our clients benefit from a legal counsel that deeply understands the specific needs and interests of each party. The services we offer include support in the areas below:"
      },
      {
        "type": "ul",
        "items": [
          "Perfection of securities",
          "Due diligence on banking securities",
          "Trade finance",
          "Consumer finance",
          "Asset-based lending",
          "Asset finance",
          "Fund finance",
          "Real estate finance"
        ]
      }
    ]
  },
  {
    "slug": "intellectual-property",
    "title": "Intellectual Property",
    "group": "finance",
    "summary": "Protecting trademarks, copyright, patents and innovation.",
    "image": "/images/practice/intellectual-property.jpg",
    "body": [
      {
        "type": "p",
        "text": "We live in a fast-paced world – technology, inventions, and innovation have become a critical aspect of our businesses."
      },
      {
        "type": "p",
        "text": "JR Advocates understands the invaluable nature of any creation of your mind be it product and service innovations and inventions, literary and artistic works, or trade names and marks including your logo."
      },
      {
        "type": "p",
        "text": "We are knowledgeable and experienced legal advisers who understand the different legal solutions required to protect the various creations. Our Intellectual Property services include: –"
      },
      {
        "type": "ul",
        "items": [
          "IP due diligence",
          "Trademark protection and renewals",
          "Patent protection",
          "Industrial Designs protection",
          "Copyright protection",
          "Franchising"
        ]
      },
      {
        "type": "p",
        "text": "We act for both local and international clients looking for national protection in Kenya and other countries in Africa through our established network of associate agent law firms."
      }
    ]
  },
  {
    "slug": "labor-relations-and-employment-law",
    "title": "Labor Relations and Employment Law",
    "group": "people",
    "summary": "Advice for employers and employees on rights and obligations.",
    "image": "/images/practice/labor-relations-and-employment-law.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates understands the Employment and Labor Relations laws of Kenya and the rights, obligations, duties, and responsibilities of the employer and the employee. We can advise and engage for either the employer or the employee in any employment and labor matters."
      },
      {
        "type": "p",
        "text": "Our services under this practice include:"
      },
      {
        "type": "ul",
        "items": [
          "Drafting of the HR Manual",
          "Drafting of appointment letters, letters of offer and employment contracts",
          "Termination of employment on any legal grounds including redundancy, summary dismissal, winding down of a company etc.",
          "Advisory on benefits and packages as per the Kenyan employment and labor laws",
          "Dispute resolution"
        ]
      }
    ]
  },
  {
    "slug": "immigration-law",
    "title": "Immigration Law",
    "group": "people",
    "summary": "Work permits, residency and the right legal status for clients and dependants.",
    "image": "/images/practice/immigration-law.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates has a vast foreign client portfolio and is engaged in the provision of direct service work to help our clients and their dependents to go through the right steps in obtaining the legal right to work or stay in the Republic of Kenya. Our services include the application and procuring of:"
      },
      {
        "type": "ul",
        "items": [
          "Work Permits",
          "Investor Permits",
          "Kenya Revenue Authority Personal Identification Numbers (KRA PINs)"
        ]
      },
      {
        "type": "ul",
        "items": [
          "Special Passes",
          "Dependant Passes",
          "Alien Cards"
        ]
      }
    ]
  },
  {
    "slug": "property-and-real-estate",
    "title": "Property and Real Estate",
    "group": "people",
    "summary": "Conveyancing, leases, sectional titles and real estate transactions.",
    "image": "/images/practice/property-and-real-estate.jpg",
    "body": [
      {
        "type": "p",
        "text": "We live in a competitive real estate market, and having a legal partner who understands the dynamics, the market and the law is an integral part of your business. JR Advocates is such a legal partner – whether you are a developer, land owner, financier, investor, tenant, landlord, purchaser or seller."
      },
      {
        "type": "p",
        "text": "Our expertise and services include:"
      },
      {
        "type": "ul",
        "items": [
          "Legal and tax advisory and consultation",
          "Contract negotiation and drafting",
          "Dispute resolution",
          "Purchase and sale of property",
          "Tenant and landlord relationships",
          "Leasing and Sub-Leasing of property",
          "Joint Ventures",
          "Land User",
          "Debt structuring",
          "Corporate structuring",
          "Property Management",
          "Acquisition and disposition of units",
          "Environmental, regulatory and legal compliance"
        ]
      }
    ]
  },
  {
    "slug": "family-law-and-estate-planning",
    "title": "Family Law and Estate Planning",
    "group": "people",
    "summary": "Protecting family wealth through wills, trusts and succession.",
    "image": "/images/practice/family-law-and-estate-planning.jpg",
    "body": [
      {
        "type": "p",
        "text": "This is a personalized service offered to individuals and families looking to protect their wealth and estates. By engaging JR Advocates, you shall benefit from a legal counsel who is also a confidante, whom you can fully trust, reach anytime and rely on to keep confidential the conversations and nature of engagement."
      },
      {
        "type": "p",
        "text": "Our expertise ranges from:"
      },
      {
        "type": "ul",
        "items": [
          "Advisory and consultancy on estate planning;",
          "Tax planning and advisory services;",
          "Registration of trusts;",
          "Drafting and safekeeping of wills and codicils;",
          "Advisory on asset protection and business succession planning;",
          "Succession – probate and administration;",
          "Fiduciary accounting services;",
          "Powers of attorney;",
          "Parental Responsibility Agreements;",
          "Child adoption and guardianship."
        ]
      }
    ]
  },
  {
    "slug": "general-legal-advisory-consultations-and-research",
    "title": "General Legal Advisory, Consultations and Research",
    "group": "advisory",
    "summary": "Timely legal advice, consultation and research across sectors.",
    "image": "/images/practice/general-legal-advisory-consultations-and-research.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates has professionally trained advocates who offer timely, satisfactory legal advisory, consultation and research to clients in the various industries and sectors."
      }
    ]
  },
  {
    "slug": "mediation",
    "title": "Mediation",
    "group": "advisory",
    "summary": "Resolving disputes privately with certified professional mediators.",
    "image": "/images/practice/mediation.png",
    "body": [
      {
        "type": "p",
        "text": "Mediation is a party-centered voluntary alternative dispute resolution mechanism in which the disputants bring their dispute to a neutral third party, the mediator who focusing primarily on the needs, rights and interests of the disputants, facilitates the disputants in reaching a mutually agreed resolution. The role of a mediator is purely facilitative to ensure the parties themselves reach their desired settlement."
      },
      {
        "type": "p",
        "text": "At JR Advocates, our advocates are further certified professional mediators having been professionally trained by Mediation Training Institute (I) East Africa to mediate disputes in a variety of spheres including but not limited to commercial, workplace, community and family disputes."
      }
    ],
    "helps": [
      {
        "title": "Commercial disputes"
      },
      {
        "title": "Workplace disputes"
      },
      {
        "title": "Community disputes"
      },
      {
        "title": "Family disputes"
      }
    ]
  },
  {
    "slug": "notary-services",
    "title": "Notary Services",
    "group": "advisory",
    "summary": "Authenticating business and transactional documents for use in and outside Kenya.",
    "image": "/images/practice/notary-services.jpg",
    "body": [
      {
        "type": "p",
        "text": "At JR Advocates, we have our advocates admitted as notaries public. We help authenticate various business and transactional documents for use by a third party whether in or outside the Republic of Kenya."
      }
    ]
  },
  {
    "slug": "training",
    "title": "Training",
    "group": "advisory",
    "summary": "Tailor-made legal and governance training for teams and individuals.",
    "image": "/images/practice/training.jpg",
    "body": [
      {
        "type": "p",
        "text": "JR Advocates is passionate about sharing knowledge and can offer tailor-made and personalized trainings on the below areas of practice, whether to a group or privately to individuals:"
      },
      {
        "type": "ul",
        "items": [
          "Estate planning and management",
          "Property acquisition and disposal",
          "Employment and Labor Laws",
          "Contract drafting and reviews process; among others"
        ]
      }
    ]
  }
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
