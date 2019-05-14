'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('TerminatingSipDomain', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var trunkSid = 'TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/TerminatingSipDomains/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'auth_type': 'IP_ACL',
          'date_created': '2015-07-20T17:27:10Z',
          'date_updated': '2015-10-09T11:36:32Z',
          'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
          'friendly_name': 'Scranton Office',
          'sip_registration': true,
          'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_status_callback_method': 'POST',
          'voice_status_callback_url': null,
          'voice_url': 'https://demo.twilio.com/welcome/voice/',
          'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'sip_domain': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var trunkSid = 'TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/TerminatingSipDomains/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {sipDomainSid: 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var trunkSid = 'TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/TerminatingSipDomains`;

      var values = {SipDomainSid: 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'auth_type': 'IP_ACL',
          'date_created': '2015-07-20T17:27:10Z',
          'date_updated': '2015-10-09T11:36:32Z',
          'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
          'friendly_name': 'Scranton Office',
          'sip_registration': true,
          'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_status_callback_method': 'POST',
          'voice_status_callback_url': null,
          'voice_url': 'https://demo.twilio.com/welcome/voice/',
          'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'sip_domain': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {sipDomainSid: 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0',
              'key': 'sip_domains',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0'
          },
          'sip_domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': 'IP_ACL',
                  'date_created': '2015-07-20T17:27:10Z',
                  'date_updated': '2015-10-09T11:36:32Z',
                  'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://demo.twilio.com/welcome/voice/',
                  'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'sip_domain': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  }
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .terminatingSipDomains.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0',
              'key': 'sip_domains',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0'
          },
          'sip_domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': 'IP_ACL',
                  'date_created': '2015-07-20T17:27:10Z',
                  'date_updated': '2015-10-09T11:36:32Z',
                  'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://demo.twilio.com/welcome/voice/',
                  'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'sip_domain': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  }
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .terminatingSipDomains.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://trunking.twilio.com/v1/Trunks/${trunkSid}/TerminatingSipDomains',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0',
              'key': 'sip_domains',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0'
          },
          'sip_domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': 'IP_ACL',
                  'date_created': '2015-07-20T17:27:10Z',
                  'date_updated': '2015-10-09T11:36:32Z',
                  'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://demo.twilio.com/welcome/voice/',
                  'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'sip_domain': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  }
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .terminatingSipDomains.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var trunkSid = 'TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/TerminatingSipDomains`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0',
              'key': 'sip_domains',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0'
          },
          'sip_domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': 'IP_ACL',
                  'date_created': '2015-07-20T17:27:10Z',
                  'date_updated': '2015-10-09T11:36:32Z',
                  'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://demo.twilio.com/welcome/voice/',
                  'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'sip_domain': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  }
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0',
              'key': 'sip_domains',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TerminatingSipDomains?PageSize=50&Page=0'
          },
          'sip_domains': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .terminatingSipDomains.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
