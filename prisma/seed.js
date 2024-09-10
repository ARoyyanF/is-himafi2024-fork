import { PrismaClient } from "@prisma/client";
import { Role } from "@prisma/client";

const prisma = new PrismaClient();

const akunPesertas = [
    {nim: "10223001", name: "Muhammad Zamil Muthahhari",},
    {nim: "10223002", name: "Alyani Mazaya Inaldo",},
    {nim: "10223003", name: "Belva Syazwina Herman",},
    {nim: "10223004", name: "Ryan Gibran P. Sihaloho",},
    {nim: "10223005", name: "Rizka Hasna Tiara",},
    {nim: "10223006", name: "Ahmad Fadillah",},
    {nim: "10223007", name: "Maudy Rahma Tsabitha",},
    {nim: "10223008", name: "Raya Nouvalli Pasha",},
    {nim: "10223009", name: "Marsha Zhalyka Febrianthy",},
    {nim: "10223010", name: "Kayla Faza Herfian",},
    {nim: "10223011", name: "Nadila Gusriyani",},
    {nim: "10223012", name: "Adinda Mutiara Salsabiela",},
    {nim: "10223013", name: "Hasna Ayesha Bastari",},
    {nim: "10223014", name: "Nazwa Ikmalia Putri Purba",},
    {nim: "10223015", name: "Ni'ma Auliya Mulyana",},
    {nim: "10223016", name: "Zakira Khairunnisa Jumahaldi",},
    {nim: "10223017", name: "Yafi Zainul Muttaqin",},
    {nim: "10223018", name: "Atthur Seine Jayasasmita",},
    {nim: "10223019", name: "Syauqi Fatah Mulkillah",},
    {nim: "10223020", name: "Atra Ardiyanto Alam Purnama",},
    {nim: "10223021", name: "Tamam Dwi Amanulloh",},
    {nim: "10223022", name: "Shafa Zahra Afifah",},
    {nim: "10223023", name: "Muhammad Ridwan Mulyana",},
    {nim: "10223024", name: "Sri Hestin Berliana",},
    {nim: "10223025", name: "Calvin Sabastian Tanzil",},
    {nim: "10223026", name: "Naifa Ahnaf Sabita",},
    {nim: "10223027", name: "Magnalia Beatifica Dei",},
    {nim: "10223028", name: "Mateus Rolamro P. Sidabutar",},
    {nim: "10223029", name: "Santun Wiwaha",},
    {nim: "10223030", name: "Muhammad Ataa Aqil D",},
    {nim: "10223031", name: "Angel Betesda Silaban",},
    {nim: "10223032", name: "Muhammad Surya Kusuma",},
    {nim: "10223033", name: "Olvandri Nouva Pratama",},
    {nim: "10223034", name: "Fadil S Omar Attala",},
    {nim: "10223035", name: "Kuny Roihanata Bintarti",},
    {nim: "10223036", name: "Muhammad Azfa Mukhlis",},
    {nim: "10223037", name: "Dietrich Pepalem Tarigan",},
    {nim: "10223038", name: "Abraham Heven Philia Saragih",},
    {nim: "10223039", name: "Aldi Wahyu Permana",},
    {nim: "10223040", name: "Chaesya Jasmine Wanda Islami",},
    {nim: "10223041", name: "Abar Almazari",},
    {nim: "10223042", name: "Nurul Izzati",},
    {nim: "10223043", name: "Tasniem Asyifa Wahyudi",},
    {nim: "10223044", name: "Nadyazir Rahmah Siregar",},
    {nim: "10223045", name: "Naufal Aulia Pramadhana",},
    {nim: "10223046", name: "Mohammad Adil Ramdhi Fadhila",},
    {nim: "10223047", name: "Muhammad Affan",},
    {nim: "10223048", name: "John Derrick Halomoan Tambunan",},
    {nim: "10223049", name: "Muhammad Afiq Iqbal Saputra",},
    {nim: "10223050", name: "Gading Manggala Ramadanu",},
    {nim: "10223051", name: "Azizah Pribadi Istiqomah",},
    {nim: "10223052", name: "Najmicitta Khalif Fauzana",},
    {nim: "10223053", name: "Lidia Safira Adiibah",},
    {nim: "10223054", name: "Rubent Titus Nainggolan",},
    {nim: "10223055", name: "Aliif Fahrur Abi Hanafi",},
    {nim: "10223056", name: "Petra Siahaan",},
    {nim: "10223057", name: "Gea Imelda Hanna Saweri",},
    {nim: "10223058", name: "Raden Vio Brahmantyo",},
    {nim: "10223059", name: "Sherina Dwi Ariani",},
    {nim: "10223060", name: "Adrian Pandjie Ramdhani",},
    {nim: "10223061", name: "Destira Ainur Rahmah",},
    {nim: "10223062", name: "Reffanditya Aski Putra",},
    {nim: "10223063", name: "Jack Lucas Christian",},
    {nim: "10223064", name: "Muhammad Rasyid Ghifari",},
    {nim: "10223065", name: "Nauroh Salsabila",},
    {nim: "10223066", name: "Muhammad Fahreza Daffa Ayyasy",},
    {nim: "10223067", name: "Gwen Sevilen",},
    {nim: "10223068", name: "Nashwan Iqbal Ramdhani",},
    {nim: "10223069", name: "Dafina Sellisya Narendra",},
    {nim: "10223070", name: "Kayla Adinda Nasution",},
    {nim: "10223071", name: "Nazifa",},
    {nim: "10223072", name: "Vincent Constantine Darmawan",},
    {nim: "10223073", name: "Fathiyah Shidqiya Sadida",},
    {nim: "10223074", name: "Reyhan Nugraha Akbar",},
    {nim: "10223075", name: "Muhammad Syamsuddiin",},
    {nim: "10223076", name: "Salsyabilla Puteri Edora",},
    {nim: "10223077", name: "Lim, Edbert Valentino Halim",},
    {nim: "10223078", name: "Kaesya Paradilla",},
    {nim: "10223079", name: "Ilham Aimanthariq Haripradana",},
    {nim: "10223080", name: "Khansa Muthia Abrar",},
    {nim: "10223081", name: "Hani Lutfiana Febriani Ode",},
    {nim: "10223082", name: "Meizar Gutama",},
    {nim: "10223083", name: "Ikbar Fauzul Mubin Ruhimat",},
    {nim: "10223084", name: "Valinda Zikra Markus",},
    {nim: "10223085", name: "Azzahra Putriya Ahmad",},
    {nim: "10223086", name: "Zidan Ramadhan Rusdiana",},
    {nim: "10223087", name: "Hairil Aulia",},
    {nim: "10223088", name: "Efra Feyza",},
    {nim: "10223089", name: "Nadya Fitri Amelia",},
    {nim: "10223090", name: "Akhmad Zidane Luqman",},
    {nim: "10223091", name: "Sabila Fauziyah",},
    {nim: "10223092", name: "Tazkia Sahla Fatihah Qurrota A",},
    {nim: "10223093", name: "Fathiyyahdi At Thariq",},
    {nim: "10223094", name: "Kayla Sabira Yusuf",},
    {nim: "10223095", name: "Nabilah Zulfa Kudrati",},
    {nim: "10223096", name: "Nindya Khoeroni Safitri",},
    {nim: "10223097", name: "Muhammad Zahranhaq Algifar",},
    {nim: "10223098", name: "Ardhika Maradana Sumirat",},
    {nim: "10223099", name: "Yehezkiel Rusniyanto Massa",},
    {nim: "10223100", name: "Noraini",},
    {nim: "10223101", name: "Adiyasa Pratama Putra",},
    {nim: "10223102", name: "Nairaya Zaizafun",},
    {nim: "10223103", name: "Kaisa Nida Assafira",},
    {nim: "10223104", name: "Zharfan Aksa Khoiri",},
    {nim: "10223105", name: "Yazidhariz Farghani Kesumajana",},

    {nim: "10222001", name: "Ahmad Haffiz Fildzah",},
    {nim: "10222002", name: "Kamilia Tazkia Rahma Andini",},
    {nim: "10222003", name: "Muhammad Rakhsaa Laksamana Putra",},
    {nim: "10222004", name: "Rifqi Adzhimil Huda Thalib",},
    {nim: "10222005", name: "Muhammad Fauzan Adhiima",},
    {nim: "10222006", name: "Elang Aditya Putra",},
    {nim: "10222007", name: "Jonathan Sugijanto",},
    {nim: "10222008", name: "Misbahullaila",},
    {nim: "10222009", name: "Husnya Nur Aziza",},
    {nim: "10222010", name: "Muhammad Fakhri Najmi Al-farobi ",},
    {nim: "10222011", name: "Akhtarriza Harafah",},
    {nim: "10222012", name: "Rafi Ramdhani Naufal",},
    {nim: "10222013", name: "Arum Sari Mufada",},
    {nim: "10222014", name: "Darell Timothy Tarigan",},
    {nim: "10222015", name: "Salma Amirah Fathonah",},
    {nim: "10222016", name: "Duke Ariqoh",},
    {nim: "10222017", name: "Kansha Ghaffaru Firmansyah",},
    {nim: "10222018", name: "Rahma Citra Insani",},
    {nim: "10222019", name: "Neisha Ghina Zalfa",},
    {nim: "10222020", name: "Sekar Ayu Widhastri",},
    {nim: "10222021", name: "Muhammad Al Haq Sulaksono",},
    {nim: "10222022", name: "Mukhammad Hisyam Prakoso",},
    {nim: "10222023", name: "Nada Galuh Khalisa",},
    {nim: "10222024", name: "Indhira Sri Wirahma ",},
    {nim: "10222025", name: "Rifki Nugraha ",},
    {nim: "10222026", name: "Naufaldo Indra Pratama ",},
    {nim: "10222028", name: "Safitri",},
    {nim: "10222029", name: "Ridho Pratama Mahendra ",},
    {nim: "10222030", name: "Muhamad Arifudin",},
    {nim: "10222031", name: "Ihyaudin Hasbillah ",},
    {nim: "10222032", name: "Zidan Ibrahim Setiawan",},
    {nim: "10222033", name: "Eunike Nanda Maharani",},
    {nim: "10222034", name: "Matthew Waraney Somahe Pasoreh",},
    {nim: "10222035", name: "Muhammad Nauval Ar Rauf",},
    {nim: "10222036", name: "Nashwan Chakap Nanggala",},
    {nim: "10222037", name: "Ayatullah Ibrahim Firas",},
    {nim: "10222038", name: "Mufti Afifur Rahman",},
    {nim: "10222039", name: "Saidah Nuraini",},
    {nim: "10222040", name: "Izzah Huwaidah ",},
    {nim: "10222041", name: "Keisha Nabila Syaira Wanggai",},
    {nim: "10222042", name: "Shafrina Farhyan",},
    {nim: "10222043", name: "Raidah Yanfa Adilah ",},
    {nim: "10222044", name: "Muhammad Fathin Abdul Aziz",},
    {nim: "10222045", name: "Huzain Hadi Purnomo",},
    {nim: "10222046", name: "Adi Tio Nugroho",},
    {nim: "10222047", name: "Anggrita Naya Maulidina",},
    {nim: "10222048", name: "Nasywa Arinda Adji",},
    {nim: "10222049", name: "Afrah Damara Yani",},
    {nim: "10222050", name: "Ahmad Alfian Tri Saputro",},
    {nim: "10222051", name: "Reizqia La'salina",},
    {nim: "10222052", name: "Hilman Al Farizi",},
    {nim: "10222053", name: "Mulyadi Prasojo",},
    {nim: "10222054", name: "Sulthonniyah Yaumi Saputri ",},
    {nim: "10222055", name: "Rafiq Althaf Ramadhan Harjadinata",},
    {nim: "10222057", name: "Zahra Nafisah",},
    {nim: "10222058", name: "Rezariansa Gema Akbar Sindula",},
    {nim: "10222059", name: "Fadhil Fatih Shiddiq ",},
    {nim: "10222060", name: "Petrus fernando rizky",},
    {nim: "10222061", name: "Arya Abhyasa Wicaksana",},
    {nim: "10222062", name: "Huwaida Badia Abidin",},
    {nim: "10222063", name: "Idzaja Anashrullohi Walfath",},
    {nim: "10222064", name: "Anjini Meta",},
    {nim: "10222065", name: "Ahmad Royyan Fatah",},
    {nim: "10222066", name: "Melinda Alberta",},
    {nim: "10222067", name: "Dyah Rifka Wydiasti",},
    {nim: "10222068", name: "Syifa Aulia Vernando",},
    {nim: "10222069", name: "Fadlur Rahman",},
    {nim: "10222070", name: "Muhammad Ya'mal Amilun",},
    {nim: "10222071", name: "Elvis Dio Pangalila",},
    {nim: "10222072", name: "Athallah afiq slamet",},
    {nim: "10222073", name: "Tsabita Kinanti Najwa Priatna",},
    {nim: "10222074", name: "Pires Andriansyah",},
    {nim: "10222075", name: "Anggi Faradyba ",},
    {nim: "10222076", name: "Cinta Aqila Tasabita",},
    {nim: "10222077", name: "Fitria Latifah ",},
    {nim: "10222079", name: "Nadhim Muqsith Robbani ",},
    {nim: "10222080", name: "Azwa Aliyah Zaki",},
    {nim: "10222081", name: "Khusnil Arifandi Purnama",},
    {nim: "10222082", name: "Mahfud Ihsan Amaly",},
    {nim: "10222083", name: "Aufa Dirham Hafizh",},
    {nim: "10222084", name: "Afiifah Mell'aini ",},
    {nim: "10222085", name: "Sean Maximilliano Raffaele Moechtar",},
    {nim: "10222086", name: "Al Farabi Haikal El Fadhil",},
    {nim: "10222087", name: "Muhammad Kamal",},
    {nim: "10222088", name: "Moch Andrian Akbar",},
    {nim: "10222089", name: "Gerizim El Masih",},
    {nim: "10222090", name: "Afifah Ulya Nadira ",},
    {nim: "10222091", name: "Ashma Nisa Sholihah Adma",},
    {nim: "10222092", name: "Alfatchurrachman",},
    {nim: "10222093", name: "Naura Fahira Subekti",},
    {nim: "10222094", name: "Ramdhan Rusman Nuryadin ",},
    {nim: "10222095", name: "Vivian Indriani Astuti ",},
    {nim: "10222096", name: "Dimas Rizki Saputra",},
    {nim: "10222097", name: "Rizanti Heningtyas",},
    {nim: "10222098", name: "Mariah Qibtihadlyuni",},
    {nim: "10222099", name: "Indah Nurhayati",},
    {nim: "10222100", name: "Naila Malika",},
    {nim: "10222102", name: "Tessa Santika ",},
    {nim: "10222103", name: "Eliza Putri Hapsani",},
    {nim: "10222104", name: "Juniar Risalatul Awaliyah ",},
    {nim: "10222105", name: "Mashya D E S Pattiselanno ",},
    {nim: "10222106", name: "Bayu Ridho Abd. Gani",},
    {nim: "10222107", name: "Rafa Zahira Suhaila",},
    {nim: "10222108", name: "Ryan Ramadhan",},
    {nim: "10222109", name: "Jonathan Lijaya",},
    {nim: "10222110", name: "Aisyah Azzahra Hibatillah Aji",},
    {nim: "10222111", name: "Nanda Eka Agustina",},
    {nim: "10222112", name: "Nasya Nabila",},
    {nim: "10222113", name: "Muhammad Miftah Fauzan",},
    {nim: "10222114", name: "Fauzan Akbar Ramadhan ",},
    {nim: "10222115", name: "Winda Vellisa Virgiani",},
    {nim: "10222116", name: "Muhamad Daryl Putra Akbar Kusdinar",},
    {nim: "10222117", name: "Geraldhika Revaldo Arya Rinding",},
    {nim: "10222118", name: "Ilmania Syakira ",},
    {nim: "10222119", name: "Salmaa Kaelya Dharmawan ",},
    {nim: "10222120", name: "Jihan Prihatini",},
    {nim: "10222121", name: "Hanief Azmi Rahadi",},
    {nim: "10222122", name: "Aini Qolbi Al Qodir",},
    {nim: "10222123", name: "Gisela Anisti",},

    
    {nim: "1", name: "pesertaDummy1", passwordOverride: false, password: "1"},
    {nim: "2", name: "pesertaDummy2", passwordOverride: false, password: "2"},
]

const akunPanits = [
    {name: "panitia", nim: "10222000", passwordOverride: false, password: "965d1d1288fda83d002cf4d35dd8d02fe5c3e1fbe6a5d030ebb1aa9798df4f1e9cbf5e927af7914a6457e5af6a982d0637df4f57ed61ea396bc12f8da14ab752",role: Role.ADMIN},
]

const load = async () => {
    try {
        // //!seed akun peserta 
        // const akunPeserta = 
        await prisma.user.createMany({
                data: akunPesertas, skipDuplicates: true,
        });
        // //!seed akun panit
        // const akunPanit = 
        await prisma.user.createMany({
                data: akunPanits, skipDuplicates: true,
        });
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
};
await load()