<template>
    <div class="thankyou3">
        <div class="icon">
            <img src="../assets/susscess.svg">
        </div>
            <p class="text-2">Chân thành cảm ơn Quý khách</p>
            <p class="text-2">Những lời khen của Quý khách là nguồn động viên tinh</p>
            <p class="text-2">thần to lớn giúp Nhân viên nói riêng và</p>
            <p class="text-2">bộ phận CSKH Vietmap nói chung phụ vụ Quý khách</p>
            <p class="text-2">hàng ngày một tốt hơn</p>
            <p class="text-2">Chúc Quý khách một ngày vui vẻ</p>
            <p class="text-3">TRÂN TRỌNG !</p>
            <router-link to="/">
            <b-button type="submit" class="btn btn-primary changescreen"> <i class="fas fa-arrow-left"></i>QUAY VỀ MÀN
                HÌNH
                CHÍNH</b-button></router-link>
                <router-view/>
    </div>
</template>


<style scoped>
.thankyou3{
    background: url("../assets/thankyoubackgrounf.svg");
    text-align: center;
    margin-top:150px;
}
img{
    width: 160px;
    height:160px;
    margin-bottom:32px;
}
.text-2{
    font-size: 20px;
    color:#292C2E;
    line-height: 30px;
}
.text-3{
    font-size:24px;
    line-height:48px;
    color:#00AEEF;
    margin-bottom:80px;
}
button{
    background-color:#01A3E0;
    font-size:24px;
    font-weight:bold;
    color:#FFFFFF;
    border: 1px solid #01A3E0;
    border-radius:8px;
    width:50%;
}
</style>