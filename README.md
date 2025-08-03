# urbangrow
AI-powered urban gardening assistant

# UrbanGrow 🌱

## 👤 Proje Sahibi  
**Mevlüt Furkan Yılmaz** – Developer · UX/UI Designer · Scrum Master · Product Owner · DevOps Engineer

### 👤 Sorumluluklar  
- Ürün vizyonunu belirleme ve roadmap/sprint planlaması  
- Arayüz tasarımı ve kullanıcı deneyimi  
- Frontend & backend geliştirme  
- AI öneri motoru entegrasyonu ve veri işleme  
- API tasarımı ve veri modeli kurulumu  
- Responsive tasarım ve mobil uyumluluk testleri  
- Deployment, CI/CD kurulumu ve canlıya alma  
- Sprint review ve retrospective yürütme  
- Pazarlama stratejisi geliştirme ve kullanıcı etkileşimi planlama  

---

## 📦 Ürün Adı  
**UrbanGrow**

## 📝 Ürün Açıklaması  
UrbanGrow, şehirde yaşayan bireylerin sınırlı alanlarda başarıyla bitki yetiştirmesine yardımcı olan yapay zekâ destekli bir mobil/web uygulamasıdır. Kullanıcının iklimi, alan büyüklüğü, sulama alışkanlıkları ve tercihleri doğrultusunda uygun bitki seçimleri, bakım takvimleri ve hata teşhis önerileri sunar. Amaç: şehir içi bireylerin kendi mikro bahçelerini sürdürülebilir biçimde yönetmelerini sağlamak ve bitki yetiştirmeyi daha erişilebilir kılmak.

## 🎯 Hedef Kitle  
- Balkon/teras gibi küçük alanlarda bitki yetiştirmek isteyen şehirli kullanıcılar  
- Yeni başlayan hobi bahçıvanlar  
- Sürdürülebilir yaşam meraklıları

## 📈 Pazarlama Stratejisi
- **Deneyim Odaklı Tanıtım:** Kullanıcının kendi bahçesine özel günlük bakım önerileri gösteren ilk etkileşim.  
- **Sosyal Medya Etkileşimi:** Kullanıcı başarı hikayeleri ve “önce/sonra” görselleri paylaşımıyla organik yayılma.  
- **Topluluk İş Birlikleri:** Şehircilik ve çevre topluluklarıyla ortak mini kampanyalar (yeşil meydanlar, #UrbanGrowChallenge).  
- **Freemium Modeli:** Temel öneriler ücretsiz, derinlemesine bakım planları ve hatırlatmalar premium.

---

## 🛠 Proje Teknik Altyapısı ve Temeller

### 🎯 Amaç  
Kullanıcılara bulundukları koşullara göre uyarlanmış, yapay zekâ destekli bitki bakım önerileri sağlamak; mikro-çevresel veriyi almak, analiz etmek ve aksiyon önerisi üretmek.

### 🧰 Kullanılan Teknolojiler  
- **React.js:** Dinamik, responsive kullanıcı arayüzü.  
- **Vite:** Hızlı geliştirme ve build süreci.  
- **TailwindCSS:** Modern, mobil uyumlu tasarım.  
- **Python / FastAPI:** Bitki öneri motoru ve backend.  
- **PostgreSQL veya SQLite:** Kullanıcı profili ve geçmiş verileri.  
- **Yapay Zekâ API’si:** Kişiselleştirilmiş öneri üretimi.

---

## 📦 Product Backlog

| Sprint No | Hedef | Açıklama |
|-----------|-------|----------|
| Sprint 1 | Temel UI kurulum ve kullanıcı profili | Giriş ekranı, profil oluşturma, dashboard (mock) |
| Sprint 2 | Öneri motoru ve veri entegrasyonu | Çevresel girdilerle AI önerisi, geçmiş veriler |
| Sprint 3 | Testler, yayınlama ve geri bildirim | Mobil uyumluluk, deploy, kullanıcı testi |

---

## 🏁 Sprint 1: Temel Arayüz ve Profil Sistemi

### Trello Board (solo)
- To Do: Profil formu, ana sayfa layout, mock öneri kartları  
- In Progress: UI bileşenleri, validation  
- Done: Responsive temel navigasyon

### Burn-Down Chart  
*(1–7 Ağustos örneği)*

### 🎯 Sprint Hedefi
- Kullanıcı profili oluşturma  
- Dashboard tasarımı  
- Öneri kartlarının mock gösterimi

### User Story ve Story Point Tablosu

| ID | User Story | Açıklama | Story Point |
|----|------------|----------|-------------|
| US01 | Profil oluşturmak istiyorum | Kişiselleştirme için form | 3 SP |
| US02 | Bakım önerilerini görmek istiyorum | Mock öneri kartları | 4 SP |
| US03 | UI bileşenlerini kurmak istiyorum | Component altyapısı | 2 SP |
| US04 | Bitki seçimi yapmak istiyorum | Dropdown ile seçim | 3 SP |
| **Toplam** |  |  | **12 SP** |

### Daily Scrum Tablosu

| Gün | Yapılacak İşler | Notlar |
|-----|-----------------|--------|
| 1. Gün | Proje iskeleti kurulumu | Teknoloji seçimi |
| 2. Gün | Profil formu geliştirme | Validation eklendi |
| 3. Gün | Dashboard tasarımı | Mobil testleri başladı |
| 4. Gün | Öneri kartları mock | UI düzenlendi |
| 5. Gün | Responsive düzeltmeler | Hatalar gideriliyor |
| 6. Gün | Demo hazırlık | Sunum taslağı |
| 7. Gün | Review & retrospective | Geri bildirim toplandı |

### 🔍 Sprint Review
- Profil sistemi çalışıyor  
- Dashboard’da öneri kartları gösteriliyor  
- Responsive temel hali hazır  

### 🔁 Sprint Retrospective

| Ne İyi Gitti | Geliştirilebilecek Noktalar | Aksiyon |
|--------------|-----------------------------|---------|
| Hızlı prototip | Mobil test erken yapılmalıydı | Erken responsive kontrol |
| UI tutarlı | Validation gecikmeli eklendi | Şablon hazırla |

---

## 🏁 Sprint 2: Öneri Motoru ve Veri Entegrasyonu

### Trello Board
- To Do: Çevresel veri girişi, API endpoint’leri  
- In Progress: AI öneri algoritması  
- Done: Dinamik öneri gösterimi

### Burn-Down Chart  
*(8–21 Ağustos)*

### 🎯 Sprint Hedefi
- Kullanıcının çevre bilgilerini almak  
- AI tabanlı öneri üretmek  
- Öneriyi arayüzde göstermek  

### User Story ve Story Point Tablosu

| ID | User Story | Açıklama | Story Point |
|----|------------|----------|-------------|
| US05 | Çevre koşullarını girmek istiyorum | Input formu | 4 SP |
| US06 | Öneri almak istiyorum | AI entegrasyonu | 5 SP |
| US07 | Detaylı bitki bilgisi görmek istiyorum | Modal detay | 3 SP |
| US08 | Geçmiş önerileri görmek istiyorum | History view | 4 SP |
| **Toplam** |  |  | **16 SP** |

### Daily Scrum Tablosu

| Tarih | Yapılan İşler | Notlar |
|-------|---------------|--------|
| 8 Ağustos | Girdi endpoint hazır | Backend kuruldu |
| 10 Ağustos | AI çağrısı entegre edildi | Sonuç parse edildi |
| 12 Ağustos | UI güncellendi | Öneri kartı iyileşti |
| 14 Ağustos | Geçmiş görünümü eklendi | Optimizasyon yapıldı |
| 16 Ağustos | Hatalar düzeltildi | Edge case’ler ele alındı |

### 🔍 Sprint Review
- Dinamik öneri çalışıyor  
- Geçmiş veriler görüntülenebiliyor  

### 🔁 Sprint Retrospective

| Ne İyi Gitti | Geliştirilebilecek Noktalar | Aksiyon |
|--------------|-----------------------------|---------|
| Öneri doğruluğu | Gecikme vardı | Caching ekle |
| UI düzenli | History yavaş açılıyordu | Sorgu optimize et |

---

## 🏁 Sprint 3: Yayınlama ve Kullanıcı Deneyimi

### Trello Board
- To Do: Test senaryoları, deploy pipeline  
- In Progress: Hataları düzeltme, responsive refinements  
- Done: Canlıya alma, kullanıcı testi

### Burn-Down Chart  
*(22 Ağustos - 4 Eylül)*

### 🎯 Sprint Hedefi
- Stabil deploy  
- Geri bildirim toplama  
- Performans iyileştirme

### User Story ve Story Point Tablosu

| ID | User Story | Açıklama | Story Point |
|----|------------|----------|-------------|
| US09 | Mobilde sorunsuz deneyim istiyorum | Responsive geliştirme | 4 SP |
| US10 | Canlıya alma sürecini tamamlamak istiyorum | CI/CD | 5 SP |
| US11 | Geri bildirim bırakmak istiyorum | Feedback formu | 3 SP |
| US12 | Performans sorunlarını çözmek istiyorum | Lazy load, caching | 4 SP |
| **Toplam** |  |  | **16 SP** |

### Daily Scrum Tablosu

| Tarih | Yapılan İşler | Notlar |
|-------|---------------|--------|
| 22 Ağustos | Mobil testleri | UI ince ayar |
| 24 Ağustos | CI/CD kuruldu | Otomatik deploy |
| 26 Ağustos | Kullanıcı testi | Feedback alındı |
| 28 Ağustos | Optimizasyon | Lazy load eklendi |
| 30 Ağustos | Son düzeltmeler | Final kontrol |
| 1 Eylül | Demo hazırlandı | Sunum + canlı |
| 4 Eylül | Yayınlandı | Review yapıldı |

### 🔍 Sprint Review
- Uygulama stabil çalışıyor  
- Otomatik deploy sağlandı  
- Kullanıcı geri bildirimi entegre edildi  

### 🔁 Sprint Retrospective

| Ne İyi Gitti | Geliştirilebilecek Noktalar | Aksiyon |
|--------------|-----------------------------|---------|
| Deploy otomatik | Erken test eksikti | Erken kullanıcı testi ekle |
| Performans arttı | Feedback sürekli değil | Sürekli mekanizma kur |

---

## 📌 Notlar ve Geliştirme Fırsatları  
- Gelecekte yerel hava verisi entegrasyonu  
- Bitki hastalıklarını görüntüyle tanıma (CV modeli)  
- Topluluk paylaşım modülü bu örnektekine benzer şekilde genişletilebilir  
