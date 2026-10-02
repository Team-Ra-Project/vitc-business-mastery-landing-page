/* VITC – Business AI & Digital Transform */
(function () {
  'use strict';

  const translations = {
    en: {
      nav_home: 'Home', nav_problem: 'The Problem', nav_course: 'The Program', nav_benefits: 'The Result',
      nav_who: "Who It's For", nav_faq: 'FAQ', nav_enquire: 'Enquire', nav_cta: 'Enquire Now', sticky_cta: 'Enquire Now',
      hero_badge1: 'MCED Authorized Training Centre', hero_badge2: 'VITC – Uran',
      hero_course_label: 'VITC BUSINESS AI & DIGITAL TRANSFORM PROGRAM',
      hero_headline: 'YOUR BUSINESS IS CHANGING.',
      hero_subhead: 'BUT IS YOUR BUSINESS CHANGING WITH IT?',
      hero_sub: 'You may already be losing customers, time and opportunities without realizing it.',
      hero_tagline: "Don't just learn technology. Learn how to use it to solve business problems.",
      hero_cta1: 'Enquire Now', hero_cta2: "See What You'll Learn", hero_visual_label: 'Digital Growth',
      problem_headline: 'Your Competitors Are Moving Ahead',
      problem_lead: 'Your competitors are using Digital Marketing, AI, Automation, Data and Online Systems to work faster and reach more customers.',
      problem_lead2: 'Meanwhile, many businesses are still depending on:',
      prob1_title: 'Word-of-Mouth for Customers',
      prob2_title: 'Manual Work for Daily Operations',
      prob3_title: 'Random Social Media Posting',
      prob4_title: 'WhatsApp Messages Without a Proper System',
      prob5_title: 'Excel Sheets Without Useful Business Insights',
      prob6_title: 'Traditional Methods for Tasks AI Can Now Simplify',
      lost_headline: 'WHAT HAVE YOU ALREADY LOST?',
      lost_lead: 'Every month you delay adopting better systems, you may be losing:',
      lost1_title: 'Customers', lost1_text: 'People who searched online but found a competitor instead.',
      lost2_title: 'Time', lost2_text: 'Hours spent doing repetitive work that could be simplified or automated.',
      lost3_title: 'Leads', lost3_text: 'Potential customers who never reached you because your digital presence was weak.',
      lost4_title: 'Business Data', lost4_text: 'Important information sitting in spreadsheets without being converted into useful decisions.',
      lost5_title: 'Opportunities', lost5_text: 'New ways to market, sell, automate and grow that you may not even know how to use.',
      lost6_title: 'Competitive Advantage', lost6_text: 'While technology keeps moving forward, staying with old methods creates a growing gap.',
      years_headline: 'NOW THINK ABOUT THE NEXT 2–3 YEARS.',
      years_lead: 'What happens if you continue doing business the same way?',
      years_comp: 'Your competitors become better at:',
      years_1: 'Getting discovered online', years_2: 'Generating leads', years_3: 'Following up',
      years_4: 'Using AI', years_5: 'Automating work', years_6: 'Understanding data',
      years_gap: 'And the gap keeps growing.',
      years_hard: "The problem isn't that you don't work hard.",
      years_changed: 'THE PROBLEM IS THAT BUSINESS HAS CHANGED.',
      years_skills: 'And traditional business skills alone are no longer enough.',
      transition_text: 'SO WHAT IS THE SOLUTION?',
      solution_headline: 'VITC BUSINESS AI & DIGITAL TRANSFORM PROGRAM',
      solution_desc: 'A practical program designed to help you understand and implement the technology modern businesses are using.',
      solution_combine: 'You learn how to combine:',
      solution_stack: 'AI + Digital Marketing + Automation + Websites + Analytics + Business Systems',
      solution_into: 'into practical business applications.',
      solution_tag: "DON'T JUST LEARN TECHNOLOGY. LEARN HOW TO USE IT TO SOLVE BUSINESS PROBLEMS.",
      learn_headline: 'WHAT WILL YOU BE ABLE TO DO?',
      topic1_title: 'GET MORE VISIBILITY', topic1_intro: 'Build your digital presence through:',
      topic1_1: 'Google Business Profile', topic1_2: 'SEO', topic1_3: 'Instagram & Facebook',
      topic1_4: 'LinkedIn', topic1_5: 'Google Ads', topic1_6: 'Meta Ads', topic1_7: 'Content Marketing',
      topic2_title: 'USE AI IN YOUR BUSINESS', topic2_intro: 'Use AI for:',
      topic2_1: 'Content creation', topic2_2: 'Research', topic2_3: 'Customer support',
      topic2_4: 'Sales assistance', topic2_5: 'Business analysis', topic2_6: 'Productivity', topic2_7: 'Everyday business tasks',
      topic3_title: 'AUTOMATE REPETITIVE WORK', topic3_intro: 'Build practical workflows for:',
      topic3_1: 'WhatsApp', topic3_2: 'Email', topic3_3: 'CRM',
      topic3_4: 'Customer follow-up', topic3_5: 'Lead management', topic3_6: 'Business processes',
      topic4_title: 'UNDERSTAND YOUR BUSINESS DATA',
      topic4_desc: 'Use Advanced Excel, dashboards and analytics to turn business data into better decisions.',
      topic5_title: 'BUILD YOUR DIGITAL BUSINESS PRESENCE', topic5_intro: 'Learn the fundamentals of:',
      topic5_1: 'Websites', topic5_2: 'Landing pages', topic5_3: 'Online business presence', topic5_4: 'Digital customer journeys',
      result_headline: 'THE RESULT?',
      result_instead: 'Instead of simply saying:',
      result_old1: '"I know AI."', result_old2: '"I know digital marketing."', result_old3: '"I know Excel."',
      result_youcan: 'You can say:',
      result_new1: '"I know how to use AI in my business."',
      result_new2: '"I can build a system to generate and manage leads."',
      result_new3: '"I can understand my business through data."',
      compare_cta: 'Enquire Now',
      who_headline: 'THIS PROGRAM IS FOR',
      who1_title: 'BUSINESS OWNERS', who1_desc: 'who want to modernize their business.',
      who2_title: 'ENTREPRENEURS', who2_desc: 'who want to build a technology-enabled business.',
      who3_title: 'WORKING PROFESSIONALS', who3_desc: 'who want practical business + technology skills.',
      who4_title: 'FREELANCERS', who4_desc: 'who want to provide modern digital services.',
      who5_title: 'ASPIRING ENTREPRENEURS', who5_desc: 'who want to understand how modern businesses operate.',
      trust_vitc: 'Vandana IT Courses',
      trust_mced: 'Maharashtra Centre for Entrepreneurship Development',
      trust_auth: 'MCED Authorized Training Centre',
      trust_faculty_title: 'Faculty', trust_faculty: 'MCA & MBA Faculty | 9+ Years Experience',
      offer_headline: "DON'T WAIT UNTIL THE GAP BECOMES BIGGER.",
      offer_line1: "You cannot recover yesterday's missed customers.",
      offer_line2: "You cannot recover yesterday's wasted hours.",
      offer_line3: 'But you can change how you operate from today.',
      offer_start: 'START BUILDING A SMARTER BUSINESS.',
      offer_course: 'VITC BUSINESS AI & DIGITAL TRANSFORM PROGRAM',
      offer_seats: 'Practical Learning • Real Business Applications • AI • Digital Marketing • Automation • Analytics',
      offer_special: 'Special Offer', offer_cta: 'ENQUIRE NOW',
      form_headline: 'ENQUIRE NOW',
      form_sub: 'Start building a smarter business. Tell us about yourself and our team can help you understand the program.',
      form_call: 'Call / WhatsApp', form_whatsapp: 'Enquire on WhatsApp',
      label_name: 'Full Name *', label_mobile: 'Mobile Number *', label_email: 'Email Address *',
      label_background: 'Current Background *', label_preflang: 'Preferred Language *',
      label_message: 'Message / What do you want to learn?',
      opt_select: 'Select...', opt_owner: 'Business Owner', opt_entrepreneur: 'Entrepreneur',
      opt_professional: 'Working Professional', opt_freelancer: 'Freelancer',
      opt_aspiring: 'Aspiring Entrepreneur', opt_other: 'Other',
      form_submit: 'Submit Enquiry',
      form_success: 'Thank you! Your enquiry has been recorded. Our team will contact you soon.',
      form_note: 'Note: Form data is validated on this page. Connect a backend endpoint in script.js to send data.',
      faq_headline: 'Frequently Asked Questions',
      faq1_q: 'Who is this program for?',
      faq1_a: 'Business Owners who want to modernize their business. Entrepreneurs who want to build a technology-enabled business. Working Professionals who want practical business + technology skills. Freelancers who want to provide modern digital services. Aspiring Entrepreneurs who want to understand how modern businesses operate.',
      faq2_q: 'What will I be able to do after the program?',
      faq2_a: 'Get more visibility (Google Business Profile, SEO, social media, ads), use AI in your business, automate repetitive work, understand business data with Advanced Excel and analytics, and build your digital business presence with websites and landing pages.',
      faq3_q: 'Is this only about learning technology?',
      faq3_a: "No. Don't just learn technology — learn how to use it to solve business problems. You combine AI, Digital Marketing, Automation, Websites, Analytics and Business Systems into practical business applications.",
      faq4_q: 'What topics are covered?',
      faq4_a: 'Digital visibility (SEO, social, ads), AI for business tasks, automation (WhatsApp, email, CRM, lead management), Advanced Excel and analytics, websites, landing pages and digital customer journeys.',
      faq5_q: 'What is the program fee?',
      faq5_a: 'Special Offer: ₹11,800/- (original mentioned fee: ₹25,500/-). Enquire for current details.',
      faq6_q: 'Where is VITC located?',
      faq6_a: 'Vandana IT Course (VITC), Shree Raj Nagar, Kamtha Road, Uran, Maharashtra.',
      faq7_q: 'How can I enquire?',
      faq7_a: 'Fill the form on this page, or Call / WhatsApp +91 99678 74887.',
      final_headline: 'START BUILDING A SMARTER BUSINESS.',
      final_sub: 'VITC BUSINESS AI & DIGITAL TRANSFORM PROGRAM — Practical Learning • Real Business Applications • AI • Digital Marketing • Automation • Analytics',
      final_cta1: 'ENQUIRE NOW',
      footer_mced: 'MCED Authorized Training Centre',
    },
    mr: {
      nav_home: 'मुख्यपृष्ठ', nav_problem: 'समस्या', nav_course: 'प्रोग्राम', nav_benefits: 'परिणाम',
      nav_who: 'कोणासाठी', nav_faq: 'प्रश्न', nav_enquire: 'चौकशी', nav_cta: 'आता चौकशी करा', sticky_cta: 'आता चौकशी करा',
      hero_badge1: 'MCED अधिकृत प्रशिक्षण केंद्र', hero_badge2: 'VITC – उरण',
      hero_course_label: 'VITC बिझनेस AI आणि डिजिटल ट्रान्सफॉर्म प्रोग्राम',
      hero_headline: 'तुमचा व्यवसाय बदलत आहे.',
      hero_subhead: 'पण तुमचा व्यवसाय त्याच्यासोबत बदलत आहे का?',
      hero_sub: 'तुम्ही कदाचित ग्राहक, वेळ आणि संधी गमावत असाल — हे लक्षातही न येता.',
      hero_tagline: 'फक्त तंत्रज्ञान शिकू नका. व्यवसायाच्या समस्या सोडवण्यासाठी ते कसे वापरायचे ते शिका.',
      hero_cta1: 'आता चौकशी करा', hero_cta2: 'तुम्ही काय शिकाल ते पाहा', hero_visual_label: 'डिजिटल वाढ',
      problem_headline: 'तुमचे स्पर्धक पुढे जात आहेत',
      problem_lead: 'तुमचे स्पर्धक डिजिटल मार्केटिंग, AI, ऑटोमेशन, डेटा आणि ऑनलाइन सिस्टम वापरून जलद काम करतात आणि अधिक ग्राहकांपर्यंत पोहोचतात.',
      problem_lead2: 'दरम्यान, अनेक व्यवसाय अजूनही यावर अवलंबून आहेत:',
      prob1_title: 'ग्राहकांसाठी तोंडी प्रचार',
      prob2_title: 'दैनंदिन कामासाठी मॅन्युअल काम',
      prob3_title: 'यादृच्छिक सोशल मीडिया पोस्टिंग',
      prob4_title: 'योग्य सिस्टमशिवाय WhatsApp संदेश',
      prob5_title: 'उपयुक्त व्यवसाय इनसाइटशिवाय Excel शीट्स',
      prob6_title: 'AI आता सोपे करू शकणाऱ्या कामांसाठी पारंपरिक पद्धती',
      lost_headline: 'तुम्ही आधीच काय गमावले आहे?',
      lost_lead: 'प्रत्येक महिना तुम्ही चांगल्या सिस्टम स्वीकारण्यास उशीर करता, तुम्ही गमावत असू शकता:',
      lost1_title: 'ग्राहक', lost1_text: 'ज्यांनी ऑनलाइन शोधले पण स्पर्धक सापडला.',
      lost2_title: 'वेळ', lost2_text: 'सरलीकृत किंवा स्वयंचलित करता येणाऱ्या पुनरावृत्तीच्या कामात गेलेले तास.',
      lost3_title: 'लीड्स', lost3_text: 'कमकुवत डिजिटल उपस्थितीमुळे कधीही न पोहोचलेले संभाव्य ग्राहक.',
      lost4_title: 'व्यवसाय डेटा', lost4_text: 'उपयुक्त निर्णयात न बदललेली स्प्रेडशीटमधील महत्त्वाची माहिती.',
      lost5_title: 'संधी', lost5_text: 'मार्केट, विक्री, ऑटोमेट आणि वाढीचे नवीन मार्ग जे तुम्हाला कदाचित माहीतही नसतील.',
      lost6_title: 'स्पर्धात्मक फायदा', lost6_text: 'तंत्रज्ञान पुढे जात असताना जुन्या पद्धतींवर राहिल्याने अंतर वाढते.',
      years_headline: 'आता पुढील २–३ वर्षांबद्दल विचार करा.',
      years_lead: 'तुम्ही तसेच व्यवसाय करत राहिलात तर काय होते?',
      years_comp: 'तुमचे स्पर्धक यात चांगले होतात:',
      years_1: 'ऑनलाइन सापडणे', years_2: 'लीड्स निर्माण करणे', years_3: 'फॉलो-अप',
      years_4: 'AI वापरणे', years_5: 'काम स्वयंचलित करणे', years_6: 'डेटा समजणे',
      years_gap: 'आणि अंतर वाढत राहते.',
      years_hard: 'समस्या ही नाही की तुम्ही मेहनत करत नाही.',
      years_changed: 'समस्या ही आहे की व्यवसाय बदलला आहे.',
      years_skills: 'आणि केवळ पारंपरिक व्यवसाय कौशल्ये आता पुरेशी नाहीत.',
      transition_text: 'तर उपाय काय?',
      solution_headline: 'VITC बिझनेस AI आणि डिजिटल ट्रान्सफॉर्म प्रोग्राम',
      solution_desc: 'आधुनिक व्यवसाय वापरत असलेले तंत्रज्ञान समजून घेण्यासाठी आणि अंमलात आणण्यासाठी डिझाइन केलेला व्यावहारिक प्रोग्राम.',
      solution_combine: 'तुम्ही कसे एकत्र करायचे ते शिकता:',
      solution_stack: 'AI + डिजिटल मार्केटिंग + ऑटोमेशन + वेबसाइट्स + अॅनालिटिक्स + व्यवसाय सिस्टम',
      solution_into: 'व्यावहारिक व्यवसाय अनुप्रयोगांमध्ये.',
      solution_tag: 'फक्त तंत्रज्ञान शिकू नका. व्यवसायाच्या समस्या सोडवण्यासाठी ते कसे वापरायचे ते शिका.',
      learn_headline: 'तुम्ही काय करू शकाल?',
      topic1_title: 'अधिक दृश्यमानता मिळवा', topic1_intro: 'याद्वारे डिजिटल उपस्थिती तयार करा:',
      topic1_1: 'Google Business Profile', topic1_2: 'SEO', topic1_3: 'Instagram आणि Facebook',
      topic1_4: 'LinkedIn', topic1_5: 'Google Ads', topic1_6: 'Meta Ads', topic1_7: 'कंटेंट मार्केटिंग',
      topic2_title: 'तुमच्या व्यवसायात AI वापरा', topic2_intro: 'AI वापरा यासाठी:',
      topic2_1: 'कंटेंट तयार करणे', topic2_2: 'रिसर्च', topic2_3: 'ग्राहक सपोर्ट',
      topic2_4: 'विक्री सहाय्य', topic2_5: 'व्यवसाय विश्लेषण', topic2_6: 'उत्पादकता', topic2_7: 'दैनंदिन व्यवसाय कामे',
      topic3_title: 'पुनरावृत्तीचे काम स्वयंचलित करा', topic3_intro: 'यासाठी व्यावहारिक वर्कफ्लो तयार करा:',
      topic3_1: 'WhatsApp', topic3_2: 'ईमेल', topic3_3: 'CRM',
      topic3_4: 'ग्राहक फॉलो-अप', topic3_5: 'लीड व्यवस्थापन', topic3_6: 'व्यवसाय प्रक्रिया',
      topic4_title: 'तुमचा व्यवसाय डेटा समजून घ्या',
      topic4_desc: 'व्यवसाय डेटा चांगल्या निर्णयात बदलण्यासाठी अॅडव्हान्स्ड Excel, डॅशबोर्ड आणि अॅनालिटिक्स वापरा.',
      topic5_title: 'डिजिटल व्यवसाय उपस्थिती तयार करा', topic5_intro: 'याचे मूलभूत शिका:',
      topic5_1: 'वेबसाइट्स', topic5_2: 'लँडिंग पेज', topic5_3: 'ऑनलाइन व्यवसाय उपस्थिती', topic5_4: 'डिजिटल ग्राहक प्रवास',
      result_headline: 'परिणाम?',
      result_instead: 'फक्त असे म्हणण्याऐवजी:',
      result_old1: '"मला AI येते."', result_old2: '"मला डिजिटल मार्केटिंग येते."', result_old3: '"मला Excel येते."',
      result_youcan: 'तुम्ही म्हणू शकता:',
      result_new1: '"मला माझ्या व्यवसायात AI कसे वापरायचे ते येते."',
      result_new2: '"मी लीड्स निर्माण आणि व्यवस्थापित करणारी सिस्टम तयार करू शकतो."',
      result_new3: '"मी डेटाच्या माध्यमातून माझा व्यवसाय समजू शकतो."',
      compare_cta: 'आता चौकशी करा',
      who_headline: 'हा प्रोग्राम कोणासाठी आहे',
      who1_title: 'व्यवसाय मालक', who1_desc: 'जे व्यवसाय आधुनिक करू इच्छितात.',
      who2_title: 'उद्योजक', who2_desc: 'जे तंत्रज्ञान-सक्षम व्यवसाय उभारू इच्छितात.',
      who3_title: 'कार्यरत व्यावसायिक', who3_desc: 'ज्यांना व्यावहारिक व्यवसाय + तंत्रज्ञान कौशल्ये हवी आहेत.',
      who4_title: 'फ्रीलान्सर', who4_desc: 'जे आधुनिक डिजिटल सेवा देऊ इच्छितात.',
      who5_title: 'इच्छुक उद्योजक', who5_desc: 'जे आधुनिक व्यवसाय कसे चालतात हे समजून घेऊ इच्छितात.',
      trust_vitc: 'वंदना आयटी कोर्सेस',
      trust_mced: 'महाराष्ट्र उद्योजकता विकास केंद्र',
      trust_auth: 'MCED अधिकृत प्रशिक्षण केंद्र',
      trust_faculty_title: 'फॅकल्टी', trust_faculty: 'MCA व MBA फॅकल्टी | ९+ वर्षे अनुभव',
      offer_headline: 'अंतर आणखी मोठे होईपर्यंत थांबू नका.',
      offer_line1: 'कालचे गमावलेले ग्राहक परत मिळू शकत नाहीत.',
      offer_line2: 'कालचे वाया गेलेले तास परत मिळू शकत नाहीत.',
      offer_line3: 'पण आजपासून तुम्ही कसे काम करता ते बदलू शकता.',
      offer_start: 'स्मार्ट व्यवसाय तयार करण्यास सुरूवात करा.',
      offer_course: 'VITC बिझनेस AI आणि डिजिटल ट्रान्सफॉर्म प्रोग्राम',
      offer_seats: 'व्यावहारिक शिक्षण • वास्तविक व्यवसाय अनुप्रयोग • AI • डिजिटल मार्केटिंग • ऑटोमेशन • अॅनालिटिक्स',
      offer_special: 'विशेष ऑफर', offer_cta: 'आता चौकशी करा',
      form_headline: 'आता चौकशी करा',
      form_sub: 'स्मार्ट व्यवसाय तयार करण्यास सुरूवात करा. तुमच्याबद्दल सांगा आणि आमची टीम प्रोग्राम समजून घेण्यास मदत करू शकते.',
      form_call: 'कॉल / WhatsApp', form_whatsapp: 'WhatsApp वर चौकशी करा',
      label_name: 'पूर्ण नाव *', label_mobile: 'मोबाइल नंबर *', label_email: 'ईमेल पत्ता *',
      label_background: 'सध्याची पार्श्वभूमी *', label_preflang: 'पसंतीची भाषा *',
      label_message: 'संदेश / तुम्हाला काय शिकायचे आहे?',
      opt_select: 'निवडा...', opt_owner: 'व्यवसाय मालक', opt_entrepreneur: 'उद्योजक',
      opt_professional: 'कार्यरत व्यावसायिक', opt_freelancer: 'फ्रीलान्सर',
      opt_aspiring: 'इच्छुक उद्योजक', opt_other: 'इतर',
      form_submit: 'चौकशी सबमिट करा',
      form_success: 'धन्यवाद! तुमची चौकशी नोंदवली गेली आहे. आमची टीम लवकरच संपर्क साधेल.',
      form_note: 'टीप: फॉर्म डेटा या पृष्ठावर सत्यापित केला जातो.',
      faq_headline: 'वारंवार विचारले जाणारे प्रश्न',
      faq1_q: 'हा प्रोग्राम कोणासाठी आहे?',
      faq1_a: 'व्यवसाय मालक जे व्यवसाय आधुनिक करू इच्छितात. उद्योजक जे तंत्रज्ञान-सक्षम व्यवसाय उभारू इच्छितात. कार्यरत व्यावसायिक ज्यांना व्यावहारिक व्यवसाय + तंत्रज्ञान कौशल्ये हवी आहेत. फ्रीलान्सर जे आधुनिक डिजिटल सेवा देऊ इच्छितात. इच्छुक उद्योजक जे आधुनिक व्यवसाय कसे चालतात हे समजून घेऊ इच्छितात.',
      faq2_q: 'प्रोग्रामनंतर मी काय करू शकेन?',
      faq2_a: 'अधिक दृश्यमानता (Google Business Profile, SEO, सोशल मीडिया, जाहिराती), व्यवसायात AI वापरणे, पुनरावृत्तीचे काम स्वयंचलित करणे, अॅडव्हान्स्ड Excel आणि अॅनालिटिक्सने व्यवसाय डेटा समजणे, आणि वेबसाइट्स व लँडिंग पेजसह डिजिटल व्यवसाय उपस्थिती तयार करणे.',
      faq3_q: 'हे फक्त तंत्रज्ञान शिकण्याबद्दल आहे का?',
      faq3_a: 'नाही. फक्त तंत्रज्ञान शिकू नका — व्यवसायाच्या समस्या सोडवण्यासाठी ते कसे वापरायचे ते शिका. तुम्ही AI, डिजिटल मार्केटिंग, ऑटोमेशन, वेबसाइट्स, अॅनालिटिक्स आणि व्यवसाय सिस्टम व्यावहारिक अनुप्रयोगांमध्ये एकत्र करता.',
      faq4_q: 'कोणते विषय समाविष्ट आहेत?',
      faq4_a: 'डिजिटल दृश्यमानता (SEO, सोशल, जाहिराती), व्यवसाय कामांसाठी AI, ऑटोमेशन (WhatsApp, ईमेल, CRM, लीड व्यवस्थापन), अॅडव्हान्स्ड Excel आणि अॅनालिटिक्स, वेबसाइट्स, लँडिंग पेज आणि डिजिटल ग्राहक प्रवास.',
      faq5_q: 'प्रोग्राम फी काय आहे?',
      faq5_a: 'विशेष ऑफर: ₹11,800/- (मूळ नमूद फी: ₹25,500/-). सध्याच्या तपशीलांसाठी चौकशी करा.',
      faq6_q: 'VITC कुठे आहे?',
      faq6_a: 'वंदना आयटी कोर्स (VITC), श्री राज नगर, कामठा रोड, उरण, महाराष्ट्र.',
      faq7_q: 'चौकशी कशी करावी?',
      faq7_a: 'या पृष्ठावरील फॉर्म भरा, किंवा कॉल / WhatsApp +91 99678 74887.',
      final_headline: 'स्मार्ट व्यवसाय तयार करण्यास सुरूवात करा.',
      final_sub: 'VITC बिझनेस AI आणि डिजिटल ट्रान्सफॉर्म प्रोग्राम — व्यावहारिक शिक्षण • वास्तविक व्यवसाय अनुप्रयोग • AI • डिजिटल मार्केटिंग • ऑटोमेशन • अॅनालिटिक्स',
      final_cta1: 'आता चौकशी करा',
      footer_mced: 'MCED अधिकृत प्रशिक्षण केंद्र',
    },
    hi: {
      nav_home: 'होम', nav_problem: 'समस्या', nav_course: 'प्रोग्राम', nav_benefits: 'परिणाम',
      nav_who: 'किसके लिए', nav_faq: 'प्रश्न', nav_enquire: 'पूछताछ', nav_cta: 'अभी पूछताछ करें', sticky_cta: 'अभी पूछताछ करें',
      hero_badge1: 'MCED अधिकृत प्रशिक्षण केंद्र', hero_badge2: 'VITC – उरण',
      hero_course_label: 'VITC बिज़नेस AI और डिजिटल ट्रांसफ़ॉर्म प्रोग्राम',
      hero_headline: 'आपका व्यवसाय बदल रहा है।',
      hero_subhead: 'क्या आपका व्यवसाय उसके साथ बदल रहा है?',
      hero_sub: 'आप बिना जाने ही ग्राहक, समय और अवसर खो रहे हो सकते हैं।',
      hero_tagline: 'केवल तकनीक न सीखें। व्यवसाय की समस्याएँ हल करने के लिए उसे कैसे उपयोग करें, सीखें।',
      hero_cta1: 'अभी पूछताछ करें', hero_cta2: 'आप क्या सीखेंगे देखें', hero_visual_label: 'डिजिटल विकास',
      problem_headline: 'आपके प्रतिस्पर्धी आगे बढ़ रहे हैं',
      problem_lead: 'आपके प्रतिस्पर्धी डिजिटल मार्केटिंग, AI, ऑटोमेशन, डेटा और ऑनलाइन सिस्टम से तेज़ी से काम करते हैं और अधिक ग्राहकों तक पहुँचते हैं।',
      problem_lead2: 'इस बीच, कई व्यवसाय अभी भी इन पर निर्भर हैं:',
      prob1_title: 'ग्राहकों के लिए मुँह-ज़बानी प्रचार',
      prob2_title: 'दैनिक संचालन के लिए मैन्युअल काम',
      prob3_title: 'बेतरतीब सोशल मीडिया पोस्टिंग',
      prob4_title: 'उचित सिस्टम के बिना WhatsApp संदेश',
      prob5_title: 'उपयोगी व्यवसाय इनसाइट के बिना Excel शीट्स',
      prob6_title: 'AI अब सरल कर सकने वाले कामों के लिए पारंपरिक तरीके',
      lost_headline: 'आप पहले से क्या खो चुके हैं?',
      lost_lead: 'हर महीने बेहतर सिस्टम अपनाने में देरी से आप खो सकते हैं:',
      lost1_title: 'ग्राहक', lost1_text: 'जिन्होंने ऑनलाइन खोजा लेकिन प्रतिस्पर्धी मिल गया।',
      lost2_title: 'समय', lost2_text: 'सरल या स्वचालित हो सकने वाले दोहराए काम में गए घंटे।',
      lost3_title: 'लीड्स', lost3_text: 'कमज़ोर डिजिटल उपस्थिति के कारण कभी न पहुँचे संभावित ग्राहक।',
      lost4_title: 'व्यवसाय डेटा', lost4_text: 'उपयोगी निर्णयों में न बदली स्प्रेडशीट की महत्वपूर्ण जानकारी।',
      lost5_title: 'अवसर', lost5_text: 'मार्केट, बिक्री, ऑटोमेट और विकास के नए तरीके जिनके बारे में आप जानते भी नहीं।',
      lost6_title: 'प्रतिस्पर्धी लाभ', lost6_text: 'तकनीक आगे बढ़ते हुए पुराने तरीकों पर रहना बढ़ता अंतर बनाता है।',
      years_headline: 'अब अगले 2–3 वर्षों के बारे में सोचें।',
      years_lead: 'अगर आप वैसे ही व्यवसाय करते रहे तो क्या होगा?',
      years_comp: 'आपके प्रतिस्पर्धी इनमें बेहतर होते हैं:',
      years_1: 'ऑनलाइन खोजे जाना', years_2: 'लीड बनाना', years_3: 'फ़ॉलो-अप',
      years_4: 'AI उपयोग', years_5: 'काम स्वचालित करना', years_6: 'डेटा समझना',
      years_gap: 'और अंतर बढ़ता रहता है।',
      years_hard: 'समस्या यह नहीं कि आप मेहनत नहीं करते।',
      years_changed: 'समस्या यह है कि व्यवसाय बदल गया है।',
      years_skills: 'और केवल पारंपरिक व्यवसाय कौशल अब पर्याप्त नहीं।',
      transition_text: 'तो समाधान क्या है?',
      solution_headline: 'VITC बिज़नेस AI और डिजिटल ट्रांसफ़ॉर्म प्रोग्राम',
      solution_desc: 'आधुनिक व्यवसायों द्वारा उपयोग की जा रही तकनीक समझने और लागू करने के लिए डिज़ाइन किया गया व्यावहारिक प्रोग्राम।',
      solution_combine: 'आप कैसे संयोजित करना सीखते हैं:',
      solution_stack: 'AI + डिजिटल मार्केटिंग + ऑटोमेशन + वेबसाइट्स + एनालिटिक्स + व्यवसाय सिस्टम',
      solution_into: 'व्यावहारिक व्यवसाय अनुप्रयोगों में।',
      solution_tag: 'केवल तकनीक न सीखें। व्यवसाय की समस्याएँ हल करने के लिए उसे कैसे उपयोग करें, सीखें।',
      learn_headline: 'आप क्या कर पाएँगे?',
      topic1_title: 'अधिक दृश्यता पाएँ', topic1_intro: 'इनके माध्यम से डिजिटल उपस्थिति बनाएँ:',
      topic1_1: 'Google Business Profile', topic1_2: 'SEO', topic1_3: 'Instagram और Facebook',
      topic1_4: 'LinkedIn', topic1_5: 'Google Ads', topic1_6: 'Meta Ads', topic1_7: 'कंटेंट मार्केटिंग',
      topic2_title: 'अपने व्यवसाय में AI उपयोग करें', topic2_intro: 'AI उपयोग करें इसके लिए:',
      topic2_1: 'कंटेंट निर्माण', topic2_2: 'रिसर्च', topic2_3: 'ग्राहक सपोर्ट',
      topic2_4: 'बिक्री सहायता', topic2_5: 'व्यवसाय विश्लेषण', topic2_6: 'उत्पादकता', topic2_7: 'रोज़मर्रा के व्यवसाय काम',
      topic3_title: 'दोहराए जाने वाले काम स्वचालित करें', topic3_intro: 'इनके लिए व्यावहारिक वर्कफ़्लो बनाएँ:',
      topic3_1: 'WhatsApp', topic3_2: 'ईमेल', topic3_3: 'CRM',
      topic3_4: 'ग्राहक फ़ॉलो-अप', topic3_5: 'लीड प्रबंधन', topic3_6: 'व्यवसाय प्रक्रियाएँ',
      topic4_title: 'अपना व्यवसाय डेटा समझें',
      topic4_desc: 'व्यवसाय डेटा को बेहतर निर्णयों में बदलने के लिए एडवांस्ड Excel, डैशबोर्ड और एनालिटिक्स उपयोग करें।',
      topic5_title: 'डिजिटल व्यवसाय उपस्थिति बनाएँ', topic5_intro: 'इनके मूलभूत सीखें:',
      topic5_1: 'वेबसाइट्स', topic5_2: 'लैंडिंग पेज', topic5_3: 'ऑनलाइन व्यवसाय उपस्थिति', topic5_4: 'डिजिटल ग्राहक यात्रा',
      result_headline: 'परिणाम?',
      result_instead: 'केवल यह कहने के बजाय:',
      result_old1: '"मुझे AI आता है।"', result_old2: '"मुझे डिजिटल मार्केटिंग आती है।"', result_old3: '"मुझे Excel आता है।"',
      result_youcan: 'आप कह सकते हैं:',
      result_new1: '"मुझे अपने व्यवसाय में AI कैसे उपयोग करना आता है।"',
      result_new2: '"मैं लीड बनाने और प्रबंधित करने की सिस्टम बना सकता हूँ।"',
      result_new3: '"मैं डेटा से अपना व्यवसाय समझ सकता हूँ।"',
      compare_cta: 'अभी पूछताछ करें',
      who_headline: 'यह प्रोग्राम किनके लिए है',
      who1_title: 'व्यवसाय मालिक', who1_desc: 'जो अपना व्यवसाय आधुनिक बनाना चाहते हैं।',
      who2_title: 'उद्यमी', who2_desc: 'जो तकनीक-सक्षम व्यवसाय बनाना चाहते हैं।',
      who3_title: 'कार्यरत पेशेवर', who3_desc: 'जो व्यावहारिक व्यवसाय + तकनीक कौशल चाहते हैं।',
      who4_title: 'फ़्रीलांसर', who4_desc: 'जो आधुनिक डिजिटल सेवाएँ देना चाहते हैं।',
      who5_title: 'इच्छुक उद्यमी', who5_desc: 'जो समझना चाहते हैं कि आधुनिक व्यवसाय कैसे चलते हैं।',
      trust_vitc: 'वंदना आईटी कोर्सेस',
      trust_mced: 'महाराष्ट्र उद्यमिता विकास केंद्र',
      trust_auth: 'MCED अधिकृत प्रशिक्षण केंद्र',
      trust_faculty_title: 'संकाय', trust_faculty: 'MCA और MBA संकाय | 9+ वर्ष अनुभव',
      offer_headline: 'अंतर और बड़ा होने तक इंतज़ार न करें।',
      offer_line1: 'कल के छूटे ग्राहक वापस नहीं आ सकते।',
      offer_line2: 'कल के बर्बाद घंटे वापस नहीं आ सकते।',
      offer_line3: 'लेकिन आज से आप कैसे काम करते हैं, बदल सकते हैं।',
      offer_start: 'स्मार्ट व्यवसाय बनाना शुरू करें।',
      offer_course: 'VITC बिज़नेस AI और डिजिटल ट्रांसफ़ॉर्म प्रोग्राम',
      offer_seats: 'व्यावहारिक शिक्षा • वास्तविक व्यवसाय अनुप्रयोग • AI • डिजिटल मार्केटिंग • ऑटोमेशन • एनालिटिक्स',
      offer_special: 'विशेष ऑफर', offer_cta: 'अभी पूछताछ करें',
      form_headline: 'अभी पूछताछ करें',
      form_sub: 'स्मार्ट व्यवसाय बनाना शुरू करें। अपने बारे में बताएँ और हमारी टीम प्रोग्राम समझने में मदद कर सकती है।',
      form_call: 'कॉल / WhatsApp', form_whatsapp: 'WhatsApp पर पूछताछ करें',
      label_name: 'पूरा नाम *', label_mobile: 'मोबाइल नंबर *', label_email: 'ईमेल पता *',
      label_background: 'वर्तमान पृष्ठभूमि *', label_preflang: 'पसंदीदा भाषा *',
      label_message: 'संदेश / आप क्या सीखना चाहते हैं?',
      opt_select: 'चुनें...', opt_owner: 'व्यवसाय मालिक', opt_entrepreneur: 'उद्यमी',
      opt_professional: 'कार्यरत पेशेवर', opt_freelancer: 'फ़्रीलांसर',
      opt_aspiring: 'इच्छुक उद्यमी', opt_other: 'अन्य',
      form_submit: 'पूछताछ जमा करें',
      form_success: 'धन्यवाद! आपकी पूछताछ दर्ज हो गई है। हमारी टीम जल्द संपर्क करेगी।',
      form_note: 'नोट: फॉर्म डेटा इस पेज पर सत्यापित होता है।',
      faq_headline: 'अक्सर पूछे जाने वाले प्रश्न',
      faq1_q: 'यह प्रोग्राम किनके लिए है?',
      faq1_a: 'व्यवसाय मालिक जो व्यवसाय आधुनिक बनाना चाहते हैं। उद्यमी जो तकनीक-सक्षम व्यवसाय बनाना चाहते हैं। कार्यरत पेशेवर जो व्यावहारिक व्यवसाय + तकनीक कौशल चाहते हैं। फ़्रीलांसर जो आधुनिक डिजिटल सेवाएँ देना चाहते हैं। इच्छुक उद्यमी जो समझना चाहते हैं कि आधुनिक व्यवसाय कैसे चलते हैं।',
      faq2_q: 'प्रोग्राम के बाद मैं क्या कर पाऊँगा?',
      faq2_a: 'अधिक दृश्यता (Google Business Profile, SEO, सोशल मीडिया, विज्ञापन), व्यवसाय में AI, दोहराए काम स्वचालित करना, एडवांस्ड Excel और एनालिटिक्स से व्यवसाय डेटा समझना, और वेबसाइट्स व लैंडिंग पेज के साथ डिजिटल व्यवसाय उपस्थिति बनाना।',
      faq3_q: 'क्या यह केवल तकनीक सीखने के बारे में है?',
      faq3_a: 'नहीं। केवल तकनीक न सीखें — व्यवसाय की समस्याएँ हल करने के लिए उसे कैसे उपयोग करें, सीखें। आप AI, डिजिटल मार्केटिंग, ऑटोमेशन, वेबसाइट्स, एनालिटिक्स और व्यवसाय सिस्टम को व्यावहारिक अनुप्रयोगों में जोड़ते हैं।',
      faq4_q: 'कौन से विषय शामिल हैं?',
      faq4_a: 'डिजिटल दृश्यता (SEO, सोशल, विज्ञापन), व्यवसाय कामों के लिए AI, ऑटोमेशन (WhatsApp, ईमेल, CRM, लीड प्रबंधन), एडवांस्ड Excel और एनालिटिक्स, वेबसाइट्स, लैंडिंग पेज और डिजिटल ग्राहक यात्रा।',
      faq5_q: 'प्रोग्राम शुल्क क्या है?',
      faq5_a: 'विशेष ऑफर: ₹11,800/- (मूल उल्लेखित शुल्क: ₹25,500/-)। वर्तमान विवरण के लिए पूछताछ करें।',
      faq6_q: 'VITC कहाँ है?',
      faq6_a: 'वंदना आईटी कोर्स (VITC), श्री राज नगर, कामठा रोड, उरण, महाराष्ट्र।',
      faq7_q: 'पूछताछ कैसे करें?',
      faq7_a: 'इस पेज पर फॉर्म भरें, या कॉल / WhatsApp +91 99678 74887।',
      final_headline: 'स्मार्ट व्यवसाय बनाना शुरू करें।',
      final_sub: 'VITC बिज़नेस AI और डिजिटल ट्रांसफ़ॉर्म प्रोग्राम — व्यावहारिक शिक्षा • वास्तविक व्यवसाय अनुप्रयोग • AI • डिजिटल मार्केटिंग • ऑटोमेशन • एनालिटिक्स',
      final_cta1: 'अभी पूछताछ करें',
      footer_mced: 'MCED अधिकृत प्रशिक्षण केंद्र',
    },
  };

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
    document.querySelectorAll('select option[data-i18n]').forEach(function (opt) {
      const key = opt.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        opt.textContent = translations[lang][key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('vitc_lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  try {
    const saved = localStorage.getItem('vitc_lang');
    if (saved && translations[saved]) setLanguage(saved);
  } catch (e) {}

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', function () {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
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

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-animate]').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('[data-animate]').forEach(function (el) { el.classList.add('visible'); });
  }

  const form = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');
  const formNote = document.getElementById('formNote');

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function clearErrors() {
    ['errName', 'errMobile', 'errEmail', 'errBackground', 'errPrefLang'].forEach(function (id) { showError(id, ''); });
    if (form) form.querySelectorAll('.error').forEach(function (el) { el.classList.remove('error'); });
  }
  function isValidIndianMobile(num) { return /^[6-9]\d{9}$/.test(num); }
  function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

  /** BACKEND CONNECTION POINT — replace body with your API call */
  function submitEnquiryToBackend(data) {
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
        fullName: name, mobile: mobile, email: email, background: background,
        preferredLanguage: prefLang, message: message,
        course: 'Business AI & Digital Transform Program',
        source: 'landing-page', timestamp: new Date().toISOString(),
      };
      submitEnquiryToBackend(data).then(function () {
        formSuccess.hidden = false;
        formNote.hidden = false;
        form.reset();
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const stickyCta = document.getElementById('stickyCta');
  const enquireSection = document.getElementById('enquire');
  if (stickyCta && enquireSection && 'IntersectionObserver' in window) {
    const stickyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        stickyCta.style.display = entry.isIntersecting ? 'none' : '';
      });
    }, { threshold: 0.15 });
    stickyObs.observe(enquireSection);
  }
})();
