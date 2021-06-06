function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
class myFrom { 
    constructor(){
    this.nae = document.createElement("h1")
    this.up = document.createElement('hr')
    this.name = document.createElement("input")
    this.name2 = document.createElement("input")
    this.email = document.createElement("input")
    this.acc = document.createElement("input")
    this.pass = document.createElement("input")
    this.date = document.createElement("input")
    this.up2 = document.createElement('hr')

    this.sign = document.createElement("button")


    this.nae.innerHTML = "ĐĂNG KÝ"
    this.name.placeholder = "Họ"
    this.name2.placeholder = "Tên"
    this.email.placeholder = "123@gmail.com"
    this.acc.placeholder = "Tài Khoản"
    this.pass.placeholder = "Mật khẩu"
    this.date.placeholder = "Ngày sinh"
    this.sign.innerHTML = "SUMIT"

    
}
    render = (container) =>{
        const div = document.createElement("div")
        div.className = "Big"
        div.setAttribute('id', 'big')
        div.appendChild(this.nae)
        div.appendChild(this.up)
        div.appendChild(this.name)
        div.appendChild(this.name2)
        div.appendChild(this.email)
        div.appendChild(this.acc)
        div.appendChild(this.pass)
        div.appendChild(this.date)
        div.appendChild(this.up2)

        div.appendChild(this.sign)
        container.appendChild(div)

    }
    dele2(){
        const Small = document.getElementById("small") 
        while (Small.firstChild) {
            Small.removeChild(Small.firstChild);
        }
        
    }

}

class Signin{
    constructor(){
        this.acc = document.createElement("input")
        this.pass = document.createElement("input")

        this.pass.type="password"
        this.acc.placeholder = "Tài khoản"
        this.pass.placeholder = "Mật khẩu"
    }
    render(container){
        const div = document.createElement("div")
        div.className = "Small"
        div.setAttribute("id", "small")
        div.appendChild(this.acc)
        div.appendChild(this.pass)
        container.appendChild(div)
    }
    dele1(){
        const Big = document.getElementById("big") 
        while (Big.firstChild) {
            Big.removeChild(Big.firstChild);
        }
        
    }
}



const app =document.getElementById("app")




const butt2 = document.getElementById("butt2")
butt2.addEventListener('click', ()=>{
    const Signin  = b
    Signin.render(app)
    Signin.dele1()
})
b = new Signin



const butt = document.getElementById('butt') 
butt.addEventListener('click', ()=>{
    const myFrom = a
    myFrom.render(app)
    myFrom.dele2()
})
a = new myFrom()


 