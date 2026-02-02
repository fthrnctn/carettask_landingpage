// CaretTask Survey System

// Survey Flow Configuration
const surveyConfig = {
    profiles: {
        'tech-lead': {
            title: 'Teknik Lider / Geliştirici',
            description: 'Kodlar, Sprint\'ler ve teknik süreçler.',
            emoji: '💻'
        },
        'entrepreneur': {
            title: 'Girişimci / Ürün Yöneticisi',
            description: 'Strateji, Roadmap ve operasyon.',
            emoji: '🚀'
        },
        'academic': {
            title: 'Akademisyen / Araştırmacı',
            description: 'Tez, literatür ve derin okumalar.',
            emoji: '📚'
        },
        'corporate': {
            title: 'Kurumsal Profesyonel',
            description: 'Toplantı trafiği, raporlar ve ekip yönetimi.',
            emoji: '💼'
        },
        'student': {
            title: 'Öğrenci',
            description: 'Sınav takvimi ve sosyal hayat dengesi.',
            emoji: '🎓'
        },
        'creative': {
            title: 'Yaratıcı / Freelancer',
            description: 'Proje teslimleri ve müşteri revizeleri.',
            emoji: '🎨'
        }
    },

    behaviors: [
        { id: 'always-write', title: 'Mutlaka yazarım/kaydederim', description: 'Yazmazsam yok olur, rahat edemem.' },
        { id: 'flow', title: 'Akışına bırakırım, aklımda tutarım', description: 'Ya da sonra yaparım derim.' },
        { id: 'sometimes-write', title: 'Bazen yazıyorum', description: 'Ama düzenli bir sistemim yok.' }
    ],

    profileQuestions: {
        'tech-lead': [
            {
                id: 'content-tech',
                type: 'multi-select',
                question: 'Kod dünyasında işler karışık. Senin "Yapılacaklar Listeni" en çok hangileri şişiriyor?',
                subtext: '(Birden fazla seçebilirsin)',
                options: [
                    { id: 'bug-tracking', title: 'Bug Tracking', description: 'Anlık çıkan hataları ve düzeltmeleri takip etmek.' },
                    { id: 'feature-dev', title: 'Feature Development', description: 'Yeni özelliklerin geliştirme süreçlerini planlamak.' },
                    { id: 'roadmap', title: 'Roadmap & Milestones', description: 'Projenin 3-6 aylık teknik yol haritasını çizmek.' },
                    { id: 'tech-debt', title: 'Tech Debt & Refactoring', description: 'Teknik borçları ve iyileştirmeleri not almak.' },
                    { id: 'code-review', title: 'Code Review', description: 'Ekip arkadaşlarının kodlarını inceleme hatırlatmaları.' },
                    { id: 'daily-standup', title: 'Daily Standups', description: 'Günlük sync notları ve blocker\'lar.' }
                ]
            },
            {
                id: 'view-tech',
                type: 'multi-select',
                question: 'Peki bu teknik karmaşayı yönetirken beynin hangi görünümde daha rahat ediyor?',
                options: [
                    { id: 'kanban', title: 'Kanban Board', description: 'Sütunlar olsun. İşleri sürükleyip bırakmak beni rahatlatıyor.' },
                    { id: 'sprint', title: 'Sprint List', description: 'Scrum mantığı. 2 haftalık periyotlara bölünmüş listeler.' },
                    { id: 'backlog', title: 'Backlog (Düz Liste)', description: 'Sadece alt alta sıralanmış, önceliklendirilmiş liste.' },
                    { id: 'timeline', title: 'Timeline / Gantt', description: 'Zaman çizelgesi üzerinde görmek.' },
                    { id: 'dependency', title: 'Dependency Graph', description: 'Bağımlılıkları görselleştirmek.' }
                ]
            },
            {
                id: 'tools-tech',
                type: 'multi-select',
                question: 'Dijital şantiyen neresi? Hangi araçları kullanıyorsun?',
                options: [
                    { id: 'jira', title: 'Jira / Linear / Azure DevOps' },
                    { id: 'github', title: 'GitHub Projects / GitLab' },
                    { id: 'trello', title: 'Trello / Kanban Board' },
                    { id: 'notion', title: 'Notion / Obsidian / Logseq' },
                    { id: 'todoist', title: 'Todoist / TickTick' },
                    { id: 'paper', title: 'Kağıt / Defter / Post-it' }
                ]
            }
        ],
        'entrepreneur': [
            {
                id: 'content-entrepreneur',
                type: 'multi-select',
                question: 'Bir kurucu olarak şapkan çok. Listende en çok yer kaplayan başlıklar neler?',
                subtext: '(Birden fazla seçebilirsin)',
                options: [
                    { id: 'roadmap', title: 'Ürün Yol Haritası (Roadmap)', description: 'Ürünü nereye götüreceğimizin planı.' },
                    { id: 'backlog', title: 'Feature Backlog', description: 'Parlak özellik fikirlerini kaybetmemek.' },
                    { id: 'bugs', title: 'Bug & Issue Tracking', description: 'Kullanıcılardan gelen hataları takip etmek.' },
                    { id: 'finance', title: 'Yatırım & Finans', description: 'Nakit akışı ve yatırımcı sunumları.' },
                    { id: 'marketing', title: 'Pazarlama & Büyüme', description: 'Kampanyalar ve içerik planları.' },
                    { id: 'operations', title: 'Operasyon', description: 'Günlük yangın söndürme işleri.' },
                    { id: 'team', title: 'Ekip Yönetimi', description: 'Kimin ne yaptığını takip etmek.' }
                ]
            },
            {
                id: 'view-entrepreneur',
                type: 'multi-select',
                question: 'Büyük resmi en iyi nasıl görüyorsun?',
                options: [
                    { id: 'gantt', title: 'Gantt / Timeline', description: 'Hangi iş ne zaman bitecek?' },
                    { id: 'okr', title: 'OKR / Hedef Kartları', description: 'Büyük hedefler ve ilerleme çubukları.' },
                    { id: 'board', title: 'Board (Pano)', description: 'Departmanlara ayrılmış panolar.' },
                    { id: 'minimal', title: 'Minimal Liste', description: 'Sadece bugün ne yapacağımı göreyim.' },
                    { id: 'dashboard', title: 'Dashboard', description: 'Metrikler ve grafikler.' }
                ]
            },
            {
                id: 'tools-entrepreneur',
                type: 'multi-select',
                question: 'Bu operasyonu yönettiğin ana karargah neresi?',
                options: [
                    { id: 'pm-tools', title: 'Jira / Asana / Monday / ClickUp' },
                    { id: 'all-in-one', title: 'Notion / Coda' },
                    { id: 'trello', title: 'Trello' },
                    { id: 'chat', title: 'Slack / Discord / WhatsApp' },
                    { id: 'sheets', title: 'Google Sheets / Excel' },
                    { id: 'whiteboard', title: 'Whiteboard / Post-it' }
                ]
            }
        ],
        'academic': [
            {
                id: 'content-academic',
                type: 'multi-select',
                question: 'Akademik süreç uzun bir maraton. Senin notlarını neler oluşturuyor?',
                options: [
                    { id: 'literature', title: 'Literatür Taraması', description: 'Okunacak makaleler ve alınacak notlar.' },
                    { id: 'publishing', title: 'Yayın Süreci', description: 'Makale yazımı ve dergi başvuruları.' },
                    { id: 'admin', title: 'İdari İşler', description: 'Ders programı ve fakülte işleri.' },
                    { id: 'data', title: 'Veri Analizi', description: 'Araştırma verilerinin toplanması.' },
                    { id: 'thesis', title: 'Tez / Proje Yönetimi', description: 'Büyük araştırma projesinin aşamaları.' },
                    { id: 'teaching', title: 'Ders Hazırlığı', description: 'Slaytlar, ödevler ve sınav hazırlığı.' }
                ]
            },
            {
                id: 'view-academic',
                type: 'multi-select',
                question: 'Bilgi yığınları arasında nasıl bir yapı tercih edersin?',
                options: [
                    { id: 'graph', title: 'Network / Graph View', description: 'Notlarımın bağlantısını göreyim.' },
                    { id: 'hierarchy', title: 'Klasör / Hiyerarşi', description: 'İç içe geçmiş klasörler.' },
                    { id: 'calendar', title: 'Takvim', description: 'Teslim tarihlerini takvimde göreyim.' },
                    { id: 'chronological', title: 'Kronolojik Liste', description: 'En son eklediğim en üstte.' },
                    { id: 'tags', title: 'Tag Sistemi', description: 'Etiketlerle her şeyi bulabileyim.' }
                ]
            },
            {
                id: 'tools-academic',
                type: 'multi-select',
                question: 'Kütüphanerin neresi? Hangi araçları kullanıyorsun?',
                options: [
                    { id: 'zettelkasten', title: 'Obsidian / Roam Research / Logseq' },
                    { id: 'reference', title: 'Zotero / Mendeley' },
                    { id: 'notion', title: 'Notion' },
                    { id: 'notebook', title: 'Fiziksel Ajanda / Defter' },
                    { id: 'calendar', title: 'Google Calendar / Outlook' },
                    { id: 'notes', title: 'Apple Notes / Google Keep' }
                ]
            }
        ],
        'corporate': [
            {
                id: 'content-corporate',
                type: 'multi-select',
                question: 'Kurumsal hayatın koşturmacasında listende neler var?',
                options: [
                    { id: 'meetings', title: 'Toplantı Action Item\'ları', description: 'Toplantılarda konuşulan görevler.' },
                    { id: 'email', title: 'E-posta Takibi', description: 'Mail kutusundaki işleri ayıklamak.' },
                    { id: 'reporting', title: 'Raporlama', description: 'Yöneticiye rapor verme görevleri.' },
                    { id: 'coordination', title: 'Ekip Koordinasyonu', description: 'Kimin ne yaptığını takip etmek.' },
                    { id: 'deadlines', title: 'Deadline Yönetimi', description: 'Proje teslim tarihlerini kaçırmamak.' },
                    { id: 'personal-dev', title: 'Kişisel Gelişim', description: 'Eğitim, sertifikasyon, kariyer.' }
                ]
            },
            {
                id: 'view-corporate',
                type: 'multi-select',
                question: 'Toplantı trafiği arasında işlerini nasıl organize etmek istersin?',
                options: [
                    { id: 'checklist', title: 'Checklist (Basit Liste)', description: 'Sadece tik atıp geçeceğim liste.' },
                    { id: 'agenda', title: 'Günlük Ajanda', description: 'Saat saat günümü planlama.' },
                    { id: 'matrix', title: 'Eisenhower Matrisi', description: 'Acil/Önemli ayrımı.' },
                    { id: 'kanban', title: 'Kanban', description: 'To Do, In Progress, Done sütunları.' },
                    { id: 'dashboard', title: 'Dashboard', description: 'Haftalık/aylık özet görünümü.' }
                ]
            },
            {
                id: 'tools-corporate',
                type: 'multi-select',
                question: 'Şirketin izin verdiği araç hangisi?',
                options: [
                    { id: 'microsoft', title: 'Microsoft To Do / Outlook Tasks / Planner' },
                    { id: 'trello', title: 'Trello / Planner' },
                    { id: 'sheets', title: 'Excel / Google Sheets' },
                    { id: 'notebook', title: 'Ajanda / Defter' },
                    { id: 'onenote', title: 'OneNote / Notion' },
                    { id: 'reminders', title: 'Apple Reminders / Google Tasks' }
                ]
            }
        ],
        'student': [
            {
                id: 'content-student',
                type: 'multi-select',
                question: 'Dersler, ödevler, sosyal hayat... Listende neler birikiyor?',
                options: [
                    { id: 'homework', title: 'Ödev Teslimleri', description: 'Hangi ödev ne zaman teslim?' },
                    { id: 'exams', title: 'Sınav Takvimi', description: 'Vizeler, finaller ve quiz\'ler.' },
                    { id: 'notes', title: 'Ders Notları & Okumalar', description: 'Okunacak kitaplar ve kaynaklar.' },
                    { id: 'personal', title: 'Kişisel Hedefler', description: 'Spor, hobi, kişisel gelişim.' },
                    { id: 'social', title: 'Sosyal Etkinlikler', description: 'Buluşmalar, kulüp aktiviteleri.' },
                    { id: 'career', title: 'Staj / İş Başvuruları', description: 'Kariyer hazırlığı.' }
                ]
            },
            {
                id: 'view-student',
                type: 'multi-select',
                question: 'Dersler ve sosyal hayat... Telefonunda ne görmek istersin?',
                options: [
                    { id: 'schedule', title: 'Haftalık Ders Programı', description: 'Boş saatlerimin içine görevler.' },
                    { id: 'countdown', title: 'Geri Sayım (Countdown)', description: 'Sınava kaç gün kaldı?' },
                    { id: 'gamification', title: 'Gamification', description: 'Görev yaptıkça seviye atlama.' },
                    { id: 'simple', title: 'Basit Checklist', description: 'Sadece tik atıp geçeyim.' },
                    { id: 'calendar', title: 'Takvim Görünümü', description: 'Her şeyi takvimde göreyim.' }
                ]
            },
            {
                id: 'tools-student',
                type: 'multi-select',
                question: 'Çantanda veya telefonunda bu iş için ne var?',
                options: [
                    { id: 'notion', title: 'Notion', description: 'Estetik notlar ve planlar.' },
                    { id: 'calendar', title: 'Google Takvim / Apple Calendar' },
                    { id: 'pomodoro', title: 'Forest / Pomodoro uygulamaları' },
                    { id: 'reminders', title: 'Telefonun Hatırlatıcıları' },
                    { id: 'notebook', title: 'Renkli kalemler ve fiziksel planlayıcılar' },
                    { id: 'todoist', title: 'Todoist / TickTick' }
                ]
            }
        ],
        'creative': [
            {
                id: 'content-creative',
                type: 'multi-select',
                question: 'Freelance hayatın karmaşasında listende neler var?',
                options: [
                    { id: 'deliverables', title: 'Proje Teslimleri', description: 'Müşteriye söz verilen tarihler.' },
                    { id: 'invoicing', title: 'Faturalama & Saat Takibi', description: 'Çalışma saatleri ve ödemeler.' },
                    { id: 'clients', title: 'Müşteri Yönetimi', description: 'Birden fazla müşterinin işleri.' },
                    { id: 'revisions', title: 'Revize İstekleri', description: 'Müşteri geri bildirimleri.' },
                    { id: 'ideas', title: 'Fikir & İlham', description: 'Yaratıcı fikirleri kaydetmek.' },
                    { id: 'personal', title: 'Kişisel İşler', description: 'Ev işleri ve kişisel görevler.' }
                ]
            },
            {
                id: 'view-creative',
                type: 'multi-select',
                question: 'İşlerini nasıl organize etmek istersin?',
                options: [
                    { id: 'client-boards', title: 'Müşteri Bazlı Panolar', description: 'Her müşteri için ayrı pano.' },
                    { id: 'calendar', title: 'Takvim / Deadline View', description: 'Her şeyi tarih bazlı görmek.' },
                    { id: 'simple-list', title: 'Basit Liste', description: 'Sadece günlük yapılacaklar.' },
                    { id: 'project-tracking', title: 'Proje Bazlı Tracking', description: 'Bütçe ve saat takibi.' },
                    { id: 'weekly', title: 'Haftalık Özet', description: 'Bu hafta ne yaptım, ne kazandım?' }
                ]
            },
            {
                id: 'tools-creative',
                type: 'multi-select',
                question: 'İş akışını nerede tutuyorsun?',
                options: [
                    { id: 'task-apps', title: 'Todoist / TickTick' },
                    { id: 'boards', title: 'Trello / Notion' },
                    { id: 'notes', title: 'Basit Not Defteri / Apple Notes' },
                    { id: 'email', title: 'E-posta / Kendime hatırlatma' },
                    { id: 'time-tracking', title: 'Toggl / Clockify' },
                    { id: 'paper', title: 'Kağıt / Defter' }
                ]
            }
        ]
    },

    nonNoteTakerQuestions: [
        {
            id: 'barrier',
            type: 'multi-select',
            question: 'Zihnine güvenmen etkileyici! Peki, seni bir liste tutmaktan alıkoyan sebepler neler?',
            options: [
                { id: 'friction', title: 'Üşengeçlik / Sürtünme', description: 'Uygulamayı aç, yeni görev ekle... Çok uzun iş.' },
                { id: 'complexity', title: 'Karmaşa', description: 'Mevcut uygulamalar çok karışık geliyor.' },
                { id: 'not-needed', title: 'Gerek Yok', description: 'İşlerim o kadar karışık değil.' },
                { id: 'sustainability', title: 'Sürdürülebilirlik', description: 'Başlıyorum ama 3 gün sonra bırakıyorum.' },
                { id: 'fast-change', title: 'Süreçler Hızlı Değişiyor', description: 'Plan yapmaya vakit yok.' }
            ]
        },
        {
            id: 'pain-recognition',
            type: 'single-select',
            question: 'Hafızan kuvvetli olsa da, hiç şöyle bir an yaşadın mı?',
            options: [
                { id: 'forgot-detail', title: 'Önemli bir detayı unutup son anda panik yaşadım' },
                { id: 'stress', title: 'Yapacaklarım kafamda birikince uyuyamadım / stres oldum' },
                { id: 'promise', title: 'Başkasına verdiğim bir sözü unutup mahcup oldum' },
                { id: 'juggling', title: 'Birden fazla işi aynı anda halletmeye çalışırken birini unuttum' },
                { id: 'never', title: 'Hayır, ben gerçekten bir robotum. Asla unutmam.' }
            ]
        },
        {
            id: 'persuasion',
            type: 'multi-select',
            question: 'Mevcut karışık uygulamaları unut. Şöyle bir şey olsa fikrin değişir miydi?',
            options: [
                { id: 'voice', title: 'Sesli Asistan', description: 'Yazmakla uğraşmasan, sen söylesen o anlasa?' },
                { id: 'ultra-simple', title: 'Ultra Basitlik', description: 'Sadece tek tuş, girmesi 1 saniye sürse?' },
                { id: 'whatsapp-like', title: 'WhatsApp Gibi', description: 'Arkadaşıma yazar gibi yazabilsem?' },
                { id: 'smart-reminder', title: 'Akıllı Hatırlatma', description: 'Benim yerime düşünüp önerilerde bulunsa?' },
                { id: 'gamification', title: 'Oyunlaştırma', description: 'Görev yaptıkça seviye atlasam?' },
                { id: 'no-change', title: 'Sanırım değişmez', description: 'Ben kaossuz yapamam.' }
            ]
        }
    ],

    commonQuestions: {
        noteTaker: [
            {
                id: 'essential-features',
                type: 'multi-select',
                question: 'Şu an kullandığın aracı henüz silmemiş olmanın nedenleri neler?',
                options: [
                    { id: 'speed', title: 'Hız', description: 'Saniyeler içinde not alabiliyorum.' },
                    { id: 'integration', title: 'Entegrasyon', description: 'Takvimimle ve maillerimle konuşuyor.' },
                    { id: 'visual', title: 'Görsellik', description: 'O kadar güzel görünüyor ki.' },
                    { id: 'notifications', title: 'Dürtmesi', description: 'Sürekli hatırlatıyor.' },
                    { id: 'sharing', title: 'Paylaşım', description: 'Başkasına iş atmak çok kolay.' },
                    { id: 'access', title: 'Her Yerden Erişim', description: 'Her yerden ulaşabiliyorum.' },
                    { id: 'free', title: 'Ücretsiz', description: 'Para ödemeden kullanabiliyorum.' }
                ]
            }
        ],
        all: [
            {
                id: 'pain-points',
                type: 'multi-select',
                question: 'Mevcut yönteminde seni en çok ne yoruyor?',
                options: [
                    { id: 'slow', title: 'Hantallik / Yavaşlık', description: 'Veri girmek çok uzun sürüyor.' },
                    { id: 'visual-chaos', title: 'Görsel Karmaşa', description: 'İstediğim yapıyı vermiyor.' },
                    { id: 'scattered', title: 'Dağınıklık', description: 'Her şey başka başka yerlerde.' },
                    { id: 'big-picture', title: 'Büyük Resmi Görememek', description: 'Listede boğuluyorum.' },
                    { id: 'notification-blindness', title: 'Bildirim Körlüğü', description: 'Çok bildirim geliyor.' },
                    { id: 'integration-gap', title: 'Kopukluk', description: 'Farklı araçlar birbirinden habersiz.' },
                    { id: 'pricing', title: 'Fiyatlandırma', description: 'Bedava sürüm çok kısıtlı.' },
                    { id: 'inflexible', title: 'Esneklik Yok', description: 'Hem basit liste hem proje yönetimi yapamıyorum.' }
                ]
            },
            {
                id: 'pain-detail',
                type: 'open-text',
                introText: 'Geldik en önemli soruya...',
                question: 'Kullandığın araçta seni en çok "gıcık" eden şey ne?',
                subtext: '(Her şey olabilir: yavaşlık, karmaşıklık, eksik özellik...)',
                placeholder: 'Örneğin: "Jira çok yavaş açılıyor", "Notion telefonda hantal"...'
            },
            {
                id: 'dream-features',
                type: 'ranking',
                question: 'Sihirli değneğin var. 3 "Süper Güç" ekleyeceksin. Önem sırasına göre seç!',
                subtext: '(İlk seçtiğin en önemli, 3 tane seç)',
                options: [
                    { id: 'context-smart', title: 'Bağlam Zekası', description: '"Login hatası" yazdığımda Bug olduğunu anlasın.' },
                    { id: 'light-speed', title: 'Işık Hızı', description: 'Komut satırı gibi görev girebileim.' },
                    { id: 'auto-roadmap', title: 'Oto-Roadmap', description: 'Görevleri girdikçe yol haritası çıkarsın.' },
                    { id: 'simplicity', title: 'Sadelik', description: 'Sadece o an yapmam gereken işi göstersin.' },
                    { id: 'modular-view', title: 'Modüler Görünüm', description: 'Tek tuşla Liste\'den Kanban\'a geçebileim.' },
                    { id: 'gamification', title: 'Oyunlaştırma', description: 'Görev yaptıkça seviye atlayım.' },
                    { id: 'smart-analysis', title: 'Akıllı Analiz', description: 'Haftamı nasıl geçirdiğimi raporlasın.' }
                ]
            }
        ]
    }
};

// Survey State
let surveyState = {
    currentStepIndex: 0,
    answers: {},
    isComplete: false,
    direction: 'forward'
};

// Webhook Configuration
// n8n webhook URL'inizi buraya ekleyin
const SURVEY_WEBHOOK_URL = 'https://n8n.carettask.com/webhook/carettask-survey';

// Normalize profile-specific answers to unified column names
function normalizeAnswers(answers) {
    const profile = answers['profile'] || 'unknown';

    // Profile suffixes mapping
    const profileSuffixes = {
        'tech-lead': 'tech',
        'entrepreneur': 'entrepreneur',
        'academic': 'academic',
        'corporate': 'corporate',
        'student': 'student',
        'creative': 'creative'
    };

    const suffix = profileSuffixes[profile] || profile;

    return {
        profile: profile,
        behavior: answers['behavior'] || '',
        content_selections: answers[`content-${suffix}`] || [],
        view_preferences: answers[`view-${suffix}`] || [],
        tools_used: answers[`tools-${suffix}`] || [],
        essential_features: answers['essential-features'] || [],
        pain_points: answers['pain-points'] || [],
        pain_detail: answers['pain-detail'] || '',
        dream_features: answers['dream-features'] || [],
        // Non-note-taker specific fields
        barrier: answers['barrier'] || [],
        pain_recognition: answers['pain-recognition'] || '',
        persuasion: answers['persuasion'] || [],
        email: answers['email'] || 'skipped'
    };
}

// Submit survey data to webhook
async function submitSurveyToWebhook() {
    // Normalize answers to unified column names
    const normalizedAnswers = normalizeAnswers(surveyState.answers);

    const surveyData = {
        email: normalizedAnswers.email,
        profile: normalizedAnswers.profile,
        behavior: normalizedAnswers.behavior,
        content_selections: normalizedAnswers.content_selections,
        view_preferences: normalizedAnswers.view_preferences,
        tools_used: normalizedAnswers.tools_used,
        essential_features: normalizedAnswers.essential_features,
        pain_points: normalizedAnswers.pain_points,
        pain_detail: normalizedAnswers.pain_detail,
        dream_features: normalizedAnswers.dream_features,
        barrier: normalizedAnswers.barrier,
        pain_recognition: normalizedAnswers.pain_recognition,
        persuasion: normalizedAnswers.persuasion,
        // Keep raw answers for debugging
        raw_answers: { ...surveyState.answers },
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language
    };

    console.log('📤 Sending survey data to:', SURVEY_WEBHOOK_URL);
    console.log('📋 Survey data:', JSON.stringify(surveyData, null, 2));

    const jsonData = JSON.stringify(surveyData);

    // Try fetch first, fallback to XMLHttpRequest for Safari compatibility
    try {
        const response = await fetch(SURVEY_WEBHOOK_URL, {
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonData
        });

        console.log('📨 Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Survey submission failed:', response.status, errorText);
        } else {
            const result = await response.json();
            console.log('✅ Survey submitted successfully:', result);
        }
    } catch (error) {
        console.error('⚠️ Fetch failed, trying XMLHttpRequest:', error.message);

        // Fallback to XMLHttpRequest for older Safari versions
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', SURVEY_WEBHOOK_URL, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        console.log('✅ Survey submitted via XHR:', xhr.responseText);
                    } else {
                        console.error('❌ XHR submission failed:', xhr.status);
                    }
                }
            };

            xhr.onerror = function() {
                console.error('❌ XHR error occurred');
            };

            xhr.send(jsonData);
        } catch (xhrError) {
            console.error('❌ XHR fallback also failed:', xhrError);
        }
    }
}

// Get user path (note-taker or non-note-taker)
function getUserPath() {
    const behavior = surveyState.answers['behavior'];
    if (!behavior) return null;
    return (behavior === 'always-write' || behavior === 'sometimes-write') ? 'note-taker' : 'non-note-taker';
}

// Build steps based on answers
function buildSteps() {
    const steps = [];

    // Intro
    steps.push({ id: 'intro', type: 'intro' });

    // Profile selection
    steps.push({
        id: 'profile',
        type: 'single-select',
        question: 'Sahnedeki rolün ne? Günün büyük kısmı hangi şapkayı takarak geçiyor?',
        options: Object.entries(surveyConfig.profiles).map(([id, data]) => ({
            id,
            title: data.title,
            description: data.description,
            emoji: data.emoji
        }))
    });

    // Behavior split
    steps.push({
        id: 'behavior',
        type: 'single-select',
        question: 'Dürüst olalım: Gün içinde aklına gelen o kritik işi veya fikri ne yapıyorsun?',
        options: surveyConfig.behaviors
    });

    const profile = surveyState.answers['profile'];
    const path = getUserPath();

    if (path === 'note-taker' && profile) {
        // Profile-specific questions
        const profileQuestions = surveyConfig.profileQuestions[profile] || [];
        steps.push(...profileQuestions);
    } else if (path === 'non-note-taker') {
        // Non-note-taker questions
        steps.push(...surveyConfig.nonNoteTakerQuestions);
    }

    // Common questions
    if (path) {
        if (path === 'note-taker') {
            steps.push(...surveyConfig.commonQuestions.noteTaker);
        }
        steps.push(...surveyConfig.commonQuestions.all);
    }

    // Email and Success
    steps.push({ id: 'email', type: 'email' });
    steps.push({ id: 'success', type: 'success' });

    return steps;
}

// Get current step
function getCurrentStep() {
    const steps = buildSteps();
    return steps[surveyState.currentStepIndex] || steps[0];
}

// Get total steps
function getTotalSteps() {
    return buildSteps().length;
}

// Check if can proceed
function canProceed() {
    const currentStep = getCurrentStep();

    if (currentStep.id === 'intro' || currentStep.id === 'email' || currentStep.id === 'success') {
        return true;
    }

    const answer = surveyState.answers[currentStep.id];
    if (!answer) return false;

    if (currentStep.type === 'single-select') {
        return typeof answer === 'string' && answer.length > 0;
    }
    if (currentStep.type === 'multi-select') {
        return Array.isArray(answer) && answer.length > 0;
    }
    if (currentStep.type === 'ranking') {
        return Array.isArray(answer) && answer.length === 3;
    }
    if (currentStep.type === 'open-text') {
        return typeof answer === 'string' && answer.trim().length > 0;
    }

    return false;
}

// Render functions
function renderSurveyModal() {
    const modal = document.getElementById('surveyModal');
    const currentStep = getCurrentStep();
    const totalSteps = getTotalSteps();
    const progress = ((surveyState.currentStepIndex + 1) / totalSteps) * 100;

    let contentHTML = '';

    // Header (not for success screen)
    if (currentStep.id !== 'success') {
        contentHTML += `
            <div class="survey-header">
                <div class="survey-progress">
                    <div class="survey-progress-bar" style="width: ${progress}%"></div>
                </div>
                <span class="survey-step-indicator">${surveyState.currentStepIndex + 1}/${totalSteps}</span>
                <button class="survey-close-btn" onclick="closeSurvey()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;
    }

    // Content
    contentHTML += '<div class="survey-content">';

    switch (currentStep.type) {
        case 'intro':
            contentHTML += renderIntroScreen();
            break;
        case 'single-select':
            contentHTML += renderSingleSelect(currentStep);
            break;
        case 'multi-select':
            contentHTML += renderMultiSelect(currentStep);
            break;
        case 'ranking':
            contentHTML += renderRanking(currentStep);
            break;
        case 'open-text':
            contentHTML += renderOpenText(currentStep);
            break;
        case 'email':
            contentHTML += renderEmailScreen();
            break;
        case 'success':
            contentHTML += renderSuccessScreen();
            break;
    }

    contentHTML += '</div>';

    // Navigation (not for intro and success)
    if (currentStep.id !== 'intro' && currentStep.id !== 'success') {
        contentHTML += `
            <div class="survey-nav">
                <button class="survey-nav-btn survey-nav-back ${surveyState.currentStepIndex === 0 ? 'disabled' : ''}"
                        onclick="surveyBack()" ${surveyState.currentStepIndex === 0 ? 'disabled' : ''}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Geri
                </button>
                <button class="survey-nav-btn survey-nav-next ${!canProceed() ? 'disabled' : ''}"
                        onclick="surveyNext()" ${!canProceed() ? 'disabled' : ''}>
                    ${currentStep.id === 'email' ? 'Gönder' : 'Devam'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        `;
    }

    modal.querySelector('.survey-modal-content').innerHTML = contentHTML;
}

function renderIntroScreen() {
    return `
        <div class="survey-screen intro-screen">
            <div class="survey-emoji">👋</div>
            <h1>Merhaba!</h1>
            <p>Her zihin farklı bir işletim sistemiyle çalışır. Seninkini çözmeye ve ona en uygun arayüzü tasarlamaya çalışıyoruz. Bu sohbet 2 dakikadan kısa sürecek ama bizim için değeri paha biçilemez.</p>
            <button class="survey-start-btn" onclick="surveyNext()">
                Başlayalım!
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;
}

function renderSingleSelect(step) {
    const selectedValue = surveyState.answers[step.id] || '';

    return `
        <div class="survey-screen question-screen">
            <div class="survey-emoji">💭</div>
            <h2>${step.question}</h2>
            ${step.subtext ? `<p class="survey-subtext">${step.subtext}</p>` : ''}
            <div class="survey-options">
                ${step.options.map(option => `
                    <button class="survey-option ${selectedValue === option.id ? 'selected' : ''}"
                            onclick="selectSingleOption('${step.id}', '${option.id}')">
                        ${option.emoji ? `<span class="option-emoji">${option.emoji}</span>` : ''}
                        <div class="option-content">
                            <div class="option-title">${option.title}</div>
                            ${option.description ? `<div class="option-description">${option.description}</div>` : ''}
                        </div>
                        ${selectedValue === option.id ? `
                            <svg class="option-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        ` : ''}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderMultiSelect(step) {
    const selectedValues = surveyState.answers[step.id] || [];

    return `
        <div class="survey-screen question-screen">
            <div class="survey-emoji">✨</div>
            <h2>${step.question}</h2>
            <p class="survey-subtext">${step.subtext || '(Birden fazla seçebilirsin)'}</p>
            <div class="survey-options">
                ${step.options.map(option => `
                    <button class="survey-option ${selectedValues.includes(option.id) ? 'selected' : ''}"
                            onclick="toggleMultiOption('${step.id}', '${option.id}')">
                        <div class="option-checkbox ${selectedValues.includes(option.id) ? 'checked' : ''}">
                            ${selectedValues.includes(option.id) ? `
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            ` : ''}
                        </div>
                        <div class="option-content">
                            <div class="option-title">${option.title}</div>
                            ${option.description ? `<div class="option-description">${option.description}</div>` : ''}
                        </div>
                    </button>
                `).join('')}
            </div>
            ${selectedValues.length > 0 ? `<div class="survey-selection-count">${selectedValues.length} öğe seçildi</div>` : ''}
        </div>
    `;
}

function renderRanking(step) {
    const rankedValues = surveyState.answers[step.id] || [];

    const getRank = (optionId) => {
        const index = rankedValues.indexOf(optionId);
        return index >= 0 ? index + 1 : null;
    };

    return `
        <div class="survey-screen question-screen">
            <div class="survey-emoji">🪄</div>
            <h2>${step.question}</h2>
            <p class="survey-subtext">${step.subtext}</p>
            <div class="survey-options">
                ${step.options.map(option => {
                    const rank = getRank(option.id);
                    return `
                        <button class="survey-option ${rank !== null ? 'selected' : ''}"
                                onclick="toggleRankingOption('${step.id}', '${option.id}')">
                            ${rank !== null ? `
                                <div class="option-rank">${rank}</div>
                            ` : `
                                <div class="option-rank-empty"></div>
                            `}
                            <div class="option-content">
                                <div class="option-title">${option.title}</div>
                                ${option.description ? `<div class="option-description">${option.description}</div>` : ''}
                            </div>
                        </button>
                    `;
                }).join('')}
            </div>
            <div class="survey-selection-count">${rankedValues.length}/3 seçildi</div>
        </div>
    `;
}

function renderOpenText(step) {
    const value = surveyState.answers[step.id] || '';

    return `
        <div class="survey-screen question-screen">
            <div class="survey-emoji">😤</div>
            ${step.introText ? `<p class="survey-intro-text">${step.introText}</p>` : ''}
            <h2>${step.question}</h2>
            ${step.subtext ? `<p class="survey-subtext">${step.subtext}</p>` : ''}
            <textarea class="survey-textarea"
                      placeholder="${step.placeholder || 'Buraya yazın...'}"
                      oninput="updateOpenText('${step.id}', this.value)">${value}</textarea>
        </div>
    `;
}

function renderEmailScreen() {
    return `
        <div class="survey-screen email-screen">
            <div class="survey-emoji">🎉</div>
            <h2>Bu sohbet çok keyifliydi!</h2>
            <p>Tam da senin anlattığın gibi sorunları çözen, kullanıcı odaklı bir uygulama geliştiriyoruz. İlk deneyenlerden olmak ve süreçten haberdar olmak ister misin?</p>
            <input type="email" id="surveyEmail" class="survey-email-input" placeholder="ornek@email.com"
                   onkeypress="if(event.key === 'Enter') submitEmail()">
            <div id="emailError" class="survey-email-error"></div>
            <button class="survey-email-submit" onclick="submitEmail()">
                Evet, beni listeye ekle!
            </button>
            <button class="survey-email-skip" onclick="skipEmail()">
                Hayır, teşekkürler
            </button>
            <p class="survey-email-note">E-postanı yalnızca CaretTask ile ilgili güncellemeler için kullanacağız.</p>
        </div>
    `;
}

function renderSuccessScreen() {
    return `
        <div class="survey-screen success-screen">
            <div class="survey-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#334E68" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h2>Teşekkürler!</h2>
            <p>Fikirlerin bizim için çok değerli. CaretTask yayına hazır olduğunda ilk senden haber alacaksın!</p>
            <button class="survey-close-success" onclick="closeSurvey()">
                Tamam, Kapat
            </button>
        </div>
    `;
}

// Survey action functions
function selectSingleOption(stepId, optionId) {
    surveyState.answers[stepId] = optionId;

    // Update UI without full re-render
    const options = document.querySelectorAll('.survey-option');
    options.forEach(option => {
        const isSelected = option.getAttribute('onclick')?.includes(`'${optionId}'`);
        option.classList.toggle('selected', isSelected);

        // Update checkmark
        const existingCheck = option.querySelector('.option-check');
        if (isSelected && !existingCheck) {
            const checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            checkSvg.classList.add('option-check');
            checkSvg.setAttribute('width', '18');
            checkSvg.setAttribute('height', '18');
            checkSvg.setAttribute('viewBox', '0 0 24 24');
            checkSvg.setAttribute('fill', 'none');
            checkSvg.setAttribute('stroke', 'currentColor');
            checkSvg.setAttribute('stroke-width', '2');
            checkSvg.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
            option.appendChild(checkSvg);
        } else if (!isSelected && existingCheck) {
            existingCheck.remove();
        }
    });

    // Update navigation button state
    updateNavButtonState();
}

function toggleMultiOption(stepId, optionId) {
    const current = surveyState.answers[stepId] || [];
    if (current.includes(optionId)) {
        surveyState.answers[stepId] = current.filter(id => id !== optionId);
    } else {
        surveyState.answers[stepId] = [...current, optionId];
    }

    const selectedValues = surveyState.answers[stepId];

    // Update UI without full re-render
    const options = document.querySelectorAll('.survey-option');
    options.forEach(option => {
        const onclickAttr = option.getAttribute('onclick') || '';
        const match = onclickAttr.match(/toggleMultiOption\('[^']+',\s*'([^']+)'\)/);
        if (match) {
            const thisOptionId = match[1];
            const isSelected = selectedValues.includes(thisOptionId);
            option.classList.toggle('selected', isSelected);

            const checkbox = option.querySelector('.option-checkbox');
            if (checkbox) {
                checkbox.classList.toggle('checked', isSelected);
                if (isSelected) {
                    checkbox.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                } else {
                    checkbox.innerHTML = '';
                }
            }
        }
    });

    // Update selection count
    const countDiv = document.querySelector('.survey-selection-count');
    if (countDiv) {
        countDiv.textContent = `${selectedValues.length} öğe seçildi`;
        countDiv.style.display = selectedValues.length > 0 ? 'block' : 'none';
    } else if (selectedValues.length > 0) {
        const optionsContainer = document.querySelector('.survey-options');
        if (optionsContainer) {
            const newCountDiv = document.createElement('div');
            newCountDiv.className = 'survey-selection-count';
            newCountDiv.textContent = `${selectedValues.length} öğe seçildi`;
            optionsContainer.parentNode.appendChild(newCountDiv);
        }
    }

    // Update navigation button state
    updateNavButtonState();
}

function toggleRankingOption(stepId, optionId) {
    const current = surveyState.answers[stepId] || [];
    if (current.includes(optionId)) {
        surveyState.answers[stepId] = current.filter(id => id !== optionId);
    } else if (current.length < 3) {
        surveyState.answers[stepId] = [...current, optionId];
    }

    const rankedValues = surveyState.answers[stepId];

    // Update UI without full re-render
    const options = document.querySelectorAll('.survey-option');
    options.forEach(option => {
        const onclickAttr = option.getAttribute('onclick') || '';
        const match = onclickAttr.match(/toggleRankingOption\('[^']+',\s*'([^']+)'\)/);
        if (match) {
            const thisOptionId = match[1];
            const rankIndex = rankedValues.indexOf(thisOptionId);
            const isSelected = rankIndex >= 0;
            option.classList.toggle('selected', isSelected);

            const rankDiv = option.querySelector('.option-rank, .option-rank-empty');
            if (rankDiv) {
                if (isSelected) {
                    rankDiv.className = 'option-rank';
                    rankDiv.textContent = rankIndex + 1;
                } else {
                    rankDiv.className = 'option-rank-empty';
                    rankDiv.textContent = '';
                }
            }
        }
    });

    // Update selection count
    const countDiv = document.querySelector('.survey-selection-count');
    if (countDiv) {
        countDiv.textContent = `${rankedValues.length}/3 seçildi`;
    }

    // Update navigation button state
    updateNavButtonState();
}

function updateNavButtonState() {
    const nextBtn = document.querySelector('.survey-nav-next');
    if (nextBtn) {
        if (canProceed()) {
            nextBtn.classList.remove('disabled');
            nextBtn.disabled = false;
        } else {
            nextBtn.classList.add('disabled');
            nextBtn.disabled = true;
        }
    }
}

function updateOpenText(stepId, value) {
    surveyState.answers[stepId] = value;
    // Don't re-render to avoid losing focus, just update nav state
    const nextBtn = document.querySelector('.survey-nav-next');
    if (nextBtn) {
        if (value.trim().length > 0) {
            nextBtn.classList.remove('disabled');
            nextBtn.disabled = false;
        } else {
            nextBtn.classList.add('disabled');
            nextBtn.disabled = true;
        }
    }
}

function surveyNext() {
    const currentStep = getCurrentStep();

    if (currentStep.id === 'success') {
        closeSurvey();
        return;
    }

    if (!canProceed() && currentStep.id !== 'intro') return;

    surveyState.direction = 'forward';
    surveyState.currentStepIndex++;
    renderSurveyModal();
}

function surveyBack() {
    if (surveyState.currentStepIndex === 0) return;
    surveyState.direction = 'backward';
    surveyState.currentStepIndex--;
    renderSurveyModal();
}

function submitEmail() {
    const emailInput = document.getElementById('surveyEmail');
    const errorDiv = document.getElementById('emailError');
    const email = emailInput.value.trim();

    if (!email) {
        errorDiv.textContent = 'E-posta adresinizi giriniz';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Geçerli bir e-posta adresi giriniz';
        return;
    }

    surveyState.answers['email'] = email;
    surveyState.isComplete = true;

    // Submit to webhook (async, don't block UI)
    submitSurveyToWebhook();

    surveyNext();
}

function skipEmail() {
    surveyState.answers['email'] = 'skipped';
    surveyState.isComplete = true;

    // Submit to webhook (async, don't block UI)
    submitSurveyToWebhook();

    surveyNext();
}

// Modal control functions
function openKVKKModal() {
    document.getElementById('kvkkModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeKVKKModal() {
    document.getElementById('kvkkModal').classList.remove('show');
    document.getElementById('kvkkCheckbox').checked = false;
    document.getElementById('kvkkError').style.display = 'none';
    document.body.style.overflow = '';
}

function acceptKVKK() {
    const checkbox = document.getElementById('kvkkCheckbox');
    const errorDiv = document.getElementById('kvkkError');

    if (!checkbox.checked) {
        errorDiv.style.display = 'block';
        document.querySelector('.kvkk-accept-btn').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.kvkk-accept-btn').classList.remove('shake');
        }, 500);
        return;
    }

    closeKVKKModal();
    setTimeout(() => {
        openSurveyModal();
    }, 300);
}

function openSurveyModal() {
    // Reset survey state
    surveyState = {
        currentStepIndex: 0,
        answers: {},
        isComplete: false,
        direction: 'forward'
    };

    document.getElementById('surveyModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    renderSurveyModal();
}

function closeSurvey() {
    const currentStep = getCurrentStep();

    if (surveyState.currentStepIndex > 0 && !surveyState.isComplete && currentStep.id !== 'success') {
        if (!confirm('Anketi kapatmak istediğinize emin misiniz? İlerlemeniz kaydedilmeyecek.')) {
            return;
        }
    }

    document.getElementById('surveyModal').classList.remove('show');
    document.body.style.overflow = '';
}

// Initialize survey button
document.addEventListener('DOMContentLoaded', function() {
    // Add click handler to CTA button
    const ctaButton = document.querySelector('.btn-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            openKVKKModal();
        });
    }
});
