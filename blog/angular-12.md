---
title: 'มีอะไรใหม่ใน Angular 12'
description: 'หลังจากที่ทางทีม Angular ออก Ivy มาซักระยะ Angular 12 จะเป็นเวอร์ชั่นที่ใกล้เคียงกับคำว่า Ivy Everywhere มากที่สุด'
date: '2021-09-04T16:54:48.583Z'
categories: ['Angular', 'Beginner']
published: true
image: 'assets/angular-12/asset-1.jpg'
---

<figure>
  <img src="assets/angular-12/asset-1.jpg" alt="twelve"/>
  <figcaption>
  Photo by <a href="https://unsplash.com/@mjskok?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Skok</a> on <a href="https://unsplash.com/s/photos/twelve?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </figcaption>
</figure>

หลังจากที่ทางทีม Angular ออก Ivy มาซักระยะ Angular 12 จะเป็นเวอร์ชั่นที่ใกล้เคียงกับคำว่า Ivy Everywhere มากที่สุด อธิบายก็คือใกล้เคียงกับการเปลี่ยน Ecosystem ของ Angular ให้เป็น Ivy ทั้งหมดครับ

---

### สารบัญ

- [เข้าใกล้กับคำว่า Ivy Everywhere มากที่สุด](blog/angular-12/#เข้าใกล้กับคำว่า-Ivy-Everywhere-มากที่สุด)
- [อนาคตของ Protractor](blog/angular-12/#อนาคตของ-Protractor)
- [Nullish Coalescing](blog/angular-12/#Nullish-Coalescing)
- [การปรับปรุงเกี่ยวกับ Style](blog/angular-12/#การปรับปรุงเกี่ยวกับ-Style)
- [อัพเดทอื่นๆ](blog/angular-12/#อัพเดทอื่นๆ)
- [Deprecate IE11](blog/angular-12/#Deprecate-IE11)

---

### เข้าใกล้กับคำว่า Ivy Everywhere มากที่สุด

ตั้งแต่ Ivy ได้ถูกเปิดให้ทดลองใช้ตั้งแต่ Angular 8 แต่ว่า Ecosystem ก็ยังไม่เปลี่ยนมาใช้ Ivy ทั้งหมดครับ
โดยจะยังมีส่วนที่ทำให้ยังคงใช้ View Engine ได้อยู่ไม่ว่าจะเป็นส่วนของตัว framework หลักเองหรือส่วนของ library ครับ
แต่ใน Angular 12 ตัว View Engine นั้นถูก deprecate แล้วและจะถูกเอาออกใน major version ถัดไป
ส่วนตัว Library ยังคงใช้ View Engine ได้อยู่ แต่ผู้สร้าง Library ก็ควรพิจารณาเปลี่ยนจาก View Engine เป็น Ivy ครับ

---

### อนาคตของ Protractor

Protractor ที่เป็น E2E Testing Tool ที่อยู่คู่กับ Angular มาช้านาน แต่ด้วยกาลเวลาที่เปลี่ยนไป
ทำให้มี Tool ที่ดีกว่าเกิดขึ้นมามากมายไม่ว่าจะเป็น Cypress, WebdriverIO หรือ TestCafe
ทำให้ทางทีม Angular อยากหาทางออกที่ดีที่สุดให้กับ E2E Testing Tool ของ Angular ครับ
จึงได้ออก [**RFC**](https://github.com/angular/protractor/issues/5502) เพื่อให้ช่วยกันตัดสินใจว่าจะทำอย่างไรกับ Protractor ว่าจะยังใช้ต่อหรือเปลี่ยนไปเป็นตัวอื่นดีครับ

---

### Nullish Coalescing

หลายคนอาจจะเคยใช้ Nullish Coalescing Operator (??) ใน TypeScript มาแล้ว
ซึ่งใน Angular 12 เราก็สามารถใช้ Nullish Coalescing Operator ใน Template ได้แล้วเช่นกัน

```html
<!-- ก่อน Angular 12 -->
{{age !== null && age !== undefined ? age : calculateAge() }}

<!-- ตั้งแต่ Angular 12 -->
{{ age ?? calculateAge() }}
```

---

### การปรับปรุงเกี่ยวกับ Style

ตั้งแต่ Angular 12 เราสามารถใช้ inline Sass ใน field style ใน @Component ได้แล้วแบบนี้

```ts
@Component({
  // ...
  styles: ['$title-color: pink; h1 { color: $title-color; }'],
})
export class UserComponent {}
```

Angular CDK และ Angular Material ได้มีการเปลี่ยนไปใช้ Sass Module System แบบใหม่แล้ว
ถ้าใน App ของเรามีการใช้ Angular CDK หรือ Angular Material อาจจะต้องดูว่าเปลี่ยนไปใช้ `sass` แทน `node-sass` แล้วรึยัง

นอกจากนั้นแล้ว Angular CDK และ Angular Material ยังเปิดให้ใช้ Sass API ผ่าน `@use` syntax
สามารถศึกษาเพิ่มเติมได้ที่ [**material.angular.io**](https://material.angular.io/guides)

ถ้าเราอัพเดทเป็น Angular 12 ผ่าน `ng update` โดยคำสั่งนี้จะทำการอัพเดท `@import` เป็น `@use` ให้อัตโนมัติ

---

### อัพเดทอื่นๆ

- ตั้งแต่ Angular 12 เป็นต้นไปคำสั่ง `ng build` จะถูก default เป็น production build
  แต่จะมีผลเฉพาะ App ใหม่ที่สร้างด้วย Angular 12 เท่านั้น App เก่าที่อัพเดทเป็น Angular 12 ต้องใช้คำสั่งด้านล่างนี้เพื่อให้ default เป็น production build

```bash
ng update @angular/cli — migrate-only production-by-default
```

- Strict mode จะถูก enable เป็น default มาเลย อ่านเพิ่มเติมเกี่ยวกับ Strict mode ได้[**ที่นี่**](https://angular.io/guide/strict-mode)
- Ivy-based Language Service จะถูกเปิดเป็น default เช่นกัน
- ซัพพอร์ต Webpack 5 แบบ production ready
- ซัพพอร์ต TypeScript 4.2

---

### Deprecate IE11

Angular 12 ได้ทำการ deprecate IE11 แล้วเนื่องจากถ้าลดการซัพพอร์ต browser เก่าๆ ก็จะช่วยให้ทีม Angular สามารถซัพพอร์ต browser และ web เทคโนโลยีใหม่ๆ ได้ดีขึ้นนั่นเอง

IE11 จะถูกเลิกซัพพอร์ตตั้งแต่ Angular 13 เป็นต้นไปครับ

---

### References

[**Angular v12 is now available**
_It’s that time again, friends — we’re back with a new release and we can’t wait to share all the great updates and features waiting for you in Angular v12._](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49 'https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49')
