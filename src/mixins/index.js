export default {
  methods: {
    GET (api, callback) {
      var stream = weex.requireModule('stream');
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://nei.netease.com/api/apimock/33dc0f669975cc6460ced05b39a845b4'+api,
      }, callback)

    },
    POST (api,options={}, callback) {
      var stream = weex.requireModule('stream');
      return stream.fetch({
        method: 'POST',
        type: 'json',
        body: JSON.stringify(options),
        url: 'https://nei.netease.com/api/apimock/33dc0f669975cc6460ced05b39a845b4'+api,
      }, callback)

    }

  }
}
