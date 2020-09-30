---
title: 'มีอะไรใหม่ใน Angular 10'
description: 'Angular 10 ออกมาหลังจาก Angular 9 เพิ่งออกมาได้แค่เพียง 4 เดือนเท่านั้น จะมีฟีเจอร์ใหม่อะไรบ้างลองไปดูกันเลยครับ (อัพเดทถึง Angular 10.1)'
date: '2020-09-30T16:54:48.583Z'
categories: ['Angular', 'Beginner']
published: true
image: 'assets/angular-10/asset-1.jpg'
---

<figure>
  <img src="assets/angular-10/asset-1.jpg" alt="Ivy"/>
  <figcaption>
  Photo by <a href="https://unsplash.com/@flamenkovsky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mike Flamenco</a> on <a href="https://unsplash.com/s/photos/10?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
  </figcaption>
</figure>

Angular 10 ออกมาหลังจาก Angular 9 เพิ่งออกมาได้แค่เพียง 4 เดือนเท่านั้น จะมีฟีเจอร์ใหม่อะไรบ้างลองไปดูกันเลยครับ (อัพเดทถึง Angular 10.1)

---

### สารบัญ

- [Optional Strict Flag](blog/angular-10/#optional-strict-flag)
- [ปรับ Default Browser Support](blog/angular-10/#ปรับ-default-browser-support)
- [CommonJS Warning](blog/angular-10/#commonjs-warning)
- [Date Range Picker](blog/angular-10/#date-range-picker)
- [อัพเดท TypeScript Ecosystem](blog/angular-10/#อัพเดท-typescript-ecosystem)
- [Lightweight Injection Token](blog/angular-10/#lightweight-injection-token)
- [อัพเดทอื่นๆ](blog/angular-10/#อัพเดทอื่นๆ)
- [สรุป](blog/angular-10/#สรุป)

---

### Optional Strict Flag

Angular 10 ได้เพิ่ม option ในการสร้าง Angular App แบบ Strict โดยใช้คำสั่งนี้

```bash
$ ng new --strict
```

โดยการใช้ Strict option จะทำให้

- เปิด Strict mode ของ TypeScript
- เปิด Strict Template Type Checking
- ลด Default bundle budget ถึง 75%
- Config Linting rule ให้ห้ามใช้ type any
- Config App ให้เป็น Side effect free เพื่อทำให้สามารถใช้ Advance Type Checking ได้

อ่านรายละเอียดเรื่อง Strict option ได้ที่บทความนี้เลยครับ

[**Angular CLI Strict Mode**
_In Angular, we strongly believe in consistency and best practices. For example, we adopted TypeScript in its early days because we wanted all developers using the framework to take advantage of compile-time type checking._](https://blog.angular.io/angular-cli-strict-mode-c94ba5965f63 'https://blog.angular.io/angular-cli-strict-mode-c94ba5965f63')

---

### ปรับ Default Browser Support

ทางทีม Angular ได้ปรับ Default Browser Configuration เพื่อซัพพอร์ตแค่ Modern Browser โดยจะเปลี่ยนจากใน Angular 9 ที่เป็นแบบนี้

<figure>
  <img src="assets/angular-10/asset-2.png" alt="Angular 9 Browser Config"/>
  <figcaption>
    Angular 9 Browser Config
  </figcaption>
</figure>

เหลือแค่นี้ใน Angular 10

<figure>
  <img src="assets/angular-10/asset-3.png" alt="Angular 10 Browser Config"/>
  <figcaption>
    Angular 10 Browser Config
  </figcaption>
</figure>

และมีผลทำให้ ES5 build ไม่ถูกเปิดโดย Default ส่งผลให้ไม่มี Differential loading อีกต่อไป แบบนี้ก็จะทำให้เวลาในการ Build ลดลง (เพราะ Build แค่รอบเดียว)

แต่สำหรับใครที่ยังต้องการซัพพอร์ต Browser เก่าๆอยู่ ก็สามารถใช้ option `--legacy-browsers` ตอนสร้าง App ใหม่ แบบนี้

```bash
ng new new-app --legacy-browsers
```

Browser รุ่นเดอะอย่าง Internet Explorer (IE9, IE10 และ IE Mobile) นั้นถูก Deprecate แล้วและจะเลิกซัพพอร์ตตั้งแต่ Angular 11 เป็นต้นไปครับ

---

### CommonJS Warning

CommonJS ถูกคิดค้นมาตั้งแต่ปี 2009 เพื่อให้ใช้ระบบ module นอก web browser เช่นใน server-side อย่าง NodeJS ทำให้ไม่ได้ถูกออกแบบมาโดยคำนึงถึงขนาดของ Bundle จึงอาจส่งผลให้ Library ที่ใช้ CommonJS มีขนาด Bundle ที่ใหญ่ได้

ดังนั้นใน Angular 10 ถ้าใน App มีการใช้ Library ที่เป็น CommonJS จะขึ้น Warning ตอน Build แบบในรูปด้านล่างครับ

<figure>
  <img src="assets/angular-10/asset-4.png" alt="CommonJS Warning"/>
  <figcaption>
    CommonJS Warning
  </figcaption>
</figure>

---

### Date Range Picker

หลังจากที่มีเพียงแค่ Date Picker ธรรมดาๆให้ใช้ ตั้งแต่ Angular 10 จะมี Date Range Picker ให้ใช้แล้ว โดยจะประกอบด้วย 2 Component คือ `mat-date-range-input` และ `mat-date-range-picker` ซึ่งสามารถใช้งานได้แบบนี้

```html
<mat-date-range-input [rangePicker]="picker">
  <input matStartDate placeholder="Start date" />
  <input matEndDate placeholder="End date" />
</mat-date-range-input>

<mat-date-range-picker #picker></mat-date-range-picker>
```

อ่านรายละเอียดเพิ่มเติมเกี่ยวกับ Date Range Picker ได้ที่ลิ้งค์ด้านล่างได้เลยครับ

[**Date range selection**
_If you want your users to select a range of dates, instead of a single date, you can use the mat-date-range-input and mat-date-range-picker components._](https://material.angular.io/components/datepicker/overview#date-range-selection 'https://material.angular.io/components/datepicker/overview#date-range-selection')

---

### อัพเดท TypeScript Ecosystem

ใน Angular 10 ได้อัพเดทซัพพอร์ต TypeScript ถึงเวอร์ชั่น 3.9 และซัพพอร์ตถึง TypeScript 4.0 ใน Angular 10.1 ครับ

นอกจากนั้นแล้วยังอัพเดท TSLib เป็นเวอร์ชั่น 2 และ TSLint เป็นเวอร์ชั่น 6 อีกด้วย

หนึ่งในฟีเจอร์ของ TypeScript 3.9 คือ Solution Style TypeScript Configuration เพื่อช่วยให้ IDE ใช้งานกับ TypeScript ได้ดีขึ้น ซึ่ง Angular 10 ก็ได้นำมาใช้งานด้วยเช่นเดียวกัน แต่หลังจากนั้นกลับพบว่ามี[**ปัญหา**](https://docs.google.com/document/d/1eB6cGCG_2ircfS5GzpDC9dBgikeYYcMxghVH5sDESHw/edit)เยอะกว่าที่คิด จึงได้มีการเอาออกใน Angular 10.1 ครับ

---

### Lightweight Injection Token

Lightweight Injection Token เป็นฟีเจอร์ใหม่ แต่อาจจะได้ใช้เฉพาะคนที่ทำ Library เท่านั้นครับ

Lightweight Injection Token จะทำให้สามารถทำ Tree Shaking Injection Token ที่ไม่ได้ใช้ออกไปได้ ส่งผลให้ขนาด Bundle โดยรวมมีขนาดเล็กลง อ่านรายละเอียดเพิ่มเติมเกี่ยวกับ Lightweight Injection Token ที่ลิ้งค์ด้านล่างได้เลย

[**Optimizing client app size with lightweight injection tokens**
_This page provides a conceptual overview of a dependency injection technique that is recommended for library developers._](https://angular.io/guide/lightweight-injection-tokens 'https://angular.io/guide/lightweight-injection-tokens')

---

### อัพเดทอื่นๆ

#### Service Worker

- สามารถเซต timeout ของ `registerWhenStable` ได้แล้ว ซึ่งจะส่งผลให้ Service Worker ถูก register หลังจากเวลาที่ timeout ทันทีถ้า App ไม่ stable แต่ถ้าไม่มีการกำหนดเวลา timeout ไว้ Service Worker จะถูก register ถ้า App ไม่ stable หลังจากผ่านไป 30 วินาที (ค่า default)
- สามารถกำหนด `cacheQueryOptions` ของ assetGroups และ dataGroups ได้แล้วโดยตอนนี้มีแค่ option เดียวที่ตั้งค่าได้คือ `ignoreSearch` ซึ่งใช้กำหนดให้ ignore query parameter (ค่า default เป็น false)

#### Router

- `canLoad` ของ Router ตอนนี้สามารถ return เป็น `UrlTree` ได้แล้ว

#### Compiler

- เพิ่ม option `strictInputAccessModifiers` เพื่อทำให้แจ้ง error ถ้า Input binding พยายามทำการ assign ค่าให้ Restricted field(readonly, private, protected)

#### Forms

- Forms error message ถูกเอาออกจาก production build แล้วซึ่งจะช่วยให้ขนาดของ bundle เล็กลงครับ

#### Testing

- เปลี่ยนชื่อ `async()` Testing helper function เป็น `waitForAsync()` เพื่อป้องกันความสับสนกับ async ของ JavaScript

#### i18n

- เพิ่ม option `--ivy` สำหรับการใช้ Ivy Compiler เพื่อ Extract Translation แบบนี้

```bash
$ ng xi18n --ivy
```

---

### สรุป

Angular 10 อาจจะไม่ค่อยมีฟีเจอร์ใหม่ๆมากนัก แต่ฟีเจอร์ที่เพิ่มมาก็เพื่อปรับปรุง performance ของ Angular App เช่น โหมด Strict ที่ลด Bundle budget ลง และยัง config เป็น Side effect free เพื่อให้ทำ Tree shaking ได้, มีแจ้งเตือนเมื่อใช้ Library ที่เป็น CommonJS เพื่อจะได้ Bundle ที่มีขนาดเล็ก, Lightweight Injection Token ที่ช่วยให้ทำ Tree Shaking Injection Token ที่ไม่ได้ใช้ของ Angular Library ได้

นอกจากด้าน Performance แล้วยังมีการปรับปรุงเพื่อให้ Developer Experience ดีขึ้นเช่น โหมด Strict ที่ช่วยให้ตรวจเจอบัคเร็วขึ้น, ซัพพอร์ต TypeScript 4.0 ทำให้สามารถใช้ฟีเจอร์ล่าสุดของ TypeScript ได้, Component ใหม่อย่าง Date Range Picker และยังรวมถึงแก้บัคเล็กๆน้อยๆเพื่อทำให้ชาว Angular Developer อย่างเราๆใช้งานได้อย่างสบายใจขึ้นด้วยครับ :)

---

### References

[**Version 10 of Angular Now Available**
_Version 10.0.0 is here! This is a major release that spans the entire platform, including the framework, Angular Material, and the CLI._](https://blog.angular.io/version-10-of-angular-now-available-78960babd41 'https://blog.angular.io/version-10-of-angular-now-available-78960babd41')

[**What's new in Angular 10.0?**
_Angular 10.0.0 is here! 10 major versions is quite a milestone (well, it’s 8 in fact, as there are no Angular version 1 and 3, but you get the point)_](https://blog.ninja-squad.com/2020/06/25/what-is-new-angular-10.0/ 'https://blog.ninja-squad.com/2020/06/25/what-is-new-angular-10.0/')

[**What's new in Angular 10.1?**
_Angular 10.1.0 is here!_](https://blog.ninja-squad.com/2020/09/03/what-is-new-angular-10.1/ 'https://blog.ninja-squad.com/2020/09/03/what-is-new-angular-10.1/')

[**Angular 10 - Towards the Better future for Angular**
_Angular 10 is released, many developers sent me messages asking we cannot see any features, yes there was no big feature, but sometimes you need to take some time to prepare for a better future, and this is what Angular 10 release was all about._](https://indepth.dev/angular-10-towards-the-better-future-for-angular/ 'https://indepth.dev/angular-10-towards-the-better-future-for-angular/')
