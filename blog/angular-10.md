---
title: 'มีอะไรใหม่ใน Angular 10'
description: 'Angular 10 ออกมาหลังจากเพิ่งออก Angular 9 แค่เพียง 4 เดือนเท่านั้น ทำให้อาจจะไม่ค่อยมีฟีเจอร์ใหม่เท่าไหร่ ส่วนจะมีอะไรบ้างลองไปดูกันเลยครับ (อัพเดทถึง Angular 10.1)'
date: '2020-09-12T11:35:52.269Z'
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

Angular 10 ออกมาหลังจากเพิ่งออก Angular 9 แค่เพียง 4 เดือนเท่านั้น ทำให้อาจจะไม่ค่อยมีฟีเจอร์ใหม่เท่าไหร่ ส่วนจะมีอะไรบ้างลองไปดูกันเลยครับ (อัพเดทถึง Angular 10.1)

---

### สารบัญ

- [Optional Strict Flag]()
- [ปรับ Default Browser Support]()
- [CommonJS Warning]()
- [Date Range Picker]()
- [Service Worker Config ใหม่]()
- [CanLoad Signature ของ Router]()
- [Update TypeScript Ecosystem]()
- [Lightweight Injection Token]()
- [อัพเดทอื่นๆ]()
- [สิ่งที่ถูก Deprecate]()

---

### Optional Strict Flag

Angular 10 ได้เพิ่ม strict option ในการสร้าง Angular App โดยใช้คำสั่งนี้

```bash
$ ng new --strict
```

โดยการเปิด strict option จะทำให้

- เปิด Strict mode ของ TypeScript
- เปิด Strict Template Type Checking
- ลด Default bundle budget ถึง 75%
- Config Linting rule ให้ห้ามการใช้ type any
- Config App ให้เป็น Side effect free เพื่อทำให้สามารถใช้ Advance Type Checking ได้

อ่านรายละเอียดเรื่อง Strict flag ได้ที่บทความนี้เลยครับ

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

และมีผลทำให้ ES5 build ไม่ถูกเปิดโดย Default และยังทำให้ไม่มี Differential loading อีกต่อไป แบบนี้ก็จะทำให้เวลา Build เร็วขึ้น (เพราะ Build แค่รอบเดียว)

แต่สำหรับใครที่ยังต้องการซัพพอร์ต Browser เก่าๆอยู่ ก็สามารถใช้ --legacy-browsers flag ตอนสร้าง App ใหม่ แบบนี้

```
ng new new-app --legacy-browsers
```

และ Browser รุ่นเก่า อย่าง Internet Explorer (IE9, IE10 และ IE Mobile) ก็จะถูก Deprecate ใน Angular 11 ครับ

---

### CommonJS Warning

ใน Angular 10 ถ้าเราใช้ที่เป็น CommonJS (จะส่งผลต่อ Performance ถ้า App มีขนาดใหญ่) จะขึ้น Warning ตอน Build แบบในรูปด้านล่างครับ

<figure>
  <img src="assets/angular-10/asset-4.png" alt="CommonJS Warning"/>
  <figcaption>
    CommonJS Warning
  </figcaption>
</figure>

---

### Date Range Picker

ใน Angular 10 มี Date Range Picker ให้ใช้แล้ว โดยจะประกอบด้วย 2 Component คือ `mat-date-range-input` และ `mat-date-range-picker` ซึ่งสามารถใช้งานได้แบบนี้

```html
<mat-date-range-input [rangePicker]="picker">
  <input matStartDate placeholder="Start date" />
  <input matEndDate placeholder="End date" />
</mat-date-range-input>

<mat-date-range-picker #picker></mat-date-range-picker>
```

---

### Service Worker Config ใหม่

- สามารถเซต timeout ของ `registerWhenStable` ได้แล้ว ซึ่งจะส่งผลให้จะ register service worker หลังจากเวลาที่ timeout ทันทีถ้า app ไม่ stable แต่ถ้าไม่กำหนดเวลา timeout service worker จะถูก register ถ้า app ไม่ stable หลังจากผ่านไป 30 วินาที (ค่า default)
- สามารถกำหนด `cacheQueryOptions` ของ assetGroups และ dataGroups ได้แล้วโดยตอนนี้มีแค่ option เดียวที่กำหนดได้คือ `ignoreSearch` ซึ่งใช้กำหนดให้ ignore query parameter (ค่า default เป็น false)

---

### CanLoad Signature ของ Router

`canLoad` ของ Router ตอนนี้สามารถ return เป็น `UrlTree` ได้แล้ว

---

### Update TypeScript Ecosystem

ใน Angular 10 ได้อัพเดทซัพพอร์ต TypeScript เวอร์ชั่น 3.9 (และซัพพอร์ต TypeScript 4.0 ใน Angular 10.1)

นอกจากนั้นแล้วยังอัพเดท TSLib เป็นเวอร์ชั่น 2 และ TSLint เป็นเวอร์ชั่น 6

ใน Angular 10 ได้นำเอา Solution Style TypeScript Configuration มาใช้ (เพิ่มไฟล์ `tsconfig.base.json` มา) เพื่อให้ซัพพอร์ต IDE ได้ดีขึ้น แต่หลังจากนั้นกลับพบว่ามีปัญหาเยอะกว่าที่คิด (ดูปัญหาได้จากลิ้งค์นี้ https://docs.google.com/document/d/1eB6cGCG_2ircfS5GzpDC9dBgikeYYcMxghVH5sDESHw/edit) จึงได้มีการเอาออกใน Angular 10.1 ครับ

---

### References
