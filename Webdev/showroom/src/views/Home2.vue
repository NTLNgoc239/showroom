<template>
  <div class="home">
    <b-row>
      <div class="text">
        <p class="text-1">Chào mừng Quý khách đến với</p>
        <div class="text-show">
          <a>SHOWROOM VIETMAP</a>
        </div>
        <p class="text-2">Với mong muốn hỗ trợ khách hàng ngày một tốt hơn,</p>
        <p class="text-2">
          Vietmap trân trọng kính mời Qúy khách đánh giá chất lượng hỗ trợ
        </p>
        <p class="text-2">của nhân viên Showroom</p>
      </div>
      <b-col sm="6">
        <info-customer></info-customer>
        <div id="info">
          <div class="text">
            <p class="text-2">
              Với những trải nghiệm thực tế tại Showroom hôm nay,
            </p>
            <p class="text-2">Quý khách vui lòng chia sẻ mức độ hài lòng về</p>
            <p class="text-2">chất lượng hỗ trợ của nhân viên tư vấn</p>
          </div>
        </div>
      </b-col>
      <b-col sm="6">
        <div class="rating">
          <ul>
            <button
              v-b-modal.modal-center1
              type="button"
              variant="outline-dark"
            >
              <div class="image">
                <img src="../assets/button1.svg" />
              </div>
              <div>
                <a class="text-3">Rất không hài lòng</a>
              </div>
            </button>
            <button
              v-b-modal.modal-center1
              type="button"
              variant="outline-dark"
            >
              <div class="image">
                <img src="../assets/button2.svg" />
              </div>
              <div>
                <a class="text-3">Không hài lòng</a>
              </div>
            </button>
            <button
              v-b-modal.modal-center3
              type="button"
              variant="outline-dark"
            >
              <div class="image">
                <img src="../assets/button3.svg" />
              </div>
              <div>
                <a class="text-3">Bình thường</a>
              </div>
            </button>
            <button v-b-modal.modal-center type="button" variant="outline-dark">
              <div class="image">
                <img src="../assets/button4.svg" />
              </div>
              <div>
                <a class="text-3">Hài lòng</a>
              </div>
            </button>
            <button v-b-modal.modal-center type="button" variant="outline-dark">
              <div class="image">
                <img src="../assets/button5.svg" />
              </div>
              <div>
                <a class="text-3">Rất hài lòng</a>
              </div>
            </button>
          </ul>
        </div>
        <!-- Popup1 -->
        <div>
          <b-modal id="modal-center1" hide-footer="true" hide-header="true">
            <div class="modal-center___BV_modal_body_">
              <div class="image-popup">
                <img src="../assets/button6.svg" />
              </div>
              <div class="text-comment">
                <p>Vietmap xin lỗi vì nhân viên Trần Phối Dung</p>
                <p>chưa làm Quý khách hài lòng</p>
              </div>
              <b-row>
                <b-col sm="6">
                  <div class="text-popup">
                    <p>
                      Quý khách vui lòng chia sẻ những điều không hài lòng để
                      Vietmap cải thiện chất lượng hoặc để lại số điện thoại,
                      Quản lý bộ phận CSKH Vietmap sẽ liên hệ lại để hỗ trợ Quý
                      khách tốt hơn cũng như để nâng cao chất lượng phục vụ
                      khách hàng tại Showroom
                    </p>

                    <!-- <p>
                      Vietmap cải thiện chất lượng hoặc để lại số điện thoại,
                    </p>
                    <p>
                      Quản lý bộ phận CSKH Vietmap sẽ liên hệ lại để hỗ trợ Quý
                    </p>
                    <p>khách tốt hơn cũng như để nâng cao chất lượng phục vụ</p>
                    <p>khách hàng tại Showroom</p> -->
                  </div>
                </b-col>

                <b-col sm="6">
                  <b-form>
                    <b-form-group
                      label="Số điện thoại (không bắt buộc)"
                      label-for="phone-input"
                      style="
                        font-weight: bold;
                        font-size: 12px;
                        margin-bottom: 20px;
                      "
                    >
                      <b-form-input
                        id="phone-input"
                        placeholder="Nhập số điện thoại của Quý khách"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Góp ý"
                      label-for="comment-input"
                      style="
                        font-weight: bold;
                        font-size: 12px;
                        margin-bottom: 20px;
                      "
                    >
                      <textarea
                        id="comment-input"
                        placeholder="Ghi góp ý của Quý khách vào đây"
                      ></textarea>
                    </b-form-group>
                  </b-form>
                </b-col>
                <router-link to="/thankyou1"
                  ><button
                    id="thankyou1"
                    type="submit"
                    class="btn btn-primary sendcomment"
                    @click="redirectToThankyou1()"
                  >
                    GỬI ĐÁNH GIÁ
                  </button></router-link
                >
              </b-row>
            </div>
          </b-modal>
        </div>

        <!-- Popup3 -->
        <b-modal id="modal-center3" hide-footer="true" hide-header="true">
          <div class="modal-center___BV_modal_body_">
            <div class="image-popup">
              <img src="../assets/button7.svg" />
            </div>
            <div class="text-comment">
              <p>
                Vietmap rất tiếc vì nhân viên Showroom chưa đáp ứng được mong
                đợi của Quý khách
              </p>
              <!-- <p>chưa đáp ứng được mong đợi của Quý khách</p> -->
            </div>
            <b-row>
              <b-col sm="6">
                <div class="text-popup">
                  <p>
                    Quý khách vui lòng góp ý những điểm nhân viên Trần Phối Dung
                    cần cải thiện để Quý khách hài lòng hơn
                  </p>
                </div>
              </b-col>
              <b-col sm="6">
                <form>
                  <b-form-group
                    label="Số điện thoại (không bắt buộc)"
                    label-for="phone-input"
                    style="
                      font-weight: bold;
                      font-size: 12px;
                      margin-bottom: 20px;
                    "
                  >
                    <b-form-input
                      id="phone-input"
                      placeholder="Nhập số điện thoại của Quý khách"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Góp ý"
                    label-for="comment-input"
                    style="
                      font-weight: bold;
                      font-size: 12px;
                      margin-bottom: 20px;
                    "
                  >
                    <textarea
                      id="comment-input"
                      placeholder="Ghi góp ý của Quý khách vào đây"
                    ></textarea>
                  </b-form-group>
                </form>
              </b-col>
              <router-link to="/thankyou2">
                <b-button type="submit" class="btn btn-primary sendcomment"
                  >GỬI ĐÁNH GIÁ</b-button
                ></router-link
              >
            </b-row>
          </div>
        </b-modal>
        <!-- Popup45 -->
        <b-modal id="modal-center" hide-footer="true" hide-header="true">
          <div class="modal-center___BV_modal_body_">
            <div class="image-popup">
              <img src="../assets/button8.svg" />
            </div>
            <div class="text-comment">
              <p>Quý khách vui lòng cho</p>
              <p>Vietmap xin số điện thoại</p>
            </div>
            <form>
              <b-form-group
                label="Số điện thoại (không bắt buộc)"
                label-for="phone-input"
                style="font-weight: bold; font-size: 12px; margin-bottom: 20px"
              >
                <b-form-input
                  id="phone-input"
                  placeholder="Nhập số điện thoại của Quý khách"
                ></b-form-input>
              </b-form-group>
              <router-link to="/thankyou3">
                <b-button type="submit" class="btn btn-primary sendcomment"
                  >GỬI ĐÁNH GIÁ</b-button
                ></router-link
              >
            </form>
          </div>
        </b-modal>

        <router-view />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  text-align: center;
  margin-top: 40px;
  flex-direction: row;
}
.content {
  margin-top: 50px;
}
.text {
  line-height: 30px;
}
.text-1 {
  color: #292c2e;
  font-size: 28px;
  margin-bottom: 20px;
}
.text-show {
  font-size: 48px;
  line-height: 50px;
  color: #00aeef;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
.text-2 {
  font-size: 16px;
  color: #464a4d;
  text-align: center;
}
.rating {
  margin-top: 48px;
}
ul {
  padding: 8px;
}
button {
  /* border: 1px solid #6c757d59;
  border-radius: 8px; */
  width: 140px;
  height: 140px;
  /* padding: 10px; */
  margin: 10px;
  background-color: rgb(255, 255, 255);
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
  text-decoration: none;
}
.text-3 {
  font-size: 12px;
  line-height: 16px;
  color: #292c2e;
  font-weight: bold;
}
.image-popup {
  width: 96px;
  height: 96px;
  line-height: 96px;
  margin-bottom: 40px;
}
.text-comment {
  font-size: 20px;
  color: #00aeef;
  vertical-align: middle;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
}
.text-popup {
  font-size: 18px;
  color: #464a4d;

  margin-bottom: 40px px;
}
.label {
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 10px;
}
.form-control {
  margin-bottom: 10px;
}
form-input {
  border: 1px solid;
  border-radius: 10px;
}
textarea {
  width: 100%;
  height: 75px;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
}
.sendcomment {
  background-color: #05bbff;
  font-size: 16px;
  color: #fff;
  width: 100%;
  margin-top: 20px;
  margin-left: 0;
}
.modal-body {
  align-items: center;
  width: 50%;
  padding: 3rem;
}
.image-popup {
  align-items: center;

  margin-left: auto;
  margin-right: auto;
}
form {
  margin-top: 30px;
}
p {
  padding: 0;
  margin-bottom: 0;
}
.image {
  width: 100%;
  height: 100%;
}
@media (min-width: 992px) {
  button {
    width: 180px;
    height: 180px;
    border: none;
  }
  .text-3 {
    font-size: 15px;
  }
  .rating {
    margin-top: 0px;
  }
  .text-2 {
    font-size: 20px;
  }
  .modal-body {
    align-items: center;
    padding: 2.5rem;
  }
  col .text-2 {
    font-size: 16px;
    text-align: center;
  }
  .text-popup {
    text-align: center;
  }
  .sendcomment {
    width: 100%;
    align-items: center;
  }
  .text-comment {
    font-size: 18px;
  }
  .modal-body {
    padding: 2rem;
  }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}
/*Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  button {
    width: 180px;
    height: 180px;
    border: none;
  }
  .text-3 {
    font-size: 15px;
  }
  .rating {
    margin-top: 0px;
  }
  .text-2 {
    font-size: 20px;
  }
  .text-popup {
    font-size: 13px;
  }
  form {
    margin-top: 0;
  }
  .modal-content {
    width: 500px;
  }
  .modal-body {
    position: relative;
    padding: 3rem;
  }
}
</style>

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
