/* ============================================
   VITC – Business Mastery With AI
   Landing Page Script
   ============================================ */

(function () {
  'use strict';

  /* ---------- TRANSLATIONS ---------- */
  const translations = {
    en: {
      // Nav
      nav_home: 'Home',
      nav_problem: 'The Problem',
      nav_course: 'The Course',
      nav_benefits: 'Benefits',
      nav_who: "Who It's For",
      nav_faq: 'FAQ',
      nav_enquire: 'Enquire',
      nav_cta: 'Enquire Now',
      sticky_cta: 'Enquire Now',

      // Hero
      hero_badge1: 'MCED Authorized Training Centre',
      hero_badge2: 'VITC – Uran',
      hero_course_label: 'BUSINESS MASTERY WITH AI',
      hero_headline: 'Build Business Skills. Learn AI. Become Business-Ready.',
      hero_sub: 'From understanding business fundamentals to using AI, analytics and digital tools — build practical skills for starting, managing and growing a business.',
      hero_tagline: 'Any Age. Any Background. Start Your Journey.',
      hero_cta1: 'Enquire About the Course',
      hero_cta2: 'Explore the Course',
      hero_visual_label: 'Business Growth',

      // Problem
      problem_headline: 'Knowing Your Field Is Not Enough to Build a Business.',
      problem_lead: 'You may have the idea. You may have the ambition. But without the right business skills, turning that idea into a sustainable business can become difficult.',
      prob1_title: 'Ideas Without Structure',
      prob1_text: 'Many have ideas but lack structured business knowledge to move forward.',
      prob1_sol: '→ Better practical business skills',
      prob2_title: 'Sales & Marketing Gaps',
      prob2_text: 'Difficulty understanding how to attract customers and build marketing strategies.',
      prob2_sol: '→ Sales & marketing strategy',
      prob3_title: 'Unclear Finances',
      prob3_text: 'Limited understanding of budgeting, cost control and financial decisions.',
      prob3_sol: '→ Budgeting + Business Analytics',
      prob4_title: 'Weak Documentation',
      prob4_text: 'Difficulty preparing professional business documents and proposals.',
      prob4_sol: '→ Business documentation skills',
      prob5_title: 'Laws & Schemes Uncertainty',
      prob5_text: 'Uncertainty about business laws, licences and government schemes.',
      prob5_sol: '→ Awareness of schemes & regulations',
      prob6_title: 'Digital & AI Tools Gap',
      prob6_text: 'Difficulty using modern digital and AI tools effectively in business work.',
      prob6_sol: '→ AI-assisted workflows',
      consequences_title: 'What This Can Lead To',
      cons1: 'Poor decisions',
      cons2: 'Missed opportunities',
      cons3: 'Unplanned costs',
      cons4: 'Weak marketing',
      cons5: 'Poor business documentation',
      cons6: 'Difficulty scaling',

      // Future
      future_headline: 'What Happens If You Keep Going Without These Skills?',
      timeline_today: 'TODAY',
      timeline_1: 'Unclear decisions',
      timeline_2: 'Missed opportunities',
      timeline_3: 'Unplanned expenses',
      timeline_4: 'Weak business processes',
      timeline_5: 'Difficulty growing',
      future_comp: 'Your competition is learning, adapting and using better tools.',
      future_need: 'Business is changing. People increasingly need digital skills, data understanding, AI-assisted productivity, marketing knowledge, financial awareness and business documentation skills.',
      future_good: 'The good news? These are skills you can learn.',
      transition_text: 'THIS IS WHERE BUSINESS MASTERY WITH AI COMES IN.',

      // Solution
      solution_headline: 'Turn Your Business Knowledge Gap Into Practical Skills.',
      solution_course: 'Business Mastery With AI',
      solution_desc: 'This practical course brings together business fundamentals, sales and marketing, analytics, budgeting, documentation and AI-assisted digital skills — giving learners a more complete foundation for business start-up, management and growth.',
      trans1: 'PROBLEM',
      trans2: 'LEARNING',
      trans3: 'PRACTICAL SKILLS',
      trans4: 'CONFIDENCE',
      trans5: 'BUSINESS READINESS',

      // Curriculum
      learn_headline: 'What Will You Learn?',
      topic1_title: 'Business Core Skills',
      topic1_desc: 'Understand the foundations required to operate and manage a business.',
      topic2_title: 'Sales & Marketing Strategy',
      topic2_desc: 'Learn the fundamentals of attracting customers and building effective marketing strategies.',
      topic3_title: 'Web Development Basics with AI',
      topic3_desc: 'Understand the basics of web development and how AI can assist digital work.',
      topic4_title: 'Advanced Excel & Business Analytics',
      topic4_desc: 'Use spreadsheets and business analytics to understand information and support better decisions.',
      topic5_title: 'Budgeting & Cost Control',
      topic5_desc: 'Understand financial planning, budgeting and controlling business costs.',
      topic6_title: 'Business Documentation',
      topic6_desc: 'Learn the importance of structured and professional business documentation.',

      // Benefits
      benefits_headline: 'More Than a Course. Build a Practical Business Foundation.',
      ben1: 'Understand Government Schemes & Subsidy Opportunities',
      ben2: 'Business Laws, Licences & Regulations Awareness',
      ben3: 'Build Your Entrepreneurial Profile with MCED Certification',
      ben4: 'Business Proposal & Project Development',
      ben5: 'Practical Learning for Business Start-up, Management & Growth',

      // Who
      who_headline: 'Any Age. Any Background. Start Your Journey.',
      who1_title: 'STUDENTS',
      who1_desc: 'Build practical business and digital skills alongside your education.',
      who2_title: 'ASPIRING ENTREPRENEURS',
      who2_desc: 'Turn your business idea into a more structured plan.',
      who3_title: 'EXISTING BUSINESS OWNERS',
      who3_desc: 'Strengthen your understanding of marketing, analytics, budgeting and business processes.',
      who4_title: 'WORKING PROFESSIONALS',
      who4_desc: 'Develop business skills that complement your existing experience.',
      who5_title: 'CAREER / BUSINESS EXPLORERS',
      who5_desc: 'Explore practical business knowledge regardless of your educational background.',

      // Compare
      compare_headline: 'Why This Course?',
      without_title: 'Without This Skill Set',
      without1: 'Unstructured business decisions',
      without2: 'Limited understanding of marketing',
      without3: 'Difficulty with financial planning',
      without4: 'Limited digital knowledge',
      without5: 'Confusion around documentation',
      with_title: 'With Business Mastery With AI',
      with1: 'Business fundamentals',
      with2: 'Sales & marketing strategy',
      with3: 'Business analytics',
      with4: 'Budgeting & cost control',
      with5: 'Business documentation',
      with6: 'AI-assisted digital skills',
      compare_cta: 'Enquire Now',

      // Trust
      trust_vitc: 'Vandana IT Courses',
      trust_mced: 'Maharashtra Centre for Entrepreneurship Development',
      trust_auth: 'MCED Authorized Training Centre',
      trust_faculty_title: 'Faculty',
      trust_faculty: 'MCA & MBA Faculty | 9+ Years Experience',

      // Offer
      offer_headline: 'Start Building Your Business Skills.',
      offer_course: 'Business Mastery With AI',
      offer_special: 'Special Offer',
      offer_seats: 'Limited Seats Available',
      offer_cta: 'Enquire Now',

      // Form
      form_headline: 'Ready to Start Your Business Journey?',
      form_sub: 'Tell us a little about yourself and our team can help you understand the course.',
      form_call: 'Call Us',
      form_whatsapp: 'Enquire on WhatsApp',
      form_location_label: 'Location:',
      label_name: 'Full Name *',
      label_mobile: 'Mobile Number *',
      label_email: 'Email Address *',
      label_background: 'Current Background *',
      label_preflang: 'Preferred Language *',
      label_message: 'Message / What do you want to learn?',
      opt_select: 'Select...',
      opt_student: 'Student',
      opt_professional: 'Working Professional',
      opt_owner: 'Business Owner',
      opt_entrepreneur: 'Entrepreneur',
      opt_other: 'Other',
      form_submit: 'Submit Enquiry',
      form_success: 'Thank you! Your enquiry has been recorded. Our team will contact you soon.',
      form_note: 'Note: Form data is validated on this page. Connect a backend endpoint in script.js to send data.',

      // FAQ
      faq_headline: 'Frequently Asked Questions',
      faq1_q: 'Who can join the Business Mastery With AI course?',
      faq1_a: 'Students, aspiring entrepreneurs, existing business owners, working professionals and anyone who wants to understand business — from any educational background. Any age. Any background.',
      faq2_q: 'Do I need a specific educational background?',
      faq2_a: 'No. The course is designed for people from different educational backgrounds. No specific prior qualification is required.',
      faq3_q: 'Is this course useful for entrepreneurs?',
      faq3_a: 'Yes. It is a practical course for business start-up, management and growth, covering business fundamentals, sales and marketing, analytics, budgeting, documentation and AI-assisted digital skills.',
      faq4_q: 'What topics are covered?',
      faq4_a: 'Business Core Skills, Sales & Marketing Strategy, Web Development Basics with AI, Advanced Excel & Business Analytics, Budgeting & Cost Control, and Business Documentation. You also gain awareness of government schemes, business laws and licences, and build your entrepreneurial profile with MCED Certification.',
      faq5_q: 'Does the course include AI-related learning?',
      faq5_a: 'Yes. The course includes Web Development Basics with AI and AI-assisted digital skills as part of practical business learning.',
      faq6_q: 'What is the course fee?',
      faq6_a: 'Special Offer: ₹11,800/- (original mentioned fee: ₹25,500/-). Limited seats available.',
      faq7_q: 'Where is VITC located?',
      faq7_a: 'VITC, Shree Raj Nagar, Kamtha Road, Uran.',
      faq8_q: 'How can I enquire about the course?',
      faq8_a: 'Fill the enquiry form on this page, call 9967874887, or message on WhatsApp. Our team can help you understand the course.',

      // Final
      final_headline: 'Your Business Journey Can Start With One Decision.',
      final_sub: 'Learn business fundamentals, digital skills, analytics and AI-assisted tools through Business Mastery With AI.',
      final_cta1: 'Enquire Now',

      // Footer
      footer_mced: 'MCED Authorized Training Centre',
    },

    mr: {
      // Nav
      nav_home: 'मुख्यपृष्ठ',
      nav_problem: 'समस्या',
      nav_course: 'कोर्स',
      nav_benefits: 'फायदे',
      nav_who: 'कोणासाठी',
      nav_faq: 'प्रश्न',
      nav_enquire: 'चौकशी',
      nav_cta: 'आता चौकशी करा',
      sticky_cta: 'आता चौकशी करा',

      // Hero
      hero_badge1: 'MCED अधिकृत प्रशिक्षण केंद्र',
      hero_badge2: 'VITC – उरण',
      hero_course_label: 'बिझनेस मास्टरी विथ AI',
      hero_headline: 'व्यवसाय कौशल्ये शिका. AI शिका. व्यवसाय-तयार व्हा.',
      hero_sub: 'व्यवसायाच्या मूलभूत गोष्टींपासून ते AI, विश्लेषण आणि डिजिटल साधनांपर्यंत — व्यवसाय सुरू करणे, व्यवस्थापन आणि वाढीसाठी व्यावहारिक कौशल्ये विकसित करा.',
      hero_tagline: 'कोणतेही वय. कोणताही पार्श्वभूमी. तुमचा प्रवास सुरू करा.',
      hero_cta1: 'कोर्सबद्दल चौकशी करा',
      hero_cta2: 'कोर्स पाहा',
      hero_visual_label: 'व्यवसाय वाढ',

      // Problem
      problem_headline: 'तुमचे क्षेत्र जाणणे व्यवसाय उभारण्यासाठी पुरेसे नाही.',
      problem_lead: 'तुमच्याकडे कल्पना असू शकते. महत्वाकांक्षा असू शकते. पण योग्य व्यवसाय कौशल्यांशिवाय ती कल्पना शाश्वत व्यवसायात बदलणे कठीण होऊ शकते.',
      prob1_title: 'संरचनेविना कल्पना',
      prob1_text: 'अनेकांकडे कल्पना आहेत पण पुढे जाण्यासाठी संरचित व्यवसाय ज्ञान नाही.',
      prob1_sol: '→ चांगली व्यावहारिक व्यवसाय कौशल्ये',
      prob2_title: 'विक्री व विपणन अंतर',
      prob2_text: 'ग्राहक आकर्षित करणे आणि विपणन धोरणे समजून घेणे कठीण.',
      prob2_sol: '→ विक्री व विपणन धोरण',
      prob3_title: 'अस्पष्ट आर्थिक बाबी',
      prob3_text: 'अंदाजपत्रक, खर्च नियंत्रण आणि आर्थिक निर्णयांची मर्यादित समज.',
      prob3_sol: '→ अंदाजपत्रक + व्यवसाय विश्लेषण',
      prob4_title: 'कमकुवत दस्तऐवजीकरण',
      prob4_text: 'व्यावसायिक व्यवसाय दस्तऐवज आणि प्रस्ताव तयार करणे कठीण.',
      prob4_sol: '→ व्यवसाय दस्तऐवजीकरण कौशल्ये',
      prob5_title: 'कायदे व योजना अनिश्चितता',
      prob5_text: 'व्यवसाय कायदे, परवाने आणि सरकारी योजनांबद्दल अनिश्चितता.',
      prob5_sol: '→ योजना व नियमांची जागरूकता',
      prob6_title: 'डिजिटल व AI साधनांचे अंतर',
      prob6_text: 'आधुनिक डिजिटल आणि AI साधने प्रभावीपणे वापरणे कठीण.',
      prob6_sol: '→ AI-सहाय्यित कार्यप्रवाह',
      consequences_title: 'यामुळे काय होऊ शकते',
      cons1: 'खराब निर्णय',
      cons2: 'गमावलेल्या संधी',
      cons3: 'अनियोजित खर्च',
      cons4: 'कमकुवत विपणन',
      cons5: 'खराब व्यवसाय दस्तऐवजीकरण',
      cons6: 'वाढ करण्यात अडचण',

      // Future
      future_headline: 'ही कौशल्ये नसल्यास काय होते?',
      timeline_today: 'आज',
      timeline_1: 'अस्पष्ट निर्णय',
      timeline_2: 'गमावलेल्या संधी',
      timeline_3: 'अनियोजित खर्च',
      timeline_4: 'कमकुवत व्यवसाय प्रक्रिया',
      timeline_5: 'वाढ करण्यात अडचण',
      future_comp: 'तुमची स्पर्धा शिकत आहे, जुळवून घेत आहे आणि चांगली साधने वापरत आहे.',
      future_need: 'व्यवसाय बदलत आहे. लोकांना डिजिटल कौशल्ये, डेटा समज, AI-सहाय्यित उत्पादकता, विपणन ज्ञान, आर्थिक जागरूकता आणि व्यवसाय दस्तऐवजीकरण कौशल्ये वाढत्या प्रमाणात आवश्यक आहेत.',
      future_good: 'चांगली बातमी? ही कौशल्ये तुम्ही शिकू शकता.',
      transition_text: 'इथेच बिझनेस मास्टरी विथ AI येते.',

      // Solution
      solution_headline: 'तुमचे व्यवसाय ज्ञान अंतर व्यावहारिक कौशल्यांत बदला.',
      solution_course: 'बिझनेस मास्टरी विथ AI',
      solution_desc: 'हा व्यावहारिक कोर्स व्यवसाय मूलभूत, विक्री व विपणन, विश्लेषण, अंदाजपत्रक, दस्तऐवजीकरण आणि AI-सहाय्यित डिजिटल कौशल्ये एकत्र आणतो — व्यवसाय सुरू करणे, व्यवस्थापन आणि वाढीसाठी अधिक पूर्ण पाया देतो.',
      trans1: 'समस्या',
      trans2: 'शिकणे',
      trans3: 'व्यावहारिक कौशल्ये',
      trans4: 'आत्मविश्वास',
      trans5: 'व्यवसाय तयारी',

      // Curriculum
      learn_headline: 'तुम्ही काय शिकाल?',
      topic1_title: 'व्यवसाय मूलभूत कौशल्ये',
      topic1_desc: 'व्यवसाय चालवणे आणि व्यवस्थापित करण्यासाठी आवश्यक पाया समजून घ्या.',
      topic2_title: 'विक्री व विपणन धोरण',
      topic2_desc: 'ग्राहक आकर्षित करणे आणि प्रभावी विपणन धोरणे तयार करण्याची मूलभूत माहिती शिका.',
      topic3_title: 'AI सह वेब डेव्हलपमेंट मूलभूत',
      topic3_desc: 'वेब डेव्हलपमेंटची मूलभूत माहिती आणि AI डिजिटल कामात कशी मदत करू शकते ते समजून घ्या.',
      topic4_title: 'अॅडव्हान्स्ड एक्सेल व व्यवसाय विश्लेषण',
      topic4_desc: 'माहिती समजून घेण्यासाठी आणि चांगल्या निर्णयांसाठी स्प्रेडशीट व व्यवसाय विश्लेषण वापरा.',
      topic5_title: 'अंदाजपत्रक व खर्च नियंत्रण',
      topic5_desc: 'आर्थिक नियोजन, अंदाजपत्रक आणि व्यवसाय खर्च नियंत्रण समजून घ्या.',
      topic6_title: 'व्यवसाय दस्तऐवजीकरण',
      topic6_desc: 'संरचित आणि व्यावसायिक व्यवसाय दस्तऐवजीकरणाचे महत्त्व शिका.',

      // Benefits
      benefits_headline: 'फक्त कोर्स नाही. व्यावहारिक व्यवसाय पाया तयार करा.',
      ben1: 'सरकारी योजना व अनुदान संधी समजून घ्या',
      ben2: 'व्यवसाय कायदे, परवाने व नियमांची जागरूकता',
      ben3: 'MCED प्रमाणपत्रासह उद्योजक प्रोफाइल तयार करा',
      ben4: 'व्यवसाय प्रस्ताव व प्रकल्प विकास',
      ben5: 'व्यवसाय सुरू करणे, व्यवस्थापन व वाढीसाठी व्यावहारिक शिक्षण',

      // Who
      who_headline: 'कोणतेही वय. कोणताही पार्श्वभूमी. तुमचा प्रवास सुरू करा.',
      who1_title: 'विद्यार्थी',
      who1_desc: 'तुमच्या शिक्षणासोबत व्यावहारिक व्यवसाय आणि डिजिटल कौशल्ये विकसित करा.',
      who2_title: 'इच्छुक उद्योजक',
      who2_desc: 'तुमच्या व्यवसाय कल्पनेला अधिक संरचित योजनेत बदला.',
      who3_title: 'विद्यमान व्यवसाय मालक',
      who3_desc: 'विपणन, विश्लेषण, अंदाजपत्रक आणि व्यवसाय प्रक्रियांची समज मजबूत करा.',
      who4_title: 'कार्यरत व्यावसायिक',
      who4_desc: 'तुमच्या विद्यमान अनुभवास पूरक व्यवसाय कौशल्ये विकसित करा.',
      who5_title: 'करिअर / व्यवसाय शोधक',
      who5_desc: 'तुमच्या शैक्षणिक पार्श्वभूमीकडे दुर्लक्ष करून व्यावहारिक व्यवसाय ज्ञान एक्सप्लोर करा.',

      // Compare
      compare_headline: 'हा कोर्स का?',
      without_title: 'ही कौशल्ये नसल्यास',
      without1: 'असंरचित व्यवसाय निर्णय',
      without2: 'विपणनाची मर्यादित समज',
      without3: 'आर्थिक नियोजनात अडचण',
      without4: 'मर्यादित डिजिटल ज्ञान',
      without5: 'दस्तऐवजीकरणाभोवती गोंधळ',
      with_title: 'बिझनेस मास्टरी विथ AI सह',
      with1: 'व्यवसाय मूलभूत',
      with2: 'विक्री व विपणन धोरण',
      with3: 'व्यवसाय विश्लेषण',
      with4: 'अंदाजपत्रक व खर्च नियंत्रण',
      with5: 'व्यवसाय दस्तऐवजीकरण',
      with6: 'AI-सहाय्यित डिजिटल कौशल्ये',
      compare_cta: 'आता चौकशी करा',

      // Trust
      trust_vitc: 'वंदना आयटी कोर्सेस',
      trust_mced: 'महाराष्ट्र उद्योजकता विकास केंद्र',
      trust_auth: 'MCED अधिकृत प्रशिक्षण केंद्र',
      trust_faculty_title: 'फॅकल्टी',
      trust_faculty: 'MCA व MBA फॅकल्टी | ९+ वर्षे अनुभव',

      // Offer
      offer_headline: 'तुमची व्यवसाय कौशल्ये तयार करण्यास सुरूवात करा.',
      offer_course: 'बिझनेस मास्टरी विथ AI',
      offer_special: 'विशेष ऑफर',
      offer_seats: 'मर्यादित जागा उपलब्ध',
      offer_cta: 'आता चौकशी करा',

      // Form
      form_headline: 'तुमचा व्यवसाय प्रवास सुरू करण्यास तयार आहात?',
      form_sub: 'तुमच्याबद्दल थोडी माहिती सांगा आणि आमची टीम तुम्हाला कोर्स समजून घेण्यास मदत करू शकते.',
      form_call: 'कॉल करा',
      form_whatsapp: 'WhatsApp वर चौकशी करा',
      form_location_label: 'स्थान:',
      label_name: 'पूर्ण नाव *',
      label_mobile: 'मोबाइल नंबर *',
      label_email: 'ईमेल पत्ता *',
      label_background: 'सध्याची पार्श्वभूमी *',
      label_preflang: 'पसंतीची भाषा *',
      label_message: 'संदेश / तुम्हाला काय शिकायचे आहे?',
      opt_select: 'निवडा...',
      opt_student: 'विद्यार्थी',
      opt_professional: 'कार्यरत व्यावसायिक',
      opt_owner: 'व्यवसाय मालक',
      opt_entrepreneur: 'उद्योजक',
      opt_other: 'इतर',
      form_submit: 'चौकशी सबमिट करा',
      form_success: 'धन्यवाद! तुमची चौकशी नोंदवली गेली आहे. आमची टीम लवकरच संपर्क साधेल.',
      form_note: 'टीप: फॉर्म डेटा या पृष्ठावर सत्यापित केला जातो. डेटा पाठवण्यासाठी script.js मध्ये बॅकएंड एंडपॉइंट जोडा.',

      // FAQ
      faq_headline: 'वारंवार विचारले जाणारे प्रश्न',
      faq1_q: 'बिझनेस मास्टरी विथ AI कोर्समध्ये कोण सामील होऊ शकते?',
      faq1_a: 'विद्यार्थी, इच्छुक उद्योजक, विद्यमान व्यवसाय मालक, कार्यरत व्यावसायिक आणि व्यवसाय समजून घेऊ इच्छिणारे कोणीही — कोणत्याही शैक्षणिक पार्श्वभूमीतून. कोणतेही वय. कोणताही पार्श्वभूमी.',
      faq2_q: 'मला विशिष्ट शैक्षणिक पार्श्वभूमी आवश्यक आहे का?',
      faq2_a: 'नाही. हा कोर्स वेगवेगळ्या शैक्षणिक पार्श्वभूमीच्या लोकांसाठी डिझाइन केला आहे. विशिष्ट पूर्वीची पात्रता आवश्यक नाही.',
      faq3_q: 'हा कोर्स उद्योजकांसाठी उपयुक्त आहे का?',
      faq3_a: 'होय. हा व्यवसाय सुरू करणे, व्यवस्थापन आणि वाढीसाठी व्यावहारिक कोर्स आहे, ज्यात व्यवसाय मूलभूत, विक्री व विपणन, विश्लेषण, अंदाजपत्रक, दस्तऐवजीकरण आणि AI-सहाय्यित डिजिटल कौशल्ये समाविष्ट आहेत.',
      faq4_q: 'कोणते विषय समाविष्ट आहेत?',
      faq4_a: 'व्यवसाय मूलभूत कौशल्ये, विक्री व विपणन धोरण, AI सह वेब डेव्हलपमेंट मूलभूत, अॅडव्हान्स्ड एक्सेल व व्यवसाय विश्लेषण, अंदाजपत्रक व खर्च नियंत्रण, आणि व्यवसाय दस्तऐवजीकरण. तुम्हाला सरकारी योजना, व्यवसाय कायदे व परवाने यांची जागरूकता मिळते आणि MCED प्रमाणपत्रासह उद्योजक प्रोफाइल तयार होते.',
      faq5_q: 'कोर्समध्ये AI संबंधित शिक्षण समाविष्ट आहे का?',
      faq5_a: 'होय. कोर्समध्ये AI सह वेब डेव्हलपमेंट मूलभूत आणि AI-सहाय्यित डिजिटल कौशल्ये व्यावहारिक व्यवसाय शिक्षणाचा भाग म्हणून समाविष्ट आहेत.',
      faq6_q: 'कोर्स फी काय आहे?',
      faq6_a: 'विशेष ऑफर: ₹11,800/- (मूळ नमूद फी: ₹25,500/-). मर्यादित जागा उपलब्ध.',
      faq7_q: 'VITC कुठे आहे?',
      faq7_a: 'VITC, श्री राज नगर, कामठा रोड, उरण.',
      faq8_q: 'कोर्सबद्दल चौकशी कशी करावी?',
      faq8_a: 'या पृष्ठावरील चौकशी फॉर्म भरा, 9967874887 वर कॉल करा किंवा WhatsApp वर संदेश पाठवा. आमची टीम तुम्हाला कोर्स समजून घेण्यास मदत करू शकते.',

      // Final
      final_headline: 'तुमचा व्यवसाय प्रवास एका निर्णयापासून सुरू होऊ शकतो.',
      final_sub: 'बिझनेस मास्टरी विथ AI द्वारे व्यवसाय मूलभूत, डिजिटल कौशल्ये, विश्लेषण आणि AI-सहाय्यित साधने शिका.',
      final_cta1: 'आता चौकशी करा',

      // Footer
      footer_mced: 'MCED अधिकृत प्रशिक्षण केंद्र',
    },

    hi: {
      // Nav
      nav_home: 'होम',
      nav_problem: 'समस्या',
      nav_course: 'कोर्स',
      nav_benefits: 'लाभ',
      nav_who: 'किसके लिए',
      nav_faq: 'प्रश्न',
      nav_enquire: 'पूछताछ',
      nav_cta: 'अभी पूछताछ करें',
      sticky_cta: 'अभी पूछताछ करें',

      // Hero
      hero_badge1: 'MCED अधिकृत प्रशिक्षण केंद्र',
      hero_badge2: 'VITC – उरण',
      hero_course_label: 'बिज़नेस मास्टरी विद AI',
      hero_headline: 'व्यवसाय कौशल सीखें। AI सीखें। व्यवसाय-तैयार बनें।',
      hero_sub: 'व्यवसाय की बुनियादी बातों से लेकर AI, एनालिटिक्स और डिजिटल टूल्स तक — व्यवसाय शुरू करने, प्रबंधन और विकास के लिए व्यावहारिक कौशल विकसित करें।',
      hero_tagline: 'कोई भी उम्र। कोई भी पृष्ठभूमि। अपनी यात्रा शुरू करें।',
      hero_cta1: 'कोर्स के बारे में पूछताछ करें',
      hero_cta2: 'कोर्स देखें',
      hero_visual_label: 'व्यवसाय विकास',

      // Problem
      problem_headline: 'अपने क्षेत्र को जानना व्यवसाय बनाने के लिए पर्याप्त नहीं है।',
      problem_lead: 'आपके पास विचार हो सकता है। महत्वाकांक्षा हो सकती है। लेकिन सही व्यवसाय कौशल के बिना उस विचार को टिकाऊ व्यवसाय में बदलना कठिन हो सकता है।',
      prob1_title: 'संरचना के बिना विचार',
      prob1_text: 'कई लोगों के पास विचार हैं लेकिन आगे बढ़ने के लिए संरचित व्यवसाय ज्ञान नहीं है।',
      prob1_sol: '→ बेहतर व्यावहारिक व्यवसाय कौशल',
      prob2_title: 'बिक्री और मार्केटिंग अंतर',
      prob2_text: 'ग्राहकों को आकर्षित करना और मार्केटिंग रणनीतियाँ समझना कठिन।',
      prob2_sol: '→ बिक्री और मार्केटिंग रणनीति',
      prob3_title: 'अस्पष्ट वित्त',
      prob3_text: 'बजट, लागत नियंत्रण और वित्तीय निर्णयों की सीमित समझ।',
      prob3_sol: '→ बजट + व्यवसाय एनालिटिक्स',
      prob4_title: 'कमज़ोर दस्तावेज़ीकरण',
      prob4_text: 'पेशेवर व्यवसाय दस्तावेज़ और प्रस्ताव तैयार करना कठिन।',
      prob4_sol: '→ व्यवसाय दस्तावेज़ीकरण कौशल',
      prob5_title: 'कानून और योजना अनिश्चितता',
      prob5_text: 'व्यवसाय कानून, लाइसेंस और सरकारी योजनाओं के बारे में अनिश्चितता।',
      prob5_sol: '→ योजनाओं और नियमों की जागरूकता',
      prob6_title: 'डिजिटल और AI टूल्स का अंतर',
      prob6_text: 'आधुनिक डिजिटल और AI टूल्स को प्रभावी ढंग से उपयोग करना कठिन।',
      prob6_sol: '→ AI-सहायता प्राप्त वर्कफ़्लो',
      consequences_title: 'इससे क्या हो सकता है',
      cons1: 'खराब निर्णय',
      cons2: 'चूके हुए अवसर',
      cons3: 'अनियोजित लागत',
      cons4: 'कमज़ोर मार्केटिंग',
      cons5: 'खराब व्यवसाय दस्तावेज़ीकरण',
      cons6: 'विस्तार में कठिनाई',

      // Future
      future_headline: 'इन कौशलों के बिना आगे बढ़ने पर क्या होता है?',
      timeline_today: 'आज',
      timeline_1: 'अस्पष्ट निर्णय',
      timeline_2: 'चूके हुए अवसर',
      timeline_3: 'अनियोजित खर्च',
      timeline_4: 'कमज़ोर व्यवसाय प्रक्रियाएँ',
      timeline_5: 'विकास में कठिनाई',
      future_comp: 'आपकी प्रतिस्पर्धा सीख रही है, अनुकूलन कर रही है और बेहतर टूल्स उपयोग कर रही है।',
      future_need: 'व्यवसाय बदल रहा है। लोगों को डिजिटल कौशल, डेटा समझ, AI-सहायता प्राप्त उत्पादकता, मार्केटिंग ज्ञान, वित्तीय जागरूकता और व्यवसाय दस्तावेज़ीकरण कौशल की बढ़ती आवश्यकता है।',
      future_good: 'अच्छी खबर? ये कौशल आप सीख सकते हैं।',
      transition_text: 'यहीं बिज़नेस मास्टरी विद AI आता है।',

      // Solution
      solution_headline: 'अपने व्यवसाय ज्ञान अंतर को व्यावहारिक कौशलों में बदलें।',
      solution_course: 'बिज़नेस मास्टरी विद AI',
      solution_desc: 'यह व्यावहारिक कोर्स व्यवसाय मूलभूत, बिक्री और मार्केटिंग, एनालिटिक्स, बजट, दस्तावेज़ीकरण और AI-सहायता प्राप्त डिजिटल कौशल एक साथ लाता है — व्यवसाय शुरू करने, प्रबंधन और विकास के लिए अधिक पूर्ण आधार देता है।',
      trans1: 'समस्या',
      trans2: 'सीखना',
      trans3: 'व्यावहारिक कौशल',
      trans4: 'आत्मविश्वास',
      trans5: 'व्यवसाय तैयारी',

      // Curriculum
      learn_headline: 'आप क्या सीखेंगे?',
      topic1_title: 'व्यवसाय मूल कौशल',
      topic1_desc: 'व्यवसाय चलाने और प्रबंधित करने के लिए आवश्यक आधार समझें।',
      topic2_title: 'बिक्री और मार्केटिंग रणनीति',
      topic2_desc: 'ग्राहकों को आकर्षित करने और प्रभावी मार्केटिंग रणनीतियाँ बनाने की मूल बातें सीखें।',
      topic3_title: 'AI के साथ वेब डेवलपमेंट बेसिक्स',
      topic3_desc: 'वेब डेवलपमेंट की मूल बातें और AI डिजिटल काम में कैसे मदद कर सकता है समझें।',
      topic4_title: 'एडवांस्ड एक्सेल और व्यवसाय एनालिटिक्स',
      topic4_desc: 'जानकारी समझने और बेहतर निर्णयों के लिए स्प्रेडशीट और व्यवसाय एनालिटिक्स का उपयोग करें।',
      topic5_title: 'बजट और लागत नियंत्रण',
      topic5_desc: 'वित्तीय योजना, बजट और व्यवसाय लागत नियंत्रण समझें।',
      topic6_title: 'व्यवसाय दस्तावेज़ीकरण',
      topic6_desc: 'संरचित और पेशेवर व्यवसाय दस्तावेज़ीकरण का महत्व सीखें।',

      // Benefits
      benefits_headline: 'केवल एक कोर्स नहीं। व्यावहारिक व्यवसाय आधार बनाएँ।',
      ben1: 'सरकारी योजनाएँ और सब्सिडी अवसर समझें',
      ben2: 'व्यवसाय कानून, लाइसेंस और नियमों की जागरूकता',
      ben3: 'MCED प्रमाणन के साथ अपना उद्यमी प्रोफ़ाइल बनाएँ',
      ben4: 'व्यवसाय प्रस्ताव और परियोजना विकास',
      ben5: 'व्यवसाय शुरू करने, प्रबंधन और विकास के लिए व्यावहारिक शिक्षा',

      // Who
      who_headline: 'कोई भी उम्र। कोई भी पृष्ठभूमि। अपनी यात्रा शुरू करें।',
      who1_title: 'छात्र',
      who1_desc: 'अपनी शिक्षा के साथ व्यावहारिक व्यवसाय और डिजिटल कौशल विकसित करें।',
      who2_title: 'इच्छुक उद्यमी',
      who2_desc: 'अपने व्यवसाय विचार को अधिक संरचित योजना में बदलें।',
      who3_title: 'मौजूदा व्यवसाय मालिक',
      who3_desc: 'मार्केटिंग, एनालिटिक्स, बजट और व्यवसाय प्रक्रियाओं की समझ मजबूत करें।',
      who4_title: 'कार्यरत पेशेवर',
      who4_desc: 'अपने मौजूदा अनुभव के पूरक व्यवसाय कौशल विकसित करें।',
      who5_title: 'करियर / व्यवसाय खोजकर्ता',
      who5_desc: 'अपनी शैक्षिक पृष्ठभूमि की परवाह किए बिना व्यावहारिक व्यवसाय ज्ञान खोजें।',

      // Compare
      compare_headline: 'यह कोर्स क्यों?',
      without_title: 'इन कौशलों के बिना',
      without1: 'असंरचित व्यवसाय निर्णय',
      without2: 'मार्केटिंग की सीमित समझ',
      without3: 'वित्तीय योजना में कठिनाई',
      without4: 'सीमित डिजिटल ज्ञान',
      without5: 'दस्तावेज़ीकरण के आसपास भ्रम',
      with_title: 'बिज़नेस मास्टरी विद AI के साथ',
      with1: 'व्यवसाय मूलभूत',
      with2: 'बिक्री और मार्केटिंग रणनीति',
      with3: 'व्यवसाय एनालिटिक्स',
      with4: 'बजट और लागत नियंत्रण',
      with5: 'व्यवसाय दस्तावेज़ीकरण',
      with6: 'AI-सहायता प्राप्त डिजिटल कौशल',
      compare_cta: 'अभी पूछताछ करें',

      // Trust
      trust_vitc: 'वंदना आईटी कोर्सेस',
      trust_mced: 'महाराष्ट्र उद्यमिता विकास केंद्र',
      trust_auth: 'MCED अधिकृत प्रशिक्षण केंद्र',
      trust_faculty_title: 'संकाय',
      trust_faculty: 'MCA और MBA संकाय | 9+ वर्ष अनुभव',

      // Offer
      offer_headline: 'अपने व्यवसाय कौशल बनाना शुरू करें।',
      offer_course: 'बिज़नेस मास्टरी विद AI',
      offer_special: 'विशेष ऑफर',
      offer_seats: 'सीमित सीटें उपलब्ध',
      offer_cta: 'अभी पूछताछ करें',

      // Form
      form_headline: 'अपनी व्यवसाय यात्रा शुरू करने के लिए तैयार हैं?',
      form_sub: 'अपने बारे में थोड़ी जानकारी बताएँ और हमारी टीम आपको कोर्स समझने में मदद कर सकती है।',
      form_call: 'कॉल करें',
      form_whatsapp: 'WhatsApp पर पूछताछ करें',
      form_location_label: 'स्थान:',
      label_name: 'पूरा नाम *',
      label_mobile: 'मोबाइल नंबर *',
      label_email: 'ईमेल पता *',
      label_background: 'वर्तमान पृष्ठभूमि *',
      label_preflang: 'पसंदीदा भाषा *',
      label_message: 'संदेश / आप क्या सीखना चाहते हैं?',
      opt_select: 'चुनें...',
      opt_student: 'छात्र',
      opt_professional: 'कार्यरत पेशेवर',
      opt_owner: 'व्यवसाय मालिक',
      opt_entrepreneur: 'उद्यमी',
      opt_other: 'अन्य',
      form_submit: 'पूछताछ जमा करें',
      form_success: 'धन्यवाद! आपकी पूछताछ दर्ज हो गई है। हमारी टीम जल्द संपर्क करेगी।',
      form_note: 'नोट: फॉर्म डेटा इस पेज पर सत्यापित होता है। डेटा भेजने के लिए script.js में बैकएंड एंडपॉइंट जोड़ें।',

      // FAQ
      faq_headline: 'अक्सर पूछे जाने वाले प्रश्न',
      faq1_q: 'बिज़नेस मास्टरी विद AI कोर्स में कौन शामिल हो सकता है?',
      faq1_a: 'छात्र, इच्छुक उद्यमी, मौजूदा व्यवसाय मालिक, कार्यरत पेशेवर और व्यवसाय समझना चाहने वाला कोई भी — किसी भी शैक्षिक पृष्ठभूमि से। कोई भी उम्र। कोई भी पृष्ठभूमि।',
      faq2_q: 'क्या मुझे विशिष्ट शैक्षिक पृष्ठभूमि की आवश्यकता है?',
      faq2_a: 'नहीं। यह कोर्स विभिन्न शैक्षिक पृष्ठभूमि के लोगों के लिए डिज़ाइन किया गया है। कोई विशिष्ट पूर्व योग्यता आवश्यक नहीं है।',
      faq3_q: 'क्या यह कोर्स उद्यमियों के लिए उपयोगी है?',
      faq3_a: 'हाँ। यह व्यवसाय शुरू करने, प्रबंधन और विकास के लिए व्यावहारिक कोर्स है, जिसमें व्यवसाय मूलभूत, बिक्री और मार्केटिंग, एनालिटिक्स, बजट, दस्तावेज़ीकरण और AI-सहायता प्राप्त डिजिटल कौशल शामिल हैं।',
      faq4_q: 'कौन से विषय शामिल हैं?',
      faq4_a: 'व्यवसाय मूल कौशल, बिक्री और मार्केटिंग रणनीति, AI के साथ वेब डेवलपमेंट बेसिक्स, एडवांस्ड एक्सेल और व्यवसाय एनालिटिक्स, बजट और लागत नियंत्रण, और व्यवसाय दस्तावेज़ीकरण। आपको सरकारी योजनाओं, व्यवसाय कानून और लाइसेंस की जागरूकता मिलती है और MCED प्रमाणन के साथ उद्यमी प्रोफ़ाइल बनता है।',
      faq5_q: 'क्या कोर्स में AI संबंधित शिक्षा शामिल है?',
      faq5_a: 'हाँ। कोर्स में AI के साथ वेब डेवलपमेंट बेसिक्स और AI-सहायता प्राप्त डिजिटल कौशल व्यावहारिक व्यवसाय शिक्षा के भाग के रूप में शामिल हैं।',
      faq6_q: 'कोर्स शुल्क क्या है?',
      faq6_a: 'विशेष ऑफर: ₹11,800/- (मूल उल्लेखित शुल्क: ₹25,500/-)। सीमित सीटें उपलब्ध।',
      faq7_q: 'VITC कहाँ स्थित है?',
      faq7_a: 'VITC, श्री राज नगर, कामठा रोड, उरण।',
      faq8_q: 'कोर्स के बारे में पूछताछ कैसे करें?',
      faq8_a: 'इस पेज पर पूछताछ फॉर्म भरें, 9967874887 पर कॉल करें, या WhatsApp पर संदेश भेजें। हमारी टीम आपको कोर्स समझने में मदद कर सकती है।',

      // Final
      final_headline: 'आपकी व्यवसाय यात्रा एक निर्णय से शुरू हो सकती है।',
      final_sub: 'बिज़नेस मास्टरी विद AI के माध्यम से व्यवसाय मूलभूत, डिजिटल कौशल, एनालिटिक्स और AI-सहायता प्राप्त टूल्स सीखें।',
      final_cta1: 'अभी पूछताछ करें',

      // Footer
      footer_mced: 'MCED अधिकृत प्रशिक्षण केंद्र',
    },
  };

  /* ---------- LANGUAGE SWITCHER ---------- */
  let currentLang = 'en';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang === 'mr' ? 'mr' : lang === 'hi' ? 'hi' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Update select options that have data-i18n
    document.querySelectorAll('select option[data-i18n]').forEach(function (opt) {
      const key = opt.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        opt.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try {
      localStorage.setItem('vitc_lang', lang);
    } catch (e) { /* ignore */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Restore saved language
  try {
    const saved = localStorage.getItem('vitc_lang');
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  } catch (e) { /* ignore */ }

  /* ---------- NAVBAR ---------- */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', function () {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- SCROLL ANIMATIONS ---------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- FORM VALIDATION ---------- */
  const form = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');
  const formNote = document.getElementById('formNote');

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearErrors() {
    ['errName', 'errMobile', 'errEmail', 'errBackground', 'errPrefLang'].forEach(function (id) {
      showError(id, '');
    });
    form.querySelectorAll('.error').forEach(function (el) {
      el.classList.remove('error');
    });
  }

  function isValidIndianMobile(num) {
    return /^[6-9]\d{9}$/.test(num);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * ============================================================
   * BACKEND CONNECTION POINT
   * Replace the body of this function with your API call.
   * Example:
   *   fetch('https://your-api.com/enquiry', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify(data)
   *   }).then(...)
   * ============================================================
   */
  function submitEnquiryToBackend(data) {
    // Currently no backend — data is only validated client-side.
    // Connect your endpoint here.
    console.log('Enquiry data (ready for backend):', data);
    return Promise.resolve({ ok: true });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      const name = document.getElementById('fullName').value.trim();
      const mobile = document.getElementById('mobile').value.trim().replace(/\s/g, '');
      const email = document.getElementById('email').value.trim();
      const background = document.getElementById('background').value;
      const prefLang = document.getElementById('prefLang').value;
      const message = document.getElementById('message').value.trim();

      let valid = true;

      if (!name || name.length < 2) {
        showError('errName', currentLang === 'mr' ? 'कृपया वैध नाव प्रविष्ट करा' : currentLang === 'hi' ? 'कृपया वैध नाम दर्ज करें' : 'Please enter a valid name');
        document.getElementById('fullName').classList.add('error');
        valid = false;
      }

      if (!isValidIndianMobile(mobile)) {
        showError('errMobile', currentLang === 'mr' ? 'कृपया वैध १०-अंकी मोबाइल नंबर प्रविष्ट करा' : currentLang === 'hi' ? 'कृपया वैध 10-अंकीय मोबाइल नंबर दर्ज करें' : 'Please enter a valid 10-digit mobile number');
        document.getElementById('mobile').classList.add('error');
        valid = false;
      }

      if (!isValidEmail(email)) {
        showError('errEmail', currentLang === 'mr' ? 'कृपया वैध ईमेल प्रविष्ट करा' : currentLang === 'hi' ? 'कृपया वैध ईमेल दर्ज करें' : 'Please enter a valid email');
        document.getElementById('email').classList.add('error');
        valid = false;
      }

      if (!background) {
        showError('errBackground', currentLang === 'mr' ? 'कृपया पार्श्वभूमी निवडा' : currentLang === 'hi' ? 'कृपया पृष्ठभूमि चुनें' : 'Please select your background');
        document.getElementById('background').classList.add('error');
        valid = false;
      }

      if (!prefLang) {
        showError('errPrefLang', currentLang === 'mr' ? 'कृपया भाषा निवडा' : currentLang === 'hi' ? 'कृपया भाषा चुनें' : 'Please select preferred language');
        document.getElementById('prefLang').classList.add('error');
        valid = false;
      }

      if (!valid) return;

      const data = {
        fullName: name,
        mobile: mobile,
        email: email,
        background: background,
        preferredLanguage: prefLang,
        message: message,
        course: 'Business Mastery With AI',
        source: 'landing-page',
        timestamp: new Date().toISOString(),
      };

      submitEnquiryToBackend(data).then(function () {
        formSuccess.hidden = false;
        formNote.hidden = false;
        form.reset();
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  /* ---------- YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- STICKY CTA visibility ---------- */
  const stickyCta = document.getElementById('stickyCta');
  const enquireSection = document.getElementById('enquire');

  if (stickyCta && enquireSection && 'IntersectionObserver' in window) {
    const stickyObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          // Hide sticky when enquiry section is visible
          stickyCta.style.display = entry.isIntersecting ? 'none' : '';
        });
      },
      { threshold: 0.15 }
    );
    stickyObs.observe(enquireSection);
  }
})();
