---
title: 'มีอะไรใหม่ใน Angular 9'
description: 'Angular 9 มาพร้อม Rendering Engine ตัวใหม่ที่ชื่อว่า Ivy...'
date: '2020-03-09T16:09:06.761Z'
categories:
  - Angular
  - Beginner
published: true
image: ''
---

Angular 9 มาพร้อม Rendering Engine ตัวใหม่ที่ชื่อว่า Ivy และมาพร้อมกับฟีเจอร์ที่น่าสนใจอีกมากมาย เรามาดูกันดีกว่าว่าใน Angular 9 มีอะไรที่น่าสนใจกันบ้างครับ

---

### สารบัญ

- [Ivy นั้นสำคัญไฉน](blog/angular-9#ยาวไปไม่อ่าน)
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

Ivy เป็น Rendering Engine ตัวใหม่ล่าสุดของ Angular สำหรับใครยังไม่รู้จัก Ivy ลองอ่านในบทความด้านล่างได้เลยครับ

[**รู้จัก Ivy อนาคตใหม่ของชาว Angular**  
\_ก่อนจะเข้าสู่บทความ ขอเล่าถึงงานที่เพิ่งจบไปอย่าง Google I/O 2018 โดยในงานส่วนใหญ่จะเน้นไปที่ Android, Flutter, AI และ Machine Learning…\_DevNote](https://devnote.netlify.com/blog/introduce-ivy)[](https://devnote.netlify.com/blog/introduce-ivy)

ซึ่ง Ivy เนี่ยก็จะทำให้ Angular App เราดีขึ้นหลายอย่างเลยไม่ว่าจะเป็น

- ขนาดเล็กลง
- คอมไพล์ได้เร็วขึ้น
- เทสได้เร็วขึ้น
- Debug ง่ายขึ้น
- Error Message เข้าใจง่าย

#### ขนาดเล็กลง

ดูจากรูปด้านบนที่ใช้ Angular 9(Ivy) เมื่อเทียบกับ Angular 8 จะเห็นได้ว่า App ที่มีขนาดเล็กและ App ที่มีขนาดใหญ่จะมีขนาดเล็กลง 25-40% เลยทีเดียว ส่วน App ขนาดกลางจะลดลงเพียงเล็กน้อยเท่านั้น

#### คอมไพล์ได้เร็วขึ้น

จากรูปด้านบนเปรียบเทียบกันจะเห็นได้ว่า Angular 9 ใช้เวลาคอมไพล์ที่น้อยกว่า Angular 8.3 ครับ

#### เทสได้เร็วขึ้น

ก่อน Angular 9 เวลารันเทส TestBed จะทำการรีคอมไพล์ Component ใหม่ทุกๆครั้ง ระหว่างรันเทสโดยไม่สนว่าจะมีการเปลี่ยนแปลงที่ Component (เช่นถูก override) หรือไม่ แต่ใน Ivy TestBed จะทำการรีคอมไพล์เฉพาะเมื่อ Component มีการเปลี่ยนแปลงครับ ส่งผลให้สามารถรันเทสได้เร็วขึ้น 40 - 50% เลยทีเดียว

#### Debug ง่ายขึ้น

ใน Angular 9 ถ้าเราอยู่ใน Dev Mode และเปิด Devtool Console ขึ้นมา เราสามารถเรียกใช้ ng object เพื่อทำอะไรบางอย่างกับ Angular Component ใน Devtool Console ได้ครับ

ยกตัวอย่างเช่น เราสามารถเรียกใช้ Reference ของ Component ที่เลือกอยู่ใน Devtool Console โดยใช้คำสั่ง ng.getComponent($0) โดยที่ $0 คือ Component ที่เลือกอยู่
พอเราได้ reference ของ Component มาแล้วก็สามารถเปลี่ยนค่า input ของ component นั้นได้ครับ

พอเราเปลี่ยนค่าจนพอใจแล้วถ้าอยากให้ค่าที่เปลี่ยนมีผลกับ Component นั้นให้ใช้คำสั่ง ng.applyChanges

นอกจากนี้ยังมีคำสั่งอื่นให้เรียกใช้มากมาย ดูตัวอย่างจากในรูปได้เลยครับ

#### Error Message เข้าใจง่าย

จากรูปด้านบนจะเห็นได้ว่า Error Message ตอน build ใน Angular 9 ก็ยังเข้าใจง่ายมากกว่าเดิมครับ

### Dependency Injection Scope ใหม่

เริ่มด้วยฟีเจอร์ใหม่อันแรกเลยใน Angular 9 จะมีทางเลือกให้ใส่ providedIn เวลาสร้าง service ที่นอกจาก root ละครับ โดยจะมีที่เพิ่มมาคือ any และ platform ไปดูต่อในรูปได้เลยครับว่าแต่ละอันมีความแตกต่างยังไงบ้าง

### CSS ที่ถูกปรับปรุง

### TestBed.inject API ใหม่ ไฉไลกว่าเดิม

### ฟีเจอร์ใหม่ของ Angular CLI

### Strict Template Type Checking

### Component ใหม่

### New in Localization

### Component Harnesses

### New in Angular Universal

### Support TypeScript 3.7
