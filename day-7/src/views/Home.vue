<template>
  <div class="home">
    <h3>Home Page</h3>
    <br />
    {{ $t('msg') }} <br />
    Total Visitors: {{ $n(webData.totalVisitors) }} <br />
    Total Earned:
    {{ $n(webData.totalEarned, 'currency') }} <br />
    Today Earned:
    {{ $n(webData.todayEarned, 'currencyNoDecimals') }} <br />
    Data Used:
    {{ $n(webData.dataUsed, 'digitalSize') }} <br />
    Created Date:
    {{ $d(webData.createdDate, 'basicDate') }} <br />
    Last Logged in:
    {{ $d(webData.createdDate, 'longDateTime') }} <br />
    Local Text: {{ $t('localtext') }}
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      webData: {
        totalVisitors: 100000,
        totalEarned: 150,
        todayEarned: 50,
        dataUsed: 1000,
        createdDate: new Date('2010-07-05'),
        lastLoggedIn: new Date('2021-02-25T09:30:30'),
      },
    }
  },
  i18n: {
    messages: {
      en: {
        localtext: 'Local Text',
      },
      fr: {
        localtext: 'Local txt french',
      },
    },
  },
}
</script>
