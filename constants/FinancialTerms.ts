export interface FinancialTerm {
  title: string;
  description: string;
  letter: string;
  id?: string;
}

export const financialTerms: FinancialTerm[] = [
  {
    id: "1",
    title: "A Tipi Yatırım Fonu Nedir?",
    description: `Belirli bir yatırım sayesinde kâr elde etmek isteyenler, fon çeşitlerinden kolayca faydalanabilir. Fonların yatırımcılara sunduğu en büyük avantajlardan biri, farklı stratejilere uygun bir yapıda olmalarıdır. Bu özellik, piyasanın çeşitlenmesine ve özgür bir ekonominin oluşmasına yardımcı olur. Yatırım fonları A ve B tipi olmak üzere iki kısma ayrılır. 

A tipi yatırım fonu nedir sorusuna, genel olarak hisse senetlerinin yoğunlukta olduğu bir tür şeklinde cevap verilebilir. Bu fonda en az %25’i Türk şirketlerine ait hisse senetlerinin bulunması gerekir. Portföy dağılımında hisse senedi ağırlığının fazla olması, bu fon çeşidinin yüksek riske sahip olduğunu gösterir. Bunun yanı sıra A tipi yatırım fonu getirileri de bir hayli yüksek olur. Örnek olarak yatırımcı, bir gün içerisinde parasına değer katabilir ya da parasının büyük bir kısmını kaybedebilir. A tipi fon genellikle risk alan yatırımcılar tarafından tercih edilir. Uzun vadeli yatırımcılar için pek uygun bir seçenek değildir. “A tipi yatırım fonu/ortaklığı nedir?” sorusunun cevabı bu şekilde açıklanabilir. `,
    letter: "A"
  },
  {
    id: "2",
    title: "Acente Nedir?",
    description: `Acente, günlük hayatta sıklıkla karşılaşılan kavramlar arasındadır. Bu aracı kuruluşa pek çok iş kolunda rastlamak mümkündür. Bu bağlamda acente nedir sorusu sorulabilir. Söz konusu soru, bir ticari işletme adına anlaşmalar yapan kuruluş olarak yanıtlanabilir. Acente, taraflar arası akde dayanarak belirli bir bölgede ticari faaliyette bulunan aracı kuruluştur. Asıl ticari işletme adına sözleşmeler düzenleyerek hizmet sağlar. 

Aracı kuruluşlar ticari vekilden ve temsilcilikten farklı çalışır. Bu tür işletmeler Türk Ticaret Kanunu’na göre tanımlanır ve çalışma çerçeveleri belirlenir. Herhangi bi konuda doğrudan hizmet sağlamazlar; yalnızca bağlı oldukları sözleşme uyarınca çalışırlar. Hizmet sunma konusundan esas şirket sorumludur. Temsilci şubeler gerçekleştirdikleri sözleşmeler üzerinden belirli bir oranda komisyon alır. Bu ücret kimi durumlarda bir yönetmelik veya kanun ile belirlenir. Bazı durumlarda ise hizmet karşılığında alınacak bedel, esas şirket ve acente arasında yapılan antantlar ile belirlenir.`,
    letter: "A"
  },
  {
    id: "3",
    title: "Açığa Satış Nedir? Açığa Satış Nasıl Yapılır?",
    description: `Açık pozisyon, yatırımcıların düşmekte olan bir finansal varlıktan kâr etmek üzere başvurdukları bir alım-satım stratejisidir. “Short position” olarak da bilinen açık pozisyonda önce yüksek fiyattaki varlıklar ödünç alınır. Ardından fiyat düştüğünde bu varlıklar gerçekten satın alınıp aracıya iade edilir.  

Açık pozisyon ne demek sorusunun cevabı borsa işlemleri kapsamında incelenmelidir. Bu strateji, hisse senetlerinin değerindeki düşüşten kazanç elde etmek üzere kullanılabilir. Normalde yatırımcılar, fiyatı yükseldiğinde satıp kâra geçmeyi planlayarak hisse senedi alır. Açık pozisyon ise bu durumun tam tersidir. Yatırımcılar, aracı kurumdan özel bir hesap dâhilinde ödünç olarak aldıkları hisseleri satarak açık pozisyon yaratır. Bu sürece açığa satış denir.`,
    letter: "A"
  },
  {
    id: "4",
    title: "Açık Piyasa İşlemleri (APİ) Nedir?",
    description: `Açık piyasa işlemleri; Türkiye Cumhuriyet Merkez Bankası’nın piyasada dolaşan para miktarını kontrol etmek maksadıyla hazine bonosu, hisse senedi veya tahvil alım satımına gitmesini ifade eder. Burada asıl amaç, para arzını istenen yönde etkilemektir. Ülkemizde açık piyasa işlemleri, Merkez Bankası tarafından likiditeyi düzenlemek amacıyla kullanılır. Bu işlemlerin genel hatları, Merkez Bankası Kanunu’nun 52. ve 56. maddelerinde çizilmiştir. APİ yalnızca para politikası hedefleri ile gerçekleştirilebilir, hazine ya da kamu kurum ve kuruluşları için kredi sağlamak amacıyla yapılamaz. Ayrıca kanuna göre bu işlemlerin vadesi, 91 günden fazla olamaz. 

TCMB, açık piyasa işlemlerini birkaç işlem türünü kullanarak gerçekleştirir. Açık piyasa işlemleri, etkileri tam olarak ölçülebildiği için son derece avantajlıdır. Ayrıca APİ’ler, kontrol edilebilir ve tersine çevrilebilir bir yapıya sahiptir. Bu da açık piyasa işlemlerini daha güvenilir bir hâle getirir. Açık piyasa işlemleri, küçük alım-satımlar yoluyla da gerçekleştirilebilir. Bu durum, para tabanı üzerinde minimal değişikliklerin yapılmasına dâhi izin verir. Tüm bu avantajlar ve hızlı sonuçlar ortaya koymasından ötürü Türkiye Cumhuriyet Merkez Bankası, açık piyasa işlemlerini sıklıkla tercih eder.`,
    letter: "A"
  },
  {
    id: "5",
    title: "Ağırlıklı Ortalama Fiyat Nedir?",
    description: `Ağırlıklı ortalama fiyat, hisse senedi yatırımı yapanlara veriler sunan bir kavramdır. Piyasalarda hisse senetleri belirli senanslarda daha fazla işlem görür. Senetlerin alım satımlarına dair işlemlerin fazla olduğu bu seanslarda ağırlıklı ortalama fiyat hesaplaması gerçekleştirilir. Yani bu kavram, bir hisse senedinin ağırlıklı olarak hangi seansta nasıl bir fiyat aralığı üzerinden el değiştirdiğini göstermektedir. 

Bu oran, senedin bir sonraki seansa kadar aktarılmasında ve fiyatının belirlenmesinde direkt olarak etkilidir. Söz konusu fiyat, en kısa tabirle hisse senetlerinin miktar ağırlıklı fiyatı olarak da ifade edilebilir. Ağırlıklı ortalama fiyat nedir sorusuna yanıt verdikten sonra bu oranının nasıl hesaplanacağına da değinmek gerekir. Çünkü bu fiyat, özellikle hisse senedi yatırımcılarına önemli ölçüde yol gösterir.`,
    letter: "A"
  },
  {
    id: "6",
    title: "Akreditif Nedir?",
    description: `Akreditif nedir sorusu, kısaca bir ödeme yöntemi şeklinde cevaplanabilir. Tarafların ilk defa ticaret yaptığı durumlarda alıcı ve satıcı birbirini tanımaz. Bu yüzden kişiler, birbirine karşı olan sorumluluğu bankalar aracılığıyla resmîleştirir. Lehtar sıfatıyla hareket eden bankanın düzenlemiş olduğu belge, akreditif olarak kabul edilir. 

Akreditif Özellikleri Nelerdir?
Akreditif özelliklerinin başında kredi limiti gelir. Taraflar, birbirlerine karşı sorumluluklarını resmîleştirmek için bir kredi belgesi kullanılır. Bu şekilde büyük miktarların ödemesi gerçekleştirilebilir. Ek olarak bu yöntem, uzun vadeli işlemler için de tercih edilebilir. `,
    letter: "A"
  },
  {
    id: "7",
    title: "Alım Satım Opsiyonu Nedir?",
    description: `Alım satım opsiyonu, başka bir varlığa bağlı olarak değişen türev ürünlerine denir. Bunlar; opsiyona ve vadeye bağlı olarak oluşturulan belli bir finansal ürünü, malı veya ekonomik göstergeyi almak ya da satmak için hazırlanan sözleşmelerdir.   

Alım satım opsiyonu nedir sorusuna daha ayrıntılı bir cevap verilebilir. Bu finansal işlemler, alıcı ve satıcı olmak üzere iki taraf arasında yapılır. Bu sözleşmede alıcı, ödeyeceği belli bir opsiyon miktarı karşılığında spesifik bir vadeye kadar belirlenen fiyat üzerinden finansal göstergeyi satın alma hakkına sahip olur. Buna ek olarak satıcı, sözleşmeden doğan hakları doğrultusunda malı yasal yollardan satar. `,
    letter: "A"
  },
  {
    id: "8",
    title: "Alım Satıma Aracılık Nedir?",
    description: `Alım satıma aracılık faaliyetleri, daha önceden ihraç edilen sermaye piyasası araçlarının yatırımcılar tarafından alınıp satılması şeklinde özetlenebilir. Bu süreç, Sermaye Piyasası Mevzuatı’na uygun şekilde ilerler. İhraç edilen sermaye piyasası araçları ise aracılık sıfatıyla ve ticari amaçla alınıp satılabilir. Daha önceden halka arz edilen sermaye piyasası araçları, ikinci el piyasada işlem görür. Bu süreç, alım satıma bağlı aracılık faaliyetinde belirlenen bir sözleşme çerçevesinde gerçekleşir. 

Alım satıma aracılık, sermaye piyasasındaki yatırımcı kuruluşların en önemli fonksiyonlarından bir tanesidir. İkinci el piyasayı ilgilendiren bu süreç, borsa içinde ya da dışında kolayca gerçekleşebilir. Borsa dışındaki kurumlarda yetki belgesinin bulunması gerekir. Sermaye Piyasası Mevzuatları’na göre alım satıma aracılık faaliyetleri, belirli kriterler dâhilinde sınıflandırılır. Söz konusu faaliyetler; emir iletimi, işlem ve portföy aracılığı olarak sıralanabilir. `,
    letter: "A"
  },
  {
    id: "9",
    title: "Alış (Bid) Nedir?",
    description: `Alış (Bid), finans piyasasında aktif olarak işlem yapan katılımcıların döviz ve menkul kıymet gibi değerleri almaya istekli oldukları fiyattır. Bu değer, piyasada işlem yapmak isteyen kişilerin kârını maksimize etmek için dikkat ettiği konuların başında gelir. Alış (Bid) nedir sorusu, piyasadaki değerlerin yatırım amaçlı alım süreçlerindeki fiyatlandırması şeklinde cevaplanabilir. 

Katılımcı, pozisyonunun çeşidine göre en iyi fiyattan alım yapmak ister. Bu noktada en düşük fiyattan almak ve en yüksekten satmak tüm yatırımcıların hedeflediği bir durumdur. Anlık piyasa verilerine göre değişen bid değeri, alış yapılacak değerin satış hacmini de etkiler. `,
    letter: "A"
  },
  {
    id: "10",
    title: "Analitik Bilanço Nedir?",
    description: `İşletmelerin ilgili gider ve gelir kalemlerinin toplandığı finansal tablo olan bilanço, aktif ve pasif olmak üzere iki farklı taraftan oluşmaktadır. Aktif kalemleri kendi içerisinde dönen varlıklar ve duran varlıklar olarak ayrılmaktadır. İşletmenin ilgili faaliyet döneminde var olan ve ilgili dönemde fayda sağlayan varlıkları, dönen varlık olarak isimlendirilmektedir. Dönen varlıklar denildiğinde, işletmenin maksimum 1 yıl içerisinde paraya çevirebileceği varlıkları kastedilmektedir. 

Dönen varlıklar içerisinde işletmenin sahip olduğu nakit ve nakit benzerleri, stokları ve ticari alacakları yer almaktadır. İşletmenin ilgili faaliyet döneminden daha uzun süre tüketebildiği veya kullanabildiği varlıkları ise duran varlıklar olarak adlandırılmaktadır. İşletmenin sahip olduğu makine, teçhizat, bina, arsa ve arazi, haklar ve şerefiye gibi kalemleri duran varlıklar içerisinde bulunur. `,
    letter: "A"
  },
  {
    id: "11",
    title: "Anonim Şirket Nedir?",
    description: `Anonim şirket, kanuna uygun her amaç üzerine kurulabilen tüzel kişiliktir. Yatırımcılar, yeni bir işe atılmak veya var olan işletmeyi büyütmek için bu şirket tipine yönelir. Durum böyle olunca anonim şirket nedir, bilmek gerekir. Anonim şirket, adından da anlaşılacağı üzere hisseleri nama yazılı olmayan yatırım türüdür. Bu topluluk, borçlarından dolayı yalnızca mal varlığıyla sorumludur. Sermaye şirketi olmanın bütün özelliklerini taşıyan anonim kuruluş, tüm ekonomik faaliyetlerde aynı şekilde varlığını sürdürebilir. 

Çoğunluk esasıyla yönetilen bu sistem, tek kişiden veya sayısız ortaktan oluşabilir. Anonim şirket, tescilin ardından tüzel kişilik kazanır. Şirketin ortakları da gerçek veya tüzel kişiliklerden oluşur. Ancak ortak sayısı fark etmeksizin bu şirket türünün sermayesi, en az 50.000 TL olmalıdır. Halka açık olmayan şirketlerde ise bu rakam 100.000 TL’den daha az olamaz. `,
    letter: "A"
  },
  {
    id: "12",
    title: "Anüite Nedir?",
    description: `Anüite, belirli bir sürede eşit aralıklarla ve tutarlarla aynı faiz oranı üzerinden gerçekleştirilen ödemeler toplamına verilen isimdir. Kavrama dair açıklamayı daha detaylı hâle getirmeden önce bu ödeme biçimine en sık rastlanan alanları belirtmekte fayda vardır. Kira ödemeleri, tahvil faizleri, arazi gelirleri ve eşit taksitlere bölünen krediler bu kapsamda yer alır. 

Örneğin, bankaya beş yıl süreyle ve aynı faizle her ay 2.000 TL taksit yatırılması, anüite ödeme olarak adlandırılır. Benzer olarak her ay yapılan kira ödemeleri de bir diğer örnek olarak gösterilebilir. `,
    letter: "A"
  },
  {
    id: "13",
    title: "Apel İşlemi Nedir?",
    description: `Apel kavramı hem borsa ile hem de genel anlamda ticaretle ilgilenenlerin aşina olduğu kavramlardandır. Apel, ödeme çağrısı anlamına gelir. Özellikle anonim ortaklık süreçlerinde kullanılır. Bilindiği gibi anonim ortaklıklar tek borç ortaklığı şeklinde kurulur. Yani pay sahiplerinin tek bir borcu olur. Her bir pay sahibi, taahhüt edilen borcun kendisine düşen kısmını ödemelidir. 

Ortaklıkların kurulması aşamasında ya da sermaye artırımı sürecinde nakdi sermaye taahhüt edilmişse pay bedelinin dörtte biri ortaklar tarafından ödenmelidir. Bu model genel kurul ya da sözleşmeler yoluyla daha yüksek bir oranda da saptanabilir. İşte apel çağrısı burada devreye girer. Bu çağrı ile ortaklıktaki pay sahiplerinin borçlarını ödemeleri hedeflenir. Türk Ticaret Kanunu’nda herhangi bir ortaklık neticesinde ortaya çıkacak hak ve yükümlülükler ayrıntılı bir şekilde tanzim edilmiştir. Bu çağrıda kanun koyucu tarafından ortaklık işlemlerinin sürekli ve kesintisiz devam etmesini sağlamak amacıyla geliştirilen bir ödeme yöntemidir. “Apel nedir?” sorusunu yanıtladıktan sonra ayrıntılara ve örneklere geçelim.`,
    letter: "A"
  },
  {
    id: "14",
    title: "Ara Kazanç Ticareti Nedir?",
    description: `Ara kazanç ticareti, düşük faizli bir döviz kurundan daha yükseğine geçiş yapmaktır. Bir para birimine borçlanıp getirisi daha fazla olana yatırım yaparak kâr elde edilir. Son yılların ticari işlemlerinde taşıma kazancının yeri oldukça fazladır. 

Bahsi geçen finansal işlem, oldukça spekülatiftir. Bunun nedeni ise döviz kuru değerlerinin uluslararası alanda pek çok farklı nedenden ötürü değişebilmesidir. Bu sebeple beklenenden az ya da çok kâr elde edilebilir. O sırada yüksek faiz sunan para birimine yapılan yatırım, değer kaybı sonrasında zarara da neden olabilir. Ara kazanç ticaretinin getiri oranı kur dengelerine göre değişiklik gösterir. `,
    letter: "A"
  },
  {
    id: "15",
    title: "Aracı Kuruluş Nedir?",
    description: `Aracı kuruluş, sermaye piyasası faaliyetlerinde bulunmak üzere yetkilendirilmiş bankalar veya şirketlerdir. Aracı kurum olarak da bilinen bu resmî şirketlerin yetkileri, Sermaye Piyasası Kurulu tarafından teslim edilir. Yetki sahibi olan kuruluşlar, farklı gruplara ayrılır.

“Aracı kuruluşlar nelerdir?” sorusunun cevabı, banka kökenli olanlar ve olmayanlar şeklinde ikiye ayrılır. Banka kökenli olan aracı kurumlar da ikiye ayrılır. Bu iki gruptan ilkinde ticarî bankalar yer alır. Diğeri ise kalkınma ve yatırım bankalarını kapsar. Aracı kuruluşları; özeller, yabancılar, kamuya ait olanlar ve TMSF olarak gruplamak da mümkündür. `,
    letter: "A"
  },
  {
    id: "16",
    title: "Aracılık Nedir?",
    description: `Aracılık, iki taraf arasında uzlaşma sağlamak için yapılan faaliyettir. Bu eylem, borsa alanında yatırımcı ve karşı taraf arasında arabuluculuk işlemlerini yerine getirmek için gerçekleştirilir. Ayrıca bu uzlaşma faaliyeti yatırımcıyı bilgilendirmeyi de kapsar.

Aracılığın Özellikleri Nelerdir?
Aracılık, Sermaye Piyasası Kurulu tarafından aracı kurumlara verilen yetkidir. Aracı kurumlar, sermaye piyasası faaliyetlerinde yer almak için kurulur. Bu kurumlar yatırımcılar adına hizmet veren anonim şirketlerdir. Anonim kurumların yanı sıra bankalar da bu görevi üstlenir. Bu tür yapılar ve bankalar arasında söz konusu görev farklılık gösterebilir. Her iki kurum da aracılık analizi sayesinde yatırımcıların sermayesini doğru bir şekilde değerlendirmesini mümkün kılar.`,
    letter: "A"
  },
  {
    id: "17",
    title: "Aracılık Yüklenimi Nedir?",
    description: `Aracılık yüklenimi; halka arz edilen menkul kıymetlerin tümünün, satılacağı aracı kuruluşlar tarafından ihraç eden şirkete taahhüt edilmesi işlemine denir. Bir başka deyişle sermaye piyasası araçları, halka arzda aracı şirketler tarafından satışa çıkarılır. Bu varlıkların alım satım işlemlerine aracılık edilir.   

Aracılık yüklenimi nedir sorusuna daha ayrıntılı bir cevap vermek gerekir. Bu işlem esnasında kuruluşların azami mali sorumluluğuna Kurul tarafından karar verilir. Halka arz sırasındaki aracılık faaliyetlerinde yüklenilen taahhütlerin tutarı Kurul’un sermaye yeterliliği doğrultusunda belirlenir ve sınır aşılmaz. `,
    letter: "A"
  },
  {
    id: "18",
    title: "Arbitraj Nedir?",
    description: `Arbitraj, piyasalar arasındaki fiyat farklılıklarından yararlanarak döviz, hisse senedi ya da kıymetli madenleri alıp satmak suretiyle kâr etme mantığına dayanan bir finansal işlemdir. Bu tür işlemlerin en büyük avantajı, çok küçük risklerle ya da tamamen risksiz şekilde kazanç sağlamayı mümkün kılmasıdır.

Dövizlerin ya da birden fazla piyasalarda işlem gören değerli maden ve menkul kıymetlerin değerlerleri, piyasadan piyasa farklılık gösterebilir. Bu bilgi üzerinden “Arbitraj nedir?” sorusu gündeme gelir. Bu işlem dövizlerin, hisse senetlerinin ya da altın gibi madenlerin düşük fiyatla işlem gördüğü piyasalardan alınarak diğer piyasalarda daha yüksek fiyattan satılmasıyla kâr edilmesidir.`,
    letter: "A"
  },
  {
    id: "19",
    title: "Ayı Piyasası Nedir?",
    description: `Ayı piyasası, ekonomik süreçlerde sık kullanılan bir kavramdır. Diğer adı bear markets olan terim, fiyatların sürekli olarak düşme eğiliminde olmasını ifade eder. Özellikle kripto para dünyasında sıklıkla duyduğumuz bu kavram, ayıların doğal davranışlarından esinlenilerek türetilmiştir. Ayı etkisinin varlığından söz etmek için fiyatların, uzun bir süre aşağı yönlü hareket ettiğini görmek gerekir. Örneğin; son tepe noktasından %20 aşağıda olan ve düşmeye de devam eden bir kripto para için, ayı piyasasının oluştuğu söylenebilir.  

Özetle “Ayı piyasası nedir?” sorusuna “Piyasanın herhangi bir ürün ile ilgili karamsar bir tablo çizdiği ve fiyatların buna bağlı olarak düşüş eğiliminde olduğu süreç.’’ şeklinde cevap verilebilir. Bu piyasa eğilimi, genellikle ülkelerin ekonomik durumu ile bağlantılıdır. Yani savaş, salgın, doğal afet, ekonomik kriz, yüksek enflasyon gibi faktörler, ayı piyasası şartlarının oluşmasında bir etkendir.`,
    letter: "A"
  },
  {
    id: "20",
    title: "Bağlı Ortaklık Nedir?",
    description: `Bir tarafın; hisselerin %50’sinden fazlasına, oy çokluğunu sağlama hakkına ve yönetim kurulunu belirleyebilme yetkisine sahip olması bağlı ortaklık kavramı ile ifade edilir. Bu ortaklık hem dolaylı hem de direkt olarak gerçekleştirilebilir. Bahsi geçen terim, işletmelerin; gelirlerini, giderlerini, yatırımlarını, sermayelerini ve karar alma süreçlerini doğrudan etkiler. Bu nedenle iş dünyasında genellikle önemli bir kavram olarak ele alınır. Söz konusu terim, Sermaye Piyasası Kurulu mevzuatında ve Banka Kanunu’nda gayet açık bir şekilde yer almaktadır. Bu ortaklık, genellikle tek bir finansal grup olarak değerlendirilir. 

Bir ortaklığın çoğunluğunu elinde bulunduran şirket belirlenirken, ilgili tarafın yönetim kurulu üyelerini seçme yetkisine sahip olması durumu dikkate alınır. Bağlı ortaklığı elinde bulunduran ana şirketin, ilgili diğer kuruluşlardan daha büyük olması gerekmez. Bahsi geçen bu ortaklık türü, şirketlerin daha kapsamlı bir etki alanına sahip olmasına imkân tanır. Bunun sonucunda ise ilgili kuruluşların daha fazla kâr elde edebilmesi mümkün hâle gelir. Söz konusu ortaklık çeşidi, şirketlerin kendi ürünlerini ve hizmetlerini geliştirebilmek adına farklı alanlara yatırım yapmasına imkân tanır. Bağlı ortaklık nedir sorusunun cevabını öğrenen bireyler, bu kavramın özelliklerini merak edebilir.`,
    letter: "B"
  },
  {
    id: "21",
    title: "Bakiyeyi Yüklenim Nedir?",
    description: `Şirketler, yeni hisse senedi ihraç ederek finansman ihtiyaçlarını karşılamayı amaçlar. Bu yöntem, şirketin yeni bir yatırım yapması ya da mevcut borçlarını hafifletmesi için tercih edilebilir. Hisse senedi ihracı, genellikle halka arz ile kolayca gerçekleştirilebilir. Halka arz, hisse senetlerini satışa çıkardığını ilan eden bir şirketin çok sayıda yatırımcıya kuruluşa ortak olmaları için yaptığı çağrıdır. Hisse senedi ihracı bazı durumlarda ise halka arz edilmeden de yapılır. 

Halka arz edilmeksizin yapılan satışlarda kişiler, aracılık hususunda yatırımcı kuruluşlardan yardım alır. Halka arza aracılık faaliyetleri, bakiyeyi yüklenim belgesine sahip olan kurumlar veya yatırım bankaları tarafından gerçekleştirilir. Bu faaliyetlerde ise bakiyeyi yüklenim terimiyle sıkça karşılaşılır. Bakiyeyi yüklenimde aracı kurum, halka arz sürecinde satılmayan finansal enstrümanların tümünü satın almayı garanti eder. Bakiyeyi yüklenim nedir sorusunun cevabı bu şekilde açıklanabilir.`,
    letter: "B"
  },
  {
    id: "22",
    title: "Banka Bonolar Nedir?",
    description: `Ticari hayattaki işleyişi kolaylaştırmak adına çeşitli uygulamalar bulunur. Bonolar da bu amaçla ortaya çıkan kavramlardan biridir. “Banka bonoları nedir?” sorusunu yanıtlayabilmek için öncelikle genel olarak bono kelimesinin anlamını ve kullanım yerlerini gözden geçirmek gerekir. 

Finansman bonoları, bir şirket veya devlet kurumu tarafından çıkarılan borç senetleridir. Bu belge genellikle yatırımcılara verilmek için oluşturulur. Bono sayesinde kişiler yapmış oldukları yatırımların belli bir tarihte geri ödeneceğine dair güvence almış olur. Finansman bonolarının farklı türleri bulunur. Banka bonoları da bu türlerden biridir ve kişilere maddi güvence verir. `,
    letter: "B"
  },
  {
    id: "23",
    title: "Banka Bonosu ve Tahvili Nedir?",
    description: `Banka bonosu, en kısa ifadeyle garanti altına alınmış borç senetleridir. Bankalar tarafından borçlu olarak ihraç edilen ve iskontolu olarak satılan menkul kıymetlere bono adı verilir. Bono olarak adlandırılan menkul kıymetlerin satılmasının ardından sermaye piyasaları bankalara kaynak sağlayabilir. 

Banka bonosu, Sermaye Piyasası Kurulu (SPK) tarafından kayda alınır. Ardından bonolar ihraç edilerek iskonto esasına uygun olarak satılır. Menkul kıymetlerin hepsinde olduğu gibi banka bonolarının da belli başlı kuralları bulunur. Bonoların vadesi 60 günden az, 360 günden çok olmamalıdır. Tahsilli satılacak banka bonolarının vadesi ise 15 ila 360 gün aralığında olmalıdır. Banka bonosu nedir sorusuna bu şekilde cevap vermek mümkündür.`,
    letter: "B"
  },
  {
    id: "24",
    title: "Basit Faiz Nedir?",
    description: `Faiz, finansal piyasalarda işlemde bulunan kişilerin sıklıkla karşılaştıkları terimler arasında yer alır. Finansal yatırım yapmak ve bu yolla kazanç elde etmek isteyen kişilerin bileşik ve basit faiz gibi terimleri bilmeleri oldukça önemlidir. Bu sayede çok daha sağlıklı ve doğru işlemler yapmaları mümkün olur. Faiz, ana paranın yüzdesi üzerinden hesaplanan bir meblağdır. Basit faiz ise yalnızca ana para üzerinden belli bir vadede hesaplanan tutardır.

Basit faizde belirlenen zaman aralığı; gün, ay ya da yıl şeklinde olabilir. Faiz miktarı, vade sonunda söz konusu anaparaya yansıtılır. Bu konu ile ilgili bilinmesi gereken en önemli noktalardan biri, ana paranın belirtilen vade içerisinde yalnızca bir kez faize tabi tutulacağıdır. Vade sonunda yatırımcı, anapara ve faiz getirisinin toplamını alır. Bu sistemde amaçlanan, belirli bir süre içerisinde paranın aktarılmasıdır. Bu yöntem genellikle bankalar tarafından tercih edilir. Yatırımcılar bu metot ile kazanç elde etmek için diledikleri banka ve vadede hesap açabilir.`,
    letter: "B"
  },
  {
    id: "25",
    title: "Basit Ortalama Nedir?",
    description: `Finansal piyasalarda öngörü sahibi olmak için çeşitli yöntemlere başvurulur. Bu yöntemlerden bazıları, kullanışlı ve kolay yapıları sayesinde ön plana çıkar. Hareketli ortalamalar, piyasa analizinde sıkça kullanılan bir gösterge türüdür. Hareketli ortalama, bir finansal enstrümanın belirli zaman aralığındaki fiyatlarının averajının hesaplanmasında kullanılır. Ayrıca trend yönünü gösteren önemli indikatörlerden bir tanesidir. 

Hareketli ortalamanın yaygın olarak kullanılan bir çeşidi ise basit hareketli ortalama (SMA) olarak bilinir. Basit ortalama yöntemi, adından da anlaşılacağı üzere, son derece kolay bir biçimde hesaplama yapılmasını sağlar. İngilizce’de ”Simple Moving Average” olarak bilinir. Basit ortalama nedir sorusunun cevabı ise veri toplamının veri sayısına bölünmesi şeklinde özetlenebilir. Örneğin 7 günlük SMA hesaplamasında, finansal ürünün son bir hafta içindeki kapanış fiyatlarının ele alınması gerekir.`,
    letter: "B"
  },
  {
    id: "26",
    title: "Başlangıç Sermayesi Nedir?",
    description: `Başlangıç sermayesi, en kısa tanımıyla bir kişinin yeni bir şirket kurmak için ihtiyaç duyduğu para veya meblağdır. Kişi, şirketin kuruluş sürecinde ve sonrasında gelir elde edene kadar bu başlangıç sermayesini kullanır. “Başlangıç sermayesi nedir?” sorusuna daha geniş kapsamlı cevap vermek de mümkündür.

Başlangıç sermayesi; işin başında ekipman almak, çalışanlara ödeme yapmak, kira/fatura vb. giderleri karşılamak için gerekli olan kaynaktır. Bu kaynak, farklı yollardan elde edilebilir. Bu nedenle birkaç alt türe ayrılır. Bu türlerden ilki, kitle fonlamasıdır. Bu sermaye türünde işletme sahibi, geniş bir fon sağlama havuzundan yararlanır. Hisse bazlı ve ödüle/bağışa bağlı kitle fonlaması olarak ikiye ayrılan bu yöntem, düşük risklidir.`,
    letter: "B"
  },
  {
    id: "27",
    title: "Baz Fiyat Nedir?",
    description: `Hisse senedi terimleri arasında yer alan baz fiyat tanım itibariyle de hisse senedine ilişkin işlemlerden hesaplanmaktadır. Baz fiyat, hisse senedinin bir diğer ifade ile payın ilgili seans içerisinde göreceği işlemlerdeki alt fiyatının ve üst fiyatının belirlenmesinde esas alınan fiyat olarak ifade edilmektedir. 

Baz fiyat ile; hisse senedinin gün boyunca göreceği işlemlerde belirlenecek alt fiyat ve üst fiyat limitlerinde esas alınan fiyat anlaşılmaktadır. Mevcut günden bir gün önceki işlem günündeki kapanış fiyatı esas alınarak baz fiyatı hesaplaması yapılmaktadır. Hesaplamada esas alınan fiyat ilgili günden bir önceki işlem günü kapanışıdır.`,
    letter: "B"
  },
  {
    id: "28",
    title: "Baz Puan Nedir?",
    description: `Farklı yüzde oranları anlamına gelen baz puan, tanım olarak faiz oranları ile ilişkilidir. Baz puan, faiz oranları üzerinde yaşanan değişimi ifade edilmesini sağlayan ölçüm birimi olarak ifade edilmektedir. Merkez Bankası tarafından açıklanan aylık faiz kararlarının hareketine göre her yüzde oranı farklı bir baz puanı ifade etmektedir. Diğer bir ifade ile, bireyleri yakından etkileyen faiz oranları yıl boyunca 12 defa Merkez Bankası tarafından açıklanmaktadır. 

Kısaltması “BP” olan baz puan, Merkez Bankası tarafından açıklanan faiz oranını gösteren ölçü birimi olarak öne çıkmaktadır. Açıklanan faiz kararı neticesinde döviz piyasası üzerinde belirli hareketlenmeler meydana gelmektedir. Döviz piyasasında hareketlenme de aynı şekilde tüketim, tasarruf ve yatırımları yakından etkilemektedir. Baz puan tanımından hareketle bakıldığında, baz puanın virgülden sonra gelen dördüncü haneye denk geldiği de anlaşılmaktadır. `,
    letter: "B"
  },
  {
    id: "29",
    title: "Bedelli Sermaye Artırımı Nedir?",
    description: `Büyük küçük birçok şirket, zaman zaman sermaye artırımı için hisse senedi yöntemine başvurur. Şirketlerin maddi gereksinimlerini çözmek için başvurduğu bölünme yöntemlerinin başında ise bedelli sermaye artırımı gelir. Bedelli artırım, şirket hisselerinin dışarıdan yatırımcılar veya ortaklar tarafından satın alınması yoluyla gerçekleşir. Bedelli artırım sonucunda şirket kasasına para girerken hisseler de piyasada oldukça değer kazanır. Şirket değer kazanırken ortakların hisse oranları değişebilir. Mevcut ortaklar, rüçhan hakkını kullanarak yeni hisseler satın alabilir. Rüçhan hakkı, ortaklara bedelli sermaye artırımı sırasında payına düşen hisseleri satın alma imkânı verir.  

Hisse senedi, borsayla bir şekilde ilgisi olan herkesin sıkça duyduğu kavramlar arasında yer alır. Değerli menkul kıymetler olarak da bilinen bu yatırım aracı, temel olarak bedelli ve bedelsiz olmak üzere ikiye ayrılır. Şirketler, daha fazla değer ve sermaye kazanmak için dönem dönem bölünmeye gider. Tam da bu noktada “Şirketin kasasına ek gelir sağlayan bedelli sermaye artırımı nedir?” sorusu sıkça araştırılır. Bu kavram, bir çeşit hisse senedi bölünmesi olarak açıklanabilir. Ancak bu durumu bedelsiz artırımdan ayıran, şirket kasasına dışarıdan para girişi gerçekleşmesidir. `,
    letter: "B"
  },
  {
    id: "30",
    title: "Bedelsiz Sermaye Artırımı Nedir?",
    description: `Bedelsiz sermaye artırımı, borsada düzenli şekilde yatırım yapan kişilerin karşılaştığı bir durumdur. Piyasaları yakından takip eden yatırımcılar için “Bedelsiz sermaye artırımı nedir?” sorusu merak konusudur. Bu konuyu açıklığa kavuşturmadan önce bilanço konusuna değinmek gerekir. 

Bilanço, bir şirketin belirli tarih aralıklarındaki durumunu açıklayan mali tablolar olarak tanımlanır. Şirketin finansal kaynaklarına ilişkin olan bu kavram, kurumun varlıklarının net bir şekilde anlaşılması açısından önemlidir. Bedelsiz sermaye ise şirketin kaynaklarına nakit giriş ve çıkış işlemi yapılmadan anamalın yükseltilmesi anlamına gelir. Şirket, bu durumda kendi iç kaynaklarını veya elde ettiği kârı kullanarak sermaye artışına gider. Özsermaye kalemi altındaki hesaplar arasında bir değişiklik gerçekleşir. Bu işlem şirketin daha fazla hisseye bölünmesini de beraberinde getirir.`,
    letter: "B"
  },
  {
    id: "31",
    title: "Benchmark (Ölçüt) Nedir?",
    description: `Benchmark nedir sorusuna kısaca “ölçüt” olarak yanıt verilebilir. Bu terim, Türkçede kıyaslama anlamına gelen benchmarking eylemi ile ilişkilidir. Söz konusu terimin anlamına değindikten sonra “Benchmark (ölçüt) ne işe yarar?” sorusunun cevabı verilebilir. 

Benchmark, referans noktasını belirlemek amacıyla kullanılır. Bir işletmenin gelişmesi için seçtiği bir rakiple kendini kıyaslamasını temel alan metottur. Bu işlem, piyasada rekabet gücünü artırmak için kullanışlı bir yöntemdir. Ancak ilgili yöntemin sonuç verebilmesi için kıstas alınacak işletmenin doğru belirlenmesi gerekir.`,
    letter: "B"
  },
  {
    id: "32",
    title: "Beta Katsayısı Nedir?",
    description: `Bir yatırım menkul kıymetinin yani hisse senedinin betası (β), tüm piyasaya göre getiri oynaklığının ölçümüdür. Beta katsayısı, risk ölçüsü olarak kullanılır. Beta katsayısı yüksek olan bir şirketin riski ve beklenen getirisi daha fazladır.

Beta, bir bütün olarak piyasaya kıyasla bir menkul kıymetin ya da portföyün sistematik riskinin ölçüsüdür. Sistematik risk ile varlıklar için beklenen getiri arasındaki ilişkiyi tanımlayan sermaye varlık fiyatlandırma modelinde (CAPM) kullanılır. CAPM hem bu varlıkların riskini hem de sermaye maliyetini göz önünde bulundurarak menkul kıymetleri fiyatlandırmak ve varlıkların beklenen getirilerine ilişkin tahminler oluşturmak için tercih edilen bir yöntemdir. `,
    letter: "B"
  },
  {
    id: "33",
    title: "Bileşik Faiz Nedir? Bileşik Getiri Ne Demek?",
    description: `Bileşik faiz veya diğer adı ile mürekkep faiz tanım olarak; ara dönemlerde gerçekleşen faizlerin anaparaya eklenmesi sonucunda ortaya çıkan toplam üzerinden ödenen faiz anlamına gelmektedir. Farklı bir açıdan ele alındığında ise, bileşik faiz geçerli ise yatırımcıların bankaya koydukları anaparaları sabit sayılmamaktadır. Çünkü mürekkep faiz söz konusu olduğunda faizin faizi hesaplanarak tekrar eklenir, böylelikle yatırımcının koyduğu anapara üzerinde her devrede farklılık olur. 

Aslında bakıldığında mürekkep faiz uygulamasında doğrusal olmayan bir ilişki söz konusudur. Ülkemizdeki hukuk sisteminde bileşik faiz uygulaması için bazı istisna durumlar olmakla beraber; uygulanması yasaklanmıştır.`,
    letter: "B"
  },
  {
    id: "34",
    title: "Birikmiş Faiz Nedir? Faiz Tahakkuku",
    description: `Literatürde “Accrued Interest” olarak geçen birikmiş faiz, yatırım ile ilişkilidir. Yatırımcı tarafından sağlanan kaynağın, yatırım dönemi başlangıcından ödemenin yapılacağı tarihe kadar olan süredeki faiz miktarını temsil eder. Yabancı dilden tahakkuk eden faiz olarak da çevrilen birikmiş faize muhasebe açısından bakıldığında tahakkuk esasına göre hesaplanarak kaydı yapılmaktadır. Düzeltme yevmiye kayıtlarında belli bir dönem içerisinde hesaplanarak kaydedilen birikmiş faiz, genel itibariyle tahakkuk esaslı muhasebede kullanılır.  Borçlu tarafa göre ilgili faiz, tahakkuk eden faiz gideri anlamına gelmektedir. Muhasebeleştirilmesi kısmında ise, tahakkuk muhasebesi öne çıkmakta.`,
    letter: "B"
  },
  {
    id: "35",
    title: "Birincil Piyasalar Nedir?",
    description: `Birincil piyasalar, şirketlerin öz sermaye ve menkul kıymetlerini halka ilk arz ettikleri markete verilen isimdir. Kamu kurum ve kuruluşları ile şirketler halka açılmaya karar verdiğinde ilk arzı birincil piyasalarda yapar.

Şirketler paylarını veya tahvil, varant, kira senedi gibi tüm sermaye piyasası araçlarını halka arz edebilir. Halka arzlarda belirli koşulların gerçekleştirilmesi gerekir. Bu koşulları Türkiye’de Sermaye Piyasası Kurulu düzenler. Şirket, halka arza karar verdikten sonra bu arz türünün nasıl olacağı yönetim kurulu kararıyla belirlenir. Halka arz etme kararı, koşullara bağlı olarak verilir. `,
    letter: "B"
  },
  {
    id: "36",
    title: "BIST 100 Endeksi Nedir?",
    description: `BIST 100 endeksi, Borsa İstanbul’da işlem gören en yüksek piyasa değerine sahip hisseleri gösterir. Borsadaki aşağı ve yukarı yönlü hareketler, söz konusu endeks üzerinden izlenir. Aynı zamanda bu liste, yatırımcıların borsanın genel performansı hakkında gözlem yapmasını da sağlar. Dolayısıyla BIST 100, küçük ve büyük ölçekli tüm yatırımcılar tarafından düzenli olarak takip edilir. XU100 koduna sahip olan bu endeksin belirlenmesinde ise hisselerin işlem hacmi ve piyasa değeri gibi etkenler göz önünde bulundurulur. 

BIST 100 endeksi hesaplama yöntemi, piyasalar ile yakından ilgilenenlerin merak konuları arasında yer alır. Endeksin hesaplanması için öncelikle listede yer alacak payların belirlenmesi gerekir. BIST 100 hesaplamasında endekse dâhil edilecek paylar, A ve B grubu hisselerin arasından seçilir. A grubunda Borsa İstanbul’da en çok işlem gören hisse senetleri yer alır. Fiili dolaşım miktarı nispeten daha az olan hisseler ise B grubunda değerlendirilir. Bu endeksin hesaplanmasında Yıldız ve Ana Pazar paylarına yer verilir. Ayrıca Kolektif Yatırım Ürünleri ve Yapılandırılmış Ürünler Pazarı’nda işlem gören gayrimenkul ve girişim sermayesi yatırım ortaklıkları da dikkate alınır.`,
    letter: "B"
  },
  {
    id: "37",
    title: "BIST 100 Nedir? XU100 Ne Demek?",
    description: `Borsa İstanbul’da işlem gören en değerli 100 hissenin belirlendiği endeks BIST 100 olarak tanımlanır. Bu endekse dâhil olan hisseler piyasa ve işlem hacmi gibi kriterlere göre belirlenir. Söz konusu sıralama, piyasanın hacmini ölçmek için kullanılan bir göstergedir. 

BIST 100 hisseleri, eski adı IMKB (İstanbul Menkul Kıymetler Borsası) olan Borsa İstanbul tarafından belirlenir. IMKB 100 hisseleri için işlem kodu XU100’dür. Söz konusu endekste yer alan hisseler yerel ve uluslararası yatırımcılar tarafından takip edilir. BIST 100, borsa hakkında detaylı bilgi veren bir sıralamadır. Bu göstergeyi takip ederek Türk piyasasında yüksek kamuoyu arzına sahip olan firmalar hakkında bilgi sahibi olmak mümkündür. Söz konusu endeks, ülke ekonomisinde ön plana çıkan sektörler hakkında da fikri verebilir.`,
    letter: "B"
  },
  {
    id: "38",
    title: "BIST 30 Nedir?",
    description: `Yatırıma yeni başlayan pek çok kimse, “BIST 30 nedir?” sorusunun cevabını merak eder. Bu soruya; “Borsa İstanbul’da işlem gören en değerli otuz şirketi ifade eden gösterge” yanıtını vermek mümkündür. Borsa İstanbul’da işlem gören, hacim ve piyasa değeri bakımından en yüksek şirketlerin hisse senedi başarımlarının ölçülmesiyle BIST 30 endeksi belirlenir. 

BIST 30 hisseleri; şirketlerin dolaşımdaki paylarının piyasa değeri ve günlük ortalama işlem hacimleri doğrultusunda büyükten küçüğe doğru sıralanır. Bu liste, her üç ayda bir yeniden belirlenir. BIST 30 şirketleri, girişim sermayesi yatırım ortaklıkları arasında yer alan liste başı kuruluşlardır. `,
    letter: "B"
  },
  {
    id: "39",
    title: "BIST Pazar Değişikliği Nedir?",
    description: `Şirketlerin değerlerine, yatırımcı sayılarına ve faaliyetlerine göre alt veya üst piyasalarda işlem görmeleri pazar değişikliği olarak adlandırılır. Açıklamak gerekirse borsada işlem gören şirketler, belli kriterlere göre gruplandırılır. Firmaların bu koşulları yerine getirmekteki başarısı ise onların piyasadaki konumlarını belirler.

BIST pazar değişikliği, şirketlerin söz konusu kriterlere uygunluğuna göre yapılan bir işlemdir. Başka bir ifadeyle her firma, belli koşullara göre değerlendirilir ve şirketin faaliyet gösterdiği pazar da bu verilere göre belirlenir. Borsa İstanbul pazar değişikliği, şirketlerin bir alt veya üst pazarda faaliyet göstermesiyle gerçekleşir. Örneğin gerekli kriterleri yerine getirmeyen bir şirket, doğal olarak hisse ve değer kaybı yaşar. Böyle bir durumda firma, bulunduğu konumu kaybederek bir alt pazarda faaliyet göstermeye başlar. Aynı şekilde gereken koşulları yerine getirerek değerlenen bir şirket de üst piyasaya geçerek burada işlem görür.`,
    letter: "B"
  },
  {
    id: "40",
    title: "Blok Satış Nedir?",
    description: `Blok satış, borsa alanında sıklıkla karşılaşılan bir terimdir. Terim, şirket sermayesinde mevcut olan hisse senetlerinin satılması ile ilgilidir. Blok satış nedir sorusuna detaylı bir biçimde cevap vermeden önce yapılan işlemin bu ad altında yer edinebilmesi için bazı niteliklere sahip olması gerektiğini bilmek gerekir. 

Blok satış; şirketin, sermayesinin %10’undan fazlasına tekabül eden hisse senetlerini satışa çıkarması durumudur. Terim, aynı zamanda toplu satış olarak da bilinir. Payların, alıcı belli olsun ya da olmasın, borsada veya organize bir piyasada güven ve şeffaflık içerisinde satışının gerçekleşmesi anlamına da gelir. `,
    letter: "B"
  },
  {
    id: "41",
    title: "Boğa Piyasası Nedir? Borsada Boğa",
    description: `Boğa piyasası finans dünyasında sıkça kullanılan bir terimdir. Çeşitli piyasalarda meydana gelen yükseliş trendini ifade etmek için kullanılır. Finans alanında yüzeysel bilgiye sahip kişilerin bile boğa piyasasında kâr elde etmesi mümkündür.

Boğa piyasası nedir sorusu özellikle yatırım alanında yeni olan kişiler tarafında merak edilir. Bu terim, sıklıkla kripto para piyasaları için kullanılsa da aslında çok daha geniş bir kapsama sahiptir. Boğa piyasası, tüm borsalar için kullanılabilir. Boğa piyasası ne demek sorusuna borsalarda meydana gelen hızlı yükselişler şeklinde cevap verilebilir. Bu terim ismini, boğanın hızlı bir şekilde harekete geçmesinden alır. Boğa, saldırı anında boynuzları ile yukarı doğru bir hareket gerçekleştirir. Bu hızlı hareket, borsada işlem gören varlıkların yukarı yönlü gerçekleştirdiği ani yükselişlerle ilişkilendirilirek boğa piyasası terimi ortaya atılmıştır. Terim, genel bir tabir olarak yükseliş gösteren tüm piyasalar için kullanılsa da aslında fiyatlardaki artışın bu şekilde isimlendirilebilmesi için en az %20 oranında olması gerekir.`,
    letter: "B"
  },
  {
    id: "42",
    title: "Boğa Tuzağı Nedir?",
    description: `Boğa tuzağı, küçük yatırımcıları yanıltmak amacıyla kurgulanan bir piyasa manipülasyon hareketidir. Bu hareket, pazarda sahte bir düşüş ve sonrasında refah eğilimi yaratılmasına dayanır. Manipülasyonun temel amacı, acemi yatırımcıların büyük sermayedarların ellerinde bulunan hisseleri fahiş fiyatlarla satın almalarını sağlamaktır.

Boğalar, rakiplerine saldırırken boynuzlarını aşağıdan yukarıya doğru savurur. Boğa piyasası tuzağı adını bu saldırı biçiminden alır. Manipülasyon kurgulanırken aşağıdan yukarıya doğru sahte bir ivme yaratılır. Söz konusu hareket, küçük yatırımcıların psikolojik davranışlarını harekete geçirmeyi hedefler. Manipülasyon başladığında hisse senetleri ve diğer finansal varlıklarda düşüş gerçekleşir. Bu düşüş, acemi yatırımcıları finansal varlık edinmeye teşvik eder. Ancak bu varlıkların satın alınması manipülatif hareketi kurgulayan sermayedarların kâr edinmesiyle sonuçlanır.`,
    letter: "B"
  },
  {
    id: "43",
    title: "Bono Nedir?",
    description: `Bono, sıkça tercih edilen kıymetli bir evraktır. Kısaca ”emre yazılı olan ödeme taahhüdü” şeklinde de açıklanabilir. Daha açıklayıcı bir anlatım ile bono, bir kurum ya da şirketin yatırımcılardan aldığı borcu gösteren bir çeşit belgedir. Alınan borç paranın belirli bir süre geçtikten sonra geri ödeneceğini belirtir. 

Bu ticari belgenin bir diğer ismi de emre muharrer senet olarak bilinir. Yatırımcılar tarafından sıkça tercih edilen bu belge, portföylerin çeşitlenmesini sağlar. Aynı zamanda risksiz yatırım araçlarından biri olması sayesinde de son derece güvenilirdir. Bono nedir sorusunun cevabı genel hatlarıyla bu şekilde açıklanabilir.`,
    letter: "B"
  },
  {
    id: "44",
    title: "Borçları Ödeyememezlik Riski Nedir?",
    description: `Ekonomi ve bankacılık alanlarında terimlerden sıklıkla yararlanılır. Borç ödeyememezlik riski de bu terimlerden biridir. Bu ifade kimi zaman default risk olarak da kullanılır. İsminden de anlaşılacağı gibi bu terim, verilen bir borcun geri ödenmemesi ihtimalini ifade eder. Geri ödeyememezlik riskinin daha iyi anlaşılabilmesi için ise borç kavramının incelenmesi gerekir. 

Borç, en dar anlamı ile bir kişinin ödemekle yükümlü olduğu parasal değerdir. Kimi durumlarda borcun ödenmesi için belirlenmiş bir süre bulunurken kimi durumlarda ise tarih belirsizdir. Ancak her iki durumda da verilen paranın geri ödenmesi beklentisi mevcuttur.`,
    letter: "B"
  },
  {
    id: "45",
    title: "Borsa Eksperleri Nedir?",
    description: `Menkul kıymetlere ilişkin alım satım süreçleri, fiyat belirleme ve emir toplama gibi hususlarda ihtisas sahibi olan kişiler, borsa eksperleri olarak bilinir. Peki borsa eksperleri kimlerdir? İşletme, iktisat ve ekonometri gibi bölümlerin birinden mezun veya denkliği olan bir branş sahibi olma gibi şartları yerine getiren kişiler, borsa eksperi olarak faaliyet göstermeye hak kazanır. Eksperlik sınavını başarıyla geçen bireyler, mesleki yeterlilik kazanmak adına firmalar tarafından düzenlenen eğitimlere katılmalıdır. 

Borsa eksperi nedir sorusuna tam manasıyla cevap vermek adına değinilmesi gereken birkaç husus mevcuttur. Borsa eksperleri, serbest piyasaya yönelik alım satım emirlerini iç yönetmelikte yer alan esasları referans alarak karşılaştırır. Söz konusu fiyatları izleme ve alım satım işlemlerinin sonuçlandırılmasını sağlamakla yükümlü bireylerdir. Borsa yönetim kurulunca atanan bu uzman kişiler, rekabet koşullarını gözeterek peşin işlem türlerini denetler. `,
    letter: "B"
  },
  {
    id: "46",
    title: "Borsa Emirleri Nedir?",
    description: `Borsa emirleri, piyasalarda işlem gerçekleştirmek için verilen direktiflerdir. Farklı emir türleri, kâr elde etmek ve kazançlı işlemler yapmak için yatırımcıların piyasada alacakları aksiyonları ifade eder. Bu emirler, piyasalara aracı kuruluşlar tarafından iletilir. 

Piyasalarda işlem yapmak için kullanılan emirleri ve bunların çeşitlerini açıklamadan önce borsanın tanımını yapmak gerekir. Borsa; ticarete konu olan malların, kripto varlıkların, ulusal paraların ya da kıymetli belgelerin alım-satım işlemlerinin gerçekleştirildiği bir piyasadır. Bu alım-satım işlemlerini gerçekleştirmek için yatırımcılar belirlenen emirleri kullanır. Aracı kurumlara verilen bu emirler neticesinde borsa işlemleri gerçekleştirilir. Borsa emirleri yatırımcıların doğru hamleler yapabilmeleri için oldukça önemlidir. Bu yüzden borsada emir vermenin ne demek olduğu bilinmelidir.`,
    letter: "B"
  },
  {
    id: "47",
    title: "Borsa Fiyatı Nedir?",
    description: `Menkul kıymetlerin piyasada işlem görmesi belli koşullara bağlıdır. Bu varlıkların borsadaki arz ve talep koşullarına göre oluşan bedeli “Borsa Fiyatı” olarak tanımlanır. Bu fiyat biriminin İngilizce karşılığı “stock exchange price” şeklindedir. 

Halka arz edilen firmalar borsa üzerinden işlem görmeye başlar. Söz konusu fiyat, arz işlemi sonrasında kamuya açılan hisseler için geçerlidir. Bu bedelin belirlenmesini sağlayan çeşitli unsurlar ve marj aralıkları mevcuttur. Her menkul kıymetin piyasada geçerli olan alt ve üst limitler mevcuttur. Fiyat aralığının bu limitler arasında olması gerekir.`,
    letter: "B"
  },
  {
    id: "48",
    title: "Borsa İstanbul (BİST) Nedir?",
    description: `Borsa İstanbul; yatırımcıları bir araya getiren ve alım-satım işlemlerinin güvenli, adil ve rekabetçi bir zeminde yapılmasını sağlayan kuruluştur. Türkiye’de borsa işlemleri, kısa adı BİST olan Borsa İstanbul’da gerçekleştirilir. Bu kurum, ülkemizde faaliyet yürüten tek borsa organizasyonu olma özelliği taşır.

İlk kez İstanbul Menkul Kıymetler Borsası (İMKB) ismiyle faaliyete geçen kuruluş, Borsa İstanbul adını 5 Nisan 2013 tarihinde almıştır. Türkiye’de hisse senedi alım satım işlemlerini gerçekleştiren her birey, Borsa İstanbul (BİST) bünyesinde faaliyet gösterir. İstanbul Borsası 9 üyeden oluşan bir kurul tarafından yönetilir. Borsa İstanbul ne kadar başarılı ve geniş hacimli olursa ekonomiye de o denli likidite ve kaynak sağlanır. `,
    letter: "B"
  },
  {
    id: "49",
    title: "Borsa Payı Nedir?",
    description: `Borsa payı, taraflardan alım satım işlemi sırasında alınan belirli orandaki ödemedir. Söz konusu ödemenin oranı, Borsa Yönetim Kurulu tarafından belirlenir. “Borsa payı nedir?” sorusuna detaylı bir cevap vermeden önce bu oranın, piyasa koşullarına göre değiştiği ve belirli aralıklarla güncellendiğini aktarmakta fayda vardır. Tarafların her birinden alınan bu ödemenin güncel oranlarını düzenli olarak incelemek, borsa işlemlerinden kâr elde etmek noktasında önem taşır. 

Bahsi geçen bu ödeme; Pay Piyasası’na dayalı işlemlerde ve Türk Lirası Gecelik Referans Faiz Oranı (TLREF) ile birlikte Devlet İç Borçlanma Senedi (DİBS) sözleşmelerinde belirli aralıklarla değişen oranlar üzerinden talep edilir. Bunlar dışında yapılan işlemler için vadeli opsiyon sözleşmelerine göre tarafların her birinden borsa payı alınır. Söz konusu olan paya ek olarak işlem için tercih edilen aracı kuruluşlar da yetkili kurumlar tarafından belirlenen oranlar üzerinden komisyon talep eder. Borsada işlem gören hisselerden kâr elde etmek isteyen yatırımcılar, ilgili payı ve aracı kuruluşun komisyon ödemesini yaptıktan sonra alım ve satım yapmaya devam edebilir. `,
    letter: "B"
  },
  {
    id: "50",
    title: "Borsa Üyeleri Kimlerdir?",
    description: `5 Nisan 2013 tarihine kadar Menkul Kıymetler Borsası ismiyle anılan Borsa İstanbul, kısaca BİST olarak da ifade edilmektedir. 1985 yılından itibaren sermaye piyasası bünyesinde faaliyette bulunan yabancı ve Türk bankaları başta olmak üzere; aracı kurumlara takas hizmeti ile birlikte saklama hizmeti de verir. Borsa İstanbul’da işlem gören menkul kıymetlerin bulunduğu piyasalar şu şekildedir: 

Borçlanma Araçları Piyasası,
Kıymetli Madenler ve Kıymetli Taşlar Piyasası,
Pay Piyasası,
Vadeli İşlemler ve Opsiyon Piyasası,
Gelişen İşletmeler Piyasası.`,
    letter: "B"
  },
  {
    id: "51",
    title: "Borsada Osilatör Ne Demektir?",
    description: `Borsada yapılan yatırım işlemleri sırasında matematiksel araçlardan yaygın bir şekilde faydalanılır. Bu matematiksel araçlar arasında en yaygın kullanılan ise osilatörlerdir. Osilatör, teknik borsa çözümleme işlemleri sırasında fiyatın devamlılığına ilişkin yatırımcılara fikir veren matematik esaslı bir modeldir. 

Osilatör, borsa analizi sırasında fiyat ve eğilim yönünü hesaplamak amacıyla kullanılır. En popüler matematiksel yöntem olduğundan yatırımcılar tarafından sıkça tercih edilir. Söz konusu model, piyasalarda henüz başlamamış olan eğilimler ve değişimler noktasında yatırımcıların fikir edinmesini sağlar. Para piyasalarında yüksek alış ve satış işlemlerinin gösterilmesi için de söz konusu göstergelerden yararlanmak mümkündür. Alış ve satış verilerinin bilinmesi borsa eğilimlerinin gidişatını belirlemede önemli bir rol oynar. `,
    letter: "B"
  },
  {
    id: "52",
    title: "Broker Nedir? Kimlere Broker Denir?",
    description: `Broker tanım olarak, ilgili işlemlerin tarafları arasında aracı niteliği taşıyan, başta emlak anlaşmaları olmak üzere birçok ticari işlemi de kolaylaştıran kişilerdir. İşlemlerdeki taraflardan birisi olan müşterilerin istediklerine yönelik satın alım işlemi gerçekleştirir. Broker, bireyler için satın alma işlemi gerçekleştirebildiği gibi; büyük şirketlerle de çalışabilir. Müşteri isteklerine göre hareket eden aracı diğer bir ifade ile Broker; danışmanlık firmaları, bankalar ve yatırım firmaları tarafından sıklıkla istihdam edilmektedir. 

Genel itibariyle görev aldıkları sektörler bankacılık ve finans sektörleridir. Uzmanlaşma alanları itibariyle farklı görev ve sorumlulukları bulunan Brokerlar; yatırım, hisse senedi, sigorta ve emtia alanlarında gelişim gösterirler.`,
    letter: "B"
  },
  {
    id: "53",
    title: "Cari Açık Nedir?",
    description: `Ekonomik kalkınmada önemli rol oynayan cari açık, refah seviyesinin yükselmesi için dengeli bir profilde seyretmelidir. Bu dengenin negatife doğru kaydığı ülkelerde, ekonomik büyüme düşüktür. Ülke refahı açısından oldukça önemli olan cari açık nedir, nasıl kapanır sorularına geçelim. 

Cari açık; giderlerin gelirlerden daha fazla olması durumudur. Söz konusu işlemlerin tümü cari denge kalemlerini oluşturur. Bu kalemlerin belirli bir dönem içindeki değerleri üzerinden cari açığın varlığı tespit edilebilir. Kavram, negatif sonuç verdiğinde açık oluşturan kalemler şöyledir:

Dış Ticaret Dengesi (Mal Dengesi): İhracat – İthalat
Hizmetler Dengesi: Hizmet Gelirleri – Hizmet Giderleri
Net Faktör (Yatırım) Dengesi: Yatırım Gelirleri – Yatırım Giderleri
Cari Transfer Dengesi: Karşılıksız Olarak Elde Edilen Dış Gelirler – Karşılıksız Olarak Yapılan Dış Giderler`,
    letter: "C"
  },
  {
    id: "54",
    title: "Cari Faiz Oranı Nedir?",
    description: `Cari faiz oranı, piyasada fon arzının ve talebinin karşılanması sonucunda ortaya çıkar. Bu terim, reel faiz ile karıştırılmamalıdır. Cari faiz oranı teorik bir değeri ifade eder ve enflasyon faktörü dışarıda bırakılarak hesaplanır. 

Cari faiz oranı nedir sorusunu yanıtlarken her bir terimin sözlük anlamını incelemek gerekir. Cari kelimesi; hukuk, muhasebe ve iktisat alanlarında sık kullanılan bir sözcüktür. Bu kelime, temel olarak bir ürünün ya da hizmetin yürürlükte olan değerini ifade eder. Örnek olarak, döviz alış-satış işlemlerinde cari kur üzerinden hesap yapılır. Dövizin o esnada sahip olduğu değer cari kur olarak tanımlanır. Buradan yola çıkarak da cari faizin teorik bir değer olduğunu söylemek mümkündür.`,
    letter: "C"
  },
  {
    id: "55",
    title: "Cari Kur Nedir?",
    description: `Cari kur, döviz piyasalarında bir birim yabancı paranının istem ve alım neticesinde oluşturduğu ulusal para birimi değeridir. Bu değer kısaca, aynı gün ulusal para birimi ile takası gerçekleştirilen dövizin kurdaki yansımasıdır. Cari kur değerinde ülkelerin enflasyon oranları devreye girmez. Bu kur verilerine bakarak enflasyon oranlarına ilişkin bilgi edinmek mümkün değildir. 

Cari değer, günlük işlemler neticesinde oluşmaktadır ve piyasanın döviz alım satımına dair nasıl konumlandığını gösterir. Kişiler genellikle döviz alım satımı yaparken piyasalardaki bu kuru kullanır. Amaç, cari kur bilgilerinden ve farkından faydalanarak kâr elde etmektir. Yabancı para değeri, piyasalardaki arz ve talep doğrultusunda belirlenir. Cari kur nedir sorusunu yanıtladıktan sonra bu değerin ayrıntılarına geçmek mümkündür.`,
    letter: "C"
  },
  {
    id: "56",
    title: "CDS Nedir? Kredi Risk Primi Nedir?",
    description: `CDS (Credit Default Swap – Kredi Risk Primi) bir ülke tarafından alınan kredinin geri ödenmeme riskini ifade eder. Söz konusu risk değeri, kredi talebinde bulunan ülkenin finansal güvenilirliğini anlatır. CDS’in yüksek olması, ülkeler için iflas ve finansal kriz riskinin dikkate alınması gereken bir seviyede olduğunu gösterir.

Her kredinin belli bir ölçüde geri ödenmeme riski vardır. Bu durum, bireysel finansmanların yanı sıra ülkeler tarafından alınan krediler için de geçerlidir. Borcun geri ödenmemesi, alacaklının finansal açıdan zor duruma düşmesine sebep olabilir. CDS primi, bu tür riskleri önlemek için kullanılan bir değerdir. Söz konusu prim, kredi veren ülkelerin varlıklarının geri ödememe durumuna karşı sigortalanması için kullanılır. Bu değer aynı zamanda finansman sağlayıcılarının almayı kabul ettiği risk oranını ifade eder.`,
    letter: "C"
  },
  {
    id: "57",
    title: "Ciro Nedir?",
    description: `Ciro, ticari faaliyet yürüten işletmelerin kazanç performansını gösteren bir kriterdir. Bu parametre, işletmenin belli bir zaman içindeki kazancını belirtir. Ciro hesaplaması, farklı dönemsel periyotlarla yapılır. 

Kazanç performansı, küçük işletmelerden kurumsal şirketlere kadar her işletme için önemlidir. Ciro, söz konusu işletmelerin işlem hacimlerini gösteren bir parametredir. Bahsedilen parametre üzerinden gerçekleştirilen hesaplamalar, kâr zarar analizinin yapılmasını sağlar. Ciroyu tespit etmeden kârlılık, maliyet ve kazanç gibi ölçümleri yapmak mümkün değildir. Bu hesaplamalar aynı zamanda şirketlerin yatırım potansiyelinin belirlenmesine de yardımcı olur. Ciro verileri, yatırımcılara şirketin kârlılığı ve değeri hakkında bilgi verir.`,
    letter: "C"
  },
  {
    id: "58",
    title: "Çapa Nedir?",
    description: `Çapa, özellikle finans sektöründe sıkça karşılaşabileceğiniz terimlerden bir tanesidir. Bu terim, halk arasında ”çıpa” adıyla da bilinir. Bir ülke ekonomisi ile ilgili kararların verilme aşamasında baz alınan iktisadi büyüklükleri tanımlar.  

Gemi, çapanın atıldığı yere kolayca sabitlenir ve sürüklenmeden orada kalır. Bu sayede geminin sabit bir şekilde kalacağını bilinir. Finans sektöründeki terim de buna benzetilebilir. Merkez Bankası, farklı türdeki çapaları kullanarak piyasadaki belirsizliği ortadan kaldırmaya çalışır. Tercih edilen büyüklükler, iş dünyasındaki beklentileri karşılamaya yöneliktir. Ülkede, ekonomi ile ilgili kararların verilme sürecinde büyük bir rol oynar. Çapa nedir sorusunun cevabı bu şekilde açıklanabilir. `,
    letter: "Ç"
  },
  {
    id: "59",
    title: "Çapraz İşlem Nedir?",
    description: `Çapraz işlem hem alıcının hem de satıcının aynı kişi olması durumudur. Aynı kişi tarafından verilen alış ve satış emirleri belirli kurallar çerçevesinde işleme alınır. İşlem, sistemde bekleyen emirlerin durumuna göre farklı şekillerde sonuçlanabilir.

“Çapraz işlem nedir?” sorusuna daha kapsamlı şekilde cevap verilebilir. Bir yatırımcı, aynı hisse senedi için hem alış hem de satış emri verebilir. Bu noktada alış ve satış emirlerinin aynı fiyat üzerinden verilmiş olması önemlidir. Sisteme girilen emir, başka yatırımcı tarafından verilmiş aynı veya daha iyi bir direktif yoksa beklemeye alınır. Bu süre içinde daha iyi bir emir bulunamazsa çapraz işlem sistem tarafından gerçekleştirilir. Bekleme süresi, Borsa Yönetim Kurulu tarafından belirlenir. `,
    letter: "Ç"
  },
  {
    id: "60",
    title: "Çapraz Kur Nedir?",
    description: `Çapraz kur, iki ayrı para arasındaki oranın üçüncü bir birim cinsinden ifade edilmesidir. Ülkeler, çapraz kur oranlarını tüm dünyada en çok kullanılan para birimi olan dolar üzerinden belirtir. Çapraz kur, paritelerin başka bir para birimi cinsinden karşılığı şeklinde tanımlanabilir. 

Çapraz kur nedir sorusu yanıtlanırken genellikle “parite” kavramı kullanılır. Parite, iki para birimi arasındaki orandır. Faiz oranları ve ekonomik koşullar, pariteyi etkileyen en önemli faktörler arasında yer alır. Bir ülkenin; dış ticaret dengesi, ihracatı ve ithalatı gerçekleştirdiği yabancı para birimi gibi değerler doğrudan para birimini etkiler. Bu nedenle ülkelerde dolaşan yabancı paraların paritelerinin önemi büyüktür. Çapraz kurların doğru hesaplanması paritelerin güncel olmasına bağlıdır. `,
    letter: "Ç"
  },
  {
    id: "61",
    title: "Çekirdek Enflasyon Nedir?",
    description: `Ekonominin en önemli başlıklarından biri olan enflasyon, mal ve hizmetlere dair fiyat düzeylerinin sürekli olarak artışıyla paranın satın alma gücünde meydana gelen düşüşü ifade eder. Enflasyon genellikle fiyat artışı olarak değerlendirilir. Aslında fiyat artışının enflasyonun etkilerinden biri olduğunu söylemek daha doğru olacaktır. Üstelik sadece belirli ürünlerin ve hizmetlerin fiyatlarında gözlemlenebilen artış, yüksek enflasyonun bir göstergesi değildir. Tüm fiyatlarda ülke çapında toplu bir artış söz konusuysa enflasyondan bahsedilebilir. 

Merkez bankaları, ülkelerin fiyat istikrarını sağlamakla yükümlüdür ve bu görevlerini yerine getirmek için çeşitli para politikaları uygulayabilirler. Kurumun doğru bir sistem kurgulayabilmesi için fiyat gelişmelerini yakinen takip etmesi gerekir. Merkez bankaları genellikle Tüketici Fiyat Endeksi’ni baz alarak para politikalarını belirler, borsalara yön verir. Kurun, fiyat istikrarı hedeflerini daha yakından izleyebilmek amacıyla para politikalarının fiyat gelişimi üzerindeki etkilerini doğrudan yansıtan çekirdek enflasyon oranlarını baz alarak ölçüm yapmaktadır.`,
    letter: "Ç"
  },
  {
    id: "62",
    title: "Çıkarılmış Sermaye Nedir?",
    description: `İş için fon yaratmanın ana kaynaklarından biri sermayedir. Hisse ihracı yolu ile elde edilen çıkarılmış sermaye, bir şirketin kayıtlı varlık sistemine tabi ortaklıkların satışı yapılmış paylarını temsil eden değerdir. Pek çok şirket, yatırımcılara hisse senedi ihraç ederek sermaye artırımına gidebilir ve başarılı olması hâlinde yatırımlarının karşılığını alabilir. Hisse senedi satışı, şirket kurucuları ya da özel yatırımcılar gibi tercih edilen hissedarlara yapılabilir.

Çıkarılmış sermaye nedir sorusunun yanıtı, ihraç edilen kapitalin ödeme alındıktan sonra çıkardığı veya artıracağı varlık cinsinden değeridir. Yatırımcılar henüz hisse senetleri kapsamında ödeme yapmamış olsa da satış değerini hesaplamak şirket için mümkündür. Söz konusu miktar, şirketin yükseltmeyi hedeflediği ve yetkili sermaye tarafından temsil edilen tutarın yalnızca bir kısmı olabilir. Çıkarılmış sermaye hesaplamasında satıştan sonra oluşan borç tutarında herhangi bir piyasa değişikliği göz önünde bulundurulmaz.`,
    letter: "Ç"
  },
  {
    id: "63",
    title: "Çok Fiyat-Sürekli Müzayede Yöntemi Nedir?",
    description: `Çok fiyat-sürekli müzayede sistemi, özet bir ifadeyle emirlerin seans boyunca farklı fiyatlarla eşleştirilmesidir. Borsada verilen alım satım emirleri, zaman ve fiyat önceliklerine göre eşleşmeye alınır. Çok fiyat-sürekli müzayede sistemi uygulanırken alım-satım emrinin karşı taraf açısından uygun olması gerekir. Burada satış emri, girilen fiyata eşit ya da ilgili rakamdan daha yüksek olabilir. Aynı şekilde alış emri de girilen miktara eşitse ya da ilgili değerden daha düşükse fiyat ve zaman önceliklerine göre eşleşme yapılabilir. 

Çok fiyat-sürekli müzayede sistemi işlerken ilk olarak fiyatlara bakılır. Eğer o anki rakam emir girişindeki fiyata uygunsa bu sefer zamanlar karşılaştırılır. Fiyat önceliği, emir verilen zamandan daha yüksek değerde satış yapmayı sağlar. Alım yapacaklara fiyat önceliği, emrin girildiği günden daha düşük değere işlem gerçekleştirme fırsatı verir. Zaman önceliği ise fiyatların uygun olması durumunda sisteme önce girilen emirlerin işleme alınmasını sağlar. `,
    letter: "Ç"
  },
  {
    id: "64",
    title: "Dar Mükellef Nedir?",
    description: `Yasal ve iş merkezlerinden her ikisi de Türkiye’de olmamasına rağmen ülke sınırları içerisinde gelir eden kişilerin kazançları üzerinden vergilendirme yapılır. Bu tür bir vergilendirmeye tabi tutulan kişilere de dar mükellef denir. Dar mükellefiyet vergilendirmesi pek çok kritere bağlı olarak hesaplanır.

Vergi mükellefiyeti hem gerçek hem de  tüzel kişiler için geçerli bir kavramdır. Vergi mükellefiyeti olan kişiler ve kurumlar, bir takvim yılı içinde Türkiye’de ticari ve zirai gelir elde edenlerdir. Türkiye’de 6 aydan fazla kalsa bile ülkeye yerleşmemiş kişilerden ve kurumlardan da dar mükellefiyet kapsamında vergi alınır. Bu vergi, Türkiye’ye belli ve geçici bir görev için gelip burada kazanç elde edenlere de uygulanır. Buna ek olarak tutukluluk veya hastalık gibi elde olmayan sebeplerden dolayı Türkiye’de kalan kişilerden de bu vergi alınabilir. 193 Sayılı Gelir Vergisi Kanunu’nun 6. maddesi kapsamında Türkiye’de ikamet etmeyen kişilerin ülke sınırları içerisinde elde ettikleri kazançlar vergiye tabi tutulur. `,
    letter: "D"
  },
  {
    id: "65",
    title: "Deflasyon Nedir ve Nasıl Oluşur?",
    description: `Deflasyon, piyasa fiyatlarıyla yakından ilgili bir ekonomi kavramıdır. Bu iktisat terimi, piyasa fiyatlarındaki genel düşüşü ifade eder. Enflasyon temel olarak piyasada artan fiyatlara karşı azalan alım gücü nedeniyle gerçekleşir. Deflasyon ise bunun tam tersi olarak fiyatların azalmasını ve alım gücünün artmasını ifade eder. Ancak bu durum belli bir dengeye oturtulamadığında arz miktarını geçen talep yoğunluğu ekonomik ve sosyal krizlere yol açabilir. 

Tarihte yaşanan çeşitli deflasyon örnekleri bulunur. 2006-2016 yılları arasında Japonya’da yaşanan durgunluk dönemi bilindik örnekler arasında yer alır. Bu dönemde gerçekleşen pozitif arz şoku, Japonya’da fiyatlarda hızlı düşüşe ve işsizlik artışına neden olmuştur. 1929 yılında ABD’de yaşanan Büyük Buhran da bunun en büyük örneklerinden biridir. `,
    letter: "D"
  },
  {
    id: "66",
    title: "Deflatör Nedir?",
    description: `Deflatör, enflasyona karşı alınan önlemlerin arasında bulunan ve sıkça duyulan kavramlardan bir tanesidir. İktisadi bir terim olan deflatör, enflasyon ile ters yönlü ilişkinin kurulabilmesi için kullanılır. Günümüzde pek çok kişi tarafından deflatör nedir sorusunun cevabı sıkça araştırılır. TÜFE oranlarıyla birlikte sıkça gündeme gelen kavram, enflasyonun hafifletilmesini ve deflasyonist eğilimlerin desteklenmesini tanımlar. İndirgeyici olarak da bilinen bu terim aynı zamanda parasal değerleri gerçek fiyatlara dönüştürmek için kullanılan bir endekstir. 

Enflasyonun fiyat ortalamasındaki genel artış olduğu düşünülürse bu durumun tersinin de deflasyon olduğu söylenebilir. Fiyat artışının getirdiği olumsuz etkileri ortadan kaldırma işlemi, GSYİH deflatörü ile gerçekleşir. Deflatör, piyasa fiyatlarında yaşanan toplu artışların sonucunda sık duyulmaya başlanan kavramların arasında yer alır. Alım gücünü bir hayli azaltan fiyat artışı, yükselen faizler, kredilerin daraltılması ve piyasadaki paranın geri çekilmesi enflasyona yol açabilir. `,
    letter: "D"
  },
  {
    id: "67",
    title: "Defter Değeri Nedir?",
    description: `Defter değeri, şirketlerin öz kaynak toplamlarının ödenmiş sermaye tutarına bölünmesi ile elde edilen bir orandır. Piyasa değeri (PD/DD) olarak da bilinen kavram, hisse senetlerinin fiyatlarını sahip olduğu öz kaynaklara göre ölçmeye yarar. Bu değerlendirme oranı belgenin ucuz ya da pahalı olduğuna dair bir fikir oluşturur. 

Genel kanı, yüksek PD/DD oranına sahip olan hisselerin daha pahalı, düşük piyasa değerine sahip olanların ise daha ucuz olduğu şeklindedir. Fakat bu varsayım, her zaman doğru olmayabilir. Bu şekilde kısaca “Defter değeri nedir?” sorusunu cevapladıktan sonra özelliklerine ve hesaplanmasına geçelim.`,
    letter: "D"
  },
  {
    id: "68",
    title: "Değerleme Nedir?",
    description: `Değerleme, yalın anlamıyla kıymet takdir edilmesi olarak ifade edilir. Vergi Usül Kanunu açısından önemli olan bu kavram, iktisadi kıymetlerin para olarak karşılığını belirler. Belirlenen tutar, vergi hesaplamasında matrah olarak kullanılacağı için önem arz eder.  

Bu süreç iki aşamalı bir işlem olarak uygulanır. Bunlardan ilki, iktisadi kıymetin miktarının belirlenmesidir. Buna envanterin çıkartılması da denir. İkinci aşama ise miktarı belirlenen söz konusu kıymetin değerleme günü itibarıyla belirli bir para cinsinden bedelinin bulunmasıdır. `,
    letter: "D"
  },
  {
    id: "69",
    title: "Değişken Faizli İhraçlar Nedir?",
    description: `
Değişken faizli ihraçlar, getirisi önceden belirlenen farklı bir değişkene endekslenen kıymetlerdir. “Değişken faizli ihraç nedir?” sorusuna cevap vermeden önce bu borçlanma türünün tercih edilmesinde belirleyici olan etkenlerden bahsetmek gerekir. İlgili yöntem, tahvil sahiplerini ve ihraççılarını korumak adına başvurulan bir borçlanma türüdür. Piyasaların belirsiz olduğu dönemlerde tahvil arz ve talep edenlerin kayba uğramasını önler. Bu yönüyle, işlem yapan her iki taraf için de riski azaltır. 

Değişken faizli ihraçları tercih edenler, getirilerdeki belirsizliğin arttığı dönemleri en az kayıpla atlatmayı hedefler. Söz konusu borçlanma türünde faiz oranı daha önce belirlenen bir değişkene endekslenir. Bu değişkenler arasında gerçekleşen enflasyonun yanı sıra LIBOR (London Interbank Offered Rate) gibi uluslararası faiz oranları da yer alır. Böylece yatırımcıların getirisini piyasadaki dalgalanmalara karşı korumak ve riski azaltmak mümkün hâle gelir. `,
    letter: "D"
  },
  {
    id: "70",
    title: "Delist Nedir?",
    description: `Delist kelimesi, Türkçe’ye liste dışı olarak çevrilir. Bu sözcük, finansal terminolojide bir varlığın bulunduğu dizinden çıkarılması anlamına gelir. Bir finansal varlık liste dışı edildiği zaman daha önce işlem gördüğü borsadaki mevcudiyeti sona erer. Ürünün delist edilmesi, işleme kapatıldığı ve artık borsada listelenmeyeceği anlamına gelir.

Finansal varlıkların delist edilmesi, borsa koşullarını sağlayamadıkları anlamına gelir. Söz konusu varlıkların başka borsalarda işlem görmesi için bir engel yoktur. Örneğin; Binance’da delist edilen bir kripto para birimi FTX3’te işlem görmeye devam edebilir. Söz konusu yaptırım, borsaların ve finans platformlarının koşullarıyla ilgilidir.`,
    letter: "D"
  },
  {
    id: "71",
    title: "Devlet İç Borçlanma Senetleri (DİBS) Nedir?",
    description: `Devlet iç borçlanma senetleri ya da kısa adıyla DİBS, resmî kurumlar tarafından iç piyasaya sunulan bir menkul kıymet türüdür. Bu gruba giren senetler, genellikle Türk lirası cinsinden ihraç edilir.

DİBS, kuponsuz (iskontolu) ya da kuponlu olabilir. Hazine ve Maliye Bakanlığı tarafından ihraç edilir. Söz konusu menkul değerler belirli bir vadeye sahip olacak şekilde piyasaya sunulur. Vadenin sonunda borçlu konumundaki devlet, senedi elinde bulunduran kurum ya da kişilere gerekli ödemeyi yapar. DİBS, vadesi boyunca alınıp satılabilir ve işlem tarihindeki piyasa koşulları uyarınca nakde çevrilebilir. Vergi avantajı sağlaması ve yüksek likiditeye sahip olması, DİBS’nin diğer önemli özelliklerinin arasında sayılabilir.`,
    letter: "D"
  },
  {
    id: "72",
    title: "Devre Kırıcılar Nedir?",
    description: `Devre kırıcılar, menkul kıymet piyasasında oluşan aşırı düşüşlerin ve yükselmelerin fiyatlara olan etkisini önlemek amacıyla işlemin durdurulması anlamına gelir. 1929 Ekonomik Buhranı’ndan beri ülkeler tarafından sıklıkla uygulanan bu yöntem, yatırımcıların kâr ve risk beklentilerinin piyasaları olumsuz etkilemesini önlemek için uygulanır. Devre kırıcılar, piyasalarda oluşması muhtemel volatiliteye karşı kullanılan araçların arasında yer alır. Yetkili kurumların kontrolünde belirli şartlar oluştuğunda uygulamaya konur.

Borsada işlem yapan yatırımcılar rasyonel beklentilerinin yanında daima risk faktörünü de göz önünde bulundurur. Kişiler, dünyada gerçekleşen olayların piyasaya etkilerini takip ettikten sonra alım ve satım yaparak kâr ve zararlarını dengede tutmaya çalışır. Çok sayıda yatırımcının aynı anda ve yönde işlem gerçekleştirmesi, piyasa dengesinde bozulmalara sebebiyet verir. Devre kırıcıların önemi bu noktada öne çıkar. Toplu alım ve satımların gerçekleştiği dönemlerde işlemin durdurulması, muhtemel zararları önler. `,
    letter: "D"
  },
  {
    id: "73",
    title: "Dezenflasyon Nedir?",
    description: `Dezenflasyon tanımı, fiyat artış hızının belirli sebeplerden ötürü azalmasını ifade eder. Ülkemizde de yaygın olarak kullanılan bir ekonomi programıdır. Fiyat artışının azalması vatandaşın alım gücünü olumlu etkileyeceği için gelirlerin enflasyon nedeniyle erimesine mâni olunur. 

Bu olgu ile fiyat artış hızını azaltmak veya tamamen durdurmak amaçlanır. Böylece toplumsal refah da artmış olur. Hükümet politikaları, dünyadaki mali dengeler ve arz-talep olguları enflasyonun aşağı yönlü bir ivme kaydetmesini etkiler. Kısaca dezenflasyonun, enflasyon artış hızının düşmesi olduğu söylenebilir.`,
    letter: "D"
  },
  {
    id: "74",
    title: "Dışarıda Yerleşik Kişi Nedir?",
    description: `Bir bankacılık terimi olan dışarıda yerleşik kişi, Türk Parası Kıymetini Koruma Mevzuatı’nda tanımlanır. Bu terim, Türkiye’de yerleşik sayılmayan tüzel ve gerçek kişileri tanımlamak için kullanılır. Kavram, Türk parası içeren belgelerin ithalat ve ihracatta belirli kıstaslar çerçevesinde korunmasını amaçlar. 

Yurt dışında düzenlenen döviz endeksli sözleşmeler, Dışarıda Yerleşik Kişi Mevzuatı’na uygun olarak yapılır. Kambiyo Mevzuatı’na göre Türkiye’de yerleşik kişileri belirlemek için önce dışarıda yerleşik bireyleri tanımlamak gerekir. “Dışarıda yerleşik kişiler ne demek?” sorusuna ise yurt dışında bulunan işçiler, serbest meslek sahipleri, müstakil iş sahipleri ve Türkiye’de yerleşimi bulunmayan gerçek veya tüzel kişiler şeklinde cevap verilebilir.  `,
    letter: "D"
  },
  {
    id: "75",
    title: "Doji Nedir?",
    description: `Doji, piyasa hareketliliğini gösteren bir mum çubuğu formudur. Bu grafik, açılış ve kapanış fiyatlarının birbirine çok yakın seviyelerde olduğu durumlarda oluşur. Doji oluşumu, alıcı ve satıcıların güçlerinin eşit veya birbirine yakın olduğunu gösterir. Söz gösterge, genellikle bir kararsızlık belirtisi olarak kabul edilir.

Doji, dikkatle okunması gereken bir grafik formudur. Bu grafiklerin oluşması, ani değişimlerin yakında olduğunu gösterir. Söz konusu değişimlerde gereken önlemleri alarak borsa kararsızlıklarından korunmak mümkündür. Mum çeşitlerini ve belirtilerini iyi okuyarak radikal değişimlere karşı önlem alabilirsiniz.`,
    letter: "D"
  },
  {
    id: "76",
    title: "Dolaylı ve Dolaysız Vergi Nedir?",
    description: `Satış bedeline yansıtılan ödemeler dolaylı vergi olarak adlandırılır. Bu kalemde, vergi ödeme ve beyan yükümlülüğü genellikle farklı kişilere aittir. Dolaylı uygulamalarda ürün ve hizmet alım bedelleri üzerinden bir oran belirlenir.

Dolaylı olarak adlandırılan bu uygulama, kişiler ve kurumlar arasında gerçekleşen ekonomik işlemler için ödenmesi gereken bir kalemdir. Bu vergiler genellikle fiyatlara dâhil edilir. Örneğin; yurt dışından getirilen bir ürün için gümrük ödemeleri ve KDV bedelleri satış fiyatına eklenebilir. Böyle bir durumda, mükellef olunan bedeli ürünü satın alan kişi öder. Beyan yükümlülüğü ise satıcıya aittir. OECD üyesi ülkelerin tamamında dolaylı vergi uygulamaları yapılır. Söz konusu vergi kalemi, ekonomik işleyişin kayıt altına alınmasını sağlar. Bu uygulama aynı zamanda ülke bütçesi için kaynak yaratılmasına yardımcı olur.`,
    letter: "D"
  },
  {
    id: "77",
    title: "Duran Varlık Nedir?",
    description: `Duran varlık, bir yıldan kısa sürede nakde dönüştürülmesi planlanmayan işletme değerlerine verilen isimdir. Kavrama dair detaylı bir açıklama yapmadan önce bilançonun temelini oluşturan varlık ve kaynak dengesinden bahsetmekte fayda vardır. İşletmelerin mali özetini gösteren bilançoda her varlığa ayrılan bir kaynak bulunur. Bilanço temel denkliği olarak adlandırılan bu eşitlik ise muhasebe hesapları aracılığıyla kurulur. Sabit varlıklar, bahsi geçen hesapların yer aldığı gruplardan biridir. 

Duran varlık, işletmenin mevcut değerlerini ve alacaklarını gösterir. Bir yıldan kısa süre içerisinde satılmayacak olan bu varlıkların faydası birden fazla mali döneme yayılır. Yakın zamanda nakde dönüştürülmesi düşünülmeyen bu değerler, işletmeye uzun vadeli yarar sağlar. Binalar, taşıtlar, arazi ve arsalar söz konusu hesap grubunda yer alan işletme varlıklarından bazılarıdır.`,
    letter: "D"
  },
  {
    id: "78",
    title: "Efektif Nedir?",
    description: `Efektif, bankacılığa özgü bir kavramdır. İngilizcede effective, Fransızcada ise effectif olarak karşımıza çıkan bu sözcük, hazır para anlamına gelmektedir. Özellikle Türkiye Cumhuriyet Merkez Bankası’nın literatüründe yer alan bu kavram, piyasada sıklıkla kullanılır. Efektif para, TCMB’nin hem alımını hem de satımını yaptığı ve Türk lirası cinsinden kurunu belirlediği dövizdir. Piyasalarda ise yatırımcıların ya da işletmelerin ellerinde bulunan ve her an kullanılabilecek olan nakit parayı tanımlar.

Bu sözcük bankacılıkta sermaye ya da yatırımlar açısından da farklı bakış açılarını ifade eder. Bu terim, bankacılıkta çek ve senet benzeri kıymetli evrakın yanı sıra kâğıt ve madeni paraları da kapsar. Örneğin dövize ihtiyacı olan bir kişi, bunu çek ya da poliçe olarak karşılamak yerine banknot temin ederse efektif döviz oluşur. Bu sözcük, sermaye bağlamında kullanıldığında ise nakit para anlamını taşır.`,
    letter: "E"
  },
  {
    id: "79",
    title: "Egzotik Opsiyonlar Nedir?",
    description: `Alıcıya; finansal bir ürünü, kararlaştırılan tarih aralıklarında ve belirli fiyattan verme hakkı sağlayan kontratlara opsiyon denir. Egzotik opsiyonlar, standart şartları içeren normal kontratlardan farklı olarak daha karmaşık işlevli ürünlerdir. Söz konusu opsiyonlar alıcının ihtiyacına göre şekillenir. Bu nedenle de bir finansal ürünün belirlenen mali değeri geçmesi durumunda opsiyon geçerliliğini kaybeder. 

Egzotik opsiyonlar nedir sorusuna verilecek cevapta toplam 7 türden bahsetmek mümkündür. Bunlar;

Asya opsiyonu 
Dijital opsiyon 
Bariyer opsiyonu 
Tercihli opsiyon 
Gökkuşağı opsiyonu 
Lookback opsiyonu
Birleşik opsiyon
şeklindedir. Her bir opsiyon türü, farklı özelliklere sahiptir. `,
    letter: "E"
  },
  {
    id: "80",
    title: "Eksik İstihdam Nedir?",
    description: `Bir ekonomide üretim faktörlerinin tamamının süreçte aktif rol oynayamadığı durumlara eksik istihdam adı verilir. Söz konusu terim, en temel anlamıyla verimsizliği ifade eder. Çalışanların deneyimlerinin, eğitimlerinin veya yeteneklerinin altındaki bir kapasitede iş yapması, eksik istihdam örneklerinden biridir. Bir doktorun veya avukatın garsonluk yapması, bu terime örnek olarak gösterilebilir. 

Kişiler, boş vakitleri olmasına rağmen daha az çalışmak zorunda kalıyorsa yine eksik istihdamdan söz edilir. Tam zamanlı çalışma imkânı bulunan birinin daha az mesleki faaliyet göstermek zorunda kalması da terime örnek olarak verilebilir. Özetle ilgili durumda iş gücü gerektiği gibi değerlendirilemez ve süreç gittikçe verimsiz bir hâle bürünür.`,
    letter: "E"
  },
  {
    id: "81",
    title: "Elektronik Menkul Kıymet Transferi (EMKT) Nedir?",
    description: `Merkez Bankası, finansal transferlerin çok daha rahat bir şekilde işleyebilmesi için çeşitli altyapı hizmetleri sunar. Bu hizmetler kapsamında EMKT nedir sorusuyla sıkça karşılaşılır. Borsa terimlerinden bir tanesi olan EMKT, Elektronik Menkul Kıymet Transferi kelimelerinin baş harflerinden oluşur. Bu kavram, çeşitli menkul kıymetlerin elektronik ortamda aktarılması şeklinde özetlenebilir. 

Aktarım işlemi, bankalar arasında karşılıklı uzlaşma sonucunda gerçekleştirilir. Elektronik ortamda yapılan bu işlem, gerçek zamanlı ve kaydi olarak tamamlanır. İkinci nesil EMKT sistemi, Ödeme Sistemleri Yeniden Yapılandırma Programı çerçevesinde 2013 yılında hizmete alınmıştır. Elektronik Menkul Kıymet Transferi nedir sorusunun cevabı bu şekilde açıklanabilir. `,
    letter: "E"
  },
  {
    id: "82",
    title: "Enflasyon Endeksli Tahvil Nedir?",
    description: `Enflasyon endeksli tahvil, anapara ve faiz ödemelerini piyasadaki değişimlere karşı koruyan bir yatırım aracıdır. Yatırımcıların risk faktörünü azaltma görevini üstlenir. “Enflasyon endeksli tahvil nedir?” sorusuna detaylı bir cevap vermeden önce bu borç senetlerinin sağladığı faydayı belirtmek gerekir. Enflasyon oranı faizden yüksek olduğunda tahvilin sağladığı kazanç azalır. Bu durum, devletten veya özel sektörden tahvil talep edenler için risk taşır. Söz konusu riski önlemek için kupon faizi enflasyon oranına endekslenir. 

Enflasyon, piyasadaki mal ve hizmetlerin değer kaybetmesi ve paranın alım gücünün düşmesi anlamına gelir. Tahviller ise kamu ve özel firmalar tarafından çıkarılan borç senetleridir. Bu senetler, kuponlu ve kuponsuz olmak üzere ikiye ayrılır. Enflasyon endeksli tahvil, kuponlu borçlanma araçları arasında yer alır. 3, 6 ve 12 aylık dönemlerle faiz ödemesi yapan bu senetlerin oranları, enflasyon rakamlarına endekslenir. Böylece piyasa koşullarından dolayı yatırımcıların getiri kaybı yaşaması önlenir. `,
    letter: "E"
  },
  {
    id: "83",
    title: "Enflasyon Telafisi Nedir?",
    description: `Enflasyon telafisi yatırımcıların nominal ve enflasyona endeksli tahvil arasında kayıtsız kalmalarını sağlayan bir orandır. Türkiye Cumhuriyet Merkez Bankası’nın tanımına göre bu kavram; yatırımcıların reel anlamda kayıp yaşamamak için talep ettikleri enflasyon risk primi ve enflasyon beklentisi toplamıdır. Enflasyon telafisi kavramı, bu verinin hesaplanma biçiminden yola çıkılarak anlatılabilir. Bu telafi oranı; vade başta olmak üzere kalan tüm verileri aynı olan enflasyona endeksli tahvil ile nominal tahvilin getirileri arasındaki fark şeklinde ifade edilebilir. 

Enflasyon telafisi; nominal ve enflasyona endeksli tahvil değerlerinin birbirinden çıkarılmasıyla bulunur. Bu kavramın hesaplamasının yapılması için reel ve nominal tahvil getirilerinin tek tek bulunması gerekir. Reel ve nominal tahvil parametrelerinin eksi veya artı yönlü hareketi bu oranın değişmesinde doğrudan etkilidir.  `,
    letter: "E"
  },
  {
    id: "84",
    title: "Enflasyon Vergisi Nedir?",
    description: `Enflasyon vergisi, hükümetlerin hazine açıklarını kapatmak için kullandığı dolaylı borçlandırma sistemidir. Para transfer sistemi olarak da adlandırılan modelde, devletler sahip oldukları borçları hayat pahalılığıyla azaltmaya çalışır. Enflasyon dolaylı vergi olduğu için halk tarafından daha kolay bir şekilde kabul edilebilir. 

Enflasyon vergisi nedir sorusunun yanıtı, dolaylı yöntemlerle bir gelir elde etme sistemi şeklinde verilebilir. Hükümetler borçlarını ödeyemeyecek duruma geldiğinde piyasadaki fiyat artışına izin verir. Bu sayede para arzına cevap verebilecek nakit akışı piyasaya sunulur. Kontrollü bir şekilde toplanan vergi türü, devletin borçlarında azalma sağlar; ancak halkın alım gücünü tehdit eder. Bu nedenle piyasada ne denli bir enflasyon yaratılacağı kararı uzun analizler eşliğinde verilmelidir. Yüksek boyutlara ulaşan hayat pahalılığı, vatandaşların refah seviyesini düşür ve alım gücünü azaltır. `,
    letter: "E"
  },
  {
    id: "85",
    title: "Enflasyona Endeksli Tahvil Nedir?",
    description: `Enflasyona endeksli tahvil, anapara ve faiz ödemelerini belirli bir fiyat göstergesine bağlayan yatırım aracıdır. Piyasalardaki para değişimlerine göre değer kaybı yaşatmayan bu tahvil grubu, belirli bir oranda sabit getiri sağlamayı hedefler. 

Enflasyona endeksli tahviller ile şirketler, hisse senedi satarak ya da tahvil ihraç ederek piyasaya fon sağlar. Firma, senedi satın alan yatırımcılara belli dönemlerde sabit bir ödeme yapar. Buna kupon ödemesi denir. İşletme, vade dolduğunda anaparayı alıcıya geri öder. Tahvilin fiyatı kuponların ve ödenecek tutarın toplam değerine eşittir.`,
    letter: "E"
  },
  {
    id: "86",
    title: "Etkin Piyasa Nedir?",
    description: `Etkin piyasa, bir çeşit hipotezdir. Bir piyasada, işlemde olan menkul kıymetlerin mevcut değerlerine bakılarak onlara ilişkin elde edilebilir tüm bilgilere ulaşıldığı varsayılır. Etkin piyasa hipotezinde fiyatı, alıcıların ve satıcıların belirlediği düşünülür. Pazar işlemcilerinin erişilebilir bilgilere, aynı anda ve simetrik olarak ulaştığı temel alınır. Bu doğrultuda ortaya çıkan para, denge fiyatı olarak algılanır. Etkin piyasa nedir sorusu bu şekilde açıklanabilir.  

Bu hipotez, finansal piyasaların bilgi yönünden oldukça aktif çalıştığını gösterir. Buna göre bono ve senet gibi ticarete konu varlıklar, mevcut veriyi yansıtır. Ek olarak bu tez, yeni bilgiye en yüksek hızla tepki verildiğini savunur. Bu hipoteze göre yeni bilgi, şu anda bilinmeyendir. Ancak bu veri, gelecekte rassal bir şekilde ortaya çıkar.`,
    letter: "E"
  },
  {
    id: "87",
    title: "Euro Dolarlar Nedir?",
    description: `Eurodollar, ABD doları cinsinden mevduatları ifade etmek için kullanılan bir borsa terimidir. Dolar cinsinden mevduatları ifade eden bu terim, yalnızca Amerika Birleşik Devletleri dışındaki bankalarda geçerlidir. Söz konusu banka, ABD’ye ait olsa dahi devlet sınırlarının dışında bulunuyorsa eurodollar terimini kullanması gerekir. Yani euro dolarlar, ABD bankalarının yurt dışı şubelerinde tutulan Amerikan parası cinsinden mevduatları ifade eder.

Bu mevduatların büyük çoğunluğu Batı Avrupa ülkelerindeki bankalarda tutulduğu için söz konusu kavramın başına “euro” sözcüğü getirilir. Ancak sadece Avrupa kıtasında değil, dünya üzerindeki tüm ülkelerde tutulan ABD doları hesapları bu isimle anılır. Euro dolarlar nedir sorusunun cevabı bu şekilde özetlenebilir. `,
    letter: "E"
  },
  {
    id: "88",
    title: "Eurotahvil Nedir?",
    description: `Başka bir ülkenin para birimi üzerinden çıkarılan tahvillere eurobond/eurotahvil denir. Eurobond, devletlerin dış borçlanma için ihraç ettikleri döviz cinsinden menkul kıymettir. Bu tahvillerin yalnızca euro olması gerekmez. Bazen devletler dolar cinsinden de tahvil ihraç edebilir. 

Eurobondlar, hazinenin dış borçlanmada kullandığı uzun vadeli döviz bonolarıdır. Eurotahvili bonodan ayıran en önemli özellik ise bir yıldan uzun süreli vadeye sahip olmasıdır. Devletlerin yabancı para cinsinden ihraç ettiği bu eurotahvil türleri, yen ve sterlin cinsinden de olabilmektedir. “Eurotahvil nedir?” sorusunun cevabı kısaca bu şekilde açıklanabilir.`,
    letter: "E"
  },
  {
    id: "89",
    title: "Faiz Nedir?",
    description: `
Faiz, ekonomi ve finans sektörünün önemli kavramlarından bir tanesidir. Günlük hayatta da sıkça duyulan bu terim, en kısa tanımı ile banka ya da benzeri bir kurumdan alınan borç paranın kullanımına karşılık verilen ücrettir. Ücret oranları, çeşitli kriterlere göre değişiklik gösterir. Ülke ekonomisinin durumu, bu terimin oranlarını belirleyen faktörler arasında yer alır. Oranların belirlenmesinde ekonomi ile ilişkilendirilen olaylar da göz önünde bulundurulur. Merkez bankasının uyguladığı politikalar, buna örnek olarak verilebilir.

Faiz, başka bir tanımla banka ve benzeri yerlerin kişilere ödünç olarak sunduğu varlıklardan elde ettiği kazanç şeklinde özetlenebilir. Bu kazancın yüzdesine de faiz oranı adı verilir. Ev satın alma, şirket kurma ve eğitim kredisi gibi pek çok alanda bu terim ile karşılaşabilirsiniz. Geri ödenmesi gereken miktar, ödünç alınan miktardan daha fazla olur. Bu, kredinin kullanım süresi boyunca paranın değer kaybetmemesi için yapılır. Alınacak faiz, anapara tutarı üzerinden hesaplanarak belirlenir. “Faiz nedir?” sorusunun cevabı bu şekilde özetlenebilir.`,
    letter: "F"
  },
  {
    id: "90",
    title: "Faktoring Nedir?",
    description: `Faktoring; işletmelerin ticari faaliyetlerinden doğan vadeli alacaklarını temlik ederek finansal güvence sağlayan bir sistemdir. Çek, senet ve benzeri vadeli araçlarla ödeme alan işletmeler, faktoring firmaları ile anlaşarak vade probleminden kurtulabilir. Bu işlemin en basit tanımı; belirli bir komisyon karşılığında vadesini beklemeden ödemeyi tahsil etmektir. Çok yönlü bir finansman desteği sunan bu sistem, ileri tarihli alacakları güvence altına alır.  

Finansal kuruluşlar, ticari işletmelerin faaliyetlerine sağlıklı bir şekilde devam edebilmesini sağlayan hizmetler sunar. Özellikle esnaflar ve KOBİ statüsündeki işletmeler, geleneksel yöntemlerle ticaret yaptıkları için çek, senet gibi ödeme araçları kullanır. Bu araçlar, tahsilatı öteler ve satış yapan taraf maddi kaynağa erişmek için birkaç ay beklemek zorunda kalır. Bu durumda devreye faktoring şirketleri girer. `,
    letter: "F"
  },
  {
    id: "91",
    title: "Federal Fon Oranları Nedir?",
    description: `Federal fon oranı, finansal kurumların fazla rezervlerini bir gecede birbirine borç vermesi şeklinde özetlenebilir. Gecelik faiz oranı olarak da bilinen bu terim, bankaların nakit ihtiyacını karşılayan hızlı yollardan bir tanesidir. Federal fon oranları, ABD için büyük önem taşıyan finansal göstergelerdendir. 

Para politikası uygulamasındaki temel gösterge olan bu işlem, Federal Açık Piyasa Komitesi (FOMC) tarafından belirlenir. Yılda sekiz kez toplanan komite, federal fon oranını belirler. Toplanma sayısı, ülkenin ekonomik koşullarına göre değişiklik gösterir. `,
    letter: "F"
  },
  {
    id: "92",
    title: "Fesih Nedir?",
    description: `Fesih, günlük hayatta sık kullanılan terimlerden bir tanesidir. İş hayatında ve ekonomide de kendisine sıkça yer bulan bu kavram, eski Türkçedir. Bu sebeple pek çok kişi, fesih nedir sorusunun cevabını merak eder. Bu kelime, geçersiz kılma ve sonlandırma anlamına gelir. Günlük hayatta da bir durumun ya da anlaşmanın artık geçerli olmadığını belirtmek için sıkça kullanılır. 

Bu kavram, iş hayatında kullanıldığında genellikle bir ortaklığın ya da anlaşmanın sonlandırıldığını ifade eder. Bu anlaşma, işveren ve çalışan arasında olabileceği gibi herhangi bir hizmet sağlayıcısı ile tüketicileri de ilgilendirebilir. Yapılan anlaşmalarda fesih durumuna neden olabilecek çeşitli unsurlar açık bir şekilde sıralanır. Tüm bunlara ek olarak taraflardan biri, fesih haklarını kullanarak anlaşmanın yükümlülüklerinden feragat edebilir. Bu durumun mümkün hâle gelebilmesi için kanun aracılığı ile belirlenmiş olan bazı şartlar ve kısıtlamalar mevcuttur. `,
    letter: "F"
  },
  {
    id: "93",
    title: "Finansal Derinleşme Nedir?",
    description: `Finansal derinleşme (financial deepening), toplumun her kesiminin mali hizmet seçeneklerinden daha geniş anlamda yararlanmasını tanımlayan bir terimdir. Finansal derinlik (financial depth) olarak da isimlendirilen bu durumda, fonların reel kesime aktarılması söz konusudur. Bu çerçevede fonların arz-talep dengesi dâhilinde dağılması mümkün olur. Bir ekonomideki finansal enstrüman sayısının artması da derinleşme kapsamında ele alınır.

Finansal derinleşme nedir konusu üçüncü dünya ülkelerini yakından ilgilendirir. Az gelişmiş ve gelişmekte olan ekonomilerde sermaye yetersizliği yaşanır. Böyle ülkelerde dışarıdan gelen yabancı sermaye ve portföy yatırımları, faizlerin düşmesini sağlayarak finansal derinleşmeye olumlu katkılarda bulunur. Bir ülkede bankacılık sistemi ne kadar tabana yayılmış ve finansal derinlik ne denli artmışsa piyasa da o ölçüde canlı hâle gelir.   `,
    letter: "F"
  },
  {
    id: "94",
    title: "Finansal Kiralama Nedir?",
    description: `Ekonomi dünyasında “leasing” olarak bilinen finansal kiralama; yatırımlara ilişkin ekipmanların kişilere veya firmalara taksitle satılmasını veya icara verilmek suretiyle mülkiyetinin el değiştirmesini ifade eder. Bu finansman tekniğine konu olan ekipmanın mülkiyet hakkı onu kiralayan şirkete aittir. İlerleyen süreçlerde çeşitli anlaşmalar dâhilinde sahiplik haklarının kiracılara devredilebildiği yöntem, her türlü taşınır ve taşınmaz mal üzerinde uygulanabilir.

Türkiye’de ilk kez 1980’li yılların sonunda kullanılan finansal kiralama, ekonomide giderek artan bir paya sahiptir. Bu teknik, mülkiyet sahibi ile kiracı arasında düzenlenen bir sözleşmeye dayanır. Sözleşmenin gereği, söz konusu malın belli bir süre sonra kiralayan kurum tarafından satın alınması veya sahibine devredilmesi şeklindedir. Kiralanan malın kullanım hakkı kiracıdadır. Mülkiyet hakkı ise kiralayanda kalmaya devam eder. Finansal kiralama nedir sorusuna bu şekilde cevap vermek mümkündür. Kiralayan ile malın sahibi arasındaki bu sürecin sonunda mülkiyet hakkının değişimi ancak tarafların anlaşmasıyla mümkün olur. `,
    letter: "F"
  },
  {
    id: "95",
    title: "Finansman Bonosu Nedir?",
    description: `Finansman bonosu, işletmelerin çıkarmış olduğu borçlanma senetlerine verilen isimdir. Bu borçlanma yöntemiyle şirketler, diğer firmalara geçici fon sağlar. Finansman bonolarına dair detaylı bir açıklama yapmadan önce şirketlerin bu borçlanma yöntemini neden tercih ettiğinden bahsetmek yararlı olabilir. Nakit fazlası olan firmalar, bu avantajdan yararlanmak ve getiri elde etmek için söz konusu borçlanma senetlerini çıkarır. Likidite sorunu yaşayan şirketler ise bu senetlerle kısa vadeli fon ihtiyaçlarını karşılar. 

Finansman bonosu çıkarabilenler arasında; anonim ortaklık statüsündeki bankalar, finans kuruluşları ve büyük ölçekli firmalar yer alır. Bu borçlanma aracını diğer yazılı senetlerden ayırmak için bono kavramına da hâkim olmak gerekir. Bono, kurumsal şirketlerin ve devletin finansman ihtiyacını karşılamak için yatırımcılardan aldığı borcu gösteren belgedir. Finansman bonosu ise daha çok nakit fazlası ve ihtiyacı olan şirketler arasındaki borçlanma sürecini ifade eder.`,
    letter: "F"
  },
  {
    id: "96",
    title: "Fiyat Endeksleri Nedir?",
    description: `Fiyat endeksleri, fiyatların piyasadaki ortalama değişmelerini ölçmeye yarayan bir işlemdir. Özellikle enflasyonla mücadele, yeni mali politikaların oluşturulması, enflasyon önleyici politikaların başarı şansının arttırılması için fiyat endekslerinin hesaplanması şarttır. Dolayısıyla “Fiyat endeksi nedir?” sorusuna; “Paranın zaman içerisindeki satın alma gücünü ölçen veya satış değerindeki değişimi gösteren araçtır.” cevabı verilebilir. Bu kısa tanımlamadan sonra “Fiyat endeksleri neden kullanılır?” sorusunu yanıtlanabilir.

Bu endekslerin hazırlanmasındaki temel amaç her yıl fiyatlardaki değişiklikleri zincirleme olarak takip edebilmektir. Çünkü endeksler bir önceki veriler baz alınarak hazırlanır. Bu sayede zaman içerisinde piyasadaki değişiklikler de daha net gözlemlenmiş olur. Fiyat endeksleri dünya ekonomileri için oldukça önemli verilerdir. `,
    letter: "F"
  },
  {
    id: "97",
    title: "Fiyat Kotasyonu Vermek Nedir?",
    description: `Kotasyon, borsada listeleme olarak tanımlanan bir terimdir. Fiyat kotasyonu vermek, menkul kıymetler borsasında bir varlığın alım ve satım değerlerinin ilan edilmesidir. Bu değerler BIST Hisse Senetleri Piyasası Alım Satım Sistemi’ne girilir. Bu fiyatlar piyasa yapıcının görevli olduğu seans sırasında duyurulur. 

Bir sermaye piyasasında birden çok piyasa yapıcı ve kotasyon olabilir. Geçer değer fiyatlarında ayrı bir limit bulunmaz. Bunun yanı sıra fiyat, limitler arasında olduğu sürece kotasyon ücretini geçen seviyelerden de işlem gerçekleştirilebilir. Hisse Senetleri Piyasası’nda belirlenen kurallar değişmedikçe önceki emirlere uyulur. Fiyat kotasyonu vermek işlemi de bu bağlamda diğer emirler gibidir. `,
    letter: "F"
  },
  {
    id: "98",
    title: "Fiyat Marjı/Fiyat Aralığı Nedir?",
    description: `Fiyat marjı nedir sorusuyla borsa alanında sıklıkla karşılaşılır. Bu soru, “Tüm gün işlem gören payın en yüksek ve düşük değerleri üzerinden çıkarılan limit” şeklinde yanıtlanabilir. Fiyat marjı, alıcı ve satıcılara fikir veren bir unsurdur. Her pay için belirlenen baz fiyat marjı, bir önceki gün yapılan işlemlerin kapanış değeri üzerinden hesaplanır. 

Fiyat marjı ve aralığına ek olarak belirlenen adım değerleri, her pay üzerinden yapılabilen tek seferlik en düşük oransal değişimleri temsil eder. Önceki günün kapanış değerleri kullanılarak elde edilen tahminî veriler, yatırımcıların ideal fiyat aralığından alış ve satış yapmasını sağlar. Yatırım yapılan paylar içerisinde baz fiyat değeri bulunmuyorsa hissenin türüne ve sırasına göre farklı fiyat marjı ve aralığı hesaplamaları gerçekleşir.`,
    letter: "F"
  },
  {
    id: "99",
    title: "Fiyat Önceliği Nedir?",
    description: `Hisse senetlerinin alım-satım işlemlerinde verilen emirler üzerine uygulanan kurallardan biri fiyat önceliğidir. Bu kavram, bankalara verilen işlem komutlarından biridir. Fiyat önceliği, emirlerin uygulanma sırasını etkilemektedir. 

Satım komutlarının fiyat önceliği kuralına göre belirlenmesi düşük değerli emirlerin yükseklerinden daha önce tamamlanmasını sağlar. Aynı kavram alım işlemleri için de kullanılır. Fakat bu durumda yüksek değerli emirler, düşük olanlardan önce karşılanır. Sisteme gönderilen komutlar fiyatın yanı sıra zaman önceliğine göre de eşleştirilebilir. Bu işlem sırasında iki kural birlikte uygulanır. Fiyat değerlerinin aynı olduğu durumlarda emirler, zaman önceliğine göre gerçekleşir ve daha önce gelen komutlar erkenden tamamlanır.`,
    letter: "F"
  },
  {
    id: "100",
    title: "Forex Nedir? Forex Yatırımı Nasıl Yapılır?",
    description: `Ülkelerin para birimlerinin karşılıklı olarak alınıp satıldığı ve değerinin belirlendiği döviz piyasasına Foreks adı verilir. Global likiditesi en yüksek piyasa olan söz konusu pazar, büyük işlem hacmiyle pek çok yatırımcı için cazip bir seçenektir. Birikimlerini değerlendirmek isteyen yatırımcılar için hazırlanan bu yazıyı okuyarak Forex piyasasına nasıl yatırım yapabileceğinizi kolaylıkla öğrenebilirsiniz.

Forex Nedir?
Forex, İngilizce “Foreign Exchange” sözcüklerinin ilk hecelerinden oluşan bir finans terimidir. En basit tabirle forex işlemi, bir ülkenin para birimiyle diğerinin değiştirilmesi anlamına gelir. Türkçeye foreks olarak geçen borsa terimi, “kaldıraçlı alım satım işlemleri” olarak da bilinir.`,
    letter: "F"
  },
  {
    id: "101",
    title: "Forfaiting Nedir?",
    description: `
Bu kavram, finans ile ilgili olan kişilerin sık karşılaştığı terimlerin arasında yer alır. Bu, yabancı bir tabir olduğu için pek çok kişi forfaiting nedir merak eder. Söz konusu terim, dış ticarette ödenmemiş borçların çeşitli alım satım işlemleri aracılığı ile tahsil edilmesi anlamına gelir. Yatırım malı ihracatı yapan kişilerin başvurabileceği bir finansman yöntemini ifade eder. Bu, ihracat yapan kişilerin borçlarının vadesi gelmeden finansman sağlamasına imkân tanır. 

İhracat yaparak gelir elde eden kişilerin alacakları genellikle uzun bir vadeye yayılmıştır ve bonoya bağlanmıştır. Bu durumda borçların tahsil edilebilmesi için bononun süresinin dolması beklenmelidir. Forfaiting sayesinde bahsi geçen bonolar, borç tahsil etme işlemlerinde uzmanlaşmış bir finans kuruluşu veya banka tarafından satın alınabilir. Forfaiting örnekler aracılığı ile açıklandığında çok daha kolay bir biçimde anlaşılır. `,
    letter: "F"
  },
  {
    id: "102",
    title: "Forward İşlemleri Nedir?",
    description: `Forward işlemler, yatırımcıların sıkça karşılaştığı terimler arasında yer alır. Bu işlem; malın ileri bir tarihte teslim edilmek üzere vadesinin, miktarının ve fiyatının bugünden belirlenerek sözleşmeye bağlanmasıdır. Forward işlemler; döviz, altın veya bir mal üzerinden yapılabilir. 

Forward işlemi ne demek sorusuna geçmeden önce bu yöntemin kur dalgalanmalarının sık yaşandığı dönemlerde tercih edildiğini belirtmek gerekir. Forward, varlıkların kur dalgalanmalarına karşı korunduğu bir yatırım biçimidir. Kurun yükseleceğinin düşünüldüğü durumlarda elde bulunan dövizi korumak ve risk oranını minimuma indirmek için forward yapılır. Koşulların sözleşmeyle belirlendiği bu yatırımda alıcı ve satıcı olmak üzere iki taraf bulunur. Her iki taraf da sözleşmeyle birlikte malın miktarını ve fiyatını bir daha değiştirmemek üzere kabul eder. `,
    letter: "F"
  },
  {
    id: "103",
    title: "Futures Piyasaları Nedir?",
    description: `
Futures piyasanın Türkçe karşılığı, vadeli pazardır. Futures piyasa, ileri bir tarihte teslim edilecek ürünlerin sözleşmelerinin alınıp satıldığı pazar olarak tanımlanır. Bu piyasalar, eylem ileri bir tarihte gerçekleşeceği için “futures” adını alır.

Peki daha geniş tanımıyla futures piyasa nedir ve nasıl işler? Futures piyasaların işleyişine göre öncelikle satılacak bir ürün olması gerekir. Bu; altın ve gümüş gibi kıymetli metaller, ham petrol, buğday, doğal gaz, döviz, hisse senedi endeksleri, tahviller, menkul kıymetler veya farklı mallar olabilir. Ardından ürünün fiyatı belirlenir. Bu fiyat, malın güncel değerine göre hesaplanır ve sabitlenir. Böylece satın alma günü geldiğinde değer değişmez. `,
    letter: "F"
  },
  {
    id: "104",
    title: "Gayrimenkul Yatırım Ortaklığı Nedir?",
    description: `
Gayrimenkul yatırım ortaklığı, getiri potansiyeli yüksek projelere ve gayrimenkullere yatırım yapmaktır. Bu sayede gayrimenkullerden alım satım kazancı ve kira geliri elde edilebilir. Elde edilen bu kârlar ortaklara temettü olarak dağıtabilmekte ve bu yolla gayrimenkul gelirleri ortakları aktarabilmektedir.

Böylelikle gayrimenkul yatırım ortaklığının paylarına satın alma yoluyla ortak olan bir yatırımcı, getirisi yüksek gayrimenkullerin gelirlerinden dolaylı yolla faydalanmış olur. Gayrimenkul yatırım ortaklıkları, büyük ve nitelikli projelerin hayata geçirilmesini sağlar. Kurumsal ve bireysel yatırımcılara ait tasarrufları ortak bir havuzda toplayarak gayrimenkul sektöründe yaşanan likidite sorununa çözüm sunar.`,
    letter: "G"
  },
  {
    id: "105",
    title: "Gelir Ortaklığı Senetleri Nedir?",
    description: `En kısa tanımıyla gelir ortaklığı senetleri; çoğunlukla ulaşım, haberleşme ve enerji tesislerinden kamu kurum ve kuruluşlarına ait olanların gelirlerine ortak olmak için çıkarılan bir belgedir. Gelir ortaklığı senetleri, Türkiye’de ilk olarak 17 Mart 1984 tarih ve 2983 sayılı Tasarrufları Teşvik ve Kamu Yatırımlarının Hızlandırılması Hakkındaki Kanun sayesinde alınmaya başlamıştır. Kısaca GOS olarak da bilinen gelir ortaklığı senetleri; köprü, baraj, elektrik santrali, kara ve deniz ulaşımı ağı, demir yolu ve telekomünikasyon sistemlerini kapsar. Aynı zamanda havalimanlarının gelirine ortak olmak için de bu senetlere başvurulabilir. 

GOS, ana senet ve kuponlardan meydana gelir. Gelirin paylaşılması için Merkez Bankası’nda bir fon hesabı açılır. Gelir ortağı olduğunuz kamu kuruluşunun elde ettiği kazanç, bu hesaba aktarılır. Senet sahibine ödenecek kâr payı önceden belirlenir. Ardından ise gelir, vadesi gelen senet sahiplerine payları oranında dağıtılır.`,
    letter: "G"
  },
  {
    id: "106",
    title: "Gelir Tablosu Nedir?",
    description: `Gelir tablosu, şirketlerin bir hesap dönemindeki kazançlarını ve maliyetlerini gösterir. Bölümler hâlinde düzenlenen bu verilerden işletmenin mali yıl sonundaki net faaliyet sonuçlarını öğrenmeniz mümkündür. Şirketler, aynı dönem içindeki tüm gelirlerini ve giderlerini karşılaştırma yapmaya uygun olacak şekilde bu tabloya kaydeder. Ardından çeşitli maliyet ve gelir kalemlerini düşer. Ayrıca bazı hesapları kendi aralarında gruplar ve tabloyu finansal analiz için elverişli hâle getirir. Şirketlerin dönemsel mali sonuçlarını özetleyen bu tablolar üzerinden finansal analizler yapılabilir. 

Finansal tablolar, şirketlerin geride bırakılan dönem içerisindeki faaliyetlerini özet şeklinde görme olanağı tanır. Gelir tablosunda ise işletmenin tüm kazanç ve maliyet kalemlerine yer verilir. Bu tabloya şirketin ana faaliyetleri için ödediği giderlerinin yanı sıra diğer harcamaları da kaydedilir. Ayrıca tablo sadece belirli bir dönemdeki gelirleri ve giderleri kapsar. Bu sayede dönemin tamamlanmasının ardından net sonuçlar elde edilir. `,
    letter: "G"
  },
  {
    id: "107",
    title: "Genel Finansal Ortaklıkları Nedir?",
    description: `Finans dünyası, yatırımcılar için pek çok alternatifin bulunduğu bir alandır. Bu alanda başarılı yatırımlarda bulunabilmek için finansal bilgiye sahip olmak ve çeşitli terimleri bilmek de oldukça önemlidir. Genel finansal ortaklıklar, günümüzde sık karşılaşılan bir terimdir. Peki, genel finans ortaklığı nedir? Bu ortaklık şekli, bir alacak hakkına karşılık olarak gösterilen menkul kıymetin halka arzı ve ihracı amacıyla geliştirilmiştir. 

Genel finans ortaklığı modelinde şirketler, yüksek getiri sağlayan varlığa dayalı menkul kıymetlerini ortaklığa konu ederler. Bu yöntemle henüz vadesi gelmemiş olan alacakları nakde çevirmiş olurlar. Bu sebeple genel finansal ortaklıklar, nakit akışına ihtiyaç duyan şirketlerin sıklıkla başvurdukları bir yoldur. “Genel finans ortaklığı ne demektir?” sorusunun cevabı, şirketlerin nakit akışı sağlamak için başvurdukları yol olarak özetlenebilir. Bu yöntemle birbirinden farklı alacak türleri oluşturmak mümkündür. `,
    letter: "G"
  },
  {
    id: "108",
    title: "Giffen Paradoksu Nedir?",
    description: `İnelastik talep yapısına sahip ürünler haricindeki malların tüketiminin fiyatlarla ters orantılı olması beklenir. Yani genel anlamda bir ürün ne kadar düşük fiyattan satılıyorsa o kadar da talep görür. Eğer bir ürünün hem fiyatı hem de talebi aynı anda artıyorsa bu durumda Giffen Paradoksu’ndan söz edilir. İlgili paradoks, fiyat artışına rağmen ürüne olan talebin de giderek yükselmesi arasındaki beklenilmeyen ilişkiyi kapsar.

Paradoks, ilk kez 19.yüzyılda Sir Robert Giffen tarafından öne sürülmüştür. 19.yüzyılda İrlanda’da ortaya çıkan patates kıtlığı, Giffen Paradoksu oluşumunda büyük etkiye sahiptir. Paradoksa soyadını veren Giffen, kıtlığın patates fiyatlarını artırdığını ancak ürüne olan talebin de yükselişe geçtiğini fark edip bu anormal ilişkiyi incelemiştir. İncelemenin sonucunda ise düşük gelirli İrlandalı çalışanların günlük beslenmelerini patatesle geçiştirerek bütçelerinin küçük bir kısmını et gibi daha kaliteli yiyeceklere ayırdığı gözlemlenmiştir. Bu, zamanla patates kıtlığına neden olduğundan ürünün fiyatlarında artış yapılmıştır. İrlandalı işçilerin de artık hiç kaliteli yiyecek alamayacağından tüm gelirini patatese yatırdığı ortaya çıkmıştır. Talep kanuna ters işleyen bu duruma da Giffen Paradoksu adı verilir.`,
    letter: "G"
  },
  {
    id: "109",
    title: "Gösterge Faizi Nedir?",
    description: `Hazine, kamu açıklarını kapatmak ya da geçmiş yıllardan kalan anapara ve faiz borçlarını ödemek için iç veya dış borçlanma yapabilmektedir. İç borçlanma, vadesi bir yıldan uzun devlet tahvili ya da bir seneden kısa hazine bonosu ile gerçekleştirilir. Bu kâğıtların tümüne Devlet İç Borçlanma Senetleri (DİBS) adı verilir.

İç borçlanma ihalelerinde belirlenen faiz, DİBS faizi olarak da bilinmektedir. Borçlanma senetleri, ihale usulüyle bankalar tarafından alınır; sonrasında ise piyasada satılır. Böylelikle piyasada ikinci el fiyatı ve faizi oluşur. `,
    letter: "G"
  },
  {
    id: "110",
    title: "Gözaltı Pazarı Nedir?",
    description: `“Gözaltı pazarı nedir?”, borsa alanında merak edilen sorular arasındadır. Bu terim, yatırımcıyı koruma amacı güden ve piyasa hakkında sürekli olarak bilgilendiren bir sistemi ifade eder. 4 Aralık 1996’da ilk kez faaliyete geçirilen bu sistemin adı daha sonra Yakın İzleme Pazarı (YİP) olarak değişmiştir. Borsa İstanbul’un tanımına göre bu sistem, mevcut standartlar ve finansal durum açısından gerekli koşulları sağlayamayan şirket hisselerinin yer aldığı bir pazar şeklinde işler. 

Kamu Aydınlatma Platformu’nda yayınlanan (KAP) son iki yıllık bağımsız denetim raporundan kaçınan ya da olumsuz içeriğe sahip şirketler, borsa kotundan çıkarılabilir. Şirket hisselerinin gözaltı pazarına alınmasının bir diğer nedeni ise faaliyet için gereken yetki belgelerinin iptali ve hükümsüzlüğüdür. Gözaltı pazarında yer alan şirketler, kamuyu tüm hisseler açısından sürekli olarak aydınlatmakla yükümlüdür. Yakın izleme pazarında; brüt takas, devre kesici ya da açığa satış gibi uygulamalar yer almaz. 2022’de hisseleri gözaltı pazarına çıkan şirketlerin listesine internetten ulaşabilirsiniz. `,
    letter: "G"
  },
  {
    id: "111",
    title: "Günlük İşlem Nedir?",
    description: `Günlük işlem, döviz ve borsa piyasalarında yaygın olarak kullanılan bir yöntemdir. Kısa vadeli piyasa hareketlerinden kazançlı çıkmayı isteyen yatırımcıların gün içinde bir menkulü alıp satmasına denir. Emir verildiği gün sonuna kadar geçerli olan bu işlem, eşleşme olmadığı takdirde ertesi güne aktarılmadan otomatik olarak sonlandırılır. Söz konusu işlem günde iki seans olarak gerçekleştirilir. İlk seansta tamamlanmayan işlem ikinci seans sonuna kadar bekletilir. Karşılanmaması durumunda da iptal edilir.

Piyasadaki hareketliliği ve dalgalanmaları takip eden bilinçli yatırımcıların tercih ettiği günlük işlem, riskleri de beraberinde getirir. Piyasaların nasıl çalıştığını bilen profesyonel yatırımcıların stratejik kararlarından biridir. Uygun zamanı kollayarak hızlı hareket etmek, günlük işlemlerden büyük kâr elde edilmesini sağlayabilir.`,
    letter: "G"
  },
  {
    id: "112",
    title: "Halka Açık Anonim Ortaklık Nedir?",
    description: `“Halka açık anonim ortaklık nedir?” sorusunun cevabını kısaca şirketler ve halk arasındaki ticaret ortaklığı olarak açıklamak mümkündür. Vatandaşların iktisadi kalkınmaya katılım göstermesine imkân tanıyan halka açık anonim ortaklıklar, piyasalar ve yatırımcılar için de büyük önem arz eder. Halka açık anonim şirketler, söz konusu ortaklık sayesinde finansman ihtiyaçlarını elverişli koşullarda karşılama imkânı bulur. 

Halka açık anonim ortaklık hem pay sahiplerinin kredi alma gücünü artırır hem de kurumsallaşmanın sağlanmasını mümkün bir hâle getirir. Halka açık anonim ortaklığın diğer önemli özellikleri ise sermayenin tabana yayılmasını sağlama, küçük sermayenin de ekonomiye kazandırılması ve eşit kâr dağılımına imkân tanıma olarak sıralanabilir.`,
    letter: "H"
  },
  {
    id: "113",
    title: "Halka Açıklık Oranı Nedir?",
    description: `Piyasayı anlayabilmek için öncelikle “Halka açıklık oranı nedir?” sorusunun cevabını öğrenmek gerekir. Bu kavram, halka açılmış olan hisselerin üzerlerinde yazılı değerler ile tüm payların nominal kıymetlerinin oranı anlamına gelir. Halka açılmış hisselerin oranı ile firma değeri arasında bir ilişki bulunur. Oran artış gösterdikçe firmanın dalgalanma seviyesi düşüşe geçer. Bu açıdan incelendiğinde oranın şirket sermayesi üzerinde önemli etkilere sahip olduğu görülür.

Halka açıklık oranı, piyasa fiyatı üzerinde de çeşitli etkilere sahiptir. Bu açılma sayesinde işletmelerin mevcut hisse senetleri, piyasaya arz edilir. İşletmelerin halka açılması ile piyasa fiyatlarında önemli oynamalar yaşanır. `,
    letter: "H"
  },
  {
    id: "114",
    title: "Halka Arza Aracılık Nedir?",
    description: `Şirketler çeşitli nedenlerle halka arza yoluna başvurur. Bu işlem, şirketlerin sahip olduğu tüm hisse senetlerini ve varlıklarını yatırımcıların alımına sunmasıdır. Halka arza aracılık terimi de satış yapan şirketin, karşısında bulunan ihraççı tarafından tanımlanmasını ifade eder. Halka arza aracılık nedir sorusu, bu şekilde cevaplanabilir.

Şirketler genellikle finansman ihtiyaçlarını karşılamak amacıyla halka arzda bulunur. Bu aşamada ihraççı bir taraf vardır. Hisse senetlerini veya varlıkları halka arz eden ile ihraççı aynı olmayabilir. Bu durumda halka arza aracılık türleri ortaya çıkar. Halka arza aracılık faaliyetinde bulunan kuruluşlar bunu iki şekilde yapabilir. Bu yöntemler ise aracılık yüklenimi ve en iyi gayret aracılığıdır. Aracılık yüklenimi de kendi içerisinde farklı türlere sahiptir.  `,
    letter: "H"
  },
  {
    id: "115",
    title: "Hazine Bonosu Nedir?",
    description: `Hazine bonosu, devletlerin kısa vadeli finansman ihtiyaçlarını finanse etmek amacıyla bir yıl veya bir yıldan az vadelerle ihraç edilen borçlanma araçlarıdır. Devlet güvencesine sahip, sabit getirili, yüksek likiditeye sahip ve risksiz yatırım enstrümanlarıdır. Türkiye’de hazine bonosunu Hazine ve Maliye Bakanlığı çıkarır. Bütçe açıklarının dönemsel olarak karşılanması ve hazinenin geçici nakit ihtiyacının giderilmesi amacıyla ihraç edilir. 

Hazine Bonosu Özellikleri
Bu özellikler şu şekilde sıralanmaktadır; 

Bonolar emre muharrer senet olarak da adlandırılır.
Risksiz bir yatırım aracı olduğundan dolayı, yatırımcılar tarafından portföylerini çeşitlendirmek için tercih edilir.
Hazine bonoları hisse senetlerinden farklı olarak herhangi bir ortaklık hakkı doğurmaz. Yalnızca devletten anapara ve faiz miktarı kadar alacak hakkı ortaya çıkar.
Bono fiyatları faiz oranlarıyla zıt olarak çalışır. Yani faiz oranları düşünce bono fiyatları yükselir, faiz oranları yükseldiğinde bono fiyatları düşer.`,
    letter: "H"
  },
  {
    id: "116",
    title: "Hedging Nedir?",
    description: `Hedging, yatırım riskinden korunma söz konusu olduğunda her yatırımcının bilmesi gereken faydalı bir yöntemdir. Hedge ve bunu sağlayan hedging işlemi, riskten korunma olarak da bilinir ve kayıpları minimuma indirmek için kullanılır. Yatırımcılar, tüccarlar, finansal kurumlar, mal üretenler, fonlar veya finansal olmayan kuruluşlar hedging işlemi yaparak piyasa riskine ve oynaklığına karşı önlem alırlar. 

Hedging, ilgili bir varlıkta zıt bir pozisyon alarak yatırımlardaki kayıpları dengelemek için kullanılan bir risk yönetimi stratejisidir. Bu yöntemle sağlanan riskteki azalma, potansiyel kârların da azalması ile sonuçlanır.`,
    letter: "H"
  },
  {
    id: "117",
    title: "Hesaben Saklama Nedir?",
    description: `Finansal varlıkları güvence altında tutmanın çeşitli yolları vardır. Bu değerlerin sadece fiziksel ortamlarda idare edilmesine gerek yoktur. Aksine bu durum, kişilere ekstra bir iş yükü olabileceği için varlıkların farklı ortamlarda kontrollerini sağlayan uygulamalar geliştirilir. Hesaben saklama kavramı bu yöntemlerden biridir.

Her alanda elektronik gelişmelerden faydalanıldığı gibi finans sektöründe de teknolojinin avantajlarını görmek mümkündür. Hesaben saklama nedir sorusuna verilebilecek en açıklayıcı cevap finansal varlıkların elektronik ortamlarda korunmasıdır. Bu sayede ortaya çıkabilecek ekstra iş yükü ortadan kaldırılabilir. `,
    letter: "H"
  },
  {
    id: "118",
    title: "Hisse Geri Alımı Nedir?",
    description: `Hisse geri alımı, şirketlerin paylarının değerini artırmak için piyasalarda işlem gören hisselerini toplamasıdır. Kavrama dair detaylı bir açıklama yapmadan önce hisselerin şirketler için ne anlama geldiğinden bahsetmek yararlı olabilir. Payları açık piyasalarda işlem gören şirketler, özsermayesini artırmak ve finans kaynağı sağlamak için hisse senedi ihraç eder. Hissedarlar da sahip oldukları pay oranında şirketin bazı haklarında söz sahibi olur. Şirketler, hisselerindeki değer düşüşlerine ve büyüme rakamlarına bağlı olarak ihraç ettikleri bu payları geri alma hakkına sahiptir. Bu geri alımlar, piyasadan ya da doğrudan hissedarlardan gerçekleştirilir.`,
    letter: "H"
  },
  {
    id: "119",
    title: "Hizmetler Endeksi Nedir?",
    description: `Hizmetler endeksi, doğru yatırım planı oluşturmak için oldukça önemlidir. Bu nedenle de Hizmetler endeksi nedir?” sorusunun cevabı, borsada işlem yapmaya yeni başlamış olan kişiler tarafından merak edilir. Hizmetler dizini olarak da bilinen bu terim, ulusal pazarda işlem görmekte olan üçüncül sektör şirketleri için kullanılan bir tabirdir. Bu sebeple ulusal pazar ve hizmet sektörü kavramlarının iyice anlaşılması, terimin kavranabilmesi açısından büyük önem taşır. 

Ulusal pazar, Borsa Yönetim Kurulu kararı ile aktif hâle getirilmiş alım satım işlemlerinin gerçekleştiği alandır. Borsa İstanbul’un yaptığı değişiklikler ile bu alan günümüzde Yıldız Pazarı olarak bilinir ve BİST’in en büyük alım satım mecrasıdır. Hizmet sektörü ise maddi olmayan ürünler ve çalışmalar ile gelir elde eden kuruluşlardır. Ulaşım, turizm ve bilgisayar hizmetleri şirketleri bu alanda faaliyet gösterir. Hizmet endeksi ise bu şirketlerin Borsa İstanbul’da hisse senedi fiyatlarının incelenmesine imkân tanır.`,
    letter: "H"
  },
  {
    id: "120",
    title: "İflas Nedir?",
    description: `İflas, borçlarını ödeyemediği yetkili kuruluşlar tarafından saptanan kişinin mal varlığının nakde çevrilmesi ve bu parayla alacaklılara ödeme yapılmasıdır. “İflas ne demek?” sorusuyla birlikte bu takip yoluna tabi olanlar da merak edilir. Bu takip yöntemine gerçek ve tüzel kişiler tabidir. Söz konusu kavram, istisnalar dâhilinde tacir olmayanları da kapsar. Dava, asliye ticaret mahkemesinde açılır. İstisnalar hariç olmak üzere borçlunun tüm mal varlığı iflas masasının konusunu oluşturur. 

İlgili davayı alacaklılar arasından herhangi biri açabilir. Bu dava kabul edildiğinde sonuçtan tüm alacaklılar yararlanır. İflas masasına kaydedilen mal varlıkları, alacaklılara payları oranında dağıtılır. Bahsi geçen masaya adını yazdıran tüm alacaklıların borçları ödenir. Müflisin haczedilebilir tüm mal varlığı, kaydedildiği hâlde borç için yeterli olmuyorsa aciz belgesi düzenlenir. Müflis, masaya kaydedilen mal varlıklarını işletmeye devam etse de gelirlerinden yararlanamaz. “İflas nedir?” sorusunun cevabı, kısaca bu şekilde verilebilir.`,
    letter: "İ"
  },
  {
    id: "121",
    title: "İhale Nedir?",
    description: `“İhale nedir?” sorusu, sıklıkla araştırılan konuların başında yer alır. Kelime anlamı itibarıyla ihale, bir işin ya da malın pek çok talip arasından uygun koşulları sağlayana verilmesidir. Bu kavram, genel olarak özel sektörün devlet işlerini almak için kullandığı bir yöntemdir. Süreç boyunca katılımcı olan kurum ve kuruluşlar gerekli koşulları sağlamak adına çalışır. 

İhale usullerinin çerçevesi kanunlar tarafından çizilmiştir. 2886 sayılı Devlet İhale Kanunu’na göre usuller; pazarlık, belli istekliler arasında kapalı ve açık teklif olarak ayrılmıştır. Bu usullerden uygulanacak olan izahnamede belirtilmelidir. `,
    letter: "İ"
  },
  {
    id: "122",
    title: "İhraç Nedir?",
    description: `İhraç, belirli bir unvanı ya da menkul kıymeti dolaşıma sokma eylemidir. Finans piyasalarında yatırım aracı olarak değerlendirilen pek çok kıymetli evrak çeşidi bulunur. Ekonomik açıdan son derece önemli olan bu araçların arasında yer alan menkul kıymetler, taşınabilen değerli kâğıtları ifade eder. 

Yatırım yapmak isteyen kişiler, ihraç nedir sorusunun kapsamlı cevabını merak eder. Bu, iktisat alanında ekonomik bir temsilci tarafından yapılan eylemdir. Ekonomik ajan, piyasa modelindeki bir aktörü veya karar vericiyi temsil eder. Şirketlerin belirli bir bedel elde etmek için ihraç edebileceği çok sayıda menkul kıymet bulunur. Öte yandan ülkeler de bu tür bir eylem gerçekleştirebilir.`,
    letter: "İ"
  },
  {
    id: "123",
    title: "İhraççı Nedir?",
    description: `İhraççı, sermaye piyasası aracı çıkarmaya yetkili olan kurumlara ve kuruluşlara verilen isimdir. “İhraççı ne demek?” sorusuna detaylı olarak cevap vermeden önce bu kurumların görev alanının kapsamına değinmek gerekir. Sermaye piyasası aracı ihraç etmek için özel olarak belirlenen merciler bulunur. Söz konusu yetkililer, sermaye piyasasında işlem görecek araçların halka arz edilmesini sağlar. Halka arz edilmeksizin ihraç edilen menkul değerlerde de söz sahibi olur. 

Sermaye piyasasındaki işlemler sonucunda yatırımcılar ve ihraççılar arasında finans ilişkisi kurulur. İhraççı, kamuyu aydınlatma görevini üstlenir. Yatırımcının ilgili menkul kıymet hakkında detaylı bilgiye sahip olmasını mümkün kılar. Hak ve risklere dair görüşlerini de içeren bir belge sunarak sermaye piyasasına olan güveni artırır. İzahname adındaki belgeyle yatırımcıların ilgili hisse senedi hakkında değerlendirme yapmasına olanak sağlar. Bu belgeyi eğer varsa garantörle birlikte hazırlar. İlgili belgede yer alan bilgiler, hukuki anlamda bağlayıcı bir nitelik taşır. `,
    letter: "İ"
  },
  {
    id: "124",
    title: "İkame Mal ve Tamamlayıcı Mal Nedir?",
    description: `İnsan gereksinimlerinin ve ihtiyaçlarının tatmininine yarayan her türlü vasıta emtia yani mal olarak kabul edilir. Ekonomik faaliyetlerin genel amacı, ihtiyaçları temin edebilmek için gereken mallara sahip olmaktır. İktisatta ve pazarlamada emtianın pek çok çeşidi vardır. Bunların başında normal, düşük ve ikame mallar gelir.

Talebi gelir artışına bağlı olarak artan ürünler, normal mallardır. Örneğin kişinin geliri arttıkça daha fazla, azaldığında ise daha az kıyafet alır. Gelirin artmasına bağlı olarak talebi düşmekte olan ürünler ise fakir ya da düşük mallar olarak nitelendirilir. Bu mallar, defolu ya da ayıplı değildir.`,
    letter: "İ"
  },
  {
    id: "125",
    title: "İkincil Piyasalar Nedir?",
    description: `Önceden ihraç edilmiş olan menkul kıymetlerin üçüncü şahıslar arasında alım satım işlemleri, ikincil piyasalarda gerçekleştirilir. İkincil piyasalar nedir sorusunu en net hâliyle bu şekilde yanıtlamak mümkündür. Küçük, orta ve büyük ölçekli tüm yatırımcılara, yüksek hacimli ve düşük maliyetli işlemlerle avantaj sağlayan menkul kıymet alım satımlarına ikincil piyasa işlemleri adı verilir. Menkul kıymet niteliğindeki yatırım araçlarının likiditesini artıran ikincil piyasalar aynı zamanda birincil piyasa için de talep yaratır. 

Devlet ya da anonim şirketler tarafından ihraç edilen menkul kıymetlerin satışı birincil piyasa kapsamında gerçekleşir. İhraçtan çıkan ilk menkul kıymetin tekrar başka bir alıcıya satılması ise ikincil piyasada gerçekleşir. İkincil piyasa işlemleri, kıymetlerin ilk ihraçlar sonrasındaki alım satım durumunu ifade eder.`,
    letter: "İ"
  },
  {
    id: "126",
    title: "İlave Kotasyon Nedir?",
    description: `Menkul kıymetler borsasında sermaye piyasası araçlarının işlem görmesi bazı şartlara bağlı olarak gerçekleşir. Kotasyon kriterleri olarak adlandırılan bu şartların sağlanması sonucunda piyasa araçlarının işlem görmesi kabul edilir. Bu noktada finans piyasalarıyla ilgilenen pek çok kişi, ilave kotasyon nedir sorusunun cevabını merak eder. İlgili terim; bir kuruluşun, borsa listelerinde bulunan mevcut hisselerine yenisini eklemesi için gerekli izni almasını ifade eder. 

Kotasyon, süreklilik kapsamında değerlendirildiğinde iki çeşit fiyata sahip olur. Bunlar, ilk ve ikinci fiyattır. Her zaman geçerli olan alış (bid) değeri, ilk fiyatı işaret eder. Ek olarak açıklanan alış fiyatı ise ikinci fiyat şeklinde adlandırılır. Şirketlerin pazar listesinde bulunan mevcut kayıtları, ortaklık ve veya alacaklılık hakları noktasında kotasyon bildirimlerinin yapılması ile yakından ilişkilidir.`,
    letter: "İ"
  },
  {
    id: "127",
    title: "İlk Kotasyon Nedir?",
    description: `İlk kotasyon, sermaye piyasasında yer alan hisse senetlerinin borsa işlem listesine kaydedilmesidir. Daha detaylı ifade edilecek olursa hâlihazırda işlemlere konu edilen hisse senetlerinin ilk defa borsa kotuna alınması demektir. Belirli şartları taşıyan şirketler sermaye piyasasının listesine girer. Bu işlem, borsaya kote olmak şeklinde de ifade edilir. Borsaya kote olan şirketler, hisselerini halka arz etme hakkı kazanır.  

İlk kotasyonla birlikte hisseleri borsada işlem gören şirketlerde finansman artışı meydana gelir. Şirketin daha tanınır hâle gelmesi mümkün olur. Dolayısıyla şirketler nezdinde işlem listesine girmek son derece önemli bir durumdur. Sadece belirli şartları taşıyan şirketler kote edildiği için kotasyon bir prestij göstergesidir. İlerleyen dönemlerde yapılması istenen yerli ve yabancı yatırımlar için teşvik niteliği taşır. `,
    letter: "İ"
  },
  {
    id: "128",
    title: "İMKB Ne Demektir? Açılımı Nedir?",
    description: `Neredeyse her ülkede yatırımcıları bir araya getiren, alım-satım işlemlerinin güvenli ve adil bir ortamda gerçekleştirilmesini sağlayan borsa kurumları bulunmaktadır. İMKB, Türkiye’de faaliyet gösteren tek borsa kurumudur. İMKB açılımı, İstanbul Menkul Kıymetler Borsası şeklindedir. 1985 yılında kurulan İMKB, sermaye piyasasında faaliyet gösteren yerli ve yabancı menşeli bankaların, aracı kurumların ve yatırımcıların alım-satım işlemlerini gerçekleştirdiği bir pazardır. 

İstanbul Menkul Kıymetler Borsası, 5 Nisan 2013 tarihinde Borsa İstanbul (BIST) adını almıştır. Türkiye’de borsa hisse senedi alım-satım işlemleri gerçekleştiren tüm yatırımcılar, BİST bünyesinde faaliyet göstermektedir. BIST’in temel amacı, sermaye piyasası araçları başta olmak üzere borsada işlem görmeye uygun her türlü varlığın istikrarlı ve güvenilir bir ortamda alım-satımını mümkün kılmaktır. `,
    letter: "İ"
  },
  {
    id: "129",
    title: "İntifa Senetleri Nedir?",
    description: `İntifa senetleri, hisselerden farklı olarak sahibine sadece mal varlıklarına ilişkin haklar sağlayan belgelerdir. Kıymetli evrak sınıfında yer alan intifa senedi, şirketler için herhangi bir payı temsil etmez. Çünkü Türk Ticaret Kanunu’na göre intifa senedi bulunan kişilere pay sahipliği verilmez. Kelime anlamı “yararlanma” olan intifa, anonim şirketlere ortaklık hakları tesis etmez. İntifa senedi örneği olan şirketler ve kuruluşlar, yalnızca mal varlığı üzerinde haklara sahip olur. 

İntifa senetleri nedir sorusuna Türk Ticaret Kanunu “senet” olarak cevap verir. Ancak kişiye veya kuruluşa intifa haklarının tanınması için senedin çıkarılması gerekli değildir. Yapılan ana sözleşmede bu hakkın tanınmasına dair bir hükmün geçmesi yeterlidir. `,
    letter: "İ"
  },
  {
    id: "130",
    title: "İrtibat Bürosu Nedir?",
    description: `Yurt dışı menşeli bir firmanın Türkiye pazarında faaliyet göstermek için açtığı ofis, irtibat bürosu olarak adlandırılır. Bu bürolar bilgi ve destek alanında hizmet sağlar. İrtibat büroları yabancı markanın yerel pazarda faaliyet göstermesi ve sektörde yer edinmesi için önemlidir. 

İrtibat ofislerinde ürün, hizmet satışı yapılmaz ya da herhangi bir ticari faaliyette bulunulmaz. Büroların amacı; marka, sektör ve müşteri kitlesi arasındaki bağı kurmaktır. Ülke piyasasına giriş yapmayı düşünen bir yabancı şirketin öncelikle İrtibat Bürosu Mevzuatı’na uygun ofis açması gerekir. `,
    letter: "İ"
  },
  {
    id: "131",
    title: "İşlem Birimi Nedir?",
    description: `Sermaye piyasasında yer alan herhangi bir aracın kendisiyle ve katlarıyla hareket etmeyi  sağlayan değerine işlem birimi denir. Bu birim lot olarak ifade edilir. Sermaye piyasasında yatırımcıların çok sık karşılaştığı bu terim, aynı zamanda payı ifade eder. Daha basit bir tabirle lot, borsa işlem birimidir. 

Borsadaki tüm pay alma işlemlerinde 1 lot, 1 adet hisse senedine karşılık gelir. Yatırımcılar satış işlemi gerçekleştirirken 1 lot ve katları üzerinden hesaplama yapar. Ayrıca 1 lot, 1 TL değerindeki hisse senedine karşılık gelir. Sözlük anlamı bölüştürmek, paylaştırmak olan lot, Forex piyasasında yapacağınız işlemin değerini de ifade eder. Bahsi geçen piyasada yatırımcılar, 1 lottan daha küçük paylarla işlem yapabilir. `,
    letter: "İ"
  },
  {
    id: "132",
    title: "İşlem Hacmi Nedir?",
    description: `İşlem hacmi; endeks, hisse senedi, kontrat ya da borsadaki günlük alım satımların tamamına denir. Söz konusu menkul kıymetlerin alım satımlarının hepsini kapsayan bu terim, yatırımcıların karşısına sıklıkla çıkar. Günlük işlem hacmi, menkul kıymet adedinin işlem yoğunluğunu gösterir. 

İşlem hacmi yüksek olduğunda yatırımcılar daha güvenli hareket edebileceklerini düşünür. Hacmi artan hisseler, çok fazla el değiştirmiş olan senetlerdir. Hacmi düşük hisseler ise senetlerin daha az el değiştirdiğini gösterir. Yatırımcılar da bu değerin büyüklüğüne göre hareket eder.`,
    letter: "İ"
  },
  {
    id: "133",
    title: "İşlem Miktarı Nedir?",
    description: `İşlem miktarı, belirli bir dönem içinde alınıp satılan menkul kıymet sayısıdır. Kavrama dair detaylı tanıma geçmeden önce bu terimin etki alanını belirtmekte fayda vardır. Menkul kıymetlerin el değiştirmesi sonucunda işlem miktarında artış meydana gelir. Bu artış, menkul kıymete olan talebe dair bir gösterge niteliği taşır. Dolayısıyla Menkul Kıymet Piyasası’nı kullananlar, işlem miktarı nedir gibi soruları sıklıkla yöneltir. İşlem adedi, sermaye piyasasında alınıp satılan menkul değerlerin el değiştirme sayısını belirtir. İşlem fiyatıyla birlikte hacmin değişmesinde önemli rol oynar. 

İşlem miktarı, sermaye piyasasında alım ve satım yapmak isteyenler tarafından takip edilir. Menkul değere olan talep, yoğunluğa dair bir gösterge niteliği taşır. Günlük işlem hacmini etkileyen bir unsur olduğu için menkul kıymetin rağbet görmesinde belirleyici rol oynar. İşlem fiyatıyla birlikte hacmin doğru veya ters orantılı olarak artış göstermesini sağlayarak yatırımcıların geleceğe dönük beklentilerini ve karar süreçlerini şekillendirmesinde etkili olur. `,
    letter: "İ"
  },
  {
    id: "134",
    title: "İtfa Nedir?",
    description: `
“İtfa ne demek?” sorusuna kısaca borcu geri ödemek veya satın almak şeklinde cevap verilebilir. Bu kavram, ticari hayatta bir borcun az miktarda yavaşça ödenmesini ifade eder. Aynı zamanda demirbaşların ve aktif durumdaki kıymet değerlerinin yıllara bölünerek ortadan kaldırılması da itfa nedir sorusuna cevap olur.  

İtfa, borçların kapatılması için yapılan her çeşit ödemeyi kapsar. Söz konusu kavram farklı alanlarda değişik şekillerde yorumlanabilir. Ticarette ise itfa, borç senetlerinin belirlenen vadede anapara ve faizleriyle geri ödenmesidir.`,
    letter: "İ"
  },
  {
    id: "135",
    title: "İzahname Nedir?",
    description: `
Ekonomi ve borsaya yeni girmiş yatırımcılar, izahname nedir sorusu ile sık sık karşılaşır. İzahname, ihraç yapacak ya da halka arz edilecek şirket ile ilgili bilgi veren belgedir. Belge, ihraç işlemini yapacak ya da halka aracılık edecek olan uzman kurumca hazırlanır. 

İzahnameler onaylandıktan sonra 15 gün içinde ilan edilir ve kamuya duyurulur. Bu belgelerin geçerlilik süresi ise Resmî Gazete tarafından 12 ay olarak belirtilir. Bu sürenin ardından yapılacak halka arz izahnamelerinin tümünün onaylanması gerekir.`,
    letter: "İ"
  },
  {
    id: "136",
    title: "Kalanını İptal Et (KİE) Ne Demek?",
    description: `Yatırımcılar, borsadaki alım satım işlemlerini gerçekleştirmek için aracı kuruma birtakım emirler verir. Aracı kurumlar bu emirleri borsa kurallarına uygun bir hâle getirerek piyasaya iletir. Emir tipleri; süre, limit, fiyat ve işlem maliyetlerine göre gruplara ayrılır. Kalanını iptal et (KİE) ise bu emir tiplerinden biridir. 

Özellikle internet bankacılığında KİE kısaltması ile yatırımcı karşısına çıkan bu kavram,“KİE ne demek?” sorusu akıllara gelir. KİE, kısmen gerçekleşme koşulu ile verilen aktif emir tipidir. Talimat verildiği anda bekleyen karşıt emirler ile bu istek eşleşir. Gerçekleşmeyen tutar bu sayede otomatik olarak iptal edilir. Kalanını iptal et (KİE) nedir sorusuna kısaca bu şekilde yanıt verilebilir. `,
    letter: "K"
  },
  {
    id: "137",
    title: "Kaldıraç Oranı Nedir?",
    description: `Kaldıraç oranı, finans dünyasında sıklıkla kullanılan bir terimdir. Bu terim, genellikle borçlar ve öz sermaye ile ilgili kavramlarda kişilerin karşısına çıkar. “Kaldıraç oranı nedir?” sorusunun cevabı kısaca “İşletmelerin kaynak yapısını ve finansman oranlarını gösteren bir terim” şeklindedir. Bu sistem ile yatırımcılar finansal piyasalarda çok daha az kaynak ile büyük hacimli işlemler yapabilir. 

Kaldıraç sistemi iki basamaktan oluşur. Çalışma kaldıracı, bu sistemin ilk basamağıdır. Bu kaldıraç, şirketlerin üretim ile satışlarını karşılaştırmak üzerine kurulur. Uzun vadede satışlarda görülen değişimlerin kârları üzerindeki etkisini rasyonel bir şekilde görebilmek için çalışma kaldıracı kullanılır. Sistemin bir diğer basamağı ise finansal kaldıraçtır. Finansal kaldıraç oranı, şirketlerin borçlarının sahip oldukları varlıklara yani pasif kaynaklara bölünmesi ile bulunur. Bu hesaplama ile şirketin varlığının ne kadarının borçlar için bir finansman olarak kullandığı hesaplanabilir. `,
    letter: "K"
  },
  {
    id: "138",
    title: "Kaldıraçlı İşlem Nedir?",
    description: `Yatırımlarını finans piyasalarında değerlendirmek isteyen bireylerin sıkça karşılaştığı terimlerden biri kaldıraçlı işlemdir. Finansal işlemlerde rastlanan kaldıraç uygulaması, az miktarda sermaye ile daha fazla kâr elde etmeyi hedefleyen bir stratejidir. Bu uygulama borsada yapılan yatırımlarda, işlem hacmini artırmayı sağlar. 

Kaldıraçlı işlem, yatırım getirisini maksimize etmek amacıyla uygulanır. Söz konusu işlemde gelir ve kâr hedefi, özkaynak yerine borçla finanse edilir. Finans piyasalarında kaldıraç, herhangi bir kaynağın toplam parasal büyüklüğünden daha az miktarda teminat ile al sat yapmayı mümkün kılan bir varlıktır. Oransal olarak ifade edilen kaldıraç 1:10 gibi sayısal veriler şeklinde gösterilir.`,
    letter: "K"
  },
  {
    id: "139",
    title: "Kamuyu Aydınlatma Platformu (KAP) Nedir?",
    description: `Özellikle finans dünyasına yeni adım atmış olan kişiler “Kamuyu Aydınlatma Platformu nedir?” sorusunu merak eder. KAP, Sermaye Piyasası Kurulu ve Borsa İstanbul üzerinden işlem yapmak isteyen kişileri aydınlatmak için oluşturulan bir kuruluştur. KAP, çeşitli yatırım araçları ile ilgilenen kişiler, bu platformu kullanarak doğru bilgiye erişebilmektedir. 

Sistemin işletimi Merkezi Kayıt Kuruluşu tarafından yürütülür. Bu platformda kamuya açıklanması gereken bildirimler elektronik imzalı bir şekilde iletilir. Sistem, 7-24 esasına göre çalışır. `,
    letter: "K"
  },
  {
    id: "140",
    title: "Kâr Nedir?",
    description: `Kâr, ticari bir faaliyet sonucunda kazanılan gelir ve ödenen gider arasındaki farktır. Bir diğer ifadeyle getiri, girişimcilerin üretim sürecinde katlandığı maliyetler ile elde ettiği kazanç arasındaki farkı gösterir. 

Kavrama dair detayları aktarmadan önce girişimcinin tanımını yapmak ve üretim sürecinde neleri hedeflediğinden bahsetmek yararlı olabilir. 

Girişimci, üretim faktörlerinden yararlanarak gelir elde etmeyi hedefleyenlere verilen isimdir. İşletme sahipleri, söz konusu sürece başlamadan önce katlanmak zorunda oldukları masrafları ve ürünlerin satışından elde edecekleri geliri hesaplar. Maliyetinin üzerinde bir fiyatla yapılan satışlardan kazanç elde edilir. Aksi durumda ise işletme zarar eder. `,
    letter: "K"
  },
  {
    id: "141",
    title: "Kâr Payı Nedir?",
    description: `Finans sektöründe sunulan hesap çeşitleri, işlevleri doğrultusunda birbirinden ayrılır. Katılım bankacılığı olarak adlandırılan sistem, fon kullanımı ile kâr eldesi sağlayan projelerden biridir. Kâr ve zarara katılma usulüyle gerçekleştirilen bu sistem, faizsiz bankacılık olarak da adlandırılır. Faizsiz bankacılık sektörünün önemli kavramlarından biri kâr payıdır. 

Kâr payı; tasarruf sahiplerinden toplanan fonların, ticaret ve sanayide değerlendirilmesi sonucu elde edilen kazancın birikim yapmak isteyen kişilere paylaştırılmasıdır.`,
    letter: "K"
  },
  {
    id: "142",
    title: "Kâr-Zarar Ortaklığı Belgesi (KOB) Nedir?",
    description: `Kısaca KOB olarak bilinen kâr – zarar ortaklığı, yatırım araçları için kullanılan bir tabirdir. Kâr-zarar ortaklığı belgesi (KOB) de bu yatırım işlemi sonucunda hazırlanan dokümandır. Bu belge, uzun vadeli fon sağlama kaynağıdır. Bu kaynak, anonim şirketler tarafından kâr ve zarar karşılığı ihraç edilen bir menkul kıymet türüdür. Kâr-zarar ortaklığı belgesi (KOB) nedir sorusu bu şekilde açıklanabilir. 

Bu belge, imtiyazlı paylar ile tahvil ve borç senetleri arasında bir niteliğe sahiptir. Yatırımcıya, söz konusu şirketin kâr ve zararına katılma hakkı tanır. Ancak bir pay senedi olarak değerlendirilmez. Bu yatırımcılar, kârından ve zararından etkilendikleri şirket ile ilgili söz hakkına sahip değildir.`,
    letter: "K"
  },
  {
    id: "143",
    title: "Katılma İntifa Senedi Nedir?",
    description: `Katılma intifa senedi, Türk Ticaret Kanunu’nun anonim şirketlere özgü tanıdığı haklardan biridir. Kelime anlamı “yararlanmak” olan intifa, hak sahibine herhangi bir pay tahsis etmez. Bu senet türü sahibine yalnızca mal varlığına dair haklar tanır. İntifa senedi genellikle şirketin kuruluşunda emeği geçen kişiler için çıkarılır. Ancak söz konusu evrak, bu kişilere ortaklık payı ya da yönetimde söz hakkı tanımaz. 

İntifa senedini çıkarmak için ana sözleşmede hükmün yer alması yeterlidir. Bu hüküm, sözleşmenin asıl hâlinde yer almıyorsa değişikliğe gidilerek senet çıkarılabilir. Söz konusu evrak, kurucu hisse senetleri olarak da tanımlanır. Katılma intifa senedi nedir sorusuna bu şekilde cevap verilebilir. `,
    letter: "K"
  },
  {
    id: "144",
    title: "Kaydi Takas Nedir?",
    description: `Kaydi takas, menkul kıymet piyasasındaki üyelerin borç ve alacaklarının hesaben ödenmesidir. Bu ödeme yöntemi aracılığıyla borsada işlem yapan yatırımcıların yükümlülük ve risklerinde azalma meydana gelir. 

Kaydi takas nedir sorusunu verilecek cevabı detaylandırmak gerekirse söz konusu sistem, menkul kıymetlerin alım ve satımında fiziki yöntemler yerine virman yoluyla aktarım yapılması sürecidir. Bu süreçte herhangi bir fiziki para akışı söz konusu olmaz. Üyelerin sahip olduğu saklama hesaplarından borçları ve alacakları ödenir.`,
    letter: "K"
  },
  {
    id: "145",
    title: "Kayıtlı Sermaye Nedir?",
    description: `Kayıtlı sermaye, şirketlerin sermaye artırımı hususunda yönetim kuruluna tanınan yetkinin tavanı olarak ifade edilmektedir. Şirketin esas sözleşmesindeki hükme dayanan şirketin ilgili pay senetlerinden çıkarabileceği tavan sermaye miktarı kayıtlı sermaye olarak adlandırılmaktadır. İlgili tanımdan hareketle, belirlenen tavan miktardan daha fazla sermaye belirlenmek istenirse şirketin esas sözleşmesi üzerinde değişiklik yapması gerekmektedir. 

Bir diğer ifade ile, yönetim kurulu yetkisinin tavanını gösteren kayıtlı sermaye bir sınırdır. İlgili sınırın üzerinde bir sermaye miktarı belirlemesi için şirketlerin esas ana sözleşmesi bünyesinde değişikliğe gitmesi gerekmektedir. Yukarıdaki belirtilen tanımı daha net ifade etmek gerekirse, herhangi bir konu için harcama yapılacağı zaman şirketin yönetim kurulunun sermaye artırma hakkı mevcuttur. İlgili hak sayesinde şirketin yönetim kurulu sermaye artırımını gerçekleştirebilmektedir. İlgili sermaye, ele alınan üst limit diğer bir ifade ile çıkarılabilecek tavan sermaye miktarı şeklinde ifade edilmektedir. `,
    letter: "K"
  },
  {
    id: "146",
    title: "Kesin Alış Nedir?",
    description: `Finans sektörüne dair araştırma yapan birçok kişi, “Kesin alış nedir?” sorusunun cevabını merak eder. Kesin alış, para politikasına yönelik açık piyasa işlemleri çerçevesinde bir menkulün doğrudan alımıdır. Piyasada kalıcı para eksikliği olduğunda Merkez Bankası’nın menkul kıymet almasını ifade eder. 

Merkez Bankası, kendi portföyü için aldığı kıymet menkulün karşılığında sisteme para verir. Böylece sisteme kalıcı olarak para (likidite) girişi sağlanır. Karşılıklı olarak yapılan bu işlem sırasında alım yapılırken en yüksek fiyatlı emirlere öncelik verilir. Aynı fiyatlı emirlerde ise zaman önceliği esastır.`,
    letter: "K"
  },
  {
    id: "147",
    title: "Kesin Satış Nedir?",
    description: `Açık piyasa işlemleri kapsamında Merkez Bankası’nın kalıcı olarak piyasaya menkul değerler satmasına kesin satış denir. Finansla ilgilenenler tarafından sıklıkla sorulan “Kesin satış nedir?” sorusuna, para politikalarına yönelik olarak Merkez Bankası’nın gerçekleştirdiği satış türü şeklinde yanıt verilebilir. 

Piyasada likidite fazlası olduğunda Merkez Bankası portföyünde bulunan menkul kıymeti satıp geri verilmemek üzere parayı keser. Böylece piyasadaki likidite dengesi korunur. Her ekonominin finansal yapısına uygun şekilde likidite oranının maksimum seviyede olması istenir. Ancak likidite fazlalığı belirlenen sınırı aştığında ekonomik denge etkilenir. Merkez Bankası tarafından yapılan satış işlemleri de bu dengeyi korumaya yöneliktir.`,
    letter: "K"
  },
  {
    id: "148",
    title: "Konkordato Nedir?",
    description: `Konkordato, iflas anlaşması anlamına gelir. Bu özel yöntem, borçlu ve alacaklı kişinin menfaatlerini korumayı amaçlar. Şirketlerin borçlarını yapılandırması için başvurdukları bir yöntem olarak bilinir. Konkordato, en kısa tanımıyla borçlunun alacaklıları ile anlaşması şeklinde özetlenebilir. Borçlu kişi ya da firma, iflastan kurtulmak için alacaklıları ile hukukî çerçevede anlaşma sağlar. Bu süreçte kişinin borçları yapılandırılır. Borcun vadesinde ödenmeme riski olduğunda indirim yapabilir ya da fazladan vade verebilir. Bu sayede iflasın eşiğinden dönmek mümkün olabilir.

Konkordato, her borçlu kişi tarafından ilan edilemez. Yalnızca bozulan finansal yapısı düzeldiğinde borcunu ödeyebilecek kurumlar tarafından kullanılır. Bu aşamada iyi niyet ve güven oldukça önemlidir. Konkordato sürecinin başlayabilmesi için borçlu kişinin talepte bulunması gerekir. Alacaklılar ile anlaşma sağlanırsa hukukî süreç başlatılır. Borç indirimi ve vade uzatma işlemleri ise mahkeme tarafından onaylanırsa geçerlilik kazanır. Konkordato nedir sorusunun cevabı, bu şekilde açıklanabilir.`,
    letter: "K"
  },
  {
    id: "149",
    title: "Konsolide Nedir?",
    description: `Finans sektöründe sıkça karşılaşılan bir terim olan konsolide, en temel tanımıyla şirketleri finansal açıdan bir araya getirmektir. İş dünyasının önemli kavramları arasında yer alan konsolidasyon, finansal anlamda uygulanan yöntemleri ve takip edilen süreçleri ifade eder. Konsolidasyon işleminde ayrı şirketler bir araya gelerek faaliyet alanlarında yeni bir tüzel kişilik yaratılır. 

Konsolide, şirketlerin ana ortaklık ile birleşme sürecini tanımlamak için kullanılan bir kavramdır. Ayrı şirketler, bu ana ortaklığın kontrolü sayesinde mali tablolarını birleştirir. Bu işlem sonucunda ortak bir mali tablo ortaya çıkar. Ayrıca konsolidasyon, iş alanında doğrudan raporlama ve muhasebe süreçleriyle de ilişkilidir. Firmaların muhasebe departmanları tarafından yürütülen konsolide süreci, ayrı şirketlerin tek sistem üzerinden daha yüksek performans göstermesine yardımcı olur. Uluslararası piyasalarda yatırım yapan şirketlerin üretim alanında birleşmesiyle konsolide işlemi gerçekleşir.`,
    letter: "K"
  },
  {
    id: "150",
    title: "Konvertibilite Nedir?",
    description: `Konvertibilite, döviz yatırımcılarının sıkça karşılaştığı kavramlar arasında yer alır. Kelime anlamı olarak çevrilgenliğe karşılık gelen bu kavram, dövizler arası dönüştürülebilirliği ifade eder. Döviz kurlarındaki hızlı dalgalanmaları takip edenler ve yeni yatırım fırsatları arayanlar konvertibilite nedir sorusunun cevabını sıkça araştırır. Çevrilgenlik, gerekli özellikleri taşıyan para birimlerinin arasında gerçekleşen serbest değişimi ifade eder. Çevrilgenlik için tüm özelliklere sahip olan dövizlerden ise konvertibl para olarak bahsedilir. Farklı ülkelerin para birimlerinin arasındaki değişimi ifade eden bu sistem, uygulama şekline göre çeşitlenir. Bu çeşitliliğin başlıca nedeni ise ülkelerin paraları arasında değişim gerçekleşirken uygulanan kısıtlama yoğunluğudur. 

Konvertibilite, farklı ülkelere ait olan para birimlerinin arasında yapılan değişim işlemlerini ifade eder. Bir ülkenin parasının başka bir dövizle ya da altınla değiştirilmesi çevrilgenlik olarak açıklanabilir. Her ülke kendi para birimi için değişimi yapılabilecek olan dövizleri belirleyebilir. `,
    letter: "K"
  },
  {
    id: "151",
    title: "Kotasyon Nedir?",
    description: `Bu kavram finans ve borsa alanında ilgili kişilerin sıklıkla karşılaştıkları ifadelerdendir. Mali işlerle alakalı bireylerin artması “Kotasyon nedir?” sorusunun sorulmasına neden olur. Söz konusu kelime, menkul kıymet borsasında işlem görmekte olan hisse senedi gibi belgelerin çeşitli kriterleri taşıması durumunda piyasada listelenmesini ifade eder. Bunun daha iyi anlaşılabilmesi için menkul kıymet kavramının ve bu alanda işlem gören belgelerin bilinmesi gerekir.  

Menkul kıymet, taşınabilir nitelikte mali değeri olan evrak için kullanılan bir isimdir. Hisse senedi, tahvil ve bono bu dokümanların en çok kullanılan türleridir. Menkul kıymet borsası ise bu belgelerin alım satımlarının yapıldığı bir açık pazar yeri olarak tanımlanabilir. Menkul kıymet borsasında işlem görecek olan bir hisse senedinin, bu alanda satışa uygun olmasına ve piyasada listelenmesine kotasyon yani geçer değer denir. Bunun belli şartları ve çeşitleri bulunur.`,
    letter: "K"
  },
  {
    id: "152",
    title: "Kredi Arzı Daralması Nedir?",
    description: `Kredi arzı daralması ekonomide likiditenin azaldığını gösterir. Daralma durumunda yatırım sermayesi elde etmek zorlaşır. Bu da ekonomik parametrelerin durgunlaşmasına neden olur. Kredi arzı temel anlamda bankaların ve yatırımcılara kaynak sağlayan kuruluşların, kredi verme kapasitelerinin azalmasıdır. 

Arz daralması durumunda kişiler kredi almakta ve yeni yatırımlar yapmakta zorlanır. Bu durumda bazı sektörlerde iflaslar da söz konusu olabilir. Çünkü reel piyasalarda kredi kullanımı yalnızca yatırım yapmak için değil, mevcut borçları ödemek adına da tercih edilen bir yöntemdir. Arz daralması durumunda ekonominin değişik göstergelerinde olumsuz etkilerin olabileceğini belirtmek gerekir. Kredi arzı nedir sorusuna cevap verdikten sonra şimdi de daralmaya neden olan faktörlere geçelim.`,
    letter: "K"
  },
  {
    id: "153",
    title: "Kredili Menkul Kıymet İşlemleri Nedir?",
    description: `Menkul kıymetler kredisi, BIST tarafından işleme konulan pay senetlerinden daha fazla alım yapılmasına imkân tanır. Tüm bu alımlar, kredili menkul kıymet işlemleri olarak adlandırılır. Açığa satış ve ödünç işlemleri ile hisse senedi alımları da bu kategoride yer alır. Kredili menkul kıymet işlemleri nedir sorusu, bu şekilde kısaca cevaplanabilir. 

Her yatırımcının bir müşteri portföyü vardır. Bu portföyde; pay senedi, döviz, fon ve benzeri menkul kıymetler de yer alır. Menkul kıymetler kredisi sayesinde bu değerler, teminat olarak kabul edilerek BIST’te işleme konulur. Ancak bu işlem, kredilidir. `,
    letter: "K"
  },
  {
    id: "154",
    title: "Kullanım Fiyatı Nedir?",
    description: `Borsa ile ilgilenenlerin sıkça duyduğu kavramlardan biri olan kullanım fiyatı, opsiyon işlemleri ile doğrudan ilgilidir. Küresel çevrelerde strike price olarak da bilinen bu kavramı anlayabilmek için öncelikle opsiyon sözleşmeleri hakkında bilgi edinmek gerekir. Opsiyon sözleşmesi; bir mal, kıymet veya finansal gösterge üzerinden hazırlanır ve iki taraf arasında yapılır. Bu sözleşmede alıcı tarafın ödeyeceği tutar önceden belirlenir. Bu tutara, opsiyon primi denir.

Opsiyon sözleşmesi; alıcıya, bahsi geçen malı / kıymeti / finansal göstergeyi belirtilen tutar karşılığında belirli bir vadeye kadar satma hakkı verir. Fakat satış işlemi, yalnızca belirlenen bir fiyat karşılığında gerçekleştirilir. İşte bu rakam, kullanım fiyatı nedir sorusunun yanıtıdır. `,
    letter: "K"
  },
  {
    id: "155",
    title: "Kuponlu İhraçlar Nedir?",
    description: `‘’Kuponlu ihraçlar nedir?’’ sorusu, finans piyasası katılımcılarının merak ettiği konular arasında yer alır. Kuponlu ihraç, en kısa tanımıyla bir menkul kıymetin dönemsel faiz ödemesini işaret eder. Kupon ödemesi hesaplanırken tahvilin ihraç tarihi ile vade baz alınır. İki dönem arasında verilen yıllık faiz, kupon ödemesinin bedelini ortaya çıkarır. 

Kupon terimi, tahvil sertifikalarına iliştirilmiş belgeyi ifade eder. Kuponlu bono veya hamiline yazılı bonolar, faiz ödemesini tahsil etmek için kullanılır. Faiz ödemesini tahsil etmek isteyen yatırımcının fiziki kuponunu ibraz etmesi zorunlu koşullar arasında yer alır. `,
    letter: "K"
  },
  {
    id: "156",
    title: "Kupür Nedir?",
    description: `
Kupür, pay ortaklığı planı yapan hisse sahiplerini yakından ilgilendiren bir kavramdır. Ortaklık yatırımları ile yeni yeni ilgilenen çoğu kişi ise kupür nedir sorusuna cevap arar. Bu kavram, temel olarak hisse karşılığında verilen değerli kâğıdı ifade eder. Para, tahvil ve hisse senetlerinin üzerinde yazan değerden bu adla bahsedilir. Hissenin dağılımı ve miktarı şirketin gelecek planlarına göre belirlenir. Hisse karşılığında verilen bu kıymetli kâğıtlar, üzerinde yazan rakama göre değer görür. 

Bu kavram, şirketin bölünebilirliği ile doğru orantılıdır. Şirketler, yönetim kurulunun izniyle gelecek planlarına ve anlık ihtiyaçlarına uygun şekilde dağılıma gidebilir. Payların büyüklüğü de yine şirketin ortaklık konusundaki gelecek planlarına göre tespit edilir. Bu değerli evrakın özellikleri ileriki süreçte gerçekleşebilecek şirket hikâyelerine göre değişiklik gösterir. `,
    letter: "K"
  },
  {
    id: "157",
    title: "Kur Riski Nedir?",
    description: `Döviz kuru, bir ülkenin para biriminin diğer ülkeler karşısındaki değeridir. İki ülkenin para birimleri arasında oluşan farklılık sonucu risk ortaya çıkabilir. Kur riski, dövizde yaşanabilecek dalgalanmalar sonucu ülke varlıklarının zarar etmesidir. 

Bir şirket, farklı kur kullanmak istediği zaman tercih ettiği birime bağlı olarak değişen bir riskle karşı karşıya kalabilir. Firmalar yapacakları işlemi henüz tamamlamadan yerel para ve diğer ülkelerin birimleri arasında ortaya çıkan değişiklikler nedeniyle zarar görebilir. Kur riski nedir sorusu kısaca bu şekilde açıklanabilir.  `,
    letter: "K"
  },
  {
    id: "158",
    title: "Kurtaj Nedir?",
    description: `
Menkul kıymet alım satımının gerçekleştirildiği borsada, yatırımcılar farklı kanallar üzerinden kazanç elde edebilir. Oldukça geniş bir işlem ağına sahip olan bu piyasada, yatırımcıları ilgilendiren birçok terim bulunur. Bunlardan biri olan kurtaj, ekonomi terimidir ve İngilizcesi “Brokerage Fee” olarak bilinir. Borsada kurtaj nedir sorusuna, piyasada yapılan işlemler üzerinden alınan komisyon şeklinde cevap vermek mümkündür. Bu komisyon, aracı kuruluşların temel gelir kaynaklarından birini oluşturur.

Borsada işlem yapmak için pek çok aracı kuruluş bulunur. Kurumlar, kişiler adına alım satım işlemini gerçekleştirir ve bunun karşılığında belli bir miktar ücret alır. Bu ücret, yapılan işlem üzerinden hesaplanır ve tahsil edilir. Borsada kurtaj olarak ifade edilen bu kesinti, aracı kurumlar tarafından belirlenir. Komisyon olarak da ifade edilen oran, Serbest Piyasa Kurulu’nun oluşturduğu bazı tanımlamalara göre belirlenir. 2006 yılına kadar üst sınırla kısıtlanan komisyon oranı, günümüzde yalnızca bir alt değer limitine sahiptir. Kuruluşlar, bu değerin altına düşmeden istedikleri oranı belirlemekte serbesttir.`,
    letter: "K"
  },
  {
    id: "159",
    title: "Kurucu Hisse Senetleri Nelerdir?",
    description: `Kurucu hisse senetleri, Türk Ticaret Kanunu kapsamında düzenlenmiş önemli bir kıymetli evrak türüdür. Bu hisse senetleri, isminden de anlaşılacağı üzere, şirketin kuruluşu esnasında kullanılır. Aynı şekilde bir şirketin kuruluşundan sonraki süreçte de sermaye artırımı amacıyla bu senetlerin çıkarılması mümkündür. 

Uygulamada kurucu hisse senetlerine müesses hisseleri, kurucu payları veya hakları gibi isimlendirmeler yapıldığı görülür. Bazı uzmanlar ise kurucu senedi kavramının kullanılmasını daha doğru bulur. “Kurucu hisse senetleri nedir?” sorusunun cevabı kısaca bu şekilde açıklanabilir. `,
    letter: "K"
  },
  {
    id: "160",
    title: "Kurumsal Yatırımcılar Kimlerdir?",
    description: `
Kurumsal yatırımcılar, Sermaye Piyasası Kurulu tarafından belirlenen kurallara uygun şekilde kurum ya da bireyler adına fon aktarım yetkisi verilmiş tüzel kişilerdir. Buna ek olarak şirket düzeyinde de ortaklık amacıyla, sigorta firmaları, vakıflar ya da sendikalar tarafından fon yönetimi yapılabilir. Bunlar gibi tüm yatırım aşamaları tüzel kişiler tarafından yürütülür. Kurumsal yatırımcı tanımına göre bu kişiler küçük sermayedarların tasarruflarını toplayarak getiri sağlayan ihtisaslaşmış finansal oluşumlardır. Kurumlar ve tüzeller ise farklı şirketlere yatırım yaparak olduğundan farklı bir sektöre yönelmek isteyebilir ya da firmada söz sahibi olmayı amaçlayabilir. 

Kurumsal yatırımcılar kimlerdir sorusunun cevabını daha iyi açıklamak için bir örnek verilebilir. Bu bağlamda; A şirketinin B firmasına ya da tüzel kişisine belirli bir oranda ücret ödemesi ve kâr sağlamak amacıyla veya ortaklık güderek fon aktarması durumu yaşanabilir. Bu olayda A isimli oluşuma kurumsal yatırımcı denir. `,
    letter: "K"
  },
  {
    id: "161",
    title: "Küsurat Emir Nedir?",
    description: `Pay piyasasında işlemleri başarılı bir şekilde tamamlamak için geçerli olan bazı emir tipleri mevcuttur. Küsurat emir de bunlardan biridir. “Küsurat emir nedir?” sorusunun cevabı, özetle bir işlem biriminin sahip olduğu miktarın çok daha azı şeklinde açıklanabilir. Örnek olarak 1 lot hisse senedinden daha az miktarda emir verilirse bu durum küsuratlı emir olarak adlandırılır.

Küsurat emirlerde fiyat yer almaz. İlgili kısma yalnızca miktar girilerek işleme devam edilir. Küsurat işlemi, sermaye piyasa aracının ”.E” sırasındaki son işlem fiyatı baz alınarak gerçekleştirilir. Bazı durumlarda bu işlemin, karşı küsurat emirlerle eşleştiği görülebilir. Bir adedin altındaki küsuratlı işlemler, aynı paydaki emir defterlerinde oluşan son fiyat üzerinden gerçekleştirilir. Küsurat emir nedir sorusunun cevabı bu şekilde açıklanabilir.`,
    letter: "K"
  },
  {
    id: "162",
    title: "LIBID (London Interbank Bid Rate) Nedir?",
    description: `Açılımı Londra Bankalararası Teklif Oranı olan LIBID, faiz ile ilgili bir terimdir. Bir yatırımcının Londra Bankalararası Para Piyasası’nı takip etme sebebi, döviz farkından kaynaklıdır. Döviz interbankında Londra kaynaklı işlem yapmak isteyen bir Türk bankası, broker kullanır. Broker, bir bankanın taraflar arasında aracı olarak hareket eden komisyoncusu ve danışmanıdır. Özellikle büyük bankalarla gerçekleştirilen işlemlerde broker aracılığı şarttır. Brokerlar ile LIBID ve LIBOR hakkında bilgi edinmeniz mümkündür.

LIBID (London Interbank Bid Rate), Londra Bankalararası Para Piyasası’nda bulunan yüksek itibara sahip kurumlar arasında yapılan alışverişlerde kullanılır. Bu saygın bankalar, birbirlerinden temel para birimleri üzerinden mevduat kabul ederken LIBID adı verilen faiz oranını kullanarak işlem yapar. Söz konusu temel para birimleri ise ABD doları, euro, İngiliz sterlini, Japon yeni ve İsviçre frangıdır.`,
    letter: "L"
  },
  {
    id: "163",
    title: "LIBOR (London Interbank Offered Rate) Nedir?",
    description: `LIBOR (London Interbank Offered Rate), Londra Borsası’nda işlem yapan bankaların birbirleri için uyguladıkları referans faiz oranıdır. Söz konusu borsada faaliyet gösteren bankaların, ABD doları üzerinden yaptıkları kısa vadeli borçlanmalarda baz aldıkları oran olarak tanımlanır. LIBOR (London Interbank Offered Rate) nedir sorusuna detaylı bir cevap vermeden önce bu oranın hangi para birimlerini kapsadığını belirtmek gerekir. İlgili faiz oranını belirleyen para birimlerinin arasında; dolar, euro, yen, pound ve frank yer alır. Bu para birimlerinde meydana gelen değişimler referans faiz oranını etkiler. 

LIBOR faiz oranı, ICE Benchmark Administration (IBA) tarafından günlük olarak yayınlanır. İlgili referans faizini kullanan bankalar, oranın belirlenmesinde etkili olur. Kuruluşlar, kısa vadeli borçlanma için talep ettikleri minimum ve maksimum faiz oranlarını bildirir. Bu verilere göre hesaplanan ortalama, günlük oran olarak açıklanır. Dünya ekonomisini yakından ilgilendiren bu orandaki küçük değişimler dahi piyasalarda dalgalanmalara sebebiyet verebilir. LIBOR, bankaların vermiş olduğu kredilerin faiz oranlarını ve vade sürelerini belirleyen bir unsurdur. `,
    letter: "L"
  },
  {
    id: "164",
    title: "Likidite Nedir?",
    description: `Likidite, bir varlığın veya menkul kıymetin piyasa fiyatını etkilemeden nakite dönüştürülebilme kolaylığını ifade eder. Bir başka deyişle, piyasada hızla alınıp satılabilme derecesinin tanımlanmasıdır. Nakit en likit varlık olarak kabul edilir. Üç ayrı likidite türü bulunmaktadır. Bunlar şu şekilde listelenebilmektedir; 

Varlık Likiditesi:
Bir varlığın likiditesi, o varlığın alımında veya satımında ne kadar basit bir şekilde nakite çevrildiği anlamına gelir. Nakit, piyasa değeri etkilenmeden hızlı ve kolay alınıp satılabildiğinden, likiditesi en yüksek varlık olarak kabul edilir. Tahviller ve hisse senetleri de oldukça likit varlıklar olarak nitelendirilir fakat likiditeleri güvenilirliklerine ve popülaritesine bağlı olarak değişebilir. 

Likiditesi yavaş varlıklara örnek olarak ise gayrimenkul verilebilir. Bunun sebebi değerlerinin yüksek olmasına karşın fiyatlarının piyasaya göre dalgalanması ve satılmalarının nispeten zor olmasıdır. `,
    letter: "L"
  },
  {
    id: "165",
    title: "Likidite Riski Nedir?",
    description: `
Likidite riski, finans kuruluşlarının bazen göz ardı ettiği fakat muhakkak farkına varmaları gereken bir olasılıktır. Bu riskle karşı karşıya kalan kuruluşlar ne yazık ki ileriye dönük hamleler yaparken iflas ya da haciz gibi ciddi problemlerle mücadele edebilir. Bu riske dair önlemler alınmadan önce “Likidite riski nedir?” sorusunun cevabının öğrenilmesinin faydası vardır. 

Likidite riski; kuruluşların finansal yükümlülüklerini yerine getirmelerini sağlayan nakdi bulamamalarını ifade eder. Bu nedenle likidite riski yönetimi tüm finans kuruluşlarının etkin bir şekilde faaliyet sürdürebilmesi ve başarılarını devam ettirebilmesi için önem arz eder. `,
    letter: "L"
  },
  {
    id: "166",
    title: "Likidite Senetleri Nedir?",
    description: `
Likidite senetleri para politikasının etkinliğin arttırmak için kullanılan bir yöntemdir. Liquidity bills olarak da ifade edilen bu kavram, Türkiye Cumhuriyet Merkez Bankası Kanunu’nun 52. maddesinde düzenlenmiştir. Bu kanuna göre TCMB kendi nam ve hesabına likidite senetleri ihraç edebilir. 

Likidite senetleri nedir sorusuna, piyasadaki para politikasının etkinliğini arttırmak için düzenlenen kısa vadeli bir araçtır cevabı verilebilir. Bu senetler piyasadaki fazla likiditeyi çekmek ve düzenlemek amacıyla kullanılır. Likidite senetlerinin süresi ilgili kanunda 91 gün olarak belirlenmiştir. `,
    letter: "L"
  },
  {
    id: "167",
    title: "Limit Fiyatlı Emirler Nedir?",
    description: `Borsadaki alım satım işlemlerini gerçekleştirebilmeleri adına yatırımcılar tarafından aracı kurumlara birtakım emirler verilir. Aracı kurumların görevi söz konusu emirleri yatırımcının isteği doğrultusunda borsaya iletmektir. Bu sayede aracı kurumlar, yatırımcının talepleri doğrultusunda portföy yönetimini gerçekleştirebilir. Limit fiyatlı emir ne demek sorusunun yanıtını biliyor olmak ise bu aşamada yatırımcılar için avantaj sağlar. Borsa emir tiplerinden biri olan limit fiyatlı emir, talimatı veren alıcının işlemin gerçekleşmesini kabul ettiği en yüksek; satıcının ise satmayı onayladığı minimum tutardır. Bu, pek çok avantajı beraberinde getirir.


Doğru yatırımlar yapabilmek için limit fiyatlı emirler nedir ve hangi özelliklere sahiptir biliyor olmak gerekir. Alım satım işlemlerinde limit fiyatlı emir kullandığınızda yatırım aracının belirlediğiniz değere ulaşıp ulaşmadığını takip etmenize gerek kalmaz. Piyasa fiyatı belirlediğiniz tutara ulaştığında emriniz otomatik olarak işlenir.`,
    letter: "L"
  },
  {
    id: "168",
    title: "Limitli Emir Terimi Ne Demektir?",
    description: `Finansla ilgilenenlerin karşısına çıkan “Limit emri nedir?” sorusu, internette sıkça araştırılan konulardan biridir. Limitli emir, borsada yatırımcıların alım ve satım işlemlerini gerçekleştirmelerini sağlayan bir adımdır. Yatırımcılar, aracı kurumlara limitli emir doğrultusunda işlem ya da değişiklik yapma talebinde bulunur. Söz konusu emir sayesinde yatırımcılar portfolyolarını yönetir. 

Limit emri yatırımcıya kendi belirlediği fiyattan işlem gerçekleştirme avantajı tanır. Bir borsa terimi olan limitli emir için alıcı ve satıcı olmalıdır. Ayrıca limit emrinin gerçekleşmesi için alıcının en yüksek miktarı, satıcının ise en düşük fiyatı kabul etmesi gerekir. Fiyatın ve miktarın belirtildiği emir, herhangi bir işlem yapılmazsa süresi bitene kadar pasif bir şekilde bekletilir. `,
    letter: "L"
  },
  {
    id: "169",
    title: "Lot Nedir?",
    description: `Temel anlamda karşılığı “pay” olan lot, borsada ve forexte farklı birimleri ifade eder. Borsada tam olarak hisse payını ifade eden kavram, senetlerin kaç adet olduğunu belirtmek için kullanılır. Her biri 1 TL’lik nominal değere karşılık gelen hisse senedi adedi bu birim ile tanımlanır. Söz konusu forex olduğunda bu terimin karşılığı değişir. Hatta forexte lota karşılık gelen tek bir anlam yoktur. Kavram, her bir emtiada farklı bir büyüklüğü ifade eder. Bu terim, tasarruflarını forex piyasaları üzerinden değerlendiren yatırımcılar için işlemlerin pozisyon büyüklüğünü gösterir. 

Piyasalarda lot içeren yatırımlara yönelmek, işlem hacmi için belirli sınırları göze almak anlamına gelir. Bu kavram, borsada 1 değerini ve tek tek artan değerleri ifade eder. Kaldıraç unsurunun bulunduğu forexte ise lot işlemi her zaman birer birer yükselmez. Digit adı verilen uygulama ile tam rakamların dışında virgüllü sayılar da devreye girer. Bu aşamada, mini ve mikro olmak üzere iki farklı detay ortaya çıkar. 

`,
    letter: "L"
  },
  {
    id: "170",
    title: "Maksimum Lot Nedir?",
    description: `Maksimum lot nedir sorusu, özellikle borsada işlem yapanlar tarafından sıklıkla araştırılır. Maksimum lot, özellikle hisse senedi alım satımında sınırlı emir olarak tek seferde girilebilen en yüksek miktarı ifade eder. Borsa yatırımcılarının kâr etmek maksadıyla kullandıkları bir yöntemdir. 

Maksimum lot nedir sorusu, yalnızca lot kavramı ele alınarak da açıklanabilir. Lot; borsada herhangi bir hisse senedinin alım satımında kullanılabilecek en az miktarı ifade eden bir birimdir. Bu lot miktarı, senedin kıymetine göre değişiklik göstermektedir. Örneğin; yüksek fiyatlarla yatırımcıya sunulan bir hisse senedinin lot oranı da daha fazla olur. Düşük fiyatlıların ise daha azdır`,
    letter: "M"
  },
  {
    id: "171",
    title: "Maksimum Lot Nedir?",
    description: `Maksimum lot nedir sorusu, özellikle borsada işlem yapanlar tarafından sıklıkla araştırılır. Maksimum lot, özellikle hisse senedi alım satımında sınırlı emir olarak tek seferde girilebilen en yüksek miktarı ifade eder. Borsa yatırımcılarının kâr etmek maksadıyla kullandıkları bir yöntemdir. 

Maksimum lot nedir sorusu, yalnızca lot kavramı ele alınarak da açıklanabilir. Lot; borsada herhangi bir hisse senedinin alım satımında kullanılabilecek en az miktarı ifade eden bir birimdir. Bu lot miktarı, senedin kıymetine göre değişiklik göstermektedir. Örneğin; yüksek fiyatlarla yatırımcıya sunulan bir hisse senedinin lot oranı da daha fazla olur. Düşük fiyatlıların ise daha azdır.`,
    letter: "M"
  },
  {
    id: "172",
    title: "Manipülasyon Nedir? Finansal Manipülasyon Türleri Nelerdir?",
    description: `Manipülasyon kavramı; insanların düşünce ve davranışlarının bilinçli ve art niyetli olarak kontrol edilmesini ifade eder. Bu terim, borsa terminolojisinde kitlelerin algılarını yöneterek kâr elde etmeye yönelik hareketleri tanımlar. Finansal manipülasyon, borsa işlemlerinde dikkate alınması gereken bir risktir. Söz konusu hareketler, piyasadaki arz talep dengesinin bozulmasına sebep olur. Manipülatif hareketlerden korunmak hem bireysel hem de kurumsal yatırımcılar için hayatî önem arz eden bir konudur.

Kitleleri hatalı veriler ve hareketlerle yönlendirerek menkul kıymet alım satımına teşvik etmek finansal manipülasyon olarak adlandırılır. Bu hareketler, kıymet fiyatlarını yapay seviyelerde sabitleme amacı taşır. Borsa manipülatörlerinin temel motivasyonu, piyasada gerçekçi olmayan bir dalgalanma yaratarak kâr elde etmektir. Söz konusu dalgalanmalar, yatırımcıların zarar görmesine sebep olur.`,
    letter: "M"
  },
  {
    id: "173",
    title: "Marjin İşlem Nedir?",
    description: `Forex piyasalarında sıkça kullanılan terimlerden biri olarak öne çıkan marjin, temelde teminat anlamına gelir. Mevcut piyasada yer alan bir varlığa yatırım yapmadan önce belirli bir miktar teminat yatırmaya ise marjin işlem adı verilir. Söz konusu işlemi bir depozito olarak düşünmek mümkündür. Marjin işlem sonrasında yatırım yapılan varlıktan kâr eldesi durumunda sermayede de kazanç oranında artış meydana gelir.

Yurt dışında işlem gören para piyasalarında yatırım yaparken sermayeden daha fazlasını kaybetmek ihtimal dâhilindedir. Ancak Türkiye’de marjin işlemden zarar edilse dahi başlangıç sermayesinden daha fazlasını kaybetme durumu söz konusu değildir. Kısacası bu işlem türüyle yapılan yatırımlarda borçlanma ihtimali bulunmaz. Marjin, bir harcama olmadığından piyasadaki pozisyon kapatıldıktan sonra serbest bırakılır. Bu noktada yatırımcıların marjin hesaplamasını bilmesi, Forex piyasasında zarar etmemeleri adına son derece önemlidir.`,
    letter: "M"
  },
  {
    id: "174",
    title: "Marjinal Maliyet Nedir? Nasıl Hesaplanır?",
    description: `
Marjinal maliyet, finans dünyasında sıklıkla kullanılan ifadeler arasında yer alır. Özellikle üretim alanında faaliyet gösteren sektörlerde marjinal maliyet nedir ve nasıl hesaplanır gibi kavralar ile karşılaşmanız mümkündür.

Marjinal maliyet; temelde üretim sırasında ortaya çıkan bir birimlik değişimin toplam harcanan değere olan etkisi şeklinde tanımlanır. Herhangi bir işletme, fazladan üretim gerçekleştirdiği takdirde ek bir hizmet vermiş olur. Bu hizmetin bir neticesi olarak da işletmenin toplam maliyetinde düşüş veya yükseliş meydana gelir. 

Marjinal maliyet, çoğunlukla bir üretim için harcanan sermayenin artışı söz konusu olduğunda gündeme gelir. Sabit maliyetlerde herhangi bir değişiklik olmadığı için marjinal harcamaları etkileyen tek faktör üretim alanında yaşanan artış ve azalıştır. Kısacası bu kavram, üretimde yaşanan değişimin toplam harcamalara oranı şeklinde tanımlanır.`,
    letter: "M"
  },
  {
    id: "175",
    title: "Menkul Kıymet Borsaları Nedir?",
    description: `Menkul kıymet borsaları, finans dünyasında yatırım yapılan bir kanaldır. Kıymetli evrak üzerinden işlem yapan pek çok kişi, bu kavrama aşinadır. Ancak bu alanda yeni olan ve finansal yatırım konusunda bilgi edinmek isteyenler, menkul kıymet borsası nedir sorusuna cevap arar. Bu terimi, kısaca farklı kıymetlerin alınıp satılabildiği borsa çeşidi olarak tanımlamak mümkündür. 

Menkul kıymetler borsasını anlayabilmek için öncelikle bu alanda işlem gören varlıkları bilmek gerekir. Bu pazardaki kıymetler, bir yatırım aracı olarak alınıp satılması mümkün olan taşınabilir belgelerdir. Bono, tahvil ve hisse senedi gibi çeşitleri bulunan bu belgelerin işlem gördüğü, alınıp satıldığı ve bu yolla kazanç elde edilebildiği alan ise menkul kıymet borsasıdır. Ayrıca bu pazarda, para ve borsa yatırım fonları (ETF) da işlem görmektedir.`,
    letter: "M"
  },
  {
    id: "176",
    title: "Menkul Kıymet Nedir?",
    description: `
Sürekli olarak finansal işlemler gerçekleştiren bireyler, menkul kıymet kelimesi ile sıklıkla karşılaşabilir. Bu terim, yatırım yapma konusunda tecrübesiz olan bireylerin aklına takılır. Kişiler, menkul kıymet nedir sorusunun cevabını merak eder. Bu kavramın çok daha iyi bir biçimde anlaşılabilmesi için öncelikle menkul kelimesinin anlamı öğrenilmelidir. Bu sözcük, taşınabilmesi mümkün olan malları ifade etmek için kullanılır. Menkul kıymetler ise taşınabilen ve yatırım aracı olarak kullanılabilen değerli kâğıtları belirtir. Değerli evrakın düzenlenmesi, belirli kanunlara ve kurallara bağlanmıştır. 

Şirketler ve kişiler bu belgeleri rastgele çıkaramaz. Kıymetli evrakın hazırlanabilmesi için Sermaye ve Piyasalar Kurumu’ndan izin alınması gerekir. Aksi takdirde bu konuda herhangi bir işlem gerçekleştirmek mümkün olmaz. Bu evrak, belirli bir tutarı temsil eder. Bunların alınıp satılması kişilere ortaklık ve mali alacak hakkı kazandırır. Bahsi geçen haklar, belge ile bağlantılıdır. Hakkın saklı tutularak evrakın devredilmesi mümkün değildir. Bu tür bir işlemin sonucunda belge ile birlikte pay ve alacak hakkı da ilgili kişiye geçer.`,
    letter: "M"
  },
  {
    id: "177",
    title: "Menkul Kıymet Ödünç İşlemleri Nedir?",
    description: `Sermaye piyasalarının başarılı bir şekilde faaliyet göstermesi için likidite ve fon arz-talep eden kurumların işlem yapması gereklidir. Piyasalarda likiditeyi artıran önemli faktörlerden birisi menkul kıymet ödünç alma ve verme işlemleridir. Ödünç veren tarafından menkul kıymet teslimi ile mülkiyet hakkı ödünç alana geçer. İlgili sermaye piyasası aracının ödünç veren tarafından mislen geriye alınması da menkul kıymet ödünç işlemleri olarak adlandırılır. Ödünç işlemi, menkul kıymetlerin belirlenen faiz ya da komisyon karşılığında geçici süreliğine verilmesi ile gerçekleşir.

Menkul kıymetler ödünç işlemi nedir sorusuna yanıt arayan pek çok kişi bu durumun hangi taraflar arasında gerçekleştiğini merak eder. Menkul kıymetler ödünç piyasalarının temel katılımcıları, ödünç alan ve veren taraflardır. Ödünç alma ve verme işlemlerini gerçekleştiren katılımcılar; aracı, takas ve saklama hizmeti sunan kurumlardır. `,
    letter: "M"
  },
  {
    id: "178",
    title: "Merkez Bankası Bağımsızlığı Nedir?",
    description: `Merkez bankaları, dünyanın her yerinde paranın basımından politikalarının yürütülmesine kadar pek çok işlemi yerine getirir. Para; ekonomik parametrelerin yürütülmesinin yanı sıra bir egemenlik sembolü olarak da kullanılır. Merkez bankaları, 17. yüzyıldan bu yana para politikalarının yürütülmesi için oluşturulmuş karar merciileridir. Merkez bankasının bağımsızlığı bu kuruluşları güvenilir kılar. Güven neticesinde oluşturulan para politikaları ise başarıya ulaşır. Ayrıca merkez bankasının bağımsızlığı, ülkelerin fiyat istikrarı noktasında koyduğu hedeflere de daha hızlı bir şekilde yürümesini sağlar. Kısacası bağımsızlık olgusu, hükümetlerin ve diğer unsurların banka üzerindeki etkisini sınırlamayı ifade eder. 

Ülkemizde merkez bankası bağımsızlık türleri 4 başlık altında incelenir. Amaç bağımsızlığı, TCMB’nin para politikasını uygularken koyacağı hedefleri bağımsız olarak belirlemesini ifade eder. Araç bağımsızlığı ise bu hedefe ulaşırken kullanılacak olan yöntemlerin serbestliğini belirtir. Finansal ve kurumsal bağımsızlık ise merkez bankasının karar verme konusunda özgür olduğunun altını çizen diğer başlıklardır.`,
    letter: "M"
  },
  {
    id: "179",
    title: "Mevduat Nedir?",
    description: `Mevduat, bankacılık işlemlerinde sıkça karşılaşılan terimlerden biridir. Bu kavram, istenildiği zaman bir kısmı ya da tamamı çekilmek üzere bankaya yatırılan parayı ifade eder. Bankalara belirli bir süreliğine yatırılan para, vadeli ve vadesiz olmak üzere temelde iki farklı şekilde değerlendirilir. Yatırımlarını bankada değerlendirmek isteyen tasarruf sahipleri, mevduat hesabı açarak işlem yapabilirler.

Mevduat en temel tanımıyla bankaya yatırılan para anlamına gelir. Bu para, müşterisi olunan bankaya belirli bir faiz karşılığında yatırılır. Tasarruf sahipleri, bankada açtıkları hesap türüne bağlı olarak maddi kaynaklarını istedikleri zaman geri alma hakkına sahiptir. Söz konusu sistemde, bankalar faiz karşılığında paranızı belirli bir süre hesapta tutma koşulu koyar. Hesabınızda yer alan mevcut parayı süresiz olarak da geri çekmeniz mümkündür. `,
    letter: "M"
  },
  {
    id: "180",
    title: "Nama Yazılı Hisse Senetleri Nedir?",
    description: `Genellikle anonim ortaklıklar tarafından tercih edilen nama yazılı hisse senedi, sahibinin adını içeren kıymetli evrak türüdür. 6102 sayılı Türk Ticaret Kanunu’na göre hisse senedi, yasal olarak pay senedi şeklinde isimlendirilmektedir. Bu nedenle nama yazılı hisse ile pay senedi kavramları aynı belgeyi ifade eder. 

Anonim şirketlerin payları, ana sözleşmenin sermaye maddesinde hamiline ya da nama yazılı şeklinde belirtilir. Bu kıymetli evrak çeşidinin üzerinde, hissedar kişinin adı ve adresi bulunur. Tüzel ya da gerçek kişilerde de bu durum aynı şekilde uygulanır. Payların tamamen ödenmediği bir şirket, hamiline hisse senedi çıkaramaz. Bu tür durumlarda şirket, paylarını nama yazılı olarak belirtmek şartıyla bastırabilir. Bu yöntem şirket için hem daha avantajlı hem de daha güvenli bir seçenektir. Nama yazılı hisse senedi nedir sorusunun cevabı bu şekilde açıklanabilir. `,
    letter: "N"
  },
  {
    id: "181",
    title: "Net Aktif Değeri Nedir?",
    description: `Bireysel ve kurumsal varlıkların sahip olduğu bir piyasa değeri vardır. Bu değerin bulunması için varlık ve yükümlülüklerin hesaplanması gerekir. Mevcut para, taşınmaz ve gayrimenkul değerinden borç miktarı çıkarılınca elde edilen sonuç, net aktif değeri olarak tanımlanır. Başka bir ifadeyle, bilançoda yer alan varlıklardan yükümlülükler çıkarılınca elde edilen sonuç net aktif değeridir.

Net aktif değer hesaplama örneklerinden bahsetmeden önce varlık ve yükümlülük kavramlarına değinmek faydalı olur. Piyasada değeri olan her unsur, varlık olarak tanımlanır. Örneğin; gayrimenkul, araba, hisse, nakit para ve teknolojik eşyalar birer varlıktır. Masraflar ve borçlar ise yükümlülük kapsamına girer. Net aktif değeri, varlık ile yükümlülük arasındaki farkı ifade eder.

Net aktif değer formülü, varlıkların cari piyasa koşullarında satılmaları durumunda kazanılması muhtemel nakit miktarını ifade eder. Bu formül; kişisel olarak sahip olunan malların yanı sıra şirket sermayeleri, taşınmazları ve yatırım fonları için de uygulanabilir. Söz konusu değer, enflasyon ve döviz kuru gibi etkenler hesaba katılarak belirlenir.`,
    letter: "N"
  },
  {
    id: "182",
    title: "Nominal Değer Nedir?",
    description: `Nominal değer; para, çek, hisse senedi, tahvil ve pul gibi çeşitli menkul kıymetlerin üzerinde yazılı olarak belirtilen miktardır. Bahsedilen kavram, itibari değer olarak da bilinir. Nominalin kelime anlamı ise “yazılı olan ifade” şeklindedir. Söz konusu terim, finans ve ekonomide sıklıkla kullanılır. Nominal değer, alım gücünü temsil etmeyen yazılı miktar olarak da açıklanabilir. Bu açıdan reel kıymetten ayrılır. İtibari değer, par veya face value olarak da bilinir. 

Kıymet miktarını belirten bu terim, yalnızca hisse senedi veya tahvillerin üzerinde yazan değerdir. Bono nominal değer nedir sorusunun yanıtı ise senedin vadesinde ödenecek tutar şeklinde açıklanır. Kıymetli evrakta bu kavramda spekülatif veya değişken unsurlar, aksi belirtilmediği sürece yer almaz. Nominal değer nedir sorusuna bu şekilde cevap verilebilir.  

1 TL nominal değerli pay ne demek sorusunu kapsamlı bir şekilde açıklamak bu terimin çok daha iyi anlaşılmasını da mümkün kılar. Şirketler pay dağıtırken itibari kıymetleri baz alınır. Bu bağlamda 1 TL nominal değerli hisse miktarından söz edilebilir. Bahsedilen durumdaki pay dağıtımında, kıymeti en az 1 TL olan hisselere hak verileceği ifade edilir.`,
    letter: "N"
  },
  {
    id: "183",
    title: "Normal Emir Nedir?",
    description: `Borsada çeşitli işlemleri gerçekleştirebilmek için farklı emir türleri kullanılır. Bu emirler, yatırımcıların kâr oranlarını doğrudan etkiler. Bu nedenle bireyler, doğru emir tiplerini seçerek kâr oranlarını maksimum seviyeye çıkarmayı hedefler. Borsa emirleri, yatırımcıların alım satım işlemlerine dair direktifler olarak tanımlanabilir. Borsada sık kullanılan bu direktiflerden biri de normal emirdir. Normal emir; 1 lot ve katlarından oluşur. Küsuratsız olarak verilen bu emirler, farklı çeşitleriyle yatırımcılara değişik kârlar sunar. Borsada normal emir nedir sorusuna kısaca bu şekilde yanıt verilebilir.

Normal emirler, pek çok amaçla kullanılabilir. Kâr elde etmek ve piyasanın gidişatına göre aksiyon almak için tercih edilen normal emirler, girişimcilerin sağlıklı adımlar atmalarına olanak tanır. Risk oranı az olan bu emirler sayesinde kişiler doğru karar verebilir. Normal direktifler, yatırımcıların doğrudan işlem yapabilmeleri ve kâr oranlarını arttırabilmeleri adına son derece önemlidir. `,
    letter: "N"
  },
  {
    id: "184",
    title: "Oligopol Piyasa Nedir?",
    description: `İktisat literatüründe dört ana piyasa tipi mevcuttur. Bunlar; tam rekabet, monopol, monopolcü rekabet ve oligopol piyasalardır. Çok sayıda satıcının bulunduğu ve her birinin aynı nitelikte mal ve hizmet arz ettiği pazarlar, tam rekabet piyasasıdır. 

Bir satıcının bulunduğu ve diğerlerinin giriş- çıkış yapmasının mümkün olmadığı pazarlar, monopol piyasalardır. Oligopol piyasalar ise birbirine benzeyen ya da farklılaştırılmış ürünlerin sunulduğu, az sayıda satıcının bulunduğu pazarlardır. Bir başka deyişle oligopol piyasaların birkaç büyük aktörün hükmettiği ve ürün fiyatlarını kontrol ettiği pazarlar olduğu söylenebilir. `,
    letter: "O"
  },
  {
    id: "185",
    title: "Opsiyon Primi Nedir?",
    description: `Opsiyon primi, bir alım satım sözleşmesinin belirli vadede aynı fiyat üzerinden işlem görmesine yönelik maddi değer karşılığı kazanılan hakkın bedelidir. Opsiyon sözleşmelerinin temel faktörlerinden biri olan bu prim, alıcının daha düşük riskle işlem yapmasını sağlar. Opsiyon primi nedir sorusunun cevabı öğrenildikten sonra satılan varlıklarda zaman içerisinde fiyat artışı olabileceği unutulmamalıdır. Fiziksel yatırım ürünlerini belirli bir zaman aralığı içinde satın alacak kişi, bu prim sayesinde fiyat artışı riskini ekarte etmiş olur. 

Satışa sunulan hisse senetlerinin, emtia ürünlerinin ve para birimlerinin endekslerinin fiyat değişikliği riskini azaltmak için opsiyon sözleşmeler yapılır. Sözleşmeler alım veya satım olmak üzere iki farklı şekilde yapılabilir. Bu sözleşmelerde long (uzun) ve short (kısa) call adı verilen iki taraf bulunur. Uzun taraf opsiyon primini ödeyerek satışa sunulan varlığı belirli bir fiyattan satma ya da alma hakkına sahip olur. Kısa taraf ise bu hakkı satan kişidir. Opsiyon primi, günlük hayatta ev kiralarken ya da araç sigortası yaptırırken de kişilerin karşısına çıkabilir. `,
    letter: "O"
  },
  {
    id: "186",
    title: "Opsiyon Sözleşmesi Nedir?",
    description: `
“Opsiyon sözleşmesi nedir?” sorusunun cevabı, özellikle ticaretle uğraşan kişiler tarafından araştırılır. Opsiyon sözleşmeleri, iş insanlarına sunulan bir haktır. İki tarafın katılımıyla gerçekleşen ve kişinin bir mal varlığını, önceden kararlaştırılan fiyat üstünden, belirli bir zaman diliminde alma ya da satma hakkı sağlayan anlaşma türüdür.  

Opsiyon sözleşmesi sahip olduğu özelliklerle kendini güvence altına almak isteyen yatırımcılara faydalı olur. Finansman süreçlerinin öngörülebilir hedeflere uygun şekilde gerçekleşmesini ve buna uygun sermaye yatırımları yapılmasını sağlar. Böylece iş insanları, maddi kaynaklarını koruma fırsatı bulur. Opsiyon sözleşmesine katılan kişiler, mevcut pozisyonlarını korumaya ve alınacak riski en aza indirmeye çalışır. `,
    letter: "O"
  },
  {
    id: "187",
    title: "Ödenmiş Sermaye Nedir?",
    description: `Anonim ve limited şirketlerin ortakları arasında sermaye değerini gösteren bir sözleşme yapılır. “Ödenmiş sermaye nedir?” sorusunun cevabı, bu değerin bir kısmının nakit olarak yatırılmasını ifade eder. Sözleşmeye konu olan sermaye, şirket ortaklarının taahhüt ettiği miktarın nakden ödenen kısmıdır. Bu kavram, şirket sözleşmelerinde geçen asıl sermaye ile ödenmemiş bölüm arasındaki farkı gösterir. 

Bu parasal varlık, anonim ve limited şirketlerin öz kaynaklarını oluşturur. Şirketler, bu sermayelerini hesaplamak için tüm yatırımlarını ve mal varlıklarını göz önünde bulundurur. Ayrıca bu sermaye türü, şirketlerin hisse senedi satışlarını da etkiler. Firmaların hisse senedi piyasasındaki değerini göstermek için ödenmiş sermaye oldukça önemlidir.  `,
    letter: "Ö"
  },
  {
    id: "188",
    title: "Ölçek Ekonomisi Nedir?",
    description: `Maliyet düşüşünün üretim artışıyla birlikte gerçekleşmesi ölçek ekonomisi olarak adlandırılır. Başka bir ifadeyle; üretimin maliyetle ters orantılı bir biçimde seyretmesi bu şekilde adlandırılır. Ölçek ekonomisi koşullarının gerçekleşmesi, işletmenin kârlılık açısından avantaja geçmesini sağlar.

Ölçek ekonomisi, tek başına tasarruf veya kârlılıkla ilişkili değildir. Bu iki unsur aynı anda gerçekleştiğinde ölçek ekonomisi durumu ortaya çıkar. Bu durumda, hizmet ve ürünün çapı artarken maliyet eşzamanlı olarak düşer. Söz konusu durumun gerçekleşmesi işletme için operasyonel verimlilik ve sinerji sağlar. Bu sayede, üretim esnasında birim değişken avantajı elde edilir.`,
    letter: "Ö"
  },
  {
    id: "189",
    title: "Özel Emir Nedir?",
    description: `Özel emir, borsa piyasalarında büyük değişimlere yol açan bir yatırım kararıdır. Bu emirler, yatırım piyasalarında her seansta değişen günlük işlem fiyatları gözetilerek yapılan hisse alış ve satış işlemleridir. Özel emir, bir hissenin fiyat ve zaman kıstasına uyduğu hâllerde devreye alınarak işleme açılmış olur.

İlk olarak gerçekleştirilmek istenen işlem için uygun bulunan yatırım kuruluşu seçilir. Bu işlem sırasında özel emrin yazılı tutarının, başlangıç tarihinin ve sermaye piyasası aracının da belirlenmesi gerekir. İşlem, sistemde kayıt altına alındıktan sonra sadece belirlenmiş olan yatırım kuruluş tarafından görüntülenebilir.`,
    letter: "Ö"
  },
  {
    id: "190",
    title: "Özel Limit Fiyatlı Emir Nedir?",
    description: `Piyasalarda gerçekleştirilen işlemlerde yatırımcılar her zaman kâr elde etmeyi hedefler. Emir; piyasalarda alış ve satış yaparken o an için geçerli en iyi fiyatta işlem yapılmasını öngörmeyi ifade eder. Piyasalarda işlem yapmaya ilgi duyan bireyler ‘’Özel limit fiyatlı emir nedir?’’ sorusunun cevabını merak eder. Özel limit fiyatlı emir, diğer adıyla OLFE, yatırım miktarının sadece fiyat girilerek sisteme aktarılması işlemidir. 

Özel limit fiyatlı emir işlemi sırasında para miktarı ‘’Sıfır-0’’ olarak sisteme girilir. Emir için belirtilen maksimum işlem değeri ise ‘’TL’’ şeklinde yazılır. Sistem, yatırımcının belirttiği tutarı aşmamak kaydıyla girilen limit seviyesinde en iyi fiyatlı emirlerden itibaren alış ve satışın tamamlanmasına izin verir. `,
    letter: "Ö"
  },
  {
    id: "191",
    title: "Özel Sektör Tahvilleri Nedir?",
    description: `
Para piyasalarında, şirketlerin finansman ihtiyaçlarının karşılanması amacıyla farklı borçlanma araçları bulunur. Bu bağlamda “Özel sektör tahvilleri nedir?” konusu yatırımcılar ve borsayla ilgilenen bireyler tarafından merak edilir. Ödünç para bulmak amacıyla çıkarılan bu borçlanma araçlarından biri de özel sektör tahvilleridir. Özel sektör tahvili; devletin veya anonim ortaklıkların ödünç para bulmak için çıkardığı borç senedidir. Bu borçlanma aracı en az 1 yıl ve daha uzun vadeyle anonim şirketler tarafından ihraç edilir. Para arayışında olan şirketler, özel sektör tahvilleri aracılığıyla finansman noktasında ihtiyaçlarını karşılayabilir. 

Özel sektör tahvilinde, şirketlere yabancı sermaye üzerinden işlem yapılır. Yabancı sermaye, mevcut şirkete tahvil sahibi tarafından kullanıldırılır. Tahvil sahibi şirket, finansman kaynağı arayışında olan firmanın uzun vadeli alacaklısıdır. Bu iki şirket arasındaki hukuki ilişki ise vade süresi tamamlandığında sona erer. Ayrıca tahvil sahibi, finansman sağladığı şirketin kâr ve zarar riskine katılamaz. Özel sektör tahvili ihracında, kamu borçlanma aracı dışındaki işlemler, Sermaye Piyasası Kurulu düzenlemelerine tabidir. `,
    letter: "Ö"
  },
  {
    id: "192",
    title: "Parasal Aktarım Mekanizması Nedir?",
    description: `
“Aktarım mekanizması nedir?” sorusunun yanıtı, ekonomi ve finans ile meşgul olan bireyleri yakından ilgilendirir. En basit anlatımıyla aktarım mekanizması, para politikası ile reel ekonomi arasındaki etkileşimi gösterir. Bu kavram, parasal aktarım mekanizması olarak da bilinir. Söz konusu mekanizmanın görevi, parasal değişimlerin toplam talep ve üretimi hangi yollarla ve ne ölçüde etkilediğini göstermektir.

Aktarım mekanizması ne demek? sorusunun yanıtı, genel olarak iki adımda tanımlanır. Bu adımlardan ilki; para politikası uygulamalarındaki değişimlerin piyasa faiz oranlarına, varlık fiyatlarına veya döviz kuruna aktarımını belirler. İkinci adım ise finansal piyasa şartlarındaki değişikliklerin üretim seviyesi ve enflasyona etkilerini gösterir.`,
    letter: "P"
  },
  {
    id: "193",
    title: "Parite Nedir?",
    description: `Her ülkenin para biriminin farklı dövizler karşısında belli bir değeri vardır. Bu değerlerin birbirine karşı oranları parite olarak adlandırılır. Başka bir ifadeyle bu kavram; bir para biriminin diğerine karşı oranını ifade eder.

Parite, bir karşılaştırma terimidir. Bu karşılaştırma, ülkenin para biriminin değerini ortaya çıkarır. Söz konusu değer oranının hesaplanmasında özel bir formül kullanılır. Parite, uluslararası borsalarda dikkate alınan bir parametredir. Bu değerler, piyasalarda özel kodlarla gösterilir.`,
    letter: "P"
  },
  {
    id: "194",
    title: "Piyasa Emri Nedir?",
    description: `
Piyasa emri, mevcutta bulunan varlık ve değerlerin olabilecek en iyi fiyat aralığından alınıp satılması için kullanılan sistemdir. Anlık olarak alış ve satış yapma imkânı sunan piyasa emri, bulunan en uygun oranlara göre fiyat ve işlem aralığını belirler. Bilinen en iyi veriler üzerinden emir kararını belirleyen sistem, beklenen artış ve düşüşler için oransal olarak anlık kararlar almanıza imkân tanır. 

Piyasa emri, mevcut yatırımlar için alış ve satış yapılacak fiyatlar hakkında %100 kesinlik sunmaz. Yatırımcıya optimal rakam aralıklarını sağlar. Piyasa emri nedir sorusunun en temel cevabı, finansal varlıkları o andaki optimum fiyat düzeyinden alma ya da satma işlemi olarak verilebilir.`,
    letter: "P"
  },
  {
    id: "195",
    title: "Piyasa Fiyatı Nedir?",
    description: `Piyasa, alıcı ve satıcıların genellikle para karşılığı hizmet ve ürün değiş tokuşlarını gerçekleştirdiği yer olarak tanımlanır. Buradaki alıcı ve satıcı ilişkileri, varlıkların fiyat değerini belirler. Belirlenen güncel değere ise piyasa fiyatı adı verilir. Bu terim, en basit tabirle bir hizmetin ya da varlığın alınıp satılabileceği cari değer olarak belirtilebilir. 

Piyasa fiyatı nedir sorusunun yanıtına detaylı bir şekilde değinmeden önce söz konusu değerin belirli bir miktarda olmadığı belirtilmelidir. Dolayısıyla söz konusu fiyat, satın alma değerinin değişken bir ölçütü olarak kabul edilir. Piyasa fiyatı, arz ve talep dengesine göre belirlenir. Diğer bir deyişle, arz edilen miktarın talep değerine eşit olduğu nokta olarak ifade edilebilir. Bu durumda satışa sunulan hizmet ya da hissenin değeri, şirket koşullarından bağımsız olarak değişir. Bu değişim, satın alma için sunulan tekliflere bağlı olarak gerçekleşir. İlgili fiyat, negatif/pozitif değişimler sonrasında ürün veya hizmetin gerçek değerinin altında ya da üstünde kalabilir. `,
    letter: "P"
  },
  {
    id: "196",
    title: "Piyasa Nedir?",
    description: `Piyasa, alıcı ve satıcıların para, hizmet, değerli evrak değiş tokuşu yaptığı platformlara verilen genel isimdir. Bir bedel karşılığında hizmet ya da evrak satın almak isteyen alıcıların bu taleplerini karşılama potansiyeli olan satıcılarla bir araya gelmesini sağlayan birimler piyasayı oluşturur. “Piyasa nedir?” sorusu kısaca arz ve talebin yani alıcı ile satıcının birbiriyle karşılaşmasını ve gerekli değiş tokuşların yapılmasını sağlayan mecra olarak yanıtlanabilir.

Alıcı ve satıcıları bir araya getirerek bilgi alışverişi yapmasını sağlayan platformlar, temelde arz ve talep ilişkisine dayalı sistemlerdir. Dolayısıyla her iki tarafın aktif olarak iletişim hâlinde olması gereklidir. Satıcı ile alıcının fiziki olarak bir araya gelmesi gereklilik değildir. Modern teknoloji, bu platformu daha kolay takip edilebilen ve taraflar arasında iletişimin hiçbir sebeple sekteye uğramadığı bir yer hâline getirmiştir.`,
    letter: "P"
  },
  {
    id: "197",
    title: "Piyasa Yapıcı Nedir?",
    description: `Borsadaki alım satım işlemleri için yatırımcılar tarafından aracı kuruma verilen emirler henüz gerçekleşmediği takdirde beklemede kalır. İlgili yatırım taleplerinin üst ve alt sınırından daha yüksek veya düşük fiyat verilmesi ile gerçekleşen satış direktiflerine piyasa yapıcı emirler adı verilir. “Piyasa yapıcı nedir?” sorusu kısaca şirket ya da şahıslarla sözleşme yapmak suretiyle pazar koşullarına uygun bir biçimde alım satım teklifinde bulunabilen kuruluşlar olarak yanıtlanabilir. 

Kriterlere uygun olan kişiler, bir menkul kıymete yönelik faaliyette bulunmak için Borsa İstanbul Yönetim Kurulu tarafından kabul edilmelidir. Bunun için Borsa İstanbul Pay Piyasası Piyasa Yapıcılık Taahhütnamesi imzalanarak gerekli koşulların karşılandığı tescil edilmelidir. Örneğin, bu faaliyette bulunmak isteyenlerin değerlendirme yapılan aydan geriye doğru 2 milyon ve üstü tutarında takas temerrüdü sayısı en fazla 5 olmalıdır. `,
    letter: "P"
  },
  {
    id: "198",
    title: "Portföy Nedir?",
    description: `Yatırımcıların karşısına sıklıkla çıkan borsa terimlerinden biri portföydür. Bu kavram, gerçek ya da tüzel kişilerin yatırımlarından kazanç sağlamak amacıyla ellerinde bulundurdukları tüm piyasa araçlarını ifade eder. Portfolyo olarak da adlandırılan terim; nakit paradan altına, hisse senedinden bonoya, tahvilden mevduata kadar pek çok yatırım değerini kapsar. Tüzel veya gerçek kişilerin yatırım yapmak ve kazanç elde etmek için biriktirdikleri bu araçlar, piyasa beklentileri dikkate alınarak hazırlanır. Kısacası portföy nedir sorusunun cevabı; yatırımcıların piyasa beklentileri doğrultusunda tasarruf ettikleri tüm sermaye araçlarını içeren toplam değerdir. 

Portfolyo hazırlarken öncelikle yatırımcının risk ve kazanç beklentisi göz önüne alınır. Yatırım portfolyosu hazırlama işi belli bir süreç içerisinde ve yetki belgesine sahip aracılar yardımıyla gerçekleştirilir. Yatırımcının sahip olduğu tüm piyasa araçları ve değerler, aracı kurumlar tarafından portföy hâline getirilir. `,
    letter: "P"
  },
  {
    id: "199",
    title: "Portföy Yöneticiliği Nedir?",
    description: `Portföy yöneticiliği nedir sorusunu kapsamlı bir biçimde yanıtlayabilmek için yatırım kavramına değinmek faydalı olur. Servet birikimine ilave yapmak ve bu şekilde kazanç sağlamak için yürütülen faaliyetler yatırım olarak tanımlanır. Söz konusu servet ve kazancın oluşturulma biçimi ise portföy olarak adlandırılır. Yatırıma konu olan sermaye piyasası araçları, kıymetli madenler ve diğer varlıklar portföy başlığı altında incelenir.

Yatırım varlıklarının idaresi ve organizasyonu portföy yöneticiliği olarak adlandırılır. Başka bir ifadeyle müşteri portföylerinin gelir elde etmek üzere işletilmesi bu şekilde tanımlanır. Portföy yönetimi temel olarak müşteriyle hizmet veren kuruluş arasında imzalanan bir sözleşmeye dayanır. Bu sözleşmenin koşulları Sermaye Piyasası Kurulu (SPK) tarafından belirlenir.`,
    letter: "P"
  },
  {
    id: "200",
    title: "Reeskont Nedir?",
    description: `Reeskont, İngilizce’de iskonto anlamına gelir. Bu kavram, finansal terminolojide ödeme zamanı gelmemiş senetlerin iskontoyla el değiştirilmesini ifade eder. Reeskont işlemlerinde el değiştirme, nakit bedele denk gelecek biçimde gerçekleşir. Senetler, bankanın belirlediği koşullar dâhilinde nakit paraya çevrilir. Söz konusu nakdin geri ödemesi döviz ile yapılır.

Reeskont kredisi, banka ve şirketlerin finansman ihtiyaçlarını karşılamak için sağlanan bir ödenektir. Bu ödeneklerde söz konusu ihtiyaçların karşılanmasının yanı sıra Merkez Bankası’na döviz girdisinin sağlanması amaçlanır. Senetler karşılığında sunulan ödenekler, yatırım bankaları tarafından verilir. Geri ödeme planları ise ileri tarihli olarak yapılır. `,
    letter: "R"
  },
  {
    id: "201",
    title: "Regülasyon Nedir?",
    description: `Regülasyon nedir sorusuna bu kelimenin anlamını açıklayarak cevap vermek gerekir. Bu kavram, düzenleme ve ayarlama anlamına gelir. Devletin ekonomiye direkt olarak müdahale ettiği iktisat politikası araçlarından biri olarak bilinir. 

Düzenlemeler; ülkelerin içinde bulundukları duruma, sektöre ve tarihsel süreçlere bağlı olarak farklı şekillerde yapılabilir. Regülasyon uygulamaları devletler tarafından düzenleyici bir unsur olarak kullanılır. Bu düzenlemeler finansal kurumların yönetmeliklerinde yapılan değişikliklerle desteklenir. Kriz dönemlerinde benzer süreçlerin oluşmasına engel olan politikalar uygulanabilir. Bunun sonucunda daha istikrarlı bir ekonomik sistemin oluşması öngörülür. `,
    letter: "R"
  },
  {
    id: "202",
    title: "Repo Nedir? Repo Temdit Ne Demek?",
    description: `Yatırım araçları arasında adını sıkça duyduğun repo hakkında detaylı bilgi almak ister misin? Yazımızı okuyarak “Repo ne demek?”, “Repo temdit nedir?”, “Repo nasıl yapılır?” gibi pek çok sorunun yanıtını öğrenebilirsin. 

Repo hakkında detaylı bilgi vermeden önce “Repo nedir?” sorusuna kısaca cevap verelim. Repo, herhangi bir menkul kıymetin geri alınma koşulu ile satılmasıdır. Buna göre bir menkul kıymet, repo işleminin başlangıç tarihinde geri alım vaadiyle satılır. Ardından repo işleminin bitiş tarihinde geri alınır. `,
    letter: "R"
  },
  {
    id: "203",
    title: "Revalüasyon Nedir? Revalüasyon Neden Yapılır?",
    description: `Revalüasyon, paranın değer kaybını önlemek adına devlet tarafından alınan bir önlemdir. Bu önlem, devletin Merkez Bankası aracılığıyla piyasaya müdahale etmesiyle gerçekleşir. Merkez Bankası müdahalesi, paranın değer kazanmasını amaçlayan birtakım yaptırımları içerir. Revalüasyon süreci, doğru yönetildiğinde birtakım olumlu sonuçlar getirebilir. Diğer yandan, bu işlemin uzun vadede bazı riskleri bulunur.

Revalüasyon kelimesi değer yükseltmek anlamına gelir. Bu kavram, iktisat terminolojisinde paranın döviz karşısındaki değerinin artırılmasını ifade eder. Ulusal para birimi, piyasa müdahalesiyle yükseltilir. Bu sayede, ticari ve ekonomik dengelerin sağlanması amaçlanır. Alım gücünün yükselmesi ve paranın diğer dövizlere karşı rekabet kuvvetinin artması revalüasyonun etkileri arasındadır.`,
    letter: "R"
  },
  {
    id: "204",
    title: "Rezerv Para Nedir?",
    description: `Rezerv kelimesi; saklama, biriktirme ve depolama gibi anlamlara gelir. Rezerv paranın anlamı da benzer şekildedir. Bu terim, paranın biriktirilebilir olduğunu ifade eder. Uluslararası para ve sermaye piyasaları ile merkez bankalarının portföylerinde bulundurdukları altın ve döviz türünden varlıklara rezerv para denir. Söz konusu sistem, olası ekonomik dengesizliklere ve krizlere karşı önlem almak amacıyla geliştirilmiştir. 

Bireylerin hayatını güvence altına almak adına birikim yapması ile merkez bankalarının rezerv stoklaması birbiriyle benzer durumlardır. Ülkelerin merkez bankaları, birikimlerini rezerv sistemi ile yapar. Bu yatırımlar, uluslararası havuzda ya da başka bir ülkede depolanmaz. Her ülke ve merkez bankası kendi rezervlerini oluşturarak yatırımlarını yönetir, güvencesini yaratır. `,
    letter: "R"
  },
  {
    id: "205",
    title: "Risk Sermayesi Yatırım Ortaklığı Nedir?",
    description: `
Risk sermayesi, yatırımcıların uzun vadede değer kazanacağını düşündüğü başlangıç şirketlerine ya da küçük işletmelere yatırım yapması şeklinde tanımlanır. Bu özel yatırım türü, girişim ya da cesaret sermayesi olarak da bilinir. Kişi ya da kurumlar, bu yatırım tipi sayesinde iyi fikirlere sahip ancak yeterli maddi desteği olmayan girişimcilere fon sağlar. Bu desteğin verilmesi aşamasında risk sermayesi yatırım ortaklığı kavramı ortaya çıkar. 

“Risk sermayesi yatırım ortaklığı nedir?” sorusu, borsa alanında birçok kişinin merak ettiği konular arasındadır. Risk sermayesi yatırım ortaklığı, girişimcileri ve sermaye sağlayan kişileri birleştiren bir köprü görevi görür. Genelde iyi iş fikirlerine sahip kişilere ya da yeni oluşmakta olan şirketlere yapılan bir yatırım türüdür. Ancak fon yardımı gelişimin farklı aşamalarında da yapılabilir. Bu kavram, sermaye yatırımı yapacak tarafın gelecekte getirisi olacağına inandığı işlere destek sağlaması olarak tanımlanır. Risk sermayesi yatırım ortaklığı, dezavantajları nedeniyle tehlikeli sayılsa da getirisi oldukça yüksek bir uygulamadır. `,
    letter: "R"
  },
  {
    id: "206",
    title: "Sabit Kur Rejimi Nedir?",
    description: `Döviz kurları, özellikle küçük ve açık ekonomilere sahip ülkeler için oldukça önemlidir. Kurların, bir ülkedeki yatırım, dış ticaret, borsa, büyüme ve gayrisafi millî hasıla gibi pek çok ekonomik olgu üzerinde ciddi bir etkisi bulunur. Üstelik döviz kurları ülkelerin uyguladığı para politikaları çerçevesinde araç, hedef ya da gösterge olarak da işlev görür. Bir ülkenin kendi parasını değer bakımından diğer ülkelerin para birimleri ile ne şekilde ilişkilendireceğine dair izlediği strateji kur rejimi (exchange rate regime) olarak adlandırılır. 

Sabit kur rejiminde bir ülkenin yerli parasının değeri, merkez bankası ya da ilgili kurullar tarafından yabancı paralarla eşitlenir. Sabit kur bir defa belirlendiğinde sonraki değişime kadar aynı şekilde kalır. Ulusal paranın değeri belirli bir döviz ya da diğer paralardan oluşan bir sepet karşısında sabitlenir. `,
    letter: "S"
  },
  {
    id: "207",
    title: "Saklama Kuruluşu Nedir?",
    description: `Saklama kuruluşu, çeşitli varlıkların değerlendirilmesi için hizmet verir. Saklama hizmetleri, sermaye piyasası faaliyetleriyle ilişkili olarak fiziken ya da kayden sağlanan nakitlerin kuruluşlar nezdindeki işlemleridir. Emanetçi sıfatıyla bu hizmet verilebildiği gibi idare etmek için ya da teminat olarak da bu işlemler görülebilir. Saklama hizmetine konu olan ürünlerse aşağıdaki gibi sıralanabilir.

Sermaye piyasası araçları
Vadeli işlemler
Opsiyonlar
Para piyasası araçları
Nakitler, bulunan dövizler
Kıymetli madenler`,
    letter: "S"
  },
  {
    id: "208",
    title: "Scalping Nedir? Scalp Ne Demek?",
    description: `Yatırımcılar, Forex piyasalarında işlem yaparken birçok farklı teknik kullanır. Yatırım yöntemleri olarak adlandırılan bu teknikler, genel olarak göstergelere ve fiyatlandırmalara dayalıdır. Para piyasalarında sıkça adı geçen yatırım yöntemlerinden biri de scalping tekniğidir. Scalping; kripto paralarda anlık al sat yapma stratejisi olarak tanımlanır. Söz konusu yöntem, kısa sürede fazla işlem yaparak kâr elde etmek isteyen yatırımcılar tarafından tercih edilir. 

Scalping; Forex piyasasında yer alan finansal ürünlerin fiyatlarında meydana gelen küçük değişimlerden kâr elde etmeyi amaçlayan işlem metotlarını kapsar. Bu tekniğin temel amacı ise anlık zaman dilimleri içerisinde alım ve satım yaparak hızlıca kâr etmektir. Scalping trade olarak da adlandırılan sistemde, yatırımcı açık pozisyonu anında değerlendirerek kazanç sağlar. `,
    letter: "S"
  },
  {
    id: "209",
    title: "Seans Nedir?",
    description: `Seans, borsada sıklıkla kullanılan bir terimdir. Anlamı bir iş için harcanan süre olan kelime, finans alanında da benzer bir ifadeyi karşılamak için kullanılır. Bu terim, borsada hisse senetleri üzerinde işlem yapılabilen süreleri ifade etmek amacıyla kullanılır.

“Borsada seans ne demek?” sorusu sıklıkla merak edilen ifadeler arasındadır; çünkü Borsa İstanbul Pay Piyasası’nda işlem gören hisse senetleri üzerinde alım satımlar belli aralıklarla düzenlenir. Bu aralıklar Borsa İstanbul’un her piyasası için ortak değildir. Örneğin VİOP ile Opsiyon Piyasası’nın işlem gördüğü saatler birbirinden farklıdır. Bu saat farklılıklarından dolayı borsada işlem yapanların herhangi bir kayba uğramaması için çeşitli işlem saatleri belirlenir. Bu işlem saatlerinin her biri seans olarak adlandırılır.`,
    letter: "S"
  },
  {
    id: "210",
    title: "Sınai Endeks Nedir?",
    description: `Ekonomi ve bankacılık terimi olarak kullanılan sınai endeks, ulusal pazarda işlem gören ve sadece sanayi sektöründe bulunan şirketlerin hisse senetlerinin fiyatlarındaki değişmeler dikkate alınarak hesaplanan göstergelerdir. Sanayi sektörünün durumunu, üretim faaliyetlerindeki artış veya azalış gibi konuları belirlenen yıllar itibarıyla karşılaştırmalı olarak izlemeyi sağlar. Bu bilgi Türkiye İstatistik Kurumu (TÜİK) tarafından her ay düzenli olarak yayınlanır. 

Bu gösterge ile mevcut dönem ile geçmiş ay ve bir önceki yılın aynı ayındaki endeks değerleri karşılaştırılarak sanayi ve alt sektörlerdeki büyüme/değişim eğilimi hesaplanabilir. Sanayi, ekonomik büyümenin lokomotifidir ve bu endeks sayesinde verilere dayalı net sonuçlar elde edilmesi mümkün olur. Sanayi üretim endeksi; 

Arındırılmamış
Takvim etkisinden arındırılmış
Mevsim ve takvim etkisinden arındırılmış `,
    letter: "S"
  },
  {
    id: "211",
    title: "Spekülasyon Nedir?",
    description: `Spekülasyon, piyasa koşullarını değerlendirerek gelecekteki fiyatlara göre risk alıp yatırım yapma işlemidir. Spekülasyon nedir sorusu bu şekilde basitçe cevaplanabilir. Bu durum; spekülatörlerin borsa, döviz ya da yerel para gibi herhangi bir yatırım aracı üzerinde tahmine dayalı işlem yapmasının sonucunda oluşur. 

Spekülatör, yapacağı işlemlerde alacağı riskleri bilen ve bunlara göre hareket eden kişilere denir. Spekülasyon yapmak ise kaybetme riskini göze alarak kazanç elde etme yöntemi olarak nitelendirilir. Spekülatör, borsadaki bir hissenin yükseleceğini tahmin ederek kâğıdı düşük fiyattan alıp yüksek fiyattan satar. Bu işlemin sonucunda spekülasyon meydana gelir ve kişi yüksek kazanç elde eder.`,
    letter: "S"
  },
  {
    id: "212",
    title: "SPK Nedir?",
    description: `Sermaye piyasalarında yapılan yatırım işlemlerinin, belirli kuruluşlar tarafından denetlenmesi gerekir. Türkiye’de ilgili piyasaları denetleyen ve işleyişi düzenleyen kurumlardan biri de SPK’dir. Açılımı Sermaye Piyasası Kurulu olan SPK, düzenleyici ve denetleyici bir kamu kurumudur. İdari ve mali özerkliği bulunan SPK, sermaye piyasası ile ilgili usul ve esasları belirleme yetkisine sahiptir. 

Devlet organlarından biri olan SPK, 1981 yılında çıkan 2499 sayılı kanun ile kurulmuştur. Bu kurum, sermaye piyasalarında işlem ve yatırım yapan şirketlerin faaliyet alanlarıyla ilgili kuralları belirler. Şirketlere gerekli izinleri veren söz konusu yapılanma, gerektiğinde yaptırım uygulama yetkisini de elinde bulundurur. Ankara ve İstanbul olmak üzere 2 merkezden yönetilen Sermaye Piyasası Kurulu, Cumhurbaşkanlığına bağlıdır. Piyasaların işleyiş kurallarını belirleme noktasında faaliyet gösteren kuruluş; kanun, yönetmelik ve tebliğ unsurları üzerinde düzenlemeler yapar. Sermaye artırımı gibi piyasaları etkileyen pek çok işlem için SPK’den onay almak gerekir.`,
    letter: "S"
  },
  {
    id: "213",
    title: "Stagflasyon Nedir? Neden Olur?",
    description: `Stagflasyon kavramının ilk defa 1965’te İngiltere’nin iktisadi koşullarını açıklamak için ortaya atıldığı söylenir. Daha sonra 1970’li yıllarda OPEC (Petrol İhraç Eden Ülkeler Örgütü) tarafından yapılan fiyat artışlarının ardından yaşanan petrol kriziyle popülerlik kazandığı bilinir.

Stagflasyon durgunluğun içindeki enflasyon olarak özetlenen bir kavram. Esasında ekonominin çıkmaza girdiği dönemleri ifade eder. Her iki problemin aynı anda yaşandığı zamanlarda devletler, para ve maliye politikası araçlarıyla dengeyi korumaya çalışır. Ancak uygulanan politikalarla enflasyon ve işsizlik gibi faktörleri aynı anda iyileştirmek mümkün olmaz. `,
    letter: "S"
  },
  {
    id: "214",
    title: "Sübvansiyon Nedir?",
    description: `Sübvansiyon, devlet tarafından kurumlara ya da kişilere yapılan karşılıksız mali yardımlardır. Terime dair detaylı bir açıklama yapmadan önce bu desteğin hangi yöntemlerle verildiğinden bahsetmek gerekir. Sübvansiyonlar; mal, hizmet veya para şeklinde gerçekleştirilir. Mal ve hizmet biçimindekiler ayni, doğrudan parayla yapılanlar ise nakdî yardım olarak sınıflandırılır. Geri ödemesiz krediler ve vergi muafiyetleri nakdî desteğin örneğini oluşturur. Tüketicilere verilen giyim ve gıda yardımları ise ayni nitelik taşır. 

Fransızca kökenli bir kelime olan sübvansiyon, “destekleme” anlamına gelir. Sübvanse etmek ise kavramın yaygın kullanımlarından biridir. Devletler sübvanse çalışmalarıyla üreticilere ve tüketicilere destek verir. Tüketicilere yapılan yardımlarla ekonominin durgun olduğu dönemlerde vatandaşların maddi açıdan zorluk çekmemesi hedeflenir. Üreticilere verilen desteklerin temelinde ise bir iş kolunu geliştirmek ya da iç piyasayı hareketlendirmek gibi amaçlar yer alır. `,
    letter: "S"
  },
  {
    id: "215",
    title: "Swap Nedir? Türleri Nelerdir?",
    description: `Para birimleri arasındaki takas işlemleri, hem bireysel hem de kurumsal yatırımcılar için büyük bir önem taşır. Swap, bu değişim işlemlerinde sıklıkla kullanılan bir yöntemdir. Söz konusu yönteme dayalı para değiş tokuşları kurumsal yatırımcıların yanı sıra ülkeler tarafından da gerçekleştirebilir. Döviz değişim işlemleri bu açıdan uluslararası para dengelerini etkileyen bir yapıya sahiptir.

Swap kelimesi, İngilizcede “Değiş tokuş”, “Takas” gibi anlamlar taşır. Bu terim, finans terminolojisinde döviz cinsinin karşılıklı takas edilmesini ifade eder. Söz konusu işlemler iki tarafın varlık ve faiz ödemelerinin karşılıklı olarak değiştirilmesine dayanır. Döviz değişimi, bir anlamda varlık transferi olarak tanımlanabilir. Bu işlemler standart para ve hisse transferlerine göre farklı bir karaktere sahiptir.

Döviz değişim işlemleri genellikle borç ve faiz transferi için gerçekleştirilir. Söz konusu işlemlerde eş zamanlı bir değişim gerçekleşir. Bu değişim, farklı para birimlerine dâhil olan varlıklar üzerinden uygulanır. Takas işlemlerinde varlık transferi çeşitli finansal varlıklar üzerinden gerçekleşir. Bu dönüşüm, finansal kayıpların giderilmesine ve varlık yönetiminde stabilite sağlanmasına yardımcı olur`,
    letter: "S"
  },
  {
    id: "216",
    title: "Tahvil Nedir?",
    description: `Tahvil bir tür borç senedidir. Bu finansal araç sayesinde yatırımcılar, şirketlerin finansman ihtiyacını karşılayabilir. Tahvilde sabit faiz oranı ile borç verilir. Vade sonunda senetten faiz getirisi elde edilir.

Tahvil nedir sorusunun daha ayrıntılı cevap vermek de mümkündür. Bu, vadesi 1 yıldan fazla olan yazılı bir senettir. Senet sahibi olan yatırımcı, ihraç yapan kişinin alacaklısı konumundadır. Sabit getirili menkul kıymet olarak bilinen borç senedi sayesinde finansal ihtiyaçlar karşılanabilir.`,
    letter: "T"
  },
  {
    id: "217",
    title: "Takas Nedir?",
    description: `Ticari faaliyetler sırasında kullanılan birden fazla ödeme yöntemi bulunur. Bu ödeme yöntemlerinin de kendine has özellikleri mevcuttur. Alıcı ve satıcı taraflar arasında yapılacak olan ödemenin hacmi, hangi yöntemin belirleneceği noktasında önemli bir rol oynar. Bu noktada ise takas nedir sorusu sıklıkla araştırılır. 

Takas, bir diğer adıyla trampa, mal ve hizmetlerin bir diğeri ile değiş tokuşunu ifade eder. Sık tercih edilen bir ticaret tipi olan takas etmek, herhangi bir değişim aracı kullanılmaksızın yapılabilir. Özellikle modern ekonomilerde parasal sistemin yanı sıra varlığını sürdüren bir ödeme yöntemidir. `,
    letter: "T"
  },
  {
    id: "218",
    title: "Tavan Fiyatı Nedir?",
    description: `Borsa, kendi içinde farklı dinamikleri olan bir yapıdır. Bu anlamda kazanç oranını artırmak için borsada farklı uygulamalar gerçekleştirilir. Bunlardan biri de tavan fiyat uygulamasıdır. Tavan fiyatı, borsada hisseler için kullanılan bir tabirdir. Aslında bu kavram bir hesaplama türünü ifade eder. Tavan fiyatın tercih edilme nedeni borsadaki riskleri azaltmaktır. 

Söz konusu fiyat, günlük işlem hacmi baz alınarak yapılır. Bir hisse senedinin açılış ve kapanış fiyatları göz önünde bulundurularak hesaplanır. Burada yatırımcıların temel hedefi, hesaplamayı kâr marjına olabildiğince yakın hâle getirmektir. Tavan fiyatını kısaca hisse senedinin ulaşabileceği en yüksek limit fiyat olarak tanımlamak da mümkündür. `,
    letter: "T"
  },
  {
    id: "219",
    title: "Temel Analiz Nedir?",
    description: `
Finans sektöründe yatırım yaparken kullanılan yöntemlerden biri temel analizdir. Bu teknik, borsada yatırım yapılan enstrümanların gerçek piyasa değerinin belirlenmesine yardımcı olan yöntemler arasında yer alır. Özellikle uzun vadede yatırımlardan kâr etme hedefinde olan bireyler, bu analiz tekniğine gerekli önemi vermelidir. 

Temel analiz, farklı dış etkenler doğrultusunda yatırım aracının gelecekte kazanabileceği değeri ölçmeye yardımcı olan bir tekniktir. Yatırım araçlarının piyasa ve gerçek değeri birbirinden farklıdır. Bu noktada piyasa değeri, yatırım enstrümanın güncel borsadaki pozisyonunu ifade eder. Temel analiz ile borsada işlem gören şirketlerin ekonomik gidişatları incelenir. Doğru yapılan bir analiz yöntemiyle yatırım araçlarının alınıp satılması konusunda stratejik kararlar verilebilir. Borsada işlem yapan bireylerin mutlaka kullanması gereken bir araç olan bu analiz yöntemi, yatırım stratejisi belirlemeyi sağlar. `,
    letter: "T"
  },
  {
    id: "220",
    title: "Teminat Nedir?",
    description: `Teminat, Türkçede güvence anlamında kullanılan bir sözcüktür. Finans, borsa ve sigortacılık gibi daha pek alanda sıklıkla kullanılan bu terim, özel anlamlara da sahiptir. “Teminat nedir?” sorusunun cevabı, borsa ve finans alanında çeşitli işlemler yapabilmek için hesabınızda bulunması gereken paradır şeklinde verilebilir. Teminatın miktarı yapılacak olan işleme göre değişiklik gösterebilir. Bu para ile işlem yaptığınız kuruluş, alım ve satımlarda doğabilecek maddi yükümlülüklere karşı kendini güvence altına alır.

“Teminat ne demek?” sorusu kadar merak edilen bir diğer konu ise söz konusu güvencenin nasıl alındığıdır. Öncelikle neden bir güvenceye ihtiyaç duyulduğunu açıklamak gerekir. Finans alanında kimi zaman yatırım veya iş yapmak için kişiler borçlanmayı seçebilir. Borçlanarak yapılan işlemlerde genellikle yatırımcılar, ödemelerini elde edecekleri kâr ile karşılamayı planlar. Bu durum borcu sağlayan kurum için bir risk oluşturur. Eğer yatırımcının yaptığı işlemler, beklenilen kârı sağlamaz veya zarara uğramasına neden olursa bu durumda borç veren kurum da maddi kayıp yaşar. Bu olumsuzluğun önüne geçebilmek için kişilerden bir teminat bedeli talep edilir. Bu bedel yapılacak olan işleme veya borç verilen miktara göre değişiklik gösterebilir. Borçlu kişi, belirlenen vadede yükümlülüklerini yerine getirmezse kaynağı sağlayan kurum gösterilen teminat bedeline el koyarak zararını önlenmiş olur. `,
    letter: "T"
  },
  {
    id: "221",
    title: "Ters Repo Nedir?",
    description: `“Ters repo nedir” sorusuna cevap vermek için öncelikle repo konusuna değinmek gerekir. Repo, en temel tanımıyla teminata dayalı borçlanmadır. Ters repo ise yatırım araçlarının belirlenen sürenin ardından tekrar satılmak üzere alınmasına denir. Piyasa koşullarını düzenleyen bu işlemler hem yerel ve hem de küresel ölçekte oldukça önemlidir. Yapılan işlemler sonucu piyasada bulunan likidite oranı düzenlenerek yaşanabilecek finansal krizin önüne geçilebilir. 

Ters repo ülkemizde sermaye piyasası araçları içerisinde değerlendirilir. Yapılan işlemin vade uzunluğu, menkul kıymetlerin vadesinden uzun olamaz. Söz konusu işlem, organize finans piyasaları ve tezgâh üstü piyasalarda gerçekleştirilebilir. Yapılan ters repo işlemi taraflar arasında belirlenen sözleşme koşullarına uygun gerçekleşir.`,
    letter: "T"
  },
  {
    id: "222",
    title: "Tezgâh Üstü Piyasalar Nedir?",
    description: `Tezgâh üstü piyasa; borsa dışında gerçekleşen alıcı ve satıcı arasında pazarlık usulü alım-satım işlemlerine denir. OTC piyasası olarak da bilinen bu pazarın en önemli özelliği, fiziki bir mekâna ihtiyaç duymamasıdır. Pazarda işlem gören emtia, para ve hisse senedi gibi ürünlerin alışverişi için sanal ortamdan işlem yapılabilir. 

Tezgâh üstü piyasa, şeffaf özelliğe sahip değildir. Alım-satım süreci yalnızca alıcı ve satıcı arasında saklı kalır. Ancak yatırımcının isteği dâhilinde alışverişte komisyoncu devreye girebilir. Yapılan işlemlerin şeffaflık oranı tarafların belirleyebileceği bir durumdur. `,
    letter: "T"
  },
  {
    id: "223",
    title: "Tröst Nedir?",
    description: `Piyasayı ve fiyat seviyelerini kontrol edebilmek amacıyla şirketlerin bir araya gelerek tekel oluşturdukları gruba tröst adı verilir. Tröst şirketleri, kaynaklarını birleştirerek ortak hareket eder. İlk defa Amerika Birleşik Devletleri’nde ortaya çıkan bu oluşumlar, yapısı gereği rekabeti engellediği için birçok gelişmiş ülkede anti tröst yasalarla yasaklanmıştır. Karşıt yasalarla söz konusu oluşum engellenmeye çalışılsa da bu grupların günümüzde gizli anlaşmalarla birçok sektörde varlığını sürdürmeye devam ettiğini söylemek mümkündür.

Şirketlerin birleşerek rekabet koşullarını ortadan kaldırmaya yönelik ortak kararlar aldıkları bu oluşum, birden fazla sanayi dalında ve iş kolunda ortaya çıkabilir. Oluşuma dâhil olan şirketler tek bir yönetim çatısı altında birleştiğinden anlaşma gereği bağımsız hareket etmeleri mümkün değildir. Tröst şirketler, hisse senedi bölünmesiyle likiditeyi arttırmaktan ziyade gelişmiş bir tekelcilik anlayışına hâkimdir. Bu da şirketlerin hisselerini tek bir yönetime devretmesi anlamına gelir. Tek elden yönetildikleri için ilgili işletmelerin sermaye yapıları çok güçlü ve kârları da oldukça fazladır.`,
    letter: "T"
  },
  {
    id: "224",
    title: "Türev Piyasası Nedir?",
    description: `En basit hâliyle türev piyasaları, ileri bir vade için hem şartları hem de fiyatı önceden belirlenmiş ürünlerin alım satımlarının gerçekleştiği pazarlara verilen isim olarak tanımlanabilir. Bir ürünün söz konusu piyasada işlem görebilmesi için türev ya da emtia olarak nitelendirilmesi gerekir. İlgili borsa terimi vadeli işlem piyasaları olarak da bilinir.

Türev piyasaları organize ve tezgâhüstü pazarlar olmak üzere iki farklı başlık altında incelemek mümkündür. Futures, Opsiyon, SWAP ve Forwards adıyla bilinen işlemler türev piyasalar aracılığıyla yapılır. Forward işlemler tezgâhüstü piyasalarda yapılırken Futures sözleşmeler ise organize pazarlarda gerçekleştirilir. Terim, adını finansal yatırımcıların ihtiyaçlarının türemesinden almıştır. Piyasanın en temel hedefi yatırımcıları çeşitli risklerden korumaktır.`,
    letter: "T"
  },
  {
    id: "225",
    title: "Uluslararası Ödemeler Bankası Nedir?",
    description: `BIS (Bank for International Settlements), küresel çapta finansal ve parasal istikrarı sağlamaya çalışan bir organizasyondur. Uluslararası Ödemeler Bankası nedir sorusu, ülkelerin merkez bankalarının ve diğer kurumlarının iş birliğini artırma hedefiyle hareket eden bir kuruluştur şeklinde de cevaplanabilir. Uluslararası ölçekte bir organizasyon olan BIS, İsviçre’nin Basel şehrinde 1930 yılında kurulmuştur. Uluslararası Ödemeler Bankası’nın merkezi hâlâ Basel şehridir. Kuruluşun Meksika’da ve Hong Kong’da da ofisleri bulunur. 

Uluslararası Ödemeler Bankası (BIS), organizasyona üye olan ülkelerin merkez bankalarının rezerv politikaları özelinde koordine olmalarını sağlar. Ayrıca merkez bankalar arasında gerçekleşen para transferlerinde önemli bir rol oynar. Aracı kurum görevini üstlenen organizasyonun sermayesi ise altın frank olarak ifade edilir. Buna göre 1 altın frank, 0.29 g altını temsil eder. `,
    letter: "U"
  },
  {
    id: "226",
    title: "Uluslararası Pazar Nedir?",
    description: `Şirketler, işletmeler ve kuruluşlar için ürünlerini pazarlamak kârı maksimize etmenin önemli bir parçasıdır. Pazarlama, mal veya hizmetlerin üreticiden tüketiciye doğru akışını temsil eder. İşletmeler; ürünlerini, değerlerini ve teknolojilerini kurumsal bir düzlemde pazara yönlendirir. Bu noktada “Uluslararası pazar nedir?” sorusu gündeme gelir. Uluslararası pazar, üretimin gerçekleştiği mevcut ülke dışındaki alanların tümünü kapsayan bir kavramdır. 

Yabancı ülkelere taşınan mal ve hizmetler, işletmelerin küresel çapta genişlemesine yardımcı olur. Uluslararası pazar, ülkenin rekabet durumuna ve fırsat kaynaklarına göre yatırımcılara farklı fırsatlar sunar. Bu noktada pazarın büyüklüğü, politik ve ekonomik durumu belirleyici unsurlar olarak öne çıkar. Ayrıca yabancı ülke ile fiziksel ve kültürel yakınlıklar da pazarlama stratejileri açısından önem arz eder. `,
    letter: "U"
  },
  {
    id: "227",
    title: "Uyuşmazlık Komitesi Nedir?",
    description: `İşlem yapma yetkisi verilen tarafların kendi aralarında ortaya çıkan ve borsa hareketlerinden kaynaklanan problemlere uyuşmazlık adı verilir. İşlemlerden kaynaklanan bu uyuşmazlıkların çözülmesi için yetkili mercilerin aracılık etmesi gerekir. Böyle bir durumda çözüm için başvurulacak yetkili merci Uyuşmazlık Komitesi’dir.

Uyuşmazlık Hâlinde Nereye Başvurulmalı?
İşlemlerden kaynaklanan uyuşmazlıkların çözümü için Borsa İstanbul yetki sahibidir. Öte yandan uyuşmazlık yaşayan tarafların her zaman adli yargı ya da tahkim yolu hakkı saklıdır.  Borsa işlemlerinden kaynaklanmayan uyuşmazlıklarda ise Türkiye Sermaye Piyasaları Birliği’ne başvurulması gerekir.`,
    letter: "U"
  },
  {
    id: "228",
    title: "Uzun Pozisyon (Long Position) Nedir?",
    description: `Borsada yatırımcıların hareketlerini ifade eden bazı kavramlar vardır. Uzun pozisyon da bu kavramlardan biridir. Long position; yatırımcının herhangi finansal bir aracın, menkul kıymetin ya da malın ilerleyen tarihlerde değerinin artacağını düşünerek bunları satın almasıdır. Yatırımcının satın aldığı finansal enstrüman ya da malın değeri artarsa kâr elde edilir.

Söz konusu durumun tersine konumlanmak da bir piyasa stratejisidir. Buna da kısa pozisyon almak denir. Borsadaki kısa pozisyon ise finansal bir aracın ilerleyen zamanda değerinin düşeceği ön görülerek satılmasıdır. Kısa pozisyon düşüş beklentisi üzerinedir. Long position ise yükseliş beklentisi mevcutken söz konusu olur. `,
    letter: "U"
  },
  {
    id: "229",
    title: "Üye Temsilcisi Nedir?",
    description: `Üye temsilcisi, borsada işlem yapma hakkına sahip olan bir yatırımcı yetkilisi olarak tanımlanabilir. Broker olarak da ifade edilen bu kişi, bazen tek bir birey için bazen ise kuruluşlar adına çalışmalar yapabilir. Broker, yatırımcıların taleplerine göre hareket eder. Onların direktifleri doğrultusunda alım satım işlemlerini gerçekleştirebilir. 

Borsa üye temsilcisi, çalışmalarını yatırımcıları için yürüten kişidir. Borsadaki hisse senetlerinin alım satımı, ilerleyişleri ve beklentilerine dair yatırımcısını uyaran temsilci, temelde kâr elde ettirmeyi hedefler. Bu anlamda yatırımcı adına alım satım yapabilme yetkisine sahiptir. Üye temsilcisi nedir sorusuna kısaca bu şekilde yanıt vermek mümkündür.`,
    letter: "Ü"
  },
  {
    id: "230",
    title: "Vade Değeri Nedir?",
    description: `Vade değerini net bir şekilde ifade edebilmek için öncelikle bu kavramın ortaya çıkmasında etkili olan faktörleri bilmek gerekir. Bu etkenlerden biri olan vade, finans ve ekonomi konularında bankalar tarafından söz verilen bir para kazandırma yöntemidir. Borcun ödenmesi için tarafınıza verilen süreye de vade adı verilir. Finansal açıdan bakıldığında vade değeri, belirli miktardaki paranın süre sonunda getireceği tutar anlamını taşır. 

Bankalar tarafından hizmete sunulan vadeli hesapta bekletilen paranın üzerine her ay belirli oranda faiz eklenir. Bu kavram, aylık olarak faiz işlenmesiyle yatırımcının hesabına giren tutar şeklinde de ifade edilebilir. Daha genel anlamda ise finansal yükümlülüğün sahibine ödenmesi gereken tutardır. Bu değerden bahsedebilmek için elde bulunan varlığın vade sonunun gelmesi gerekir.`,
    letter: "V"
  },
  {
    id: "231",
    title: "Vadeli İşlemler Piyasası Nedir?",
    description: `Finans üzerine yapılan çalışmalar, kişi ve kurumların yatırım alanında daha esnek hareket edebilmesini amaçlar. Bu doğrultuda pek çok kavram ortaya çıkar. Vadeli İşlemler Piyasası da bu kavramlardan biridir. Bu piyasa, vadeli işlem sözleşmelerinin alınıp satıldığı organize pazar türüdür. Pazarda önceden değeri, vade ayı, miktarı ve adedi belirlenen sözleşmeler alınıp satılır. Bu anlaşmalar, aracı kurum vasıtasıyla işlem görür. 

Vadeli işlemler piyasası, ilgili sözleşmelerin alınıp satılmasını mümkün kılan ortama verilen isimdir. Burada aracı üyeler kavramı gündeme gelir. Bu kişiler, borsa tarafından belirlenmiş miktar ve oranlara riayet ederek teminat yatırır. Bu güvenceye dayanarak da vadeli alım ve satım işlemleri gerçekleşir. `,
    letter: "V"
  },
  {
    id: "232",
    title: "Varant Nedir?",
    description: `Varant, dayanak varlıklarını opsiyonlamak için kullanılan bir sermaye piyasası aracıdır. Bu araç, hisse senedi cinsinden varlıklar üzerinde önceden alım satım hakkı verir. Söz konusu senetler, piyasa beklentilerini kazanca çevirmek için kullanılır. Hissenin belli bir oranında senet satın alarak, borsadaki gidişata göre pozisyon edinmek ve bu beklentiyi kazanca çevirmek mümkündür.

Varant, hisselerle ilgili opsiyon sözleşmelerine dayanan bir araçtır. Bu araçlar, sözleşmelerin menkul kıymetler hâline getirilmesine dayanır. Hisselerin borsadaki gidişatına dair öngörüler varantlar ile yatırım hâline getirilir. Bu sözleşmeler, borsada işlem gördüğü için finansal araç kategorisinde yer alır. Bu senetler, aynı zamanda yapılandırılmış ürün sınıfındadır. Bu ürünleri kullanarak farklı borsalarda işlem yapmak mümkündür.`,
    letter: "V"
  },
  {
    id: "233",
    title: "Varlığa Dayalı Menkul Kıymet Nedir?",
    description: `Varlığa dayalı menkul kıymet, finans kurumlarının sahip olduğu alacakları karşılığında çıkarmış olduğu bir tür değerdir. Piyasada genellikle VDMK şeklindeki kısaltmasıyla görülür. Bu terim, yeni bir finansman tekniği olarak tanımlanabilir. 

Kurumların bilançolarında yer alan teminata konu alacakların ya da senetlerin ikincil piyasada pazarlanabilir hâle getirilmesi menkul kıymetler olarak adlandırılır. Varlığa dayalı menkul kıymetler de özellikle yurt dışında oldukça sık başvurulan bir yöntemdir. Banka kredisine alternatif olarak görülen bu durum, reel sektörün elinde tuttuğu varlıklar üzerinden işlem görür.`,
    letter: "V"
  },
  {
    id: "234",
    title: "VİOP Nedir?",
    description: `VİOP, Vadeli İşlem ve Opsiyon Piyasası’nın kısaltması olarak bilinir. 2005 yılında Türkiye’nin ilk özel borsası VOBAŞ ile söz konusu piyasanın temelleri atılır. 2012’de de İMKB Vadeli İşlem ve Opsiyon Piyasası aktif olarak hizmet vermeye başlar. Aynı alanda iki ayrı koldan hizmet veren bu piyasalar 2013 yılında Borsa İstanbul çatısı altında toplanmıştır. 

VİOP nedir sorusuna daha ayrıntılı bir cevap vermek de mümkündür. Vadeli İşlem ve Opsiyon Piyasası’nda; hisse senedi, döviz, emtia, kıymetli madenler ve endeks gibi ürünlere dayalı sözleşmeler kullanılır. Bunlar sayesinde var olan fiyat değişim risklerinden korunup güvenle alım satım yapılabilir. Ayrıca VİOP kapsamında erken yatırımların gelecekte teslim edilmesi için anlaşmalar da yapılır. Türev araçların alım ve satımının yapıldığı elektronik ortam kaldıraçlıdır. Bu sistem sayesinde yatırımcılar daha az sermayeyle daha büyük hacimli işlemler yapma imkânına sahip olur. `,
    letter: "V"
  },
  {
    id: "235",
    title: "Virman İşlemi Nedir? Nasıl Yapılır?",
    description: `Virman, sıklıkla bankacılıkta kullanılan bir terimdir. Fransızca kökenli bir kelime olan virman, transfer anlamına gelmektedir. Bir bankanın aynı şubesinde bulunan hesaplarınız arasında para transferi yaptığınızda virman işlemini gerçekleştirmiş olursunuz. Kişinin banka hesabında bulunan parayı ya da mevduatı kendine ait bir diğer hesaba aktarması virman işlemidir.

Virman işlemi basit bir örnekle açıklanabilir. Bir bankada maaş ve tasarruf için ayrı ayrı vadesiz mevduat hesaplarınız olduğunu farz edelim. Maaşınızdan belli bir tutarı mevduat hesabınıza aktardığınızda virman yöntemiyle transfer etmiş olursunuz. Tasarruf birikiminizden bankadaki diğer hesabınıza yapacağınız para transferi de aynı şekilde bu kapsam dâhilindedir. `,
    letter: "V"
  },
  {
    id: "236",
    title: "Volatilite (Oynaklık) Nedir?",
    description: `Volatilite ne demek sorusuna verilecek en temel yanıt, piyasa içerisinde yer alan belirli bir ürünün zamanla farklı fiyat dengelerine sahip olmasıdır. Ürün fiyat aralıklarında yaşanan denge kayıpları sebebiyle ortaya çıkan volatilite, piyasadaki oynaklığı temsil eder. Oynaklık risk ölçümü yapmak için ise genel olarak standart sapma eğimleri kullanılır. Özellikle Chicago Borsasında kullanılan bu yöntem, piyasa genelinde korku endeksi şeklinde adlandırılmakta ve yatırımlarda meydana gelen tüm dalgalanmaları ölçmektedir. İlk olarak 1993 yılında hesaplanmaya başlanan volatilite, piyasa güvenliği ve yatırımcılar açısından oldukça etkilidir. 

Volatilite oynaklık hesabı yapmak için uzmanlar tarafından standart sapma eğimleri kullanılır. Piyasalardaki oynaklığın düşük olduğu zamanlarda volatilite değeri de azalmaya başlar. Oynaklığın fazla olduğu dönemlerde ise bu endeks normalden daha üst seviyelerde değer görmeye başlar. Oynaklık endeks hesabı için yapılan işlemler ve kullanılan değerleri aşağıdaki örnekle açıklamak mümkündür.`,
    letter: "V"
  },
  {
    id: "237",
    title: "Yabancı Yatırım Fonu Nedir?",
    description: `
Yabancı yatırım fonu, millî sınırlar dışında kurulan kolektif yapılardır. Bu fonlar, uluslararası finansal kurallar çerçevesinde oluşur. Bu sebeple yabancı hisse yatırım fonları ülkelere göre farklı şartlar ve hukuki düzenlemelere tabi olabilir. Yabancı yatırım fonu nedir sorusuna detaylı bir cevap vermeden önce bu mali değerlerin ortaklık sunan araçlar olmadığı göz önünde bulundurulmalıdır. Diğer yandan yabancı hisse yatırım fonu, finansal bir hizmet sunar. Bu fonlar, para ve finansal değerlerin değişim gösterdiği piyasalara doğru yatırım yaparak gelir elde etmeyi amaçlar.  

Yabancı yatırım fonu kuruluşları; sanayi, teknoloji, siber güvenlik, emlak, enerji, sağlık ve finans sektörlerinde faaliyetlerde bulunabilir. Bu sektörler üzerinden yatırım fonlarının değerinin artırılması amaçlanır. Sektör yatırımları çeşitli holdingler üzerinden yapılabilir. Yabancı yatırım fonları uluslararası döviz kurları ile işlem görebilir. Türkiye’de satılabilen fonların sahip olması gereken şartlardan biri, satış işlemlerinin TCMB’nin günlük faaliyet gösterdiği döviz türleri üzerinden yapılmasıdır.`,
    letter: "Y"
  },
  {
    id: "238",
    title: "Yatırım Ortaklıkları Nedir?",
    description: `Yatırım ortaklıkları, menkul kıymetlerin alım ve satımı sırasında oluşan fark sayesinde kâr etmeyi amaçlayan kuruluşlardır. Bu kuruluşlar, kayıtlı sermaye esasına göre kurulan anonim şirketlerdir. Yatırım ortaklıklarının; ticari, sınai ve zirai faaliyetlerle uğraşmak gibi görevleri yoktur. Menkul kıymet alım satımına aracılık edemeyen bu kuruluşlar, kredi verme ve ödünç alma işlemlerinde de bulunamaz.

Yatırım ortaklıkları, getiri potansiyeli olan alanlara yönelerek kâr sağlamayı amaçlar. Bu doğrultuda; yabancı, özel veya kamu sektörü borçlanma senetleri ve paylarına, altın ve diğer kıymetli madenlere yatırım yapabilirler. Ayrıca bir yatırım ortaklığı; hisse senedi, kıymetli madenler, faiz, forward, finansal vadeli işlemler gibi pek çok farklı araç üzerinden de kâr edebilir.`,
    letter: "Y"
  },
  {
    id: "239",
    title: "Yatırımcı Nedir?",
    description: `Yatırımcı nasıl olunur öğrenmek için öncelikle bilinmesi gereken kavramlar mevcuttur. Bireylerin finansal terimlere hâkim olması bu noktada büyük önem taşır. Yatırım yapan kişiler üç farklı kalıba göre ayrılır. Bunlar muhafazakâr, orta ve agresif olarak adlandırılır. Gruplandırmadaki amaç, yatırım yapanların hareket alanını ve hedeflerini tanımlamak içindir. 

Yatırım yapan kişiler için başlangıç aşamasında yararlanabilecekleri belirli bir sermaye olması kritiktir. Böylece bu varlıklar üzerinden hamleler yapmak mümkün olur. Gelir-gider hesabı ve risk yönetimi de kaynaklar baz alınarak yapılır. Akıllı yatırımcılar için kullanılan araçların yanı sıra kâr-zarar dengesi de önem taşır. Yatırımcı nedir denildiğinde akla gelen ilk kavramlardan biri de borsadır. İşlemlerin şirket tahvillerinde olduğu gibi borsa üzerinden yapılması da mümkündür. `,
    letter: "Y"
  },
  {
    id: "240",
    title: "Yeni Hisse Pazarı Nedir?",
    description: `Şirketler, Borsa İstanbul tarafından belirlenen kriterlere bağlı olarak pazarlarda işlem görür. Pay piyasası, pazarlar arası değerlendirmelere göre değişiklik gösterir. Dönemsel olarak yapılan toplantılar sonucunda 1 Temmuz 2022 tarihi itibarıyla yeni hisse pazarı devreye girmiştir. Yapılan bu değişiklik sonucu, para piyasalarında işlem görecek emtialarda da farklılıklar ortaya çıkmıştır. Buna göre; Yıldız Pazar, Ana Pazar ve Alt Pazar’da hisselerin işlem gördüğü alanlar değişmiştir. Yıldız Pazar, halka açık piyasa değeri 100 milyon TL’nin üzerinde olan şirketlerin hisselerinin işlem gördüğü piyasaları temsil eder. Emtia pazarını yakından takip eden yatırımcılar ve şirketler için bu değişiklik oldukça önemlidir.

Ekonomi piyasalarında yaşanan değişiklikler yatırımcıların hisse alış ve satış süreçlerini önemli ölçüde etkiler. Borsada pazar değişikliği ise dönemsel değerlendirme toplantılarının ardından ilan edilir. Buna göre Borsa İstanbul’da 3 ayda bir olacak şekilde pazar değişikliği yapılır. Pazar değişikliği yaşayan şirketlerin hisseleri tüm kamuoyuna aynı anda sunulur. Yatırım faaliyetlerinde bulunan şirketler, borsada pazar değişikliğini yakından takip ederek hisse alış ve satışlarını hayata geçirir. Yeni hisse pazarı değişikliği en son 1 Temmuz 2022 tarihinde yapılmıştır. Bu tarihe göre bir sonraki pazar değişikliği ise 1 Ekim 2022 gününde olacaktır.`,
    letter: "Y"
  },
  {
    id: "241",
    title: "Yİ-ÜFE ve TÜFE Nedir?",
    description: `Yİ-ÜFE, belirli bir dönem aralığında ülke ekonomisinde üretimi yapılan ve yurt içinde satışa sunulan ürünlerin değerlerini karşılaştırarak ölçen fiyat endeksidir. Yİ-ÜFE’nin açılımı “Yurt İçi Üretici Fiyat Endeksi”dir. Bu endekste üretici fiyatları baz alınır. Eskiden TEFE olarak bilinen kavram, günümüzde Yİ-ÜFE olarak adlandırılmaktadır.  

TÜFE ise “Tüketici Fiyat Endeksi”dir. Hane halkının tüketimi için ayrılan mal ve hizmet fiyatlarının zaman içerisindeki değişimini ölçen endeks olarak tanımlanabilir. Bu endekste aylık değişimi ölçebilmek amacıyla enflasyon oranı hesaplaması yapılır. Yurt içinde önemli bir paya sahip olan üreticilerin yaptığı mal üretimini Yİ-ÜFE kapsar. TÜFE’nin kapsamını ise tüketilmeye yönelik mal ve hizmetlerin satın alımları oluşturur.`,
    letter: "Y"
  },
  {
    id: "242",
    title: "YTD Nedir? YTD’nin Açılımı Nedir?",
    description: `Bilindik, çok kullanıcılı borsa sitelerinde ve finans hakkında paylaşım yapan sosyal medya hesaplarında “YTD” kelimesi sıklıkla görülür. Bilgi içerikli cümlelerin sonuna eklenen YTD açılımı “Yatırım tavsiyesi değildir.” anlamına gelir. Kelimelerin baş harflerinden oluşan bu kısaltma, şimdilerde hemen hemen tüm borsa sitelerinin kullandığı bir terim hâline gelmiştir. Borsada YTD, bir haber ve bilgi paylaştıktan sonra bunun kişisel görüşler üzerine kurulu olduğunu ifade etmek için kullanılır. Söz konusu yoruma göre yatırım yapıp zarar etme durumunda borsa sitelerinin sorumluluk altına girmesini engeller.

Sermaye Piyasası Kurulu tarafından yetkilendirilen yatırım kurumları ve SPK lisanslı kişiler, yorum veya analizlerinin sonuna bir uyarı koyar. Analizlerin sonuna eklenen yatırım tavsiyesi değildir yazısıyla kişilerin birikimleri hakkındaki kararlarını etkilememek amaçlanır. Yatırımcıların düşüncelerini etkilemek, kişi veya kurumları büyük bir yükümlülük altına sokar. Böyle bir durumla karşılaşmamak için SPK, uyarı metnini analizin sonunda bulundurmayı zorunlu hâle getirir.`,
    letter: "Y"
  },
  {
    id: "243",
    title: "Zaman Önceliği Nedir?",
    description: `Yatırım alanında pek çok önemli kavram ve uygulama bulunur. Hisse senetleri, yatırım ve finans alanında çalışan kişilerin sık sık alımını ve satımını yaptığı kıymetli evrak türlerindendir. Bu alış ve satışların yapıldığı sırada aynı anda pek çok yatırımcının veya alıcının var olduğu göz önünde bulundurulması gereken bir detaydır. Büyük bir kitle tarafından finans alanında komutlar verilir ve işlemler yapılır. Bu nedenle hisse senetlerinin alımı ve satımı sırasında verilen emirler için belli kurallar uygulanır. Bu şekilde hak kayıplarının önlenmesi ve adaletli bir işleyişin olması amaçlanır. Zaman önceliği kavramı da bu alandaki kurallardan biridir.  

“Zaman önceliği nedir?” sorusunu hisse senetleri piyasasına yön veren, işleyişi düzene sokan uygulamalardan biridir şeklinde yanıtlamak mümkündür. Bu kural, fiyat eşitliği durumunda gündeme gelir. Eğer iki hisse alım veya satımı sırasında fiyat eşitliği durumu söz konusu olursa sisteme zaman açısından daha önce kaydı yapılan emrin ön sıraya yerleşmesi anlamına gelir. `,
    letter: "Z"
  }
];