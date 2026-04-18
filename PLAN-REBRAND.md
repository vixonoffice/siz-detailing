# SIZ DETAILING — Plan Complet de Rebrand

## Analiza Curentă (Ce e stricat)

### Performance (CRITIC)
- Three.js canvas cu 6000 particule = LAG pe orice telefon
- Lenis smooth scroll = overhead inutil pe mobile
- GSAP ScrollTrigger cu horizontal scroll = CPU killer
- Parallax transforms pe Hero (useScroll + useTransform pe fiecare frame)
- MagneticButton cu mouse tracking pe fiecare pixel
- CustomCursor cu 3 motion.div-uri update la fiecare mousemove
- Aurora CSS animation cu width: 150% = overflow + repaint constant
- Mesh gradient animation = repaint pe background la fiecare frame
- Noise overlay fixed fullscreen = compositing layer inutil
- Google Fonts import = render-blocking + network latency

### Imagini (CE AU FĂCUT GREȘIT Haiku/Sonnet)
- **USA**: `usa-murdara.jpeg` = ușă de Sprinter turcoaz, `usa-curata.jpeg` = ușă de alt vehicul alb → NU E ACEEAȘI MAȘINĂ! Nu merge ca before/after
- BeforeAfter slider arată OK tehnic dar pozele nu sunt perechi reale
- Gallery încărca imagini Unsplash (stoc) = zero credibilitate
- Brand image (Audi) folosită ca background pe Hero la 5% opacitate = invizibilă, risipă
- MUNCA NOASTRA (owner la lucru în studio) = NEFOLOSIT ca hero sau about — cea mai bună poză!

### Conținut
- Servicii listate nu reflectă realitatea (aveau "Protecție Ceramică", "Corecție Vopsea" — clientul face DOAR interior detailing)
- Form-ul trimite un alert() fals — nu face nimic real
- Testimoniale inventate (Andrei M., Maria P.) = se vede că sunt false
- "500+ Proiecte" — de unde vine numărul?

---

## Planul de Rebuild

### A. DESIGN SYSTEM

**Culori (rămânem pe negru-roșu)**
```
Background:     #0A0A0F (negru aproape pur, ușor albăstrui)
Surface:        #111118 (carduri)
Surface Hover:  #1A1A24
Border:         rgba(255, 255, 255, 0.06)
Primary (CTA):  #DC2626 (roșu acțiune, nu #FF0000 care e agresiv)
Primary Hover:  #EF4444
Text Primary:   #F8FAFC
Text Secondary: rgba(255, 255, 255, 0.50)
Text Muted:     rgba(255, 255, 255, 0.25)
```

**Tipografie: Outfit (heading) + DM Sans (body)**
- Outfit = bold, modern, premium — perfect pentru titluri uppercase
- DM Sans = clean, citibil — perfect pentru paragrafe
- Self-host WOFF2 (ca VixonLab) — FĂRĂ Google Fonts CDN
- Font weights: 400, 500, 600, 700 doar

**Animații — REGULI STRICTE:**
- DOAR `opacity` și `transform` (GPU accelerated)
- Durate: 300-500ms max, ease-out
- `viewport={{ once: true }}` pe TOATE animațiile (nu replay la scroll)
- ZERO infinite animations pe mobile
- ZERO blur() pe mobile (backdrop-blur e CPU killer)
- ZERO parallax pe mobile
- `prefers-reduced-motion` respectat

---

### B. STRUCTURA PAGINII (secțiuni în ordine)

#### 1. NAVBAR (simplu, fix)
- Logo: "SIZ" roșu + "." roșu = simplu
- Link-uri: Servicii | Galerie | Contact
- CTA: "Cere Ofertă" button
- Mobile: hamburger cu overlay simplu (fără animații complexe)
- Pe scroll: bg blur ușor (doar desktop)

#### 2. HERO
- **Background**: `IMAGINEA NOASTRA.jpeg` (Audi în studio) la ~15-20% opacitate, desaturat
- **Overlay gradient**: de la #0A0A0F la transparent (ca să fie lizibil textul)
- **Text**: "SIZ" mare + "DETAILING" sub = ca pe peretele lor din studio
- **Subtitlu**: "Detailing Interior Profesional — Rm. Vâlcea"
- **CTA primar**: "Trimite Poze pentru Ofertă" → link WhatsApp
- **CTA secundar**: "Vezi Rezultatele" → scroll la before/after
- **FĂRĂ**: parallax, 3D, particles, watermark scrolling, MagneticButton
- **Stats**: scoate-le sau pune numere reale

#### 3. BEFORE / AFTER (secțiunea de impact)
- **Slider funcțional** (cel existent e OK tehnic)
- **Perechi corecte de imagini**:
  - Pair 1 (HERO): `BORD MURDAR` → `BORD CURAT` (TIR dashboard — diferența e dramatică)
  - Pair 2: `POZA INTERIOR MURDAR` → `POZA INTERIOR CURAT` (Sprinter interior)
  - Pair 3: `POZA MOTOR MURDAR` → `POZA MOTOR CURAT` (motor engine bay)
- **NU INCLUDE**: USA murdară/curată (sunt vehicule diferite — NU merge ca pair!)
- **Label**: "Before" / "After" cu text descriptiv sub fiecare ("Bord TIR", "Interior Sprinter", "Compartiment Motor")
- **CTA sub galerie**: "Ai văzut diferența? Trimite-ne poze cu mașina ta" → WhatsApp

#### 4. SERVICII (ce oferă real)
- Grid 2x2 sau 2x3, carduri simple
- Servicii REALE (din TEXT.txt):
  1. Curățare mochetă (injecție-extracție)
  2. Curățare scaune & banchetă textil (injecție-extracție)
  3. Degresare plastice interior
  4. Curățare chedere
  5. Curățare portbagaj
  6. Detailing motor
- Fiecare card: icon Lucide + titlu + 1 rând descriere
- **NU INCLUDE**: prețuri (clientul nu vrea prețuri fixe)
- **CTA mare sub grid**:
  ```
  "Prețul depinde de mașina ta"
  "Trimite-ne câteva poze cu interiorul și primești oferta pe loc."
  [Button: Trimite pe WhatsApp]
  ```

#### 5. ABOUT / STUDIO
- Layout: imagine stânga + text dreapta
- **Imagine**: `MUNCA NOASTRA.jpeg` (owner-ul la lucru pe scaun, cu branding SIZ pe perete) — cea mai bună poză, arată PROFESIONALISMUL
- **Text**: scurt, personal, autentic
  - Cine sunt (nu "noi", ci omul din poză)
  - Ce fac (detailing interior, nu tot)
  - Unde sunt (Rm. Vâlcea)
- **Imagine secundară**: `SCAUN IMPECABIL.jpeg` (scaun BMW piele) ca rezultat
- **FĂRĂ**: contoare animate false, "500+ proiecte"

#### 6. GALERIE (simple grid)
- Grid 2x3 sau 3x3 cu pozele reale:
  - `brand.jpeg` (Audi în studio)
  - `munca1.jpeg` (owner la lucru)
  - `munca2.jpeg` (alt unghi)
  - `scaun.jpeg` (scaun BMW curat)
  - `bord-curat.jpeg` (TIR bord curat)
  - `interior-curat.jpeg` (interior Sprinter curat)
  - `motor-curat.jpeg` (motor curat)
- Click = lightbox fullscreen (simplu, fără animații heavy)
- **FĂRĂ testimoniale false** — scoate-le complet

#### 7. CONTACT (simplificat)
- **Nu mai folosi form** care nu trimite nimic
- Layout simplu:
  - **WhatsApp CTA mare** (butonul principal): "Scrie-ne pe WhatsApp"
    - Pre-filled message: "Bună! Aș vrea o ofertă pentru detailing interior."
  - **Telefon**: 0761 639 988 (click to call)
  - **Locație**: Rm. Vâlcea (text simplu sau embed Google Maps dacă au adresă exactă)
- Mesaj: "Trimite-ne poze cu interiorul mașinii și îți facem oferta pe loc. Răspundem rapid!"

#### 8. FOOTER (minimal)
- Logo SIZ + social links (dacă au)
- "Crafted by VixonLab"
- Copyright
- FĂRĂ coloane multiple — e one-page simplu

---

### C. PERFORMANCE CHECKLIST

**Trebuie SCOS din proiect (dependencies):**
- [ ] `three` + `@react-three/fiber` + `@react-three/drei` — scoate complet
- [ ] `@studio-freight/lenis` + `lenis` — scoate complet
- [ ] `gsap` + `@gsap/react` — scoase complet (Framer Motion e suficient)
- [ ] `react-parallax-tilt` — scoase complet

**Trebuie SCOS din cod:**
- [ ] `Hero3D.tsx` — șterge fișierul
- [ ] `CustomCursor.tsx` — șterge fișierul
- [ ] `MagneticButton.tsx` — șterge fișierul (înlocuiește cu `<a>` simplu styled)
- [ ] `useLenis.ts` — șterge fișierul
- [ ] CSS: aurora, mesh-gradient animation, noise overlay, shimmer, glow-pulse
- [ ] CSS: `::-webkit-scrollbar` styling (lasă default pe mobile)

**Trebuie ADĂUGAT:**
- [ ] Self-host fonturi WOFF2 (Outfit + DM Sans) în `/public/fonts/`
- [ ] `font-display: swap` pe @font-face
- [ ] `loading="lazy"` pe TOATE imaginile sub fold
- [ ] Imagini optimizate (WebP dacă se poate, sau JPEG comprimat)
- [ ] `<meta name="theme-color" content="#0A0A0F">`

**Vite Config:**
- [ ] Code splitting funcțional (manualChunks ca funcție)
- [ ] CSS code split + minify
- [ ] `modulePreload: { polyfill: false }`
- [ ] Drop console în producție

---

### D. MAPARE IMAGINI (care poză unde merge)

| Fișier | Utilizare | Secțiune |
|--------|-----------|----------|
| `IMAGINEA NOASTRA.jpeg` | Hero background (15-20% opacity, desaturat) | Hero |
| `BORD MURDAR.jpeg` | Before slider #1 | Before/After |
| `BORD CURAT.jpeg` | After slider #1 | Before/After |
| `POZA INTERIOR MURDAR.jpeg` | Before slider #2 | Before/After |
| `POZA INTERIOR CURAT.jpeg` | After slider #2 | Before/After |
| `POZA MOTOR MURDAR.jpeg` | Before slider #3 | Before/After |
| `POZA MOTOR CURAT.jpeg` | After slider #3 | Before/After |
| `MUNCA NOASTRA.jpeg` | Imaginea principală About | About |
| `MUNCA NOASTRA 2.jpeg` | Galerie | Gallery |
| `SCAUN IMPECABIL.jpeg` | Rezultat About + Galerie | About + Gallery |
| `WhatsApp Image...` | NU FOLOSI (ușă murdară duplicat) | - |
| `POZA USA MURDARA.jpeg` | NU FOLOSI (vehicul diferit de cea curată) | - |
| `POZA USA CURATA.jpeg` | NU FOLOSI (vehicul diferit de cea murdară) | - |

---

### E. ORDINEA EXECUȚIEI

**Pas 1: Curățenie** (scoate tot ce e heavy)
- Șterge Hero3D, CustomCursor, MagneticButton, useLenis
- Scoate gsap, three, lenis din imports și package.json
- Curăță CSS de animații

**Pas 2: Design System**
- Self-host fonturi
- Actualizează tailwind.config cu culorile noi
- Rescrie index.css minimal

**Pas 3: Rescrie secțiunile** (una câte una)
- Hero → simplu, brand image background, CTA WhatsApp
- BeforeAfter → perechi corecte, labels corecte
- Services → servicii reale, CTA ofertă personalizată
- About → MUNCA NOASTRA.jpeg + text autentic
- Gallery → grid simplu cu poze reale
- Contact → WhatsApp + telefon, fără form fals
- Footer → minimal

**Pas 4: Test & Deploy**
- Test local pe mobile (Chrome DevTools)
- Lighthouse score > 90 pe mobile
- Deploy pe Vercel
- Test pe telefon real

---

### F. CE NU TREBUIE SĂ FACĂ HAIKU/SONNET

1. **NU adăuga Three.js, GSAP, Lenis, sau orice lib de animații** — Framer Motion `whileInView` e tot ce trebuie
2. **NU folosi `useScroll` + `useTransform`** pentru parallax — e scump pe mobil
3. **NU adăuga `backdrop-blur` pe mobile** — e CPU killer
4. **NU pune USA murdară/curată ca pereche** — sunt vehicule diferite
5. **NU inventa testimoniale** — mai bine fără decât false
6. **NU pune numere inventate** (500+ proiecte etc) — dacă nu sunt reale, nu le pune
7. **NU adăuga infinite animations** — totul e `once: true`
8. **NU folosi Google Fonts CDN** — self-host sau system fonts
9. **NU adăuga `position: fixed` pe elemente decorative** — overflow + repaint
10. **NU pune form care nu trimite nimic** — WhatsApp link e mai bun
