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

describe('FaxMedia', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                 .media('MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var faxSid = 'FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://fax.twilio.com/v1/Faxes/${faxSid}/Media/${sid}`;

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
          'content_type': 'application/pdf',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'fax_sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media/MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                 .media('MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'media': [
              {
                  'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fax_sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/pdf',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media/MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0',
              'key': 'media',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                   .media.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'media': [
              {
                  'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fax_sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/pdf',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media/MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0',
              'key': 'media',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                   .media.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://fax.twilio.com/v1/Faxes/${faxSid}/Media',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'media': [
              {
                  'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fax_sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/pdf',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media/MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0',
              'key': 'media',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                   .media.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                 .media.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var faxSid = 'FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://fax.twilio.com/v1/Faxes/${faxSid}/Media`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read response',
    function() {
      var body = JSON.stringify({
          'media': [
              {
                  'sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fax_sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/pdf',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media/MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0',
              'key': 'media',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                 .media.list();
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

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                 .media('MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var faxSid = 'FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://fax.twilio.com/v1/Faxes/${faxSid}/Media/${sid}`;

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

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                 .media('MEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
