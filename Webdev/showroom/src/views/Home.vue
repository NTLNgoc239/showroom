<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div class="home">
     <div class="content">
            <div class="text">
                    <p class="text-1">Chào mừng Quý khách đến với</p>
                    <a class="text-show">SHOWROOM VIETMAP</a>
                    <p class="text-2">Với mong muốn hỗ trợ khách hàng ngày một tốt hơn,</p>
                    <p class="text-2"> Vietmap trân trọng kính mời Qúy khách đánh giá chất lượng hỗ trợ</p>
                    <p class="text-2"> của nhân viên Showroom</p>
            </div>
            <div id="info">
                <info-customer></info-customer>
                <div class="text">
                    <p class="text-2">Với những trải nghiệm thực tế tại Showroom hôm nay,</p>
                    <p class="text-2">Quý khách vui lòng chia sẻ mức độ hài lòng về</p>
                    <p class="text-2">chất lượng hỗ trợ của nhân viên tư vấn</p>
                </div>
            </div>
            <div class="rating">
              <!-- <ul>
                    <button type="button" data-toggle="modal" data-target="#exampleModalLong" v-onclick:[active]="1">
                        <div class="button">
                            <img src="../assets/button1.svg" alt="">
                        </div>
                        <div>
                            <a class="text-3">Rất không hài lòng</a>
                        </div>
                    </button>
                    <button type="button" data-toggle="modal" data-target="#exampleModalLong">
                        <div class="button">
                            <img src="../assets/button2.svg" alt="">
                        </div>
                        <div>
                            <a class="text-3">Không hài lòng</a>
                        </div>
                    </button>
                    <button type="button" data-toggle="modal" data-target="#exampleModalLong3">
                        <div class="button">
                            <img src="../assets/button3.svg" alt="">
                        </div>
                        <div>
                            <a class="text-3">Bình thường</a>
                        </div>
                    </button>
                    <button type="button" data-toggle="modal" data-target="#exampleModalLong4">
                        <div class="button">
                            <img src="../assets/button4.svg" alt="">
                        </div>
                        <div>
                            <a class="text-3">Hài lòng </a>
                        </div>
                    </button>
                    <button type="button" data-toggle="modal" data-target="#exampleModalLong4">
                        <div class="button">
                            <img src="../assets/button5.svg" alt="">
                        </div>
                        <div>
                            <a class="text-3">Rất hài lòng </a>
                        </div>
                    </button>
                </ul> -->
                  <ul>
                      <button v-b-modal.modal-center1 type="button" variant="outline-dark" >
                          <div class="image">
                              <img src="../assets/button1.svg">
                          </div>
                          <div>
                              <a class="text-3">Rất không hài lòng</a>
                          </div>
                      </button>
                      <button v-b-modal.modal-center1 type="button" variant="outline-dark">
                          <div class="image">
                              <img src="../assets/button2.svg">
                          </div>
                          <div>
                              <a class="text-3">Không hài lòng</a>
                          </div>
                      </button>
                      <button v-b-modal.modal-center3 type="button" variant="outline-dark">
                          <div class="image">
                              <img src="../assets/button3.svg">
                          </div>
                          <div>
                              <a class="text-3">Bình thường</a>
                          </div>
                      </button>
                      <button v-b-modal.modal-center type="button" variant="outline-dark">
                          <div class="image">
                              <img src="../assets/button4.svg">
                          </div>
                          <div>
                              <a class="text-3">Hài lòng</a>
                          </div>
                      </button>
                      <button v-b-modal.modal-center type="button" variant="outline-dark">
                          <div class="image">
                              <img src="../assets/button5.svg">
                          </div>
                          <div>
                              <a class="text-3">Rất hài lòng</a>
                          </div>
                      </button>
                  </ul>
            </div>
            
            <!-- Popup12 -->
            <!-- <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="image-popup">
                        <b-img src="../assets/button6.svg"></b-img>
                   </div>
                   <div class="text-comment">
                        <p class="text-4">Vietmap xin lỗi vì nhân viên Trần Phối Dung</p>
                        <p class="text-4">chưa làm Quý khách hài lòng</p>
                   </div>
                        <div class="text-popup">
                            <p class="text-2">Quý khách vui lòng chia sẻ những điều không hài lòng để</p>
                            <p class="text-2">Vietmap cải thiện chất lượng hoặc để lại số điện thoại,</p>
                            <p class="text-2">Quản lý bộ phận CSKH Vietmap sẽ liên hệ lại để hỗ trợ Quý</p>
                            <p class="text-2">khách tốt hơn cũng như để nâng cao chất lượng phục vụ</p>
                            <p class="text-2">khách hàng tại Showroom</p>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="phonenumber">Số điện thoại (không bắt buộc)</label>
                                <input type="numberphone" class="form-control" id="phonenumber"
                                    placeholder="Nhập số điện thoại của Quý khách">
                            </div>
                            <div class="form-group">
                                <label for="comment">Góp ý</label>
                                <textarea type="text" class="form-control" id="comment"
                                    placeholder="Ghi góp ý của Quý khách vào đây"></textarea>
                            </div>
                             <router-link to="/thankyou1"><button id="thankyou1" type="submit" class="btn btn-primary sendcomment"  @click="redirectToThankyou1()">GỬI ĐÁNH GIÁ</button></router-link>
                        </form>
                    </div>

                </div>
            </div>
        </div> -->
        <!-- Popup 3 -->
        <!-- <div class="modal fade" id="exampleModalLong3" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="../assets/button7.svg">
                        <p class="text-4">Vietmap rất tiếc vì nhân viên Showroom</p>
                        <p class="text-4">chưa đáp ứng được mong đợi của Quý khách</p>
                        <div class="text-popup">
                            <p class="text-2">Quý khách vui lòng góp ý những điểm nhân viên</p>
                            <p class="text-2">Trần Phối Dung cần cải thiện để Quý khách hài lòng hơn</p>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="phonenumber">Số điện thoại (không bắt buộc)</label>
                                <input type="numberphone" class="form-control" id="phonenumber"
                                    placeholder="Nhập số điện thoại của Quý khách">
                            </div>
                            <div class="form-group">
                                <label for="comment">Góp ý</label>
                                <textarea type="text" class="form-control" id="comment"
                                    placeholder="Ghi góp ý của Quý khách vào đây"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary sendcomment">GỬI ĐÁNH GIÁ</button>
                        </form>
                    </div>

    <router-view />
     </hide-at>
      <show-at breakpoint="mediumAndAbove">
  <div class="home">
    <b-row>
      <div class="text">
        <p class="text-1">Chào mừng Quý khách đến với</p>
        <div class="text-show">
          <a>SHOWROOM VIETMAP</a>
                </div>
            </div>
        </div> -->
        <!-- Popup 4&5 -->

        <!-- <div class="modal fade" id="exampleModalLong4" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="../assets/button8.svg">
                        <p class="text-4">Quý khách vui lòng cho</p>
                        <p class="text-4">Vietmap xin số điện thoại</p>
                        <div class="text-popup">
                            <p class="text-2">Quý khách vui lòng góp ý những điểm nhân viên</p>
                            <p class="text-2">Trần Phối Dung cần cải thiện để Quý khách hài lòng hơn</p>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="phonenumber">Số điện thoại (không bắt buộc)</label>
                                <input type="numberphone" class="form-control" id="phonenumber"
                                    placeholder="Nhập số điện thoại của Quý khách">
                            </div>
                            <button type="submit" class="btn btn-primary sendcomment">GỬI ĐÁNH GIÁ</button>
                        </form>
                    </div>

                </div>
            </div>
        </div> -->
            <!-- Popup1 -->
            <div>
               <b-modal id="modal-center1" hide-footer="true" hide-header="true">
                 <div class="modal-center___BV_modal_body_">
                   <div class="image-popup">
                        <img src="../assets/button6.svg">
                   </div>
                   <div class="text-comment">
                        <p class="text-4">Vietmap xin lỗi vì nhân viên Trần Phối Dung</p>
                        <p class="text-4">chưa làm Quý khách hài lòng</p>
                   </div>
                        <div class="text-popup">
                            <p class="text-2">Quý khách vui lòng chia sẻ những điều không hài lòng để</p>
                            <p class="text-2">Vietmap cải thiện chất lượng hoặc để lại số điện thoại,</p>
                            <p class="text-2">Quản lý bộ phận CSKH Vietmap sẽ liên hệ lại để hỗ trợ Quý</p>
                            <p class="text-2">khách tốt hơn cũng như để nâng cao chất lượng phục vụ</p>
                            <p class="text-2">khách hàng tại Showroom</p>
                        </div>
                        <b-form>
                          <b-form-group label="Số điện thoại (không bắt buộc)" label-for="phone-input" style="font-weight:bold;font-size:12px;margin-bottom:20px">
                            <b-form-input id="phone-input" placeholder="Nhập số điện thoại của Quý khách"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Góp ý" label-for="comment-input" style="font-weight:bold;font-size:12px;margin-bottom:20px">
                            <textarea id="comment-input" placeholder="Ghi góp ý của Quý khách vào đây"></textarea>
                          </b-form-group>
                          <router-link to="/thankyou1"><button id="thankyou1" type="submit" class="btn btn-primary sendcomment"  @click="redirectToThankyou1()">GỬI ĐÁNH GIÁ</button></router-link>
                        </b-form>
                    
                   </div> 
                </b-modal>
            </div>
              
            <!-- Popup3 -->
               <b-modal id="modal-center3" hide-footer="true" hide-header="true">
                 <div class="modal-center___BV_modal_body_">
                   <div class="image-popup">
                        <img src="../assets/button7.svg">
                   </div>
                   <div class="text-comment">
                        <p class="text-4">Vietmap rất tiếc vì nhân viên Showroom</p>
                        <p class="text-4">chưa đáp ứng được mong đợi của Quý khách</p>
                   </div>
                        <div class="text-popup">
                            <p class="text-2">Quý khách vui lòng góp ý những điểm nhân viên</p>
                            <p class="text-2">Trần Phối Dung cần cải thiện để Quý khách hài lòng hơn</p>
                        </div>
                        <form>
                          <b-form-group label="Số điện thoại (không bắt buộc)" label-for="phone-input" style="font-weight:bold;font-size:12px;margin-bottom:20px">
                            <b-form-input id="phone-input" placeholder="Nhập số điện thoại của Quý khách"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Góp ý" label-for="comment-input" style="font-weight:bold;font-size:12px;margin-bottom:20px">
                            <textarea id="comment-input" placeholder="Ghi góp ý của Quý khách vào đây"></textarea>
                          </b-form-group>
                          <router-link to="/thankyou2">
                          <b-button type="submit" class="btn btn-primary sendcomment" >GỬI ĐÁNH GIÁ</b-button></router-link>
                        </form>
                   </div> 
                </b-modal>
            <!-- Popup45 -->
               <b-modal id="modal-center" hide-footer="true" hide-header="true">
                 <div class="modal-center___BV_modal_body_">
                   <div class="image-popup">
                        <img src="../assets/button8.svg">
                   </div>
                   <div class="text-comment">
                        <p class="text-4">Quý khách vui lòng cho</p>
                        <p class="text-4">Vietmap xin số điện thoại</p>
                   </div>
                        <form>
                          <b-form-group label="Số điện thoại (không bắt buộc)" label-for="phone-input" style="font-weight:bold;font-size:12px;margin-bottom:20px">
                            <b-form-input id="phone-input" placeholder="Nhập số điện thoại của Quý khách"></b-form-input>
                          </b-form-group>
                          <router-link to="/thankyou3">
                          <b-button type="submit" class="btn btn-primary sendcomment">GỬI ĐÁNH GIÁ</b-button></router-link>
                        </form>
                   </div> 
                </b-modal>
            </div>

        <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoCustomer from "@/components/InfoCustomer.vue";
// import InfoCustomer from '../components/InfoCustomer.vue';

export default {
  name: "Home",
  components: {
    InfoCustomer,
  },
};
</script>


<style scoped>
.home{
  width:100vw;
  height:100vh;
  text-align: center;
  margin-top: 40px;
}
.content{
  margin-top: 50px;
}
.text{
  line-height:30px;
}
.text-1{
  color:#292C2E;
  font-size: 28px;
  margin-bottom: 20px;
}
.text-show{
  font-size:48px;
  line-height:50px;
  color:#00AEEF;
  font-weight: bold;
  margin-top:40px;
  margin-bottom:40px;
}
.text-2{
  font-size:16px;
  color:#464A4D;
  text-align: center;
}
.rating{
  margin-top:48px;
}
ul {
  padding:8px;
}
button {
border: 1px solid #6c757d59;
    border-radius: 8px;
    width: 140px;
    height: 140px;
    /* padding: 10px; */
    margin: 10px;
    background-color: #fff;

}
.btn {
    width: 100px;
    height: 50px;
    display: inline-block;
    margin-top: 0px;
    padding: 2;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
}
a {
  text-decoration: none
}
.text-3{
  font-size:12px;
  line-height:16px;
  color:#292C2E;
  font-weight:bold;
}
.image-popup{
  width:96px;
  height:96px;
  line-height: 96px;
  margin-bottom:40px;
  margin-top:56px;
}
.text-comment{
  font-size: 20px;
  color:#00AEEF;
  vertical-align:middle;
  font-weight:bold;
  margin-bottom:24px;
  text-align: center;
}
.text-popup{
  font-size: 18px;
  color:#464A4D;
  
    margin-bottom: 40px
px
;
}
.label{
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 10px;
}
  .form-control{
    margin-bottom:10px;
  }
form-input{
  border: 1px solid;
  border-radius:8px;
}
textarea{
    width: 100%;
    height: 75px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
.sendcomment{
  background-color:#05BBFF;
  font-size:16px;
  color:#fff;
  width:100%;
  margin-top: 20px;
    margin-left: 0;
}
modal{
  align-items: center;
  width: 50%;
}
.image-popup{
  align-items: center;
  
    margin-left: auto;
    margin-right: auto;
}
form{
  margin-top:30px;
}
p{
  padding:0;
  margin-bottom:0;
}
</style>


