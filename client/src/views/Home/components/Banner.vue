<template>
  <div class="banner-container">
    <div class="inner-banner">
      <div class="img-logo">
        <img src="../../../assets/logo.png" alt="" />
      </div>
      <div class="search-area">
        <div class="innerSearcher">
          <div class="main-search-area">
            <div class="search-brand">
              <Search />
              <div class="high-frequent-goods">
                <ul class="high-frequent-goods-container">
                  <li
                    class="high-item"
                    :key="item.id"
                    v-for="item in state.frequentGoods"
                  >
                    <RouterLink to="/">
                      <span class="hover-base">
                        {{ item.name }}
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cart-container">
              <Cart />
            </div>
          </div>
          <div class="divide-department">
            <ul>
              <li>
                <a href="">京东超市</a>
              </li>
              <li>
                <a href="">优惠券</a>
              </li>
              <li>
                <a href="">秒杀</a>
              </li>
              <li>
                <a href="">每日特价</a>
              </li>
              <li>
                <a href="">京东生鲜</a>
              </li>
              <li>
                <a href="">京东家电</a>
              </li>
              <li>
                <a href="">Plus会员</a>
              </li>
              <li>
                <a href="">拍卖</a>
              </li>
              <li>
                <a href="">进口好物</a>
              </li>
              <li>
                <a href="">京东五金城</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="qr-code">
        <div class="qr-img-container">
          <img src="../../../assets/qrCode.avif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from "./Search.vue";
import Cart from "./Cart.vue";
import { getHighFrequentGoods } from "../../../api/highFrequentKeyGoods";
import { reactive } from "vue";
import { FrequentGoodsResponse } from "../../../types/frequentGoods";

const state = reactive({
  frequentGoods: [] as FrequentGoodsResponse[],
});

(async function () {
  const resp =
    (await getHighFrequentGoods()) as unknown as FrequentGoodsResponse[];
  state.frequentGoods = resp.slice(0, 4);
})();
</script>

<style scope lang="less">
.banner-container {
  width: 100%;
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  .inner-banner {
    min-width: 1200px;
    // background-color: #666;
    display: flex;
    align-items: center;

    .img-logo {
      width: 220px;
      height: 100%;
      box-sizing: border-box;
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .search-area {
      flex: 1;
      height: 100%;
      box-sizing: border-box;
      padding: 5px 10px;

      .innerSearcher {
        width: 100%;
        height: 100%;
        // background-color: #f30;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .main-search-area {
          width: 100%;
          //   height: 80%;
          // background-color: #f40;
          box-sizing: border-box;
          padding: 5px 15px;
          display: flex;
          align-items: center;
          .search-brand {
            flex: 1;
            .high-frequent-goods-container {
              display: flex;
              margin-top: 5px;
              height: 1em;

              li {
                margin-right: 10px;
              }
            }
          }
          .cart-container {
            width: 130px;
            height: 40px;
            box-shadow: 0px 0px 1px #000;
            margin-left: 10px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 5px 8px;
            cursor: pointer;
          }
        }

        .divide-department {
          width: 100%;
          height: 20%;
          //   background-color: #ff0;
          ul {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            li {
              //   flex: 1;
              margin-right: 20px;
              text-align: center;

              a {
                color: #000;
                font-size: 15px;
                &:hover {
                  color: @baseColor;
                }
              }
            }
          }
        }
      }
    }

    .qr-code {
      width: 200px;
      height: 100%;
      display: flex;
      justify-content: center;

      .qr-img-container {
        width: 70px;
        height: 70px;
        background: #fff;
        box-shadow: 0px 0px 5px #666;
        margin-top: 10px;

        img {
          width: 50px;
          height: 50px;
          padding: 10px;
        }
      }
    }
  }
}
</style>
