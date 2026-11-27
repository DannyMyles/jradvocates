import type { Block } from "./types";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  /** Portrait. When missing, a monogram is shown until a photo is supplied. */
  image?: string;
  /** Header photo on the profile page (falls back to a neutral firm image). */
  profileImage?: string;
  /** Headline experience, shown on profile headers and team cards (e.g. "6+ years of experience"). */
  experience?: string;
  /** Academic qualifications, shown on the profile page. */
  qualifications?: { title: string; detail?: string }[];
  /** Awards and recognitions, shown on the profile page. */
  awards?: { year: string; text: string }[];
  /** Direct contact details, shown on the profile page when present. */
  phone?: string;
  email?: string;
  linkedin: string | null;
  /** Optional one-sentence summary shown as the lead; the full `bio` then sits behind "Read full biography". */
  summary?: string;
  bio: Block[];
  highlights: string[];
  timeline: { year: string; text: string }[];
  /** Practice-area slugs. */
  focus: string[];
};

export const team: TeamMember[] = [
  {
    "slug": "josephine-l-m-righa",
    "name": "Josephine L. M. Righa",
    "summary": "Leads the firm’s corporate and commercial practice, and is a certified professional trainer in legal audits and compliance, corporate governance, public-private partnerships and contract management.",
    "role": "Managing Partner",
    "credentials": "CPM (MTI), LL.B, Dip. KSL",
    "image": "/images/team/josephine-righa.jpg",
    "profileImage": "/images/hero/josephine-at-desk.jpg",
    "linkedin": "https://bit.ly/3b4VMmf",
    "bio": [
      {
        "type": "p",
        "text": "Ms. Righa has over 18 years of legal work experience, having graduated in the year 2008 with a Bachelors of Laws Degree from the Catholic University of Eastern Africa. She thereafter worked for Coca-Cola Central East & West Africa Limited as a Legal Assistant for the years 2009 to 2010."
      },
      {
        "type": "p",
        "text": "In the year 2011, Ms. Righa pursued her Bar studies and now holds a Post-Graduate Diploma in Law from Kenya School of Law. She did her pupillage with the firm of Igeria and Ngugi Advocates and was promoted to Associate position upon her admission to the Bar in the year 2012. In the year 2014, she was promoted as a Senior Associate and the head of the Corporate and Commercial Practice of the firm, a position she held until July 2019."
      },
      {
        "type": "p",
        "text": "In 2019, she founded JR Advocates, where she is the Managing Partner. In June 2024, she joined Jaguar Petroleum Limited as COO, doubling up as Head of Legal of the JPL Group structure."
      },
      {
        "type": "p",
        "text": "In addition she is a notary public, commissioner for oaths, a registered Patent Agent of the Kenya Intellectual Property Institute and is currently pursuing a Certified Public Secretaries (CPS) certification."
      },
      {
        "type": "p",
        "text": "She is a certified professional trainer in Legal Audits and Compliance, Corporate Governance, Private Public Partnerships and Contract Management & Administration (specifically trained on Contract Negotiation, Contract Drafting and review, Changes and Variations in Contracts, Dispute Avoidance & Resolution and Contract Administration Overview)."
      },
      {
        "type": "p",
        "text": "Ms. Righa is keen on corporate governance issues and having been professionally trained by the Centre for Corporate Governance (CCG) Kenya and the Institute of Directors (IOD), Kenya, she now is an Associate Member of IOD-Kenya."
      },
      {
        "type": "p",
        "text": "Ms. Righa is further a certified professional mediator having been professionally trained by Mediation Training Institute (I) East Africa to mediate disputes in a variety of spheres including but not limited to commercial, workplace, community and family disputes."
      }
    ],
    "highlights": [
      "Notary Public",
      "Commissioner for Oaths",
      "Registered Patent Agent (KIPI)",
      "Certified Professional Mediator (MTI East Africa)",
      "Associate Member, IOD-Kenya"
    ],
    "timeline": [
      {
        "year": "2024 – To date",
        "text": "COO / Head of Legal, Jaguar Petroleum Limited"
      },
      {
        "year": "2019 – To date",
        "text": "Founder and Managing Partner, JR Advocates"
      },
      {
        "year": "2014 – 2019",
        "text": "Senior Associate and Head of Corporate and Commercial Practice, Igeria & Ngugi Advocates"
      },
      {
        "year": "2012 – 2014",
        "text": "Associate, Igeria & Ngugi Advocates"
      },
      {
        "year": "2009 – 2010",
        "text": "Legal Assistant, Coca-Cola Central East & West Africa Limited"
      }
    ],
    "focus": [],
    "experience": "18+ years of legal work experience",
    "qualifications": [
      {
        "title": "LL.B",
        "detail": "Bachelor of Laws, Catholic University of Eastern Africa (2008)"
      },
      {
        "title": "Dip. KSL",
        "detail": "Post-Graduate Diploma in Law, Kenya School of Law (2011)"
      }
    ],
    "awards": [
      {
        "year": "2023",
        "text": "Nominated, Commercial Practitioner of the Year, Nairobi Legal Awards"
      },
      {
        "year": "2023",
        "text": "Recognised among the Top 100 Commercial Lawyers in Kenya, The Lawyer Africa"
      }
    ]
  },
  {
    "slug": "joan-musyoka",
    "name": "Joan Musyoka",
    "role": "Senior Associate",
    "credentials": "",
    "phone": "+254 704 121708",
    "linkedin": null,
    "bio": [],
    "highlights": [],
    "timeline": [],
    "focus": [],
    "experience": "6+ years of experience"
  },
  {
    "slug": "geoffrey-gitau",
    "name": "CPA Geoffrey Gitau",
    "role": "Financial and Tax Consultant",
    "credentials": "CPA",
    "image": "/images/team/geoffrey-gitau.jpg",
    "profileImage": "/images/team/geoffrey-gitau.jpg",
    "linkedin": "https://bit.ly/3vM0NrD",
    "bio": [
      {
        "type": "p",
        "text": "JR Advocates specializes mainly in corporate and commercial transactions that require the expertise of a qualified finance, tax law, planning and compliance consultant and adviser."
      },
      {
        "type": "p",
        "text": "CPA Gitau, also the Founder and Managing Partner of Geoffrey Gitau & Co. Certified Public Accountants, serves our clients – corporates and individuals alike – and gives unmatched tax law, planning and compliance advisory services by staying current on new tax law and positioning taxpayers for short and long term tax optimization."
      },
      {
        "type": "p",
        "text": "He works closely with JR Advocates and its clients throughout the year to ensure client tax liability is minimized."
      },
      {
        "type": "p",
        "text": "CPA Gitau, has over 14 years’ wealth of experience in Accounting, Auditing, Tax Advisory and Finance and can efficiently explain tax laws and strategies in a way that is accessible and easy for JR Advocates clients to understand."
      },
      {
        "type": "p",
        "text": "He has served clients in a wide range of sectors and has been able to conducting research on tax laws, advise clients on any changes in tax law, strategizing with clients to minimize tax liability, communicating with clients to explain tax issues, taxation in estate planning and further keeping all clients compliant with their tax obligations."
      }
    ],
    "highlights": [],
    "timeline": [],
    "focus": [
      "banking-and-finance",
      "investments-law"
    ],
    "experience": "6+ years of experience"
  },
  {
    "slug": "salome-n-kariuki-relationship-manager",
    "name": "Salome N. Kariuki",
    "role": "Relationship Manager",
    "credentials": "",
    "image": "/images/team/salome-kariuki.jpg",
    "profileImage": "/images/team/salome-kariuki.jpg",
    "linkedin": "https://bit.ly/3nZLKrO",
    "bio": [
      {
        "type": "p",
        "text": "Ms. Kariuki is a personable and astute relationship manager with over 10 years’ experience working in busy legal environments. The highly organized professional has excelled in providing unparalleled support to cross-functional teams with the aim to increase customer satisfaction through process improvements."
      },
      {
        "type": "p",
        "text": "She holds a Diploma in Business Management from Kenya Institute of Management (KIM) and a Degree in International Relations from the Kenya Methodist University (KeMU)."
      },
      {
        "type": "p",
        "text": "To keep up with the growing demand for different competences in the work environment, Ms. Kariuki has undertaken professional courses such as Effective PA & Office Administrator Course by Training & Consulting Associates Ltd (TCA) Customer Care Course by Eastern Africa Career & Technical Institute (EACATI), Presentation Skills Course by Soft Skills Limited and Personal Assistant for Law Firms Course by Distribution Management Systems; Business Consultants Trainers Limited (DMS)."
      },
      {
        "type": "p",
        "text": "From the year 2011 to 2020, she worked for the Firm of Igeria & Ngugi Advocates as a receptionist and office administrator. She had previously worked as an assistant administrator at the Firm of Mohammed Kinyanjui Advocates. The two positions held for over 14 years allowed her to amass unmatchable experience in business operations management."
      },
      {
        "type": "p",
        "text": "At JRA, Ms. Kariuki is charged with Client Relationship Management; Business Development; Human Resource Management; Supplier and Service Provider Management among others."
      },
      {
        "type": "p",
        "text": "Key Competenc ies: Customer Relationship Management (CRM), Project Management, Facility Management (FM), Operations Management, Office Administration, Leadership, Entrepreneurship and Conflict Management"
      }
    ],
    "highlights": [],
    "timeline": [],
    "focus": [],
    "experience": "6+ years of experience"
  }
];

export function getTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
