import type { Block } from "./types";

export type InsightCategory = "updates-announcements" | "opinions-and-analysis";

export type Insight = {
  slug: string;
  category: InsightCategory;
  title: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  image: string;
  readingMinutes: number;
  /** Related practice-area slug, used for the article's call to action. */
  practiceArea?: string | null;
  body: Block[];
};

export const insightCategories: { id: InsightCategory; label: string; short: string; tab: string }[] = [
  { id: "updates-announcements", label: "Updates and Announcements", short: "Update", tab: "Updates" },
  { id: "opinions-and-analysis", label: "Opinions and Analysis", short: "Analysis", tab: "Analysis" },
];

/** Newest first. Content is the firm's existing articles. */
export const insights: Insight[] = [
  {
    "slug": "nairobi-legal-award-2023-commercial-practitioner-of-the-year",
    "category": "updates-announcements",
    "title": "Nairobi Legal Awards 2023: nominated for Commercial Practitioner of the Year",
    "date": "2023-08-30",
    "image": "/images/team/josephine-righa-2023.jpg",
    "readingMinutes": 1,
    "practiceArea": null,
    "body": [
      {
        "type": "p",
        "text": "JR Advocates wishes to congratulate Ms. Josephine Righa for her nomination as the Commercial Practitioner of the year 2023 by the Nairobi Legal Awards. Your unwavering focus, diligence, and commitment have led you to this remarkable achievement."
      },
      {
        "type": "p",
        "text": "This nomination reflects your dedication, passion, focus and you deserve every bit of success that comes your way. We wish you continued success and fulfillment in all your future endeavors. Congratulations!"
      }
    ]
  },
  {
    "slug": "the-lawyer-africa-top-100-commercial-lawyers-in-kenya-in-2023",
    "category": "updates-announcements",
    "title": "The Lawyer Africa: Top 100 Commercial Lawyers in Kenya 2023",
    "date": "2023-06-21",
    "image": "/images/team/josephine-righa.jpg",
    "readingMinutes": 1,
    "practiceArea": null,
    "body": [
      {
        "type": "p",
        "text": "JR Advocates would like to honour and recognize our Managing Partner, Ms. Josephine Righa for being recognized by The Lawyer Africa as being among the top 100 commercial lawyers in Kenya in this year 2023!"
      }
    ]
  },
  {
    "slug": "law-of-succession-amendment-to-the-law-of-succession-act-section-29-on-dependants",
    "category": "updates-announcements",
    "title": "Law of Succession: amendment to Section 29 of the Act (on dependants)",
    "date": "2021-11-26",
    "image": "/images/insights/succession.jpg",
    "readingMinutes": 1,
    "practiceArea": "family-law-and-estate-planning",
    "body": [
      {
        "type": "p",
        "text": "DID YOU KNOW that the President, HE Uhuru Kenyatta assented to the Law of Succession (Amendment) Bill, an amendment to Section 29 of the Succession Act in bid to streamline the administration of succession matters?"
      },
      {
        "type": "p",
        "text": "According to the Memorandum of objects, the reason for this amendment is “to lock out opportunistic schemers from successfully claiming a stake in the deceased property and disenfranchising the legitimate heirs”."
      },
      {
        "type": "p",
        "text": "This amendment in law now further constricts the dependants entitled to inherit property to only spouses (as recognized under the Marriage Act, 2014) and the children of the deceased whether or not maintained by the deceased prior to their death. This means that former wife/wives and/or divorcees will no longer be entitled to a claim of their deceased former spouses’ property. In addition, secret wives, stepchildren, half brothers and sisters as well as distant dependants will no longer have a right to inheritance in the event of a benefactor’s death."
      },
      {
        "type": "p",
        "text": "To further note, this amendment now provides that a person not qualifying as a dependant according to the Act, will have to prove that he/she was maintained by the deceased for a period of two (2) years prior to the deceased’s death in order to qualify as a dependant."
      },
      {
        "type": "p",
        "text": "Now you know! Should you wish to engage us further on this subject, please do not hesitate to reach us on enquiries@jradvocates.com."
      }
    ]
  },
  {
    "slug": "conversion-of-long-term-leases-registered-based-on-architectural-drawings-to-conform-to-the-sectional-properties-act-2020-and-the-land-registration-act-2012",
    "category": "updates-announcements",
    "title": "Converting long-term leases to conform to the Sectional Properties Act, 2020 and the Land Registration Act, 2012",
    "date": "2021-05-11",
    "image": "/images/practice/general-legal-advisory-consultations-and-research.jpg",
    "readingMinutes": 1,
    "practiceArea": "property-and-real-estate",
    "body": [
      {
        "type": "p",
        "text": "Following the enactment of the Sectional Properties Act no.21 of 2020) on 11th December 2020, the Ministry of Lands and Physical Planning put out a public notice calling for the conversion of all long term subleases intended to confer ownership of apartments, flats, maisonettes, townhouses, villas, godowns or offices that do not conform to section 54(5) of the Land Registration Act, 2012 which states that ‘the Registrar shall register long-term leases and issue certificates of lease over apartments, flats, maisonettes, townhouses or offices having the effect of conferring ownership, if the property comprised is properly geo-referenced and approved by the statutory body responsible for the survey of land.’"
      },
      {
        "type": "p",
        "text": "The Ministry of Lands and physical planning has embarked on the process of conversion of long-term leases registered based on architectural drawings to conform to the Sectional Properties Act, 2020 and the Land Registration Act, 2012."
      },
      {
        "type": "p",
        "text": "The following documents are required to facilitate the process of conversion: i. Sectional plan ii. Original title iii. Long term lease previously registered iv. Rent apportionment for the unit where applicable"
      },
      {
        "type": "p",
        "text": "Upon conversion and/or registration, the original registers shall be closed and new registers opened with respect to each of the units on the plan."
      },
      {
        "type": "p",
        "text": "No additional costs on stamp duty shall be incurred by the owner(s) of the property if they had paid the requisite stamp duty fees when registering the long-term leases."
      },
      {
        "type": "p",
        "text": "Should you be among those affected by this new law, kindly contact us via legal@jradvocates.com for assistance in conversion."
      }
    ]
  },
  {
    "slug": "disclosure-of-company-beneficial-ownership-information",
    "category": "updates-announcements",
    "title": "Disclosure of company beneficial ownership information",
    "date": "2020-12-09",
    "image": "/images/insights/compliance.jpg",
    "readingMinutes": 1,
    "practiceArea": "business-formation-and-compliance",
    "body": [
      {
        "type": "p",
        "text": "There is a new company regulation that requires all companies to lodge with the Registrar of companies by the 31st of January 2021, a list of its beneficial owners i.e. the ultimate natural persons who own and control a Company."
      },
      {
        "type": "p",
        "text": "The Regulations define a beneficial owner as a person who:"
      },
      {
        "type": "ol",
        "items": [
          "holds at least 10% of the issued shares in the company either directly or indirectly;",
          "exercises at least 10% of the voting rights in the company;",
          "holds a right to directly or indirectly appoint or remove a director of the company; OR",
          "exercises significant influence or control over the company (participation in the finances and financial policies of a company without necessarily having full control over them)"
        ]
      },
      {
        "type": "p",
        "text": "Though the regulations are meant to disclose the owners of companies that own companies and nominee shareholders, please be advised that even companies owned by natural persons are required to comply with this regulation and also update the Beneficial Owners (BO) register anyway."
      },
      {
        "type": "p",
        "text": "Be advised that failure to comply with this Regulation will attract a fine of up to KES. 500,000/- for each officer of the company in default and a possibility of KES. 50,000/- penalty for each day in default if the default continues."
      },
      {
        "type": "p",
        "text": "Please do reach out to us on enquiries@jradvocates.com so we can help keep your company compliant."
      }
    ]
  },
  {
    "slug": "setting-up-of-a-trust-in-kenya",
    "category": "opinions-and-analysis",
    "title": "Setting up a trust in Kenya",
    "date": "2020-09-19",
    "image": "/images/insights/setting-up-of-a-trust-in-kenya.jpg",
    "readingMinutes": 2,
    "practiceArea": "family-law-and-estate-planning",
    "body": [
      {
        "type": "p",
        "text": "General Process:"
      },
      {
        "type": "ol",
        "items": [
          "Preparation of the Trust Deed by the advocate;"
        ]
      },
      {
        "type": "p",
        "text": "The Trust deed shall contain the following pertinent information: name and objectives of the Trust, full names and addresses of the Trustees and their powers thereto. Thereafter it must be signed by all the Trustees."
      },
      {
        "type": "ol",
        "items": [
          "Payment of Stamp Duty;"
        ]
      },
      {
        "type": "p",
        "text": "After preparation of the Trust Deep and the document being signed appropriately by the Trustees. The Trust Document is submitted for Stamp duty."
      },
      {
        "type": "ol",
        "items": [
          "Registration under the Registry of Documents Act;"
        ]
      },
      {
        "type": "p",
        "text": "The trustees can commence implementing the objects of the trust as a simple trust i.e. a duly executed trust deed once registration has been finalized at the Registry of Documents at Ardhi House."
      },
      {
        "type": "ol",
        "items": [
          "Incorporation under the Perpetual Successions Act;"
        ]
      },
      {
        "type": "p",
        "text": "After step (c) above, the advocate shall lodge with the Minister of Lands, a Certified copy of the trust deed and a petition for incorporation prepared in the prescribed form. The process takes an average of 7-10 months to procure the Certificate of Incorporation of the trust."
      },
      {
        "type": "p",
        "text": "Why Go a Further Step to Incorporation a Trust:"
      },
      {
        "type": "p",
        "text": "Once a Trust is incorporated under the Trustees (Perpetual Succession) Act Chapter 164 of the Laws of Kenya, the trustees shall thereupon become a body corporate by the name described in the certificate, and the Trust shall be able to:"
      },
      {
        "type": "ol",
        "items": [
          "have perpetual succession and a common seal;",
          "power to sue and be sued in their corporate name; and,",
          "subject to the conditions and directions contained in the certificate, to hold and acquire, and by instruments under the common seal to convey, transfer, assign, charge and demise any movable or immovable property or any interest therein now or hereafter belonging to, or held for the benefit of, the trust concerned in the same manner and subject to such restrictions and provisions as trustees might so do without incorporation”."
        ]
      },
      {
        "type": "p",
        "text": "Another advantage is that the Income Tax Act provides that the income of a registered trust is exempted from taxation. The Finance Act 2006 further provides that any contributions made from a tax exempt entity shall be exempt from tax – this mainly applies for charitable trusts and one has to apply to the Minister to be exempt from paying taxes."
      },
      {
        "type": "p",
        "text": "Further, charitable trusts are exempted from paying land rates payable on its immovable properties and also are exempted on stamp duty when buying land and property;"
      },
      {
        "type": "p",
        "text": "In addition, since charities are widely recognized as existing for social good this shall attract and aid in fundraising. To note, organizations with charitable status cannot use assets for any purpose other than the pursuit of charitable objectives. The assets of a charity can never be used for private benefit."
      },
      {
        "type": "p",
        "text": "Cons to Note in the Process of the Incorporation of a Trust:"
      },
      {
        "type": "ol",
        "items": [
          "The process is quite lengthy especially the second stage which is the incorporation of the Trust as this may take more than 6 months;",
          "The paperwork is tedious;",
          "The process is costly compared to say; incorporating a company;",
          "Individuals on the board of a charity, often referred to as trustees, must not be paid unless the constitution of a charity, authorizes it;",
          "Charities cannot raise equity investment."
        ]
      },
      {
        "type": "p",
        "text": "Costs and Requirements:"
      },
      {
        "type": "p",
        "text": "Should you be interested to work with us, please contact us on enquiries@jradvocates.com for any further information."
      }
    ]
  },
  {
    "slug": "process-of-registration-of-trademarks-in-kenya",
    "category": "opinions-and-analysis",
    "title": "The process of registering trademarks in Kenya",
    "date": "2020-09-19",
    "image": "/images/insights/trademarks.jpg",
    "readingMinutes": 2,
    "practiceArea": "intellectual-property",
    "body": [
      {
        "type": "p",
        "text": "In Kenya, trademarks are registered under KIPI – Kenya Intelelctual Property Institute, and the general procedure is as follows:"
      },
      {
        "type": "ol",
        "items": [
          "Name Search: Before applying for the registration of a trade mark, an applicant should conduct a search to find out whether the trademark is registrable or not and also whether there exists in the records a trademark which could be confused with the intended trade mark."
        ]
      },
      {
        "type": "ol",
        "items": [
          "Application for registration: A person claiming to be the proprietor of a trade mark, used or proposed to be used by him, and who is desirous of registering it should apply to the Registrar onthe requisite forms accompanied by seven (7) representations of the mark."
        ]
      },
      {
        "type": "ol",
        "items": [
          "Examination: Once the Application for registration is received, it then proceeds for examination. The mark will undergo three types of examination:"
        ]
      },
      {
        "type": "ol",
        "items": [
          "Formality examination:this involves finding out whether the right documents are filed, whether the forms included are properly filled, and the required fees is appropriately paid.",
          "Search:A Search is conducted to ascertain that there is no similar or closely resembling mark is on the register, otherwise the present application can be refused on that ground. If there exists a similar mark from the same applicant ordinarily an association is requested."
        ]
      },
      {
        "type": "ul",
        "items": [
          "Substantive examination:During substantive examination, the mark is examined as to its distinctiveness."
        ]
      },
      {
        "type": "p",
        "text": "Once the examination is complete KIPI will then communicate to the applicant or the Agent of the approval or disapproval. Incase of approval, the mark proceeds to advertisement. Incase of disapproval, one may appeal against the decision or abandon the application."
      },
      {
        "type": "ol",
        "items": [
          "Advertisement: Once the Application accepted, advertisement is the next step. The Trade mark is advertised in the KIPI Journal (which is published monthly). This is to allow any interested party an opportunity to raise objections to the pending application prior to registration."
        ]
      },
      {
        "type": "ol",
        "items": [
          "Opposition: Any aggrieved party with valid grounds may oppose the registration of a trade mark so advertised in the Kenya Gazette. An opposition must be made within 60 days of the publication date, by filing a statement of opposition."
        ]
      },
      {
        "type": "ol",
        "items": [
          "Registration: If there is no opposition to the trade mark after the statutory 60 days period from the date of advertisement, or if an opposition has been decided in the applicants favour, the application will be registered and the Institute will issue a Certificate of Registration and enter the registration."
        ]
      },
      {
        "type": "p",
        "text": "Please however note that despite the lengthy process, the mark is deemed registered as of the date of the application for registration, and that date is deemed to be the date of registration. However pelase note once the Mark goes through the examination stage, another entity cannot then lodge the same mark for registeration. It shall be deemed to be unavailable for registeration for any subsequent entities."
      },
      {
        "type": "p",
        "text": "A trade mark registration is valid for ten (10) years from the date of application. Six (6) months prior to the expiry of the ten (10) years, the registrar will notify the owner of the trade mark of the imminent expiry of the concerned trademark. The owner may then apply for a renewal which covers the next ten (10) years and the renewal can continue every ten (10) years thereafter upon payment of the requisite renewal fee."
      },
      {
        "type": "p",
        "text": "Costs and requirements:"
      },
      {
        "type": "p",
        "text": "Should you be interested in working with us, please contact us on enquiries@jradvocates.com for further information."
      }
    ]
  },
  {
    "slug": "registeration-of-copyright-works-in-kenya",
    "category": "opinions-and-analysis",
    "title": "Registering copyright works in Kenya",
    "date": "2020-09-19",
    "image": "/images/insights/copyright.jpg",
    "readingMinutes": 1,
    "practiceArea": "intellectual-property",
    "body": [
      {
        "type": "p",
        "text": "The Kenya Copyright Board (KECOBO) registers copyright works of musical, audio visual, literary and artistic nature."
      },
      {
        "type": "ul",
        "items": [
          "The work must be of original authorship.",
          "The work should also be in tangible format, including digital format",
          "Two copies (one if in digital format) of the work should be submitted with the application form"
        ]
      },
      {
        "type": "p",
        "text": "Copyright lasts for the lifetime of the owner plus fifty (50) years."
      },
      {
        "type": "p",
        "text": "The KECOBO registers copyright works under the following categories; Musical, Audio Visual, Literary and Artistic. Only original musical, literary, artistic, audio visual works, sound recordings and broadcasts shall be eligible for copyright protection. Original authorship in the Copyright sense means that the work must not have been copied from somebody else."
      },
      {
        "type": "p",
        "text": "General Registration Process:"
      },
      {
        "type": "ol",
        "items": [
          "Step 1: We shall aid you in filling in and finalization of the prescribed registration forms.",
          "Step 2: Attach two original copies of the work.",
          "Step 3: Payment of the prescribed registration fee in KECOBO’s bank account or pay the fees via their Paybill Mpesa option.",
          "Step 4: Presentation of the evidence of payment of the prescribed fees together with the duly filled and commissioned registration forms and two (2) original copies of the works at KECOBO.",
          "Step 5: Follow up with KECOBO until we receive the certificate of registration."
        ]
      },
      {
        "type": "p",
        "text": "Timelines:"
      },
      {
        "type": "p",
        "text": "The original “Certificate of Registration” will be issued within 7-10 days from the date of registration. This allow for a rigorous process of verification of the copyright works offered for registration and it is done by KECOBO’s Legal Department."
      },
      {
        "type": "p",
        "text": "Costs and Requirements:"
      },
      {
        "type": "p",
        "text": "Should you be interested to work with us, please contact us on enquiries@jradvocates.com for any further information."
      }
    ]
  },
  {
    "slug": "registeration-of-a-not-for-profit-entity-in-kenya-as-an-ngo-vis-a-vis-a-company-limited-by-guarantee",
    "category": "opinions-and-analysis",
    "title": "Registering a not-for-profit in Kenya: NGO or company limited by guarantee?",
    "date": "2020-09-19",
    "image": "/images/insights/registration.jpg",
    "readingMinutes": 5,
    "practiceArea": "business-formation-and-compliance",
    "body": [
      {
        "type": "p",
        "text": "Kenya is a Commonwealth country with a common law system. The two main ways in which to register a not-for-profit organization (“NPOs”) in Kenya are as below:"
      },
      {
        "type": "ol",
        "items": [
          "Non-Governmental Organizations (NGOs); and",
          "Companies Limited by Guarantee;"
        ]
      },
      {
        "type": "p",
        "text": "The major difference between an NGO and a Company limited by guarantee is that the latter is allowed to engage in trading activities not for profit but rather for the sustenance of the business objectives whereas the former is not."
      },
      {
        "type": "p",
        "text": "Before delving into the two options, lets briefly discuss the PBO’s – the Public Benefit Organizations Act 2013 (“PBO Act”) seeks to regulate NPOs, including NGOs registered under the Non-Governmental Organizations Coordination Act (“NGO Act”). The PBO Act will repeal the NGO Act once a commencement date for the PBO Act is introduced (PBO Act Section 61)."
      },
      {
        "type": "p",
        "text": "Under Section 5(1) and 5(2) of the PBO Act, a “PBO” is defined as a voluntary membership or non-membership grouping of individuals or organizations, which is autonomous, non-partisan, non-profit, and which is locally, nationally or internationally organized and operated to engage in public benefit activities. The PBO must also be registered with the Public Benefit Organizations Regulatory Authority, once the relevant authority is established."
      },
      {
        "type": "p",
        "text": "At the same time, the PBO category does not include several types of organizational forms, such as:"
      },
      {
        "type": "ul",
        "items": [
          "a trade union within the meaning of the Labour Relations Act 2007;",
          "a public body established by or under any written law;",
          "a political party within the meaning of the Political Parties Act, 2007;",
          "a religious organization which is primarily devoted to religious teaching or worship.",
          "a society within the meaning of the Societies Act;",
          "a co-operative society within the meaning of the Co-operative Societies Act;",
          "a Sacco society within the meaning of the Sacco Societies Act;",
          "a micro-finance institution within the meaning of the Micro-Finance Institutions Act, 2006;",
          "a community based organization whose objectives include the direct benefit of its members."
        ]
      },
      {
        "type": "p",
        "text": "Public Benefit Status"
      },
      {
        "type": "p",
        "text": "“Public Benefit Activity” is defined in Section 2 of the PBO Act as “an activity that supports or promotes public benefit by enhancing or promoting economic, environmental, social or cultural development or protecting the environment, or lobbying or advocating on issues of general public interest or the interest or well-being of the general public or a category of individual or organizations.”"
      },
      {
        "type": "p",
        "text": "An organization that has as its objective the promotion of public benefit in any of the following areas may be registered as a PBO by the Public Benefit Organizations Regulatory Authority: (a) legal aid; (b) agriculture; (c) children; (d) culture; (e) disability; (f) energy; (g) education; (h) environment and conservation generally; (i) gender; (j) governance; (k) poverty eradication; (l) health; (m) housing and settlement; (n) human rights; (o) HIV/AIDS; (p) information; (q) informal sector; (r) old age; (s) peace building; (t) population and reproductive health; (u) refugees; (v) disaster prevention, preparedness and mitigation; (w) relief; (x) pastoralism and the marginalized communities; (y) sports; (z) water and sanitation; (aa) animal welfare; and (bb) youth (PBO Act Sixth Schedule)."
      },
      {
        "type": "p",
        "text": "The PBO Act permits an organization to register under any of a variety of legal forms, but if an organization registers as a “Public Benefit Organization” in order to receive tax exemptions and other benefits derived from this status, it will cease to be registered under any other law (PBO Act Section 6; See also PBO Act Second Schedule, setting forth in detail some of the “Benefits of Registration” as a PBO)."
      },
      {
        "type": "p",
        "text": "However, the PBO’s are not operational as at today."
      },
      {
        "type": "p",
        "text": "Now lets delve into the two viable options as below:"
      },
      {
        "type": "ol",
        "items": [
          "NGO’s"
        ]
      },
      {
        "type": "p",
        "text": "The NGO Act defines an “NGO” as “a private voluntary grouping of individuals or associations, not operated for profit or for commercial purposes but which have organized themselves nationally and internationally for the benefit of the public at large or for the promotion of social welfare, development, charity or research in areas inclusive of, but not limited to, health, relief, agriculture, education, industry and the supply of amenities and services”. This definition implies that an NGO should be formed for benefit of public at large and not for trading purposes."
      },
      {
        "type": "p",
        "text": "Once an NGO is registered, by virtue of such registration it will be a body corporate with perpetual succession capable in its own name of: suing and being sued; taking, purchasing or otherwise acquiring, holding, charging or disposing of moveable and immovable property; entering into contracts; and doing or performing all such other things or acts necessary for the proper performance of its functions under the NGO Act, which may lawfully be done or performed by a body corporate."
      },
      {
        "type": "p",
        "text": "Designation as an NGO confers certain tax benefits and imposes a series of regulations that are relevant to an equivalency determination."
      },
      {
        "type": "p",
        "text": "Advantages"
      },
      {
        "type": "p",
        "text": "Exemptions from duty on imported equipment and goods required for the NGO’s activities in Kenya under certain circumstances"
      },
      {
        "type": "ol",
        "items": [
          "Exemption from Value Added Tax on the NGO’s income generating activities",
          "Exemption from Income tax on the NGO’s expatriate employee’s",
          "Limited liability on members if so provided under the NGO’s constitution."
        ]
      },
      {
        "type": "p",
        "text": "Disadvantages"
      },
      {
        "type": "ol",
        "items": [
          "Lengthy delays in the registration process arising from a lengthy vetting process by NGO Board and recommendations from various government ministries.",
          "Annual report must be made in the prescribed form and submitted to the NGO Board on or before 31st may in every year (the reports become part of public records and can be inspected by any person).",
          "Various restrictions. Once registered an NGO must not amend its name or constitution or become a branch of or affiliated to or connected with any organization of a political nature established outside Kenya without the prior written consent of the NGO’s Board."
        ]
      },
      {
        "type": "ol",
        "items": [
          "Companies Limited By Guarantee:"
        ]
      },
      {
        "type": "p",
        "text": "A number of NPOs are registered as companies whose liability is limited by the guarantee of the members."
      },
      {
        "type": "p",
        "text": "A company limited by guarantee does not usually have a share capital or shareholders, but instead has members who act as guarantors. The company limited by guarantee is regarded as a separate legal entity from its members. The guarantors give an undertaking to contribute a nominal amount (typically very small) in the event of the winding up of the company."
      },
      {
        "type": "p",
        "text": "Although this type of Company may engage in trading activities, any profit derived from such business must be ploughed back to the activities of the company. Distribution of profits made by the company to its members is prohibited by law."
      },
      {
        "type": "p",
        "text": "Such companies are usually granted income tax and other tax exemptions on application."
      },
      {
        "type": "p",
        "text": "Advantages:"
      },
      {
        "type": "ol",
        "items": [
          "Limitation of personal liability by guarantee;",
          "It has members and not shareholders;",
          "Lack of share-capital allows it to fundraise to further its objectives and the proceeds realized to be ploughed back into the company. Distribution of profits not allowed;",
          "The Non for Profit Organization’s name may exclude the word “limited”.",
          "Exemption from Income tax on application and other rebates;"
        ]
      },
      {
        "type": "p",
        "text": "Disadvantages:"
      },
      {
        "type": "ol",
        "items": [
          "Lengthy delays in the registration process arising from a lengthy vetting process by the NSIS;",
          "Annual returns must be filed with the companies registry"
        ]
      },
      {
        "type": "p",
        "text": "Timeline:"
      },
      {
        "type": "p",
        "text": "Approximately 6-12 months."
      },
      {
        "type": "p",
        "text": "Costs and requirements:"
      },
      {
        "type": "p",
        "text": "Should you be interested to work with us, please contact us on enquiries@jradvocates.com for any further information."
      }
    ]
  },
  {
    "slug": "jr-advocates-services-in-light-of-the-current-covid-19-pandemic",
    "category": "updates-announcements",
    "title": "JR Advocates services in light of the COVID-19 pandemic",
    "date": "2020-05-27",
    "image": "/images/insights/covid-19-update.jpg",
    "readingMinutes": 2,
    "practiceArea": null,
    "body": [
      {
        "type": "p",
        "text": "As the corona virus (COVID-19) Pandemic continues to spread across the world and in our country Kenya, we at JR Advocates are deeply concerned about its effect on not only our people but on you our esteemed clients as well. We urge you to continue to follow the Government’s Directives as put in place for the sake of not only yourselves but of your neighbors alike. We have been monitoring the situation closely and while the Virus may not have affected us directly as yet (and we are grateful to God), we are taking the situation rather seriously and have put in place measures to contain its spread."
      },
      {
        "type": "p",
        "text": "To this end, and in support of the Government’s directive to observe social distancing, we have made the requisite arrangements to enable our team work remotely."
      },
      {
        "type": "p",
        "text": "Whilst we appreciate that some of the Government offices have temporarily closed including the Lands Registries, Immigration Offices, Courts, Societies Registry and Offices of the Registrar of Companies, we are committed to continue serving you the best way we can with the aim of ensuring your business continuity. Some of the services we will be offering during this period will include but not limited to :-"
      },
      {
        "type": "ol",
        "items": [
          "Legal opinions and research as needed;",
          "Documents and Contract reviews, finalization, advisory and management especially with regards to fulfillment of contractual obligations under the current situation;",
          "Advisory on Employment Contracts – options available to employers in the current situation, redundancy and other employment termination options;",
          "Advising Real Estate players on interpretation and implementation of terms of Commercial Lease Contracts, Construction Contracts, Tenancy Agreements, Sale Agreements, Project Development Agreements and Undertakings;",
          "Business formation and company secretarial services;",
          "Provide Tax advisory services on the implications of submission of Returns, payment extensions and enforcement measures by the Kenya Revenue Authority as per Government’s directives in light of the Pandemic;",
          "Reviewing of existing credit facilities and other financial instruments to allow for negotiations, restructures and waivers as and when the need shall arise;",
          "Management of active dispute proceedings;",
          "Attestation and notarization of documents; and",
          "Any other legal service as may be reasonable to be undertaken in this period."
        ]
      },
      {
        "type": "p",
        "text": "We will remain available to assist you on email and phone as our first point of contact in an effort to help manage and reduce the spread of the Virus through physical interactions. Whilst physical meetings may not be advised in the meantime, we do have virtual meeting applications that we can both use to ensure maximum and effective delivery of any legal needs you may have. For further assistance, please do not hesitate to reach us through; jrigha@jradvocates.co.ke and / or enquiries@jradvocates.co.ke. You may also contact our Managing Partner, Ms. Righa on her direct line +254 724 294 015."
      },
      {
        "type": "p",
        "text": "In conclusion, we urge you to take all precautionary measures to ensure we all contribute towards containing the spread of the COVID-19 virus. Our team will continue to monitor the situation as it develops and adapt accordingly."
      },
      {
        "type": "p",
        "text": "We at JR Advocates do appreciate your continued partnership. We continue to pray for your safety and business continuity in this unprecedented time and look forward to doing business together."
      }
    ]
  },
  {
    "slug": "new-regulations-for-turnover-tax-tot",
    "category": "updates-announcements",
    "title": "New regulations for Turnover Tax (TOT)",
    "date": "2020-05-27",
    "image": "/images/insights/tax.jpg",
    "readingMinutes": 1,
    "practiceArea": "banking-and-finance",
    "body": [
      {
        "type": "p",
        "text": "President Uhuru Kenyatta assented the Tax (Amendment) Bill, 2020 bill into law with a view of cushioning Kenyans against the adverse effects of COVID-19. Turnover tax experienced major transformation especially by setting the new threshold to cover entities earning annual revenue between Kshs. 1m to Kshs. 50m."
      },
      {
        "type": "p",
        "text": "However, entities opting for Turnover tax regime will be forced to start paying taxes and filing monthly returns (over and above the VAT returns) regardless of whether they are making profits or not. Additionally, entities shall forfeit all the carry forward claimable losses."
      },
      {
        "type": "link",
        "text": "Click here to see the full regulations as published by KRA",
        "href": "https://mcusercontent.com/d5f7a44022a0f5b124bc39391/images/a9ca18f8-c7ae-48b5-a693-05b36524c95f.jpeg"
      }
    ]
  },
  {
    "slug": "the-tax-laws-amendment-act-2020",
    "category": "updates-announcements",
    "title": "The Tax Laws (Amendment) Act, 2020",
    "date": "2020-05-27",
    "image": "/images/insights/tax.jpg",
    "readingMinutes": 1,
    "practiceArea": "banking-and-finance",
    "body": [
      {
        "type": "p",
        "text": "On Saturday 25th April 2020, President Uhuru Kenyatta signed into law the Tax (Amendment) Bill,2020 effectively cushioning Kenyans against the adverse effects of the COVID-19 Pandemic. This followed by a publication of the Kenya Gazette Supplement No. 56 (Act No. 2) on 27th April 2020. Some of the new tax changes include the following;"
      },
      {
        "type": "ol",
        "items": [
          "Pay as you Earn (PAYE) Tax Relief: 100 % Tax Relief for resident individuals earning a gross monthly income of up to Kshs. 24,000 (Kshs.288,000 p.a.) by introducing personal relief of Kshs. 2,400 p.m (Kshs.28, 800 p.a.) The individual resident tax relief effectively rises from the previous Kshs.16,896 per year (or KES 1,408 per month) and applies to all the employees.",
          "Reduction of Income Tax Reduction of Resident Income Tax (Corporation Tax) from 30% to 25%. However, the non-resident companies and branches will still be taxed at 37.5%"
        ]
      },
      {
        "type": "link",
        "text": "Read more",
        "href": "https://www.gitauauditors.co.ke/the-tax-laws-amendment-act-2020/gitau-co-new-tax-act-review-2/"
      }
    ]
  }
];

export function getInsight(category: string, slug: string) {
  return insights.find((i) => i.category === category && i.slug === slug);
}
