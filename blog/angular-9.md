---
title: 'มีอะไรใหม่ใน Angular 9'
description: 'Angular 9 มาพร้อม Rendering Engine ตัวใหม่ที่ชื่อว่า Ivy...'
date: '2020-03-09T16:09:06.761Z'
categories:
  - Angular
  - Beginner
published: true
image: 'assets/angular-9/asset-1.jpg'
---

![](assets/angular-9/asset-1.jpg)

Angular 9 มาพร้อม Rendering Engine ตัวใหม่ที่ชื่อว่า Ivy และมาพร้อมกับฟีเจอร์ที่น่าสนใจอีกมากมาย เรามาดูกันดีกว่าว่าใน Angular 9 มีอะไรที่น่าสนใจกันบ้างครับ

---

### สารบัญ

- [Ivy นั้นสำคัญไฉน](blog/angular-9/#ivy-นั้นสำคัญไฉน)
- [Dependency Injection Scope ใหม่](blog/angular-pwa#pwa-คืออะไร)
- [CSS ที่ถูกปรับปรุง](blog/angular-pwa#ทำไมถึงต้องทำ-pwa)
- [TestBed.inject API ใหม่ ไฉไลกว่าเดิม](blog/angular-pwa#พบกับพระเอกตัวจริง-service-worker)
- [ฟีเจอร์ใหม่ของ Angular CLI](blog/angular-pwa#set-up-project-ด้วย-angular-cli)
- [Strict Template Type Checking](blog/angular-pwa#ตั้งค่า-service-worker-ด้วย-ngsw-configjson)
- [Component ใหม่](blog/angular-pwa#ตั้งค่า-app-ด้วย-manifestjson)
- [New in Localization](blog/angular-pwa#ทดสอบการใช้งาน-pwa)
- [Component Harnesses](blog/angular-pwa#ทดสอบการใช้งาน-pwa)
- [New in Angular Universal](blog/angular-pwa#ทดสอบการใช้งาน-pwa)
- [Support TypeScript 3.7](blog/angular-9#suport-typescript-37)

---

### Ivy นั้นสำคัญไฉน

<figure>
  <img src="assets/angular-9/asset-2.png" alt="Rendering Engine History"/>
  <figcaption>
    <a href="https://t.co/Z1M3TIWzL4?amp=1">Credit: Ivy A deep dive into the heart of Angular by Martina Kraus</a>
  </figcaption>
</figure>

Angular นั้นมี Rendering Engine มาแล้วสองรุ่นนั่นคือ Template Engine และ View Engine
ส่วน Ivy นั้นเป็น View Engine รุ่นล่าสุดซึ่งได้เปิดให้ลองใช้ตั้งแต่ Angular 8 แล้ว และมาถึง Angular 9
Ivy ก็ได้เป็น Default Rendering Engine อย่างเต็มตัว สำหรับใครที่ยังไม่รู้จัก Ivy ลองอ่านเพิ่มจากบทความด้านล่างได้เลยครับ

[**รู้จัก Ivy อนาคตใหม่ของชาว Angular**
\_ก่อนจะเข้าสู่บทความ ขอเล่าถึงงานที่เพิ่งจบไปอย่าง Google I/O 2018 โดยในงานส่วนใหญ่จะเน้นไปที่ Android, Flutter, AI และ Machine Learning…\_DevNote](https://devnote.me/blog/introduce-ivy 'https://devnote.me/blog/introduce-ivy')[](https://devnote.me/blog/introduce-ivy)

ซึ่งการมาของ Ivy ทำให้มีผลดีต่อ Angular App ดังนี้

- ขนาดเล็กลง
- คอมไพล์ได้เร็วขึ้น
- เทสได้เร็วขึ้น
- Debug ง่ายขึ้น
- Error Message เข้าใจง่าย

#### ขนาดเล็กลง

<figure>
  <img src="assets/angular-9/asset-3.png" alt="Ivy Bundle Size Improvement"/>
  <figcaption>
    ขนาดของ Bundle Size ที่ลดลงใน Angular 9 (Ivy)
  </figcaption>
</figure>

ดูจากรูปด้านบนที่ใช้ Angular 9(Ivy) เมื่อเทียบกับ Angular 8 จะเห็นได้ว่า App ที่มีขนาดเล็กและ App ที่มีขนาดใหญ่จะมี Bundle Size เล็กลง 25-40% เลยทีเดียว ส่วน App ขนาดกลาง Bundle Size จะลดลงเพียงเล็กน้อยเท่านั้น

#### คอมไพล์ได้เร็วขึ้น

<figure>
  <img src="assets/angular-9/asset-4.png" alt="Production build time comparison"/>
  <figcaption>
    <a href="https://indepth.dev/angular-with-ivy-build-performance-review/">Credit: Angular with Ivy - Build performance review by Piotr Lewandowski</a>
  </figcaption>
</figure>

มีคนได้ลองทำการทดสอบการคอมไพล์ระหว่างการใช้ Ivy และไม่ใช้ Ivy พบว่า Production build เร็วขึ้น 20-30%

ส่วน Development build เร็วขึ้น 20-30% ครับ

สำหรับใครอยากดูผลการทดสอบ Ivy Build Performance แบบละเอียดๆ ดูได้จากลิ้งค์ด้านล่างนี้ได้เลย

[**Angular with Ivy - Build performance review**
_We're going to dive into bundle-size and compilation speed insights. Was Ivy project worth waiting for?_](https://indepth.dev/angular-with-ivy-build-performance-review/ 'https://indepth.dev/angular-with-ivy-build-performance-review/')[](https://indepth.dev/angular-with-ivy-build-performance-review/)

#### รันเทสได้เร็วขึ้น

ก่อน Angular 9 เวลารันเทส TestBed จะทำการรีคอมไพล์ Component ใหม่ทุกๆครั้ง ระหว่างรันเทสโดยไม่สนว่าจะมีการเปลี่ยนแปลงที่ Component (เช่นถูก override) หรือไม่ แต่ใน Ivy TestBed จะทำการรีคอมไพล์เฉพาะเมื่อ Component มีการเปลี่ยนแปลงครับ ส่งผลให้สามารถรันเทสได้เร็วขึ้น 40-50% เลยทีเดียว

#### Debug ง่ายขึ้น

ใน Angular 9 ถ้าเราอยู่ใน Dev Mode และเปิด Devtool Console ขึ้นมา เราสามารถเรียกใช้ ng object เพื่อทำอะไรบางอย่างกับ Angular Component ใน Devtool Console ได้ครับ

ยกตัวอย่างเช่น เราสามารถเรียกใช้ Reference ของ Component ที่เลือกอยู่ใน Devtool Console โดยใช้คำสั่ง ng.getComponent($0) โดยที่ $0 คือ Component ที่เลือกอยู่
พอเราได้ reference ของ Component มาแล้วก็สามารถเปลี่ยนค่า input ของ component นั้นได้ครับ

พอเราเปลี่ยนค่าจนพอใจแล้วถ้าอยากให้ค่าที่เปลี่ยนมีผลกับ Component นั้นให้ใช้คำสั่ง ng.applyChanges

นอกจากนี้ยังมีคำสั่งอื่นให้เรียกใช้มากมาย ดูตัวอย่างจากในรูปได้เลยครับ

<figure>
  <img src="assets/angular-9/asset-5.png" alt="ng object in devtool"/>
  <figcaption>
    ตัวอย่างการใช้ ng object ใน Devtool
  </figcaption>
</figure>

#### Error Message เข้าใจง่าย

<figure>
  <img src="assets/angular-9/asset-6.jpg" alt="Angular 8 and Angular 9 Error Message Comparison"/>
  <figcaption>
    เปรียบเทียบ Error Message ระหว่าง Angular 9 กับ Angular 8
  </figcaption>
</figure>

จากรูปด้านบนจะเห็นได้ว่า Error Message ใน Angular 9 ดูเข้าใจง่ายมากกว่าใน Angular 8 เยอะเลยครับ

---

ต่อไปเรามาไล่ดูฟีเจอร์ใหม่ที่มากับ Angular 9 ไปทีละอย่างกันเลยครับ

### Dependency Injection Scope ใหม่

เริ่มด้วยฟีเจอร์ใหม่อันแรกเลยใน Angular 9 จะมีทางเลือกให้ใส่ providedIn เวลาสร้าง service ที่นอกจาก root ละครับ โดยจะมีที่เพิ่มมาคือ any และ platform ไปดูต่อในรูปได้เลยครับว่าแต่ละอันมีความแตกต่างยังไงบ้าง

<figure>
  <img src="assets/angular-9/asset-7.png" alt="New Dependency Injection Scope"/>
  <figcaption>
    Dependency Injection Scope ใหม่
  </figcaption>
</figure>

### CSS ที่ถูกปรับปรุง

Angular 9 มีการปรับปรุงเรื่อง CSS class และ style binding ครับ โดยก่อน Angular 9 ถ้ามีการ binding class หรือ style ตัวเดียวกัน ตัวที่โดน binding หลังสุดจะชนะ และจะ override ตัวที่โดน apply ก่อนหน้าครับ ซึ่งกระบวนการแบบนี้ไม่ค่อย predictable เท่าไหร่ ใน Angular 9 เลยมีการปรับให้มีเรื่อง Styling Precedence ขึ้นมาโดยจะเรียงลำดับความสำคัญจากสูงไปต่ำดังนี้ครับ

Template binding > Directive host binding > Component host binding

class หรือ style binding ที่มีความ specific หรือเฉพาะเจาะจงกว่าก็จะมีความสำคัญสูงกว่าครับ และ class/style ที่เป็น static จะมีความสำคัญต่ำสุดครับ

นอกจากนั้นแล้ว เรายังสามารถ delegate style เพื่อให้ไปใช้ตัวที่มีลำดับความสำคัญต่ำกว่าได้ โดยเซ็ตค่าให้เป็น undefined ครับ แต่ถ้าอยากให้เอา style นั้นออกไปเลย ให้เซ็ต style binding นั้นเป็น null แทนครับ

#### ซัพพอร์ต CSS Customer Property

Angular 9 นั้นซัพพอร์ต CSS Custom Property แล้วครับ

CSS Custom Property คืออะไร? CSS Custom Property หรือ CSS Variable ก็คือตัวแปรในไฟล์ CSS นั่นเอง โดนเราสามารถประกาศตัวแปรในไฟล์ CSS โดยใช้ CSS Custom Property ครับ (ใช้ตัวแปรได้โดยไม่ต้องใช้ preprocessor อย่างพวก LESS หรือ SASS) อ่านรายละเอียดได้ในลิ้งค์นี้เลย https://developer.mozilla.org/…/CSS/Using_CSS_custom_proper…

ตั้งแต่ Angular 9 เราสามารถทำการ binding ค่าให้กับ CSS Custom Property ได้แล้ว ดูตัวอย่างในรูปด้านล่างได้เลย

### TestBed.inject API ใหม่ ไฉไลกว่าเดิม

มาพูดถึงเรื่อง Test กันบ้าง
ใน Angular 9 TestBed.get ถูก deprecate แล้วเพราะ return type เป็น any ใน Angular 9 เลยมีตัวใหม่มาแทนคือ TestBed.inject ที่ทำหน้าที่เหมือน TestBed.get ทุกอย่างแต่เป็น version ที่ Type Safe ครับ

ดูตัวอย่างในรูปได้เลย

### ฟีเจอร์ใหม่ของ Angular CLI

### Strict Template Type Checking

ใน Angular 9 มีโหมด Template Type Check แบบใหม่ที่ชื่อว่า strict mode โดยเราสามารถเปิด strict mode ได้โดยใส่ flag "strictTemplates": true ในไฟล์ tsconfig.json (ดูตัวอย่างในรูป 1)

โดยใน strict mode Angular จะเช็ค type ใน template ได้ดีขึ้นไม่ว่าจะเป็นเช็ค type ของ Input ของ Component, Infer type ของ component/directive, Infer type ใน embedded view(*ngIf, *ngFor, ng-template) ได้ถูกต้อง, Infer type ของ event ได้ถูกต้อง (ดูตัวอย่างในรูป 2)

ดูรายละเอียดเพิ่มเติมเรื่อง template type checking ได้ที่ลิ้งค์นี้ครับ https://angular.io/guide/template-typecheck

### Component ใหม่

วันนี้มาเรื่องเบาๆกันบ้าง ว่าด้วยเรื่อง component ใหม่ จากทีม Angular เอง ที่มีมาให้ใช้กันใน Angular 9 ครับ

โดยมีมาให้ใช้กัน 2 ตัวคือ

1. Youtube Component
   install โดยใช้คำสั่ง npm install @angular/youtube-player

2. Google Map Component
   install โดยใช้คำสั่ง npm install @angular/google-maps
   โดยจะมีให้ใช้งานทั้งตัว Map เอง ตัว Marker และตัว Info Window ครับ

ดูตัวอย่างในรูปด้านล่างได้เลยครับ

### New in Localization

Angular 9 มาพร้อมกับการซัพพอร์ต i18n ซึ่งเป็นการยกเครื่องใหม่ และมาพร้อมกับ package ใหม่ที่มีชื่อว่า @angular/localize โดยสามารถ install ด้วยคำสั่ง ng add @angular/localize ซึ่งi18n ใน Angular 9 สามารถ Tree Shaking ออกไปได้ด้วยถ้าเราไม่ได้ใช้งาน

นอกจากนั้นแล้วยังสามารถทำ Dynamic Loading Translation และซัพพอร์ตการทำ translation ในไฟล์ Component ได้แล้วครับ ดูตัวอย่างในรูปได้เลย

### Component Harnesses

Angular 9 มาพร้อมกับ Concept Test แบบใหม่ที่เรียกว่า Component Harness (ตอนนี้ยังใช้ได้แค่กับ Angular Material เท่านั้นครับ) ซึ่งเอาแนวคิดมาจาก PageObject pattern ครับ

ซึ่งการ Test ด้วย Component Harness นี้จะเป็นการ Test ที่ไม่ยุ่งกับ Implementation Detail ทำให้ Test มีความ Robust กว่าและยังอ่านง่ายกว่า Test แบบปกติด้วยครับ ดูตัวอย่างในรูปด้านล่างได้เลย

### New in Angular Universal

### Support TypeScript 3.7
