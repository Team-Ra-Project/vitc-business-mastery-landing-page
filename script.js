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
      hero_headline: 'Build Business Skills. Use AI. Grow With Confidence.',
      hero_sub: 'Learn how business works — from marketing and analytics to budgeting, documentation and AI-assisted tools — so you can start, manage and grow with clarity.',
      hero_tagline: 'Any Age. Any Background. Start Your Journey.',
      hero_cta1: 'Enquire About the Course',
      hero_cta2: 'Explore the Course',
      hero_visual_label: 'Business Growth',

      // Problem
      problem_headline: 'You Have Knowledge. But Business Needs More Than That.',
      problem_lead: 'A degree, a skill or a good idea is a start. Building a business also needs structure, marketing sense, financial clarity and practical digital skills.',
      prob1_title: 'Idea, But No Starting Point',
      prob1_text: 'You have a business idea but don\'t know where to begin or what to do first.',
      prob1_sol: '→ Learn where to start and how to structure it',
      prob2_title: 'Struggle to Attract Customers',
      prob2_text: 'You want customers, but marketing feels unclear or ineffective.',
      prob2_sol: '→ Learn practical sales & marketing strategy',
      prob3_title: 'Expenses Feel Out of Control',
      prob3_text: 'You\'re not sure if your costs are under control or how to plan money better.',
      prob3_sol: '→ Learn budgeting & cost control',
      prob4_title: 'Documents Feel Confusing',
      prob4_text: 'Business paperwork, proposals and documentation feel complicated.',
      prob4_sol: '→ Learn clear business documentation',
      prob5_title: 'Want Better Decisions From Data',
      prob5_text: 'You want to use data and analytics, not just guesswork.',
      prob5_sol: '→ Learn business analytics for decisions',
      prob6_title: 'Want to Use AI Practically',
      prob6_text: 'You\'ve heard about AI, but don\'t know how to apply it in real business work.',
      prob6_sol: '→ Learn AI-assisted digital workflows',
      consequences_title: 'What Continues Without These Skills',
      cons1: 'Unclear decisions',
      cons2: 'Missed opportunities',
      cons3: 'Poor planning',
      cons4: 'Uncontrolled costs',
      cons5: 'Weak processes',
      cons6: 'Difficulty growing',

      // Future
      future_headline: 'What Happens If These Gaps Stay?',
      timeline_today: 'TODAY',
      timeline_1: 'Unclear decisions',
      timeline_2: 'Missed opportunities',
      timeline_3: 'Unplanned expenses',
      timeline_4: 'Weak business processes',
      timeline_5: 'Difficulty growing',
      future_comp: 'While you wait, others are learning, adapting and using better tools.',
      future_need: 'Business today needs more than effort. It needs digital skills, data understanding, marketing knowledge, financial awareness and practical AI tools.',
      future_good: 'The good news? These are skills you can learn.',
      transition_text: 'THIS IS WHERE BUSINESS MASTERY WITH AI COMES IN.',

      // Solution
      solution_headline: 'Turn Skill Gaps Into Practical Business Ability.',
      solution_course: 'Business Mastery With AI',
      solution_desc: 'A practical path to learn, apply and understand business — covering fundamentals, sales & marketing, AI & digital skills, analytics, budgeting and documentation — so you can build with more clarity.',
      trans1: 'LEARN',
      trans2: 'APPLY',
      trans3: 'UNDERSTAND',
      trans4: 'BUILD',
      trans5: 'GROW',

      // Curriculum
      learn_headline: 'What You Will Learn — And Why It Matters',
      topic1_title: 'Business Core Skills',
      topic1_desc: 'Know how a business actually runs — structure, operations and core decisions.',
      topic2_title: 'Sales & Marketing Strategy',
      topic2_desc: 'Attract customers and build marketing that works for your business.',
      topic3_title: 'Web Development Basics with AI',
      topic3_desc: 'Use web basics and AI tools to support your digital business work.',
      topic4_title: 'Advanced Excel & Business Analytics',
      topic4_desc: 'Read numbers, understand trends and decide with data — not guesswork.',
      topic5_title: 'Budgeting & Cost Control',
      topic5_desc: 'Plan money better and keep business costs under control.',
      topic6_title: 'Business Documentation',
      topic6_desc: 'Create clear proposals, records and documents that support your business.',

      // Benefits
      benefits_headline: 'What You Walk Away With',
      ben1: 'Understand government schemes and subsidy opportunities',
      ben2: 'Understand business laws, licences and regulations',
      ben3: 'Build your entrepreneurial profile with MCED Certification',
      ben4: 'Develop business proposals and projects',
      ben5: 'Learn practical AI-assisted digital workflows for real business work',

      // Who
      who_headline: 'Any Age. Any Background. Start Your Journey.',
      who1_title: 'STUDENTS',
      who1_desc: 'Learn practical business and digital skills beyond your classroom.',
      who2_title: 'ASPIRING ENTREPRENEURS',
      who2_desc: 'Turn your idea into a more structured business direction.',
      who3_title: 'EXISTING BUSINESS OWNERS',
      who3_desc: 'Strengthen marketing, analytics, budgeting and day-to-day processes.',
      who4_title: 'WORKING PROFESSIONALS',
      who4_desc: 'Add practical business and AI skills to your existing experience.',
      who5_title: 'CAREER / BUSINESS EXPLORERS',
      who5_desc: 'Start learning business fundamentals regardless of your educational background.',

      // Compare
      compare_headline: 'From Confusion to Clarity',
      without_title: 'Without These Skills',
      without1: 'Confusion around decisions',
      without2: 'Ideas without structure',
      without3: 'Manual, inefficient work',
      without4: 'Decisions based on assumptions',
      without5: 'Scattered, incomplete knowledge',
      with_title: 'With Business Mastery With AI',
      with1: 'Clarity in how business works',
      with2: 'Structure for your ideas',
      with3: 'AI-assisted workflows',
      with4: 'Data-informed decisions',
      with5: 'Practical business skills',
      with6: 'Stronger foundation to grow',
      compare_cta: 'Enquire Now',

      // Trust
      trust_vitc: 'Vandana IT Courses',
      trust_mced: 'Maharashtra Centre for Entrepreneurship Development',
      trust_auth: 'MCED Authorized Training Centre',
      trust_faculty_title: 'Faculty',
      trust_faculty: 'MCA & MBA Faculty | 9+ Years Experience',

      // Offer
      offer_headline: 'Start Building the Skills Your Business Needs.',
      offer_course: 'Business Mastery With AI',
      offer_special: 'Special Offer',
      offer_seats: 'Limited Seats Available',
      offer_cta: 'Enquire Now',

      // Form
      form_headline: 'Ready to Build Your Business Skills?',
      form_sub: 'Whether you\'re a student, professional, entrepreneur or business owner — your next step can start with learning the right skills.',
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
      final_headline: 'Your Business Journey Starts With Learning the Right Skills.',
      final_sub: 'Business Mastery With AI helps you learn practical business, marketing, analytics, budgeting and AI-assisted skills — at any age, from any background.',
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
      hero_headline: 'व्यवसाय कौशल्ये शिका. AI वापरा. आत्मविश्वासाने वाढा.',
      hero_sub: 'व्यवसाय कसा चालतो ते शिका — विपणन, विश्लेषण, अंदाजपत्रक, दस्तऐवजीकरण आणि AI-सहाय्यित साधने — जेणेकरून तुम्ही स्पष्टतेने सुरू करू शकता, व्यवस्थापित करू शकता आणि वाढू शकता.',
      hero_tagline: 'कोणतेही वय. कोणताही पार्श्वभूमी. तुमचा प्रवास सुरू करा.',
      hero_cta1: 'कोर्सबद्दल चौकशी करा',
      hero_cta2: 'कोर्स पाहा',
      hero_visual_label: 'व्यवसाय वाढ',

      // Problem
      problem_headline: 'तुमच्याकडे ज्ञान आहे. पण व्यवसायाला त्यापेक्षा अधिक हवे.',
      problem_lead: 'पदवी, कौशल्य किंवा चांगली कल्पना ही सुरुवात आहे. व्यवसाय उभारण्यासाठी संरचना, विपणन समज, आर्थिक स्पष्टता आणि व्यावहारिक डिजिटल कौशल्येही लागतात.',
      prob1_title: 'कल्पना आहे, पण सुरुवात नाही',
      prob1_text: 'तुमच्याकडे व्यवसाय कल्पना आहे पण कुठून सुरू करावे किंवा काय करावे हे समजत नाही.',
      prob1_sol: '→ कुठून सुरू करावे आणि कसे संरचित करावे ते शिका',
      prob2_title: 'ग्राहक आकर्षित करण्यात अडचण',
      prob2_text: 'ग्राहक हवेत, पण विपणन अस्पष्ट किंवा अप्रभावी वाटते.',
      prob2_sol: '→ व्यावहारिक विक्री व विपणन धोरण शिका',
      prob3_title: 'खर्च नियंत्रणाबाहेर वाटतात',
      prob3_text: 'खर्च नियंत्रणात आहेत का किंवा पैसे कसे नियोजित करावेत हे स्पष्ट नाही.',
      prob3_sol: '→ अंदाजपत्रक व खर्च नियंत्रण शिका',
      prob4_title: 'दस्तऐवज गोंधळात टाकतात',
      prob4_text: 'व्यवसाय कागदपत्रे, प्रस्ताव आणि दस्तऐवजीकरण क्लिष्ट वाटते.',
      prob4_sol: '→ स्पष्ट व्यवसाय दस्तऐवजीकरण शिका',
      prob5_title: 'डेटावरून चांगले निर्णय हवेत',
      prob5_text: 'केवळ अंदाज नको — डेटा आणि विश्लेषण वापरायचे आहे.',
      prob5_sol: '→ निर्णयांसाठी व्यवसाय विश्लेषण शिका',
      prob6_title: 'AI प्रत्यक्षात वापरायचे आहे',
      prob6_text: 'AI बद्दल ऐकले आहे, पण वास्तविक व्यवसाय कामात कसे लागू करायचे हे समजत नाही.',
      prob6_sol: '→ AI-सहाय्यित डिजिटल कार्यप्रवाह शिका',
      consequences_title: 'ही कौशल्ये नसल्यास काय सुरू राहते',
      cons1: 'अस्पष्ट निर्णय',
      cons2: 'गमावलेल्या संधी',
      cons3: 'खराब नियोजन',
      cons4: 'अनियंत्रित खर्च',
      cons5: 'कमकुवत प्रक्रिया',
      cons6: 'वाढ करण्यात अडचण',

      // Future
      future_headline: 'ही अंतरे कायम राहिल्यास काय होते?',
      timeline_today: 'आज',
      timeline_1: 'अस्पष्ट निर्णय',
      timeline_2: 'गमावलेल्या संधी',
      timeline_3: 'अनियोजित खर्च',
      timeline_4: 'कमकुवत व्यवसाय प्रक्रिया',
      timeline_5: 'वाढ करण्यात अडचण',
      future_comp: 'तुम्ही थांबताना इतर शिकत आहेत, जुळवून घेत आहेत आणि चांगली साधने वापरत आहेत.',
      future_need: 'आजच्या व्यवसायाला केवळ मेहनतीपेक्षा अधिक हवे. डिजिटल कौशल्ये, डेटा समज, विपणन ज्ञान, आर्थिक जागरूकता आणि व्यावहारिक AI साधने लागतात.',
      future_good: 'चांगली बातमी? ही कौशल्ये तुम्ही शिकू शकता.',
      transition_text: 'इथेच बिझनेस मास्टरी विथ AI येते.',

      // Solution
      solution_headline: 'कौशल्य अंतरे व्यावहारिक व्यवसाय क्षमतेत बदला.',
      solution_course: 'बिझनेस मास्टरी विथ AI',
      solution_desc: 'व्यवसाय शिकणे, लागू करणे आणि समजून घेण्याचा व्यावहारिक मार्ग — मूलभूत, विक्री व विपणन, AI व डिजिटल कौशल्ये, विश्लेषण, अंदाजपत्रक आणि दस्तऐवजीकरण — जेणेकरून तुम्ही अधिक स्पष्टतेने उभारू शकता.',
      trans1: 'शिका',
      trans2: 'लागू करा',
      trans3: 'समजून घ्या',
      trans4: 'उभारा',
      trans5: 'वाढा',

      // Curriculum
      learn_headline: 'तुम्ही काय शिकाल — आणि ते का महत्त्वाचे आहे',
      topic1_title: 'व्यवसाय मूलभूत कौशल्ये',
      topic1_desc: 'व्यवसाय खरोखर कसा चालतो ते जाणा — संरचना, कार्ये आणि मुख्य निर्णय.',
      topic2_title: 'विक्री व विपणन धोरण',
      topic2_desc: 'ग्राहक आकर्षित करा आणि तुमच्या व्यवसायासाठी काम करणारे विपणन तयार करा.',
      topic3_title: 'AI सह वेब डेव्हलपमेंट मूलभूत',
      topic3_desc: 'डिजिटल व्यवसाय कामासाठी वेब मूलभूत आणि AI साधने वापरा.',
      topic4_title: 'अॅडव्हान्स्ड एक्सेल व व्यवसाय विश्लेषण',
      topic4_desc: 'आकडे वाचा, ट्रेंड समजून घ्या आणि अंदाजाऐवजी डेटावर निर्णय घ्या.',
      topic5_title: 'अंदाजपत्रक व खर्च नियंत्रण',
      topic5_desc: 'पैसे चांगले नियोजित करा आणि व्यवसाय खर्च नियंत्रणात ठेवा.',
      topic6_title: 'व्यवसाय दस्तऐवजीकरण',
      topic6_desc: 'व्यवसायाला आधार देणारे स्पष्ट प्रस्ताव, नोंदी आणि दस्तऐवज तयार करा.',

      // Benefits
      benefits_headline: 'तुम्ही काय घेऊन जाता',
      ben1: 'सरकारी योजना व अनुदान संधी समजून घ्या',
      ben2: 'व्यवसाय कायदे, परवाने व नियम समजून घ्या',
      ben3: 'MCED प्रमाणपत्रासह उद्योजक प्रोफाइल तयार करा',
      ben4: 'व्यवसाय प्रस्ताव व प्रकल्प विकसित करा',
      ben5: 'वास्तविक व्यवसाय कामासाठी व्यावहारिक AI-सहाय्यित डिजिटल कार्यप्रवाह शिका',

      // Who
      who_headline: 'कोणतेही वय. कोणताही पार्श्वभूमी. तुमचा प्रवास सुरू करा.',
      who1_title: 'विद्यार्थी',
      who1_desc: 'वर्गखोलीपलीकडे व्यावहारिक व्यवसाय आणि डिजिटल कौशल्ये शिका.',
      who2_title: 'इच्छुक उद्योजक',
      who2_desc: 'तुमच्या कल्पनेला अधिक संरचित व्यवसाय दिशेत बदला.',
      who3_title: 'विद्यमान व्यवसाय मालक',
      who3_desc: 'विपणन, विश्लेषण, अंदाजपत्रक आणि दैनंदिन प्रक्रिया मजबूत करा.',
      who4_title: 'कार्यरत व्यावसायिक',
      who4_desc: 'विद्यमान अनुभवास व्यावहारिक व्यवसाय आणि AI कौशल्ये जोडा.',
      who5_title: 'करिअर / व्यवसाय शोधक',
      who5_desc: 'शैक्षणिक पार्श्वभूमीकडे दुर्लक्ष करून व्यवसाय मूलभूत शिकण्यास सुरूवात करा.',

      // Compare
      compare_headline: 'गोंधळापासून स्पष्टतेकडे',
      without_title: 'ही कौशल्ये नसल्यास',
      without1: 'निर्णयांभोवती गोंधळ',
      without2: 'संरचनेविना कल्पना',
      without3: 'मॅन्युअल, अकार्यक्षम काम',
      without4: 'अंदाजावर आधारित निर्णय',
      without5: 'विखुरलेले, अपूर्ण ज्ञान',
      with_title: 'बिझनेस मास्टरी विथ AI सह',
      with1: 'व्यवसाय कसा चालतो याची स्पष्टता',
      with2: 'कल्पनांसाठी संरचना',
      with3: 'AI-सहाय्यित कार्यप्रवाह',
      with4: 'डेटा-आधारित निर्णय',
      with5: 'व्यावहारिक व्यवसाय कौशल्ये',
      with6: 'वाढीसाठी मजबूत पाया',
      compare_cta: 'आता चौकशी करा',

      // Trust
      trust_vitc: 'वंदना आयटी कोर्सेस',
      trust_mced: 'महाराष्ट्र उद्योजकता विकास केंद्र',
      trust_auth: 'MCED अधिकृत प्रशिक्षण केंद्र',
      trust_faculty_title: 'फॅकल्टी',
      trust_faculty: 'MCA व MBA फॅकल्टी | ९+ वर्षे अनुभव',

      // Offer
      offer_headline: 'तुमच्या व्यवसायाला हवी ती कौशल्ये तयार करण्यास सुरूवात करा.',
      offer_course: 'बिझनेस मास्टरी विथ AI',
      offer_special: 'विशेष ऑफर',
      offer_seats: 'मर्यादित जागा उपलब्ध',
      offer_cta: 'आता चौकशी करा',

      // Form
      form_headline: 'व्यवसाय कौशल्ये तयार करण्यास तयार आहात?',
      form_sub: 'तुम्ही विद्यार्थी, व्यावसायिक, उद्योजक किंवा व्यवसाय मालक असलात तरी — पुढचे पाऊल योग्य कौशल्ये शिकण्यापासून सुरू होऊ शकते.',
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
      final_headline: 'तुमचा व्यवसाय प्रवास योग्य कौशल्ये शिकण्यापासून सुरू होतो.',
      final_sub: 'बिझनेस मास्टरी विथ AI तुम्हाला व्यावहारिक व्यवसाय, विपणन, विश्लेषण, अंदाजपत्रक आणि AI-सहाय्यित कौशल्ये शिकण्यास मदत करते — कोणतेही वय, कोणताही पार्श्वभूमी.',
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
      hero_headline: 'व्यवसाय कौशल सीखें। AI उपयोग करें। आत्मविश्वास से बढ़ें।',
      hero_sub: 'व्यवसाय कैसे चलता है सीखें — मार्केटिंग, एनालिटिक्स, बजट, दस्तावेज़ीकरण और AI-सहायता प्राप्त टूल्स — ताकि आप स्पष्टता के साथ शुरू, प्रबंधित और विकसित कर सकें।',
      hero_tagline: 'कोई भी उम्र। कोई भी पृष्ठभूमि। अपनी यात्रा शुरू करें।',
      hero_cta1: 'कोर्स के बारे में पूछताछ करें',
      hero_cta2: 'कोर्स देखें',
      hero_visual_label: 'व्यवसाय विकास',

      // Problem
      problem_headline: 'आपके पास ज्ञान है। लेकिन व्यवसाय को उससे अधिक चाहिए।',
      problem_lead: 'डिग्री, कौशल या अच्छा विचार शुरुआत है। व्यवसाय बनाने के लिए संरचना, मार्केटिंग समझ, वित्तीय स्पष्टता और व्यावहारिक डिजिटल कौशल भी चाहिए।',
      prob1_title: 'विचार है, लेकिन शुरुआत नहीं',
      prob1_text: 'व्यवसाय का विचार है लेकिन कहाँ से शुरू करें या पहले क्या करें, यह स्पष्ट नहीं।',
      prob1_sol: '→ कहाँ से शुरू करें और कैसे संरचित करें, सीखें',
      prob2_title: 'ग्राहक आकर्षित करने में कठिनाई',
      prob2_text: 'ग्राहक चाहिए, लेकिन मार्केटिंग अस्पष्ट या अप्रभावी लगती है।',
      prob2_sol: '→ व्यावहारिक बिक्री और मार्केटिंग रणनीति सीखें',
      prob3_title: 'खर्च नियंत्रण से बाहर लगते हैं',
      prob3_text: 'पक्का नहीं कि लागत नियंत्रण में है या पैसे की योजना कैसे बनाएँ।',
      prob3_sol: '→ बजट और लागत नियंत्रण सीखें',
      prob4_title: 'दस्तावेज़ भ्रमित करते हैं',
      prob4_text: 'व्यवसाय कागज़ात, प्रस्ताव और दस्तावेज़ीकरण जटिल लगते हैं।',
      prob4_sol: '→ स्पष्ट व्यवसाय दस्तावेज़ीकरण सीखें',
      prob5_title: 'डेटा से बेहतर निर्णय चाहिए',
      prob5_text: 'केवल अनुमान नहीं — डेटा और एनालिटिक्स उपयोग करना चाहते हैं।',
      prob5_sol: '→ निर्णयों के लिए व्यवसाय एनालिटिक्स सीखें',
      prob6_title: 'AI को व्यावहारिक रूप से उपयोग करना है',
      prob6_text: 'AI के बारे में सुना है, लेकिन वास्तविक व्यवसाय काम में कैसे लागू करें, नहीं पता।',
      prob6_sol: '→ AI-सहायता प्राप्त डिजिटल वर्कफ़्लो सीखें',
      consequences_title: 'इन कौशलों के बिना क्या जारी रहता है',
      cons1: 'अस्पष्ट निर्णय',
      cons2: 'चूके हुए अवसर',
      cons3: 'खराब योजना',
      cons4: 'अनियंत्रित लागत',
      cons5: 'कमज़ोर प्रक्रियाएँ',
      cons6: 'विकास में कठिनाई',

      // Future
      future_headline: 'ये अंतर बने रहे तो क्या होता है?',
      timeline_today: 'आज',
      timeline_1: 'अस्पष्ट निर्णय',
      timeline_2: 'चूके हुए अवसर',
      timeline_3: 'अनियोजित खर्च',
      timeline_4: 'कमज़ोर व्यवसाय प्रक्रियाएँ',
      timeline_5: 'विकास में कठिनाई',
      future_comp: 'जब आप प्रतीक्षा करते हैं, दूसरे सीख रहे हैं, अनुकूलन कर रहे हैं और बेहतर टूल्स उपयोग कर रहे हैं।',
      future_need: 'आज के व्यवसाय को केवल मेहनत से अधिक चाहिए। डिजिटल कौशल, डेटा समझ, मार्केटिंग ज्ञान, वित्तीय जागरूकता और व्यावहारिक AI टूल्स।',
      future_good: 'अच्छी खबर? ये कौशल आप सीख सकते हैं।',
      transition_text: 'यहीं बिज़नेस मास्टरी विद AI आता है।',

      // Solution
      solution_headline: 'कौशल अंतराल को व्यावहारिक व्यवसाय क्षमता में बदलें।',
      solution_course: 'बिज़नेस मास्टरी विद AI',
      solution_desc: 'व्यवसाय सीखने, लागू करने और समझने का व्यावहारिक मार्ग — मूलभूत, बिक्री और मार्केटिंग, AI और डिजिटल कौशल, एनालिटिक्स, बजट और दस्तावेज़ीकरण — ताकि आप अधिक स्पष्टता के साथ बना सकें।',
      trans1: 'सीखें',
      trans2: 'लागू करें',
      trans3: 'समझें',
      trans4: 'बनाएँ',
      trans5: 'बढ़ें',

      // Curriculum
      learn_headline: 'आप क्या सीखेंगे — और यह क्यों मायने रखता है',
      topic1_title: 'व्यवसाय मूल कौशल',
      topic1_desc: 'व्यवसाय वास्तव में कैसे चलता है जानें — संरचना, संचालन और मुख्य निर्णय।',
      topic2_title: 'बिक्री और मार्केटिंग रणनीति',
      topic2_desc: 'ग्राहक आकर्षित करें और अपने व्यवसाय के लिए काम करने वाला मार्केटिंग बनाएँ।',
      topic3_title: 'AI के साथ वेब डेवलपमेंट बेसिक्स',
      topic3_desc: 'डिजिटल व्यवसाय काम के लिए वेब बेसिक्स और AI टूल्स उपयोग करें।',
      topic4_title: 'एडवांस्ड एक्सेल और व्यवसाय एनालिटिक्स',
      topic4_desc: 'आँकड़े पढ़ें, रुझान समझें और अनुमान के बजाय डेटा पर निर्णय लें।',
      topic5_title: 'बजट और लागत नियंत्रण',
      topic5_desc: 'पैसे की बेहतर योजना बनाएँ और व्यवसाय लागत नियंत्रण में रखें।',
      topic6_title: 'व्यवसाय दस्तावेज़ीकरण',
      topic6_desc: 'व्यवसाय का समर्थन करने वाले स्पष्ट प्रस्ताव, रिकॉर्ड और दस्तावेज़ बनाएँ।',

      // Benefits
      benefits_headline: 'आप क्या लेकर जाते हैं',
      ben1: 'सरकारी योजनाएँ और सब्सिडी अवसर समझें',
      ben2: 'व्यवसाय कानून, लाइसेंस और नियम समझें',
      ben3: 'MCED प्रमाणन के साथ अपना उद्यमी प्रोफ़ाइल बनाएँ',
      ben4: 'व्यवसाय प्रस्ताव और परियोजनाएँ विकसित करें',
      ben5: 'वास्तविक व्यवसाय काम के लिए व्यावहारिक AI-सहायता प्राप्त डिजिटल वर्कफ़्लो सीखें',

      // Who
      who_headline: 'कोई भी उम्र। कोई भी पृष्ठभूमि। अपनी यात्रा शुरू करें।',
      who1_title: 'छात्र',
      who1_desc: 'कक्षा से आगे व्यावहारिक व्यवसाय और डिजिटल कौशल सीखें।',
      who2_title: 'इच्छुक उद्यमी',
      who2_desc: 'अपने विचार को अधिक संरचित व्यवसाय दिशा में बदलें।',
      who3_title: 'मौजूदा व्यवसाय मालिक',
      who3_desc: 'मार्केटिंग, एनालिटिक्स, बजट और दैनिक प्रक्रियाओं को मजबूत करें।',
      who4_title: 'कार्यरत पेशेवर',
      who4_desc: 'मौजूदा अनुभव में व्यावहारिक व्यवसाय और AI कौशल जोड़ें।',
      who5_title: 'करियर / व्यवसाय खोजकर्ता',
      who5_desc: 'शैक्षिक पृष्ठभूमि की परवाह किए बिना व्यवसाय मूलभूत सीखना शुरू करें।',

      // Compare
      compare_headline: 'भ्रम से स्पष्टता तक',
      without_title: 'इन कौशलों के बिना',
      without1: 'निर्णयों के आसपास भ्रम',
      without2: 'संरचना के बिना विचार',
      without3: 'मैन्युअल, अकुशल काम',
      without4: 'अनुमान पर आधारित निर्णय',
      without5: 'बिखरा, अधूरा ज्ञान',
      with_title: 'बिज़नेस मास्टरी विद AI के साथ',
      with1: 'व्यवसाय कैसे चलता है इसकी स्पष्टता',
      with2: 'विचारों के लिए संरचना',
      with3: 'AI-सहायता प्राप्त वर्कफ़्लो',
      with4: 'डेटा-आधारित निर्णय',
      with5: 'व्यावहारिक व्यवसाय कौशल',
      with6: 'विकास के लिए मजबूत आधार',
      compare_cta: 'अभी पूछताछ करें',

      // Trust
      trust_vitc: 'वंदना आईटी कोर्सेस',
      trust_mced: 'महाराष्ट्र उद्यमिता विकास केंद्र',
      trust_auth: 'MCED अधिकृत प्रशिक्षण केंद्र',
      trust_faculty_title: 'संकाय',
      trust_faculty: 'MCA और MBA संकाय | 9+ वर्ष अनुभव',

      // Offer
      offer_headline: 'अपने व्यवसाय को ज़रूरी कौशल बनाना शुरू करें।',
      offer_course: 'बिज़नेस मास्टरी विद AI',
      offer_special: 'विशेष ऑफर',
      offer_seats: 'सीमित सीटें उपलब्ध',
      offer_cta: 'अभी पूछताछ करें',

      // Form
      form_headline: 'व्यवसाय कौशल बनाने के लिए तैयार हैं?',
      form_sub: 'चाहे आप छात्र, पेशेवर, उद्यमी या व्यवसाय मालिक हों — आपका अगला कदम सही कौशल सीखने से शुरू हो सकता है।',
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
      final_headline: 'आपकी व्यवसाय यात्रा सही कौशल सीखने से शुरू होती है।',
      final_sub: 'बिज़नेस मास्टरी विद AI आपको व्यावहारिक व्यवसाय, मार्केटिंग, एनालिटिक्स, बजट और AI-सहायता प्राप्त कौशल सीखने में मदद करता है — किसी भी उम्र, किसी भी पृष्ठभूमि से।',
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
