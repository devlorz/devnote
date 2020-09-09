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

เริ่มด้วยฟีเจอร์ใหม่อันแรกเลยใน Angular 9 จะมีทางเลือกให้ใส่ providedIn เวลาสร้าง service ที่นอกจาก root ละครับ โดยจะมี scope ที่เพิ่มมาคือ any และ platform ลองไปดูตัวอย่างในโค้ดด้านล่างนี้ได้เลยครับ

```ts
import { Injectable } from '@angular/core';

// provide service ใน root
// injector (Application Level)
@Injectable({
  providedIn: 'root',
})
export class SomeService {}

// provide service ใน root injector
// (Module ที่ไม่ใช่ Lazy Load) และ
// provide ใน Module (Lazy Load
// Module) ทำให้ได้ instance ทุกๆ
// Lazy Load Module
@Injectable({
  providedIn: 'any',
})
export class AnotherService {}

// provide service ใน platform injector
// ซึ่งจะถูกแชร์กับทุก App ใน Platform เดียวกัน
// เช่น Angular Elements ที่อยู่ในหน้าเดียวกัน
@Injectable({
  providedIn: 'platform',
})
export class JustAnotherService {}
```

### ยกเครื่อง CSS ใหม่

#### Styling Precedence

ใน Angular 9 มีการปรับปรุงเรื่อง CSS Class และ Style binding

โดยก่อน Angular 9 ถ้ามีการ Binding Class หรือ Style ตัวเดียวกัน Style ตัวที่โดน binding หลังสุดจะ override Style ตัวที่โดน apply ก่อนหน้าครับ

ซึ่งกระบวนการแบบนี้คาดเดาไม่ได้เท่าไหร่ ใน Angular 9 เลยเพิ่ม Styling Precedence ขึ้นมาโดยจะเรียงลำดับความสำคัญจากสูงไปต่ำดังนี้

Template binding > Directive host binding > Component host binding

Class/Style binding ที่มีความเจาะจงกว่าก็จะมีความสำคัญสูงกว่าส่วน Class/Style ที่เป็น static จะมีความสำคัญต่ำสุดครับ

นอกจากนั้นแล้วเรายังสามารถ Delegate style เพื่อให้ไปใช้ตัวที่มีลำดับความสำคัญต่ำกว่าได้โดยทำการเซ็ตค่าให้เป็น undefined

แต่ถ้าอยากเอา Style นั้นออกไปเลย ให้เซ็ต Style binding นั้นเป็น null แทน

ดูตัวอย่างเรื่อง Styling Precedence ในโค้ดด้านล่างได้เลยครับ

```html
<!-- class.special เป็น Template binding จะ override dirWithClassBinding -->
<div [class.special]="isSpecial" dirWithClassBinding>Some text.</div>

<!-- ถ้า styleExpr มีค่าจะ override style="color: blue" ที่เป็น static -->
<div style="color: blue" [style]="styleExpr">Some text.</div>

<!-- ถ้า classExpr เป็น undefined จะ delegate class binding ไปที่ class="special" แทน -->
<div class="special" [class]="classExpr">Some text.</div>

<!-- ถ้า styleExpr เป็น null style.color จะถูกเอาออกไป -->
<div [style.color]="styleExpr">Some text.</div>
```

ส่วนถ้าใครอยากศึกษาเรื่อง Styling Precedence เพิ่มเติม ดูต่อในลิ้งค์ด้านล่างนี้ได้เลย

[**Styling Precedence**
_A single HTML element can have its CSS class list and style values bound to multiple sources (for example, host bindings from multiple directives)._](https://v9.angular.io/guide/template-syntax#styling-precedence 'https://v9.angular.io/guide/template-syntax#styling-precedence')

#### ซัพพอร์ต CSS Customer Property

CSS Custom Property คืออะไร?

CSS Custom Property หรือ CSS Variable ก็คือตัวแปรใน CSS นั่นเอง
ทำให้เราสามารถใช้ตัวแปรใน CSS ได้แล้วโดยไม่ต้องใช้ preprocessor อย่างพวก LESS หรือ SASS

ผลจากการทำ Style Refactoring ของทีม Angular ทำให้ใน Angular 9 สามารถ binding ค่ากับ CSS Custom Property ได้แล้วแบบนี้

```html
<div [style.--main-border-color]=" '#CCC' ">
  <p style="border: 1px solid var(--main-border-color)">hi</p>
</div>
```

### TestBed.inject แทน TestBed.get

ใน Angular 9 TestBed.get ถูก deprecate แล้วเพราะไม่เป็น Type Safe (return type เป็น any)

ใน Angular 9 เลยมีตัวใหม่มาแทนคือ TestBed.inject ที่ทำหน้าที่เหมือน TestBed.get ทุกอย่างแต่เป็น version ที่ Type Safe ครับ

```ts
// ก่อน Angular 9 ต้อง cast type แบบนี้
const service = TestBed.get(MyService) as MyService;

// Angular 9 ไม่ต้อง cast type แล้ว
const service = TestBed.inject(MyService);
```

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

---

[**Version 9 of Angular Now Available — Project Ivy has arrived!**
_The 9.0.0 release of Angular is here! This is a major release that spans the entire platform, including the framework, Angular Material, and the CLI._](https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3 'https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3')

[**What's new in Angular 9.0?**
_Ivy, sweet Ivy This is a long awaited release for the community, as Ivy is now the default compiler/renderer in Angular_](https://blog.ninja-squad.com/2020/02/07/what-is-new-angular-9.0/ 'https://blog.ninja-squad.com/2020/02/07/what-is-new-angular-9.0/')
