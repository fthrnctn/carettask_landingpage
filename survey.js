// CaretTask Survey System

// Survey Flow Configuration
const surveyConfig = {
    demographics: [
        {
            id: 'work-status',
            type: 'multi-select',
            maxSelect: 2,
            question: 'Şu anda hangi çalışma düzenine sahipsiniz?',
            subtext: '(En fazla 2 seçim yapabilirsiniz)',
            options: [
                { id: 'fulltime-office', title: 'Tam zamanlı çalışan (şirkette)', description: 'Ofise giderek çalışıyorum' },
                { id: 'fulltime-remote', title: 'Tam zamanlı çalışan (uzaktan)', description: 'Evden veya uzaktan çalışıyorum' },
                { id: 'parttime', title: 'Yarı zamanlı çalışan', description: 'Haftada belirli günler çalışıyorum' },
                { id: 'freelancer', title: 'Freelancer/Serbest çalışan', description: 'Bağımsız olarak projeler alıyorum' },
                { id: 'entrepreneur', title: 'Girişimci/İş sahibi', description: 'Kendi işimi kurdum veya yönetiyorum' },
                { id: 'student', title: 'Öğrenci', description: 'Üniversite veya lisansüstü öğrencisiyim' },
                { id: 'job-seeking', title: 'İş arıyor', description: 'Şu anda aktif iş arıyorum' },
                { id: 'other-work', title: 'Diğer', description: '', isOther: true }
            ]
        },
        {
            id: 'sector',
            type: 'multi-select',
            maxSelect: 2,
            question: 'Hangi sektörde çalışıyorsunuz/faaliyet gösteriyorsunuz?',
            subtext: '(En fazla 2 seçim yapabilirsiniz)',
            options: [
                { id: 'tech', title: 'Teknoloji/Yazılım', description: 'Yazılım, IT, SaaS şirketleri' },
                { id: 'finance', title: 'Finans/Bankacılık', description: 'Banka, sigorta, yatırım kuruluşları' },
                { id: 'health', title: 'Sağlık', description: 'Hastane, klinik, ilaç sektörü' },
                { id: 'education', title: 'Eğitim', description: 'Okul, üniversite, eğitim kurumları' },
                { id: 'retail', title: 'Perakende/E-ticaret', description: 'Mağaza, online satış' },
                { id: 'manufacturing', title: 'Üretim/Sanayi', description: 'Fabrika, imalat tesisleri' },
                { id: 'media', title: 'Medya/Reklam', description: 'Ajans, yayın, içerik üretimi' },
                { id: 'consulting', title: 'Danışmanlık', description: 'Hukuk, muhasebe, yönetim danışmanlığı' },
                { id: 'public', title: 'Kamu/STK', description: 'Devlet kurumları, sivil toplum' },
                { id: 'other-sector', title: 'Diğer', description: '', isOther: true }
            ]
        },
        {
            id: 'team-size',
            type: 'single-select',
            question: 'Birlikte çalıştığınız/yönettiğiniz ekip kaç kişiden oluşuyor?',
            options: [
                { id: 'solo', title: 'Sadece ben (bireysel)', description: 'Tek başıma çalışıyorum' },
                { id: 'small', title: '2-5 kişi', description: 'Küçük bir ekibim var' },
                { id: 'medium', title: '6-15 kişi', description: 'Orta büyüklükte ekip' },
                { id: 'large', title: '16-50 kişi', description: 'Büyük departman veya şirket' },
                { id: 'enterprise', title: '50+ kişi', description: 'Kurumsal yapı' }
            ]
        },
        {
            id: 'role',
            type: 'single-select',
            question: 'Ekibinizde veya işinizde hangi rolü üstleniyorsunuz?',
            options: [
                { id: 'member', title: 'Ekip üyesi/Çalışan', description: 'Görevleri uygulayan pozisyondayım' },
                { id: 'team-lead', title: 'Takım lideri/Supervisor', description: 'Küçük bir ekibi yönetiyorum' },
                { id: 'pm', title: 'Proje yöneticisi', description: 'Projeleri planlayıp yürütüyorum' },
                { id: 'dept-manager', title: 'Departman yöneticisi', description: 'Bir departmanı yönetiyorum' },
                { id: 'c-level', title: 'Üst düzey yönetici (C-level)', description: 'CEO, CTO, CFO gibi pozisyonlar' },
                { id: 'founder', title: 'Kurucu/Sahip', description: 'Şirketin sahibi veya kurucusuyum' },
                { id: 'other-role', title: 'Diğer', description: '', isOther: true }
            ]
        }
    ],

    filterQuestion: {
        id: 'task-tracking',
        type: 'single-select',
        question: 'Yapacağın işleri veya görevleri bir yere yazıyor/kaydediyor musun?',
        options: [
            { id: 'digital', title: 'Evet, dijital araç kullanıyorum', description: 'Uygulama, program veya online araç' },
            { id: 'paper', title: 'Evet, kağıt/defter kullanıyorum', description: 'Fiziksel not defteri, ajanda, post-it' },
            { id: 'both', title: 'Her ikisini de kullanıyorum', description: 'Hem dijital hem fiziksel yöntemler' },
            { id: 'irregular', title: 'Bazen yazıyorum, düzensiz', description: 'Tutarlı bir sistemim yok' },
            { id: 'memory', title: 'Hayır, aklımda tutuyorum', description: 'Genelde yazma ihtiyacı duymuyorum' }
        ]
    },

    userPath: [
        {
            id: 'tools-used',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Hangi araçları kullanıyorsunuz veya daha önce kullandınız?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'notion', title: 'Notion', description: 'Not alma, dokümantasyon ve görev yönetimi bir arada' },
                { id: 'trello', title: 'Trello', description: 'Görsel kanban panoları ile basit yönetim' },
                { id: 'asana', title: 'Asana', description: 'Proje ve görev takibi için kurumsal çözüm' },
                { id: 'monday', title: 'Monday.com', description: 'Renkli ve görsel iş yönetimi platformu' },
                { id: 'clickup', title: 'ClickUp', description: 'Her şeyi yapabilen kapsamlı platform' },
                { id: 'jira', title: 'Jira', description: 'Yazılım geliştirme ve sprint yönetimi' },
                { id: 'todoist', title: 'Todoist', description: 'Basit ve hızlı kişisel görev listesi' },
                { id: 'ms-todo', title: 'Microsoft To Do', description: 'Windows ve Outlook ile entegre liste' },
                { id: 'google-tasks', title: 'Google Tasks', description: 'Gmail ve Calendar ile entegre basit liste' },
                { id: 'apple-reminders', title: 'Apple Reminders', description: 'iPhone ve Mac için varsayılan hatırlatıcı' },
                { id: 'linear', title: 'Linear', description: 'Modern ve hızlı yazılım proje yönetimi' },
                { id: 'basecamp', title: 'Basecamp', description: 'Ekip iletişimi ve proje yönetimi bir arada' },
                { id: 'paper-notebook', title: 'Kağıt/Defter', description: 'Fiziksel not defteri veya ajanda' },
                { id: 'excel-sheets', title: 'Excel/Sheets', description: 'Tablo programları ile manuel takip' },
                { id: 'other-tool', title: 'Diğer', description: '', isOther: true }
            ]
        },
        {
            id: 'liked-features',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Şu anda kullandığınız araçta en çok kullandığınız şey ne?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'quick-add', title: 'Hızlı görev ekleme', description: 'Saniyeler içinde yeni görev girebiliyorum' },
                { id: 'calendar-integration', title: 'Takvim entegrasyonu', description: 'Görevlerimi takvimimde görebiliyorum' },
                { id: 'reminders', title: 'Hatırlatıcılar/Bildirimler', description: 'Zamanında uyarı alıyorum' },
                { id: 'kanban', title: 'Kanban/Board görünümü', description: 'Sürükle-bırak ile organize edebiliyorum' },
                { id: 'subtasks', title: 'Alt görevler/Checklist', description: 'Büyük işleri parçalara bölebiliyorum' },
                { id: 'tags', title: 'Etiketler/Kategoriler', description: 'Renk ve etiketlerle organize edebiliyorum' },
                { id: 'mobile', title: 'Mobil uygulama', description: 'Telefonumdan da kullanabiliyorum' },
                { id: 'sharing', title: 'Ekip paylaşımı', description: 'Başkalarına görev atayabiliyorum' },
                { id: 'recurring', title: 'Tekrarlayan görevler', description: 'Rutin işleri otomatik oluşturuyor' },
                { id: 'attachments', title: 'Dosya ekleme', description: 'Görevlere dosya/link ekleyebiliyorum' },
                { id: 'search', title: 'Arama/Filtreleme', description: 'İstediğimi hızlıca bulabiliyorum' },
                { id: 'offline', title: 'Offline çalışma', description: 'İnternet olmadan da kullanabiliyorum' },
                { id: 'nice-ui', title: 'Güzel/Modern arayüz', description: 'Kullanması keyifli, estetik' },
                { id: 'ai-capabilities', title: 'Yapay Zeka Araçları', description: 'İşlerimi daha hızlı ve verimli yapmamı sağlıyor' }
            ]
        },
        {
            id: 'satisfaction',
            type: 'single-select',
            question: 'Şu anda kullandığınız araçtan ne kadar memnunsunuz?',
            options: [
                { id: 'very-satisfied', title: 'Çok memnunum', description: 'Tam aradığım gibi, değiştirmem' },
                { id: 'satisfied', title: 'Memnunum', description: 'İdare ediyor ama mükemmel değil' },
                { id: 'neutral', title: 'Ne memnunum ne değilim', description: 'Bazı şeyler iyi, bazıları kötü' },
                { id: 'unsatisfied', title: 'Memnun değilim', description: 'Eksikleri çok, alternatif arıyorum' },
                { id: 'very-unsatisfied', title: 'Hiç memnun değilim', description: 'Kullanmak zorunda kaldığım için kullanıyorum' }
            ]
        }
    ],

    nonUserPath: [
        {
            id: 'non-use-reasons',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Dijital görev yönetimi aracı kullanmama nedeniniz nedir?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'current-method-ok', title: 'Mevcut yöntemim yeterli', description: 'Kağıt, not defteri veya zihnimle idare ediyorum' },
                { id: 'too-complex', title: 'Denediklerim çok karmaşıktı', description: 'Öğrenmesi ve kullanması zor geldi' },
                { id: 'expensive', title: 'Ücretli olması', description: 'İstediğim özellikleri ücretsiz bulamadım' },
                { id: 'team-uses-other', title: 'Ekibim/şirketim farklı araç kullanıyor', description: 'Şirket başka bir şey dayatıyor' },
                { id: 'cant-decide', title: 'Hangi aracı seçeceğimi bilmiyorum', description: 'Çok fazla seçenek var, karar veremedim' },
                { id: 'security-concern', title: 'Veri güvenliği endişelerim var', description: 'Bilgilerimi buluta koymak istemiyorum' },
                { id: 'no-turkish', title: 'Türkçe arayüz bulamadım', description: 'Yabancı dilde kullanmak zor' },
                { id: 'no-need', title: 'İhtiyacım yok', description: 'İşlerim o kadar karmaşık değil' },
                { id: 'other-reason', title: 'Diğer', description: '', isOther: true }
            ]
        },
        {
            id: 'pain-experiences',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Hiç şöyle bir durum yaşadınız mı?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'forgot-task', title: 'Önemli bir işi/toplantıyı unuttum', description: 'Son anda hatırlayıp panik yaptım' },
                { id: 'missed-deadline', title: 'Deadline kaçırdım', description: 'Teslim tarihini geçtim' },
                { id: 'duplicate-work', title: 'Aynı işi iki kez yaptım', description: 'Daha önce yaptığımı unuttum' },
                { id: 'broke-promise', title: 'Birine verdiğim sözü unuttum', description: 'Söylediğim şeyi yapmadım' },
                { id: 'mental-overload', title: 'Yapacaklarım kafamda birikti', description: 'Stres oldum, uyuyamadım' },
                { id: 'wrong-priority', title: 'Önceliği yanlış belirledim', description: 'Önemli işi erteleyip gereksiz iş yaptım' },
                { id: 'team-collision', title: 'Ekip arkadaşımla iş çakıştı', description: 'Kim ne yapacak belli değildi' },
                { id: 'lost-progress', title: 'Projenin ne durumda olduğunu unuttum', description: 'Nerede kaldığımı hatırlayamadım' },
                { id: 'none', title: 'Bunların hiçbirini yaşamadım', description: 'İşlerimi sorunsuz yönetiyorum' }
            ]
        }
    ],

    painPoints: [
        {
            id: 'biggest-challenges',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Görev ve iş süreçlerinizi yönetirken en çok hangi zorluklarla karşılaşıyorsunuz?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'prioritization', title: 'Görevlerin önceliklendirilmesi', description: 'Hangisini önce yapacağıma karar vermek zor' },
                { id: 'deadline-tracking', title: 'Deadline\'ları takip etme', description: 'Teslim tarihlerini kaçırıyorum' },
                { id: 'team-coordination', title: 'Ekiple koordinasyon ve iletişim', description: 'Kimin ne yaptığını bilmek zor' },
                { id: 'multi-project', title: 'Birden fazla projeyi aynı anda yönetme', description: 'Her şey birbirine karışıyor' },
                { id: 'progress-visibility', title: 'İlerleme durumunu görüntüleme', description: 'Ne kadar iş kaldığını göremiyorum' },
                { id: 'automation', title: 'Tekrarlayan görevleri otomatikleştirme', description: 'Aynı işleri manuel tekrarlamak yorucu' },
                { id: 'tool-switching', title: 'Farklı araçlar arasında geçiş yapma', description: 'Her şey farklı yerlerde dağınık' },
                { id: 'meeting-balance', title: 'Toplantı ve görev dengesini kurma', description: 'Toplantılar arasında iş yapamıyorum' },
                { id: 'remote-sync', title: 'Uzaktan ekip üyeleriyle senkronizasyon', description: 'Ekiple aynı anda bilgi alamıyorum' },
                { id: 'reporting', title: 'Üst yönetime raporlama', description: 'Durumu özetlemek zaman alıyor' },
                { id: 'time-estimation', title: 'Zaman tahmini yapma', description: 'İşlerin ne kadar süreceğini bilmiyorum' },
                { id: 'motivation', title: 'Motivasyon eksikliği', description: 'Erteleme alışkanlığım var' },
                { id: 'other-challenge', title: 'Diğer', description: '', isOther: true }
            ]
        },
        {
            id: 'tool-complaints',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Kullandığınız veya denediğiniz araçlarda sizi en çok rahatsız eden özellikler nelerdi?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'too-complex', title: 'Çok karmaşık/öğrenmesi zor', description: 'Kullanmayı öğrenmek saatler aldı' },
                { id: 'slow', title: 'Yavaş ve ağır çalışıyor', description: 'Sayfa geçişleri çok uzun sürüyor' },
                { id: 'bad-mobile', title: 'Mobil uygulaması yetersiz', description: 'Telefonda kullanmak imkansız' },
                { id: 'no-turkish', title: 'Türkçe dil desteği yok/kötü', description: 'Menüler ve açıklamalar İngilizce' },
                { id: 'expensive', title: 'Fiyatı çok yüksek', description: 'Temel özellikler bile paralı' },
                { id: 'poor-integrations', title: 'Entegrasyonlar yetersiz', description: 'Kullandığım araçlarla bağlanmıyor' },
                { id: 'no-customization', title: 'Özelleştirme seçenekleri az', description: 'İstediğim gibi düzenleyemiyorum' },
                { id: 'no-offline', title: 'Offline çalışmıyor', description: 'İnternet olmadan hiç kullanılmıyor' },
                { id: 'noisy-notifications', title: 'Bildirimler bunaltıcı', description: 'Çok fazla gereksiz uyarı geliyor' },
                { id: 'ugly-ui', title: 'Arayüz eski/çirkin', description: 'Görsel olarak itici' },
                { id: 'bad-export', title: 'Veri export/import zor', description: 'Bilgilerimi dışarı alamıyorum' },
                { id: 'bad-support', title: 'Müşteri desteği kötü', description: 'Yardım istediğimde cevap alamıyorum' },
                { id: 'security-concerns', title: 'Güvenlik/gizlilik endişeleri', description: 'Verilerimin ne olduğunu bilmiyorum' },
                { id: 'none-complaints', title: 'Hiçbiri', description: 'Halimden çok memnunum' },
                { id: 'other-complaint', title: 'Diğer', description: '', isOther: true }
            ]
        },
        {
            id: 'switch-barriers',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Yeni bir görev yönetimi aracına geçmeyi zorlaştıran faktörler neler?',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'data-migration', title: 'Mevcut verilerimi taşımak zor', description: 'Yılların birikimi kaybolabilir' },
                { id: 'learning-curve', title: 'Yeni aracı öğrenmek vakit alır', description: 'Öğrenme eğrisi yüksek' },
                { id: 'team-convincing', title: 'Ekibi ikna etmek zor', description: 'Herkes alıştığını kullanmak istiyor' },
                { id: 'company-decides', title: 'Şirket/yönetici karar veriyor', description: 'Ben seçmiyorum' },
                { id: 'choice-fatigue', title: 'Doğru aracı bulmak yorucu', description: 'Çok fazla seçenek var' },
                { id: 'good-enough', title: 'Mevcut aracım "yeterince iyi"', description: 'Mükemmel değil ama idare ediyor' },
                { id: 'cost', title: 'Ücretli olması', description: 'Bütçem kısıtlı' },
                { id: 'integration-break', title: 'Entegrasyonlarım bozulur', description: 'Diğer araçlarla bağlantı kopar' },
                { id: 'trial-short', title: 'Deneme süresi yetmiyor', description: 'Karar vermeden süre doluyor' },
                { id: 'no-barrier', title: 'Bu konuda engel hissetmiyorum', description: 'İstesem kolayca değiştirebilirim' }
            ]
        }
    ],

    featurePreferences: [
        {
            id: 'feature-priorities',
            type: 'multi-select',
            maxSelect: 3,
            question: 'Aşağıdaki özelliklerden sizin için en önemli 3 tanesini seçin.',
            subtext: '(En fazla 3 seçim yapabilirsiniz)',
            options: [
                { id: 'simple-ui', title: 'Basit ve sezgisel arayüz', description: 'Öğrenmesi ve kullanması kolay' },
                { id: 'turkish', title: 'Türkçe dil desteği', description: 'Tüm menüler ve yardım Türkçe' },
                { id: 'mobile-app', title: 'Mobil uygulama', description: 'iPhone ve Android uygulaması' },
                { id: 'offline', title: 'Offline çalışabilme', description: 'İnternet olmadan da kullanım' },
                { id: 'collaboration', title: 'Ekip işbirliği araçları', description: 'Birlikte çalışma özellikleri' },
                { id: 'calendar', title: 'Takvim entegrasyonu', description: 'Google/Outlook takvim bağlantısı' },
                { id: 'time-tracking', title: 'Zaman takibi', description: 'İşlere harcanan süreyi ölçme' },
                { id: 'ai-suggestions', title: 'AI destekli öneriler', description: 'Yapay zeka ile akıllı öneriler' },
                { id: 'reporting', title: 'Detaylı raporlama', description: 'Grafikler ve analizler' },
                { id: 'custom-workflows', title: 'Özelleştirilebilir iş akışları', description: 'Kendi süreçlerimi kurabilme' },
                { id: 'file-sharing', title: 'Dosya paylaşımı', description: 'Dokümanları göreve ekleme' },
                { id: 'notification-mgmt', title: 'Bildirim yönetimi', description: 'Hangi uyarıları alacağımı seçme' },
                { id: 'recurring-tasks', title: 'Tekrarlayan görev otomasyonu', description: 'Rutin işlerin otomatik oluşması' },
                { id: 'integrations', title: 'Diğer araçlarla entegrasyon', description: 'Slack, Github vb. ile bağlantı' }
            ]
        },
        {
            id: 'usp-motivation',
            type: 'single-select',
            question: 'Aşağıdaki özelliklerden hangisi sizi yeni bir araca geçmeye en çok motive eder?',
            options: [
                { id: 'simplicity', title: 'Gerçekten basit, 5 dakikada öğrenilebilen bir arayüz', description: '5 dakikada öğrenebileceğim' },
                { id: 'turkish-support', title: 'Tam Türkçe destek ve yerel müşteri hizmeti', description: 'Yerel müşteri hizmeti dahil' },
                { id: 'ai-priority', title: 'Yapay zeka ile otomatik görev önceliklendirme', description: 'AI neyi önce yapmam gerektiğini söylesin' },
                { id: 'integrations', title: 'Tüm popüler araçlarla tek tıkla entegrasyon', description: 'Tüm araçlarımla anında bağlansın' },
                { id: 'fair-pricing', title: 'Şeffaf ve uygun fiyatlandırma', description: 'Gizli maliyet olmadan uygun fiyat' },
                { id: 'offline-sync', title: 'Offline çalışma ve hızlı senkronizasyon', description: 'İnternetsiz çalışıp sonra senkronize etsin' }
            ]
        }
    ]
};

// Survey State
let surveyState = {
    currentStepIndex: 0,
    answers: {},
    otherTexts: {},
    isComplete: false,
    direction: 'forward'
};

// Webhook Configuration
// n8n webhook URL'inizi buraya ekleyin
const SURVEY_WEBHOOK_URL = 'https://n8n.carettask.com/webhook/carettask-survey';

// Normalize answers to unified column names
function normalizeAnswers(answers, otherTexts) {
    return {
        work_status: answers['work-status'] || [],
        sector: answers['sector'] || [],
        team_size: answers['team-size'] || '',
        role: answers['role'] || '',
        task_tracking: answers['task-tracking'] || '',
        // User path
        tools_used: answers['tools-used'] || [],
        liked_features: answers['liked-features'] || [],
        satisfaction: answers['satisfaction'] || '',
        // Non-user path
        non_use_reasons: answers['non-use-reasons'] || [],
        pain_experiences: answers['pain-experiences'] || [],
        // Common
        biggest_challenges: answers['biggest-challenges'] || [],
        tool_complaints: answers['tool-complaints'] || [],
        switch_barriers: answers['switch-barriers'] || [],
        feature_priorities: answers['feature-priorities'] || [],
        usp_motivation: answers['usp-motivation'] || '',
        email: answers['email'] || 'skipped',
        feedback: answers['feedback'] || '',
        other_texts: otherTexts || {}
    };
}

// Submit survey data to webhook
async function submitSurveyToWebhook() {
    // Normalize answers to unified column names
    const normalizedAnswers = normalizeAnswers(surveyState.answers, surveyState.otherTexts);

    const surveyData = {
        ...normalizedAnswers,
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

// Get user path (user or non-user of digital tools)
function getUserPath() {
    const tracking = surveyState.answers['task-tracking'];
    if (!tracking) return null;
    return (tracking === 'digital' || tracking === 'both') ? 'user' : 'non-user';
}

// Build steps based on answers
function buildSteps() {
    const steps = [];

    // Intro
    steps.push({ id: 'intro', type: 'intro' });

    // Demographics (4 questions)
    steps.push(...surveyConfig.demographics);

    // Filter question (branching point)
    steps.push(surveyConfig.filterQuestion);

    const path = getUserPath();

    if (path === 'user') {
        steps.push(...surveyConfig.userPath);
    } else if (path === 'non-user') {
        steps.push(...surveyConfig.nonUserPath);
    }

    // Common pain points and feature preferences (after branching)
    if (path) {
        steps.push(...surveyConfig.painPoints);
        steps.push(...surveyConfig.featurePreferences);
    }

    // Email, Feedback and Success
    steps.push({ id: 'email', type: 'email' });
    steps.push({ id: 'feedback', type: 'feedback' });
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

    if (currentStep.id === 'intro' || currentStep.id === 'email' || currentStep.id === 'feedback' || currentStep.id === 'success') {
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
        case 'email':
            contentHTML += renderEmailScreen();
            break;
        case 'feedback':
            contentHTML += renderFeedbackScreen();
            break;
        case 'success':
            contentHTML += renderSuccessScreen();
            break;
    }

    contentHTML += '</div>';

    // Navigation (not for intro and success)
    if (currentStep.id !== 'intro' && currentStep.id !== 'success' && currentStep.id !== 'feedback') {
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
    const maxSelect = step.maxSelect || null;
    const maxText = maxSelect ? `/${maxSelect}` : '';

    return `
        <div class="survey-screen question-screen">
            <h2>${step.question}</h2>
            <p class="survey-subtext">${step.subtext || '(Birden fazla seçebilirsin)'}</p>
            <div class="survey-options">
                ${step.options.map(option => {
                    const isSelected = selectedValues.includes(option.id);
                    const isOther = option.isOther || false;
                    const otherText = surveyState.otherTexts[option.id] || '';

                    return `
                    <div class="survey-option-wrapper">
                        <button class="survey-option ${isSelected ? 'selected' : ''} ${isOther && isSelected ? 'survey-option-other-active' : ''}"
                                onclick="toggleMultiOption('${step.id}', '${option.id}', ${maxSelect || 'null'}, ${isOther})">
                            <div class="option-checkbox ${isSelected ? 'checked' : ''}">
                                ${isSelected ? `
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                ` : ''}
                            </div>
                            <div class="option-content">
                                ${isOther && isSelected ? `
                                    <input type="text" class="survey-other-input" placeholder="${option.title}: Lütfen belirtiniz..."
                                           value="${otherText}"
                                           oninput="updateOtherText('${option.id}', this.value)"
                                           onclick="event.stopPropagation()">
                                ` : `
                                    <div class="option-title">${option.title}</div>
                                    ${option.description ? `<div class="option-description">${option.description}</div>` : ''}
                                `}
                            </div>
                        </button>
                    </div>
                    `;
                }).join('')}
            </div>
            ${selectedValues.length > 0 ? `<div class="survey-selection-count">${selectedValues.length}${maxText} seçildi</div>` : ''}
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

function renderFeedbackScreen() {
    const existingFeedback = surveyState.answers['feedback'] || '';
    return `
        <div class="survey-screen feedback-screen">
            <div class="survey-emoji">💬</div>
            <h2>Son bir şey!</h2>
            <p>Hayalinizdeki görev yönetimi uygulamasını tarif edebilir misiniz? Öneriniz varsa dinlemeyi çok isteriz!</p>
            <textarea id="surveyFeedback" class="survey-textarea" placeholder="Fikirlerinizi buraya yazabilirsiniz..." rows="4">${existingFeedback}</textarea>
            <button class="survey-email-submit" onclick="submitFeedback()">
                Gönder ve Bitir
            </button>
            <button class="survey-email-skip" onclick="skipFeedback()">
                Atla
            </button>
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

function toggleMultiOption(stepId, optionId, maxSelect, isOther) {
    const current = surveyState.answers[stepId] || [];

    if (current.includes(optionId)) {
        // Deselect
        surveyState.answers[stepId] = current.filter(id => id !== optionId);
        // Clear other text if deselecting an "other" option
        if (isOther) {
            delete surveyState.otherTexts[optionId];
        }
    } else {
        // Check max limit before adding
        if (maxSelect && current.length >= maxSelect) {
            showMaxWarning(maxSelect, optionId);
            return;
        }
        surveyState.answers[stepId] = [...current, optionId];
    }

    // For "other" options, re-render to show/hide text input
    if (isOther) {
        renderSurveyModal();
        // Focus the text input if it was just selected
        if (surveyState.answers[stepId].includes(optionId)) {
            setTimeout(() => {
                const input = document.querySelector('.survey-other-input');
                if (input) input.focus();
            }, 50);
        }
        return;
    }

    const selectedValues = surveyState.answers[stepId];

    // Update UI without full re-render
    document.querySelectorAll('.survey-option').forEach(option => {
        const onclickAttr = option.getAttribute('onclick') || '';
        const match = onclickAttr.match(/toggleMultiOption\('[^']+',\s*'([^']+)'/);
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
        const maxText = maxSelect ? `/${maxSelect}` : '';
        countDiv.textContent = `${selectedValues.length}${maxText} seçildi`;
        countDiv.style.display = selectedValues.length > 0 ? 'block' : 'none';
    }

    // Update navigation button state
    updateNavButtonState();
}

function updateOtherText(optionId, value) {
    surveyState.otherTexts[optionId] = value;
}

function showMaxWarning(maxSelect, optionId) {
    // Remove existing warning if any
    const existing = document.querySelector('.survey-max-warning');
    if (existing) existing.remove();

    const warning = document.createElement('div');
    warning.className = 'survey-max-warning';
    warning.textContent = `En fazla ${maxSelect} seçim yapabilirsiniz.`;

    // Find the clicked option's wrapper by matching the optionId in onclick
    const allOptions = document.querySelectorAll('.survey-option');
    let targetWrapper = null;
    allOptions.forEach(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        if (onclick.includes(`'${optionId}'`)) {
            targetWrapper = btn.closest('.survey-option-wrapper') || btn.parentNode;
        }
    });

    if (targetWrapper) {
        targetWrapper.appendChild(warning);
    }

    // Auto-remove after 2.5 seconds
    setTimeout(() => {
        if (warning.parentNode) warning.remove();
    }, 2500);
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
    surveyNext();
}

function skipEmail() {
    surveyState.answers['email'] = 'skipped';
    surveyNext();
}

function submitFeedback() {
    const textarea = document.getElementById('surveyFeedback');
    if (textarea && textarea.value.trim()) {
        surveyState.answers['feedback'] = textarea.value.trim();
    }
    surveyState.isComplete = true;
    submitSurveyToWebhook();
    surveyNext();
}

function skipFeedback() {
    surveyState.isComplete = true;
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
    document.querySelector('.kvkk-accept-btn').classList.add('disabled');
    document.body.style.overflow = '';
}

function toggleKVKKAcceptBtn() {
    const checkbox = document.getElementById('kvkkCheckbox');
    const acceptBtn = document.querySelector('.kvkk-accept-btn');

    if (checkbox.checked) {
        acceptBtn.classList.remove('disabled');
    } else {
        acceptBtn.classList.add('disabled');
    }
}

function acceptKVKK() {
    const checkbox = document.getElementById('kvkkCheckbox');
    const acceptBtn = document.querySelector('.kvkk-accept-btn');

    if (!checkbox.checked || acceptBtn.classList.contains('disabled')) {
        checkbox.classList.add('shake');
        setTimeout(() => {
            checkbox.classList.remove('shake');
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
        otherTexts: {},
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
