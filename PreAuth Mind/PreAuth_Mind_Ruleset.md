# 📋 لائحة المعايير والموافقات الطبية (PreAuth Mind Ruleset)

هيكل بيانات منظم وشامل لقواعد الموافقات الطبية (Clinical Authorization Criteria)، مصمم للـ Vector Database (RAG). كل قاعدة تحتوي على:
- **اسم الدواء/العلاج/الجهاز (الاسم العلمي / INN)**
- **التخصص**
- **دواعي الاستعمال (Indications)**
- **المستندات والشروط المطلوبة للموافقة (Required Documents & Criteria)**
- **مدة صلاحية الموافقة**

## 1. قسم أمراض الباطنة والقلب (Internal Medicine & Cardiology)
💊 **دواء: Sacubitril/Valsartan (Entresto)**  
**التخصص:** أمراض القلب (Cardiology)  
**دواعي الاستعمال:** قصور عضلة القلب المزمن مع انخفاض الكسر الإنتاجي (HFrEF).  
**المستندات والشروط:**  
1. تقرير طبي معتمد من استشاري قلب حديث (خلال 30 يوم).  
2. Echocardiogram يظهر EF ≤ 40%.  
3. تحاليل وظائف كلى (Creatinine, BUN) + Electrolytes (Na, K).  
4. إثبات استخدام ACEi/ARB سابقاً مع عدم تحسن.  
**مدة صلاحية الموافقة:** 6 أشهر (قابلة للتجديد بعد تقييم سريري).

💊 **دواء: SGLT2 Inhibitors (e.g., Dapagliflozin, Empagliflozin)**  
**التخصص:** أمراض السكر والغدد الصماء / القلب (Endocrinology/Cardiology)  
**دواعي الاستعمال:** السكري النوع 2 مع اعتلال كلوي أو قصور قلب.  
**المستندات والشروط:**  
1. HbA1c > 7.5% (خلال 3 أشهر).  
2. eGFR و Urine Microalbumin.  
3. فشل Metformin أو علاجات أخرى.  
**مدة صلاحية الموافقة:** 12 شهراً (مع متابعة وظائف الكلى).

💊 **دواء: Beta-blockers (e.g., Carvedilol, Bisoprolol) أو ARNI**  
**التخصص:** أمراض القلب  
**دواعي الاستعمال:** قصور قلب، ارتفاع ضغط الدم، اضطراب النظم.  
**المستندات:** تقرير قلب + ECG + ECHO.

## 2. قسم الأورام والعلاج الجيني (Oncology & Hematology)
💊 **دواء: Pembrolizumab (Keytruda)**  
**التخصص:** أورام (Medical Oncology)  
**دواعي الاستعمال:** أورام الرئة، القولون، الجلد، المثانة المتقدمة.  
**المستندات:**  
1. Histopathology Report (Stage III/IV).  
2. PD-L1 / MSI / TMB testing.  
3. MDT Tumor Board Decision.  
4. Recent PET-CT/CT (≤21 يوم).  
**مدة صلاحية الموافقة:** حسب دورة العلاج (عادة 6-12 شهراً أو حتى تقدم المرض).

💊 **دواء: Herceptin (Trastuzumab) / Kadcyla**  
**التخصص:** أورام الثدي  
**دواعي الاستعمال:** HER2-Positive Breast Cancer.  
**المستندات:**  
1. HER2 IHC/FISH Positive.  
2. Baseline ECHO (EF ≥50%).

💊 **دواء: Imatinib (Gleevec) / Tyrosine Kinase Inhibitors**  
**التخصص:** أورام الدم  
**دواعي:** CML أو GIST.  
**المستندات:** BCR-ABL testing + CBC.

## 3. قسم الروماتيزم والأمراض المناعية (Rheumatology & Immunology)
💊 **دواء: Biologics (Humira / Enbrel / Cosentyx / Rituximab)**  
**التخصص:** روماتيزم  
**دواعي:** Rheumatoid Arthritis, Psoriatic Arthritis, Ankylosing Spondylitis.  
**المستندات:**  
1. DAS28 >5.1 أو BASDAI >4.  
2. Negative TB screen (QuantiFERON + CXR).  
3. Hepatitis B/C screen.  
4. Failure of MTX ≥3 months.

## 4. قسم الكلى والمسالك البولية (Nephrology & Urology)
💊 **دواء: Aranesp / Mircera (ESAs)**  
**التخصص:** أمراض الكلى  
**دواعي:** أنيميا CKD.  
**المستندات:**  
1. Hb <10 g/dL.  
2. Ferritin >100 & TSAT >20%.  
3. eGFR report.

💊 **دواء: Phosphate Binders (e.g., Sevelamer)**  
**التخصص:** Nephrology  
**دواعي:** Hyperphosphatemia in CKD.  
**المستندات:** Serum Phosphate levels + CKD stage.

## 5. قسم المخ والأعصاب (Neurology)
💊 **دواء: Ocrevus (Ocrelizumab) / Kesimpta**  
**التخصص:** Multiple Sclerosis  
**دواعي:** Relapsing-Remitting MS أو Primary Progressive MS.  
**المستندات:**  
1. MRI brain/spine showing lesions.  
2. CSF analysis (Oligoclonal bands).  
3. Neurologist report confirming diagnosis.  
4. EDSS score.

💊 **دواء: Anti-epileptics (e.g., Levetiracetam, Valproate) أو Brivaracetam**  
**دواعي:** Epilepsy refractory.  
**المستندات:** EEG + seizure diary + failure of first-line.

💊 **علاج: Botulinum Toxin (Botox) for Spasticity/Migraine**  
**المستندات:** Neurologist assessment.

## 6. قسم الجهاز الهضمي (Gastroenterology & Hepatology)
💊 **دواء: Vedolizumab / Infliximab (Anti-TNF)**  
**التخصص:** IBD (Crohn's, Ulcerative Colitis)  
**دواعي:** Moderate-Severe IBD.  
**المستندات:**  
1. Colonoscopy/Endoscopy report.  
2. Biopsy confirming inflammation.  
3. Failure of steroids/IMMs.  
4. TB & Hepatitis screen.

💊 **دواء: Direct-Acting Antivirals (e.g., Harvoni for HCV)**  
**دواعي:** Chronic Hepatitis C.  
**المستندات:** HCV RNA PCR + Genotype + FibroScan.

## 7. قسم الرئة والتنفس (Pulmonology)
💊 **دواء: Dupixent (Dupilumab) / Biologics for Asthma**  
**التخصص:** Severe Asthma / Eosinophilic.  
**دواعي:** Uncontrolled asthma on high-dose ICS.  
**المستندات:**  
1. FeNO / Eosinophil count.  
2. Spirometry (FEV1).  
3. Pulmonologist report.

💊 **علاج: Home Oxygen Therapy**  
**دواعي:** Chronic Hypoxemia (COPD, ILD).  
**المستندات:** ABG showing PaO2 <55 mmHg.

## 8. قسم العظام والمفاصل (Orthopedics)
**علاج/جهاز: Joint Replacement (Hip/Knee Prosthesis)**  
**التخصص:** Orthopedic Surgery  
**دواعي:** Severe Osteoarthritis with functional limitation.  
**المستندات:**  
1. X-ray/MRI showing advanced joint damage.  
2. Orthopedic assessment (pain scores, ROM).  
3. Failure of conservative Rx (PT, analgesics) ≥6 months.

**جهاز: Spinal Implants / Pedicle Screws**  
**دواعي:** Spondylolisthesis / Spinal stenosis.  
**المستندات:** MRI + surgeon report.

## 9. قسم الجلدية (Dermatology)
💊 **دواء: Biologics for Psoriasis (e.g., Secukinumab)**  
**دواعي:** Moderate-Severe Plaque Psoriasis.  
**المستندات:** PASI score >10 + failure of topicals/phototherapy.

## 10. قسم العيون (Ophthalmology)
💊 **دواء: Anti-VEGF Injections (e.g., Lucentis, Eylea)**  
**التخصص:** Retina  
**دواعي:** Wet AMD, Diabetic Macular Edema.  
**المستندات:**  
1. OCT / Fundus Fluorescein Angiography.  
2. Visual acuity assessment.

**جهاز: Intraocular Lens (IOL) Implants**  
**دواعي:** Cataract.  
**المستندات:** Biometry + slit-lamp exam.

## 11. قسم الطب النفسي (Psychiatry)
💊 **دواء: Long-Acting Injectables (e.g., Paliperidone, Aripiprazole LAI)**  
**دواعي:** Schizophrenia / Bipolar with poor adherence.  
**المستندات:** Psychiatric evaluation + history of non-compliance.

## 12. قسم الأجهزة والاستعاضات الطبية (Medical Devices & Prosthetics)
**جهاز: Cardiac Pacemaker / ICD / CRT**  
**التخصص:** Cardiology  
**دواعي:** Bradycardia, Heart Block, Heart Failure.  
**المستندات:**  
1. ECG/Holter showing indication.  
2. ECHO.  
3. Electrophysiologist report.

**جهاز: Insulin Pump / CGM (Continuous Glucose Monitor)**  
**التخصص:** Endocrinology  
**دواعي:** Type 1 DM or brittle Type 2.  
**المستندات:** HbA1c >8% despite MDI + frequent hypoglycemia.

**جهاز: CPAP / BiPAP for Sleep Apnea**  
**التخصص:** Pulmonology/Sleep Medicine  
**دواعي:** Moderate-Severe OSA.  
**المستندات:** Polysomnography (AHI >15).

**جهاز: Prosthetic Limbs / Orthotics**  
**التخصص:** Orthopedics / Physical Medicine  
**دواعي:** Amputation / Limb deficiency.  
**المستندات:** Amputation report + functional assessment.

**جهاز: Stents (Coronary / Peripheral)**  
**دواعي:** CAD with significant stenosis.  
**المستندات:** Coronary Angiography.

**جهاز: Cochlear Implants**  
**التخصص:** ENT  
**دواعي:** Severe-Profound Sensorineural Hearing Loss.  
**المستندات:** Audiometry + failed hearing aids.

## 13. قسم طب الأطفال (Pediatrics) - مختصر
**دواء: Growth Hormone (e.g., Somatropin)**  
**دواعي:** Growth Hormone Deficiency.  
**المستندات:** Growth charts + IGF-1 + stimulation test.

**جهاز: Ventilators / Feeding Tubes** for chronic conditions.

---

**ملاحظات عامة للـ AI Agent:**
- **يجب دائماً استخدام الاسم العلمي (INN / Generic Name)** في إصدار الموافقة، وليس الاسم التجاري.
- استخدم RAG للبحث عن اسم الدواء/الجهاز + التخصص.
- تحقق من وجود جميع المستندات المطلوبة في المرفقات (OCR + parsing).
- إذا ناقص → طلب استكمال.
- إذا كامل → إصدار Approval Code بالاسم العلمي + مدة الصلاحية.
- تحديث دوري للقواعد حسب اللوائح الرسمية (مثل FDA/EMA/SFDA/SFDA).
- الرد دائماً باللغة العربية للمستخدمين.

هذا الهيكل قابل للتوسع والتحديث. يمكن تحويله إلى JSON للـ Vector DB.