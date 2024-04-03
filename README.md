# IWeather Uygulaması ©️

💻 https://iweather-app.vercel.app/

![iweather-screenshots](https://github.com/omrfrkcpr/iweather/assets/77440899/1f7a1f29-2ddd-4a25-ba67-3436c979058d)

## Proje Tanımı

IWeather Uygulaması, kullanıcıların dünya genelindeki hava durumu bilgilerini anlık olarak görmelerini sağlayan bir web uygulamasıdır. Kullanıcılar, istedikleri şehirlerin hava durumu tahminlerini görebilir, çoklu şehir hava durumlarını görüntüleyebilir ve detaylı hava durumu bilgilerine erişebilirler. Uygulama, modern ve kullanıcı dostu bir arayüzle tasarlanmıştır, böylece kullanıcılar hızlı ve kolay bir şekilde istedikleri hava durumu bilgilerine ulaşabilirler.

## Proje Çıktısı

![iweather-app](https://github.com/omrfrkcpr/iweather/assets/77440899/04e2ff8c-8979-4148-81ce-6644f1bdfcec)

## Proje Plan ve Yönetimi

**Epic Kullanıcı Hikayesi:** Hava durumu uygulamasının bir kullanıcısı olarak, çeşitli konumlar için güncel hava durumu bilgilerine zahmetsizce erişmek, sık görüntülenen konumları hızlı erişim için kaydetmek, birden fazla gün için ayrıntılı hava durumu tahminlerini görüntülemek ve uygulamanın farklı bölümleri arasında sorunsuz bir şekilde gezinmek istiyorum. 🌤️

**Kullanıcı Hikayeleri:**

1️⃣ **Güncel Hava Durumu Bilgilerini Görüntüle:**

- 🥇 Kullanıcı olarak şehir adı girerek güncel hava durumu bilgisini görmek istiyorum.
- 🥈 Hava durumunu uygun simgeler ve arka plan görselleri ile görselleştirmek istiyorum.

  **Görev-1 =** Kullanıcı arayüzü oluşturun (şehir giriş alanı ve hava durumu görüntüleme alanı)<br>
  **Görev-2 =** OpenWeatherMap API'sini kullanarak hava durumu bilgilerini getirecek bir fonksiyon yazın.<br>
  **Görev-3 =** Axios'u kullanarak API çağrısı yapın ve döndürülen verileri işleyin.<br>
  **Görev-4 =** Belirli URL uç noktasıyla hava durumu bilgilerini kullanıcıya otomatik olarak görüntüleyin.<br>
  **Görev-5 =** Hava koşullarına göre simgeleri ve arka plan resimlerini değiştirin.

2️⃣ **5 Günlük Hava Durumu Ayrıntılarını Görüntüle:**

- 🥇 Kullanıcı olarak girilen şehrin 5 günlük hava tahminini görmek istiyorum.
- 🥈 Kullanıcı olarak her gün için minimum ve maksimum sıcaklıklarla birlikte detaylı hava durumu bilgisi istiyorum.

  **Görev-1 =** Günlük hava durumu ayrıntılarını görüntülemek için bir Forecast componenti oluşturun.<br>
  **Görev-2 =** OpenWeatherMap API'sini kullanarak 5 günlük hava durumu tahminini almak için bir biçimlendirici fonksiyonu yazın.<br>
  **Görev-3 =** Biçimlendirilmiş günlük hava durumu tahminini kullanıcıya görüntüleyin.

3️⃣ **Responsive Tasarım:**

- 🥇 Bir kullanıcı olarak farklı ekran boyutlarına duyarlı bir tasarım istiyorum.
- 🥈 Kullanıcı olarak uygulamanın mobil, tablet ve masaüstü cihazlarda kullanılabilir olmasını istiyorum.

  **Görev-1 =** TailwindCSS kullanarak tasarımı farklı ekran boyutlarına duyarlı hale getirin.<br>
  **Görev-2 =** Mobil cihazlar, tabletler ve masaüstü cihazlar için TailwindCSS'yi kullanarak uygulamaya stil verin.

4️⃣ **Hava Durumu Bilgilerini Localde Saklayın:**

- 🥇 Kullanıcı olarak daha önce aranan şehirlere ait hava durumu bilgilerinin local olarak saklanabilmesini istiyorum.
- 🥈 Kullanıcı olarak birden fazla şehrin hava durumu bilgisini depolamak istiyorum.

  **Görev-1 =** Hava durumu bilgilerini depolamak ve almak için "Local Storage" kullanın.<br>
  **Görev-2 =** Birden fazla şehir için depolanan hava durumu bilgilerini "Carousel" formatında görüntüleyin.

5️⃣ **Hava Durumu Bilgilerini "Carousel" Stilinde Görüntüleme:**

- 🥇 Kullanıcı olarak, depolanan hava durumu bilgilerini "Carousel" tarzı bir ekranda (Material Tailwind) görüntülemek istiyorum.
- 🥈 Kullanıcı olarak farklı şehirlerin hava durumu bilgileri arasında kolaylıkla geçiş yapmak istiyorum.

  **Görev-1 =** Carousel Component ini, Material Tailwind den alarak implemente edin.<br>

6️⃣ **Hata ve Başarı Bildirimleri:**

- 🥇 Kullanıcı olarak hava durumu bilgisi alımı başarılı olduğunda bilgilendirilmek istiyorum.
- 🥈 Bir kullanıcı olarak uygun bildirimlerin hataları göstermesini ve neyin yanlış gittiği konusunda bana yol göstermesini istiyorum.

  **Görev-1 =** Axios isteklerinin durumuna göre uygun bildirimleri görüntüleyecek fonksiyonları yazın.<br>
  **Görev-2 =** Bildirimler için React Toastify paketini entegre edin.

7️⃣ **React Router'ı Kullanarak Sayfalar Arasında Gezinme:**

- 🥇 Kullanıcı olarak onClick olaylarını kullanarak sayfalar arasında gezinmek istiyorum.
- 🥈 Kullanıcı olarak sayfa navigasyonu için React Router'ı kullanmak istiyorum.

  **Görev-1 =** Sayfalar arası navigasyonu sağlamak için React Router yapısını kurun.<br>
  **Görev-2 =** Uygulamanın farklı bölümleri için ayrı sayfalar/componentler oluşturun (örneğin, ana sayfa, hava durumu ayrıntıları sayfası).<br>
  **Görev-3 =** Sayfalar arasında gezinmek için onClick olay işleyicilerini uygulayın.

8️⃣ **React Context API Kullanarak Global State Yönetimi:**

- 🥇 Kullanıcı olarak state yönetiminin React Context kullanılarak yapılmasını istiyorum.
- 🥈 Kullanıcı olarak component ler arasında bağlamı kullanarak kesintisiz iletişim sağlamak istiyorum.

  **Görev-1 =** Uygulama state lerini yönetmek için bir context sağlayıcı (context provider) oluşturun.<br>
  **Görev-2 =** Context sağlayıcısı içindeki state leri güncellemek için state değişkenlerini ve ilgili fonksiyonları tanımlayın.<br>
  **Görev-3 =** State lere erişmek ve gerektiğinde onları dinamik olarak güncellemek için ilgili componentleri, context sağlayıcı kapsamına alın.

9️⃣ **API ile Şehir Önerileri Alın:**

- 🥇 Kullanıcı olarak, şehir ararken filtreleyerek bana şehir önermesini istiyorum.
- 🥈 Kullanıcı olarak, şehir önerilerini dropdown olarak görmek istiyorum.

  **Görev-1 =** Kullanıcı şehir girişi yaparken, şehir önerilerini göstermek için bir fonksiyon yazın.<br>
  **Görev-2 =** Şehir önerilerini almak için Axios kullanarak ücretsiz bir API'yi ([AllCities_API_URL](https://countriesnow.space/api/v0.1/countries)) kullanın ve kullanıcıya TailwindCSS ile dropdown tasarlayarak sunun.

## Proje İskeleti 🩻

```
📖IWeather App (dosya)
|
├── 📁public
│     └── index.html
├── 📁src
│    ┣ 📂assets
│    ┃       ┗ [resimler ve ikonlar]
│    ┣ 📂components
│    ┃       ┣ Footer.jsx
│    ┃       ┣ Forecast.jsx
│    ┃       ┣ GeneralInfos.jsx
│    ┃       ┣ Messages.jsx
│    ┃       ┣ Navbar.jsx
│    ┃       ┣ Search.jsx
│    ┃       ┗ WeatherDetails.jsx
|    ┃
│    ┣ 📂context
|    ┃    ┗ WeatherProvider.js
|    ┃
│    ┣ 📂helpers
|    ┃    ┗ toastNotify.js
|    ┃
│    ┣ 📂pages
│    ┃       ┣ Home.js
│    ┃       ┣ ShowWeather.js
│    ┃       ┗ WeatherLists.js
│    ┃
│    ┣ 📂router
│    ┃       ┗ AppRouter.js
|    ┃
│    ┣ 📂services
│    ┃       ┣ cityFormatters.js
│    ┃       ┣ cityService.js
│    ┃       ┣ constants.js
│    ┃       ┣ weatherFormatters.js
│    ┃       ┗ weatherService.js
|    ┃
│    ┣ App.js
│    ┣ index.css
│    ┗ index.js
|
├── example.env
├── .gitignore
├── iweather-app.gif
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Proje Amacı

Bu proje ile ReactJS ve TailwindCSS kullanarak tek sayfalı Hava Durumu Uygulamasının geliştirilecek ve bu vesileyle API kullanımı, asenkron veri işleme ve dinamik içerik yönetimi gibi konularda becerilerin geliştirilmesi amaçlanmaktadır.

### Proje sonunda aşağıdaki konular ele alınacaktır; 🎯

- HTML & CSS & JS & ReactJS

- TailwindCSS (Material Tailwind)

- Axios

- React-Router & React-Context API

### Proje sonunda; 💪

- HTML ve CSS (TailwindCSS) ile JS ve ReactJS kodlama becerileri geliştirilmiş olacak.

- Git komutlarını (Push, pull, commit, add vb.) ve Versiyon Kontrol Sistemi (Github) etkin bir şekilde kullanılmış olacak.

## Adım Adım Proje Kılavuzu

- Adım 1: Depoyu Localinizde Klonlayın:

  **_Proje deposunun URL'sini GitHub'dan veya benzer bir platformdan kopyalayın._**
  **_Terminalinizi veya komut isteminizi açın ve projeyi depolamak istediğiniz dizine gidin._**
  **_Depoyu klonlamak için aşağıdaki komutu kullanın:_**

  ```
  git clone <repository_url>
  ```

  **_<repository_url> kısmını kopyaladığınız proje deposunun URL'si ile değiştirin._**

- Adım 2: Node Package Manager Yükleyin:

  **_Terminalinizde veya komut isteminizde projenin kök dizinine gidin._**
  **_Npm paketlerini yüklemek için aşağıdaki komutu kullanın:_**

  ```
  npm install
  ```

  **_Bu komut, package.json dosyasındaki listeye göre projenin bağımlılıklarını yükleyecektir._**

- Adım 3: `https://home.openweathermap.org/users/sign_up` adresine kaydolun ve API anahtarını alın. Bundan sonra kişisel API anahtarınızı ".env" dosyanıza yapıştırın. Proje kök dizinindeki "example.env" dosyasını kontrol edebilirsiniz.

  ```
  REACT_APP_API_KEY=[YOUR_PERSONAL_OPENWEATHER_API_KEY]
  ```

  **_[YOUR_PERSONAL_OPENWEATHER_API_KEY] öğesini Openweathermap'ten aldığınız kişisel API anahtarınızla değiştirin._**

- Adım 4 : Tüm paketler başarıyla yüklendikten ve API anahtarı yapıştırıldıktan sonra projeyi başlatmak için aşağıdaki komutu kullanın:

  ```
  npm start
  ```

  **_Bu komut, geliştirme sunucusunu başlatacak ve varsayılan web tarayıcınızda projenin canlı önizlemesini açacaktır._**
  **_Tarayıcı otomatik olarak açılmazsa http://localhost:3000 adresine giderek projeyi görüntüleyebilirsiniz._**

## Ek Veriler 📦

- [Assets Dosyası](./src/assets/)
- [AllCities_API_URL](https://countriesnow.space/api/v0.1/countries)
- [OPENWEATHERMAP_API](https://openweathermap.org/api/one-call-3#start)

## Katkı 🤝

Görüşleriniz ve katkılarınız projelerimi büyük ölçüde zenginleştiriyor! İster yeni proje konseptleriyle dolu olun ister mevcut konseptleri geliştirecek fikirleriniz olsun, katkınız benim çok değerlidir. Düşünceleriniz hakkında bir sohbet başlatmak için bir konu açmaktan çekinmeyin veya önerdiğiniz değişiklikleri içeren bir request isteği gönderin. Her katkı büyümemde ve gelişimimde hayati bir rol oynuyor; Şimdiden teşekkür ederim!

## Lisans 🪪

Bu depo MIT Lisansı kapsamında lisanslanmıştır. Ayrıntılar için MIT lisans dosyasına bakın. Daha fazla bilgi için lütfen [MIT Lisansını](https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide) ziyaret edin.

**<p align="center">&#9786; Mutlu Kodlamalar &#9997;</p>**
