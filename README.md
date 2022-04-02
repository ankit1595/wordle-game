# Wordle Game web app

## How we implemented it..

### **The UI part**

---

Rough sketch :

1. h2 - Wordle Game
2. 5x6 div
3. div styling - margin 3px, padding 10px, font -bold...etc
4. keyboard below: word matrix

---

---

### **The logic part**

1. Database or API for 5-letter word data
2. Take/Fetch a word from database/API
3. Compare user word ===> master-word.... **word-by-word**

   IF match is true ===> change particular div color to green

4. ELSE IF ===> compare single user-word to each master-word one-by-one

   if match is true ===> div-color = yellow

5. ELSE ===> dark gray

---

### _Side-implementation_

1. Add favicon
