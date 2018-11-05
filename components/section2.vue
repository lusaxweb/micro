<template>
  <section
    id="section-2"
    class="sections section--2">
    <ul class="ul-sec-2">
      <li
        v-for="(item, index) in titles"
        :key="index"
        :class="{'is-active': itemActive == index}"
        @click="changeItem(index)">
        <h4>{{ item.title }}</h4>
      </li>
    </ul>

    <div
      class="con-contents">
      <div
        v-if="itemActive == 0"
        ref="contents"
        class="content content--0">
        <div
          v-for="(item, index) in items"
          :key="index"
          :id="[`item-${index}`]"
          class="item-content">
          <h3> {{ item.title }} </h3>
          <img
            src="~/static/startup.jpg"
            alt="startup">
          <p> {{ item.text }} </p>
        </div>
      </div>

      <div
        v-if="itemActive == 1"
        ref="contents"
        class="content content-text-img">
        <div class="content--con-img">
          <img
            src="~/static/coin3.png"
            alt="coin">
        </div>
        <div class="content--con-text">
          <h3>What is MIC Token?</h3>
          <p>
            MIC TOKEN is designed to enable platform users to realize value through innovative revenue generation based on fairness and transparency.

            The total amount of issues is 2 billion, and the initial issue price is $0.02. After the exchange is listed, the value of the MIC will change according to the market value judgment.

            MIC can be traded in BRL/BTC/USDT markets on MICRO exchanges.
          </p>
          <button class="btn">Detail</button>
        </div>
      </div>
      <div
        v-if="itemActive == 2"
        ref="contents"
        class="content chart1x">
        <div class="con-chartx">
          <chart1 :datax="[70,15,10,5]"/>
        </div>
        <p>
          Part of Mining 50%

          It is paid to users by the 'trade mining' platform mechanism.

          Part of Freezing 38%

          distribution to the Founding Team and Partner Marketing.

          Part of Initial Release 12%

          Used for Token Sale, Pre-Event, Air-Drop, etc.

        </p>
        <div class="con-chartx">
          <chart1 :datax="[50,20,10,10,10]"/>
        </div>

        <div class="con-table">
          <table>
            <thead>
              <tr>
                <th>
                  name
                </th>
                <th>
                  Number
                </th>
                <th>
                  Percent
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Trading mining
                </td>
                <td>
                  1,000,000,000
                </td>
                <td>
                  50%
                </td>
              </tr>
              <tr>
                <td>
                  Foundation Team
                </td>
                <td>
                  4,000,000,00
                </td>
                <td>
                  20%
                </td>
              </tr>
              <tr>
                <td>
                  Marketing
                </td>
                <td>
                  2,000,000,00
                </td>
                <td>
                  10%
                </td>
              </tr>
              <tr>
                <td>
                  Partner & Advisor
                </td>
                <td>
                  160,000,000
                </td>
                <td>
                  8%
                </td>
              </tr>
              <tr>
                <td>
                  Token sale
                </td>
                <td>
                  200,000,000
                </td>
                <td>
                  10%
                </td>
              </tr>
              <tr>
                <td>
                  Referral
                </td>
                <td>
                  20,000,000
                </td>
                <td>
                  1%
                </td>
              </tr>
              <tr>
                <td>
                  Bounty
                </td>
                <td>
                  20,000,000
                </td>
                <td>
                  1%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        v-if="itemActive == 3"
        ref="contents"
        class="content chart1x">
        <div class="con-chartx">
          <chart1
            key="chart5050"
            :datax="[50,50]"/>
        </div>
        <p>
          Daily dividend to MIC holders of 50% of commission revenue on the exchange.
          <br>
          <br>
          MIC Token Buy-Back and incineration as 50% of commission revenue on the exchange.
          <br>
          <br>

          The user can set the MIC Token retention type in a Stake or Un-Stake fashion.
          <br>
          <br>

          If the user has a token in Stake format, the user can receive a daily dividend of 50% of the daily transaction revenue, but will have the token non-tradeable.
          <br>
          <br>

          If the user owns the token in the Un-Stake format, the user cannot receive a dividend, but the token can be traded.
          <br>
          <br>

          Switching the status of the token to Stake or Un-Stake takes 24 hours after the application and marks it as Pending. A total of five slots allow you to Pending and can change it in the Pending state. but, the change will take another 24 hours.

        </p>
      </div>
      <div
        v-if="itemActive == 4"
        ref="contents"
        class="content">

        <h4>TOKEN SALE</h4>

        <p>
          MIC is issued a total of 2 billion in ERC20 and maintains a circulation of less than 12% in order to achieve healthy value increases before listing. Only 10% of the total is sold through a single cloud sale without private or institutional sale.
        </p>

        <ul class="ulx-token">
          <li>
            <h4>Token Sale</h4>
            <p>Nov 1 - 2018 - Nov 25 - 2018</p>
          </li>
          <li>
            <h4>Token Sale</h4>
            <p>Nov 1 - 2018 - Nov 25 - 2018</p>
          </li>
          <li>
            <h4>Token Sale</h4>
            <p>Nov 1 - 2018 - Nov 25 - 2018</p>
          </li>
          <li>
            <h4>Token Sale</h4>
            <p>Nov 1 - 2018 - Nov 25 - 2018</p>
          </li>
          <li>
            <h4>Token Sale</h4>
            <p>Nov 1 - 2018 - Nov 25 - 2018</p>
          </li>
          <li>
            <h4>Token Sale</h4>
            <p>Nov 1 - 2018 - Nov 25 - 2018</p>
          </li>
        </ul>

        <div class="con-percent">
          <div class="percent">
            <div class="value">
              42% 8,569 MIC
            </div>
          </div>
        </div>

        <button class="btn">Join Token Sale</button>

      </div>
      <div
        v-if="itemActive == 5"
        ref="contents"
        class="content">

        <h4>Bounty Program</h4>

        <p>
          Join the MIC Token Reward 20 million program and you will receive a shipment in order of arrival.
        </p>

        <ul class="svgs">
          <li>
            <img
              src="~/static/svg/001-chat.svg"
              alt="img">
          </li>
          <li>
            <img
              src="~/static/svg/001-chat.svg"
              alt="img">
          </li>
          <li>
            <img
              src="~/static/svg/001-chat.svg"
              alt="img">
          </li>
          <li>
            <img
              src="~/static/svg/001-chat.svg"
              alt="img">
          </li>
          <li>
            <img
              src="~/static/svg/001-chat.svg"
              alt="img">
          </li>
          <li>
            <img
              src="~/static/svg/001-chat.svg"
              alt="img">
          </li>
        </ul>

        <div class="con-percent">
          <div class="percent">
            <div class="value">
              42% 8,569 MIC
            </div>
          </div>
        </div>

        <button class="btn">See More</button>
      </div>
    </div>
  </section>
</template>
<script>
import chart1 from './chart1.js'
export default {
  components:{
    chart1
  },
  data: () => ({
    itemActive: 0,
    notEffect: false,
    titles: [
      {
        title: 'FEATURES PLATFORM',
      },
      {
        title: 'MICRO TOKEN',
      },
      {
        title: 'TOKEN DESCRIPTION',
      },
      {
        title: 'DISTRIBUTION',
      },
      {
        title: 'TOKEN SALE',
      },
      {
        title: 'BOUNTY PROGRAM',
      }
    ],
    items: [
      {
        title: 'Profit distribution',
        text: 'MIC Holder can receive a dividend on a daily basis, translating 50% of the transaction fee revenue into a share held against the volume of distribution.'
      },
      {
        title: 'Buy Back & Incineration',
        text: 'MIC Token buy-back permanently incinerates 50% of the transaction fee revenue every month to resolve sustainability and increase value'
      },
      {
        title: 'Trading Mining',
        text: 'The most advanced training MICToken Reward program enables all participants to generate innovative revenue and increase value.'
      },
      {
        title: 'Global Standard Platform',
        text: 'With Ultra-lean Design, we have developed 34 upper-coin wallets per second and processed 1 million transactions per second.'
      },
      {
        title: '24 Hours Multilingual Customer Support',
        text: 'Leverage the selected zenddesk on the global exchange to support multi-lingual, 24x7 multilingual e-mail and real-time chat support..'
      },
      {
        title: 'Introducing the Stake-Unstake system',
        text: 'Users can set the holding type of MICRO token to receive dividends from the exchange or to seek revenue from the transaction.'
      }
    ]
  }),
  methods: {
    changeItem (index) {
      this.itemActive = index
    },
  }
}
</script>
<style lang="stylus">
@require '../styles/main.styl'

.con-table
  width 100%
  margin-top 30px
  margin-bottom 50px
  table
    width 100%
    max-width 500px
    margin auto
    border 1px solid colorx(primary, .2)
    tr
      border-bottom 1px solid colorx(primary, .2)
    th
      text-align left
      padding 5px
    td
      padding 5px

.svgs
  width 100%
  display flex
  align-items center
  justify-content center
  li
    width 50px
    height 50px
    border 1px solid colorx(primary, .2)
    margin 10px

.con-percent
  width calc(100% - 20px)
  max-width 500px
  margin auto
  margin-top 40px
  .percent
    border 1px solid colorx(primary, .2)
    width 100%
    height 20px
    text-align right

    .value
      width 42%
      background colorx(primary, .2)
      padding-right 10px
      font-size .7rem
      height 100%
      display flex
      align-items center
      justify-content flex-end

.ulx-token
  width 100%
  margin auto
  max-width 500px
  display flex
  align-items center
  justify-content flex-start
  flex-wrap wrap
  margin-top 30px
  li
    width 50%
    padding 10px
    display flex
    flex-direction column
    h4
      font-weight normal
      padding 5px 0px
    p
      color colorx(primary,.7)
      font-size .8rem\


.chart1x
  p
    padding 20px
    font-size .8rem
    margin auto
    margin-top 20px
    margin-bottom 20px
    max-width 500px
.con-chartx
  width 50%
  margin auto
  margin-top 30px
  max-width 400px

.btn
  margin-left 20px
  padding 10px 30px
  border-radius 20px
  border 1px solid colorx(primary)
  background transparent
  margin-top 10px
  transition all .25s ease
  margin-top 20px
  &:hover
    background colorx(primary)

.content-text-img
  display flex
  align-items center
  justify-content center

.content--con-img
  width 40%
  padding 20px
  display flex
  align-items center
  justify-content center
  img
    width 80% !important


.content--con-text
  width 60%
  padding 20px
  padding-right 30px
  h3
    font-size 1.5rem
    font-weight normal
  p
    font-size .9rem

.section--2
  width 100%
  height 100vh
  padding-top 48px
  padding-bottom 49px
  display flex
  align-items center
  justify-content center
  .con-contents
    width 70%
    height 100%
    position relative
    .content
      width 100%
      margin auto
      border-left 1px solid colorx(primary, .1)
      border-right 1px solid colorx(primary, .1)
      height 100%
      overflow auto
      position relative
      h4,h3
        padding 10px 20px
        margin-top 40px
      p
        padding 10px 20px
        font-size .8rem
      &.content--0
        max-width 700px
      .item-content
        width 100%
        padding 30px 0px
        position relative
        p
          padding 10px
          font-size .9rem
        h3
          padding 10px
          padding-left 15px
          color colorx(primary, 1)
          font-weight normal
          position relative
          &:after
            content ''
            left 0px
            top 50%
            width 10px
            height 1px
            background colorx(primary, 1)
            position absolute
      img
        width 100%
  .ul-sec-2
    position relative
    width 30%
    height 100%
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 33% 33%;
    min-width 450px
    li
      border 1px solid colorx(primary, .1)
      display flex
      align-items flex-end
      position relative
      text-align right
      padding 15px
      cursor pointer
      &:after
        opacity 0
        content ''
        left -1px
        top -1px
        width 0px
        height 0px
        background colorx(primary)
        position absolute
        transition all .25s ease
      &:before
        opacity 0
        content ''
        right -1px
        bottom -1px
        width 0px
        height 0px
        background colorx(primary)
        position absolute
        transition all .25s ease
      &.is-active
        background colorx(primary, .1)
        &:after
          opacity 1
          width 7px
          height 7px
        &:before
          width 7px
          height 7px
          opacity 1
        h4
          color colorx(primary)
      h4
        font-weight normal
        text-align right
        width 100%


@media only screen and (max-width: 1200px)
  .section--2
    .ul-sec-2
      width 300px
      min-width 300px
@media only screen and (max-width: 1000px)
  .section--2
    flex-direction column
    .ul-sec-2
      // display block !important
      width 100%
      overflow hidden
      height auto !important
      display flex !important
      align-items center
      justify-content center
      flex-wrap wrap
      li
        width 50%
        display block
        overflow hidden
        h4
          position relative
          display block
    .con-contents
      width 100%
      height calc(100% - 250px)
      .content
        max-width 100%
</style>
