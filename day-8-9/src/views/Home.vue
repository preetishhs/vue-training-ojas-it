<template>
  <div class="home">
    <h3>Home Page: {{ $t('msg1') }}</h3>
    <br /><br />
    Page Visits: {{ $n(form.num) }} <br />

    Day Earning: {{ $n(1000, 'currency') }} <br />

    Page Size: {{ $n(form.pageSize, 'usageSize') }} <br />
    Date Created: {{ $d(form.created, 'shortDate') }} <br />
    Last Logged In: {{ $d(form.lastLogged, 'longDate') }} <br />
    Last Logged In Time: {{ $d(form.lastLogged, 'time') }} <br />
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      form: {
        num: 100000,
        DayEarning: 150,
        pageSize: 180,
        created: new Date('2010-05-20T09:30:30'), // YYYY-MM-DD
        lastLogged: new Date('2021-04-29T14:20:20'),
      },
    }
  },
  i18n: {
    messages: {
      en: {
        msg1: 'Hello',
      },
      fr: {
        msg1: 'Bonjour',
      },
    },
  },
}
</script>
