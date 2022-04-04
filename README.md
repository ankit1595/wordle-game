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
3. Compare user word ===> master-word.... **LETTER-by-LETTER**

   IF match is true ===> change particular div color to green (word-matrix as well as keyboard)

4. ELSE IF ===> compare single user-word to each master-word one-by-one

   if match is true ===> div-color = yellow (word-matrix as well as keyboard)

5. ELSE ===> dark gray (word-matrix as well as keyboard)

---

### _Side-implementation_

1. Add favicon

---

1. create 5x6 table dynamically
2. provide id to each element
3. populate table row with keyboard strokes
4.

0 1 2 3 4
P O W E R
H O V E R
R E A C T
