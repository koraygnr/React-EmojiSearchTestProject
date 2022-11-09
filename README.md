Emoji Search Test Project
---
Patika.dev'in bu ödevi kapsamında;
React'ın kendi dokümanlarında paylaşılan [örnek projerde](https://tr.reactjs.org/community/examples.html) bulunan ve halihazırda çalışan bir uygulamanın test kodunu yazmamız gerekiyor.  
    
   ### İstenen Testler
   Uygulama üzerinde bazı emojiler listeleniyor. Ve yukarıda bulunan input aracılığı ile listelenen emojiler filtrelenebiliyor.

-   Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
-   Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
-   Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.
-   Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.

#### Header Test
```
import  React  from  "react"
import { render, screen } from  "@testing-library/react"
import  "@testing-library/jest-dom"
import  App  from  "../App"


test("header render test", () => {
	render(<App/>)
	const  HeaderDiv  =  screen.getByText(/Emoji Search/i)
	expect(HeaderDiv).toBeInTheDocument()
})
```
#### EmojiResultRow Test
```
import  React  from  "react"
import { render, screen } from  "@testing-library/react"
import  "@testing-library/jest-dom"
import  App  from  "../App"

test("first emoji row render test", () => {
	render(<App/>)
	const  rowCount  =  screen.getAllByText("Click to copy emoji")
	expect(rowCount.length).toEqual(20)
})
```
#### EmojiFilter Test
```
import  React  from  "react"
import { render, screen } from  "@testing-library/react"
import  "@testing-library/jest-dom"
import  App  from  "../App"

test("first emoji row render test", () => {
	render(<App/>)
	const  rowCount  =  screen.getAllByText("Click to copy emoji")
	expect(rowCount.length).toEqual(20)
})
```
#### EmojiCopy Test
```
import  React  from  "react"
import { render, screen, fireEvent } from  "@testing-library/react"
import  "@testing-library/jest-dom"
import  App  from  "../App"

test("Emoji copied test", () => {
	render(<App/>)
	const  emojiResultsDiv  =  screen.getAllByTestId("emojiResultRow").at(0)
	fireEvent.click(emojiResultsDiv)
	expect(emojiResultsDiv.getAttribute("data-clipboard-text").length).toBeGreaterThan(0)
})
```


Install
---
`npm install`

Usage
--- 
`npm start`