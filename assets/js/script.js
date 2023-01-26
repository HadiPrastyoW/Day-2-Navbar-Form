function ambilData(){
    let nama = document.getElementById('nama').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let keterangan = document.getElementById('keterangan').value

    if(nama == "" || email == "" || subject =="" || phone == "" || keterangan=="") {
        alert("ada yang belum terisi !!")
    }

    const defaultEmail = "hi.dandi9@gmail.com"

    let mailTo = document.createElement('a')
    
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${nama}, saya ingin ${keterangan} tolong hubungin saya ${phone}`
    mailTo.click()
}
