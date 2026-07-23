// Lucky Pawn Shop System - Core JS
// Language Translations
const TRANSLATIONS = {
    kh: {
        shopBrand: "សុខ ស៊ីណេត",
        appName: "ប្រព័ន្ធគ្រប់គ្រងហាងបញ្ចាំ",
        dashboard: "ផ្ទាំងគ្រប់គ្រង",
        newTicket: "សំបុត្របញ្ចាំថ្មី",
        activeTickets: "សំបុត្រសកម្ម",
        history: "ប្រវត្តិនៃការបញ្ចាំ",
        reports: "របាយការណ៍ហិរញ្ញវត្ថុ",
        settings: "ការកំណត់ & សមាជិក",
        language: "ភាសា",
        khmer: "ភាសាខ្មែរ",
        english: "English",
        admin: "អ្នកគ្រប់គ្រង (Admin)",
        cashier: "បុគ្គលិក (Cashier)",
        active: "សកម្ម",
        redeemed: "បានលោះវិញ",
        overdue: "ហួសកំណត់",
        forfeited: "ដាច់បញ្ចាំ",
        totalActiveLoans: "ទឹកប្រាក់កំពុងបញ្ចាំសរុប",
        totalInterestEstimated: "ការប្រាក់ត្រូវប្រមូល (ប៉ាន់ស្មាន)",
        activeTicketsCount: "សំបុត្រកំពុងសកម្ម",
        overdueTicketsCount: "សំបុត្រហួសកំណត់",
        monthlyRevenue: "ចំណូលការប្រាក់ខែនេះ",
        recentTickets: "សំបុត្របញ្ចាំថ្មីៗ",
        ticketId: "លេខកូដសំបុត្រ",
        customer: "អតិថិជន",
        customerId: "លេខសម្គាល់អតិថិជន",
        phone: "លេខទូរសព្ទ",
        itemType: "ប្រភេទទ្រព្យ",
        itemDescription: "អាសយដ្ឋាន (ភូមិ)",
        weight: "ទម្ងន់",
        purity: "ទឹកមាស/ផ្លាកទីន",
        loanAmount: "ទឹកប្រាក់ខ្ចី",
        partialRedeem: "លោះខ្លះ",
        borrowMore: "ខ្ចីប្រាក់បន្ថែម",
        interestRate: "ការប្រាក់/ថ្ងៃ (រៀល)",
        pawnDate: "ថ្ងៃបញ្ចាំ",
        dueDate: "ថ្ងៃកំណត់លោះ",
        status: "ស្ថានភាព",
        actions: "សកម្មភាព",
        gold: "មាស",
        platinum: "ផ្លាកទីន",
        whiteGold: "ផ្លាកទីនទឹក៧ (White Gold)",
        other: "ផ្សេងៗ",
        currency: "រូបិយប័ណ្ណ",
        notes: "គ្រឿងបញ្ចាំ៖",
        grams: "ក្រាម",
        damleung: "តម្លឹង",
        chi: "ជី",
        hun: "ហ៊ុន",
        ly: "លី",
        interestCalculation: "ការគិតការប្រាក់",
        calculator: "ម៉ាស៊ីនគិតលេខ",
        save: "រក្សាទុក",
        cancel: "បោះបង់",
        print: "ព្រីនវិក្កយបត្រ",
        redeem: "លោះទ្រព្យបញ្ចាំ",
        forfeit: "កាត់ដាច់ទ្រព្យបញ្ចាំ",
        delete: "លុបចោល",
        searchPlaceholder: "ស្វែងរកឈ្មោះ លេខទូរសព្ទ ឬលេខសំបុត្រ...",
        filterStatus: "ចម្រោះស្ថានភាព",
        all: "ទាំងអស់",
        dailyReport: "របាយការណ៍ប្រចាំថ្ងៃ",
        monthlyReport: "របាយការណ៍ប្រចាំខែ",
        date: "កាលបរិច្ឆេទ",
        totalCashOut: "ប្រាក់ចេញបញ្ចាំសរុប",
        totalCashIn: "ប្រាក់លោះចូលសរុប",
        totalInterestCollected: "ការប្រាក់ប្រមូលបានសរុប",
        userManagement: "គ្រប់គ្រងអ្នកប្រើប្រាស់",
        backupRestore: "រក្សាទុក និងស្ដារទិន្នន័យ",
        exportData: "នាំចេញទិន្នន័យ (Backup)",
        importData: "នាំចូលទិន្នន័យ (Restore)",
        currentRole: "តួនាទីបច្ចុប្បន្ន",
        switchUser: "ប្ដូរអ្នកប្រើប្រាស់",
        enterPin: "បញ្ចូលលេខកូដ PIN",
        wrongPin: "PIN មិនត្រឹមត្រូវទេ!",
        pinRequired: "សូមបញ្ចូល PIN ដើម្បីបន្ត",
        setupPinTitle: "កំណត់លេខកូដ PIN ដំបូង",
        adminPin: "លេខកូដ Admin PIN (៤ខ្ទង់)",
        cashierPin: "លេខកូដ Cashier PIN (៤ខ្ទង់)",
        setupBtn: "យល់ព្រមបន្ត",
        setupCredentialsTitle: "កំណត់គណនីប្រើប្រាស់ដំបូង",
        adminAccount: "គណនី Admin",
        cashierAccount: "គណនី Cashier",
        usernameLabel: "ឈ្មោះអ្នកប្រើប្រាស់ (Username)",
        passwordLabel: "លេខសម្ងាត់ (Password)",
        loginBtn: "ចូលប្រើប្រាស់",
        wrongCredentials: "ឈ្មោះអ្នកប្រើប្រាស់ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ!",
        lockScreen: "ចាក់សោអេក្រង់",
        details: "ព័ត៌មានលម្អិត",
        interestDue: "ការប្រាក់បង្គរ",
        totalToPay: "ប្រាក់សរុបត្រូវបង់",
        redeemedDate: "ថ្ងៃលោះវិញ",
        customWeightInput: "បញ្ចូលទម្ងន់បែបខ្មែរ (តម្លឹង ជី ហ៊ុន លី)",
        gramsInput: "ឬបញ្ចូលជា ក្រាម (g)",
        receiptTitle: "ព័ត៌មានអតិថិជន និងកម្ចី",
        receiptSubtitle: "LUCKY GOLD & PLATINUM PAWN SHOP",
        receiptTerms: "លក្ខខណ្ឌបញ្ចាំ៖\n១. ម្ចាស់ទ្រព្យត្រូវបង់ការប្រាក់រៀងរាល់ខែ។\n២. បើហួសកំណត់រយៈពេល ២ខែ មិនបានបង់ការប្រាក់ ឬលោះវិញនោះ ទ្រព្យបញ្ចាំនឹងត្រូវដាច់ជាកម្មសិទ្ធិរបស់ហាងដោយស្វ័យប្រវត្ត។\n៣. ហាងរក្សាសិទ្ធិរក្សាទុកទ្រព្យបញ្ចាំដោយសុវត្ថិភាពបំផុត។",
        customerSignature: "ហត្ថលេខាអតិថិជន",
        shopSignature: "ហត្ថលេខាហាងបញ្ចាំ",
        shopName: "សុខ ស៊ីណេត",
        shopAddress: "ផ្លូវកែងទៅច្រេស ភូមិព្រៃម្នាស់ ឃុំសំឡី ស្រុកកំពង់រោទិ៍ ខេត្តស្វាយរៀង",
        shopPhone: "097 500 3990 / 016404504",
        confirmDelete: "តើអ្នកពិតជាចង់លុបសំបុត្របញ្ចាំនេះមែនទេ? ទិន្នន័យនឹងត្រូវបាត់បង់!",
        confirmForfeit: "តើអ្នកពិតជាចង់កាត់ដាច់ទ្រព្យបញ្ចាំនេះមែនទេ?",
        interestPaid: "ការប្រាក់បង់ជាក់ស្តែង",
        principalPaid: "ប្រាក់ដើមត្រូវបង់",
        successRedeem: "ការលោះបានសម្រេច!",
        successForfeit: "បានកាត់ដាច់ទ្រព្យបញ្ចាំរួចរាល់!",
        successSave: "បានរក្សាទុករួចរាល់!",
        successDelete: "បានលុបសំបុត្របញ្ចាំរួចរាល់!",
        unauthorized: "សកម្មភាពនេះតម្រូវឱ្យមានសិទ្ធិជា Admin!",
        securityNotice: "ទិន្នន័យត្រូវបានរក្សាទុកក្នុងកុំព្យូទ័រ/ទូរសព្ទរបស់អ្នកប៉ុណ្ណោះ。 សូមនាំចេញទិន្នន័យទុកជាប្រចាំ ដើម្បីបង្ការការបាត់បង់。",
        themeSettings: "ប្តូរពណ៌ផ្ទៃប្រព័ន្ធ",
        themeDesc: "ជ្រើសរើសប្រធានបទពណ៌ដែលអ្នកពេញចិត្តសម្រាប់ផ្ទៃប្រព័ន្ធទាំងមូល。",
        themeGold: "Classic Gold",
        themeGreen: "Emerald Green",
        themeBlue: "Sapphire Blue",
        themePurple: "Amethyst Purple",
        themeRuby: "Ruby Pink",
        themeLight: "Classic Light",
        chartLent: "ប្រាក់បញ្ចាំចេញ",
        chartCollected: "ការប្រាក់ប្រមូលបាន",
        totalPrincipal: "ប្រាក់ដើមសរុប",
        purityOptions: [
            "ចិញ្ចៀនលាត VN",
            "គ្រឿង VN",
            "ចិញ្ចៀនលាតខ្មែរ",
            "មាសគីឡូគ្រឿង",
            "ទឹក7(VN610)",
            "ទឹក7(VN600)",
            "ទឹក7(VN590)",
            "ផ្លាកទីខ្មែរ",
            "ផ្សេងៗ"
        ],
        villages: [
            "ព្រៃម្នាស់", "ដូនណូយ", "ស្វាយ", "សំឡី", "ត្រោក", "ត្នោត", "ពោធិ៍ម្អម", "ព្រៃរបឺស", "ចន្ទ្រា", "ច្រេស", "តាប៉ោ", "ខ្សែត្រ", "ផ្សេងៗ"
        ],
        notesOptions: ["ខ្សែក", "ខ្សែដៃ", "ចិញ្ចៀន", "ក្រវិល", "កងដៃ", "ផ្សេងៗ"],
        cloudSyncSettings: "ការកំណត់ការភ្ជាប់ទៅ Cloud",
        cloudSyncDesc: "ភ្ជាប់ប្រព័ន្ធទៅកាន់ Firebase Realtime Database ដើម្បីធ្វើសមកាលកម្ម (Sync) ទិន្នន័យរវាងឧបករណ៍ច្រើនក្នុងពេលតែមួយ។",
        syncMode: "របៀបដំណើរការប្រព័ន្ធ",
        localMode: "រក្សាទុកក្នុងម៉ាស៊ីន (Local Storage Only)",
        firebaseMode: "សមកាលកម្មលើ Cloud (Firebase Realtime DB)",
        apiKey: "Firebase API Key",
        authDomain: "Firebase Auth Domain",
        databaseURL: "Firebase Database URL (សំខាន់)",
        projectId: "Firebase Project ID",
        storageBucket: "Firebase Storage Bucket",
        messagingSenderId: "Messaging Sender ID",
        appId: "Firebase App ID",
        shopNamespace: "លេខសម្គាល់ហាង / Namespace",
        saveSyncSettings: "រក្សាទុកការកំណត់ Sync",
        syncStatusLocal: "ដំណើរការក្នុងម៉ាស៊ីន",
        syncStatusConnecting: "កំពុងភ្ជាប់...",
        syncStatusOnline: "អនឡាញ (សមកាលកម្ម)",
        syncStatusOffline: "Offline (គ្មានអ៊ីនធឺណិត)",
        successSyncSaved: "បានរក្សាទុកការកំណត់ Sync និងកំពុងចាប់ផ្តើមភ្ជាប់!",
        errorSyncFailed: "ការភ្ជាប់ទៅកាន់ Firebase មានបញ្ហា! សូមពិនិត្យការកំណត់ និងអ៊ីនធឺណិតឡើងវិញ។"
    },
    en: {
        shopBrand: "SOK SINETH",
        appName: "Pawn Shop Management System",
        dashboard: "Dashboard",
        newTicket: "New Pawn Ticket",
        activeTickets: "Active Tickets",
        history: "Pawn History",
        reports: "Financial Reports",
        settings: "Settings & Members",
        language: "Language",
        khmer: "ភាសាខ្មែរ",
        english: "English",
        admin: "Manager (Admin)",
        cashier: "Staff (Cashier)",
        active: "Active",
        redeemed: "Redeemed",
        overdue: "Overdue",
        forfeited: "Forfeited",
        totalActiveLoans: "Total Active Loans",
        totalInterestEstimated: "Accrued Interest (Est.)",
        activeTicketsCount: "Active Tickets",
        overdueTicketsCount: "Overdue Tickets",
        monthlyRevenue: "This Month's Revenue",
        recentTickets: "Recent Tickets",
        ticketId: "Ticket ID",
        customer: "Customer",
        customerId: "Customer ID",
        phone: "Phone Number",
        itemType: "Item Type",
        itemDescription: "Address (Village)",
        weight: "Weight",
        purity: "Purity/Carat",
        loanAmount: "Loan Amount",
        partialRedeem: "Partial Redeem",
        borrowMore: "Borrow More",
        interestRate: "Interest/Day (KHR)",
        pawnDate: "Pawn Date",
        dueDate: "Due Date",
        status: "Status",
        actions: "Actions",
        gold: "Gold",
        platinum: "Platinum",
        whiteGold: "White Gold",
        other: "Other",
        currency: "Currency",
        notes: "Pawned Item:",
        grams: "Grams",
        damleung: "Damleung",
        chi: "Chi",
        hun: "Hun",
        ly: "Ly",
        interestCalculation: "Interest Calculation",
        calculator: "Calculator",
        save: "Save Ticket",
        cancel: "Cancel",
        print: "Print Receipt",
        redeem: "Redeem Item",
        forfeit: "Forfeit Item",
        delete: "Delete",
        searchPlaceholder: "Search by name, phone, ticket ID...",
        filterStatus: "Filter Status",
        all: "All Statuses",
        dailyReport: "Daily Report",
        monthlyReport: "Monthly Report",
        date: "Date",
        totalCashOut: "Total Lent Out",
        totalCashIn: "Total Redeemed Principal",
        totalInterestCollected: "Total Interest Income",
        userManagement: "User Management",
        backupRestore: "Backup & Restore Data",
        exportData: "Export Data (Backup)",
        importData: "Import Data (Restore)",
        currentRole: "Current Role",
        switchUser: "Switch User",
        enterPin: "Enter PIN Code",
        wrongPin: "Incorrect PIN!",
        pinRequired: "PIN verification required",
        setupPinTitle: "Initialize PIN Codes",
        adminPin: "Admin PIN Code (4 digits)",
        cashierPin: "Cashier PIN Code (4 digits)",
        setupBtn: "Save & Setup",
        setupCredentialsTitle: "Initial Account Setup",
        adminAccount: "Admin Account",
        cashierAccount: "Cashier Account",
        usernameLabel: "Username",
        passwordLabel: "Password",
        loginBtn: "Log In",
        wrongCredentials: "Invalid username or password!",
        lockScreen: "Lock Screen",
        details: "Details",
        interestDue: "Interest Due",
        totalToPay: "Total to Pay",
        redeemedDate: "Redeemed Date",
        customWeightInput: "Cambodian Weight (Damleung, Chi, Hun, Ly)",
        gramsInput: "Or input in Grams (g)",
        receiptTitle: "Customer & Loan Info",
        receiptSubtitle: "LUCKY GOLD & PLATINUM PAWN SHOP",
        receiptTerms: "Pawn Conditions:\n1. The owner must pay interest monthly.\n2. If expired for 2 months without interest payment or redemption, the collateral will automatically be forfeited to the shop.\n3. The shop guarantees secure storage of collateral.",
        customerSignature: "Customer's Signature",
        shopSignature: "Authorized Signature",
        shopName: "SOK SINETH",
        shopAddress: "Corner to Chres, Prey Mnoas Village, Samlei Commune, Kampong Rou District, Svay Rieng Province",
        shopPhone: "097 500 3990 / 016404504",
        confirmDelete: "Are you sure you want to delete this ticket? This action cannot be undone!",
        confirmForfeit: "Are you sure you want to forfeit this item?",
        interestPaid: "Interest Paid",
        principalPaid: "Principal Paid",
        successRedeem: "Item redeemed successfully!",
        successForfeit: "Item forfeited successfully!",
        successSave: "Ticket saved successfully!",
        successDelete: "Ticket deleted successfully!",
        unauthorized: "This action is restricted to Admin role!",
        securityNotice: "All data is securely stored inside this browser. Please export data regularly to avoid data loss.",
        themeSettings: "System Theme Settings",
        themeDesc: "Choose your favorite theme color palette for the system interface.",
        themeGold: "Classic Gold",
        themeGreen: "Emerald Green",
        themeBlue: "Sapphire Blue",
        themePurple: "Amethyst Purple",
        themeRuby: "Ruby Pink",
        themeLight: "Classic Light",
        chartLent: "Cash Lent",
        chartCollected: "Interest Collected",
        totalPrincipal: "Total Principal",
        purityOptions: [
            "Plain Ring VN",
            "Jewelry VN",
            "Plain Ring Khmer",
            "Kilo Gold Jewelry",
            "Purity 7 (VN610)",
            "Purity 7 (VN600)",
            "Purity 7 (VN590)",
            "Platin Khmer",
            "Other"
        ],
        villages: [
            "Prey Mnoas", "Don Noy", "Svay", "Samlei", "Traok", "Tnaot", "Po M-orm", "Prey Robeus", "Chantrea", "Chres", "Ta Po", "Kse-tr", "Other"
        ],
        notesOptions: ["Necklace", "Bracelet", "Ring", "Earrings", "Bangle", "Other"],
        cloudSyncSettings: "Cloud Synchronization Settings",
        cloudSyncDesc: "Connect the system to Firebase Realtime Database to synchronize data across multiple devices in real-time.",
        syncMode: "System Mode",
        localMode: "Offline Mode (Local Storage Only)",
        firebaseMode: "Online Mode (Firebase Realtime DB Sync)",
        apiKey: "Firebase API Key",
        authDomain: "Firebase Auth Domain",
        databaseURL: "Firebase Database URL (Required)",
        projectId: "Firebase Project ID",
        storageBucket: "Firebase Storage Bucket",
        messagingSenderId: "Messaging Sender ID",
        appId: "Firebase App ID",
        shopNamespace: "Shop ID / Namespace",
        saveSyncSettings: "Save Sync Settings",
        syncStatusLocal: "Local Mode",
        syncStatusConnecting: "Connecting...",
        syncStatusOnline: "Online (Synced)",
        syncStatusOffline: "Offline (No Connection)",
        successSyncSaved: "Sync settings saved successfully! Initializing connection...",
        errorSyncFailed: "Failed to connect to Firebase! Please verify your configuration and internet connection."
    }
};

// Migration and credential loading
let savedCredentials = localStorage.getItem('pawn_credentials');
let userCredentials = null;
if (savedCredentials) {
    userCredentials = JSON.parse(savedCredentials);
} else {
    // Try migration from userPins
    let savedPins = localStorage.getItem('pawn_pins');
    if (savedPins) {
        let pins = JSON.parse(savedPins);
        userCredentials = {
            admin: { username: "admin", password: pins.admin },
            cashier: { username: "cashier", password: pins.cashier }
        };
        localStorage.setItem('pawn_credentials', JSON.stringify(userCredentials));
    }
}

// Application State
let state = {
    lang: localStorage.getItem('pawn_lang') || 'kh',
    theme: localStorage.getItem('pawn_theme') || 'gold',
    currentUser: sessionStorage.getItem('pawn_current_user') || null,
    currentRole: sessionStorage.getItem('pawn_current_role') || 'cashier',
    userCredentials: userCredentials,
    tickets: JSON.parse(localStorage.getItem('pawn_tickets')) || [],
    logs: JSON.parse(localStorage.getItem('pawn_logs')) || [],
    activeTab: 'dashboard',
    currentSearch: '',
    currentStatusFilter: 'all',
    reportYear: new Date().getFullYear(),
    reportMonth: new Date().getMonth() + 1,
    editingTicketId: null
};

// Firebase Real-time Sync state variables
let firebaseApp = null;
let firebaseDbRef = null;

const DEFAULT_FIREBASE_CONFIG = {
    enabled: true,
    shopNamespace: "sok_sineth",
    apiKey: "AIzaSyCSPSGktA36s0OXkGpQNDDIbT8-xgtYGC8",
    authDomain: "pawn-shop-24b7f.firebaseapp.com",
    databaseURL: "https://pawn-shop-24b7f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pawn-shop-24b7f",
    storageBucket: "pawn-shop-24b7f.firebasestorage.app",
    messagingSenderId: "480528920306",
    appId: "1:480528920306:web:12c6cc256a665d0fe1ea6b"
};

function getFirebaseConfig() {
    try {
        const saved = localStorage.getItem('pawn_firebase_config');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error("Error reading firebase config:", e);
    }
    return DEFAULT_FIREBASE_CONFIG;
}

function isFirebaseSyncEnabled() {
    try {
        const config = getFirebaseConfig();
        return config && config.enabled === true;
    } catch(e) {
        return false;
    }
}

function updateSyncStatusUI(status, text) {
    const indicator = document.getElementById('syncStatusIndicator');
    const statusText = document.getElementById('syncStatusText');
    if (!indicator || !statusText) return;

    indicator.className = 'sync-status-indicator ' + status;
    statusText.innerText = text || t('syncStatusLocal');
}

function pushStateToFirebase(type) {
    if (!isFirebaseSyncEnabled() || !firebaseDbRef) return;
    try {
        if (type === 'tickets') {
            firebaseDbRef.child('tickets').set(state.tickets);
        } else if (type === 'logs') {
            firebaseDbRef.child('logs').set(state.logs);
        } else if (type === 'credentials') {
            firebaseDbRef.child('credentials').set(state.userCredentials);
        }
    } catch (err) {
        console.error("Failed to push data to Firebase:", err);
    }
}

// Global hook functions to wrap saving
function saveTicketsState() {
    localStorage.setItem('pawn_tickets', JSON.stringify(state.tickets));
    pushStateToFirebase('tickets');
}

function saveLogsState() {
    localStorage.setItem('pawn_logs', JSON.stringify(state.logs));
    pushStateToFirebase('logs');
}

function saveCredentialsState() {
    localStorage.setItem('pawn_credentials', JSON.stringify(state.userCredentials));
    pushStateToFirebase('credentials');
}

function initFirebaseSync() {
    if (firebaseDbRef) {
        // Disconnect existing listeners first
        try {
            firebaseDbRef.off();
        } catch(e) {}
        firebaseDbRef = null;
    }

    if (!isFirebaseSyncEnabled()) {
        updateSyncStatusUI('local-mode', t('syncStatusLocal'));
        toggleSyncFields();
        return;
    }

    try {
        const config = getFirebaseConfig();
        if (!config || !config.databaseURL) {
            updateSyncStatusUI('local-mode', t('syncStatusLocal'));
            return;
        }

        updateSyncStatusUI('connecting', t('syncStatusConnecting'));

        const firebaseConfig = {
            apiKey: config.apiKey,
            authDomain: config.authDomain,
            databaseURL: config.databaseURL,
            projectId: config.projectId,
            storageBucket: config.storageBucket,
            messagingSenderId: config.messagingSenderId,
            appId: config.appId
        };

        // Initialize or reuse Firebase App instance
        if (window.firebase && firebase.apps.length === 0) {
            firebaseApp = firebase.initializeApp(firebaseConfig);
        } else if (window.firebase) {
            firebaseApp = firebase.app();
        } else {
            throw new Error("Firebase SDK not loaded");
        }

        const shopId = config.shopNamespace || 'sok_sineth';
        firebaseDbRef = firebase.database().ref('pawn_shop/' + shopId);

        // Fetch data once to resolve conflicts
        firebaseDbRef.once('value').then(snapshot => {
            const cloudData = snapshot.val();
            if (!cloudData || (!cloudData.tickets && !cloudData.credentials)) {
                // Cloud is empty. Push local data to Cloud.
                firebaseDbRef.set({
                    tickets: state.tickets,
                    logs: state.logs,
                    credentials: state.userCredentials
                }).then(() => {
                    startFirebaseListeners(firebaseDbRef);
                });
            } else {
                // Cloud has data. Overwrite local storage.
                if (cloudData.tickets) {
                    state.tickets = cloudData.tickets;
                    localStorage.setItem('pawn_tickets', JSON.stringify(state.tickets));
                }
                if (cloudData.logs) {
                    state.logs = cloudData.logs;
                    localStorage.setItem('pawn_logs', JSON.stringify(state.logs));
                }
                if (cloudData.credentials) {
                    state.userCredentials = cloudData.credentials;
                    localStorage.setItem('pawn_credentials', JSON.stringify(state.userCredentials));
                }
                
                // Re-render UI
                translateUI();
                startFirebaseListeners(firebaseDbRef);
            }
        }).catch(err => {
            console.error("Firebase sync fetch error:", err);
            updateSyncStatusUI('error-mode', t('syncStatusOffline'));
        });

    } catch (err) {
        console.error("Firebase initialization failed:", err);
        updateSyncStatusUI('error-mode', t('syncStatusOffline'));
    }
}

function startFirebaseListeners(ref) {
    updateSyncStatusUI('online', t('syncStatusOnline'));

    // Realtime listeners for tickets
    ref.child('tickets').on('value', snapshot => {
        const val = snapshot.val() || [];
        if (JSON.stringify(val) !== JSON.stringify(state.tickets)) {
            state.tickets = val;
            localStorage.setItem('pawn_tickets', JSON.stringify(state.tickets));
            renderDashboard();
            renderActiveTickets();
            renderHistory();
            renderReports();
        }
    }, err => {
        console.error("Tickets listener error:", err);
        updateSyncStatusUI('error-mode', t('syncStatusOffline'));
    });

    // Realtime listeners for logs
    ref.child('logs').on('value', snapshot => {
        const val = snapshot.val() || [];
        if (JSON.stringify(val) !== JSON.stringify(state.logs)) {
            state.logs = val;
            localStorage.setItem('pawn_logs', JSON.stringify(state.logs));
            renderSettings();
        }
    });

    // Realtime listeners for credentials
    ref.child('credentials').on('value', snapshot => {
        const val = snapshot.val();
        if (val && JSON.stringify(val) !== JSON.stringify(state.userCredentials)) {
            state.userCredentials = val;
            localStorage.setItem('pawn_credentials', JSON.stringify(state.userCredentials));
        }
    });
}

function saveSyncSettings(e) {
    if (e) e.preventDefault();
    
    const mode = document.getElementById('syncModeSelect').value;
    const shopNamespace = document.getElementById('syncShopNamespace').value.trim();
    const apiKey = document.getElementById('syncApiKey').value.trim();
    const authDomain = document.getElementById('syncAuthDomain').value.trim();
    const databaseURL = document.getElementById('syncDatabaseURL').value.trim();
    const projectId = document.getElementById('syncProjectId').value.trim();
    const storageBucket = document.getElementById('syncStorageBucket').value.trim();
    const messagingSenderId = document.getElementById('syncMessagingSenderId').value.trim();
    const appId = document.getElementById('syncAppId').value.trim();

    if (mode === 'firebase' && !databaseURL) {
        alert(state.lang === 'kh' ? "សូមបំពេញ Database URL!" : "Please fill in Database URL!");
        return;
    }

    const config = {
        enabled: (mode === 'firebase'),
        shopNamespace,
        apiKey,
        authDomain,
        databaseURL,
        projectId,
        storageBucket,
        messagingSenderId,
        appId
    };

    localStorage.setItem('pawn_firebase_config', JSON.stringify(config));
    
    alert(t('successSyncSaved'));
    initFirebaseSync();
}

function toggleSyncFields() {
    const modeSelect = document.getElementById('syncModeSelect');
    if (!modeSelect) return;
    const mode = modeSelect.value;
    const fbFields = document.querySelectorAll('.fb-field');
    fbFields.forEach(el => {
        if (mode === 'local') {
            el.style.display = 'none';
        } else {
            // Restore proper flex/block display
            if (el.tagName === 'DIV' && el.classList.contains('sync-form-group')) {
                el.style.display = 'flex';
            } else if (el.classList.contains('details-alert')) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'block';
            }
        }
    });
}

function renderSettingsSyncFields() {
    try {
        const config = getFirebaseConfig();
        if (config) {
            document.getElementById('syncModeSelect').value = config.enabled ? 'firebase' : 'local';
            document.getElementById('syncShopNamespace').value = config.shopNamespace || 'sok_sineth';
            document.getElementById('syncApiKey').value = config.apiKey || '';
            document.getElementById('syncAuthDomain').value = config.authDomain || '';
            document.getElementById('syncDatabaseURL').value = config.databaseURL || '';
            document.getElementById('syncProjectId').value = config.projectId || '';
            document.getElementById('syncStorageBucket').value = config.storageBucket || '';
            document.getElementById('syncMessagingSenderId').value = config.messagingSenderId || '';
            document.getElementById('syncAppId').value = config.appId || '';
        }
    } catch (e) {}
    toggleSyncFields();
}

// Color Themes Configuration
const THEMES = {
    gold: {
        '--bg-main': '#0b0d13',
        '--bg-card': '#141722',
        '--bg-sidebar': '#10121b',
        '--gold': '#D4AF37',
        '--gold-hover': '#bda032',
        '--gold-light': 'rgba(212, 175, 55, 0.15)',
        '--gold-glow': 'rgba(212, 175, 55, 0.3)',
        '--border-gold': 'rgba(212, 175, 55, 0.25)',
        '--text-main': '#f3f4f6',
        '--text-muted': '#9ca3af',
        '--border-color': 'rgba(255, 255, 255, 0.08)'
    },
    green: {
        '--bg-main': '#070f0e',
        '--bg-card': '#0e1b19',
        '--bg-sidebar': '#0a1514',
        '--gold': '#10b981',
        '--gold-hover': '#059669',
        '--gold-light': 'rgba(16, 185, 129, 0.15)',
        '--gold-glow': 'rgba(16, 185, 129, 0.3)',
        '--border-gold': 'rgba(16, 185, 129, 0.25)',
        '--text-main': '#f0fdf4',
        '--text-muted': '#86efac',
        '--border-color': 'rgba(16, 185, 129, 0.1)'
    },
    blue: {
        '--bg-main': '#060b16',
        '--bg-card': '#0f172a',
        '--bg-sidebar': '#0b1120',
        '--gold': '#3b82f6',
        '--gold-hover': '#2563eb',
        '--gold-light': 'rgba(59, 130, 246, 0.15)',
        '--gold-glow': 'rgba(59, 130, 246, 0.3)',
        '--border-gold': 'rgba(59, 130, 246, 0.25)',
        '--text-main': '#f8fafc',
        '--text-muted': '#94a3b8',
        '--border-color': 'rgba(59, 130, 246, 0.1)'
    },
    purple: {
        '--bg-main': '#0c0616',
        '--bg-card': '#180e29',
        '--bg-sidebar': '#120920',
        '--gold': '#a855f7',
        '--gold-hover': '#9333ea',
        '--gold-light': 'rgba(168, 85, 247, 0.15)',
        '--gold-glow': 'rgba(168, 85, 247, 0.3)',
        '--border-gold': 'rgba(168, 85, 247, 0.25)',
        '--text-main': '#faf5ff',
        '--text-muted': '#d8b4fe',
        '--border-color': 'rgba(168, 85, 247, 0.1)'
    },
    ruby: {
        '--bg-main': '#0f050b',
        '--bg-card': '#1f0c19',
        '--bg-sidebar': '#170812',
        '--gold': '#ec4899',
        '--gold-hover': '#db2777',
        '--gold-light': 'rgba(236, 72, 153, 0.15)',
        '--gold-glow': 'rgba(236, 72, 153, 0.3)',
        '--border-gold': 'rgba(236, 72, 153, 0.25)',
        '--text-main': '#fdf2f8',
        '--text-muted': '#fbcfe8',
        '--border-color': 'rgba(236, 72, 153, 0.1)'
    },
    light: {
        '--bg-main': '#f3f4f6',
        '--bg-card': '#ffffff',
        '--bg-sidebar': '#e5e7eb',
        '--gold': '#bda032',
        '--gold-hover': '#9e8529',
        '--gold-light': 'rgba(189, 160, 50, 0.15)',
        '--gold-glow': 'rgba(189, 160, 50, 0.2)',
        '--border-gold': 'rgba(189, 160, 50, 0.3)',
        '--text-main': '#1f2937',
        '--text-muted': '#4b5563',
        '--border-color': 'rgba(0, 0, 0, 0.08)'
    }
};

function applyTheme(themeName) {
    const theme = THEMES[themeName] || THEMES.gold;
    const root = document.documentElement;
    Object.keys(theme).forEach(key => {
        root.style.setProperty(key, theme[key]);
    });
    state.theme = themeName;
    localStorage.setItem('pawn_theme', themeName);
    
    // Highlight the active theme selector item
    document.querySelectorAll('.theme-selector-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === themeName) {
            btn.classList.add('active');
        }
    });
}

// Traditional Cambodian Weight Conversions
const GRAMS_PER_CHI = 3.75;
const GRAMS_PER_DAMLEUNG = 37.5;
const GRAMS_PER_HUN = 0.375;
const GRAMS_PER_LY = 0.0375;

function khmerWeightToGrams(chi, hun, ly) {
    let c = parseFloat(chi) || 0;
    let h = parseFloat(hun) || 0;
    let l = parseFloat(ly) || 0;
    return (c * GRAMS_PER_CHI) + (h * GRAMS_PER_HUN) + (l * GRAMS_PER_LY);
}

function gramsToKhmerWeight(grams) {
    if (!grams || isNaN(grams)) return { chi: 0, hun: 0, ly: 0, text: '' };
    
    let totalLy = Math.round(grams / GRAMS_PER_LY);
    let ly = totalLy % 10;
    let totalHun = Math.floor(totalLy / 10);
    let hun = totalHun % 10;
    let chi = Math.floor(totalHun / 10);

    let parts = [];
    let isKh = state.lang === 'kh';
    
    if (chi > 0) parts.push(`${chi} ${isKh ? 'ជី' : 'Chi'}`);
    if (hun > 0) parts.push(`${hun} ${isKh ? 'ហ៊ុន' : 'Hun'}`);
    if (ly > 0) parts.push(`${ly} ${isKh ? 'លី' : 'Ly'}`);
    
    let text = parts.length > 0 ? parts.join(' ') : `0 ${isKh ? 'ជី' : 'Chi'}`;
    return { chi, hun, ly, text };
}

function formatCurrency(amount, currency) {
    if (amount === undefined || amount === null || isNaN(amount)) return '';
    let symbol = currency === 'KHR' ? '៛' : '$';
    if (currency === 'KHR') {
        return `${amount.toLocaleString()} ៛`;
    } else {
        return `$${amount.toLocaleString()}`;
    }
}

function formatSum(sumObj) {
    let parts = [];
    if (sumObj.USD > 0) parts.push(formatCurrency(sumObj.USD, 'USD'));
    if (sumObj.KHR > 0) parts.push(formatCurrency(sumObj.KHR, 'KHR'));
    return parts.length > 0 ? parts.join(' / ') : '$0';
}

function renderMultiCurrencyStat(containerId, sumObj, isInterest = false) {
    let container = document.getElementById(containerId);
    if (!container) return;
    
    container.style.fontSize = '1.05rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '4px';
    container.style.marginTop = '5px';
    
    container.innerHTML = '';
    
    if (isInterest) {
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(255,255,255,0.05); padding-bottom: 2px;">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">${state.lang === 'kh' ? 'ពីកម្ចី USD' : 'From USD'}</span>
                <span style="font-weight: 700; color: var(--text-main);">${formatCurrency(sumObj.USD || 0, 'KHR')}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 2px;">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">${state.lang === 'kh' ? 'ពីកម្ចី KHR' : 'From KHR'}</span>
                <span style="font-weight: 700; color: var(--text-main);">${formatCurrency(sumObj.KHR || 0, 'KHR')}</span>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(255,255,255,0.05); padding-bottom: 2px;">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">USD</span>
                <span style="font-weight: 700; color: var(--text-main);">${formatCurrency(sumObj.USD || 0, 'USD')}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 2px;">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">KHR</span>
                <span style="font-weight: 700; color: var(--text-main);">${formatCurrency(sumObj.KHR || 0, 'KHR')}</span>
            </div>
        `;
    }
}

// Interest calculations (daily rate in KHR flat)
function calculateInterest(loanAmount, dailyRateKHR, pawnDateStr, checkDateStr = new Date().toISOString().split('T')[0]) {
    let pDate = new Date(pawnDateStr);
    let cDate = new Date(checkDateStr);
    
    let diffTime = Math.max(0, cDate - pDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let interest = dailyRateKHR * diffDays;
    
    return {
        days: diffDays,
        interest: interest
    };
}

function getTicketInterest(ticket, checkDateStr = new Date().toISOString().split('T')[0]) {
    let totalInterest = 0;
    let primaryDays = 0;
    
    let additionalPrincipalSum = 0;
    if (ticket.additionalLoans) {
        additionalPrincipalSum = ticket.additionalLoans.reduce((sum, p) => sum + p.amount, 0);
    }
    let primaryAmount = Math.max(0, ticket.loanAmount - additionalPrincipalSum);
    
    let primaryCalc = calculateInterest(primaryAmount, ticket.interestRate, ticket.pawnDate, checkDateStr);
    totalInterest += primaryCalc.interest;
    primaryDays = primaryCalc.days;
    
    if (ticket.additionalLoans) {
        ticket.additionalLoans.forEach(p => {
            let pCalc = calculateInterest(p.amount, p.interestRate, p.pawnDate, checkDateStr);
            totalInterest += pCalc.interest;
        });
    }
    
    return {
        days: primaryDays,
        interest: totalInterest
    };
}

// Seed Mock Data if empty
function checkAndSeedData() {
    if (state.tickets.length === 0) {
        let today = new Date();
        
        let t1Date = new Date();
        t1Date.setDate(today.getDate() - 45); // 45 days ago
        let t1Due = new Date(t1Date);
        t1Due.setDate(t1Due.getDate() + 120); // 4-month due
        
        let t2Date = new Date();
        t2Date.setDate(today.getDate() - 15); // 15 days ago
        let t2Due = new Date(t2Date);
        t2Due.setDate(t2Due.getDate() + 120);

        let t3Date = new Date();
        t3Date.setDate(today.getDate() - 130); // 130 days ago (overdue)
        let t3Due = new Date(t3Date);
        t3Due.setDate(t3Due.getDate() + 120);

        state.tickets = [
            {
                id: "T-2026-0001",
                customerName: "សុខ ម៉ារី",
                customerPhone: "012 999 888",
                customerId: "SN-000001",
                itemType: "gold",
                itemDescription: "ព្រៃម្នាស់",
                weight: 18.75, // 5 Chi
                weightUnit: "khmer",
                purity: "ចិញ្ចៀនលាត VN",
                loanAmount: 850,
                currency: "USD",
                interestRate: 1000,
                pawnDate: t1Date.toISOString().split('T')[0],
                dueDate: t1Due.toISOString().split('T')[0],
                status: "active",
                createdBy: "admin",
                notes: "ចិញ្ចៀន"
            },
            {
                id: "T-2026-0002",
                customerName: "ចាន់ សុភ័ក្រ",
                customerPhone: "093 555 444",
                customerId: "SN-000002",
                itemType: "platinum",
                itemDescription: "ដូនណូយ",
                weight: 7.5, // 2 Chi
                weightUnit: "khmer",
                purity: "ផ្លាកទីខ្មែរ",
                loanAmount: 1200,
                currency: "USD",
                interestRate: 500,
                pawnDate: t2Date.toISOString().split('T')[0],
                dueDate: t2Due.toISOString().split('T')[0],
                status: "active",
                createdBy: "cashier",
                notes: "ផ្សេងៗ"
            },
            {
                id: "T-2026-0003",
                customerName: "គង់ វីរៈ",
                customerPhone: "077 111 222",
                customerId: "SN-000003",
                itemType: "gold",
                itemDescription: "ស្វាយ",
                weight: 37.5, // 1 Damleung
                weightUnit: "khmer",
                purity: "មាសគីឡូគ្រឿង",
                loanAmount: 7000000,
                currency: "KHR",
                interestRate: 2500,
                pawnDate: t3Date.toISOString().split('T')[0],
                dueDate: t3Due.toISOString().split('T')[0],
                status: "overdue",
                createdBy: "admin",
                notes: "ខ្សែក"
            }
        ];
        
        state.logs = [
            { timestamp: new Date(t1Date).toISOString(), action: "CREATE_TICKET", user: "admin", details: "Created ticket T-2026-0001 for សុខ ម៉ារី" },
            { timestamp: new Date(t2Date).toISOString(), action: "CREATE_TICKET", user: "cashier", details: "Created ticket T-2026-0002 for ចាន់ សុភ័ក្រ" },
            { timestamp: new Date(t3Date).toISOString(), action: "CREATE_TICKET", user: "admin", details: "Created ticket T-2026-0003 for គង់ វីរៈ" }
        ];

        localStorage.setItem('pawn_tickets', JSON.stringify(state.tickets));
        localStorage.setItem('pawn_logs', JSON.stringify(state.logs));
    }
}

// Write Audit Logs
function addLog(action, details) {
    state.logs.unshift({
        timestamp: new Date().toISOString(),
        action,
        user: state.currentRole,
        details
    });
    if (state.logs.length > 500) state.logs.pop();
    saveLogsState();
}

// Translator Helper
function t(key) {
    return TRANSLATIONS[state.lang][key] || key;
}

// Set up UI translations
function translateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        el.innerText = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        let key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', t(key));
    });

    document.getElementById('currentUserBadge').innerText = t(state.currentRole);
    
    renderDashboard();
    renderActiveTickets();
    renderHistory();
    renderReports();
    renderSettings();
    updatePurityOptions();
    updateVillageOptions();
    updateNotesOptions();
    if (document.getElementById('ticketCurrency')) handleCurrencyChange();
}

// Render Dashboard View
function renderDashboard() {
    let activeList = state.tickets.filter(t => t.status === 'active' || t.status === 'overdue');
    let today = new Date().toISOString().split('T')[0];
    
    let totalLent = { USD: 0, KHR: 0 };
    let totalEstInterest = { USD: 0, KHR: 0 };
    let overdueCount = 0;
    
    activeList.forEach(ticket => {
        let curr = ticket.currency || 'USD';
        totalLent[curr] += ticket.loanAmount;
        let cal = getTicketInterest(ticket, today);
        totalEstInterest[curr] += cal.interest;
        
        if (new Date(ticket.dueDate) < new Date(today)) {
            ticket.status = 'overdue';
            overdueCount++;
        }
    });

    let thisMonth = new Date().toISOString().substring(0, 7);
    let monthlyRev = { USD: 0, KHR: 0 };
    state.tickets.forEach(ticket => {
        let curr = ticket.currency || 'USD';
        if (ticket.status === 'redeemed' && ticket.redeemedDate && ticket.redeemedDate.startsWith(thisMonth)) {
            monthlyRev[curr] += (ticket.redeemedInterestPaid || 0);
        }
        if (ticket.partialPayments) {
            ticket.partialPayments.forEach(p => {
                if (p.date && p.date.startsWith(thisMonth)) {
                    monthlyRev[curr] += (p.interestPaid || 0);
                }
            });
        }
    });

    renderMultiCurrencyStat('dashTotalLent', totalLent, false);
    renderMultiCurrencyStat('dashTotalEstInterest', totalEstInterest, true);
    document.getElementById('dashActiveCount').innerText = activeList.length;
    document.getElementById('dashOverdueCount').innerText = overdueCount;
    renderMultiCurrencyStat('dashMonthlyRevenue', monthlyRev, true);

    // Render Recent Tickets
    let recentTicketsBody = document.getElementById('recentTicketsBody');
    recentTicketsBody.innerHTML = '';
    
    let sortedTickets = [...state.tickets].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 5);
    
    if (sortedTickets.length === 0) {
        recentTicketsBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 20px; color: var(--text-muted);">${state.lang === 'kh' ? 'គ្មានទិន្នន័យ' : 'No Data'}</td></tr>`;
        return;
    }
    
    sortedTickets.forEach(ticket => {
        let tr = document.createElement('tr');
        let statusClass = `status-badge status-${ticket.status}`;
        let weightTxt = ticket.weightUnit === 'khmer' ? gramsToKhmerWeight(ticket.weight).text : `${ticket.weight}g`;
        
        tr.innerHTML = `
            <td><strong>${ticket.id}</strong></td>
            <td>${ticket.customerName}</td>
            <td>${t(ticket.itemType)} (${ticket.purity})</td>
            <td>${weightTxt}</td>
            <td>${formatCurrency(ticket.loanAmount, ticket.currency)}</td>
            <td><span class="${statusClass}">${t(ticket.status)}</span></td>
            <td>
                <div class="action-buttons-cell">
                    <button class="btn btn-sm btn-gold" onclick="viewTicketReceipt('${ticket.id}')"><i class="fas fa-print"></i></button>
                    <button class="btn btn-sm btn-primary" onclick="openDetailsModal('${ticket.id}')"><i class="fas fa-eye"></i></button>
                </div>
            </td>
        `;
        recentTicketsBody.appendChild(tr);
    });

    renderStatsChart();
}

function renderStatsChart() {
    let container = document.getElementById('dashboardChartContainer');
    if (!container) return;

    let goldLent = 0;
    let platLent = 0;

    state.tickets.forEach(t => {
        if (t.status === 'active' || t.status === 'overdue') {
            let amountInUSD = t.currency === 'KHR' ? (t.loanAmount / 4100) : t.loanAmount;
            if (t.itemType === 'gold') goldLent += amountInUSD;
            else if (t.itemType === 'platinum') platLent += amountInUSD;
        }
    });

    let total = goldLent + platLent;
    if (total === 0) {
        container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">${state.lang === 'kh' ? 'មិនមានសំបុត្រសកម្មដើម្បីបង្ហាញក្រាហ្វិក' : 'No active tickets to visualize'}</div>`;
        return;
    }

    let gPercent = (goldLent / total) * 100;
    let pPercent = (platLent / total) * 100;

    let isKh = state.lang === 'kh';

    container.innerHTML = `
        <div class="chart-flex">
            <div class="chart-bars">
                <div class="chart-bar-item">
                    <div class="chart-bar-label"><span>${t('gold')}</span> <strong>$${goldLent.toLocaleString()} (${gPercent.toFixed(1)}%)</strong></div>
                    <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: ${gPercent}%; background: linear-gradient(90deg, #D4AF37, #FFDF73);"></div></div>
                </div>
                <div class="chart-bar-item">
                    <div class="chart-bar-label"><span>${t('platinum')}</span> <strong>$${platLent.toLocaleString()} (${pPercent.toFixed(1)}%)</strong></div>
                    <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: ${pPercent}%; background: linear-gradient(90deg, #E5E4E2, #FFFFFF);"></div></div>
                </div>
            </div>
            <div class="chart-donut-visual">
                <svg width="150" height="150" viewBox="0 0 42 42" class="donut-svg">
                    <circle class="donut-hole" cx="21" cy="21" r="15.915" fill="transparent"></circle>
                    <circle class="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="5.5"></circle>
                    
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#D4AF37" stroke-width="5.5" 
                            stroke-dasharray="${gPercent} ${100 - gPercent}" stroke-dashoffset="25"></circle>
                    
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#E5E4E2" stroke-width="5.5" 
                            stroke-dasharray="${pPercent} ${100 - pPercent}" stroke-dashoffset="${25 - gPercent}"></circle>
                </svg>
                <div class="donut-center-text">
                    <div class="donut-center-num">$${Math.round(total).toLocaleString()}</div>
                    <div class="donut-center-lbl">${isKh ? 'សកម្មសរុប (USD)' : 'Total Active (USD)'}</div>
                </div>
            </div>
        </div>
    `;
}

function updatePurityOptions() {
    let puritySelect = document.getElementById('ticketPurity');
    puritySelect.innerHTML = '';
    
    let options = TRANSLATIONS[state.lang].purityOptions;
    
    options.forEach(opt => {
        let o = document.createElement('option');
        o.value = opt;
        o.innerText = opt;
        puritySelect.appendChild(o);
    });
}

function updateVillageOptions() {
    let villageSelect = document.getElementById('ticketDescription');
    if (!villageSelect) return;
    
    let currentVal = villageSelect.value;
    villageSelect.innerHTML = '';
    
    let options = TRANSLATIONS[state.lang].villages;
    options.forEach(opt => {
        let o = document.createElement('option');
        o.value = opt;
        o.innerText = opt;
        villageSelect.appendChild(o);
    });
    
    if (currentVal) villageSelect.value = currentVal;
}

function updateNotesOptions() {
    let notesSelect = document.getElementById('ticketNotes');
    if (!notesSelect) return;
    
    let currentVal = notesSelect.value;
    notesSelect.innerHTML = '';
    
    let options = TRANSLATIONS[state.lang].notesOptions;
    options.forEach(opt => {
        let o = document.createElement('option');
        o.value = opt;
        o.innerText = opt;
        notesSelect.appendChild(o);
    });
    
    if (currentVal) notesSelect.value = currentVal;
}

function handleCurrencyChange() {
    let currSelect = document.getElementById('ticketCurrency');
    if (!currSelect) return;
    
    let curr = currSelect.value;
    let label = document.getElementById('lblLoanAmount');
    let input = document.getElementById('ticketLoanAmount');
    let isKh = state.lang === 'kh';
    
    if (curr === 'USD') {
        label.innerHTML = (isKh ? 'ទឹកប្រាក់ខ្ចី ($)' : 'Loan Amount ($)') + ' *';
        input.placeholder = '0.00';
    } else {
        label.innerHTML = (isKh ? 'ទឹកប្រាក់ខ្ចី (៛)' : 'Loan Amount (៛)') + ' *';
        input.placeholder = '0';
    }
}

function handleWeightInputs() {
    let gramsField = document.getElementById('ticketWeightGrams');
    let chi = parseFloat(document.getElementById('weightChi').value) || 0;
    let hun = parseFloat(document.getElementById('weightHun').value) || 0;
    let ly = parseFloat(document.getElementById('weightLy').value) || 0;
    
    let calcGrams = khmerWeightToGrams(chi, hun, ly);
    gramsField.value = calcGrams.toFixed(3);
}

function saveTicket(e) {
    e.preventDefault();
    
    let id = document.getElementById('ticketFormId').value;
    let customerName = document.getElementById('ticketCustomerName').value.trim();
    let customerPhone = document.getElementById('ticketCustomerPhone').value.trim();
    let customerId = document.getElementById('ticketCustomerId').value.trim();
    let itemType = document.getElementById('ticketItemType').value;
    let itemDescription = document.getElementById('ticketDescription').value.trim();
    let weight = parseFloat(document.getElementById('ticketWeightGrams').value) || 0;
    let weightUnit = 'khmer';
    let purity = document.getElementById('ticketPurity').value;
    let loanAmount = parseFloat(document.getElementById('ticketLoanAmount').value) || 0;
    let currency = document.getElementById('ticketCurrency').value;
    let interestRate = parseFloat(document.getElementById('ticketInterestRate').value) || 0;
    let pawnDate = document.getElementById('ticketPawnDate').value;
    let dueDate = document.getElementById('ticketDueDate').value;
    let notes = document.getElementById('ticketNotes').value.trim();
    
    if (!customerName || !loanAmount || !pawnDate || !dueDate || weight <= 0) {
        alert(state.lang === 'kh' ? 'សូមបំពេញព័ត៌មានចាំបាច់ឱ្យបានគ្រប់គ្រាន់!' : 'Please fill all required fields!');
        return;
    }
    
    let isNew = !id;
    if (isNew) {
        let year = new Date(pawnDate).getFullYear();
        let prefix = `T-${year}-`;
        let yearTickets = state.tickets.filter(t => t.id.startsWith(prefix));
        let nextNum = yearTickets.length + 1;
        id = `${prefix}${String(nextNum).padStart(4, '0')}`;
        
        let newTicket = {
            id,
            customerName,
            customerPhone,
            customerId,
            itemType,
            itemDescription,
            weight,
            weightUnit,
            purity,
            loanAmount,
            currency,
            interestRate,
            pawnDate,
            dueDate,
            status: 'active',
            createdBy: state.currentRole,
            notes
        };
        
        state.tickets.push(newTicket);
        addLog("CREATE_TICKET", `Created ticket ${id} for customer ${customerName}`);
    } else {
        let idx = state.tickets.findIndex(t => t.id === id);
        if (idx !== -1) {
            state.tickets[idx] = {
                ...state.tickets[idx],
                customerName,
                customerPhone,
                customerId,
                itemType,
                itemDescription,
                weight,
                weightUnit,
                purity,
                loanAmount,
                currency,
                interestRate,
                pawnDate,
                dueDate,
                notes
            };
            addLog("EDIT_TICKET", `Updated ticket ${id} details`);
        }
    }
    
    saveTicketsState();
    alert(t('successSave'));
    
    resetTicketForm();
    switchTab('activeTickets');
}

function resetTicketForm() {
    document.getElementById('ticketForm').reset();
    document.getElementById('ticketFormId').value = '';
    document.getElementById('ticketFormTitle').innerText = t('newTicket');
    
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('ticketPawnDate').value = today;
    
    let due = new Date();
    due.setMonth(due.getMonth() + 1);
    document.getElementById('ticketDueDate').value = due.toISOString().split('T')[0];
    
    handleWeightInputs();
    updatePurityOptions();
    updateVillageOptions();
    updateNotesOptions();
    if (document.getElementById('ticketCurrency')) {
        document.getElementById('ticketCurrency').value = 'USD';
        handleCurrencyChange();
    }
    document.getElementById('ticketInterestRate').value = 500;
    
    // Auto-generate customer ID sequentially
    let maxId = 0;
    state.tickets.forEach(t => {
        if (t.customerId) {
            let num = 0;
            if (t.customerId.toUpperCase().startsWith('SN-')) {
                num = parseInt(t.customerId.substring(3));
            } else if (t.customerId.toUpperCase().startsWith('C-')) {
                num = parseInt(t.customerId.substring(2));
            }
            if (!isNaN(num) && num > maxId) {
                maxId = num;
            }
        }
    });
    let generatedCustomerId = `SN-${String(maxId + 1).padStart(6, '0')}`;
    document.getElementById('ticketCustomerId').value = generatedCustomerId;
}

function switchTab(tabId) {
    state.activeTab = tabId;
    
    document.querySelectorAll('.sidebar-nav li').forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('onclick') && li.getAttribute('onclick').includes(tabId)) {
            li.classList.add('active');
        }
    });

    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    
    let target = document.getElementById(`${tabId}Section`);
    if (target) target.classList.add('active');
    
    if (tabId === 'dashboard') {
        renderDashboard();
    } else if (tabId === 'activeTickets') {
        renderActiveTickets();
    } else if (tabId === 'history') {
        renderHistory();
    } else if (tabId === 'reports') {
        renderReports();
    } else if (tabId === 'settings') {
        renderSettings();
    } else if (tabId === 'newTicket') {
        resetTicketForm();
    }
}

function renderActiveTickets() {
    let tbody = document.getElementById('activeTicketsBody');
    tbody.innerHTML = '';
    
    let list = state.tickets.filter(t => t.status === 'active' || t.status === 'overdue');
    
    if (state.currentSearch) {
        let q = state.currentSearch.toLowerCase();
        list = list.filter(t => 
            t.customerName.toLowerCase().includes(q) || 
            (t.customerPhone && t.customerPhone.includes(q)) || 
            t.id.toLowerCase().includes(q) ||
            (t.itemDescription && t.itemDescription.toLowerCase().includes(q))
        );
    }
    
    if (state.currentStatusFilter !== 'all') {
        list = list.filter(t => t.status === state.currentStatusFilter);
    }
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 30px; color: var(--text-muted);">${state.lang === 'kh' ? 'រកមិនឃើញសំបុត្របញ្ចាំទេ' : 'No tickets found'}</td></tr>`;
        return;
    }

    list.sort((a, b) => b.id.localeCompare(a.id)).forEach(ticket => {
        let tr = document.createElement('tr');
        let statusClass = `status-badge status-${ticket.status}`;
        let weightTxt = ticket.weightUnit === 'khmer' ? gramsToKhmerWeight(ticket.weight).text : `${ticket.weight}g`;
        
        tr.innerHTML = `
            <td><strong>${ticket.id}</strong></td>
            <td>
                <div class="cust-info">
                    <span class="cust-name">${ticket.customerName}</span>
                    <span class="cust-phone"><i class="fas fa-phone"></i> ${ticket.customerPhone || 'N/A'}</span>
                </div>
            </td>
            <td>${t(ticket.itemType)} (${ticket.purity})</td>
            <td>${weightTxt}</td>
            <td class="amount-cell">${formatCurrency(ticket.loanAmount, ticket.currency)}</td>
            <td>${formatCurrency(ticket.interestRate, 'KHR')}/${state.lang === 'kh' ? 'ថ្ងៃ' : 'day'}</td>
            <td><span class="${statusClass}">${t(ticket.status)}</span></td>
            <td>
                <div class="action-buttons-cell">
                    <button class="btn btn-sm btn-primary" onclick="openDetailsModal('${ticket.id}')"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-sm btn-success" onclick="openRedeemModal('${ticket.id}')"><i class="fas fa-hand-holding-usd"></i> ${t('redeem')}</button>
                    <button class="btn btn-sm btn-warning" onclick="openPartialRedeemModal('${ticket.id}')"><i class="fas fa-coins"></i> ${t('partialRedeem')}</button>
                    <button class="btn btn-sm btn-gold" onclick="viewTicketReceipt('${ticket.id}')"><i class="fas fa-print"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTicket('${ticket.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderHistory() {
    let tbody = document.getElementById('historyBody');
    tbody.innerHTML = '';
    
    let list = state.tickets.filter(t => t.status === 'redeemed' || t.status === 'forfeited');
    
    if (state.currentSearch) {
        let q = state.currentSearch.toLowerCase();
        list = list.filter(t => 
            t.customerName.toLowerCase().includes(q) || 
            (t.customerPhone && t.customerPhone.includes(q)) || 
            t.id.toLowerCase().includes(q)
        );
    }
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">${state.lang === 'kh' ? 'មិនទាន់មានប្រវត្តិលោះ ឬដាច់បញ្ចាំទេ' : 'No redemption history'}</td></tr>`;
        return;
    }

    list.sort((a, b) => b.id.localeCompare(a.id)).forEach(ticket => {
        let tr = document.createElement('tr');
        let statusClass = `status-badge status-${ticket.status}`;
        let weightTxt = ticket.weightUnit === 'khmer' ? gramsToKhmerWeight(ticket.weight).text : `${ticket.weight}g`;
        
        tr.innerHTML = `
            <td><strong>${ticket.id}</strong></td>
            <td>${ticket.customerName}</td>
            <td>${t(ticket.itemType)} (${ticket.purity})</td>
            <td>${weightTxt}</td>
            <td>${formatCurrency(ticket.loanAmount, ticket.currency)}</td>
            <td><span class="${statusClass}">${t(ticket.status)}</span></td>
            <td>
                <div class="action-buttons-cell">
                    <button class="btn btn-sm btn-primary" onclick="openDetailsModal('${ticket.id}')"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-sm btn-gold" onclick="viewTicketReceipt('${ticket.id}')"><i class="fas fa-print"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openDetailsModal(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let modal = document.getElementById('detailsModal');
    let content = document.getElementById('detailsModalContent');
    
    let isKh = state.lang === 'kh';
    let weightTxt = ticket.weightUnit === 'khmer' ? gramsToKhmerWeight(ticket.weight).text : `${ticket.weight}g`;
    let weightGramsStr = `${ticket.weight.toFixed(3)}g`;
    
    let today = new Date().toISOString().split('T')[0];
    let calc = getTicketInterest(ticket, ticket.status === 'redeemed' ? ticket.redeemedDate : today);
    
    let financialStatusHtml = '';
    if (ticket.status === 'active' || ticket.status === 'overdue') {
        let totalStr = ticket.currency === 'USD' ?
            `$${ticket.loanAmount.toLocaleString()} + ${formatCurrency(calc.interest, 'KHR')}` :
            `${formatCurrency(ticket.loanAmount + calc.interest, 'KHR')}`;
        financialStatusHtml = `
            <div class="details-alert">
                <strong>${t('interestCalculation')} (${isKh ? 'គិតមកដល់ថ្ងៃនេះ' : 'As of today'}):</strong>
                <p>${t('interestDue')}: ${formatCurrency(calc.interest, 'KHR')} (${calc.days} ${isKh ? 'ថ្ងៃ' : 'days'})</p>
                <p>${t('totalToPay')}: <strong>${totalStr}</strong></p>
            </div>
        `;
    } else if (ticket.status === 'redeemed') {
        let totalStr = ticket.currency === 'USD' ?
            `$${(ticket.redeemedTotalPaid - ticket.redeemedInterestPaid).toLocaleString()} + ${formatCurrency(ticket.redeemedInterestPaid || 0, 'KHR')}` :
            `${formatCurrency(ticket.redeemedTotalPaid, 'KHR')}`;
        financialStatusHtml = `
            <div class="details-alert success">
                <strong>${t('redeemed')} (${ticket.redeemedDate}):</strong>
                <p>${t('interestPaid')}: ${formatCurrency(ticket.redeemedInterestPaid || 0, 'KHR')}</p>
                <p>${t('totalCashIn')}: <strong>${totalStr}</strong></p>
            </div>
        `;
    } else {
        financialStatusHtml = `
            <div class="details-alert danger">
                <strong>${t('forfeited')}</strong>
                <p>${isKh ? 'ទ្រព្យបញ្ចាំនេះត្រូវបានកាត់ផ្ដាច់ចូលហាង' : 'Collateral forfeited to shop ownership.'}</p>
            </div>
        `;
    }

    let partialPaymentsHtml = '';
    if (ticket.partialPayments && ticket.partialPayments.length > 0) {
        partialPaymentsHtml = `
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:15px 0;">
            <div style="margin-top: 15px;">
                <h3 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--gold);"><i class="fas fa-history"></i> ${isKh ? 'ប្រវត្តិនៃការលោះខ្លះ / បង់ការប្រាក់' : 'Partial Payment History'}</h3>
                <div style="overflow-x: auto; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-color);">
                    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
                        <thead>
                            <tr style="background: rgba(255,255,255,0.03); border-bottom: 1px solid var(--border-color);">
                                <th style="padding: 10px; color: var(--text-muted);">${isKh ? 'កាលបរិច្ឆេទ' : 'Date'}</th>
                                <th style="padding: 10px; color: var(--text-muted);">${isKh ? 'ប្រាក់ដើមបង់' : 'Principal Paid'}</th>
                                <th style="padding: 10px; color: var(--text-muted);">${isKh ? 'ការប្រាក់បង់' : 'Interest Paid'}</th>
                                <th style="padding: 10px; color: var(--text-muted);">${isKh ? 'ប្រាក់កម្ចីនៅសល់' : 'Remaining Loan'}</th>
                                <th style="padding: 10px; color: var(--text-muted);">${isKh ? 'ដោយ' : 'By'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ticket.partialPayments.map(p => `
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 10px;">${p.date}</td>
                                    <td style="padding: 10px; font-weight: bold; color: var(--success);">${formatCurrency(p.principalPaid, ticket.currency)}</td>
                                    <td style="padding: 10px; color: var(--warning);">${formatCurrency(p.interestPaid, 'KHR')}</td>
                                    <td style="padding: 10px; font-weight: bold;">${formatCurrency(p.remainingLoanAmount, ticket.currency)}</td>
                                    <td style="padding: 10px;">${t(p.by)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    let additionalPrincipalSum = 0;
    if (ticket.additionalLoans) {
        additionalPrincipalSum = ticket.additionalLoans.reduce((sum, p) => sum + p.amount, 0);
    }
    let primaryAmount = Math.max(0, ticket.loanAmount - additionalPrincipalSum);
    
    let borrowSessionsHtml = `
        <div style="margin-top: 12px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.82rem;">
            <div style="font-weight: bold; margin-bottom: 6px; color: var(--gold); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 3px;">
                ${isKh ? 'ព័ត៌មានលម្អិតនៃការខ្ចីប្រាក់៖' : 'Loan Borrowing Sessions:'}
            </div>
            <div style="margin-bottom: 6px;">
                <span style="font-weight: 600; color: var(--text-main);">${isKh ? 'ខ្ចីលើកទី១ (ដើម)' : '1st Borrow (Primary)'}:</span>
                <ul style="list-style-type: none; padding-left: 10px; margin-top: 2px; color: var(--text-muted);">
                    <li>- ${isKh ? 'ទឹកប្រាក់' : 'Amount'}: ${formatCurrency(primaryAmount, ticket.currency)}</li>
                    <li>- ${t('interestRate')}: ${formatCurrency(ticket.interestRate, 'KHR')} / ${isKh ? 'ថ្ងៃ' : 'day'}</li>
                    <li>- ${t('pawnDate')}: ${ticket.pawnDate}</li>
                </ul>
            </div>
    `;
    
    if (ticket.additionalLoans && ticket.additionalLoans.length > 0) {
        ticket.additionalLoans.forEach((loan, index) => {
            let ordinal = index + 2;
            let ordinalKh = ordinal === 2 ? '២' : (ordinal === 3 ? '៣' : (ordinal === 4 ? '៤' : (ordinal === 5 ? '៥' : ordinal)));
            borrowSessionsHtml += `
                <div style="margin-bottom: 6px;">
                    <span style="font-weight: 600; color: var(--text-main);">${isKh ? `ខ្ចីលើកទី${ordinalKh}` : `${ordinal}th Borrow`}:</span>
                    <ul style="list-style-type: none; padding-left: 10px; margin-top: 2px; color: var(--text-muted);">
                        <li>- ទឹកប្រាក់បន្ថែម: ${formatCurrency(loan.amount, ticket.currency)}</li>
                        <li>- ${t('interestRate')}: ${formatCurrency(loan.interestRate, 'KHR')} / ${isKh ? 'ថ្ងៃ' : 'day'}</li>
                        <li>- ${t('pawnDate')}: ${loan.pawnDate}</li>
                    </ul>
                </div>
            `;
        });
    }
    borrowSessionsHtml += `</div>`;

    content.innerHTML = `
        <div class="modal-grid">
            <div>
                <h3>${t('customer')}</h3>
                <p><strong>${t('customer')}:</strong> ${ticket.customerName}</p>
                <p><strong>${t('phone')}:</strong> ${ticket.customerPhone || 'N/A'}</p>
                <p><strong>${isKh ? 'អត្តសញ្ញាណប័ណ្ណ' : 'National ID'}:</strong> ${ticket.customerId || 'N/A'}</p>
            </div>
            <div>
                <h3>${isKh ? 'ព័ត៌មានទ្រព្យបញ្ចាំ' : 'Collateral Info'}</h3>
                <p><strong>${t('itemType')}:</strong> ${t(ticket.itemType)}</p>
                <p><strong>${t('purity')}:</strong> ${ticket.purity}</p>
                <p><strong>${t('weight')}:</strong> ${weightTxt} (${weightGramsStr})</p>
                <p><strong>${isKh ? 'ពណ៌នាទ្រព្យ' : 'Description'}:</strong> ${ticket.itemDescription || 'N/A'}</p>
            </div>
        </div>
        
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:15px 0;">
        
        <div class="modal-grid">
            <div>
                <h3>${isKh ? 'ព័ត៌មានកិច្ចសន្យា' : 'Contract Terms'}</h3>
                <p><strong>${t('loanAmount')}:</strong> ${formatCurrency(ticket.loanAmount, ticket.currency)}</p>
                <p><strong>${t('interestRate')}:</strong> ${formatCurrency(ticket.interestRate, 'KHR')} / ${isKh ? 'ថ្ងៃ' : 'day'}</p>
                <p><strong>${t('pawnDate')}:</strong> ${ticket.pawnDate}</p>
                <p><strong>${t('dueDate')}:</strong> ${ticket.dueDate}</p>
                <p><strong>${isKh ? 'អ្នកបង្កើត' : 'Created By'}:</strong> ${t(ticket.createdBy)}</p>
                ${borrowSessionsHtml}
            </div>
            <div>
                ${financialStatusHtml}
                <p><strong>${t('notes')}</strong> ${ticket.notes || '-'}</p>
            </div>
        </div>
        
        ${partialPaymentsHtml}
        
        <div class="modal-actions-footer">
            ${(ticket.status === 'active' || ticket.status === 'overdue') ? `
                <button class="btn btn-primary" onclick="editTicket('${ticket.id}')"><i class="fas fa-edit"></i> ${isKh ? 'កែសម្រួល' : 'Edit'}</button>
                <button class="btn btn-warning" onclick="openBorrowMoreModal('${ticket.id}')"><i class="fas fa-plus-circle"></i> ${t('borrowMore')}</button>
                <button class="btn btn-danger" onclick="forfeitTicket('${ticket.id}')"><i class="fas fa-gavel"></i> ${t('forfeit')}</button>
            ` : ''}
            <button class="btn btn-gold" onclick="viewTicketReceipt('${ticket.id}')"><i class="fas fa-print"></i> ${t('print')}</button>
            <button class="btn btn-gold" onclick="printTicketViaBluetooth('${ticket.id}')" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%) !important; border-color: #3b82f6 !important;"><i class="fas fa-print"></i> ${isKh ? 'ព្រីន Bluetooth' : 'Print Bluetooth'}</button>
            <button class="btn btn-secondary" onclick="closeModal('detailsModal')">${isKh ? 'បិទ' : 'Close'}</button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function editTicket(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    closeModal('detailsModal');
    switchTab('newTicket');
    
    document.getElementById('ticketFormTitle').innerText = state.lang === 'kh' ? 'កែសម្រួលសំបុត្របញ្ចាំ' : 'Edit Pawn Ticket';
    document.getElementById('ticketFormId').value = ticket.id;
    document.getElementById('ticketCustomerName').value = ticket.customerName;
    document.getElementById('ticketCustomerPhone').value = ticket.customerPhone;
    document.getElementById('ticketCustomerId').value = ticket.customerId;
    document.getElementById('ticketItemType').value = ticket.itemType;
    updatePurityOptions();
    document.getElementById('ticketPurity').value = ticket.purity;
    document.getElementById('ticketDescription').value = ticket.itemDescription;
    document.getElementById('ticketLoanAmount').value = ticket.loanAmount;
    document.getElementById('ticketCurrency').value = ticket.currency || 'USD';
    handleCurrencyChange();
    document.getElementById('ticketInterestRate').value = ticket.interestRate;
    document.getElementById('ticketPawnDate').value = ticket.pawnDate;
    document.getElementById('ticketDueDate').value = ticket.dueDate;
    document.getElementById('ticketNotes').value = ticket.notes;
    
    let kw = gramsToKhmerWeight(ticket.weight);
    document.getElementById('weightChi').value = kw.chi;
    document.getElementById('weightHun').value = kw.hun;
    document.getElementById('weightLy').value = kw.ly;
    document.getElementById('ticketWeightGrams').value = ticket.weight;
    
    handleWeightInputs();
}

function openRedeemModal(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let modal = document.getElementById('redeemModal');
    document.getElementById('redeemTicketId').value = ticket.id;
    
    let today = new Date().toISOString().split('T')[0];
    let calc = getTicketInterest(ticket, today);
    
    if (ticket.currency === 'USD') {
        document.getElementById('redeemPrincipal').value = ticket.loanAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    } else {
        document.getElementById('redeemPrincipal').value = Math.round(ticket.loanAmount).toLocaleString();
    }
    document.getElementById('redeemInterest').value = Math.round(calc.interest).toLocaleString();
    
    let sym = ticket.currency === 'KHR' ? '៛' : '$';
    document.querySelectorAll('#redeemModal label').forEach(lbl => {
        let baseText = lbl.innerText.split('(')[0].trim();
        if (lbl.getAttribute('for') === 'redeemInterest') {
            lbl.innerText = `${baseText} (៛)`;
        } else if (lbl.getAttribute('for') === 'redeemTotal' && ticket.currency === 'USD') {
            lbl.innerText = `${baseText} ($ + ៛)`;
        } else {
            lbl.innerText = `${baseText} (${sym})`;
        }
    });
    
    updateRedeemTotal();
    
    modal.style.display = 'flex';
}

function handleRielInput(input) {
    let selStart = input.selectionStart;
    let originalLen = input.value.length;
    
    let val = input.value.replace(/[^0-9]/g, '');
    if (val === '') {
        input.value = '';
        updateRedeemTotal();
        return;
    }
    
    let num = parseInt(val, 10);
    let formatted = num.toLocaleString();
    input.value = formatted;
    
    let newLen = formatted.length;
    input.selectionStart = input.selectionEnd = selStart + (newLen - originalLen);
    
    updateRedeemTotal();
}

function handlePrincipalInput(input) {
    let id = document.getElementById('redeemTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    let currency = ticket ? ticket.currency : 'KHR';
    
    let selStart = input.selectionStart;
    let originalLen = input.value.length;
    
    if (currency === 'KHR') {
        let val = input.value.replace(/[^0-9]/g, '');
        if (val === '') {
            input.value = '';
        } else {
            let num = parseInt(val, 10);
            input.value = num.toLocaleString();
        }
    } else {
        let val = input.value.replace(/[^0-9.]/g, '');
        let parts = val.split('.');
        if (parts.length > 2) {
            val = parts[0] + '.' + parts.slice(1).join('');
        }
        
        if (val === '') {
            input.value = '';
        } else {
            let intPart = parts[0];
            let decPart = parts.length > 1 ? '.' + parts[1] : '';
            if (intPart !== '') {
                let num = parseInt(intPart, 10);
                input.value = num.toLocaleString() + decPart;
            } else {
                input.value = '0' + decPart;
            }
        }
    }
    
    let newLen = input.value.length;
    input.selectionStart = input.selectionEnd = selStart + (newLen - originalLen);
    
    updateRedeemTotal();
}

function updateRedeemTotal() {
    let id = document.getElementById('redeemTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    let principal = parseFloat(document.getElementById('redeemPrincipal').value.replace(/,/g, '')) || 0;
    let interest = parseFloat(document.getElementById('redeemInterest').value.replace(/,/g, '')) || 0;
    
    if (ticket && ticket.currency === 'USD') {
        document.getElementById('redeemTotal').value = `$${principal.toLocaleString()} + ${interest.toLocaleString()} ៛`;
    } else {
        document.getElementById('redeemTotal').value = `${(principal + interest).toLocaleString()} ៛`;
    }
}

function submitRedeem(e) {
    e.preventDefault();
    let id = document.getElementById('redeemTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let interestPaid = parseFloat(document.getElementById('redeemInterest').value.replace(/,/g, '')) || 0;
    let principalPaid = parseFloat(document.getElementById('redeemPrincipal').value.replace(/,/g, '')) || 0;
    
    ticket.status = 'redeemed';
    ticket.redeemedDate = new Date().toISOString().split('T')[0];
    ticket.redeemedInterestPaid = interestPaid;
    ticket.redeemedTotalPaid = principalPaid + interestPaid;
    ticket.redeemedBy = state.currentRole;
    
    saveTicketsState();
    
    let formattedPrincipal = formatCurrency(principalPaid, ticket.currency);
    let formattedInterest = formatCurrency(interestPaid, 'KHR');
    addLog("REDEEM_TICKET", `Redeemed ticket ${id}. Principal: ${formattedPrincipal}, Interest: ${formattedInterest}`);
    
    alert(t('successRedeem'));
    closeModal('redeemModal');
    renderActiveTickets();
}

function openPartialRedeemModal(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let modal = document.getElementById('partialRedeemModal');
    document.getElementById('partialRedeemTicketId').value = ticket.id;
    
    let today = new Date().toISOString().split('T')[0];
    let calc = getTicketInterest(ticket, today);
    
    document.getElementById('partialRedeemOrigPrincipal').innerText = formatCurrency(ticket.loanAmount, ticket.currency);
    document.getElementById('partialRedeemAccruedInterest').innerText = formatCurrency(calc.interest, 'KHR');
    document.getElementById('partialRedeemDays').innerText = `${calc.days} ${state.lang === 'kh' ? 'ថ្ងៃ' : 'days'}`;
    
    document.getElementById('partialRedeemPrincipal').value = '0';
    document.getElementById('partialRedeemInterest').value = Math.round(calc.interest).toLocaleString();
    
    let sym = ticket.currency === 'KHR' ? '៛' : '$';
    document.querySelectorAll('#partialRedeemModal label').forEach(lbl => {
        let baseText = lbl.innerText.split('(')[0].trim();
        if (lbl.getAttribute('for') === 'partialRedeemInterest') {
            lbl.innerText = `${baseText} (៛)`;
        } else if (lbl.getAttribute('for') === 'partialRedeemTotal' && ticket.currency === 'USD') {
            lbl.innerText = `${baseText} ($ + ៛)`;
        } else {
            lbl.innerText = `${baseText} (${sym})`;
        }
    });
    
    updatePartialRedeemTotal();
    modal.style.display = 'flex';
}

function handlePartialPrincipalInput(input) {
    let id = document.getElementById('partialRedeemTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    let currency = ticket ? ticket.currency : 'KHR';
    
    let selStart = input.selectionStart;
    let originalLen = input.value.length;
    
    if (currency === 'KHR') {
        let val = input.value.replace(/[^0-9]/g, '');
        if (val === '') {
            input.value = '';
        } else {
            let num = parseInt(val, 10);
            if (ticket && num > ticket.loanAmount) {
                num = Math.round(ticket.loanAmount);
            }
            input.value = num.toLocaleString();
        }
    } else {
        let val = input.value.replace(/[^0-9.]/g, '');
        let parts = val.split('.');
        if (parts.length > 2) {
            val = parts[0] + '.' + parts.slice(1).join('');
        }
        
        if (val === '') {
            input.value = '';
        } else {
            let intPart = parts[0];
            let decPart = parts.length > 1 ? '.' + parts[1] : '';
            if (intPart !== '') {
                let floatVal = parseFloat(intPart + decPart) || 0;
                if (ticket && floatVal > ticket.loanAmount) {
                    floatVal = ticket.loanAmount;
                    let strVal = floatVal.toString();
                    let strParts = strVal.split('.');
                    intPart = strParts[0];
                    decPart = strParts.length > 1 ? '.' + strParts[1] : '';
                }
                input.value = parseInt(intPart, 10).toLocaleString() + decPart;
            } else {
                input.value = '0' + decPart;
            }
        }
    }
    
    let newLen = input.value.length;
    input.selectionStart = input.selectionEnd = selStart + (newLen - originalLen);
    
    updatePartialRedeemTotal();
}

function updatePartialRedeemTotal() {
    let id = document.getElementById('partialRedeemTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    let principal = parseFloat(document.getElementById('partialRedeemPrincipal').value.replace(/,/g, '')) || 0;
    let interest = parseFloat(document.getElementById('partialRedeemInterest').value.replace(/,/g, '')) || 0;
    
    if (ticket && ticket.currency === 'USD') {
        document.getElementById('partialRedeemTotal').value = `$${principal.toLocaleString()} + ${interest.toLocaleString()} ៛`;
    } else {
        document.getElementById('partialRedeemTotal').value = `${(principal + interest).toLocaleString()} ៛`;
    }
}

function submitPartialRedeem(e) {
    e.preventDefault();
    let id = document.getElementById('partialRedeemTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let principalPaid = parseFloat(document.getElementById('partialRedeemPrincipal').value.replace(/,/g, '')) || 0;
    let interestPaid = parseFloat(document.getElementById('partialRedeemInterest').value.replace(/,/g, '')) || 0;
    
    if (principalPaid > ticket.loanAmount) {
        alert(state.lang === 'kh' ? 'ប្រាក់ដើមបង់មិនអាចលើសពីប្រាក់កម្ចីបច្ចុប្បន្នឡើយ!' : 'Principal paid cannot exceed current loan amount!');
        return;
    }
    
    let today = new Date().toISOString().split('T')[0];
    
    ticket.partialPayments = ticket.partialPayments || [];
    ticket.partialPayments.push({
        date: today,
        principalPaid: principalPaid,
        interestPaid: interestPaid,
        remainingLoanAmount: ticket.loanAmount - principalPaid,
        by: state.currentRole
    });
    
    ticket.loanAmount -= principalPaid;
    ticket.pawnDate = today;
    
    let newDue = new Date();
    newDue.setMonth(newDue.getMonth() + 4);
    ticket.dueDate = newDue.toISOString().split('T')[0];
    
    if (ticket.loanAmount <= 0) {
        ticket.status = 'redeemed';
        ticket.redeemedDate = today;
        ticket.redeemedInterestPaid = interestPaid;
        ticket.redeemedTotalPaid = principalPaid + interestPaid;
        ticket.redeemedBy = state.currentRole;
    } else {
        ticket.status = 'active';
        if (ticket.additionalLoans && ticket.additionalLoans.length > 0) {
            let additionalInterestSum = ticket.additionalLoans.reduce((sum, p) => sum + p.interestRate, 0);
            ticket.interestRate += additionalInterestSum;
            ticket.additionalLoans = [];
        }
    }
    
    saveTicketsState();
    
    let formattedPrincipal = formatCurrency(principalPaid, ticket.currency);
    let formattedInterest = formatCurrency(interestPaid, 'KHR');
    let formattedNewLoan = formatCurrency(ticket.loanAmount, ticket.currency);
    
    addLog("PARTIAL_REDEEM_TICKET", `Partially redeemed ticket ${id}. Principal Paid: ${formattedPrincipal}, Interest Paid: ${formattedInterest}. New Loan Amount: ${formattedNewLoan}`);
    
    alert(state.lang === 'kh' ? 'បានលោះខ្លះសម្រេចជោគជ័យ!' : 'Partial redemption processed successfully!');
    closeModal('partialRedeemModal');
    renderActiveTickets();
    renderDashboard();
}

function openBorrowMoreModal(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    closeModal('detailsModal');
    
    let modal = document.getElementById('borrowMoreModal');
    document.getElementById('borrowMoreTicketId').value = ticket.id;
    
    document.getElementById('borrowMoreAmount').value = '';
    document.getElementById('borrowMoreInterestRate').value = '500';
    document.getElementById('borrowMorePawnDate').value = new Date().toISOString().split('T')[0];
    
    let isKh = state.lang === 'kh';
    let sym = ticket.currency === 'KHR' ? '៛' : '$';
    let label = document.getElementById('lblBorrowMoreAmount');
    if (label) {
        label.innerText = (isKh ? `ទឹកប្រាក់ខ្ចីបន្ថែម (${sym})` : `Additional Loan Amount (${sym})`) + ' *';
    }
    
    modal.style.display = 'flex';
}

function handleBorrowMoreAmountInput(input) {
    let id = document.getElementById('borrowMoreTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    let currency = ticket ? ticket.currency : 'KHR';
    
    let selStart = input.selectionStart;
    let originalLen = input.value.length;
    
    if (currency === 'KHR') {
        let val = input.value.replace(/[^0-9]/g, '');
        if (val === '') {
            input.value = '';
        } else {
            let num = parseInt(val, 10);
            input.value = num.toLocaleString();
        }
    } else {
        let val = input.value.replace(/[^0-9.]/g, '');
        let parts = val.split('.');
        if (parts.length > 2) {
            val = parts[0] + '.' + parts.slice(1).join('');
        }
        
        if (val === '') {
            input.value = '';
        } else {
            let intPart = parts[0];
            let decPart = parts.length > 1 ? '.' + parts[1] : '';
            if (intPart !== '') {
                let num = parseInt(intPart, 10);
                input.value = num.toLocaleString() + decPart;
            } else {
                input.value = '0' + decPart;
            }
        }
    }
    
    let newLen = input.value.length;
    input.selectionStart = input.selectionEnd = selStart + (newLen - originalLen);
}

function submitBorrowMore(e) {
    e.preventDefault();
    let id = document.getElementById('borrowMoreTicketId').value;
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let amount = parseFloat(document.getElementById('borrowMoreAmount').value.replace(/,/g, '')) || 0;
    let interestRate = parseFloat(document.getElementById('borrowMoreInterestRate').value) || 0;
    let pawnDate = document.getElementById('borrowMorePawnDate').value;
    
    if (amount <= 0) {
        alert(state.lang === 'kh' ? 'សូមបញ្ចូលទឹកប្រាក់ខ្ចីបន្ថែមឱ្យបានត្រឹមត្រូវ!' : 'Please enter a valid additional loan amount!');
        return;
    }
    
    ticket.additionalLoans = ticket.additionalLoans || [];
    ticket.additionalLoans.push({
        id: ticket.additionalLoans.length + 2,
        amount: amount,
        interestRate: interestRate,
        pawnDate: pawnDate
    });
    
    ticket.loanAmount += amount;
    
    saveTicketsState();
    
    let formattedAmount = formatCurrency(amount, ticket.currency);
    let formattedInterest = formatCurrency(interestRate, 'KHR');
    addLog("BORROW_MORE", `Borrowed more on ticket ${id}. Additional Amount: ${formattedAmount}, Interest/Day: ${formattedInterest}, Date: ${pawnDate}`);
    
    alert(state.lang === 'kh' ? 'បានបន្ថែមការខ្ចីប្រាក់ជោគជ័យ!' : 'Added additional borrow session successfully!');
    closeModal('borrowMoreModal');
    renderActiveTickets();
    renderDashboard();
}

function forfeitTicket(id) {
    if (state.currentRole !== 'admin') {
        alert(t('unauthorized'));
        return;
    }
    
    if (confirm(t('confirmForfeit'))) {
        let ticket = state.tickets.find(t => t.id === id);
        if (ticket) {
            ticket.status = 'forfeited';
            ticket.redeemedDate = new Date().toISOString().split('T')[0];
            saveTicketsState();
            addLog("FORFEIT_TICKET", `Forfeited ticket ${id} collateral`);
            alert(t('successForfeit'));
            closeModal('detailsModal');
            renderActiveTickets();
        }
    }
}

function deleteTicket(id) {
    if (state.currentRole !== 'admin') {
        alert(t('unauthorized'));
        return;
    }
    
    if (confirm(t('confirmDelete'))) {
        state.tickets = state.tickets.filter(t => t.id !== id);
        saveTicketsState();
        addLog("DELETE_TICKET", `Deleted ticket ${id}`);
        alert(t('successDelete'));
        renderActiveTickets();
    }
}

function handleSearch(val) {
    state.currentSearch = val;
    if (state.activeTab === 'activeTickets') {
        renderActiveTickets();
    } else if (state.activeTab === 'history') {
        renderHistory();
    }
}

function handleStatusFilter(val) {
    state.currentStatusFilter = val;
    renderActiveTickets();
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function renderReports() {
    let year = parseInt(document.getElementById('reportYearSelect').value) || new Date().getFullYear();
    let month = parseInt(document.getElementById('reportMonthSelect').value) || (new Date().getMonth() + 1);
    
    let prefix = `${year}-${String(month).padStart(2, '0')}`;
    
    let totalCashOut = { USD: 0, KHR: 0 };
    let totalCashIn = { USD: 0, KHR: 0 };
    let totalInterest = { USD: 0, KHR: 0 };
    
    let detailsBody = document.getElementById('reportDetailsBody');
    detailsBody.innerHTML = '';
    
    let reportList = [];
    
    state.tickets.forEach(ticket => {
        let curr = ticket.currency || 'USD';
        if (ticket.pawnDate.startsWith(prefix)) {
            totalCashOut[curr] += ticket.loanAmount;
            reportList.push({
                date: ticket.pawnDate,
                ticketId: ticket.id,
                customer: ticket.customerName,
                type: state.lang === 'kh' ? 'បញ្ចាំចេញ' : 'Cash Lent',
                cashOut: ticket.loanAmount,
                cashIn: 0,
                interest: 0,
                currency: curr
            });
        }
        
        if (ticket.status === 'redeemed' && ticket.redeemedDate && ticket.redeemedDate.startsWith(prefix)) {
            totalCashIn[curr] += ticket.loanAmount;
            totalInterest[curr] += (ticket.redeemedInterestPaid || 0);
            reportList.push({
                date: ticket.redeemedDate,
                ticketId: ticket.id,
                customer: ticket.customerName,
                type: state.lang === 'kh' ? 'លោះចូលវិញ' : 'Redemption',
                cashOut: 0,
                cashIn: ticket.loanAmount,
                interest: ticket.redeemedInterestPaid || 0,
                currency: curr
            });
        }

        if (ticket.partialPayments) {
            ticket.partialPayments.forEach(p => {
                if (p.date && p.date.startsWith(prefix)) {
                    totalCashIn[curr] += p.principalPaid;
                    totalInterest[curr] += p.interestPaid;
                    reportList.push({
                        date: p.date,
                        ticketId: ticket.id,
                        customer: ticket.customerName,
                        type: state.lang === 'kh' ? 'លោះខ្លះ' : 'Partial Redeem',
                        cashOut: 0,
                        cashIn: p.principalPaid,
                        interest: p.interestPaid,
                        currency: curr
                    });
                }
            });
        }
    });
    
    reportList.sort((a, b) => a.date.localeCompare(b.date));
    
    document.getElementById('repTotalCashOut').innerText = formatSum(totalCashOut);
    document.getElementById('repTotalCashIn').innerText = formatSum(totalCashIn);
    document.getElementById('repTotalInterest').innerText = formatSum(totalInterest);
    
    if (reportList.length === 0) {
        detailsBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: var(--text-muted);">${state.lang === 'kh' ? 'គ្មានទិន្នន័យសម្រាប់ខែនេះទេ' : 'No records for this month'}</td></tr>`;
        return;
    }
    
    reportList.forEach(item => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.date}</td>
            <td><strong>${item.ticketId}</strong></td>
            <td>${item.customer}</td>
            <td><span class="report-type-badge ${item.cashOut > 0 ? 'out' : 'in'}">${item.type}</span></td>
            <td>${item.cashOut > 0 ? formatCurrency(item.cashOut, item.currency) : '-'}</td>
            <td>${item.cashIn > 0 ? formatCurrency(item.cashIn, item.currency) : '-'}</td>
            <td>${item.interest > 0 ? formatCurrency(item.interest, item.currency) : '-'}</td>
        `;
        detailsBody.appendChild(tr);
    });
}

// Idle Timer and Login Logic
let idleTimeout = 300000; // 5 minutes
let idleTimer;

function resetIdleTimer() {
    if (!state.currentUser) return;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        logout(true);
    }, idleTimeout);
}

function setupIdleTimer() {
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(event => {
        window.removeEventListener(event, resetIdleTimer, true);
        window.addEventListener(event, resetIdleTimer, true);
    });
}

function setupInitialCredentials(e) {
    e.preventDefault();
    let adminUser = document.getElementById('setupAdminUser').value.trim();
    let adminPass = document.getElementById('setupAdminPassword').value;
    let cashierUser = document.getElementById('setupCashierUser').value.trim();
    let cashierPass = document.getElementById('setupCashierPassword').value;
    
    if (!adminUser || !adminPass || !cashierUser || !cashierPass) {
        alert(state.lang === 'kh' ? 'សូមបំពេញព័ត៌មានឱ្យបានគ្រប់ជ្រុងជ្រោយ!' : 'Please fill in all fields!');
        return;
    }
    
    state.userCredentials = {
        admin: { username: adminUser, password: adminPass },
        cashier: { username: cashierUser, password: cashierPass }
    };
    saveCredentialsState();
    addLog("SETUP_CREDENTIALS", "Configured admin and cashier user accounts");
    
    closeModal('setupModal');
    showLoginOverlay();
}

function handleLogin(e) {
    e.preventDefault();
    let pass = document.getElementById('loginPassword').value;
    
    if (!state.userCredentials) {
        alert("System error. Setup required.");
        return;
    }
    
    let matchedRole = null;
    let user = '';
    
    if (state.userCredentials.admin.password === pass) {
        matchedRole = 'admin';
        user = state.userCredentials.admin.username;
    } else if (state.userCredentials.cashier.password === pass) {
        matchedRole = 'cashier';
        user = state.userCredentials.cashier.username;
    }
    
    if (matchedRole) {
        state.currentUser = user;
        state.currentRole = matchedRole;
        sessionStorage.setItem('pawn_current_user', user);
        sessionStorage.setItem('pawn_current_role', matchedRole);
        
        addLog("LOGIN", `User ${user} logged in with role ${matchedRole}`);
        
        document.getElementById('loginOverlay').style.display = 'none';
        setupIdleTimer();
        resetIdleTimer();
        translateUI();
        alert(state.lang === 'kh' ? `ស្វាគមន៍! បានចូលប្រព័ន្ធជា៖ ${t(matchedRole)}` : `Welcome! Logged in as ${t(matchedRole)}`);
    } else {
        alert(t('wrongCredentials'));
    }
}

function logout(isAuto = false) {
    let oldUser = state.currentUser;
    state.currentUser = null;
    state.currentRole = 'cashier';
    sessionStorage.removeItem('pawn_current_user');
    sessionStorage.removeItem('pawn_current_role');
    
    // Clear idle event listeners
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(event => {
        window.removeEventListener(event, resetIdleTimer, true);
    });
    clearTimeout(idleTimer);
    
    if (isAuto) {
        addLog("AUTO_LOGOUT", `System automatically logged out user ${oldUser} due to inactivity`);
    } else {
        addLog("LOGOUT", `User ${oldUser} logged out manually`);
    }
    
    showLoginOverlay();
    translateUI();
}

function showLoginOverlay() {
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginOverlay').style.display = 'flex';
}

function setLoginLang(lang) {
    state.lang = lang;
    localStorage.setItem('pawn_lang', lang);
    translateUI();
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    
    const khBtn = document.getElementById('loginLangKhBtn');
    const enBtn = document.getElementById('loginLangEnBtn');
    if (khBtn && enBtn) {
        if (lang === 'kh') {
            khBtn.style.border = '1px solid var(--border-gold)';
            khBtn.style.background = 'var(--gold-light)';
            khBtn.style.color = 'var(--gold)';
            
            enBtn.style.border = '1px solid var(--border-color)';
            enBtn.style.background = 'rgba(255,255,255,0.03)';
            enBtn.style.color = 'var(--text-muted)';
        } else {
            enBtn.style.border = '1px solid var(--border-gold)';
            enBtn.style.background = 'var(--gold-light)';
            enBtn.style.color = 'var(--gold)';
            
            khBtn.style.border = '1px solid var(--border-color)';
            khBtn.style.background = 'rgba(255,255,255,0.03)';
            khBtn.style.color = 'var(--text-muted)';
        }
    }
}

function renderSettings() {
    renderSettingsSyncFields();
    let tbody = document.getElementById('logsBody');
    tbody.innerHTML = '';
    
    state.logs.slice(0, 100).forEach(log => {
        let tr = document.createElement('tr');
        let d = new Date(log.timestamp);
        let timeStr = d.toLocaleString();
        tr.innerHTML = `
            <td style="font-size: 0.85rem; color: var(--text-muted);">${timeStr}</td>
            <td><span class="user-badge">${t(log.user)}</span></td>
            <td><strong>${log.action}</strong></td>
            <td style="font-size: 0.9rem;">${log.details}</td>
        `;
        tbody.appendChild(tr);
    });
}

function exportDatabase() {
    let backup = {
        tickets: state.tickets,
        logs: state.logs,
        pins: state.userPins,
        version: "1.0",
        timestamp: new Date().toISOString()
    };
    
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
    let dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `lucky_pawn_backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchorElem.click();
    addLog("EXPORT_DATABASE", "Exported database backup JSON file");
}

function importDatabase(e) {
    let file = e.target.files[0];
    if (!file) return;
    
    // Display file name in our custom UI label
    let fileLabel = document.getElementById('importFileLabel');
    if (fileLabel) {
        fileLabel.textContent = file.name;
        fileLabel.style.color = 'var(--gold)';
    }
    
    let reader = new FileReader();
    reader.onload = function(evt) {
        try {
            let data = JSON.parse(evt.target.result);
            if (data.tickets && data.pins) {
                state.tickets = data.tickets;
                state.logs = data.logs || [];
                state.userPins = data.pins;
                
                saveTicketsState();
                saveLogsState();
                localStorage.setItem('pawn_pins', JSON.stringify(state.userPins));
                
                addLog("IMPORT_DATABASE", "Imported database backup JSON file");
                translateUI();
                alert(state.lang === 'kh' ? "បានស្តារទិន្នន័យដោយជោគជ័យ!" : "Database restored successfully!");
            } else {
                alert("Invalid backup file structure!");
            }
        } catch (err) {
            alert("Error parsing backup JSON file!");
        }
    };
    reader.readAsText(file);
}

function viewTicketReceipt(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    let printArea = document.getElementById('receiptPrintArea');
    let isKh = state.lang === 'kh';
    
    let weightTxt = ticket.weightUnit === 'khmer' ? gramsToKhmerWeight(ticket.weight).text : `${ticket.weight}g`;
    let weightGramsStr = `${ticket.weight.toFixed(3)}g`;
    
    let today = new Date().toISOString().split('T')[0];
    let calc = getTicketInterest(ticket, ticket.status === 'redeemed' ? ticket.redeemedDate : today);
    
    let additionalPrincipalSum = 0;
    if (ticket.additionalLoans) {
        additionalPrincipalSum = ticket.additionalLoans.reduce((sum, p) => sum + p.amount, 0);
    }
    let primaryAmount = Math.max(0, ticket.loanAmount - additionalPrincipalSum);
    
    let receiptSessionsHtml = '';
    if (ticket.additionalLoans && ticket.additionalLoans.length > 0) {
        receiptSessionsHtml = `
            <div style="margin-top: 6px; font-size: 8px !important; color: #000; border-top: 1px dashed #000; padding-top: 4px;">
                <div style="font-weight: bold; text-decoration: underline; margin-bottom: 2px;">
                    ${isKh ? 'ព័ត៌មានលម្អិតនៃការខ្ចីប្រាក់បន្ថែម៖' : 'Additional Borrowing Details:'}
                </div>
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 8px !important;">
                    <thead>
                        <tr style="border-bottom: 1px solid #000;">
                            <th style="padding: 1px 0; font-weight: bold;">${isKh ? 'លើកទី' : 'Session'}</th>
                            <th style="padding: 1px 0; font-weight: bold;">${isKh ? 'ទឹកប្រាក់' : 'Amount'}</th>
                            <th style="padding: 1px 0; font-weight: bold;">${isKh ? 'ការប្រាក់/ថ្ងៃ' : 'Interest/Day'}</th>
                            <th style="padding: 1px 0; font-weight: bold;">${isKh ? 'ថ្ងៃបញ្ចាំ' : 'Pawn Date'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px dashed #ccc;">
                            <td style="padding: 1px 0;">${isKh ? 'លើកទី១ (ដើម)' : '1st (Primary)'}</td>
                            <td style="padding: 1px 0;">${formatCurrency(primaryAmount, ticket.currency)}</td>
                            <td style="padding: 1px 0;">${formatCurrency(ticket.interestRate, 'KHR')}</td>
                            <td style="padding: 1px 0;">${ticket.pawnDate}</td>
                        </tr>
                        ${ticket.additionalLoans.map((loan, idx) => {
                            let ord = idx + 2;
                            let ordKh = ord === 2 ? '២' : (ord === 3 ? '៣' : (ord === 4 ? '៤' : (ord === 5 ? '៥' : ord)));
                            return `
                                <tr style="border-bottom: 1px dashed #ccc;">
                                    <td style="padding: 1px 0;">${isKh ? `លើកទី${ordKh}` : `${ord}th`}</td>
                                    <td style="padding: 1px 0;">${formatCurrency(loan.amount, ticket.currency)}</td>
                                    <td style="padding: 1px 0;">${formatCurrency(loan.interestRate, 'KHR')}</td>
                                    <td style="padding: 1px 0;">${loan.pawnDate}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    printArea.innerHTML = `
        <div class="receipt-card">
            <div class="receipt-header">
                <div class="receipt-logo"><img src="logo.jpg" alt="Logo"></div>
                <div class="receipt-shop-name">${t('shopName')}</div>
                <div class="receipt-shop-info">${t('shopAddress')}</div>
                <div class="receipt-shop-info">${t('phone')}: ${t('shopPhone')}</div>
            </div>
            
            <div class="receipt-title-box">
                <h2>${t('receiptTitle')}</h2>
            </div>
            
            <table class="receipt-table">
                <tr>
                    <td colspan="2" style="font-size: 11px !important; font-weight: bold; color: #000; padding: 5px 0; text-align: center; border-bottom: 1px dashed #000; letter-spacing: 0.5px;">
                        <span>${t('customerId')}:</span> <span style="font-size: 13px !important; font-weight: 800; color: #000;">${ticket.customerId || '-'}</span>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('customer')}:</span> ${ticket.customerName}
                    </td>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('phone')}:</span> ${ticket.customerPhone || '-'}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${isKh ? 'កាលបរិច្ឆេទ' : 'Date'}:</span> ${ticket.pawnDate}
                    </td>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('dueDate')}:</span> ${ticket.dueDate}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('weight')}:</span> ${weightTxt} (${weightGramsStr})
                    </td>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('itemType')}:</span> ${t(ticket.itemType)} (${ticket.purity})
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('itemDescription')}:</span> ${ticket.itemDescription || '-'}
                    </td>
                    <td style="width: 50%; font-size: 9px !important; color: #000; padding: 3px 0; text-align: left;">
                        <span style="font-weight: bold;">${t('notes')}</span> ${ticket.notes || '-'}
                    </td>
                </tr>
            </table>

            <div class="receipt-divider"></div>

            <table class="receipt-table finance">
                <tr>
                    <td style="width: 50%; font-size: 10px !important; font-weight: bold; color: #000; padding: 4px 0; text-align: left;">
                        ${t('loanAmount')}: <span style="font-weight: 800;">${formatCurrency(ticket.loanAmount, ticket.currency)}</span>
                    </td>
                    <td style="width: 50%; font-size: 10px !important; font-weight: bold; color: #000; padding: 4px 0; text-align: left;">
                        ${isKh ? 'ការប្រាក់/ថ្ងៃ' : 'Interest/Day'}: <span style="font-weight: 800;">${formatCurrency(ticket.interestRate, 'KHR')}</span>
                    </td>
                </tr>
                ${ticket.status === 'redeemed' ? `
                <tr>
                    <td class="lbl-large">${t('status')}:</td>
                    <td class="val-large" style="color: #2e7d32; text-transform: uppercase;">${t('redeemed')} (${ticket.redeemedDate})</td>
                </tr>
                <tr>
                    <td class="lbl-large">${t('interestPaid')}:</td>
                    <td class="val-large">${formatCurrency(ticket.redeemedInterestPaid || 0, 'KHR')}</td>
                </tr>
                <tr>
                    <td class="lbl-large">${t('totalCashIn')}:</td>
                    <td class="val-large"><strong>${ticket.currency === 'USD' ? `$${(ticket.redeemedTotalPaid - ticket.redeemedInterestPaid).toLocaleString()} + ${formatCurrency(ticket.redeemedInterestPaid || 0, 'KHR')}` : formatCurrency(ticket.redeemedTotalPaid || 0, 'KHR')}</strong></td>
                </tr>
                ` : ''}
            </table>
            
            ${receiptSessionsHtml}
            
            <div class="receipt-terms">
                <strong>${isKh ? 'បញ្ជាក់បន្ថែម៖' : 'Terms & Conditions:'}</strong>
                <p style="white-space: pre-line; margin-top: 5px;">${t('receiptTerms')}</p>
            </div>
        </div>

        <div class="page-break"></div>
        
        <div class="receipt-card page2-card">
            <div class="receipt-header">
                <div class="receipt-logo"><img src="logo.jpg" alt="Logo"></div>
                <div class="receipt-shop-name">${t('shopName')}</div>
                <div class="receipt-shop-info">${t('shopAddress')}</div>
                <div class="receipt-shop-info">${t('phone')}: ${t('shopPhone')}</div>
            </div>
            
            <div class="receipt-title-box">
                <h2>${t('receiptTitle')}</h2>
            </div>
            
            <div class="page2-customer-id-box">
                <div class="page2-id-label">${t('customerId')}</div>
                <div class="page2-id-value">${ticket.customerId || '-'}</div>
            </div>
            
            <table class="receipt-table">
                <tr>
                    <td class="lbl" style="width: 40%; font-size: 9px !important; color: #000; font-weight: bold; border: none; padding: 3px 0;">${t('customer')}:</td>
                    <td class="val" style="width: 60%; font-size: 9px !important; color: #000; border: none; padding: 3px 0;">${ticket.customerName}</td>
                </tr>
                <tr>
                    <td class="lbl" style="width: 40%; font-size: 9px !important; color: #000; font-weight: bold; border: none; padding: 3px 0;">${t('phone')}:</td>
                    <td class="val" style="width: 60%; font-size: 9px !important; color: #000; border: none; padding: 3px 0;">${ticket.customerPhone || '-'}</td>
                </tr>
                <tr>
                    <td class="lbl" style="width: 40%; font-size: 9px !important; color: #000; font-weight: bold; border: none; padding: 3px 0;">${isKh ? 'ចំនួនទឹកប្រាក់ខ្ចី' : 'Amount Borrowed'}:</td>
                    <td class="val" style="width: 60%; font-size: 11px !important; font-weight: 800; color: #000; border: none; padding: 3px 0;">
                        ${formatCurrency(ticket.loanAmount, ticket.currency)}
                    </td>
                </tr>
                <tr>
                    <td class="lbl" style="width: 40%; font-size: 9px !important; color: #000; font-weight: bold; border: none; padding: 3px 0;">${isKh ? 'ការប្រាក់/ថ្ងៃ' : 'Interest/Day'}:</td>
                    <td class="val" style="width: 60%; font-size: 9px !important; color: #000; border: none; padding: 3px 0;">
                        ${formatCurrency(ticket.interestRate, 'KHR')}
                    </td>
                </tr>
                <tr>
                    <td class="lbl" style="width: 40%; font-size: 9px !important; color: #000; font-weight: bold; border: none; padding: 3px 0;">${isKh ? 'ថ្ងៃខែឆ្នាំខ្ចី' : 'Date Borrowed'}:</td>
                    <td class="val" style="width: 60%; font-size: 9px !important; color: #000; border: none; padding: 3px 0;">${ticket.pawnDate}</td>
                </tr>
            </table>
            
            ${receiptSessionsHtml}
        </div>
    `;
    
    window.print();
    addLog("PRINT_RECEIPT", `Printed receipt for ticket ${ticket.id}`);
}

window.addEventListener('DOMContentLoaded', () => {
    let yrSelect = document.getElementById('reportYearSelect');
    let currYear = new Date().getFullYear();
    for (let i = currYear - 5; i <= currYear + 5; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerText = i;
        if (i === currYear) opt.selected = true;
        yrSelect.appendChild(opt);
    }
    
    let mthSelect = document.getElementById('reportMonthSelect');
    let currMonth = new Date().getMonth() + 1;
    for (let i = 1; i <= 12; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerText = String(i).padStart(2, '0');
        if (i === currMonth) opt.selected = true;
        mthSelect.appendChild(opt);
    }

    document.getElementById('langSelect').value = state.lang;
    
    checkAndSeedData();
    applyTheme(state.theme);
    initFirebaseSync();
    
    if (!state.userCredentials) {
        document.getElementById('setupModal').style.display = 'flex';
    } else {
        translateUI();
        setLoginLang(state.lang);
        if (!state.currentUser) {
            showLoginOverlay();
        } else {
            setupIdleTimer();
            resetIdleTimer();
        }
    }
    
    document.getElementById('langSelect').addEventListener('change', (e) => {
        state.lang = e.target.value;
        localStorage.setItem('pawn_lang', state.lang);
        translateUI();
    });

    // Automatically calculate Due Date (1 month after Pawn Date) when Pawn Date changes
    let pawnDateInput = document.getElementById('ticketPawnDate');
    if (pawnDateInput) {
        pawnDateInput.addEventListener('change', (e) => {
            let pawnVal = e.target.value;
            if (pawnVal) {
                let d = new Date(pawnVal);
                d.setMonth(d.getMonth() + 1);
                document.getElementById('ticketDueDate').value = d.toISOString().split('T')[0];
            }
        });
    }
});

// ==========================================
// Bluetooth Receipt Printer Functionality
// ==========================================

let btDevice = null;
let btCharacteristic = null;

async function connectBluetoothPrinter() {
    const btn = document.getElementById('btnConnectBluetooth');
    const textSpan = document.getElementById('bluetoothPrinterText');
    const icon = document.getElementById('bluetoothPrinterIcon');
    
    if (btDevice && btDevice.gatt.connected) {
        try {
            await btDevice.gatt.disconnect();
            btDevice = null;
            btCharacteristic = null;
            if (btn) btn.style.background = 'rgba(255,255,255,0.05)';
            if (textSpan) textSpan.innerText = state.lang === 'kh' ? 'Bluetooth បិទ' : 'Bluetooth Off';
            if (icon) icon.style.color = '#6b7280';
            alert(state.lang === 'kh' ? "បានផ្ដាច់ពីម៉ាស៊ីនព្រីនរួចរាល់" : "Disconnected from printer.");
        } catch (e) {
            console.error(e);
        }
        return;
    }

    try {
        if (!navigator.bluetooth) {
            alert(state.lang === 'kh' ? "កម្មវិធីរុករក (Browser) របស់អ្នកមិនគាំទ្រ Bluetooth ទេ។ សូមប្រើប្រាស់ Google Chrome ឬ Bluefy Browser លើ iPhone។" : "Web Bluetooth is not supported by your browser. Please use Chrome, Edge, or Bluefy on iOS.");
            return;
        }

        if (textSpan) textSpan.innerText = state.lang === 'kh' ? 'កំពុងស្វែងរក...' : 'Searching...';

        btDevice = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: [
                '000018f0-0000-1000-8000-00805f9b34fb', // General Printer
                '0000e781-0000-1000-8000-00805f9b34fb', // Custom service
                'e7810a71-73ae-499d-8c15-faa9aef0c3f2', // ISSC
                '00001101-0000-1000-8000-00805f9b34fb'  // Serial Port Profile (SPP)
            ]
        });

        if (textSpan) textSpan.innerText = state.lang === 'kh' ? 'កំពុងភ្ជាប់...' : 'Connecting...';
        
        const server = await btDevice.gatt.connect();
        
        const services = await server.getPrimaryServices();
        let writeChar = null;
        
        for (const service of services) {
            try {
                const characteristics = await service.getCharacteristics();
                for (const char of characteristics) {
                    if (char.properties.write || char.properties.writeWithoutResponse) {
                        writeChar = char;
                        break;
                    }
                }
            } catch (e) {
                console.warn("Could not read characteristics from service " + service.uuid, e);
            }
            if (writeChar) break;
        }

        if (!writeChar) {
            throw new Error(state.lang === 'kh' ? "មិនអាចស្វែងរក Characteristic សម្រាប់ព្រីនឡើយ" : "No writable characteristic found.");
        }

        btCharacteristic = writeChar;
        
        if (btn) btn.style.background = 'rgba(16, 185, 129, 0.15)';
        if (textSpan) textSpan.innerText = btDevice.name || 'Printer Connected';
        if (icon) icon.style.color = '#10b981';

        btDevice.addEventListener('gattserverdisconnected', () => {
            btDevice = null;
            btCharacteristic = null;
            if (btn) btn.style.background = 'rgba(255,255,255,0.05)';
            if (textSpan) textSpan.innerText = state.lang === 'kh' ? 'Bluetooth បិទ' : 'Bluetooth Off';
            if (icon) icon.style.color = '#6b7280';
        });

        alert((state.lang === 'kh' ? "បានភ្ជាប់ទៅកាន់ម៉ាស៊ីនព្រីន៖ " : "Connected to: ") + (btDevice.name || "Printer"));
    } catch (err) {
        console.error("Bluetooth connection failed", err);
        if (textSpan) textSpan.innerText = state.lang === 'kh' ? 'Bluetooth បិទ' : 'Bluetooth Off';
        if (icon) icon.style.color = '#6b7280';
        alert((state.lang === 'kh' ? "ការតភ្ជាប់បរាជ័យ៖ " : "Connection failed: ") + err.message);
    }
}

// Wrap text helper for Canvas (supports Khmer character boundaries)
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    let currentY = y;
    let line = '';
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let testLine = line + char;
        let metrics = ctx.measureText(testLine);
        
        if (char === '\n') {
            ctx.fillText(line, x, currentY);
            line = '';
            currentY += lineHeight;
            continue;
        }
        
        if (metrics.width > maxWidth) {
            let lastSpace = line.lastIndexOf(' ');
            if (lastSpace > 0 && lastSpace > line.length - 15) {
                ctx.fillText(line.substring(0, lastSpace), x, currentY);
                line = line.substring(lastSpace + 1) + char;
            } else {
                ctx.fillText(line, x, currentY);
                line = char;
            }
            currentY += lineHeight;
        } else {
            line = testLine;
        }
    }
    if (line.length > 0) {
        ctx.fillText(line, x, currentY);
    }
    return currentY + lineHeight;
}

// Convert canvas black/white pixels to ESC/POS raster bit-image format (GS v 0)
function convertCanvasToEscPos(canvas) {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    const widthBytes = Math.ceil(canvas.width / 8);
    const escposData = [];

    // ESC/POS initialize: ESC @ (1B 40)
    escposData.push(0x1B, 0x40);

    // GS v 0 m xL xH yL yH
    escposData.push(0x1D, 0x76, 0x30, 0);
    escposData.push(widthBytes & 0xFF);
    escposData.push((widthBytes >> 8) & 0xFF);
    escposData.push(canvas.height & 0xFF);
    escposData.push((canvas.height >> 8) & 0xFF);

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < widthBytes * 8; x++) {
            const byteIdx = x >> 3;
            const bitIdx = 7 - (x & 7);
            
            if (x % 8 === 0) {
                escposData.push(0);
            }
            
            let isBlack = false;
            if (x < canvas.width) {
                const pixelIdx = (y * canvas.width + x) * 4;
                const r = data[pixelIdx];
                const g = data[pixelIdx + 1];
                const b = data[pixelIdx + 2];
                const a = data[pixelIdx + 3];
                
                if (a < 127) {
                    isBlack = false;
                } else {
                    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
                    isBlack = brightness < 180; // slightly darker threshold for clear print
                }
            }
            
            if (isBlack) {
                escposData[escposData.length - 1] |= (1 << bitIdx);
            }
        }
    }

    // Line feeds and paper cut command: 4 line feeds + GS V 66 0
    escposData.push(0x0A, 0x0A, 0x0A, 0x0A);
    escposData.push(0x1D, 0x56, 0x42, 0x00); // Feed paper and cut (partial cut)

    return escposData;
}

// Generate the receipt drawn on Canvas
function drawReceiptToCanvas(ticket, isPage2 = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 384; // 58mm printer width
    canvas.height = 2500; // temporary height
    const ctx = canvas.getContext('2d');
    
    // Set white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#000000';
    let y = 25;
    let isKh = state.lang === 'kh';
    
    // 1. Header (Centered)
    ctx.font = 'bold 15px "Kantumruy Pro", "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(t('shopName') || "សុខ ស៊ីណេត", 192, y);
    y += 20;
    
    ctx.font = '10px "Kantumruy Pro", "Inter", sans-serif';
    ctx.fillText(t('shopAddress') || "ភូមិព្រែករកា ឃុំព្រែករកា", 192, y);
    y += 15;
    ctx.fillText((t('phone') || "ទូរសព្ទ") + ": " + (t('shopPhone') || "097..."), 192, y);
    y += 20;

    // Divider
    function drawDashedLine(ctx, yLoc) {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(10, yLoc);
        ctx.lineTo(374, yLoc);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    drawDashedLine(ctx, y);
    y += 18;
    
    // Title
    ctx.font = 'bold 12px "Kantumruy Pro", "Inter", sans-serif';
    ctx.fillText(isPage2 ? (isKh ? "សំបុត្របញ្ចាំ (ច្បាប់ចម្លង)" : "Pawn Ticket (Copy)") : t('receiptTitle'), 192, y);
    y += 12;
    
    // Draw outer box for Customer ID
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.strokeRect(80, y, 224, 22);
    ctx.font = 'bold 11px "Kantumruy Pro", "Inter", sans-serif';
    ctx.fillText((t('customerId') || "ID") + ": " + (ticket.customerId || '-'), 192, y + 15);
    y += 35;
    
    // 2. Info Block (Left/Right or stacked)
    ctx.textAlign = 'left';
    ctx.font = '10px "Kantumruy Pro", "Inter", sans-serif';
    
    function drawRow(label, value, yLoc) {
        ctx.font = 'bold 10px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillText(label, 15, yLoc);
        ctx.font = '10px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillText(value, 150, yLoc);
    }
    
    drawRow((t('customer') || "អតិថិជន") + ":", ticket.customerName, y);
    y += 16;
    drawRow((t('phone') || "លេខទូរសព្ទ") + ":", ticket.customerPhone || '-', y);
    y += 16;
    drawRow((isKh ? 'កាលបរិច្ឆេទ' : 'Date') + ":", ticket.pawnDate, y);
    y += 16;
    drawRow((t('dueDate') || "ថ្ងៃកំណត់លោះ") + ":", ticket.dueDate, y);
    y += 20;
    
    drawDashedLine(ctx, y);
    y += 18;
    
    // Item Details
    let weightTxt = ticket.weightUnit === 'khmer' ? gramsToKhmerWeight(ticket.weight).text : `${ticket.weight}g`;
    let weightGramsStr = `${ticket.weight.toFixed(3)}g`;
    
    drawRow((t('itemType') || "ប្រភេទទ្រព្យ") + ":", t(ticket.itemType) + ` (${ticket.purity})`, y);
    y += 16;
    drawRow((t('weight') || "ទម្ងន់") + ":", `${weightTxt} (${weightGramsStr})`, y);
    y += 16;
    drawRow((t('itemDescription') || "ពណ៌នា") + ":", ticket.itemDescription || '-', y);
    y += 16;
    drawRow((t('notes') || "កំណត់ចំណាំ") + ":", ticket.notes || '-', y);
    y += 20;
    
    drawDashedLine(ctx, y);
    y += 18;
    
    // Financial Info
    ctx.font = 'bold 11px "Kantumruy Pro", "Inter", sans-serif';
    ctx.fillText((t('loanAmount') || "ប្រាក់ខ្ចី") + ":", 15, y);
    ctx.textAlign = 'right';
    ctx.fillText(formatCurrency(ticket.loanAmount, ticket.currency), 369, y);
    ctx.textAlign = 'left';
    y += 16;
    
    ctx.font = 'bold 10px "Kantumruy Pro", "Inter", sans-serif';
    ctx.fillText((isKh ? 'ការប្រាក់/ថ្ងៃ' : 'Interest/Day') + ":", 15, y);
    ctx.textAlign = 'right';
    ctx.fillText(formatCurrency(ticket.interestRate, 'KHR'), 369, y);
    ctx.textAlign = 'left';
    y += 20;

    // If Redeemed
    if (ticket.status === 'redeemed') {
        drawDashedLine(ctx, y);
        y += 18;
        
        ctx.font = 'bold 10px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillStyle = '#000000';
        ctx.fillText((t('status') || "ស្ថានភាព") + ":", 15, y);
        ctx.textAlign = 'right';
        ctx.fillText((t('redeemed') || "បានលោះវិញ") + ` (${ticket.redeemedDate})`, 369, y);
        ctx.textAlign = 'left';
        y += 16;
        
        ctx.fillText((t('interestPaid') || "ការប្រាក់បង់") + ":", 15, y);
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(ticket.redeemedInterestPaid || 0, 'KHR'), 369, y);
        ctx.textAlign = 'left';
        y += 16;
        
        ctx.fillText((t('totalCashIn') || "ប្រាក់រួម") + ":", 15, y);
        ctx.textAlign = 'right';
        let totalStr = ticket.currency === 'USD' ?
            `$${(ticket.redeemedTotalPaid - ticket.redeemedInterestPaid).toLocaleString()} + ${formatCurrency(ticket.redeemedInterestPaid || 0, 'KHR')}` :
            `${formatCurrency(ticket.redeemedTotalPaid, 'KHR')}`;
        ctx.fillText(totalStr, 369, y);
        ctx.textAlign = 'left';
        y += 20;
    }
    
    // Additional borrows session table
    if (ticket.additionalLoans && ticket.additionalLoans.length > 0) {
        drawDashedLine(ctx, y);
        y += 18;
        
        ctx.font = 'bold 10px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillText(isKh ? 'ខ្ចីប្រាក់បន្ថែម៖' : 'Additional Borrowings:', 15, y);
        y += 16;
        
        // Draw small Table Headers
        ctx.font = 'bold 8px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillText(isKh ? 'លើក' : 'No', 15, y);
        ctx.fillText(isKh ? 'ប្រាក់បន្ថែម' : 'Amount', 60, y);
        ctx.fillText(isKh ? 'ការប្រាក់/ថ្ងៃ' : 'Int/Day', 170, y);
        ctx.fillText(isKh ? 'ថ្ងៃខ្ចី' : 'Date', 270, y);
        y += 12;
        
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(15, y - 2);
        ctx.lineTo(369, y - 2);
        ctx.stroke();
        
        // Primary
        let additionalPrincipalSum = ticket.additionalLoans.reduce((sum, p) => sum + p.amount, 0);
        let primaryAmount = Math.max(0, ticket.loanAmount - additionalPrincipalSum);
        ctx.font = '8px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillText(isKh ? '១ (ដើម)' : '1st', 15, y);
        ctx.fillText(formatCurrency(primaryAmount, ticket.currency), 60, y);
        ctx.fillText(formatCurrency(ticket.interestRate, 'KHR'), 170, y);
        ctx.fillText(ticket.pawnDate, 270, y);
        y += 12;
        
        ticket.additionalLoans.forEach((loan, idx) => {
            let ord = idx + 2;
            let ordKh = ord === 2 ? '២' : (ord === 3 ? '៣' : (ord === 4 ? '៤' : (ord === 5 ? '៥' : ord)));
            ctx.fillText(isKh ? `លើក${ordKh}` : `${ord}th`, 15, y);
            ctx.fillText(formatCurrency(loan.amount, ticket.currency), 60, y);
            ctx.fillText(formatCurrency(loan.interestRate, 'KHR'), 170, y);
            ctx.fillText(loan.pawnDate, 270, y);
            y += 12;
        });
        y += 10;
    }
    
    // Terms & Conditions
    if (!isPage2) {
        drawDashedLine(ctx, y);
        y += 18;
        
        ctx.font = 'bold 9px "Kantumruy Pro", "Inter", sans-serif';
        ctx.fillText(isKh ? 'លក្ខខណ្ឌ និងការបញ្ជាក់បន្ថែម៖' : 'Terms & Conditions:', 15, y);
        y += 14;
        
        ctx.font = '8px "Kantumruy Pro", "Inter", sans-serif';
        let termsText = t('receiptTerms') || "";
        y = wrapCanvasText(ctx, termsText, 15, y, 350, 12);
        y += 10;
    }
    
    // Crop canvas to actual height
    const finalCanvas = document.createElement('canvas');
    finalCanvas.width = 384;
    finalCanvas.height = y + 20;
    const finalCtx = finalCanvas.getContext('2d');
    
    // Draw source canvas to final canvas
    finalCtx.drawImage(canvas, 0, 0);
    return finalCanvas;
}

// Print Receipt logic via Web Bluetooth
async function printTicketViaBluetooth(id) {
    let ticket = state.tickets.find(t => t.id === id);
    if (!ticket) return;
    
    if (!btCharacteristic) {
        const confirmConnect = confirm(state.lang === 'kh' ? 
            "អ្នកមិនទាន់បានភ្ជាប់ទៅកាន់ Bluetooth Printer នៅឡើយទេ។ តើចង់ភ្ជាប់ឥឡូវនេះទេ?" : 
            "Bluetooth printer is not connected. Would you like to connect now?");
        if (confirmConnect) {
            const connected = await connectBluetoothPrinter();
            if (!connected) return;
        } else {
            return;
        }
    }
    
    try {
        addLog("PRINT_BLUETOOTH_START", `Initiated Bluetooth print for ticket ${ticket.id}`);

        // Generate Canvas 1 (Customer Receipt)
        const canvas1 = drawReceiptToCanvas(ticket, false);
        const bytes1 = convertCanvasToEscPos(canvas1);
        
        // Generate Canvas 2 (Shop Copy)
        const canvas2 = drawReceiptToCanvas(ticket, true);
        const bytes2 = convertCanvasToEscPos(canvas2);

        // Combine bytes
        const allBytes = [...bytes1, ...bytes2];

        // Send to printer in chunks
        const CHUNK_SIZE = 100;
        const uint8Data = new Uint8Array(allBytes);
        
        for (let i = 0; i < uint8Data.length; i += CHUNK_SIZE) {
            const chunk = uint8Data.slice(i, i + CHUNK_SIZE);
            await btCharacteristic.writeValue(chunk);
            await new Promise(resolve => setTimeout(resolve, 30)); // 30ms throttle delay
        }

        addLog("PRINT_RECEIPT_BLUETOOTH", `Successfully printed ticket ${ticket.id} via Bluetooth`);
        alert(state.lang === 'kh' ? "បោះពុម្ពវិក្កយបត្របានជោគជ័យ!" : "Receipt printed successfully!");
    } catch (err) {
        console.error("Printing failed:", err);
        alert((state.lang === 'kh' ? "ការបោះពុម្ពបរាជ័យ៖ " : "Printing failed: ") + err.message);
    }
}

