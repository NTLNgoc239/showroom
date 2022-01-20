<template>
    <div class="info-customer">
        <div class="image">
            <img src="../assets/istockphoto-922962354-612x612.jpg">
        </div>
        <div class="name">
            <p>{{name}}</p>
        </div>
    </div>
</template>

<style scoped>
.info-customer {
    margin-top:20px;
    margin-bottom:20px;
    text-align: center;
}
img{
    border: 1px solid #2787F4;
    border-radius: 50%;
    width: 150px;
    height: 150px;
}
.image {
    padding: 20px;
}
.name{
    font-size: 28px;
    font-weight: bold;
    color:#292C2E
}
</style>

<script>
export default {
  name: "InfoCustomer",
  props: {
    name: String,
  },
};
</script>
